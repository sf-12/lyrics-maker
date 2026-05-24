const STYLE_TEMPLATES = [
  { name: '和風かわいいJ-POP標準', styles: 'j-pop, kawaii, sweet, cute female vocal, soft bright voice, wagakki, shamisen, koto, taiko, japanese traditional, modern japanese pop, catchy chorus, playful melody, sparkling, heartwarming, romantic, gentle, clean mix, upbeat, no intro, no outro' },
  { name: '巫女・神社フェスティブ', styles: 'j-pop, kawaii, sweet romantic, cute female vocal, soft breathy voice, wagakki, shamisen, koto, taiko, japanese traditional, miko, shrine, shrine maiden dance, festive, elegant, playful, sparkling, enchanting, vibrant, catchy chorus, no intro, no outro' },
  { name: '猫モチーフ甘かわ和風', styles: 'j-pop, kawaii, sweet, cute female vocal, soft playful voice, wagakki, shamisen, koto, light taiko, japanese traditional, neko, cozy, romantic, purring cute mood, playful melody, heartwarming, catchy chorus, sparkling, no intro, no outro' },
  { name: '作業用BGM寄りやさしい和風', styles: 'soft j-pop, kawaii, gentle female vocal, soothing voice, wagakki, shamisen, koto, soft taiko, japanese traditional, japanese fantasy, warm, calm, dreamy, heartwarming, elegant, relaxing, melodic, clean mix, not too dramatic, no intro, no outro' },
  { name: '中毒性フック強め', styles: 'j-pop, kawaii, sweet, cute female vocal, wagakki, shamisen, koto, taiko, japanese traditional, catchy hook, vocal stutter hook, repeated syllables, playful chorus, sparkling melody, upbeat, festive, romantic, vibrant, no intro, no outro' },
  { name: '春の桜ポップ', styles: 'j-pop, kawaii, sweet, female vocal, soft bright voice, wagakki, shamisen, koto, light taiko, japanese traditional, sakura, spring, fresh, airy, sparkling, romantic, heartwarming, catchy chorus, clean mix, no intro, no outro' },
  { name: '夏祭りポップ', styles: 'upbeat j-pop, kawaii, cute female vocal, wagakki, shamisen, koto, taiko, japanese festival, matsuri, bright, playful, energetic, sparkling, catchy chorus, handclaps, festive, vibrant, clean mix, no intro, no outro' },
  { name: '秋の月夜バラード寄り', styles: 'soft j-pop, sweet female vocal, emotional but gentle, wagakki, shamisen, koto, soft taiko, japanese traditional, autumn night, moonlight, elegant, wistful, romantic, warm, melodic, clean mix, no intro, no outro' },
  { name: '冬の雪景色しっとり', styles: 'soft j-pop, gentle female vocal, warm breathy voice, wagakki, shamisen, koto, subtle taiko, japanese traditional, winter, snow, dreamy, tender, romantic, calm, elegant, clean mix, no intro, no outro' },
  { name: '和風ファンタジー王道', styles: 'j-pop, japanese fantasy, kawaii, female vocal, wagakki, shamisen, koto, taiko, traditional japanese, magical, enchanting, sparkling, emotional, adventurous, catchy chorus, cinematic but not dramatic, clean mix, no intro, no outro' },
  { name: 'ローファイ和風ポップ', styles: 'lofi j-pop, kawaii, soft female vocal, gentle voice, wagakki, shamisen, koto, soft percussion, japanese traditional, chill, cozy, warm, relaxing, mellow beat, dreamy, clean soft mix, no intro, no outro' },
  { name: 'エレクトロ和風ポップ', styles: 'electro j-pop, kawaii, cute female vocal, wagakki, shamisen, koto, taiko, electronic pop, synth bass, sparkling synths, japanese traditional fusion, catchy hook, upbeat, playful, clean mix, no intro, no outro' },
  { name: 'アニメOP風和風', styles: 'anime opening, j-pop, kawaii, powerful cute female vocal, wagakki, shamisen, koto, taiko, japanese traditional fusion, energetic, bright, catchy chorus, dramatic melody, sparkling, vibrant, clean mix, no intro, no outro' },
  { name: 'アニメED風しっとり和風', styles: 'anime ending, soft j-pop, gentle female vocal, wagakki, shamisen, koto, soft taiko, japanese traditional, tender, nostalgic, romantic, warm, melodic, dreamy, clean mix, no intro, no outro' },
  { name: 'アイドル風和風', styles: 'idol j-pop, kawaii, cute female vocal, bright voice, wagakki, shamisen, koto, taiko, japanese traditional fusion, cheerful, bubbly, catchy chorus, call and response feeling, sparkling, upbeat, clean mix, no intro, no outro' },
  { name: '電波ソング寄り和風かわいい', styles: 'denpa j-pop, kawaii, cute female vocal, playful high energy, wagakki, shamisen, koto, taiko, japanese traditional fusion, quirky, repeated syllables, catchy hook, sparkling, upbeat, clean mix, no intro, no outro' },
  { name: 'キラキラ恋愛ポップ', styles: 'j-pop, kawaii, sweet romantic, cute female vocal, soft bright voice, wagakki, shamisen, koto, light taiko, japanese traditional, sparkling, tender, bashful love song, catchy chorus, heartwarming, clean mix, no intro, no outro' },
  { name: '少し大人っぽい和風恋愛', styles: 'j-pop, elegant, romantic, smooth female vocal, soft breathy voice, wagakki, shamisen, koto, taiko, japanese traditional, refined, enchanting, warm, graceful, melodic, clean mix, no intro, no outro' },
  { name: '透明感のある和風', styles: 'j-pop, ethereal female vocal, clear voice, wagakki, shamisen, koto, soft taiko, japanese traditional, transparent, airy, dreamy, elegant, gentle, sparkling, clean mix, no intro, no outro' },
  { name: '元気な神社ダンス', styles: 'upbeat j-pop, kawaii, cute female vocal, wagakki, shamisen, koto, taiko, japanese traditional, miko, shrine dance, festive, playful, rhythmic, vibrant, catchy chorus, clean mix, no intro, no outro' },
  { name: '太鼓強め祭りサウンド', styles: 'festival j-pop, energetic female vocal, wagakki, shamisen, koto, strong taiko, japanese traditional, matsuri, rhythmic, powerful but cute, vibrant, catchy chorus, clean mix, no intro, no outro' },
  { name: '琴メイン上品ポップ', styles: 'j-pop, kawaii, elegant female vocal, wagakki, koto lead, shamisen, soft taiko, japanese traditional, graceful, sweet, romantic, delicate, sparkling, clean mix, catchy chorus, no intro, no outro' },
  { name: '三味線メイン軽快ポップ', styles: 'j-pop, cute female vocal, shamisen lead, wagakki, koto, light taiko, japanese traditional fusion, lively, playful, rhythmic, sweet, catchy chorus, sparkling, clean mix, no intro, no outro' },
  { name: '笛入り幻想和風', styles: 'j-pop, japanese fantasy, female vocal, wagakki, shamisen, koto, taiko, shakuhachi, shinobue, traditional japanese, dreamy, mystical, elegant, enchanting, melodic, clean mix, no intro, no outro' },
  { name: '和風シティポップ', styles: 'city pop, j-pop, smooth female vocal, wagakki, shamisen, koto, light taiko, japanese traditional fusion, groovy, stylish, sweet, romantic, mellow, clean mix, catchy chorus, no intro, no outro' },
  { name: '和風ディスコポップ', styles: 'disco j-pop, kawaii, bright female vocal, wagakki, shamisen, koto, taiko, japanese traditional fusion, groovy bass, danceable, sparkling, festive, catchy chorus, clean mix, no intro, no outro' },
  { name: '和風Future Bass', styles: 'future bass, j-pop, kawaii, cute female vocal, wagakki, shamisen, koto, taiko, japanese traditional fusion, bright drops, sparkling synths, sweet, energetic, catchy hook, clean mix, no intro, no outro' },
  { name: '和風EDMポップ', styles: 'edm pop, j-pop, cute female vocal, wagakki, shamisen, koto, taiko, japanese traditional fusion, energetic, festival drop, vibrant, sparkling, catchy chorus, clean mix, no intro, no outro' },
  { name: '和風アコースティック', styles: 'acoustic j-pop, gentle female vocal, wagakki, shamisen, koto, soft taiko, japanese traditional, warm, intimate, tender, romantic, natural, clean mix, no intro, no outro' },
  { name: '和風バラード', styles: 'j-pop ballad, emotional female vocal, wagakki, shamisen, koto, soft taiko, japanese traditional, tender, romantic, graceful, warm, melodic, clean mix, no intro, no outro' },
  { name: 'ゆめかわ和風', styles: 'dreamy j-pop, kawaii, sweet female vocal, wagakki, shamisen, koto, light taiko, japanese traditional, pastel, magical, airy, sparkling, soft, heartwarming, clean mix, no intro, no outro' },
  { name: '妖狐・不思議系和風', styles: 'j-pop, mystical kawaii, female vocal, wagakki, shamisen, koto, taiko, japanese traditional, kitsune, shrine, mysterious, playful, enchanting, sparkling, catchy chorus, clean mix, no intro, no outro' },
  { name: 'お守り・願い事テーマ向け', styles: 'j-pop, kawaii, gentle female vocal, wagakki, shamisen, koto, soft taiko, japanese traditional, shrine, omamori, wishful, heartwarming, tender, sparkling, romantic, clean mix, no intro, no outro' },
  { name: '雨の神社しっとり', styles: 'soft j-pop, gentle female vocal, wagakki, shamisen, koto, subtle taiko, japanese traditional, rainy shrine, calm, melancholic but sweet, dreamy, romantic, elegant, clean mix, no intro, no outro' },
  { name: '夜祭り幻想ポップ', styles: 'j-pop, female vocal, wagakki, shamisen, koto, taiko, japanese traditional, night festival, lanterns, mystical, romantic, festive, sparkling, enchanting, catchy chorus, clean mix, no intro, no outro' },
  { name: '朝の神社さわやか', styles: 'fresh j-pop, kawaii, bright female vocal, wagakki, shamisen, koto, light taiko, japanese traditional, morning shrine, clean, airy, uplifting, heartwarming, sweet, catchy chorus, no intro, no outro' },
  { name: 'ほっこり日常和風', styles: 'soft j-pop, kawaii, gentle female vocal, wagakki, shamisen, koto, soft taiko, japanese traditional, cozy daily life, warm, heartwarming, playful, tender, relaxing, clean mix, no intro, no outro' },
  { name: '可愛いコミカル和風', styles: 'comedic j-pop, kawaii, cute female vocal, wagakki, shamisen, koto, taiko, japanese traditional fusion, playful, quirky, bouncy, catchy hook, lighthearted, sparkling, clean mix, no intro, no outro' },
  { name: '切なかわいい和風', styles: 'bittersweet j-pop, kawaii, tender female vocal, wagakki, shamisen, koto, soft taiko, japanese traditional, sweet but wistful, romantic, emotional, dreamy, clean mix, no intro, no outro' },
  { name: '癒し系和風ヒーリングポップ', styles: 'healing j-pop, gentle female vocal, soothing voice, wagakki, shamisen, koto, soft taiko, japanese traditional, calm, warm, relaxing, peaceful, dreamy, heartwarming, clean mix, no intro, no outro' },
  { name: 'ゲーム主題歌風和風', styles: 'game theme song, j-pop, cute female vocal, wagakki, shamisen, koto, taiko, japanese traditional fantasy, catchy chorus, adventurous, sparkling, emotional, vibrant, clean mix, no intro, no outro' },
  { name: '脱出ゲームED風和風', styles: 'soft game ending theme, j-pop, gentle female vocal, wagakki, shamisen, koto, soft taiko, japanese traditional, nostalgic, heartwarming, tender, peaceful, melodic, clean mix, no intro, no outro' },
  { name: 'ショート動画向けフック重視', styles: 'short form j-pop, kawaii, cute female vocal, wagakki, shamisen, koto, taiko, japanese traditional fusion, instant hook, catchy chorus, repeated syllables, upbeat, sparkling, clean mix, no intro, no outro' },
  { name: '海外向け和風ポップ', styles: 'j-pop, kawaii, japanese traditional fusion, cute female vocal, wagakki, shamisen, koto, taiko, catchy chorus, global pop feel, sweet, sparkling, vibrant, clean modern mix, no intro, no outro' },
  { name: '和風ラブコメOP', styles: 'romantic comedy anime opening, j-pop, kawaii, cute female vocal, wagakki, shamisen, koto, taiko, japanese traditional fusion, playful, bashful, sparkling, upbeat, catchy chorus, clean mix, no intro, no outro' },
  { name: '和風ラブコメED', styles: 'romantic comedy anime ending, soft j-pop, sweet female vocal, wagakki, shamisen, koto, soft taiko, japanese traditional, tender, bashful, cozy, romantic, heartwarming, clean mix, no intro, no outro' },
  { name: '和風ミュージカル調', styles: 'musical j-pop, expressive female vocal, wagakki, shamisen, koto, taiko, japanese traditional fusion, theatrical but cute, playful, romantic, catchy chorus, vibrant, clean mix, no intro, no outro' },
  { name: '和風ロックポップ', styles: 'pop rock, j-pop, cute female vocal, wagakki, shamisen, koto, taiko, japanese traditional fusion, energetic drums, bright guitars, catchy chorus, vibrant, clean mix, no intro, no outro' },
  { name: '和風スカポップ', styles: 'ska pop, j-pop, cheerful female vocal, wagakki, shamisen, koto, taiko, japanese traditional fusion, bouncy rhythm, playful, festive, catchy chorus, upbeat, clean mix, no intro, no outro' },
  { name: '和風チルダンス', styles: 'chill dance j-pop, soft cute female vocal, wagakki, shamisen, koto, light taiko, japanese traditional fusion, mellow groove, sweet, sparkling, cozy, catchy hook, clean mix, no intro, no outro' },
];

