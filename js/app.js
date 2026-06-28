let lang = 'th';

// utils 
const t = (th, en) => lang === 'th' ? th : en;
const el = id => document.getElementById(id);
const icon = (name, size = 15) => `<i class="ti ${name}" style="font-size:${size}px;"></i>`;

// LANG TOGGLE 
function toggleLang() {
  lang = lang === 'th' ? 'en' : 'th';
  el('langBtn').textContent = lang === 'th' ? 'EN' : 'TH';
  document.querySelector('html').lang = lang;

  // i18n elements
  document.querySelectorAll('.i18n').forEach(e => {
    const val = e.dataset[lang];
    if (val !== undefined) e.textContent = val;
  });

  // re-render dynamic sections
  renderHero();
  renderAbout();
  renderFacts();
  renderWorks(currentTab);
  renderSocial();
  renderContact();
  renderUpcoming();
  renderVlog();
  renderSertist();
  renderBNK48();
}

// MOBILE MENU
function toggleMenu() {
  el('mobileMenu').classList.toggle('open');
}

// NAV SCROLL 
window.addEventListener('scroll', () => {
  el('nav').classList.toggle('scrolled', window.scrollY > 20);
});

// HERO 
function renderHero() {
  el('heroTag').textContent  = t(SU.role_th, SU.role_en);
  el('heroName').textContent = t(SU.name_th, SU.name_en);
  el('heroAgency').textContent = '';
  // ปรับขนาดชื่อตามภาษา — ไทยยาวกว่า ใช้ font เล็กกว่า
  el('heroName').style.fontSize = lang === 'th'
    ? 'clamp(28px, 6vw, 56px)'
    : 'clamp(36px, 8vw, 80px)';
  const tagChips = SU.tags.map(tag => `<span class="chip">${tag}</span>`).join('');
  el('heroChips').innerHTML = tagChips;
}

// ABOUT 
function renderAbout() {
  // name_info grid
  const nameItems = (SU.name_info || []).map(n => `
    <div class="about-item fade-in">
      <div class="about-label">${t(n.label_th, n.label_en)}</div>
      <div class="about-val">${t(n.value_th, n.value_en)}</div>
    </div>`).join('');
  el('aboutGrid').innerHTML = nameItems;

  // bio
  el('bioText').textContent = t(SU.bio_th, SU.bio_en);

  // timeline
  const tlEl = document.getElementById('timelineContent');
  if (tlEl && SU.timeline) {
    tlEl.innerHTML = SU.timeline.map(item => `
      <div class="tl-item fade-in">
        <div class="tl-dot"></div>
        <div class="tl-year">${item.year}</div>
        <div class="tl-text">${t(item.th, item.en)}</div>
      </div>`).join('');
  }

  el('factsTitle').textContent = t(`Facts เกี่ยวกับ ${SU.name_th}`, `Facts about ${SU.name_en}`);
  initFadeIn();
}

// FACTS 
function renderFacts() {
  el('factsGrid').innerHTML = SU.facts.map(f => `
    <div class="fact-card fade-in">
      <div class="fact-icon"><i class="ti ${f.icon}"></i></div>
      <div class="fact-text">${t(f.th, f.en)}</div>
    </div>
  `).join('');
  initFadeIn();
}

// WORKS 
let currentTab = 'all';
let currentPage = 1;
const WORKS_PER_PAGE = 6;
const workCategories = [
  { key: 'all',    th: 'ทั้งหมด',    en: 'All' },
  { key: 'series', th: 'Series',     en: 'Series' },
  { key: 'movie',  th: 'ภาพยนตร์',   en: 'Movies' },
  { key: 'mv',     th: 'MV',         en: 'MV' },
  { key: 'bnk48',  th: 'BNK48 Song', en: 'BNK48 Song' },
  { key: 'awards', th: 'รางวัล',      en: 'Awards' },
  { key: 'other',  th: 'อื่น ๆ',      en: 'Other' },
];
const workIcons = { series:'ti-device-tv', movie:'ti-movie', mv:'ti-music', bnk48:'ti-music', other:'ti-photo' };

