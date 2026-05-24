# Lyrics Maker

Suno 向け歌詞・楽曲のローカル管理ツール。作曲依頼プロンプトの生成、歌詞の編集、投稿状況の追跡、プレイリスト管理をブラウザ上で行えます。

## スクリーンショット

> `config-bar.png` / `mood-genre-tags.png` など同梱の画像を参照

## 機能

- **曲管理** — タイトル・歌詞・スタイルの閲覧・編集、未使用/投稿済みのステータス管理
- **プレイリスト** — 曲をグループ化してドラッグ&ドロップで並び替え
- **作曲依頼文生成** — テーマ・ムード・ジャンル・言語バランス・曲構成を指定してプロンプトを自動生成
- **フレーズ管理** — 使いたいフレーズをストック、AI 生成・お気に入り・使用済み管理
- **統計表示** — 全曲数 / 未使用数 / 投稿済み数をヘッダーに表示
- **5 秒ごとの自動同期** — 複数タブや外部 POST に対応

## 起動方法

依存ライブラリ不要。Python 3 標準ライブラリのみ使用。

```bash
cd lyrics-maker
python3 server.py
# → http://localhost:8765
```

## 技術構成

| ファイル | 役割 |
|----------|------|
| `server.py` | stdlib のみの HTTP サーバー（ポート 8765）。静的ファイル配信 + REST API |
| `app.js` | フロントエンドの全ロジック（状態管理・レンダリング・API 通信） |
| `index.html` | シングルページ UI |
| `style.css` | ダークテーマ。CSS カスタムプロパティ使用 |
| `songs.db` | SQLite データベース（自動生成） |
| `suno_style_templates_50.csv` | スタイルテンプレート定義 |
| `lyrics-guide.md` | 作詞の参考ガイド（必要時のみ参照） |

初回起動時に `songs.json` が存在すれば自動マイグレーションします。

## API

| Method | Path | 説明 |
|--------|------|------|
| GET | `/api/songs` | 全曲一覧（created_at 昇順） |
| GET | `/api/playlists` | 全プレイリスト |
| POST | `/api/songs/add` | 曲を追加（単体またはリスト） |
| POST | `/api/songs/update` | `title` / `lyrics` / `styles` / `playlist_id` を更新 |
| POST | `/api/songs/status` | `status` を更新（`unused` / `posted`） |
| POST | `/api/songs/delete` | ID 指定で削除 |
| POST | `/api/playlists/add` | プレイリスト作成（ID はサーバーが生成） |
| POST | `/api/playlists/rename` | プレイリスト名変更 |
| POST | `/api/playlists/delete` | プレイリスト削除（曲は未分類に移動） |

## プログラムから曲を追加する

サーバー起動中に `/api/songs/add` へ POST すれば直接登録できます（Claude Code との連携を想定）。

```python
import urllib.request, json, uuid, datetime

songs = [{
    "id": f"song-{uuid.uuid4().hex[:8]}",
    "created_at": datetime.datetime.utcnow().isoformat() + "Z",
    "title": "English Title / 日本語タイトル / 한국어 타이틀 / 中文标题",
    "lyrics": "[Verse 1]\n歌詞テキスト...",
    "styles": "j-pop, kawaii, female vocal, edm, ...",
    "language": "ja/en",
    "theme": "テーマ",
    "mood": "ムード",
    "genre": "EDM",
    "status": "unused",
    "playlist_id": None,
    "request_config": json.dumps({ ... })  # 依頼時のパラメータ（任意）
}]

req = urllib.request.Request(
    "http://localhost:8765/api/songs/add",
    data=json.dumps(songs).encode(),
    headers={"Content-Type": "application/json"},
    method="POST"
)
urllib.request.urlopen(req)
```

## データスキーマ

```
songs
├── id           TEXT  PRIMARY KEY  （例: "song-abc12345"）
├── created_at   TEXT  ISO 8601
├── title        TEXT  （例: "Shadow Halo / シャドウヘイロー / 쉐도우 헤일로 / 影光环"）
├── lyrics       TEXT
├── styles       TEXT  カンマ区切りの Suno スタイルタグ
├── language     TEXT  （例: "ja/en"）
├── theme        TEXT
├── mood         TEXT
├── genre        TEXT
├── status       TEXT  "unused" | "posted"
├── playlist_id  TEXT  FK → playlists.id（nullable）
├── sort_order   INT
└── request_config TEXT  JSON 文字列（作曲依頼パラメータ）

playlists
├── id         TEXT  PRIMARY KEY
├── name       TEXT
├── created_at TEXT
└── sort_order INT

phrases
├── id         TEXT  PRIMARY KEY
├── created_at TEXT
├── text       TEXT
├── section    TEXT  （例: "chorus", "general"）
├── tags       TEXT
├── status     TEXT  "unused" | "used"
├── favorited  INT   0 | 1
└── note       TEXT
```

## 運用メモ

- **曲タイトルの形式**: `English / 日本語 / 한국어 / 中文` の4言語を `/` 区切りで記載
- **漢字の読み仮名**: Suno の誤読み対策として、歌詞中の漢字には `漢字（よみ）` 形式でカタカナ読みを付ける（例: `夜（よる）`）
- **歌詞文字数**: Suno の制限に合わせ 3000 文字以内に収める
- **作詞コツ**: `lyrics-guide.md` を参照（`CLAUDE.md` には記載しない）