const THEME_TEMPLATES = [
  // 季節・自然
  '春 / 桜', '梅雨 / 紫陽花', '夏 / 海', '夏祭り / 花火', '紅葉 / 秋風',
  '秋 / 月夜', '冬 / 雪', '朝焼け / 夕焼け', '雨 / 雫', '星 / 宇宙',
  // 舞台・世界観
  '神社 / 巫女', '鳥居 / 参道', '江戸 / 下町', '京都 / 古都', '城 / 武士',
  '温泉 / 旅館', '和菓子 / 茶屋', '夜の縁日', '和風ファンタジー', '桃源郷',
  // キャラクター・モチーフ
  '猫 / ねこ', '兎 / うさぎ', '狐 / きつね', '鬼 / あやかし', '龍 / 竜',
  '蝶 / 花', '妖精 / 精霊', '人魚 / 海の底', '天使 / 悪魔', '魔法少女', '忍者 / くノ一',
  // 感情・ストーリー
  '初恋 / ときめき', '甘い恋愛', '切ない恋', '秘密 / 謎', '別れ / 旅立ち',
  '青春 / 学校', '夢 / まどろみ', 'ほっこり日常', '癒し / ゆるふわ', '懐かしさ / 記憶',
  '奇跡 / 運命', '冒険 / 旅', '友情 / 絆',
];
const selectedThemes = new Set();

const MOOD_TEMPLATES = [
  '明るい / 元気', '切ない / 哀愁', 'ドリーミー / 幻想的', 'クール / ミステリアス',
  'ロマンティック / 甘い', '懐かしい / ノスタルジック', '癒し / まったり',
  '力強い / エネルギッシュ', 'ほっこり / 温かい', '儚い / 透明感',
  'コミカル / ユーモア', 'エモーショナル / 泣ける', 'スピリチュアル / 神秘的',
  '妖艶 / 大人っぽい', 'ワクワク / 躍動感',
];
const selectedMoods = new Set();

const GENRE_TEMPLATES = [
  'J-POP', 'シティポップ', 'アニソン', 'アイドルポップ', '和風 / 和楽器',
  'ボカロ風', 'エレクトロポップ', 'Future Bass', 'R&B / ソウル',
  'ジャズ / ボサノバ', 'ロック', 'アコースティック', 'ローファイ',
  'ダンスポップ', 'バラード', 'EDM', 'スカポップ', '電波ソング', 'ゲームミュージック風',
];
const selectedGenres = new Set();

const SECTION_TYPES = [
  { id: 'intro',       label: 'Intro',        color: '#6366f1' },
  { id: 'verse',       label: 'Verse',        color: '#16a34a' },
  { id: 'pre-chorus',  label: 'Pre-Chorus',   color: '#d97706' },
  { id: 'chorus',      label: 'Chorus',       color: '#dc2626' },
  { id: 'post-chorus', label: 'Post-Chorus',  color: '#be185d' },
  { id: 'bridge',      label: 'Bridge',       color: '#7c3aed' },
  { id: 'hook',        label: 'Hook',         color: '#0891b2' },
  { id: 'break',       label: 'Break',        color: '#65a30d' },
  { id: 'rap',         label: 'Rap',          color: '#b45309' },
  { id: 'outro',       label: 'Outro',        color: '#475569' },
];

const STRUCTURE_TEMPLATES = [
  { name: 'スタンダードポップ',       sections: ['verse','pre-chorus','chorus','verse','pre-chorus','chorus','bridge','chorus'] },
  { name: 'シンプル (V-C-V-C)',       sections: ['verse','chorus','verse','chorus'] },
  { name: 'Intro付きポップ',          sections: ['intro','verse','pre-chorus','chorus','verse','pre-chorus','chorus','bridge','chorus'] },
  { name: 'アニメOP',                 sections: ['verse','pre-chorus','chorus','verse','pre-chorus','chorus','bridge','chorus'] },
  { name: 'バラード',                 sections: ['verse','chorus','verse','chorus','bridge','chorus'] },
  { name: 'AABA',                     sections: ['verse','verse','bridge','verse'] },
  { name: 'フル (Intro〜Outro)',       sections: ['intro','verse','pre-chorus','chorus','verse','pre-chorus','chorus','bridge','chorus','outro'] },
  { name: 'ショート (V-C-C)',         sections: ['verse','chorus','chorus'] },
  { name: 'Post-Chorus入り',          sections: ['verse','pre-chorus','chorus','post-chorus','verse','pre-chorus','chorus','post-chorus','bridge','chorus'] },
];

const PHRASE_SECTIONS = [
  { id: 'general',    label: '汎用' },
  { id: 'chorus',     label: 'サビ' },
  { id: 'verse',      label: 'Aメロ' },
  { id: 'pre-chorus', label: 'Bメロ' },
  { id: 'bridge',     label: 'ブリッジ' },
  { id: 'hook',       label: 'フック' },
];

let songs = [];
let playlists = [];
let phrases = [];
let filter = 'all';
let search = '';
let selectedId = null;
const collapsedGroups = new Set();
let selectedSongIds = new Set();
let dragState = null;
let lastDragEndTime = 0;
let songStructure = [];
let structureDragSrcIdx = null;
let selectedPhraseId = null;
let phraseFilter = 'all';
let phraseSearch = '';
const selectedPhraseThemes = new Set();
const selectedPhraseMoods = new Set();

