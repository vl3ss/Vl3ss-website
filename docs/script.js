const MEMBERS = [
  {
    name: 'recently_was_good',
    role: 'Аналитик SOC (L1)',
    skills: ['soc', 'dfir', 'forensics', 'crypto'],
    bio: 'Студент кафедры компьютерной безопасности ТОГУ. Стажируюсь в PT Start от Positive Technologies на треке Blue Team: разбираю сетевые атаки в PT NAD и Arkime. Решаю DFIR-задачи HackTheBox Sherlocks, участвую в CTF, готовлю домашний стенд под SIEM. Linux — основная рабочая ОС; пишу на Python и Bash, работаю с Docker и сетями.',
    did: [
      'PT Start (Positive Technologies), трек Blue Team: анализ сетевых атак в PT NAD и Arkime',
      'DFIR на HTB Sherlocks: расследовал SSH brute-force по auth.log и wtmp',
      'Backend сервиса аренды аудиторий ТОГУ — REST API на FastAPI + PostgreSQL',
      'Написал асинхронный фреймворк для ботов MAX: asyncio, FSM в Redis, webhook-секрет',
      'Сетевые кейсы: VLSM-планирование, VPN и маршрутизация на MikroTik',
      'Готовлю домашний SIEM-стенд на Linux/Windows-виртуалках',
    ],
    events: ['Kaspersky CTF 2026', 'AvitoCTF 2026', 'Кубок Федерации 2026'],
    certs: [
      'Yandex Cloud — Инженер облачных технологий, 2026',
      'Yandex Cloud — Контейнеризация с Docker, 2026',
      'Skypro — Python-разработчик, 2026',
      'Слёрм — Linux для начинающих (в процессе), 2026',
    ],
    history: [
      { year: '2026', text: 'PT Start (Blue Team) от Positive Technologies, домашний SIEM-стенд, участник Vl3ss' },
      { year: '2025', text: 'Старт в ИБ: HTB Sherlocks и первые CTF; backend сервиса аренды аудиторий ТОГУ' },
      { year: '2030', text: 'Выпуск ТОГУ по специальности «Компьютерная безопасность»' },
    ],
    github: 'https://github.com/vl3ss',
    tg: '@recently_was_good',
    resume: 'https://github.com/ustinovlev039-cpu',
    htb: 'https://app.hackthebox.com/users/3068176',
  },
  {
    name: 'Velesova',
    captain: true,
    role: 'Капитан · Web · OSINT · Infra',
    skills: ['web', 'osint', 'infra'],
    bio: 'Капитан Vl3ss. Организую работу команды, формирую стек исследований и отвечаю за развитие направлений Web Security, Infrastructure и OSINT. Фокусируюсь на практическом анализе защищённости, сборке кастомных Linux-систем и исследовании векторов атак.',
    did: [
      'Leadership & Audit Prep: руководство CTF-командой, координация разборов задач (writeups), взаимодействие со специалистами и CISO отрасли',
      'Linux & Low-Level: сборка кастомной ОС из исходников (Linux From Scratch, до 6 главы), администрирование и настройка сетевой инфраструктуры',
      'Application & Infra Security: поиск Low/Medium уязвимостей в рамках Bug Bounty, настройка фаерволов, анализ конфигураций SIEM',
    ],
    events: ['Kaspersky CTF 2026', 'AvitoCTF 2026', 'Кубок Федерации 2026', 'АльфаCTF 2025'],
    certs: [
      'Cybered — «Профессия Белый Хакер»',
      'ДВФУ — «SQL»',
      'Практический интенсив по работе с SIEM и настройке фаерволов',
      'Благодарственное письмо с конференции «Код Профи»',
    ],
    history: [
      { year: '2026', text: 'Капитан Vl3ss; Kaspersky CTF, AvitoCTF, Кубок Федерации' },
      { year: '2025', text: 'АльфаCTF; обучение: «Профессия Белый Хакер» (Cybered), SQL (ДВФУ)' },
    ],
    github: 'https://github.com/vl3ss',
    tg: '@Svarozhuch',
    resume: 'https://github.com/Mara-hack',
    htb: 'https://app.hackthebox.com/users/3118861',
  },
  {
    name: 'Napulitanka',
    role: 'Пентестер · Web · Infra · OSINT',
    skills: ['web', 'infra', 'osint'],
    bio: 'Участник Vl3ss. Около 2 лет в ИБ, развиваюсь в направлении web/infra pentest и OSINT; цель — работа в команде. Основные площадки для практики — TryHackMe, PortSwigger Web Security Academy и Medium. Рабочая система — Linux.',
    did: [
      'Создал обучающую комнату по инструменту Nuclei на TryHackMe',
      'Решил 450+ комнат на TryHackMe',
      'Практика по OWASP Top 10, privilege escalation, HTTP Request Smuggling',
      'Инструменты: Burp Suite, nmap, rustscan, ffuf, feroxbuster, gobuster, Nuclei, Metasploit, Acunetix, John, amass, Maltego',
    ],
    events: ['aclabs.pro 2025/2026', 'Кубок Федерации 2026', 'SolarCTF'],
    certs: [
      'TryHackMe: Web Application Pentesting',
      'TryHackMe: Jr Penetration Tester',
      'TryHackMe: Cyber Security 101',
    ],
    history: [
      { year: '2026', text: 'Участник Vl3ss; Кубок Федерации, SolarCTF, aclabs.pro' },
      { year: '2025', text: 'aclabs.pro; углублённая практика web/infra pentest и OSINT на TryHackMe и PortSwigger' },
      { year: '2024', text: 'Старт в ИБ' },
    ],
    github: 'https://github.com/FrogLouis',
    tg: '@verberpromeret',
    thm: 'https://tryhackme.com/p/napulitanka',
    htb: 'https://profile.hackthebox.com/profile/01a07cb6-76b2-7331-be88-c03bdf53f2bb',
  },
];

