"use strict";

const themes = [
  { id: "viso", name: "Viso", icon: "petal", caption: "Rituali e tecniche" },
  { id: "massaggio", name: "Massaggio", icon: "hands", caption: "Gestualità e sequenze" },
  { id: "benessere", name: "Benessere", icon: "leaf", caption: "Spazio e ritualità" },
];

const courses = [
  {
    id: "rituale-viso-essenziale",
    theme: themes[0],
    title: "Rituale viso essenziale",
    summary: "Un percorso introduttivo per costruire una routine viso, dalla preparazione alla chiusura.",
    description: "Segui la struttura di un rituale viso, dalla preparazione della postazione alla sequenza finale. Le lezioni di esempio mostrano come suddividere il percorso in passaggi brevi e facili da ritrovare.",
    image: "assets/viso.jpg",
    price: 49,
    lessons: [
      ["Introduzione e materiali", 12],
      ["Preparare la postazione", 14],
      ["La fase di detersione", 18],
      ["Applicazione e tempo di posa", 21],
      ["Chiusura del rituale", 15],
    ],
  },
  {
    id: "massaggio-distensivo",
    theme: themes[1],
    title: "Massaggio distensivo",
    summary: "Dalla preparazione dello spazio ai gesti che compongono una sequenza di massaggio.",
    description: "Un esempio di percorso sulla struttura di un massaggio distensivo. Il programma è organizzato in lezioni brevi, con una sequenza riepilogativa alla fine.",
    image: "assets/massaggio.jpg",
    price: 69,
    lessons: [
      ["Introduzione al percorso", 11],
      ["Preparare lo spazio", 12],
      ["Ritmo e continuità del gesto", 16],
      ["I movimenti di apertura", 15],
      ["La sequenza centrale", 22],
      ["Riepilogo della sequenza", 14],
    ],
  },
  {
    id: "rituali-di-benessere",
    theme: themes[2],
    title: "Rituali di benessere",
    summary: "Materiali, atmosfera e piccoli gesti per dare forma a un rituale di cura.",
    description: "Un esempio di corso dedicato ai dettagli che accompagnano un rituale. Il programma segue la preparazione dei materiali, l’allestimento e i passaggi di accoglienza e chiusura.",
    image: "assets/rituali.jpg",
    price: 39,
    lessons: [
      ["Introduzione al rituale", 10],
      ["Materiali e organizzazione", 14],
      ["Luce, suono e ambiente", 16],
      ["Accoglienza e chiusura", 15],
    ],
  },
];