function renderWorkTabs() {
  el('workTabs').innerHTML = workCategories.map(c => `
    <button class="work-tab ${currentTab === c.key ? 'active' : ''}" onclick="switchTab('${c.key}')">
      ${t(c.th, c.en)}
    </button>
  `).join('');
}

function switchTab(key) {
  currentTab = key;
  currentPage = 1;
  renderWorks(key);
}

function renderWorks(tab) {
  renderWorkTabs();
  const filtered = tab === 'all'
    ? SU.works.slice().sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : (parseInt(a.year) || 0);
        const dateB = b.date ? new Date(b.date).getTime() : (parseInt(b.year) || 0);
        return dateB - dateA;
      })
    : SU.works.filter(w => w.category === tab);
  // awards tab
  if (tab === 'awards') {
    const paginationEl = el('workPagination');
    if (paginationEl) paginationEl.style.display = 'none';
    if (!SU.awards || SU.awards.length === 0) {
      el('workGrid').innerHTML = `<p style="color:var(--gray-400);font-size:13px;">${t('ยังไม่มีข้อมูลรางวัล','No awards data yet')}</p>`;
      return;
    }
    el('workGrid').style.display = 'block';
    el('workGrid').innerHTML = `<div class="awards-list">${SU.awards.map(a => `
      <div class="award-card fade-in">
        <div class="award-icon"><i class="ti ${a.icon}"></i></div>
        <div class="award-info">
          <div class="award-title">${t(a.title_th, a.title_en)}</div>
          <div class="award-event">${t(a.event_th, a.event_en)}</div>
        </div>
        <div class="award-year">${a.year}</div>
      </div>
    `).join('')}</div>`;
    initFadeIn();
    return;
  }
  el('workGrid').style.display = '';

  const totalPages = Math.ceil(filtered.length / WORKS_PER_PAGE);
  if (currentPage > totalPages) currentPage = 1;
  const start = (currentPage - 1) * WORKS_PER_PAGE;
  const paged = filtered.slice(start, start + WORKS_PER_PAGE);

  // pagination bar
  const paginationEl = document.getElementById('workPagination');
  if (paginationEl) {
    if (totalPages > 1) {
      const dots = Array.from({length: totalPages}, (_, i) =>
        `<span class="page-dot ${i+1 === currentPage ? 'active' : ''}" onclick="goPage(${i+1})"></span>`
      ).join('');
      paginationEl.innerHTML = `
        <span class="page-info">${start+1}–${Math.min(start+WORKS_PER_PAGE, filtered.length)} ${t('จาก','of')} ${filtered.length} ${t('ผลงาน','works')}</span>
        <div class="page-controls">
          <div class="page-dots">${dots}</div>
          <button class="page-btn" onclick="goPage(${currentPage-1})" ${currentPage===1?'disabled':''}>‹</button>
          <button class="page-btn" onclick="goPage(${currentPage+1})" ${currentPage===totalPages?'disabled':''}>›</button>
        </div>`;
      paginationEl.style.display = 'flex';
    } else {
      paginationEl.style.display = 'none';
    }
  }

  el('workGrid').innerHTML = paged.length === 0
    ? `<p style="color:var(--gray-400);font-size:13px;grid-column:1/-1;">TBC</p>`
    : paged.map(w => {
      const ico = workIcons[w.category] || 'ti-photo';
      const imgHtml = w.image
        ? `<img src="${w.image}" alt="${t(w.title_th, w.title_en)}" onerror="this.style.display='none'" />`
        : `<i class="ti ${ico}" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:30px;color:var(--red);opacity:0.35;"></i>`;
      const playBtn = w.youtube_url
        ? `<div class="work-play"><div class="work-play-btn"><i class="ti ti-player-play"></i></div></div>`
        : '';
      // badge นักร้อง/นักแสดง
      const badgeHtml = w.role
        ? `<span class="work-role-badge ${w.role}">${w.role === 'singer' ? t('นักร้อง','Singer') : t('นักแสดง','Actress')}</span>`
        : '';
      // ปุ่ม spin-off และ platform
      const spinBtns = (w.spinoffs || []).map(s =>
        `<a class="work-extra-btn spin" href="${s.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
          <i class="ti ti-movie" style="font-size:10px;"></i> ${t(s.title_th, s.title_en)}
        </a>`).join('');
      const platformBtns = (w.platforms || []).map(p =>
        `<a class="work-extra-btn ${p.name.toLowerCase().includes('netflix') ? 'netflix' : 'platform'}" href="${p.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
          <i class="ti ${p.name.toLowerCase().includes('netflix') ? 'ti-brand-netflix' : 'ti-player-play'}" style="font-size:10px;"></i> ${p.name}
        </a>`).join('');
      const extraRow = (spinBtns || platformBtns) ? `<div class="work-extra-btns">${spinBtns}${platformBtns}</div>` : '';

      const imgWrapper = w.youtube_url
        ? `<a href="${w.youtube_url}" target="_blank" rel="noopener" style="display:block;"><div class="work-img">${imgHtml}${playBtn}${badgeHtml}</div></a>`
        : `<div class="work-img">${imgHtml}${playBtn}${badgeHtml}</div>`;
      const cardInner = `
        ${imgWrapper}
        <div class="work-info">
          <div class="work-title">${t(w.title_th, w.title_en)}</div>
          <div class="work-year">${w.year}</div>
          ${extraRow}
        </div>`;

      return `<div class="work-card fade-in">${cardInner}</div>`;
    }).join('');
  initFadeIn();
}