// Результаты соревнований
const RESULTS = [
  { name: 'Kaspersky CTF', year: 2026, place: 62, teams: 350 },
  { name: 'AvitoCTF', year: 2026, place: 79, teams: 350 },
  { name: 'Кубок Федерации', year: 2026, place: 112, teams: 350 },
  { name: 'SolarCTF', year: 2026, place: 139, teams: 900 },
];

const WRITEUPS = [
  {
    cat: 'OSINT', ctf: 'SolarCTF', title: 'Геолокация: найти Тынду по одному кадру',
    summary: 'Лиственницы, красная вышка и следы пожара помогли выйти на микрорайон Таёжный. Финальная проверка — по панораме.',
    image: 'assets/writeups/osint-panorama.jpg',
    alt: 'Панорама микрорайона Таёжный с отмеченными ориентирами',
    href: 'writeups/osint-tynda.html',
  },
  {
    cat: 'Forensics', ctf: 'SolarCTF', title: 'Всё легче, чем кажется',
    summary: 'Из UAC-артефактов нашли процесс, замаскированный под sshd, и разобрали защиту Rust-бинаря.',
    image: 'assets/writeups/forensics-terminal.png',
    alt: 'Терминал с анализом артефактов Linux',
    href: 'writeups/forensics-malware.html',
  },
  {
    cat: 'Web', ctf: 'SolarCTF', title: 'КуМир за стеной',
    summary: 'Загрузка аватара по URL открыла путь к внутреннему Docker-сервису. Диагностика и ответ проверки раскрыли флаг.',
    image: 'assets/writeups/web-task.png',
    alt: 'Скриншот задания «КуМир за стеной»',
    href: 'writeups/web-kumir.html',
  },
];

// За пределами таблицы: пока пусто — заполним позже
const ACHIEVEMENTS = [];