const drawings = {
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  expand: '<path d="m5 9 7 7 7-7"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  film: '<rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="m10 9 5 3-5 3z"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>',
  leaf: '<path d="M4 20c0-5 2-10 8-13 3-2 6-2 8-3-.2 8-4 14-12 14M4 20c3-5 6-8 11-10"/>',
  petal: '<path d="M12 20c-5-3-6-9 0-16 6 7 5 13 0 16Zm0 0C6 20 3 16 3 10c5 0 8 4 9 10Zm0 0c6 0 9-4 9-10-5 0-8 4-9 10Z"/>',
  hands: '<path d="M3 14.5 6 13l4 1.3h4a1.5 1.5 0 0 1 0 3h-3m4.5-.7 3.5-2.3a1.5 1.5 0 0 1 2 2.1l-5.7 4H9L3 18.5m9-7.5c-3-2-4.5-3.3-4.5-5a2.4 2.4 0 0 1 4.5-1.3A2.4 2.4 0 0 1 16.5 6c0 1.7-1.5 3-4.5 5Z"/>',
  lock: '<rect x="5.5" y="10.5" width="13" height="9" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5m-4 4v2"/>',
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
      <a href="index.html"${homeState}>Home</a>
      <a href="catalogo.html"${catalogState}>Videocorsi</a>
    </nav>
    <span class="preview-label"><span class="preview-dot"></span>Anteprima di progetto</span>
  </div>`;
}

function footer() {
  return `<div class="shell footer-inner">
    ${brand()}
    <p>Anteprima di progetto<br><span>Corsi, immagini e prezzi dimostrativi.</span></p>
    <nav aria-label="Navigazione a piè di pagina">
      <a href="index.html">Home</a>
      <a href="catalogo.html">Videocorsi</a>
    </nav>
  </div>`;
}

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return [hours && `${hours} h`, rest && `${rest} min`].filter(Boolean).join(" ");
}

function duration(course) {
  return formatDuration(course.lessons.reduce((total, lesson) => total + lesson[1], 0));
}

function courseCard(course) {
  return `<article class="course-card" aria-labelledby="titolo-${course.id}">
    <button class="card-media" type="button" aria-label="Dettagli di ${course.title}"
      aria-expanded="false" aria-controls="dettagli-${course.id}">
      <img src="${course.image}" width="1200" height="800" alt="" loading="lazy">
      <span class="topic-tag">${course.theme.name}</span>
    </button>
    <div class="card-copy">
      <div class="card-meta">
        <span>${icon("film")}${course.lessons.length} lezioni</span>
        <span>${icon("clock")}${duration(course)}</span>
      </div>
      <h3 id="titolo-${course.id}">${course.title}</h3>
      <p class="card-summary">${course.summary}</p>
      <details id="dettagli-${course.id}" class="course-details" name="videocorsi">
        <summary class="card-bottom">
          <span class="card-price"><small>Prezzo indicativo</small>${course.price} €</span>
          <span class="text-link detail-toggle">
            <span class="details-open-label">Maggiori dettagli</span>
            <span class="details-close-label">Chiudi dettagli</span>
            ${icon("expand")}
          </span>
        </summary>
        <div class="card-detail">
          <p>${course.description}</p>
          <h4>Programma di esempio</h4>
          <ol class="lesson-list">
            ${course.lessons.map(([name, minutes], index) => `<li>
              <span class="lesson-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
              <span>${name}</span><span class="lesson-duration">${formatDuration(minutes)}</span>
            </li>`).join("")}
          </ol>
          <button class="button purchase-preview" type="button" aria-haspopup="dialog">Acquista con bonifico ${icon("arrow")}</button>
          <p class="demo-note">${icon("lock")} Acquisto dimostrativo</p>
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
        <p class="eyebrow"><span></span>La formazione di Auréa</p>
        <h1 id="hero-title">Impara l’arte<br><em>del benessere.</em></h1>
        <p class="hero-description">Videocorsi di estetica e benessere da seguire online, con i tuoi tempi.</p>
        <a class="button" href="catalogo.html">Scopri i videocorsi ${icon("arrow")}</a>
      </div>
    </div>
    <div class="hero-media">
      <img src="assets/hero.jpg" width="1500" height="1000" alt="Fotografia dimostrativa di un trattamento viso in un ambiente dai toni crema" fetchpriority="high">
    </div>
  </section>
  <nav class="themes" aria-label="Esplora per tema">
    <ul class="shell theme-list">
      ${themes.map((theme) => `<li><a href="catalogo.html?tema=${theme.id}">
        <span class="theme-icon">${icon(theme.icon)}</span>
        <span><strong>${theme.name}</strong><small>${theme.caption}</small></span>
      </a></li>`).join("")}
    </ul>
  </nav>
  <section class="shell showcase" aria-labelledby="showcase-title">
    <div class="section-heading">
      <div><p class="eyebrow"><span></span>Il catalogo</p><h2 id="showcase-title">I videocorsi Auréa</h2></div>
      <a class="text-link all-courses" href="catalogo.html">Tutti i videocorsi ${icon("arrow")}</a>
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
        <ol><li><a href="index.html">Home</a></li><li>${icon("chevron")}<span aria-current="page">Videocorsi</span></li></ol>
      </nav>
      <p class="eyebrow"><span></span>Formazione online</p>
      <h1 id="catalog-title">I nostri <em>videocorsi</em></h1>
      <p>Esplora i percorsi di esempio per tema e apri i dettagli per vedere il programma.</p>
    </div>
  </section>
  <section class="shell catalog-list" aria-labelledby="result-title">
    <div class="catalog-controls">
      <nav class="filters" aria-label="Filtra i videocorsi per tema">
        <a href="catalogo.html"${selectedTheme ? "" : ' aria-current="page"'}>Tutti</a>
        ${themes.map((theme) => `<a href="catalogo.html?tema=${theme.id}"${theme === selectedTheme ? ' aria-current="page"' : ""}>${theme.name}</a>`).join("")}
      </nav>
      <h2 id="result-title" class="result-count">${visibleCourses.length === 1 ? "1 corso di esempio" : `${visibleCourses.length} corsi di esempio`}</h2>
    </div>
    <div class="course-grid">${visibleCourses.map(courseCard).join("")}</div>
  </section>`;
}

function purchasePreview() {
  return `<dialog class="purchase-dialog" id="acquisto-demo" aria-labelledby="titolo-acquisto">
    <form method="dialog">
      <p class="eyebrow"><span></span>Anteprima di progetto</p>
      <h2 id="titolo-acquisto">Acquisto dimostrativo</h2>
      <p>Nel sito finale, dopo l’accesso vedrai i dati per il bonifico. Il corso sarà disponibile in «I miei corsi» dopo la verifica del pagamento da parte di Auréa.</p>
      <button class="button" value="close" autofocus>Torna al corso</button>
    </form>
  </dialog>`;
}

const page = document.body.dataset.page;
const params = new URLSearchParams(window.location.search);
const main = document.getElementById("contenuto");
document.getElementById("intestazione").innerHTML = header(page);
document.getElementById("piè-di-pagina").innerHTML = footer();

const content = page === "catalog" ? catalogPage(params.get("tema")) : homePage();
main.innerHTML = content + purchasePreview();
const purchaseDialog = document.getElementById("acquisto-demo");

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
  card.querySelector(".purchase-preview").addEventListener("click", () => purchaseDialog.showModal());
}
