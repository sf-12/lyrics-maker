#!/usr/bin/env python3
import datetime
import http.server
import json
import sqlite3
import uuid
from pathlib import Path

BASE_DIR = Path(__file__).parent
DB_FILE = BASE_DIR / "songs.db"
SONGS_FILE = BASE_DIR / "songs.json"
PORT = 8765


def get_db():
    conn = sqlite3.connect(str(DB_FILE))
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with get_db() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS songs (
                id             TEXT PRIMARY KEY,
                created_at     TEXT,
                title          TEXT,
                lyrics         TEXT,
                styles         TEXT,
                language       TEXT,
                theme          TEXT,
                mood           TEXT,
                genre          TEXT,
                status         TEXT DEFAULT 'unused',
                playlist_id    TEXT,
                sort_order     INTEGER DEFAULT 0,
                request_config TEXT
            )
        """)
        conn.execute("""
            CREATE TABLE IF NOT EXISTS phrases (
                id         TEXT PRIMARY KEY,
                created_at TEXT,
                text       TEXT NOT NULL,
                section    TEXT DEFAULT 'general',
                tags       TEXT,
                status     TEXT DEFAULT 'unused',
                favorited  INTEGER DEFAULT 0,
                note       TEXT
            )
        """)
        conn.execute("""
            CREATE TABLE IF NOT EXISTS playlists (
                id         TEXT PRIMARY KEY,
                name       TEXT NOT NULL,
                created_at TEXT,
                sort_order INTEGER DEFAULT 0
            )
        """)
        for stmt in [
            "ALTER TABLE songs ADD COLUMN playlist_id TEXT",
            "ALTER TABLE songs ADD COLUMN sort_order INTEGER DEFAULT 0",
            "ALTER TABLE playlists ADD COLUMN sort_order INTEGER DEFAULT 0",
            "ALTER TABLE songs ADD COLUMN request_config TEXT",
        ]:
            try:
                conn.execute(stmt)
            except Exception:
                pass
    _migrate_from_json()
    _migrate_sort_orders()


def _migrate_from_json():
    if not SONGS_FILE.exists():
        return
    with get_db() as conn:
        if conn.execute("SELECT COUNT(*) FROM songs").fetchone()[0] > 0:
            return
        songs = json.loads(SONGS_FILE.read_text(encoding="utf-8"))
        if not songs:
            return
        for s in songs:
            conn.execute(
                "INSERT OR IGNORE INTO songs VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                (s.get("id"), s.get("created_at"), s.get("title"), s.get("lyrics"),
                 s.get("styles"), s.get("language"), s.get("theme"), s.get("mood"),
                 s.get("genre"), s.get("status", "unused"), None, 0),
            )
        print(f"  {len(songs)}曲を songs.json から移行しました")


def _migrate_sort_orders():
    with get_db() as conn:
        total_pl = conn.execute("SELECT COUNT(*) FROM playlists").fetchone()[0]
        unset_pl = conn.execute(
            "SELECT COUNT(*) FROM playlists WHERE sort_order = 0 OR sort_order IS NULL"
        ).fetchone()[0]
        if total_pl > 0 and unset_pl == total_pl:
            rows = conn.execute("SELECT id FROM playlists ORDER BY created_at ASC").fetchall()
            for i, row in enumerate(rows):
                conn.execute("UPDATE playlists SET sort_order = ? WHERE id = ?", (i + 1, row["id"]))

        total_s = conn.execute("SELECT COUNT(*) FROM songs").fetchone()[0]
        unset_s = conn.execute(
            "SELECT COUNT(*) FROM songs WHERE sort_order = 0 OR sort_order IS NULL"
        ).fetchone()[0]
        if total_s > 0 and unset_s == total_s:
            groups = conn.execute("SELECT DISTINCT playlist_id FROM songs").fetchall()
            for group in groups:
                pid = group["playlist_id"]
                if pid is None:
                    group_songs = conn.execute(
                        "SELECT id FROM songs WHERE playlist_id IS NULL ORDER BY created_at ASC"
                    ).fetchall()
                else:
                    group_songs = conn.execute(
                        "SELECT id FROM songs WHERE playlist_id = ? ORDER BY created_at ASC", (pid,)
                    ).fetchall()
                for i, row in enumerate(group_songs):
                    conn.execute("UPDATE songs SET sort_order = ? WHERE id = ?", (i + 1, row["id"]))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def do_GET(self):
        if self.path == "/api/songs":
            with get_db() as conn:
                rows = conn.execute(
                    "SELECT * FROM songs ORDER BY sort_order ASC, created_at ASC"
                ).fetchall()
            self._json_response([dict(r) for r in rows])
        elif self.path == "/api/playlists":
            with get_db() as conn:
                rows = conn.execute(
                    "SELECT * FROM playlists ORDER BY sort_order ASC, created_at ASC"
                ).fetchall()
            self._json_response([dict(r) for r in rows])
        elif self.path == "/api/phrases":
            with get_db() as conn:
                rows = conn.execute(
                    "SELECT * FROM phrases ORDER BY created_at DESC"
                ).fetchall()
            self._json_response([dict(r) for r in rows])
        else:
            super().do_GET()

    def do_POST(self):
        length = int(self.headers.get("Content-Length", 0))
        body = json.loads(self.rfile.read(length)) if length else {}

        if self.path == "/api/songs/add":
            items = body if isinstance(body, list) else [body]
            with get_db() as conn:
                for s in items:
                    pid = s.get("playlist_id")
                    if pid is None:
                        row = conn.execute(
                            "SELECT MAX(sort_order) FROM songs WHERE playlist_id IS NULL"
                        ).fetchone()
                    else:
                        row = conn.execute(
                            "SELECT MAX(sort_order) FROM songs WHERE playlist_id = ?", (pid,)
                        ).fetchone()
                    max_order = row[0] or 0
                    sort_order = s.get("sort_order") or (max_order + 1)
                    conn.execute(
                        "INSERT OR REPLACE INTO songs VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
                        (s.get("id"), s.get("created_at"), s.get("title"), s.get("lyrics"),
                         s.get("styles"), s.get("language"), s.get("theme"), s.get("mood"),
                         s.get("genre"), s.get("status", "unused"), pid, sort_order,
                         s.get("request_config")),
                    )
            self._json_response({"ok": True, "count": len(items)})

        elif self.path == "/api/songs/update":
            with get_db() as conn:
                for field in ("title", "lyrics", "styles", "playlist_id", "request_config"):
                    if field in body:
                        conn.execute(
                            f"UPDATE songs SET {field} = ? WHERE id = ?",
                            (body[field], body["id"]),
                        )
            self._json_response({"ok": True})

        elif self.path == "/api/songs/reorder":
            updates = body.get("updates", [])
            with get_db() as conn:
                for u in updates:
                    sets, vals = [], []
                    if "sort_order" in u:
                        sets.append("sort_order = ?"); vals.append(u["sort_order"])
                    if "playlist_id" in u:
                        sets.append("playlist_id = ?"); vals.append(u["playlist_id"])
                    if sets:
                        vals.append(u["id"])
                        conn.execute(f"UPDATE songs SET {', '.join(sets)} WHERE id = ?", vals)
            self._json_response({"ok": True})

        elif self.path == "/api/songs/status":
            with get_db() as conn:
                conn.execute(
                    "UPDATE songs SET status = ? WHERE id = ?",
                    (body["status"], body["id"]),
                )
            self._json_response({"ok": True})

        elif self.path == "/api/songs/delete":
            with get_db() as conn:
                conn.execute("DELETE FROM songs WHERE id = ?", (body["id"],))
            self._json_response({"ok": True})

        elif self.path == "/api/phrases/add":
            items = body if isinstance(body, list) else [body]
            with get_db() as conn:
                for p in items:
                    conn.execute(
                        "INSERT OR REPLACE INTO phrases VALUES (?,?,?,?,?,?,?,?)",
                        (p.get("id"), p.get("created_at"), p.get("text", ""),
                         p.get("section", "general"), p.get("tags"),
                         p.get("status", "unused"), p.get("favorited", 0),
                         p.get("note")),
                    )
            self._json_response({"ok": True, "count": len(items)})

        elif self.path == "/api/phrases/update":
            with get_db() as conn:
                for field in ("text", "section", "tags", "note"):
                    if field in body:
                        conn.execute(f"UPDATE phrases SET {field} = ? WHERE id = ?",
                            (body[field], body["id"]))
            self._json_response({"ok": True})

        elif self.path == "/api/phrases/status":
            with get_db() as conn:
                conn.execute("UPDATE phrases SET status = ? WHERE id = ?",
                    (body["status"], body["id"]))
            self._json_response({"ok": True})

        elif self.path == "/api/phrases/favorite":
            with get_db() as conn:
                conn.execute("UPDATE phrases SET favorited = ? WHERE id = ?",
                    (body["favorited"], body["id"]))
            self._json_response({"ok": True})

        elif self.path == "/api/phrases/delete":
            with get_db() as conn:
                conn.execute("DELETE FROM phrases WHERE id = ?", (body["id"],))
            self._json_response({"ok": True})

        elif self.path == "/api/playlists/add":
            name = body.get("name", "").strip()
            if not name:
                self._json_response({"ok": False}); return
            pl_id = "pl-" + uuid.uuid4().hex[:8]
            now = datetime.datetime.utcnow().isoformat() + "Z"
            with get_db() as conn:
                row = conn.execute("SELECT MAX(sort_order) FROM playlists").fetchone()
                sort_order = (row[0] or 0) + 1
                conn.execute(
                    "INSERT INTO playlists VALUES (?,?,?,?)",
                    (pl_id, name, now, sort_order),
                )
            self._json_response({"ok": True, "playlist": {"id": pl_id, "name": name, "created_at": now, "sort_order": sort_order}})

        elif self.path == "/api/playlists/rename":
            pl_id = body.get("id")
            name = body.get("name", "").strip()
            if name:
                with get_db() as conn:
                    conn.execute("UPDATE playlists SET name = ? WHERE id = ?", (name, pl_id))
            self._json_response({"ok": bool(name)})

        elif self.path == "/api/playlists/reorder":
            updates = body.get("updates", [])
            with get_db() as conn:
                for u in updates:
                    conn.execute(
                        "UPDATE playlists SET sort_order = ? WHERE id = ?",
                        (u["sort_order"], u["id"]),
                    )
            self._json_response({"ok": True})

        elif self.path == "/api/playlists/delete":
            pl_id = body.get("id")
            with get_db() as conn:
                conn.execute("UPDATE songs SET playlist_id = NULL WHERE playlist_id = ?", (pl_id,))
                conn.execute("DELETE FROM playlists WHERE id = ?", (pl_id,))
            self._json_response({"ok": True})

        else:
            self.send_response(404)
            self.end_headers()

    def _json_response(self, data):
        payload = json.dumps(data, ensure_ascii=False).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", len(payload))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(payload)

    def log_message(self, fmt, *args):
        pass


if __name__ == "__main__":
    init_db()
    print(f"🎵 Lyrics Maker → http://localhost:{PORT}")
    print("Ctrl+C で停止")
    with http.server.HTTPServer(("", PORT), Handler) as httpd:
        httpd.serve_forever()