async function fetchAll() {
  const [songsRes, playlistsRes, phrasesRes] = await Promise.all([
    fetch('/api/songs'),
    fetch('/api/playlists'),
    fetch('/api/phrases'),
  ]);
  songs = await songsRes.json();
  playlists = await playlistsRes.json();
  phrases = await phrasesRes.json();
  updateStats();
  renderList();
  renderPhraseList();
  updateRequestPlaylistSelect();
  updatePromptOutput();
}

function updateStats() {
  document.getElementById('stat-total').textContent = songs.length;
  document.getElementById('stat-unused').textContent = songs.filter(s => s.status === 'unused').length;
  document.getElementById('stat-posted').textContent = songs.filter(s => s.status === 'posted').length;
}

function getFiltered() {
  return songs.filter(s => {
    if (filter === 'unused' && s.status !== 'unused') return false;
    if (filter === 'posted' && s.status !== 'posted') return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        s.title?.toLowerCase().includes(q) ||
        s.lyrics?.toLowerCase().includes(q) ||
        s.styles?.toLowerCase().includes(q) ||
        s.theme?.toLowerCase().includes(q) ||
        s.mood?.toLowerCase().includes(q)
      );
    }
    return true;
  });
}

// ---- Rendering ----

function renderList() {
  const list = getFiltered();
  const el = document.getElementById('song-list');
  let html = '';

  if (selectedSongIds.size > 0) {
    html += `<div class="selection-bar">
      <span>${selectedSongIds.size}件選択中</span>
      <button class="sel-clear-btn" onclick="clearSelection()">×</button>
    </div>`;
  }

  if (playlists.length === 0) {
    const sorted = [...list].sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
    el.innerHTML = html + (sorted.length
      ? sorted.map((s, i) => rowHTML(s, i + 1)).join('')
      : '<div class="list-empty">曲がありません</div>');
    return;
  }

  const sortedPlaylists = [...playlists].sort((a, b) =>
    (a.sort_order || 0) - (b.sort_order || 0) || (a.created_at || '').localeCompare(b.created_at || '')
  );

  for (let pi = 0; pi < sortedPlaylists.length; pi++) {
    const pl = sortedPlaylists[pi];
    const plSongs = list
      .filter(s => s.playlist_id === pl.id)
      .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
    if (plSongs.length === 0 && search) continue;

    const collapsed = collapsedGroups.has(pl.id);
    html += `<div class="playlist-group">
      <div class="playlist-header"
           data-playlist-id="${pl.id}"
           draggable="true"
           ondragstart="plDragStart(event,'${pl.id}')"
           ondragover="plHeaderDragOver(event,'${pl.id}')"
           ondragleave="plHeaderDragLeave(event)"
           ondrop="plHeaderDrop(event,'${pl.id}')"
           ondragend="onDragEnd()"
           onclick="toggleGroupOrClick(event,'${pl.id}')">
        <span class="group-number">${pi + 1}</span>
        <span class="group-arrow ${collapsed ? '' : 'open'}">▶</span>
        <span class="group-name">${esc(pl.name)}</span>
        <span class="group-count">${plSongs.length}</span>
        <button class="group-menu-btn" onclick="showPlaylistMenu(event,'${pl.id}')">···</button>
      </div>
      ${collapsed ? '' : plSongs.map((s, i) => rowHTML(s, i + 1)).join('')}
    </div>`;
  }

  const unassigned = list
    .filter(s => !s.playlist_id)
    .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));

  if (unassigned.length > 0) {
    const uc = collapsedGroups.has('__unassigned__');
    html += `<div class="playlist-group">
      <div class="playlist-header unassigned-header"
           ondragover="plHeaderDragOver(event,'')"
           ondragleave="plHeaderDragLeave(event)"
           ondrop="plHeaderDrop(event,'')"
           onclick="toggleGroupOrClick(event,'__unassigned__')">
        <span class="group-arrow ${uc ? '' : 'open'}">▶</span>
        <span class="group-name muted">未分類</span>
        <span class="group-count">${unassigned.length}</span>
      </div>
      ${uc ? '' : unassigned.map((s, i) => rowHTML(s, i + 1)).join('')}
    </div>`;
  }

  el.innerHTML = html || '<div class="list-empty">曲がありません</div>';
}

function rowHTML(song, index) {
  const active = song.id === selectedId ? 'active' : '';
  const selected = selectedSongIds.has(song.id) ? 'selected' : '';
  const isPosted = song.status === 'posted';
  const tags = [song.language, song.mood, song.theme].filter(Boolean).join(' · ');
  const plId = song.playlist_id || '';

  return `<div class="song-row ${active} ${selected} ${isPosted ? 'posted' : ''}"
    data-id="${song.id}"
    data-playlist-id="${plId}"
    draggable="true"
    ondragstart="songDragStart(event,'${song.id}')"
    ondragover="songRowDragOver(event)"
    ondragleave="songRowDragLeave(event)"
    ondrop="songRowDrop(event,'${song.id}','${plId}')"
    ondragend="onDragEnd()"
    onclick="handleSongClick(event,'${song.id}')">
    <span class="song-number">${index}</span>
    <div class="row-content">
      <div class="row-title">${esc(song.title || '(無題)')}</div>
      <div class="row-meta">
        ${isPosted ? '<span class="row-status posted">投稿済</span>' : ''}
        <span>${esc(tags)}</span>
      </div>
    </div>
    <span class="drag-handle">⠿</span>
  </div>`;
}

function toggleGroup(id) {
  if (collapsedGroups.has(id)) collapsedGroups.delete(id);
  else collapsedGroups.add(id);
  renderList();
}

function toggleGroupOrClick(e, id) {
  if (Date.now() - lastDragEndTime < 200) return;
  toggleGroup(id);
}

// ---- Selection ----

function handleSongClick(e, id) {
  if (Date.now() - lastDragEndTime < 200) return;
  if (e.shiftKey) {
    if (selectedSongIds.has(id)) selectedSongIds.delete(id);
    else selectedSongIds.add(id);
    renderList();
  } else {
    selectedSongIds.clear();
    selectSong(id);
  }
}

function clearSelection() {
  selectedSongIds.clear();
  renderList();
}

function selectSong(id) {
  selectedId = id;
  renderList();
  renderDetail();
}

// ---- Drag and Drop ----

function songDragStart(e, songId) {
  const ids = selectedSongIds.size > 0 && selectedSongIds.has(songId)
    ? [...selectedSongIds]
    : [songId];
  dragState = { type: 'song', ids };
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', ids.join(','));

  if (ids.length > 1) {
    const ghost = document.createElement('div');
    ghost.style.cssText = 'position:fixed;top:-999px;padding:6px 12px;border-radius:6px;font-size:0.82rem;background:#22222f;color:#e8e8f0;border:1px solid #a855f7;';
    ghost.textContent = `${ids.length}曲を移動`;
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, 40, 14);
    setTimeout(() => ghost.remove(), 0);
  }

  setTimeout(() => {
    ids.forEach(id => {
      document.querySelector(`.song-row[data-id="${id}"]`)?.classList.add('dragging');
    });
  }, 0);
}

function songRowDragOver(e) {
  if (!dragState) return;
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  const row = e.currentTarget;
  const rect = row.getBoundingClientRect();
  const mid = rect.top + rect.height / 2;
  row.classList.toggle('drop-above', e.clientY < mid);
  row.classList.toggle('drop-below', e.clientY >= mid);
}

function songRowDragLeave(e) {
  const row = e.currentTarget;
  if (!row.contains(e.relatedTarget)) {
    row.classList.remove('drop-above', 'drop-below');
  }
}

function songRowDrop(e, targetId, targetPlIdStr) {
  e.preventDefault();
  e.stopPropagation();
  if (!dragState || dragState.type !== 'song') { clearDropIndicators(); return; }

  const rect = e.currentTarget.getBoundingClientRect();
  const insertBefore = e.clientY < rect.top + rect.height / 2;
  clearDropIndicators();

  const targetPlId = targetPlIdStr || null;
  const { ids } = dragState;
  dragState = null;

  const allSamePl = ids.every(id => (songs.find(s => s.id === id)?.playlist_id || null) === targetPlId);
  if (allSamePl) {
    reorderSongsInPlaylist(ids, targetId, insertBefore);
  } else {
    moveSongsToPlaylist(ids, targetPlId, targetId, insertBefore);
  }
}

function plDragStart(e, playlistId) {
  dragState = { type: 'playlist', id: playlistId };
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', playlistId);
  setTimeout(() => {
    document.querySelector(`.playlist-header[data-playlist-id="${playlistId}"]`)?.classList.add('dragging-pl');
  }, 0);
}

function plHeaderDragOver(e, plIdStr) {
  if (!dragState) return;
  const header = e.currentTarget;

  if (dragState.type === 'song') {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    header.classList.remove('drop-above', 'drop-below');
    header.classList.add('drag-over');
  } else if (dragState.type === 'playlist') {
    if (dragState.id === plIdStr) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    header.classList.remove('drag-over');
    const rect = header.getBoundingClientRect();
    const mid = rect.top + rect.height / 2;
    header.classList.toggle('drop-above', e.clientY < mid);
    header.classList.toggle('drop-below', e.clientY >= mid);
  }
}

function plHeaderDragLeave(e) {
  const header = e.currentTarget;
  if (!header.contains(e.relatedTarget)) {
    header.classList.remove('drag-over', 'drop-above', 'drop-below');
  }
}