// SOCIAL
function renderSocial() {
  const s = SU.social;

  const hashX = SU.hashtags_x.map(h =>
    `<a class="soc-tag" href="https://x.com/search?q=%23${h}" target="_blank"># ${h}</a>`
  ).join('');

  const hashTT = SU.hashtags_tiktok.map(h =>
    `<a class="soc-tag" href="https://www.tiktok.com/search?q=%23${h}" target="_blank"># ${h}</a>`
  ).join('');

  el('socialGrid').innerHTML = `
    <a class="soc-card" href="${s.instagram_main.url}" target="_blank">
      <div class="soc-top">
        <div class="soc-icon">${icon('ti-brand-instagram')}</div>
        <div class="soc-info">
          <div class="soc-name">Instagram</div>
          <div class="soc-handle">${s.instagram_main.handle}</div>
        </div>
        <div class="soc-badges"><span class="soc-badge">${t('หลัก','Main')}</span></div>
      </div>
    </a>
    <a class="soc-card" href="${s.instagram_daily.url}" target="_blank">
      <div class="soc-top">
        <div class="soc-icon">${icon('ti-brand-instagram')}</div>
        <div class="soc-info">
          <div class="soc-name">Instagram</div>
          <div class="soc-handle">${s.instagram_daily.handle}</div>
        </div>
        <div class="soc-badges"><span class="soc-badge gray">${t('ชีวิตประจำวัน','Daily life')}</span></div>
      </div>
    </a>
    <a class="soc-card" href="${s.facebook.url}" target="_blank">
      <div class="soc-top">
        <div class="soc-icon">${icon('ti-brand-facebook')}</div>
        <div class="soc-info">
          <div class="soc-name">Facebook</div>
          <div class="soc-handle">${s.facebook.handle}</div>
        </div>
      </div>
    </a>
    <a class="soc-card" href="${s.youtube.url}" target="_blank">
      <div class="soc-top">
        <div class="soc-icon">${icon('ti-brand-youtube')}</div>
        <div class="soc-info">
          <div class="soc-name">YouTube</div>
          <div class="soc-handle">${s.youtube.handle}</div>
        </div>
      </div>
    </a>
    <div class="soc-card">
      <div class="soc-top">
        <div class="soc-icon">${icon('ti-brand-x')}</div>
        <div class="soc-info">
          <div class="soc-name">X (Twitter)</div>
          <div class="soc-handle">${s.x.handle}</div>
        </div>
        <div class="soc-badges">
          <a href="${s.x.url}" target="_blank" class="soc-badge" style="text-decoration:none;">${t('เปิดแอค','Profile')}</a>
        </div>
      </div>
      <div class="soc-tags">
        ${hashX}
      </div>
    </div>
    <div class="soc-card">
      <div class="soc-top">
        <div class="soc-icon">${icon('ti-brand-tiktok')}</div>
        <div class="soc-info">
          <div class="soc-name">TikTok</div>
          <div class="soc-handle">${s.tiktok.handle}</div>
        </div>
        <div class="soc-badges">
          <a href="${s.tiktok.url}" target="_blank" class="soc-badge" style="text-decoration:none;">${t('เปิดแอค','Profile')}</a>
        </div>
      </div>
      <div class="soc-tags">
        ${hashTT}
      </div>
    </div>
  `;
}

