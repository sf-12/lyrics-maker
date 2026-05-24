# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the app

```bash
python3 server.py
# → http://localhost:8765
```

No dependencies beyond Python 3 stdlib. No build step, no package manager.

## Architecture

Single-page app with a Python HTTP server and a SQLite database.

**`server.py`** — stdlib-only HTTP server (port 8765). Serves static files and handles all API routes. Two tables: `songs` and `playlists`. On first run, auto-migrates from `songs.json` if present.

**`app.js`** — All frontend logic. State: `songs[]`, `playlists[]`, `selectedId`, `filter`, `search`, `collapsedGroups`. Two render targets: `#song-list` (sidebar) and `#detail` (right panel). Auto-refreshes every 5 seconds via `fetchAll()`, but intentionally skips re-rendering the detail panel to avoid overwriting edits in progress.

**`style.css`** — Dark theme. CSS custom properties in `:root`. Layout is `body > header + .main`, where `.main` is a flex row: fixed-width `.sidebar` (300px) + flex-grow `.detail`.

## API endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/songs` | All songs, ordered by `created_at ASC` |
| GET | `/api/playlists` | All playlists, ordered by `created_at ASC` |
| POST | `/api/songs/add` | Add songs (single object or array) |
| POST | `/api/songs/update` | Update `title`, `lyrics`, `styles`, `playlist_id` |
| POST | `/api/songs/status` | Update `status` (`unused` / `posted`) |
| POST | `/api/songs/delete` | Delete by `id` |
| POST | `/api/playlists/add` | Create playlist — server generates `id` |
| POST | `/api/playlists/rename` | Rename playlist |
| POST | `/api/playlists/delete` | Delete playlist and unassign its songs |

## Adding songs programmatically

When the server is running, POST to `/api/songs/add`:

```python
import urllib.request, json, uuid, datetime

songs = [{
    "id": f"song-{uuid.uuid4().hex[:8]}",
    "created_at": datetime.datetime.utcnow().isoformat() + "Z",
    "title": "タイトル",
    "lyrics": "歌詞テキスト",
    "styles": "j-pop, kawaii, female vocal",
    "language": "ja/en",
    "theme": "テーマ",
    "mood": "ムード",
    "genre": "ジャンル",
    "status": "unused",
    "playlist_id": None
}]

req = urllib.request.Request(
    "http://localhost:8765/api/songs/add",
    data=json.dumps(songs).encode(),
    headers={"Content-Type": "application/json"},
    method="POST"
)
urllib.request.urlopen(req)
```

## Song schema

```
id          TEXT PRIMARY KEY
created_at  TEXT  (ISO 8601)
title       TEXT
lyrics      TEXT
styles      TEXT  (comma-separated Suno style tags)
language    TEXT  (e.g. "ja/en")
theme       TEXT
mood        TEXT
genre       TEXT
status      TEXT  ("unused" | "posted")
playlist_id TEXT  (FK → playlists.id, nullable)
```