function plHeaderDrop(e, plIdStr) {
  e.preventDefault();
  e.stopPropagation();
  if (!dragState) { clearDropIndicators(); return; }

  const headerRect = e.currentTarget.getBoundingClientRect();
  clearDropIndicators();

  const targetPlId = plIdStr || null;

  if (dragState.type === 'song') {
    const { ids } = dragState;
    dragState = null;
    const allAlready = ids.every(id => (songs.find(s => s.id === id)?.playlist_id || null) === targetPlId);
    if (!allAlready) moveSongsToPlaylist(ids, targetPlId, null, false);
  } else if (dragState.type === 'playlist') {
    const insertBefore = e.clientY < headerRect.top + headerRect.height / 2;
    const dId = dragState.id;
    dragState = null;
    reorderPlaylists(dId, plIdStr, insertBefore);
  }
}

function onDragEnd() {
  lastDragEndTime = Date.now();
  clearDropIndicators();
  dragState = null;
}

function clearDropIndicators() {
  document.querySelectorAll('.drop-above,.drop-below,.drag-over,.dragging,.dragging-pl')
    .forEach(el => el.classList.remove('drop-above', 'drop-below', 'drag-over', 'dragging', 'dragging-pl'));
}

// ---- Reorder / Move ----

async function reorderSongsInPlaylist(draggedIds, targetId, insertBefore) {
  const target = songs.find(s => s.id === targetId);
  if (!target) return;
  const plId = target.playlist_id || null;

  const group = songs
    .filter(s => (s.playlist_id || null) === plId)
    .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));

  const dragged = draggedIds.map(id => songs.find(s => s.id === id)).filter(Boolean);
  const remaining = group.filter(s => !draggedIds.includes(s.id));
  const targetIdx = remaining.findIndex(s => s.id === targetId);
  const insertIdx = targetIdx < 0 ? remaining.length : (insertBefore ? targetIdx : targetIdx + 1);

  const reordered = [...remaining.slice(0, insertIdx), ...dragged, ...remaining.slice(insertIdx)];
  const updates = reordered.map((s, i) => ({ id: s.id, sort_order: i + 1, playlist_id: plId }));

  updates.forEach(u => {
    const s = songs.find(s => s.id === u.id);
    if (s) { s.sort_order = u.sort_order; s.playlist_id = u.playlist_id; }
  });

  await fetch('/api/songs/reorder', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ updates }),
  });
  renderList();
}

async function moveSongsToPlaylist(draggedIds, targetPlId, nearSongId, insertBefore) {
  const targetPl = targetPlId ? playlists.find(p => p.id === targetPlId) : null;
  const targetName = targetPl ? `「${targetPl.name}」` : '未分類';

  if (!confirm(`${draggedIds.length}曲を${targetName}に移動しますか？`)) return;

  const dragged = draggedIds.map(id => songs.find(s => s.id === id)).filter(Boolean);
  const targetGroup = songs
    .filter(s => (s.playlist_id || null) === targetPlId && !draggedIds.includes(s.id))
    .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));

  let reordered;
  if (nearSongId) {
    const idx = targetGroup.findIndex(s => s.id === nearSongId);
    const insertIdx = idx < 0 ? targetGroup.length : (insertBefore ? idx : idx + 1);
    reordered = [...targetGroup.slice(0, insertIdx), ...dragged, ...targetGroup.slice(insertIdx)];
  } else {
    reordered = [...targetGroup, ...dragged];
  }

  const targetUpdates = reordered.map((s, i) => ({ id: s.id, sort_order: i + 1, playlist_id: targetPlId }));

  const srcPlIds = [...new Set(dragged.map(s => s.playlist_id || null))];
  const srcUpdates = [];
  for (const srcId of srcPlIds) {
    songs
      .filter(s => (s.playlist_id || null) === srcId && !draggedIds.includes(s.id))
      .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
      .forEach((s, i) => srcUpdates.push({ id: s.id, sort_order: i + 1, playlist_id: srcId }));
  }

  const updates = [...targetUpdates, ...srcUpdates];
  updates.forEach(u => {
    const s = songs.find(s => s.id === u.id);
    if (s) { s.sort_order = u.sort_order; s.playlist_id = u.playlist_id; }
  });

  await fetch('/api/songs/reorder', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ updates }),
  });

  renderList();
  if (selectedId && draggedIds.includes(selectedId)) renderDetail();
  showToast(`${draggedIds.length}曲を${targetName}に移動しました`);
}

async function reorderPlaylists(draggedId, targetId, insertBefore) {
  if (draggedId === targetId) return;
  const sorted = [...playlists].sort((a, b) =>
    (a.sort_order || 0) - (b.sort_order || 0) || (a.created_at || '').localeCompare(b.created_at || '')
  );
  const dragged = sorted.find(p => p.id === draggedId);
  if (!dragged) return;
  const remaining = sorted.filter(p => p.id !== draggedId);
  const targetIdx = remaining.findIndex(p => p.id === targetId);
  if (targetIdx < 0) return;
  const insertIdx = insertBefore ? targetIdx : targetIdx + 1;
  const reordered = [...remaining.slice(0, insertIdx), dragged, ...remaining.slice(insertIdx)];
  const updates = reordered.map((p, i) => ({ id: p.id, sort_order: i + 1 }));

  updates.forEach(u => {
    const p = playlists.find(p => p.id === u.id);
    if (p) p.sort_order = u.sort_order;
  });

  await fetch('/api/playlists/reorder', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ updates }),
  });
  renderList();
}

// ---- Detail panel ----

function renderDetail() {
  const detail = document.getElementById('detail');

  if (!selectedId) {
    detail.innerHTML = '<div class="detail-empty">曲を選択してください</div>';
    return;
  }

  const song = songs.find(s => s.id === selectedId);
  if (!song) {
    detail.innerHTML = '<div class="detail-empty">曲が見つかりません</div>';
    return;
  }

  const isPosted = song.status === 'posted';
  const date = song.created_at ? new Date(song.created_at).toLocaleDateString('ja-JP') : '';
  const playlistOptions = playlists
    .map(pl => `<option value="${pl.id}"${song.playlist_id === pl.id ? ' selected' : ''}>${esc(pl.name)}</option>`)
    .join('');
  const tmplIdx = matchStyleTemplate(song.styles);

  detail.innerHTML = `
    <div class="detail-content">
      <div class="detail-field">
        <label class="field-label">Title</label>
        <input class="detail-input" id="edit-title" value="${esc(song.title || '')}">
      </div>
      <div class="detail-field lyrics-field">
        <div class="field-header">
          <label class="field-label">Lyrics</label>
          <button class="copy-btn" onclick="copyText(this, document.getElementById('edit-lyrics').value)">コピー</button>
        </div>
        <textarea class="detail-textarea lyrics-area" id="edit-lyrics">${esc(song.lyrics || '')}</textarea>
      </div>
      <div class="detail-field">
        <div class="field-header">
          <label class="field-label">Style</label>
          <button class="copy-btn" onclick="copyText(this, document.getElementById('edit-styles').value)">コピー</button>
        </div>
        <select class="style-tmpl-select" id="style-template-select" onchange="onStyleTemplateChange(this)">
          <option value="-1"${tmplIdx < 0 ? ' selected' : ''}>✏️ オリジナル</option>
          ${STYLE_TEMPLATES.map((t, i) => `<option value="${i}"${i === tmplIdx ? ' selected' : ''}>${esc(t.name)}</option>`).join('')}
        </select>
        <textarea class="detail-textarea styles-area${tmplIdx >= 0 ? ' style-readonly' : ''}" id="edit-styles"${tmplIdx >= 0 ? ' readonly' : ''}>${esc(song.styles || '')}</textarea>
      </div>
    </div>
    ${song.request_config ? `
    <div class="detail-config-bar">
      <span class="config-bar-label">作曲依頼の設定が保存されています</span>
      <button class="use-config-btn" onclick="useRequestConfig('${song.id}')">この設定で依頼 →</button>
    </div>` : ''}
    <div class="detail-footer">
      <span class="date-text">${date}</span>
      <label class="field-label" style="white-space:nowrap">リスト:</label>
      <select class="playlist-select" id="edit-playlist">
        <option value="">未分類</option>
        ${playlistOptions}
      </select>
      <button class="delete-btn" onclick="deleteSong('${song.id}')">削除</button>
      <button class="status-btn ${song.status}" onclick="toggleStatus('${song.id}','${song.status}')">
        ${isPosted ? '投稿済み' : '未使用'}
      </button>
      <button class="save-btn" onclick="saveSong('${song.id}')">保存</button>
    </div>
  `;
}

function matchStyleTemplate(styles) {
  if (!styles) return -1;
  const s = styles.trim();
  return STYLE_TEMPLATES.findIndex(t => t.styles === s);
}

function onStyleTemplateChange(sel) {
  const idx = parseInt(sel.value);
  const textarea = document.getElementById('edit-styles');
  if (!textarea) return;
  if (idx >= 0) {
    textarea.value = STYLE_TEMPLATES[idx].styles;
    textarea.readOnly = true;
    textarea.classList.add('style-readonly');
  } else {
    textarea.readOnly = false;
    textarea.classList.remove('style-readonly');
  }
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function copyText(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'コピー済み';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'コピー'; btn.classList.remove('copied'); }, 1500);
  });
}