// CONTACT 
function renderContact() {
  const b = SU.booking;
  const c = SU.collab;

  el('contactContent').innerHTML = `
    <div class="cbox">
      <div class="cbox-head">
        <div class="cbox-htitle">${t('ติดต่องาน', 'Contact')}</div>
        <div class="cbox-hdesc">${t(b.desc_th, b.desc_en)}</div>
      </div>
      <div class="cbox-body">
        <div class="crow">${t('อีเมล','Email')} : <strong>${b.email}</strong></div>
        <div class="crow">Line : <strong>${b.line}</strong></div>
        <div class="crow">Tel : <strong>${b.tel}</strong></div>
        <a href="mailto:${b.email}" class="send-btn">${icon('ti-mail',14)} ${t('ส่งอีเมลติดต่อ','Send Email')}</a>
        <div class="agency-social-label">${t('โซเชียลต้นสังกัด :','Agency Social :')}</div>
        <div class="agency-soc-row">
          <a class="agency-soc" href="${b.agency_ig.url}" target="_blank">${icon('ti-brand-instagram',14)} ${b.agency_ig.handle}</a>
          <a class="agency-soc" href="${b.agency_x.url}" target="_blank">${icon('ti-brand-x',14)} ${b.agency_x.handle}</a>
        </div>
      </div>
    </div>

    <div class="collab-box">
      <div class="collab-head">
        <div class="collab-htitle">SERTIST 🎬</div>
        <div class="collab-hdesc">${t(c.desc_th, c.desc_en)}</div>
      </div>
      <div class="collab-body">
        <div class="crow">${t('อีเมล','Email')} : <strong>${c.email}</strong></div>
        ${c.tel ? `<div class="crow">Tel : <strong>${c.tel}</strong></div>` : ''}
        <div style="font-size:11px;color:var(--gray-400);margin-top:4px;">${t('โซเชียล :','Social :')}</div>
        <div class="collab-soc-row">
          <a class="agency-soc" href="${c.social.youtube.url}" target="_blank">${icon('ti-brand-youtube',14)} ${c.social.youtube.handle}</a>
          <a class="agency-soc" href="${c.social.tiktok.url}" target="_blank">${icon('ti-brand-tiktok',14)} ${c.social.tiktok.handle}</a>
          <a class="agency-soc" href="${c.social.instagram.url}" target="_blank">${icon('ti-brand-instagram',14)} ${c.social.instagram.handle}</a>
          ${c.social.facebook ? `<a class="agency-soc" href="${c.social.facebook.url}" target="_blank">${icon('ti-brand-facebook',14)} ${c.social.facebook.handle}</a>` : ''}
        </div>
      </div>
    </div>
  `;
}

// FADE IN OBSERVER
function initFadeIn() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => obs.observe(el));
}

// INIT
function init() {
  renderUpcoming();
  renderVlog();
  renderSertist();
  renderBNK48();
  renderHero();
  renderAbout();
  renderFacts();
  renderWorks('all');
  renderSocial();
  renderContact();
  renderUpcoming();
  initFadeIn();
}

document.addEventListener('DOMContentLoaded', init);