const fmtNum = (n) => n.toLocaleString('ru-RU');
const $ = (sel) => document.querySelector(sel);

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
const tgUrl = (tg) => 'https://t.me/' + tg.replace(/^@/, '');
const initials = (name) => name.replace(/[^A-Za-zА-Яа-я0-9]/g, '').slice(0, 2).toUpperCase() || '?';
// Значок HackTheBox: куб внутри шестиугольника
const HTB_ICON = `<svg class="htb-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 20.5 7.25v9.5L12 21.5 3.5 16.75v-9.5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 7.6 15.8 9.8v4.4L12 16.4 8.2 14.2V9.8zM8.2 9.8 12 12l3.8-2.2M12 12v4.4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`;
const htbLink = (m) => m.htb ? `<a class="htb-link" href="${esc(m.htb)}" target="_blank" rel="noopener" aria-label="${esc('Профиль ' + m.name + ' на HackTheBox')}">${HTB_ICON}<span>HackTheBox</span></a>` : '';
// Значок TryHackMe: щит с терминальным приглашением
const THM_ICON = `<svg class="htb-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 19 5v5.5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="m8.6 10.4 2.2 2-2.2 2M12.6 15.4h3.2" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const thmLink = (m) => m.thm ? `<a class="htb-link" href="${esc(m.thm)}" target="_blank" rel="noopener" aria-label="${esc('Профиль ' + m.name + ' на TryHackMe')}">${THM_ICON}<span>TryHackMe</span></a>` : '';
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
function renderTeam() {
  $('#teamGrid').innerHTML = MEMBERS.map((m, i) => `
    <article class="card reveal" data-member="${i}" tabindex="0" role="button" aria-label="${esc('Открыть профиль: ' + m.name)}">
      <div class="card-top">
        <div class="avatar" aria-hidden="true">${esc(initials(m.name))}</div>
        <div>
          ${m.captain ? '<span class="card-kicker">Капитан</span>' : ''}
          <h3 class="card-title">${esc(m.name)}</h3>
        </div>
      </div>
      ${m.bio ? `<p class="card-bio">${esc(m.bio)}</p>` : ''}
      ${m.did.length ? `<div class="card-block"><h4>Что сделал</h4>${list(m.did)}</div>` : ''}
      ${m.events.length ? `<div class="card-block"><h4>Где участвовал</h4><div class="tags">${m.events.map((e) => `<span class="tag tag-neutral">${esc(e)}</span>`).join('')}</div></div>` : ''}
      ${(m.certs && m.certs.length) ? `<div class="card-block"><h4>Сертификаты</h4>${list(m.certs)}</div>` : ''}
      <div class="card-foot">
        ${m.resume ? `<a class="resume-link" href="${esc(m.resume)}" target="_blank" rel="noopener"><span class="resume-ico" aria-hidden="true">❖</span> Резюме на GitHub</a>` : ''}
        ${htbLink(m)}
        ${thmLink(m)}
        <a href="${esc(m.github)}" target="_blank" rel="noopener">GitHub</a>
        <a href="${esc(tgUrl(m.tg))}" target="_blank" rel="noopener">${esc(m.tg)}</a>
      </div>
    </article>`).join('');
}

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
          ${m.captain ? '<span class="card-kicker">Капитан</span>' : ''}
          <h3 class="card-title" id="dialogTitle">${esc(m.name)}</h3>
        </div>
      </div>
      ${m.bio ? `<p class="card-bio" style="margin-top:16px">${esc(m.bio)}</p>` : ''}
    </section>
    ${m.did.length ? `<section class="card-block"><h4>Что сделал</h4>${list(m.did)}</section>` : ''}
    ${m.events.length ? `<section class="card-block"><h4>Где участвовал</h4>
      <div class="tags">${m.events.map((e) => `<span class="tag tag-neutral">${esc(e)}</span>`).join('')}</div>
    </section>` : ''}
    ${(m.certs && m.certs.length) ? `<section class="card-block"><h4>Сертификаты</h4>${list(m.certs)}</section>` : ''}
    ${m.history.length ? `<section class="card-block"><h4>Хронология</h4>
      <ul class="timeline">${m.history.map((h) => `<li><span class="year">${esc(h.year)}</span><span>${esc(h.text)}</span></li>`).join('')}</ul>
    </section>` : ''}
    <section class="card-foot" style="margin-top:0">
      ${m.resume ? `<a class="resume-link" href="${esc(m.resume)}" target="_blank" rel="noopener"><span class="resume-ico" aria-hidden="true">❖</span> Резюме на GitHub</a>` : ''}
        ${htbLink(m)}
        ${thmLink(m)}
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
  if (e.target.closest('a')) return; // клики по ссылкам (GitHub/Telegram/резюме) работают сами
  const card = e.target.closest('[data-member]');
  if (card) openMember(+card.dataset.member);
});
$('#teamGrid').addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('[data-member]');
  if (card && e.target === card) { e.preventDefault(); openMember(+card.dataset.member); }
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
      <div class="writeup-image"><img src="${esc(w.image)}" alt="${esc(w.alt)}" loading="lazy"></div>
      <div class="writeup-content">
        <div class="writeup-top"><span class="tag tag-accent">${esc(w.cat)}</span><span>${esc(w.ctf)}</span></div>
        <h3>${esc(w.title)}</h3>
        <p>${esc(w.summary)}</p>
        <span class="read">Читать разбор <span aria-hidden="true">↗</span></span>
      </div>
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
  // Появление срабатывает в обе стороны: и при прокрутке вниз, и при прокрутке вверх
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      en.target.classList.toggle('visible', en.isIntersecting);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
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
renderTeam();
renderResults();
renderAchievements();
renderWriteups();
renderFooter();
initTheme();
initObservers();