async function saveSong(id) {
  const title = document.getElementById('edit-title')?.value ?? '';
  const lyrics = document.getElementById('edit-lyrics')?.value ?? '';
  const styles = document.getElementById('edit-styles')?.value ?? '';
  const playlist_id = document.getElementById('edit-playlist')?.value || null;

  await fetch('/api/songs/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, title, lyrics, styles, playlist_id }),
  });

  const song = songs.find(s => s.id === id);
  if (song) { song.title = title; song.lyrics = lyrics; song.styles = styles; song.playlist_id = playlist_id; }

  renderList();
  showToast('保存しました');
}

async function toggleStatus(id, current) {
  const next = current === 'unused' ? 'posted' : 'unused';
  await fetch('/api/songs/status', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, status: next }),
  });

  const song = songs.find(s => s.id === id);
  if (song) song.status = next;

  updateStats();
  renderList();
  renderDetail();
}

async function deleteSong(id) {
  if (!confirm('この曲を削除しますか？')) return;
  await fetch('/api/songs/delete', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });

  songs = songs.filter(s => s.id !== id);
  selectedId = null;
  updateStats();
  renderList();
  renderDetail();
  showToast('削除しました');
}

// ---- Playlist operations ----

function showPlaylistMenu(e, id) {
  e.stopPropagation();
  document.querySelectorAll('.playlist-menu').forEach(m => m.remove());

  const rect = e.currentTarget.getBoundingClientRect();
  const menu = document.createElement('div');
  menu.className = 'playlist-menu';
  menu.style.cssText = `position:fixed;top:${rect.bottom + 4}px;left:${rect.left}px;z-index:1000;`;
  menu.innerHTML = `
    <button class="playlist-menu-item" onclick="renamePlaylist('${id}')">名前を変更</button>
    <button class="playlist-menu-item danger" onclick="deletePlaylist('${id}')">削除</button>
  `;
  document.body.appendChild(menu);
  setTimeout(() => document.addEventListener('click', () => menu.remove(), { once: true }), 0);
}

async function renamePlaylist(id) {
  const pl = playlists.find(p => p.id === id);
  const name = prompt('新しいリスト名:', pl?.name || '');
  if (!name || !name.trim() || name.trim() === pl?.name) return;

  await fetch('/api/playlists/rename', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, name: name.trim() }),
  });

  await fetchAll();
  showToast('リスト名を変更しました');
}

function showNewPlaylistInput() {
  const el = document.getElementById('song-list');
  if (el.querySelector('.new-playlist-form')) return;

  const div = document.createElement('div');
  div.className = 'new-playlist-form';
  div.innerHTML = '<input class="new-playlist-input" placeholder="リスト名を入力... (Enter で確定)" maxlength="40">';
  el.prepend(div);

  const input = div.querySelector('input');
  input.focus();

  let submitted = false;
  const submit = async () => {
    if (submitted) return;
    submitted = true;
    const name = input.value.trim();
    div.remove();
    if (name) await createPlaylist(name);
  };

  input.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') await submit();
    else if (e.key === 'Escape') { submitted = true; div.remove(); }
  });
  input.addEventListener('blur', () => setTimeout(submit, 100));
}

async function createPlaylist(name) {
  const res = await fetch('/api/playlists/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
  const data = await res.json();
  if (data.ok) {
    playlists.push(data.playlist);
    renderList();
    showToast(`「${name}」を作成しました`);
  }
}

async function deletePlaylist(id) {
  const pl = playlists.find(p => p.id === id);
  if (!confirm(`「${pl?.name}」を削除しますか？\n曲の割り当ては解除されます。`)) return;

  await fetch('/api/playlists/delete', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });

  playlists = playlists.filter(p => p.id !== id);
  songs.forEach(s => { if (s.playlist_id === id) s.playlist_id = null; });

  renderList();
  if (selectedId) renderDetail();
  showToast('リストを削除しました');
}

// ---- UI helpers ----

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filter = btn.dataset.filter;
    renderList();
  });
});

document.getElementById('search-input').addEventListener('input', e => {
  search = e.target.value;
  renderList();
});

// ---- View switching ----

function switchView(view) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === view);
  });
  document.getElementById('view-songs').classList.toggle('hidden', view !== 'songs');
  document.getElementById('view-request').classList.toggle('hidden', view !== 'request');
  document.getElementById('view-phrases').classList.toggle('hidden', view !== 'phrases');
  if (view === 'phrases') renderPhraseDetail();
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => switchView(item.dataset.view));
});

// ---- Request form ----

function captureRequestConfig() {
  return {
    count: document.querySelector('.count-btn.active')?.dataset.value || '1',
    theme_text: document.getElementById('req-theme')?.value.trim() || '',
    theme_tags: [...selectedThemes],
    mood_text: document.getElementById('req-mood')?.value.trim() || '',
    mood_tags: [...selectedMoods],
    genre_text: document.getElementById('req-genre')?.value.trim() || '',
    genre_tags: [...selectedGenres],
    lang_mode: document.querySelector('.io-btn.active[data-group="lang-mode"]')?.dataset.value ?? 'auto',
    ja_pct: parseInt(document.getElementById('req-ja-pct')?.value) || 90,
    style_template_idx: parseInt(document.getElementById('req-style-template')?.value ?? '-1'),
    structure_mode: document.querySelector('.io-btn.active[data-group="struct-mode"]')?.dataset.value ?? 'auto',
    song_structure: [...songStructure],
    intro: document.querySelector('.io-btn.active[data-group="intro"]')?.dataset.value ?? 'no',
    outro: document.querySelector('.io-btn.active[data-group="outro"]')?.dataset.value ?? 'no',
    include_phrases: document.getElementById('req-include-phrases')?.value.trim() || '',
    exclude_phrases: document.getElementById('req-exclude-phrases')?.value.trim() || '',
    extra: document.getElementById('req-extra')?.value.trim() || '',
    playlist_id: document.getElementById('req-playlist')?.value || null,
  };
}

function applyRequestConfig(config) {
  if (!config) return;

  // 曲数
  document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.count-btn[data-value="${config.count || '1'}"]`)?.classList.add('active');

  // テーマ
  if (document.getElementById('req-theme')) document.getElementById('req-theme').value = config.theme_text || '';
  selectedThemes.clear();
  (config.theme_tags || []).forEach(t => selectedThemes.add(t));
  renderThemeTags();

  // ムード
  if (document.getElementById('req-mood')) document.getElementById('req-mood').value = config.mood_text || '';
  selectedMoods.clear();
  (config.mood_tags || []).forEach(t => selectedMoods.add(t));
  renderMoodTags();

  // ジャンル
  if (document.getElementById('req-genre')) document.getElementById('req-genre').value = config.genre_text || '';
  selectedGenres.clear();
  (config.genre_tags || []).forEach(t => selectedGenres.add(t));
  renderGenreTags();

  // 言語モード
  const langMode = config.lang_mode ?? 'auto';
  document.querySelectorAll('.io-btn[data-group="lang-mode"]').forEach(b => {
    b.classList.toggle('active', b.dataset.value === langMode);
  });
  document.getElementById('lang-custom-area').style.display = langMode === 'custom' ? '' : 'none';
  const jaPct = config.ja_pct ?? 90;
  if (document.getElementById('req-ja-pct')) document.getElementById('req-ja-pct').value = jaPct;
  if (document.getElementById('req-en-pct')) document.getElementById('req-en-pct').value = 100 - jaPct;
  if (document.getElementById('req-lang-slider')) document.getElementById('req-lang-slider').value = jaPct;
  syncLangSlider('slider');

  // スタイルテンプレ
  const styleSel = document.getElementById('req-style-template');
  if (styleSel) styleSel.value = config.style_template_idx ?? -1;

  // 曲の構成モード
  const structMode = config.structure_mode || 'auto';
  document.querySelectorAll('.io-btn[data-group="struct-mode"]').forEach(b => b.classList.remove('active'));
  document.querySelector(`.io-btn[data-group="struct-mode"][data-value="${structMode}"]`)?.classList.add('active');
  const area = document.getElementById('struct-custom-area');
  if (area) area.style.display = structMode === 'custom' ? 'flex' : 'none';
  songStructure = [...(config.song_structure || [])];
  renderStructure();

  // Intro / Outro
  ['intro', 'outro'].forEach(group => {
    const val = config[group] || 'no';
    document.querySelectorAll(`.io-btn[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
    document.querySelector(`.io-btn[data-group="${group}"][data-value="${val}"]`)?.classList.add('active');
  });

  // フレーズ
  if (document.getElementById('req-include-phrases')) document.getElementById('req-include-phrases').value = config.include_phrases || '';
  if (document.getElementById('req-exclude-phrases')) document.getElementById('req-exclude-phrases').value = config.exclude_phrases || '';
  if (document.getElementById('req-extra')) document.getElementById('req-extra').value = config.extra || '';

  // 追加先リスト
  const playlistSel = document.getElementById('req-playlist');
  if (playlistSel) playlistSel.value = config.playlist_id || '';

  updatePromptOutput();
}

function useRequestConfig(id) {
  const song = songs.find(s => s.id === id);
  if (!song?.request_config) return;
  let config;
  try { config = JSON.parse(song.request_config); } catch(e) { return; }
  applyRequestConfig(config);
  switchView('request');
  showToast('依頼設定を引き継ぎました');
}

function updateRequestPlaylistSelect() {
  const sel = document.getElementById('req-playlist');
  if (!sel) return;
  const current = sel.value;
  sel.innerHTML = '<option value="">なし（未分類）</option>' +
    playlists.map(pl => `<option value="${pl.id}">${esc(pl.name)}</option>`).join('');
  sel.value = current;
}