// UPCOMING 
const upcomingCategories = [
  { key: 'all',    th: 'ทั้งหมด',   en: 'All' },
  { key: 'series', th: 'ซีรีส์ / ละคร', en: 'Series' },
  { key: 'mv',     th: 'MV / เพลง', en: 'MV / Music' },
  { key: 'movie',  th: 'ภาพยนตร์',  en: 'Movie' },
  { key: 'other',  th: 'อื่น ๆ',    en: 'Other' },
];
let upcomingTab = 'all';

function renderUpcomingFilter() {
  const availableCats = new Set(['all', ...SU.upcoming.map(u => u.category)]);
  el('upcomingFilter').innerHTML = upcomingCategories.map(c => {
    const hasData = availableCats.has(c.key);
    return `<button class="ufilter ${upcomingTab === c.key ? 'active' : ''} ${!hasData ? 'disabled' : ''}"
      ${hasData ? `onclick="switchUpcoming('${c.key}')"` : 'disabled'}
      style="${!hasData ? 'opacity:0.35;cursor:not-allowed;' : ''}">
      ${t(c.th, c.en)}
    </button>`;
  }).join('');
}

function switchUpcoming(key) {
  upcomingTab = key;
  renderUpcoming();
  renderVlog();
  renderSertist();
  renderBNK48();
}

function renderUpcoming() {
  el('upcomingTitle').textContent = 'Upcoming';
  renderUpcomingFilter();

  if (!SU.upcoming || SU.upcoming.length === 0) {
    el('upcomingGrid').innerHTML = `<div class="upcoming-empty">${t('ยังไม่มีงานที่กำลังจะมา', 'No upcoming projects yet')}</div>`;
    return;
  }

  const filtered = upcomingTab === 'all'
    ? SU.upcoming
    : SU.upcoming.filter(u => u.category === upcomingTab);

  if (filtered.length === 0) {
    el('upcomingGrid').innerHTML = `<div class="upcoming-empty">${t('ไม่มีงานในหมวดนี้', 'No upcoming projects in this category')}</div>`;
    return;
  }

  el('upcomingGrid').innerHTML = filtered.map((u, i) => {
    const _now2 = new Date();
    const _airDate2 = u.air_date ? new Date(u.air_date) : null;
    const isOnAir = !!(_airDate2 && _now2 >= _airDate2);
    const hasVideo = u.youtube_id && u.youtube_id.trim() !== '';
    const videoBlock = hasVideo
      ? `<div class="ucard-video">
          <iframe src="https://www.youtube.com/embed/${u.youtube_id}?rel=0&modestbranding=1"
            title="${t(u.title_th, u.title_en)}" allowfullscreen loading="lazy"></iframe>
        </div>`
      : `<div class="ucard-video">
          <div class="ucard-thumb" onclick="this.style.display='none'">
            <div class="ucard-play"><i class="ti ti-player-play"></i></div>
            <div class="ucard-thumb-label">${t('วิดีโอจะอัปเดตเร็วๆ นี้','Video coming soon')}</div>
          </div>
        </div>`;

    return `
      <div class="upcoming-card fade-in">
        <div class="ucard-topbar ${isOnAir ? 'onair' : ''}">
          <div class="ucard-dot-label">
            <div class="ucard-dot"></div>
            ${isOnAir ? t('กำลังออนแอร์', 'On Air Now') : t(u.badge_th, u.badge_en)}
          </div>
          ${isOnAir
            ? `<span class="ucard-onair-badge">On Air</span>`
            : `<div class="ucard-premiere">${t(u.premiere_th, u.premiere_en)}</div>`
          }
        </div>
        ${videoBlock}
        <div class="ucard-info">
          <div class="ucard-title">${t(u.title_th, u.title_en)}</div>
          <div class="ucard-meta">
            <span>${t('บทบาท : ', 'Role: ')}${t(u.role_th, u.role_en)}</span>
            <span class="ucard-meta-dot">·</span>
            <span>${u.platform}</span>
            <span class="ucard-meta-dot">·</span>
            <span>${t(u.premiere_th, u.premiere_en)}</span>
          </div>
          ${u.desc_th ? `<p class="ucard-desc">${t(u.desc_th, u.desc_en)}</p>` : ''}
          <div class="ucard-btn-row">
            ${u.youtube_url ? `<a class="ucard-btn" href="${u.youtube_url}" target="_blank" rel="noopener">
              <i class="ti ti-brand-youtube"></i>
              ${t('ดูบน YouTube', 'Watch on YouTube')}
            </a>` : ''}
            ${isOnAir && u.watch_platforms
              ? u.watch_platforms.filter(p => p.url).map(p =>
                  `<a class="ucard-btn-outline" href="${p.url}" target="_blank" rel="noopener">${p.name}</a>`
                ).join('')
              : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
  initFadeIn();
}

// VLOG
function renderVlog() {
  const v = SU.vlog;
  if (!v) return;
  const thumbs = v.videos.map(vid => {
    const url = vid.youtube_id
      ? `https://www.youtube.com/watch?v=${vid.youtube_id}`
      : '#';
    const bg = vid.thumb
      ? `<img src="${vid.thumb}" alt="${t(vid.title_th, vid.title_en)}" onerror="this.parentElement.style.background='linear-gradient(135deg,#1a0a0a,#3d1010)'">`
      : '';
    return `
      <a class="yt-card" href="${url}" target="_blank" rel="noopener">
        <div class="yt-thumb" style="background:linear-gradient(135deg,#1a0a0a,#3d1010);">
          ${bg}
          <div class="yt-play"><i class="ti ti-player-play"></i></div>
        </div>
        <div class="yt-label">${t(vid.title_th, vid.title_en)}</div>
      </a>`;
  }).join('');

  document.getElementById('vlogContent').innerHTML = `
    <a class="channel-row" href="${v.channel_url}" target="_blank" rel="noopener">
      <div class="ch-dot"></div>
      <div class="ch-name">${v.channel_name}</div>
      <div class="ch-link"><i class="ti ti-brand-youtube" style="font-size:14px;"></i> ${t('ไปที่ช่อง','Go to channel')} ↗</div>
    </a>
    <div class="yt-grid">${thumbs}</div>
  `;
}


