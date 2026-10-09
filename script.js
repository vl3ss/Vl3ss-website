const MEMBERS = [
  {
    name: 'recently_was_good',
    role: 'Аналитик SOC (L1)',
    skills: ['soc', 'dfir', 'forensics', 'crypto'],
    bio: 'Студент кафедры компьютерной безопасности ТОГУ, ищу стажировку или позицию аналитика SOC (L1). Прохожу программу PT Start от Positive Technologies на треке Blue Team: разбираю сетевые атаки в PT NAD и Arkime. Решаю DFIR-задачи HackTheBox Sherlocks, участвую в CTF, готовлю домашний стенд под SIEM. Linux — основная рабочая ОС; пишу на Python и Bash, работаю с Docker и сетями.',
    did: [
      'PT Start (Positive Technologies), трек Blue Team: анализ сетевых атак в PT NAD и Arkime',
      'DFIR на HTB Sherlocks: расследовал SSH brute-force по auth.log и wtmp',
      'Backend сервиса аренды аудиторий ТОГУ — REST API на FastAPI + PostgreSQL',
      'Написал асинхронный фреймворк для ботов MAX: asyncio, FSM в Redis, webhook-секрет',
      'Сетевые кейсы: VLSM-планирование, VPN и маршрутизация на MikroTik',
      'Готовлю домашний SIEM-стенд на Linux/Windows-виртуалках',
    ],
    events: ['Kaspersky CTF 2026', 'AvitoCTF 2026', 'Кубок Федерации 2026'],
    history: [
      { year: '2026', text: 'PT Start (Blue Team) от Positive Technologies, домашний SIEM-стенд, участник Vl3ss' },
      { year: '2025', text: 'Старт в ИБ: HTB Sherlocks и первые CTF; backend сервиса аренды аудиторий ТОГУ' },
      { year: '2030', text: 'Выпуск ТОГУ по специальности «Компьютерная безопасность»' },
    ],
    github: 'https://github.com/vl3ss',
    tg: '@recently_was_good',
    resume: 'https://github.com/ustinovlev039-cpu',
  },
  {
    name: 'Velesova',
    role: 'Капитан команды',
    skills: [],
    bio: '',
    did: [],
    events: [],
    history: [],
    github: 'https://github.com/vl3ss',
    tg: '@Svarozhuch',
  },
];

// Результаты соревнований
const RESULTS = [
  { name: 'Kaspersky CTF', year: 2026, place: 62, teams: 350 },
  { name: 'AvitoCTF', year: 2026, place: 79, teams: 350 },
  { name: 'Кубок Федерации', year: 2026, place: 112, teams: 350 },
];

// Райтапы: пока пусто — добавим позже самые крупные и сложные таски
const WRITEUPS = [];