function generatePrompt() {
  const count = document.querySelector('.count-btn.active')?.dataset.value || '3';
  const themeText = document.getElementById('req-theme').value.trim();
  const themeTags = [...selectedThemes].join('、');
  const theme = [themeTags, themeText].filter(Boolean).join('、');
  const langMode = document.querySelector('.io-btn.active[data-group="lang-mode"]')?.dataset.value ?? 'auto';
  const jaPct = Math.max(0, Math.min(100, parseInt(document.getElementById('req-ja-pct')?.value) || 90));
  const enPct = 100 - jaPct;
  const languageCode = langMode === 'auto' ? 'ja/en' : (jaPct === 100 ? 'ja' : (enPct === 100 ? 'en' : 'ja/en'));
  const languageLabel = langMode === 'auto' ? 'お任せ' : (jaPct === 100 ? '日本語のみ' : (enPct === 100 ? '英語のみ' : `日本語${jaPct}%・英語${enPct}%`));
  const moodText = document.getElementById('req-mood').value.trim();
  const moodTags = [...selectedMoods].join('・');
  const mood = [moodTags, moodText].filter(Boolean).join('・');

  const genreText = document.getElementById('req-genre').value.trim();
  const genreTags = [...selectedGenres].join('、');
  const genre = [genreTags, genreText].filter(Boolean).join('、');
  const extra = document.getElementById('req-extra').value.trim();
  const playlistSel = document.getElementById('req-playlist');
  const playlistId = playlistSel.value || null;
  const playlistName = playlistId ? playlists.find(p => p.id === playlistId)?.name : null;

  const lines = [];
  lines.push(`Suno用の曲を ${count} 曲生成し、http://localhost:8765/api/songs/add にPOSTして保存してください。`);
  lines.push('');
  lines.push('【条件】');
  if (theme) lines.push(`- テーマ/世界観: ${theme}`);
  lines.push(`- 言語: ${languageLabel}（language フィールド: "${languageCode}"）`);
  if (mood) lines.push(`- ムード: ${mood}`);
  if (genre) lines.push(`- ジャンル/スタイル: ${genre}`);
  lines.push(playlistId
    ? `- 追加先リスト: "${playlistName}"（playlist_id: "${playlistId}"）`
    : `- 追加先リスト: なし（playlist_id: null）`);

  if (extra) {
    lines.push('');
    lines.push('【追加の要望】');
    lines.push(extra);
  }

  lines.push('');
  lines.push('【歌詞の要件】');
  const structMode = document.querySelector('.io-btn.active[data-group="struct-mode"]')?.dataset.value ?? 'auto';
  if (structMode === 'custom' && songStructure.length > 0) {
    const labels = songStructure.map(id => {
      const sec = SECTION_TYPES.find(s => s.id === id);
      return `[${sec ? sec.label : id}]`;
    });
    lines.push(`- 曲の構成（必ずこの順番通りに全セクションを作ること）: ${labels.join(' → ')}`);
  } else if (structMode === 'auto') {
    lines.push('- セクション構成はあなたが曲のテーマ・ムードに合わせて最適な構成を決めてください');
  } else {
    lines.push('- [Verse 1] [Pre-Chorus] [Chorus] [Verse 2] [Bridge] [Outro] 等のセクション構成を明示する');
  }
  lines.push('- Suno の 3000 文字制限に収める');
  lines.push('- 言語設定に従い日本語と英語を適切に配分する');

  const includeText = document.getElementById('req-include-phrases')?.value.trim();
  if (includeText) {
    const phrases = includeText.split(/[,、，]/).map(p => p.trim()).filter(Boolean);
    lines.push(`- 以下のフレーズを歌詞に必ず含めること: ${phrases.map(p => `「${p}」`).join('')}`);
  }
  const excludeText = document.getElementById('req-exclude-phrases')?.value.trim();
  if (excludeText) {
    const phrases = excludeText.split(/[,、，]/).map(p => p.trim()).filter(Boolean);
    lines.push(`- 以下のフレーズは歌詞に使わないこと: ${phrases.map(p => `「${p}」`).join('')}`);
  }

  const introVal = document.querySelector('.io-btn.active[data-group="intro"]')?.dataset.value ?? 'no';
  const outroVal = document.querySelector('.io-btn.active[data-group="outro"]')?.dataset.value ?? 'no';
  lines.push(introVal === 'no' ? '- イントロなし（冒頭から歌詞で始めること）' : '- イントロあり（曲頭に器楽イントロを入れること）');
  lines.push(outroVal === 'no' ? '- アウトロなし（歌詞で曲を締めくくること）' : '- アウトロあり（曲末に器楽アウトロを入れること）');

  const styleTemplIdx = parseInt(document.getElementById('req-style-template')?.value ?? '-1');
  lines.push('');
  lines.push('【スタイルタグ（styles フィールド）】');
  if (styleTemplIdx >= 0 && styleTemplIdx < STYLE_TEMPLATES.length) {
    const tmpl = STYLE_TEMPLATES[styleTemplIdx];
    lines.push(`- テンプレート「${tmpl.name}」を全曲の styles フィールドにそのまま使用してください:`);
    lines.push(`  "${tmpl.styles}"`);
  } else {
    lines.push('- 15〜20 個のカンマ区切りタグで記述する');
    lines.push('- j-pop, kawaii, female vocal を基本に、指定のジャンル・ムードを反映する');
  }

  lines.push('');
  lines.push('【フォーマット参考（CLAUDE.md のスキーマ準拠）】');
  lines.push(`id: "song-{uuid8}", created_at: "{ISO datetime}", title, lyrics, styles, language: "${languageCode}", theme, mood, genre, status: "unused", playlist_id: ${playlistId ? `"${playlistId}"` : 'null'}, request_config: (下記JSONをそのまま文字列で)`);

  lines.push('');
  lines.push('【request_config（各曲のPOSTデータに "request_config" フィールドとして含めること）】');
  lines.push(JSON.stringify(captureRequestConfig()));

  return lines.join('\n');
}

function updatePromptOutput() {
  const el = document.getElementById('prompt-output');
  if (el) el.value = generatePrompt();
}

function copyPrompt(btn) {
  const text = document.getElementById('prompt-output')?.value;
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'コピー済み';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'コピー'; btn.classList.remove('copied'); }, 1500);
  });
}

document.querySelectorAll('.count-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updatePromptOutput();
  });
});

document.querySelectorAll('.io-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll(`.io-btn[data-group="${btn.dataset.group}"]`).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (btn.dataset.group === 'struct-mode') {
      const area = document.getElementById('struct-custom-area');
      if (area) area.style.display = btn.dataset.value === 'custom' ? 'flex' : 'none';
    }
    if (btn.dataset.group === 'lang-mode') {
      const area = document.getElementById('lang-custom-area');
      if (area) area.style.display = btn.dataset.value === 'custom' ? '' : 'none';
    }
    updatePromptOutput();
  });
});

['req-theme', 'req-mood', 'req-genre', 'req-extra', 'req-include-phrases', 'req-exclude-phrases'].forEach(id => {
  document.getElementById(id)?.addEventListener('input', updatePromptOutput);
});
document.getElementById('req-playlist')?.addEventListener('change', updatePromptOutput);
document.getElementById('req-lang-slider')?.addEventListener('input', () => syncLangSlider('slider'));
document.getElementById('req-ja-pct')?.addEventListener('input', () => syncLangSlider('ja'));
document.getElementById('req-en-pct')?.addEventListener('input', () => syncLangSlider('en'));

function renderThemeTags() {
  const container = document.getElementById('req-theme-tags');
  if (!container) return;
  container.innerHTML = THEME_TEMPLATES.map((t, i) =>
    `<button class="theme-tag${selectedThemes.has(t) ? ' selected' : ''}" onclick="toggleTheme(${i})">${esc(t)}</button>`
  ).join('');
}

function toggleTheme(idx) {
  const name = THEME_TEMPLATES[idx];
  if (selectedThemes.has(name)) selectedThemes.delete(name);
  else selectedThemes.add(name);
  renderThemeTags();
  updatePromptOutput();
}

function renderMoodTags() {
  const container = document.getElementById('req-mood-tags');
  if (!container) return;
  container.innerHTML = MOOD_TEMPLATES.map((t, i) =>
    `<button class="theme-tag${selectedMoods.has(t) ? ' selected' : ''}" onclick="toggleMood(${i})">${esc(t)}</button>`
  ).join('');
}

function toggleMood(idx) {
  const name = MOOD_TEMPLATES[idx];
  if (selectedMoods.has(name)) selectedMoods.delete(name);
  else selectedMoods.add(name);
  renderMoodTags();
  updatePromptOutput();
}

function renderGenreTags() {
  const container = document.getElementById('req-genre-tags');
  if (!container) return;
  container.innerHTML = GENRE_TEMPLATES.map((t, i) =>
    `<button class="theme-tag${selectedGenres.has(t) ? ' selected' : ''}" onclick="toggleGenre(${i})">${esc(t)}</button>`
  ).join('');
}

function toggleGenre(idx) {
  const name = GENRE_TEMPLATES[idx];
  if (selectedGenres.has(name)) selectedGenres.delete(name);
  else selectedGenres.add(name);
  renderGenreTags();
  updatePromptOutput();
}

function syncLangSlider(source) {
  const slider = document.getElementById('req-lang-slider');
  const jaInput = document.getElementById('req-ja-pct');
  const enInput = document.getElementById('req-en-pct');
  if (!slider || !jaInput || !enInput) return;

  if (source === 'slider') {
    const val = parseInt(slider.value);
    jaInput.value = val;
    enInput.value = 100 - val;
  } else if (source === 'ja') {
    const val = Math.max(0, Math.min(100, parseInt(jaInput.value) || 0));
    jaInput.value = val;
    enInput.value = 100 - val;
    slider.value = val;
  } else {
    const val = Math.max(0, Math.min(100, parseInt(enInput.value) || 0));
    enInput.value = val;
    jaInput.value = 100 - val;
    slider.value = 100 - val;
  }
  slider.style.background = `linear-gradient(to right, var(--accent) ${slider.value}%, var(--border) ${slider.value}%)`;
  updatePromptOutput();
}