// SERTIST 
function renderSertist() {
  const s = SU.sertist;
  if (!s) return;
  const thumbs = s.videos.map((vid, i) => {
    const colors = [
      'linear-gradient(135deg,#1a150a,#3d300a)',
      'linear-gradient(135deg,#0a1a15,#0a3d30)',
      'linear-gradient(135deg,#150a1a,#300a3d)'
    ];
    const url = vid.youtube_id ? `https://www.youtube.com/watch?v=${vid.youtube_id}` : '#';
    const bg = vid.thumb ? `<img src="${vid.thumb}" alt="${t(vid.title_th, vid.title_en)}" onerror="this.parentElement.style.background='${colors[i%3]}'">` : '';
    const playlistBtn = vid.playlist_url
      ? `<a class="yt-playlist-btn" href="${vid.playlist_url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
          <i class="ti ti-list" style="font-size:10px;"></i> ${t('ดู Playlist','View Playlist')}
         </a>`
      : '';
    return `
      <div class="yt-card-wrap">
        <a class="yt-card" href="${url}" target="_blank" rel="noopener">
          <div class="yt-thumb" style="background:${colors[i%3]};">
            ${bg}
            <div class="yt-play"><i class="ti ti-player-play"></i></div>
          </div>
          <div class="yt-bottom">
            <div class="yt-label">${t(vid.title_th, vid.title_en)}</div>
            ${playlistBtn}
          </div>
        </a>
      </div>`;
  }).join('');

  document.getElementById('sertistContent').innerHTML = `
    <p class="sec-desc-box">${t(s.desc_th, s.desc_en)}</p>
    <a class="channel-row" href="${s.channel_url}" target="_blank" rel="noopener">
      <div class="ch-dot"></div>
      <div class="ch-name">${s.channel_name}</div>
      <div class="ch-link"><i class="ti ti-brand-youtube" style="font-size:14px;"></i> ${t('ไปที่ช่อง','Go to channel')} ↗</div>
    </a>
    <div class="yt-grid">${thumbs}</div>
  `;
}