// За пределами таблицы: пока пусто — заполним позже
const ACHIEVEMENTS = [];

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
  const bestPlace = RESULTS.length ? Math.min(...RESULTS.map((r) => r.place)) : null;
  const avgPlace = RESULTS.length ? Math.round(RESULTS.reduce((s, r) => s + r.place, 0) / RESULTS.length) : null;
  const stats = [
    { value: MEMBERS.length, label: 'Участников в составе' },
    { value: RESULTS.length || '—', label: 'CTF сыграно' },
    { value: bestPlace ?? '—', label: 'Лучшее место', accent: true },
    { value: avgPlace ?? '—', label: 'Среднее место' },
  ];
  $('#stats').innerHTML = stats.map((s) => `
    <div>
      <p class="stat-value${s.accent ? ' accent' : ''}" data-count="${typeof s.value === 'number' ? s.value : ''}">${esc(s.value)}</p>
      <p class="stat-label">${esc(s.label)}</p>
    </div>`).join('');
  $('#heroEyebrow').textContent = `CTF-команда · ${MEMBERS.length} участников`;
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
        <div class="avatar" aria-hidden="true">${esc(initials(m.name))}</div>
        <div>
          <span class="card-kicker">${esc(m.role)}</span>
          <h3 class="card-title">${esc(m.name)}</h3>
        </div>
      </div>
      ${m.skills.length ? `<div class="tags">${m.skills.map((s) => `<span class="tag tag-outline">${esc(s)}</span>`).join('')}</div>` : ''}
      ${m.bio ? `<p class="card-bio">${esc(m.bio)}</p>` : ''}
      ${m.did.length ? `<div class="card-block"><h4>Что сделал</h4>${list(m.did)}</div>` : ''}
      ${m.events.length ? `<div class="card-block"><h4>Где участвовал</h4><div class="tags">${m.events.map((e) => `<span class="tag tag-neutral">${esc(e)}</span>`).join('')}</div></div>` : ''}
      <div class="card-foot">
        ${m.resume ? `<a class="resume-link" href="${esc(m.resume)}" target="_blank" rel="noopener"><span class="resume-ico" aria-hidden="true">❖</span> Резюме на GitHub</a>` : ''}
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
        <div class="avatar" aria-hidden="true">${esc(initials(m.name))}</div>
        <div>
          <span class="card-kicker">${esc(m.role)}</span>
          <h3 class="card-title" id="dialogTitle">${esc(m.name)}</h3>
        </div>
      </div>
      ${m.bio ? `<p class="card-bio" style="margin-top:16px">${esc(m.bio)}</p>` : ''}
    </section>
    ${m.did.length ? `<section class="card-block"><h4>Что сделал</h4>${list(m.did)}</section>` : ''}
    ${m.events.length ? `<section class="card-block"><h4>Где участвовал</h4>
      <div class="tags">${m.events.map((e) => `<span class="tag tag-neutral">${esc(e)}</span>`).join('')}</div>
    </section>` : ''}
    ${m.history.length ? `<section class="card-block"><h4>Хронология</h4>
      <ul class="timeline">${m.history.map((h) => `<li><span class="year">${esc(h.year)}</span><span>${esc(h.text)}</span></li>`).join('')}</ul>
    </section>` : ''}
    <section class="card-foot" style="margin-top:0">
      ${m.resume ? `<a class="resume-link" href="${esc(m.resume)}" target="_blank" rel="noopener"><span class="resume-ico" aria-hidden="true">❖</span> Резюме на GitHub</a>` : ''}
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
function renderResults() {
  const rows = [...RESULTS].sort((a, b) => a.place - b.place);

  const head = `
    <div class="row head" role="row">
      <span role="columnheader">Соревнование</span>
      <span role="columnheader" class="num">Год</span>
      <span role="columnheader" class="num">Место</span>
    </div>`;

  const body = rows.length
    ? rows.map((r) => `
      <div class="row" role="row">
        <span role="cell" class="name">${esc(r.name)}</span>
        <span role="cell" class="num">${esc(r.year)}</span>
        <span role="cell" class="num"><span class="place">${esc(r.place)}</span><span class="place-total"> / ${fmtNum(r.teams)}</span></span>
      </div>`).join('')
    : `<p class="empty">Результаты скоро появятся — добавьте их в массив RESULTS в script.js.</p>`;

  $('#resultsTable').innerHTML = head + body;
}

// ---------- Райтапы ----------
function renderWriteups() {
  $('#writeupGrid').innerHTML = WRITEUPS.map((w) => `
    <a class="card writeup reveal" href="${esc(w.href)}">
      <div class="writeup-top"><span class="tag tag-accent">${esc(w.cat)}</span><span>${esc(w.ctf)}</span></div>
      <h3>${esc(w.title)}</h3>
      <p>${esc(w.summary)}</p>
      <span class="read">Читать →</span>
    </a>`).join('');
}

// ---------- Достижения ----------
function renderAchievements() {
  $('#achGrid').innerHTML = ACHIEVEMENTS.map((g) => `
    <div class="ach-col reveal">
      <span class="eyebrow" style="margin:0">${esc(g.kind)}</span>
      ${g.items.map((it) => `<div class="ach-item"><p>${esc(it.title)}</p><p>${esc(it.meta)}</p></div>`).join('')}
    </div>`).join('');
}

function renderFooter() {
  const links = [{ href: 'https://github.com/vl3ss', label: 'github.com/vl3ss' }]
    .concat(MEMBERS.map((m) => ({ href: tgUrl(m.tg), label: m.tg })));
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