function renderSectionPalette() {
  const palette = document.getElementById('section-palette');
  if (!palette) return;
  palette.innerHTML = SECTION_TYPES.map(sec =>
    `<button class="palette-btn" data-id="${sec.id}" style="--sec-color:${sec.color}">＋ ${sec.label}</button>`
  ).join('');
  palette.querySelectorAll('.palette-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      songStructure.push(btn.dataset.id);
      renderStructure();
      updatePromptOutput();
    });
  });
}

function renderStructure() {
  const container = document.getElementById('structure-sequence');
  if (!container) return;
  if (songStructure.length === 0) {
    container.innerHTML = '<div class="structure-empty">↑ セクションをクリックして追加</div>';
    return;
  }
  const cards = songStructure.map((secId, idx) => {
    const sec = SECTION_TYPES.find(s => s.id === secId) || { label: secId, color: '#666' };
    return `<div class="structure-card" draggable="true" data-idx="${idx}" style="--sec-color:${sec.color}">
      <span class="card-num">${idx + 1}</span>
      <span class="card-label">${esc(sec.label)}</span>
      <button class="card-remove" data-idx="${idx}" title="削除">×</button>
    </div>`;
  });
  container.innerHTML = cards.reduce((html, card, idx) => {
    html += card;
    if (idx < cards.length - 1) html += '<span class="struct-arrow">→</span>';
    return html;
  }, '');

  container.querySelectorAll('.structure-card').forEach(card => {
    card.addEventListener('dragstart', e => {
      structureDragSrcIdx = parseInt(card.dataset.idx);
      e.dataTransfer.effectAllowed = 'move';
      setTimeout(() => card.classList.add('dragging'), 0);
    });
    card.addEventListener('dragend', () => {
      structureDragSrcIdx = null;
      container.querySelectorAll('.structure-card').forEach(c => {
        c.classList.remove('dragging', 'drag-over');
      });
    });
    card.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      container.querySelectorAll('.structure-card').forEach(c => c.classList.remove('drag-over'));
      if (parseInt(card.dataset.idx) !== structureDragSrcIdx) card.classList.add('drag-over');
    });
    card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
    card.addEventListener('drop', e => {
      e.preventDefault();
      const targetIdx = parseInt(card.dataset.idx);
      if (structureDragSrcIdx !== null && structureDragSrcIdx !== targetIdx) {
        const moved = songStructure.splice(structureDragSrcIdx, 1)[0];
        songStructure.splice(targetIdx, 0, moved);
        renderStructure();
        updatePromptOutput();
      }
    });
  });

  container.querySelectorAll('.card-remove').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      songStructure.splice(parseInt(btn.dataset.idx), 1);
      renderStructure();
      updatePromptOutput();
    });
  });
}

function populateStructureTemplateSelect() {
  const sel = document.getElementById('req-structure-template');
  if (!sel) return;
  STRUCTURE_TEMPLATES.forEach((tmpl, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = tmpl.name;
    sel.appendChild(opt);
  });
}

function applyStructureTemplate(val) {
  const idx = parseInt(val);
  if (!isNaN(idx) && idx >= 0 && idx < STRUCTURE_TEMPLATES.length) {
    songStructure = [...STRUCTURE_TEMPLATES[idx].sections];
    renderStructure();
    updatePromptOutput();
  }
  document.getElementById('req-structure-template').value = '';
}

// ---- Phrase management ----

function getFilteredPhrases() {
  return phrases.filter(p => {
    if (phraseFilter === 'unused' && p.status !== 'unused') return false;
    if (phraseFilter === 'used' && p.status !== 'used') return false;
    if (phraseFilter === 'fav' && !p.favorited) return false;
    if (phraseSearch) {
      const q = phraseSearch.toLowerCase();
      return (p.text || '').toLowerCase().includes(q) ||
             (p.note || '').toLowerCase().includes(q) ||
             (p.tags || '').toLowerCase().includes(q);
    }
    return true;
  });
}

function renderPhraseList() {
  const list = document.getElementById('phrase-list');
  if (!list) return;
  const filtered = getFilteredPhrases();
  if (filtered.length === 0) {
    list.innerHTML = '<div class="empty-list">フレーズがありません</div>';
    return;
  }
  list.innerHTML = filtered.map(p => {
    const sec = PHRASE_SECTIONS.find(s => s.id === p.section) || { label: '汎用' };
    const preview = (p.text || '').replace(/\n/g, ' ').slice(0, 36);
    const isSelected = selectedPhraseId === p.id;
    const isUsed = p.status === 'used';
    return `<div class="phrase-item${isSelected ? ' selected' : ''}${isUsed ? ' used' : ''}" onclick="selectPhrase('${p.id}')">
      <div class="phrase-item-text">${esc(preview)}${(p.text?.length || 0) > 36 ? '…' : ''}</div>
      <div class="phrase-item-meta">
        <span class="section-badge section-${p.section}">${sec.label}</span>
        ${p.favorited ? '<span class="phrase-fav-mark">⭐</span>' : ''}
        ${isUsed ? '<span class="phrase-used-mark">使用済</span>' : ''}
      </div>
    </div>`;
  }).join('');
}

function selectPhrase(id) {
  selectedPhraseId = id;
  renderPhraseList();
  renderPhraseDetail();
}

function renderPhraseDetail() {
  const detail = document.getElementById('phrase-detail');
  if (!detail) return;

  if (!selectedPhraseId) {
    detail.innerHTML = renderPhraseGenerateArea();
    attachPhraseGenerateListeners(detail);
    return;
  }

  const p = phrases.find(ph => ph.id === selectedPhraseId);
  if (!p) {
    detail.innerHTML = renderPhraseGenerateArea();
    attachPhraseGenerateListeners(detail);
    return;
  }

  const sectionOpts = PHRASE_SECTIONS.map(s =>
    `<option value="${s.id}"${p.section === s.id ? ' selected' : ''}>${s.label}</option>`
  ).join('');
  let tagsStr = '';
  try { tagsStr = p.tags ? JSON.parse(p.tags).join(', ') : ''; } catch(e) { tagsStr = p.tags || ''; }
  const isUsed = p.status === 'used';

  detail.innerHTML = `
    <div class="detail-content">
      <div class="detail-field">
        <label class="field-label">フレーズ</label>
        <textarea class="detail-textarea" id="edit-phrase-text" rows="5">${esc(p.text || '')}</textarea>
      </div>
      <div class="detail-field">
        <label class="field-label">使用場所</label>
        <select class="form-select" id="edit-phrase-section">${sectionOpts}</select>
      </div>
      <div class="detail-field">
        <label class="field-label">タグ</label>
        <input class="detail-input" id="edit-phrase-tags" value="${esc(tagsStr)}" placeholder="テーマ・ムードなど（カンマ区切り）">
      </div>
      <div class="detail-field">
        <label class="field-label">メモ</label>
        <input class="detail-input" id="edit-phrase-note" value="${esc(p.note || '')}" placeholder="メモ...">
      </div>
    </div>
    <div class="detail-footer">
      <button class="phrase-fav-btn${p.favorited ? ' active' : ''}" onclick="togglePhraseFav('${p.id}')" title="お気に入り">⭐</button>
      <button class="phrase-status-btn ${p.status}" onclick="togglePhraseStatus('${p.id}','${p.status}')">
        ${isUsed ? '使用済み' : '未使用'}
      </button>
      <button class="delete-btn" onclick="deletePhrase('${p.id}')">削除</button>
      <button class="save-btn" onclick="savePhrase('${p.id}')">保存</button>
    </div>
  `;
}

function renderPhraseThemeTags() {
  const el = document.getElementById('gen-phrase-theme-tags');
  if (!el) return;
  el.innerHTML = THEME_TEMPLATES.map((t, i) =>
    `<button class="theme-tag${selectedPhraseThemes.has(t) ? ' selected' : ''}" onclick="togglePhraseTheme(${i})">${esc(t)}</button>`
  ).join('');
}

function togglePhraseTheme(idx) {
  const name = THEME_TEMPLATES[idx];
  if (selectedPhraseThemes.has(name)) selectedPhraseThemes.delete(name);
  else selectedPhraseThemes.add(name);
  renderPhraseThemeTags();
  updatePhrasePromptOutput();
}

function renderPhraseMoodTags() {
  const el = document.getElementById('gen-phrase-mood-tags');
  if (!el) return;
  el.innerHTML = MOOD_TEMPLATES.map((t, i) =>
    `<button class="theme-tag${selectedPhraseMoods.has(t) ? ' selected' : ''}" onclick="togglePhraseMood(${i})">${esc(t)}</button>`
  ).join('');
}

function togglePhraseMood(idx) {
  const name = MOOD_TEMPLATES[idx];
  if (selectedPhraseMoods.has(name)) selectedPhraseMoods.delete(name);
  else selectedPhraseMoods.add(name);
  renderPhraseMoodTags();
  updatePhrasePromptOutput();
}