// BNK48 
let currentMV = 0;
function renderBNK48() {
  const b = SU.bnk48;
  if (!b) return;
  renderMVPlayer(0);
}

function renderMVPlayer(idx) {
  const b = SU.bnk48;
  const mv = b.mvs[idx];
  currentMV = idx;

  const videoBlock = mv.youtube_id
    ? `<iframe src="https://www.youtube.com/embed/${mv.youtube_id}?rel=0&modestbranding=1"
        title="${t(mv.title_th, mv.title_en)}" allowfullscreen loading="lazy"></iframe>`
    : `<div class="mv-screen-placeholder">
        <div class="mv-big-play"><i class="ti ti-player-play"></i></div>
       </div>`;

  const tabs = b.mvs.map((m, i) => `
    <div class="mv-song-tab ${i === idx ? 'active' : ''}" onclick="renderMVPlayer(${i})">
      ${t(m.title_th, m.title_en)}
    </div>`).join('');

  const iam = b.iam48;
  const iamPhotos = iam.images.map(img => `
    <div class="iam-photo">
      ${img.src
        ? `<img src="${img.src}" alt="${img.alt}">`
        : `<div class="iam-photo-placeholder"><i class="ti ti-photo" style="font-size:28px;color:rgba(255,255,255,0.1);"></i></div>`}
    </div>`);

  const iamVideo = iam.video_id
    ? `<iframe src="https://www.youtube.com/embed/${iam.video_id}?rel=0&modestbranding=1&disablekb=0&fs=0" allowfullscreen loading="lazy"></iframe>`
    : `<div class="iam-video-placeholder"><div class="iam-vid-play"><i class="ti ti-player-play"></i></div></div>`;

  document.getElementById('bnk48Content').innerHTML = `
    <p class="sec-desc-box">${t(b.desc_th, b.desc_en)}</p>
    <div class="mv-player">
      <div class="mv-screen">
        ${videoBlock}
        <div class="mv-screen-bar">
          <span class="mv-now-label">${t(mv.title_th, mv.title_en)}</span>
          ${mv.youtube_url ? `<a class="mv-yt-btn" href="${mv.youtube_url}" target="_blank" rel="noopener"><i class="ti ti-brand-youtube" style="font-size:13px;"></i> ${t('ดูบน YouTube','Watch on YouTube')}</a>` : ''}
        </div>
      </div>
      <div class="mv-song-tabs">${tabs}</div>
    </div>

    <div class="iam-sub">
      <div class="iam-sub-head"><div class="iam-sub-dot"></div><div class="iam-sub-title">iAM48</div></div>
      <p class="iam-sub-desc">${t(iam.desc_th, iam.desc_en)}</p>
      <div class="iam-layout">
        ${iamPhotos[0] || ''}
        <div class="iam-video">${iamVideo}</div>
        ${iamPhotos[1] || ''}
      </div>
      <p class="iam-app-desc">${t(
        'สามารถดาวน์โหลดแอปเพื่อย้อนดูโมเมนต์ความน่ารักเพิ่มเติมได้ เพียงไปที่ช่องค้นหาแล้วพิมพ์ "Namneung" ก็จะพบกับไลฟ์เก่า ๆ รูปภาพ วิดีโอ และข้อความสุดพิเศษได้ทันที',
        'Download the app to revisit more adorable moments. Search for Namneung to find old lives, photos, videos, and sweet messages.'
      )}</p>
      <div class="app-btns">
        <a class="app-btn" href="${iam.ios_url}" target="_blank" rel="noopener">
          <i class="ti ti-brand-apple"></i> App Store
        </a>
        <a class="app-btn" href="${iam.android_url}" target="_blank" rel="noopener">
          <i class="ti ti-brand-google-play"></i> Google Play
        </a>
      </div>
    </div>
  `;
}

function goPage(page) {
  const filtered = currentTab === 'all' ? SU.works : SU.works.filter(w => w.category === currentTab);
  const totalPages = Math.ceil(filtered.length / WORKS_PER_PAGE);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderWorks(currentTab);
  document.getElementById('works').scrollIntoView({behavior: 'smooth', block: 'start'});
}
