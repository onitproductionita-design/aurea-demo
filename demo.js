"use strict";

const themes = [
  { id: "viso", label: "Viso", name: "Xbxj", icon: "petal", caption: "Xbxjshdn vbxj" },
  { id: "massaggio", label: "Massaggio", name: "Vbxjshdn", icon: "hands", caption: "Vbskjdn xbxjshdn" },
  { id: "benessere", label: "Benessere", name: "Xbskjhdn", icon: "leaf", caption: "Xbxjdn vbxjshdn" },
];

const courses = [
  {
    id: "rituale-viso-essenziale",
    theme: themes[0],
    title: "Xbxjshdn vbxjshdn",
    summary: "Xbxjshdn vbxjdn xbxjshdn vbskjdh. Xbxjhdn vbxj xbxjshdn.",
    image: "assets/viso.jpg",
    lessonCount: 5,
  },
  {
    id: "massaggio-distensivo",
    theme: themes[1],
    title: "Vbskjdn xbxjshdn",
    summary: "Vbxjshdn xbxjdn vbskjdh xbxj. Xbxjshdn vbxjdn xbxjhdn.",
    image: "assets/massaggio.jpg",
    lessonCount: 6,
  },
  {
    id: "rituali-di-benessere",
    theme: themes[2],
    title: "Xbskjhdn vbxjdn",
    summary: "Xbskjhdn vbxjshdn xbxjdn vbskjdh. Vbxjdn xbxjshdn xbxj.",
    image: "assets/rituali.jpg",
    lessonCount: 4,
  },
];

const detailPlaceholder = "Xbxjshdn vbxjdn xbxjshdn vbskjdh. Vbxjshdn xbxjdn vbskjdh xbxjshdn. Xbskjhdn vbxjshdn xbxjdn vbxj.";

const drawings = {
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  expand: '<path d="m5 9 7 7 7-7"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  film: '<rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="m10 9 5 3-5 3z"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>',
  leaf: '<path d="M4 20c0-5 2-10 8-13 3-2 6-2 8-3-.2 8-4 14-12 14M4 20c3-5 6-8 11-10"/>',
  petal: '<path d="M12 20c-5-3-6-9 0-16 6 7 5 13 0 16Zm0 0C6 20 3 16 3 10c5 0 8 4 9 10Zm0 0c6 0 9-4 9-10-5 0-8 4-9 10Z"/>',
  hands: '<path d="M3 14.5 6 13l4 1.3h4a1.5 1.5 0 0 1 0 3h-3m4.5-.7 3.5-2.3a1.5 1.5 0 0 1 2 2.1l-5.7 4H9L3 18.5m9-7.5c-3-2-4.5-3.3-4.5-5a2.4 2.4 0 0 1 4.5-1.3A2.4 2.4 0 0 1 16.5 6c0 1.7-1.5 3-4.5 5Z"/>',
};

function icon(name) {
  return `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round">${drawings[name]}</svg>`;
}

function brand() {
  return `<a class="brand" href="index.html" aria-label="Auréa, home">
    <img class="brand-mark" src="assets/lotus.svg" width="46" height="46" alt="">
    <span class="brand-type"><span class="brand-name">Auréa</span>
      <span class="brand-caption">Centro estetico</span></span>
  </a>`;
}

function botanical() {
  return `<svg class="botanical" viewBox="0 0 310 260" aria-hidden="true" fill="none">
    <path d="M13 251c83-21 146-83 199-185 12-23 26-44 42-62" stroke="currentColor" stroke-width="1.4"/>
    <path d="M62 230c16-31 9-63-22-101-6 45 4 77 22 101Zm25-13c28-27 67-34 118-28-34 24-74 32-118 28Zm21-17c14-32 6-68-14-93-7 37-3 64 14 93Zm30-28c32-25 70-28 114-18-36 21-76 24-114 18Zm19-22c11-34 5-68-13-97-8 32-3 68 13 97Zm26-38c34-23 76-27 117-13-40 16-78 23-117 13Zm16-26c9-29 3-56-13-81-8 30-4 57 13 81Zm24-43c27-11 58-9 79 1-33 11-58 11-79-1Z" fill="currentColor"/>
  </svg>`;
}

function header(page) {
  const homeState = page === "home" ? ' aria-current="page"' : "";
  const catalogState = page === "catalog" ? ' aria-current="page"' : "";
  return `<div class="shell header-inner">
    ${brand()}
    <nav class="primary-nav" aria-label="Navigazione principale">
      <a href="index.html" aria-label="Home"${homeState}>Xbxj</a>
      <a href="catalogo.html" aria-label="Videocorsi"${catalogState}>Xbxjshdn</a>
    </nav>
    <span class="account-preview">Accedi / Registrati</span>
  </div>`;
}

function footer() {
  return `<div class="shell footer-inner">
    ${brand()}
    <p>Xbxjshdn vbxjdn<br><span>Xbxjshdn vbxjdn vbskjdh xbxjshdn.</span></p>
    <nav aria-label="Navigazione a piè di pagina">
      <a href="index.html" aria-label="Home">Xbxj</a>
      <a href="catalogo.html" aria-label="Videocorsi">Xbxjshdn</a>
    </nav>
  </div>`;
}