function renderPhraseGenerateArea() {
  const sectionOpts = PHRASE_SECTIONS.map(s =>
    `<option value="${s.id}">${s.label}</option>`
  ).join('');
  return `
    <div class="phrase-generate-area">
      <div class="phrase-generate-title">フレーズを生成</div>
      <div class="form-row">
        <label class="form-label">テーマ</label>
        <div class="theme-tags" id="gen-phrase-theme-tags"></div>
        <input class="form-input" id="gen-phrase-theme" placeholder="その他のテーマ...">
      </div>
      <div class="form-row">
        <label class="form-label">ムード</label>
        <div class="theme-tags" id="gen-phrase-mood-tags"></div>
        <input class="form-input" id="gen-phrase-mood" placeholder="その他のムード...">
      </div>
      <div class="form-row">
        <label class="form-label">使用場所</label>
        <select class="form-select" id="gen-phrase-section">${sectionOpts}</select>
      </div>
      <div class="form-row">
        <label class="form-label">件数</label>
        <div class="count-group">
          <button class="count-btn phrase-count-btn" data-value="3">3</button>
          <button class="count-btn phrase-count-btn active" data-value="5">5</button>
          <button class="count-btn phrase-count-btn" data-value="10">10</button>
        </div>
      </div>
      <div class="form-row">
        <label class="form-label">追加条件</label>
        <textarea class="form-textarea" id="gen-phrase-extra" placeholder="例: 英語フレーズも含める、短めで覚えやすい"></textarea>
      </div>
      <div class="output-header">
        <span class="form-label">生成プロンプト</span>
        <button class="copy-btn" onclick="copyPhrasePrompt(this)">コピー</button>
      </div>
      <textarea class="prompt-output phrase-prompt-output" id="phrase-prompt-output" readonly></textarea>
    </div>
  `;
}

function attachPhraseGenerateListeners(container) {
  renderPhraseThemeTags();
  renderPhraseMoodTags();
  container.querySelectorAll('.phrase-count-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.phrase-count-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updatePhrasePromptOutput();
    });
  });
  ['gen-phrase-theme', 'gen-phrase-mood', 'gen-phrase-extra'].forEach(id => {
    container.querySelector(`#${id}`)?.addEventListener('input', updatePhrasePromptOutput);
  });
  container.querySelector('#gen-phrase-section')?.addEventListener('change', updatePhrasePromptOutput);
  updatePhrasePromptOutput();
}

function updatePhrasePromptOutput() {
  const el = document.getElementById('phrase-prompt-output');
  if (el) el.value = generatePhrasePrompt();
}

function generatePhrasePrompt() {
  const themeInput = document.getElementById('gen-phrase-theme')?.value.trim() || '';
  const moodInput = document.getElementById('gen-phrase-mood')?.value.trim() || '';
  const sectionId = document.getElementById('gen-phrase-section')?.value || 'general';
  const count = document.querySelector('.phrase-count-btn.active')?.dataset.value || '5';
  const extra = document.getElementById('gen-phrase-extra')?.value.trim() || '';
  const secLabel = PHRASE_SECTIONS.find(s => s.id === sectionId)?.label || '汎用';

  const themeParts = [...selectedPhraseThemes];
  if (themeInput) themeParts.push(themeInput);
  const moodParts = [...selectedPhraseMoods];
  if (moodInput) moodParts.push(moodInput);

  const lines = [];
  lines.push(`Suno用の歌詞フレーズ案を ${count} 個生成し、http://localhost:8765/api/phrases/add にPOSTして保存してください。`);
  lines.push('');
  lines.push('【条件】');
  if (themeParts.length) lines.push(`- テーマ: ${themeParts.join('、')}`);
  if (moodParts.length) lines.push(`- ムード: ${moodParts.join('・')}`);
  lines.push(`- 使用場所: ${secLabel}`);
  lines.push('- キャッチーで耳に残るフレーズ');
  lines.push('- 読み方が難しい漢字にはカタカナ読みを（）で付けること');
  if (extra) { lines.push(''); lines.push('【追加条件】'); lines.push(extra); }
  lines.push('');
  lines.push('【フォーマット（配列でPOST）】');
  lines.push(`[{ "id": "phrase-{uuid8}", "created_at": "{ISO datetime}", "text": "フレーズ本文", "section": "${sectionId}", "tags": null, "status": "unused", "favorited": 0, "note": null }]`);
  return lines.join('\n');
}

function copyPhrasePrompt(btn) {
  const text = document.getElementById('phrase-prompt-output')?.value;
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'コピー済み';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'コピー'; btn.classList.remove('copied'); }, 1500);
  });
}

function showPhraseGenerateArea() {
  selectedPhraseId = null;
  renderPhraseList();
  renderPhraseDetail();
}

function newPhrase() {
  selectedPhraseId = '__new__';
  renderPhraseList();
  const detail = document.getElementById('phrase-detail');
  if (!detail) return;
  const sectionOpts = PHRASE_SECTIONS.map(s => `<option value="${s.id}">${s.label}</option>`).join('');
  detail.innerHTML = `
    <div class="detail-content">
      <div class="detail-field">
        <label class="field-label">フレーズ</label>
        <textarea class="detail-textarea" id="edit-phrase-text" rows="5" placeholder="フレーズを入力..."></textarea>
      </div>
      <div class="detail-field">
        <label class="field-label">使用場所</label>
        <select class="form-select" id="edit-phrase-section">${sectionOpts}</select>
      </div>
      <div class="detail-field">
        <label class="field-label">タグ</label>
        <input class="detail-input" id="edit-phrase-tags" placeholder="テーマ・ムードなど（カンマ区切り）">
      </div>
      <div class="detail-field">
        <label class="field-label">メモ</label>
        <input class="detail-input" id="edit-phrase-note" placeholder="メモ...">
      </div>
    </div>
    <div class="detail-footer">
      <button class="delete-btn" onclick="selectedPhraseId=null;renderPhraseList();renderPhraseDetail()">キャンセル</button>
      <button class="save-btn" onclick="createPhrase()">保存</button>
    </div>
  `;
  document.getElementById('edit-phrase-text')?.focus();
}

async function createPhrase() {
  const text = document.getElementById('edit-phrase-text')?.value.trim();
  if (!text) { showToast('フレーズを入力してください'); return; }
  const section = document.getElementById('edit-phrase-section')?.value || 'general';
  const tagsRaw = document.getElementById('edit-phrase-tags')?.value.trim();
  const tags = tagsRaw ? JSON.stringify(tagsRaw.split(/[,、，]/).map(t => t.trim()).filter(Boolean)) : null;
  const note = document.getElementById('edit-phrase-note')?.value.trim() || null;

  const id = 'phrase-' + Array.from(crypto.getRandomValues(new Uint8Array(4))).map(b => b.toString(16).padStart(2,'0')).join('');
  const created_at = new Date().toISOString();
  const phrase = { id, created_at, text, section, tags, status: 'unused', favorited: 0, note };

  await fetch('/api/phrases/add', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([phrase]),
  });
  phrases.unshift(phrase);
  selectedPhraseId = id;
  renderPhraseList();
  renderPhraseDetail();
  showToast('保存しました');
}

async function savePhrase(id) {
  const text = document.getElementById('edit-phrase-text')?.value.trim();
  if (!text) { showToast('フレーズを入力してください'); return; }
  const section = document.getElementById('edit-phrase-section')?.value || 'general';
  const tagsRaw = document.getElementById('edit-phrase-tags')?.value.trim();
  const tags = tagsRaw ? JSON.stringify(tagsRaw.split(/[,、，]/).map(t => t.trim()).filter(Boolean)) : null;
  const note = document.getElementById('edit-phrase-note')?.value.trim() || null;

  await fetch('/api/phrases/update', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, text, section, tags, note }),
  });
  const p = phrases.find(ph => ph.id === id);
  if (p) { p.text = text; p.section = section; p.tags = tags; p.note = note; }
  renderPhraseList();
  showToast('保存しました');
}

async function togglePhraseStatus(id, current) {
  const next = current === 'unused' ? 'used' : 'unused';
  await fetch('/api/phrases/status', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, status: next }),
  });
  const p = phrases.find(ph => ph.id === id);
  if (p) p.status = next;
  renderPhraseList();
  renderPhraseDetail();
}

async function togglePhraseFav(id) {
  const p = phrases.find(ph => ph.id === id);
  if (!p) return;
  const next = p.favorited ? 0 : 1;
  await fetch('/api/phrases/favorite', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, favorited: next }),
  });
  p.favorited = next;
  renderPhraseList();
  renderPhraseDetail();
}

async function deletePhrase(id) {
  if (!confirm('このフレーズを削除しますか？')) return;
  await fetch('/api/phrases/delete', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  phrases = phrases.filter(p => p.id !== id);
  selectedPhraseId = null;
  renderPhraseList();
  renderPhraseDetail();
  showToast('削除しました');
}

document.querySelectorAll('.filter-btn[data-phrase-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn[data-phrase-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    phraseFilter = btn.dataset.phraseFilter;
    renderPhraseList();
  });
});

document.getElementById('phrase-search-input')?.addEventListener('input', e => {
  phraseSearch = e.target.value;
  renderPhraseList();
});

function populateStyleTemplateSelect() {
  const sel = document.getElementById('req-style-template');
  if (!sel || sel.options.length > 1) return;
  STYLE_TEMPLATES.forEach((t, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = t.name;
    sel.appendChild(opt);
  });
}

document.getElementById('req-style-template')?.addEventListener('change', updatePromptOutput);

populateStyleTemplateSelect();
populateStructureTemplateSelect();
renderSectionPalette();
renderStructure();
renderThemeTags();
renderMoodTags();
renderGenreTags();
syncLangSlider('slider');
fetchAll();
setInterval(fetchAll, 5000);
