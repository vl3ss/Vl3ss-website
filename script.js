const MEMBERS = [
  {
    name: 'recently_was_good',
    role: 'Crypto · Forensics',
    skills: ['crypto', 'forensics'],
    bio: 'Капитан команды. Любит задачи, где нужно найти слабое место в математике шифра или восстановить данные из сырого дампа.',
    did: [
      'Решил крипто-таск на атаку Винера по RSA',
      'Восстановил флаг из дампа памяти через Volatility',
      'Собрал командную базу райтапов',
    ],
    events: ['DUCTF 2026', 'Ugra CTF 2026', 'MCTF 2025'],
    history: [
      { year: '2026', text: 'Капитан Vl3ss, основной по crypto' },
      { year: '2025', text: 'Первые CTF, начало пути в ИБ' },
    ],
    github: 'https://github.com/vl3ss',
    tg: '@recently_was_good',
  },
  {
    name: 'Velesova',
    role: 'Web · OSINT · Infra',
    skills: ['web', 'osint', 'infra'],
    bio: 'Отвечает за веб и разведку. Поднимает инфраструктуру команды и находит то, что спрятано в открытых источниках.',
    did: [
      'Нашла SSTI в шаблонизаторе и получила RCE',
      'Распутала OSINT-цепочку по фото до точного адреса',
      'Развернула командный сервер для Attack-Defense',
    ],
    events: ['SPbCTF 2026', 'MCTF 2025', 'DUCTF 2026'],
    history: [
      { year: '2026', text: 'Web и инфраструктура в Vl3ss' },
      { year: '2025', text: 'Летняя школа AppSec' },
    ],
    github: 'https://github.com/vl3ss',
    tg: '@Svarozhuch',
  },
  {
    name: 'Участник 3',
    placeholder: true,
    role: 'Pwn · Reverse',
    skills: ['pwn', 'reverse'],
    bio: 'Место для нового участника: коротко о себе — чем занимается и что больше всего нравится решать.',
    did: [
      'Пример: эксплуатация переполнения буфера (ret2libc)',
      'Пример: разбор кастомной VM в реверсе',
    ],
    events: ['Название CTF 2026', 'Название CTF 2025'],
    history: [{ year: '2026', text: 'Присоединился к Vl3ss' }],
    github: 'https://github.com/vl3ss',
    tg: '@username',
  },
  {
    name: 'Участник 4',
    placeholder: true,
    role: 'Reverse · Mobile',
    skills: ['reverse', 'mobile'],
    bio: 'Место для нового участника: коротко о себе — чем занимается и что больше всего нравится решать.',
    did: [
      'Пример: обход проверки лицензии в APK',
      'Пример: деобфускация .NET-бинаря',
    ],
    events: ['Название CTF 2026'],
    history: [{ year: '2026', text: 'Присоединился к Vl3ss' }],
    github: 'https://github.com/vl3ss',
    tg: '@username',
  },
  {
    name: 'Участник 5',
    placeholder: true,
    role: 'Stego · Misc · PPC',
    skills: ['stego', 'misc', 'ppc'],
    bio: 'Место для нового участника: коротко о себе — чем занимается и что больше всего нравится решать.',
    did: [
      'Пример: извлечение данных из LSB картинки',
      'Пример: скрипт для PPC-таска на графы',
    ],
    events: ['Название CTF 2026'],
    history: [{ year: '2026', text: 'Присоединился к Vl3ss' }],
    github: 'https://github.com/vl3ss',
    tg: '@username',
  },
];

// Результаты соревнований. format: 'jeopardy' | 'ad'
// Пример: { name: 'DUCTF 2026', date: '2026-07-18', place: 42, points: 3120, format: 'jeopardy' }
const RESULTS = [];

const ACHIEVEMENTS = [
  { kind: 'Стажировки', items: [{ title: 'Стажировка в SOC', meta: 'Компания · 2026' }, { title: 'Летняя школа AppSec', meta: 'Организатор · 2025' }] },
  { kind: 'Конкурсы', items: [{ title: 'Призёр студенческой олимпиады по ИБ', meta: '2 место · 2026' }] },
  { kind: 'Сертификаты', items: [{ title: 'Название сертификата', meta: 'Выдан · 2025' }, { title: 'Название сертификата', meta: 'Выдан · 2025' }] },
  { kind: 'Исследования', items: [{ title: 'Тема исследования или CVE', meta: 'Публикация · 2026' }] },
];

const WRITEUPS = [
  { cat: 'crypto', ctf: 'DUCTF 2026', title: 'Название таска', summary: 'Коротко: в чём была уязвимость и как получили флаг.', href: '#' },
  { cat: 'web', ctf: 'MCTF 2025', title: 'Название таска', summary: 'Коротко: в чём была уязвимость и как получили флаг.', href: '#' },
  { cat: 'forensics', ctf: 'Ugra CTF 2026', title: 'Название таска', summary: 'Коротко: что было в артефакте и как нашли флаг.', href: '#' },
  { cat: 'osint', ctf: 'SPbCTF 2026', title: 'Название таска', summary: 'Коротко: от какой зацепки шли и к чему пришли.', href: '#' },
];