function courseCard(course) {
  return `<article class="course-card" aria-labelledby="titolo-${course.id}">
    <button class="card-media" type="button" aria-label="Dettagli del corso ${course.theme.label}"
      aria-expanded="false" aria-controls="dettagli-${course.id}">
      <img src="${course.image}" width="1200" height="800" alt="" loading="lazy">
      <span class="topic-tag">${course.theme.name}</span>
    </button>
    <div class="card-copy">
      <div class="card-meta">
        <span>${icon("film")}Xbxjshdn</span>
        <span>${icon("clock")}Vbxjdn</span>
      </div>
      <h3 id="titolo-${course.id}">${course.title}</h3>
      <p class="card-summary">${course.summary}</p>
      <details id="dettagli-${course.id}" class="course-details" name="videocorsi">
        <summary class="card-bottom" aria-label="Maggiori dettagli">
          <span class="card-price"><small>Xbxjshdn</small>XX</span>
          <span class="text-link detail-toggle">
            <span class="details-open-label">Xbxjshdn vbxj</span>
            <span class="details-close-label">Vbxjshdn xbxj</span>
            ${icon("expand")}
          </span>
        </summary>
        <div class="card-detail">
          <p>${detailPlaceholder}</p>
          <h4>Xbxjshdn vbxjdn</h4>
          <ol class="lesson-list">
            ${Array.from({ length: course.lessonCount }, (_, index) => `<li>
              <span class="lesson-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
              <span>Xbxjshdn vbxjdn</span><span class="lesson-duration">Xbxj</span>
            </li>`).join("")}
          </ol>
          <button class="button purchase-preview" type="button" disabled>Paga ora ${icon("arrow")}</button>
        </div>
      </details>
    </div>
  </article>`;
}

function homePage() {
  return `<section class="hero" aria-labelledby="hero-title">
    <div class="hero-copy">
      ${botanical()}
      <div class="hero-content">
        <p class="eyebrow"><span></span>Xbxjshdn vbxjdn xbxj</p>
        <h1 id="hero-title">Xbxjshdn vbxj<br><em>Xbxjshdn vbsk.</em></h1>
        <p class="hero-description">Xbxjshdn vbxjdn xbxjshdn vbskjdh xbxj. Xbskjhdn vbxjdn xbxjshdn.</p>
        <a class="button" href="catalogo.html" aria-label="Scopri i videocorsi">Xbxjshdn vbxjdn ${icon("arrow")}</a>
      </div>
    </div>
    <div class="hero-media">
      <img src="assets/hero.jpg" width="1500" height="1000" alt="Fotografia dimostrativa di un trattamento viso in un ambiente dai toni crema" fetchpriority="high">
    </div>
  </section>
  <nav class="themes" aria-label="Esplora per tema">
    <ul class="shell theme-list">
      ${themes.map((theme) => `<li><a href="catalogo.html?tema=${theme.id}" aria-label="${theme.label}">
        <span class="theme-icon">${icon(theme.icon)}</span>
        <span><strong>${theme.name}</strong><small>${theme.caption}</small></span>
      </a></li>`).join("")}
    </ul>
  </nav>
  <section class="shell showcase" aria-labelledby="showcase-title">
    <div class="section-heading">
      <div><p class="eyebrow"><span></span>Xbxjshdn</p><h2 id="showcase-title">Xbxjshdn vbxjshdn</h2></div>
      <a class="text-link all-courses" href="catalogo.html" aria-label="Tutti i videocorsi">Xbxjshdn vbxjdn ${icon("arrow")}</a>
    </div>
    <div class="course-grid">${courses.map(courseCard).join("")}</div>
  </section>`;
}

function catalogPage(themeId) {
  const selectedTheme = themes.find((theme) => theme.id === themeId);
  const visibleCourses = selectedTheme ? courses.filter((course) => course.theme === selectedTheme) : courses;
  return `<section class="catalog-intro" aria-labelledby="catalog-title">
    <div class="shell intro-inner">
      ${botanical()}
      <nav class="breadcrumbs" aria-label="Percorso di navigazione">
        <ol><li><a href="index.html" aria-label="Home">Xbxj</a></li><li>${icon("chevron")}<span aria-current="page">Xbxjshdn</span></li></ol>
      </nav>
      <p class="eyebrow"><span></span>Xbxjshdn vbxjdn</p>
      <h1 id="catalog-title">Xbxjshdn <em>vbxjshdn</em></h1>
      <p>Xbxjshdn vbxjdn xbxjshdn vbskjdh xbxj. Vbxjshdn xbxjdn vbskjdh xbxjshdn.</p>
    </div>
  </section>
  <section class="shell catalog-list" aria-labelledby="result-title">
    <div class="catalog-controls">
      <nav class="filters" aria-label="Filtra i videocorsi per tema">
        <a href="catalogo.html" aria-label="Tutti"${selectedTheme ? "" : ' aria-current="page"'}>Xbxj</a>
        ${themes.map((theme) => `<a href="catalogo.html?tema=${theme.id}" aria-label="${theme.label}"${theme === selectedTheme ? ' aria-current="page"' : ""}>${theme.name}</a>`).join("")}
      </nav>
      <h2 id="result-title" class="result-count">Xbxjshdn vbxjdn</h2>
    </div>
    <div class="course-grid">${visibleCourses.map(courseCard).join("")}</div>
  </section>`;
}

const page = document.body.dataset.page;
const params = new URLSearchParams(window.location.search);
const main = document.getElementById("contenuto");
document.getElementById("intestazione").innerHTML = header(page);
document.getElementById("piè-di-pagina").innerHTML = footer();

const content = page === "catalog" ? catalogPage(params.get("tema")) : homePage();
main.innerHTML = content;

for (const card of main.querySelectorAll(".course-card")) {
  const cover = card.querySelector(".card-media");
  const details = card.querySelector(".course-details");
  cover.addEventListener("click", () => {
    details.open = !details.open;
    if (details.open) {
      details.querySelector("summary").focus();
    }
  });
  details.addEventListener("toggle", () => {
    cover.setAttribute("aria-expanded", String(details.open));
  });
}