const MONTHS = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const fmtDate = (d) => { const [y, m, day] = d.split('-'); return `${+day} ${MONTHS[+m - 1]} ${y}`; };
const fmtNum = (n) => n.toLocaleString('ru-RU');
const $ = (sel) => document.querySelector(sel);

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
const tgUrl = (tg) => 'https://t.me/' + tg.replace(/^@/, '');
const initials = (name) => name.replace(/[^A-Za-zА-Яа-я0-9]/g, '').slice(0, 2).toUpperCase() || '?';
const list = (items) => `<ul class="card-list">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;

// ---------- Цифры ----------
function renderStats() {
  const realMembers = MEMBERS.filter((m) => !m.placeholder).length;
  const allEvents = new Set(MEMBERS.flatMap((m) => (m.placeholder ? [] : m.events)));
  const stats = [
    { value: MEMBERS.length, label: 'Участников в составе' },
    { value: RESULTS.length || allEvents.size || '—', label: 'CTF сыграно' },
    { value: RESULTS.length ? Math.min(...RESULTS.map((r) => r.place)) : '—', label: 'Лучшее место', accent: true },
    { value: RESULTS.length ? fmtNum(RESULTS.reduce((s, r) => s + r.points, 0)) : '—', label: 'Очков всего' },
  ];
  $('#stats').innerHTML = stats.map((s) => `
    <div>
      <p class="stat-value${s.accent ? ' accent' : ''}" data-count="${typeof s.value === 'number' ? s.value : ''}">${esc(s.value)}</p>
      <p class="stat-label">${esc(s.label)}</p>
    </div>`).join('');
  $('#heroEyebrow').textContent = `CTF-команда · ${MEMBERS.length} участников` + (realMembers < MEMBERS.length ? ` · набор открыт` : '');
}

// ---------- Участники ----------
let skillFilter = 'all';

function renderSkillFilters() {
  const skills = ['all', ...new Set(MEMBERS.flatMap((m) => m.skills))];
  $('#skillFilters').innerHTML = skills.map((s) => `
    <button type="button" class="btn ${s === skillFilter ? 'btn-primary' : 'btn-ghost'}" data-skill="${esc(s)}">
      ${s === 'all' ? 'Все' : esc(s)}
    </button>`).join('');
}

function renderTeam() {
  $('#teamGrid').innerHTML = MEMBERS.map((m, i) => `
    <article class="card reveal" data-skills="${esc(m.skills.join(' '))}">
      <div class="card-top">
        <div class="avatar" aria-hidden="true">${m.placeholder ? '?' : esc(initials(m.name))}</div>
        <div>
          <span class="card-kicker">${esc(m.role)}</span>
          <h3 class="card-title">${m.placeholder ? `<span class="placeholder">${esc(m.name)}</span>` : esc(m.name)}</h3>
        </div>
      </div>
      <div class="tags">${m.skills.map((s) => `<span class="tag tag-outline">${esc(s)}</span>`).join('')}</div>
      <p class="card-bio">${esc(m.bio)}</p>
      <div class="card-block">
        <h4>Что сделал</h4>
        ${list(m.did)}
      </div>
      <div class="card-block">
        <h4>Где участвовал</h4>
        <div class="tags">${m.events.map((e) => `<span class="tag tag-neutral">${esc(e)}</span>`).join('')}</div>
      </div>
      <div class="card-foot">
        <a href="${esc(m.github)}" target="_blank" rel="noopener">GitHub</a>
        <a href="${esc(tgUrl(m.tg))}" target="_blank" rel="noopener">${esc(m.tg)}</a>
        <button type="button" class="btn btn-ghost more" data-member="${i}">Подробнее →</button>
      </div>
    </article>`).join('');
  applySkillFilter();
}

function applySkillFilter() {
  document.querySelectorAll('#teamGrid .card').forEach((card) => {
    const show = skillFilter === 'all' || card.dataset.skills.split(' ').includes(skillFilter);
    card.classList.toggle('is-hidden', !show);
  });
}

$('#skillFilters').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-skill]');
  if (!btn) return;
  skillFilter = btn.dataset.skill;
  renderSkillFilters();
  applySkillFilter();
});

// ---------- Подробное резюме участника ----------
const dialog = $('#dialog');
let lastFocus = null;

function openMember(i) {
  const m = MEMBERS[i];
  $('#dialogContent').innerHTML = `
    <section>
      <div class="card-top">
        <div class="avatar" aria-hidden="true">${m.placeholder ? '?' : esc(initials(m.name))}</div>
        <div>
          <span class="card-kicker">${esc(m.role)}</span>
          <h3 class="card-title" id="dialogTitle">${esc(m.name)}</h3>
        </div>
      </div>
      <p class="card-bio" style="margin-top:16px">${esc(m.bio)}</p>
    </section>
    <section class="card-block"><h4>Что сделал</h4>${list(m.did)}</section>
    <section class="card-block"><h4>Где участвовал</h4>
      <div class="tags">${m.events.map((e) => `<span class="tag tag-neutral">${esc(e)}</span>`).join('')}</div>
    </section>
    <section class="card-block"><h4>Хронология</h4>
      <ul class="timeline">${m.history.map((h) => `<li><span class="year">${esc(h.year)}</span><span>${esc(h.text)}</span></li>`).join('')}</ul>
    </section>
    <section class="card-foot" style="margin-top:0">
      <a href="${esc(m.github)}" target="_blank" rel="noopener">GitHub</a>
      <a href="${esc(tgUrl(m.tg))}" target="_blank" rel="noopener">${esc(m.tg)}</a>
    </section>`;
  lastFocus = document.activeElement;
  dialog.hidden = false;
  document.body.style.overflow = 'hidden';
  $('#dialogClose').focus();
}

function closeMember() {
  dialog.hidden = true;
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}

$('#teamGrid').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-member]');
  if (btn) openMember(+btn.dataset.member);
});
$('#dialogClose').addEventListener('click', closeMember);
dialog.addEventListener('click', (e) => { if (e.target === dialog) closeMember(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !dialog.hidden) closeMember(); });

// ---------- Результаты ----------
let format = 'all';

function renderResults() {
  $('#formatFilters').innerHTML = [['all', 'Все'], ['jeopardy', 'CTF'], ['ad', 'Attack-Defense']]
    .map(([k, label]) => `<button type="button" class="btn ${k === format ? 'btn-primary' : 'btn-ghost'}" data-format="${k}">${label}</button>`)
    .join('');

  const rows = RESULTS
    .filter((r) => format === 'all' || r.format === format)
    .sort((a, b) => b.date.localeCompare(a.date));

  const head = `
    <div class="row head" role="row">
      <span role="columnheader">Соревнование</span>
      <span role="columnheader">Дата</span>
      <span role="columnheader" class="num">Место</span>
      <span role="columnheader" class="num">Очки</span>
      <span role="columnheader">Формат</span>
    </div>`;

  const body = rows.length
    ? rows.map((r) => `
      <div class="row" role="row">
        <span role="cell" class="name">${esc(r.name)}</span>
        <span role="cell">${fmtDate(r.date)}</span>
        <span role="cell" class="num">${r.place}</span>
        <span role="cell" class="num">${fmtNum(r.points)}</span>
        <span role="cell"><span class="tag ${r.format === 'ad' ? 'tag-accent' : 'tag-neutral'}">${r.format === 'ad' ? 'Attack-Defense' : 'CTF'}</span></span>
      </div>`).join('')
    : `<p class="empty">Результаты скоро появятся — добавьте их в массив RESULTS в script.js.</p>`;

  $('#resultsTable').innerHTML = head + body;
}

$('#formatFilters').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-format]');
  if (!btn) return;
  format = btn.dataset.format;
  renderResults();
});

// ---------- Достижения и райтапы ----------
function renderAchievements() {
  $('#achGrid').innerHTML = ACHIEVEMENTS.map((g) => `
    <div class="ach-col reveal">
      <span class="eyebrow" style="margin:0">${esc(g.kind)}</span>
      ${g.items.map((it) => `<div class="ach-item"><p>${esc(it.title)}</p><p>${esc(it.meta)}</p></div>`).join('')}
    </div>`).join('');
}

function renderWriteups() {
  $('#writeupGrid').innerHTML = WRITEUPS.map((w) => `
    <a class="card writeup reveal" href="${esc(w.href)}">
      <div class="writeup-top"><span class="tag tag-accent">${esc(w.cat)}</span><span>${esc(w.ctf)}</span></div>
      <h3>${esc(w.title)}</h3>
      <p>${esc(w.summary)}</p>
      <span class="read">Читать →</span>
    </a>`).join('');
}

function renderFooter() {
  const links = [{ href: 'https://github.com/vl3ss', label: 'github.com/vl3ss' }]
    .concat(MEMBERS.filter((m) => !m.placeholder).map((m) => ({ href: tgUrl(m.tg), label: m.tg })));
  $('#footerLinks').innerHTML = links.map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('');
  $('#year').textContent = new Date().getFullYear();
}

// ---------- Тема ----------
function initTheme() {
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem('vl3ss-theme');
    if (saved) root.dataset.theme = saved;
  } catch (e) { /* хранилище недоступно */ }
  $('#themeToggle').addEventListener('click', () => {
    const isDark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = isDark ? 'light' : 'dark';
    try { localStorage.setItem('vl3ss-theme', root.dataset.theme); } catch (e) { /* ignore */ }
  });
}

// ---------- Анимации: появление, счётчики, активный пункт меню ----------
function initObservers() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
    return;
  }
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('visible'); revealObs.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      countObs.unobserve(en.target);
      const target = +en.target.dataset.count;
      if (!target || reduce) return;
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / 900, 1);
        en.target.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  });
  document.querySelectorAll('[data-count]').forEach((el) => countObs.observe(el));

  const navLinks = document.querySelectorAll('.nav-links a');
  const navObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach((s) => navObs.observe(s));
}

// ---------- Старт ----------
renderStats();
renderSkillFilters();
renderTeam();
renderResults();
renderAchievements();
renderWriteups();
renderFooter();
initTheme();
initObservers();
