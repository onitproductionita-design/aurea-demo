"use strict";

const navigation = [
  { page: "home", href: "index.html", label: "Home" },
  { page: "catalog", href: "catalogo.html", label: "Videocorsi" },
  { page: "cosmetics", href: "cosmetici.html", label: "Cosmetici" },
];

const courses = [
  {
    id: "massaggio-in-gravidanza",
    title: "Massaggio in gravidanza",
    image: "assets/massaggio-gravidanza-foto.jpg",
  },
  {
    id: "massaggio-hot-stone",
    title: "Massaggio hot stone",
    image: "assets/massaggio-hot-stone-foto.jpg",
  },
  {
    id: "maderoterapia",
    title: "Maderoterapia",
    image: "assets/maderoterapia-foto.jpg",
  },
  {
    id: "massaggio-anticellulite",
    title: "Massaggio anticellulite",
    image: "assets/massaggio-anticellulite-foto.jpg",
  },
  {
    id: "massaggio-relax",
    title: "Massaggio relax",
    image: "assets/massaggio-relax-foto.jpg",
  },
];

const products = [
  {
    title: "Xbxjshdn vbxj",
    image: "assets/cosmetici-crema-foto.jpg",
    alt: "Barattolo di crema su un asciugamano",
  },
  {
    title: "Vbxjshdn xbxj",
    image: "assets/cosmetici-olio-foto.jpg",
    alt: "Flacone cosmetico in vetro ambrato",
  },
];

const summaryPlaceholder = "Xbxjshdn vbxjdn xbxjshdn vbskjdh. Xbxjhdn vbxj xbxjshdn.";

const detailPlaceholder = "Xbxjshdn vbxjdn xbxjshdn vbskjdh. Vbxjshdn xbxjdn vbskjdh xbxjshdn. Xbskjhdn vbxjshdn xbxjdn vbxj.";

const drawings = {
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  expand: '<path d="m5 9 7 7 7-7"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  film: '<rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="m10 9 5 3-5 3z"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>',
  leaf: '<path d="M4 20c0-5 2-10 8-13 3-2 6-2 8-3-.2 8-4 14-12 14M4 20c3-5 6-8 11-10"/>',
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

function navigationLinks(page) {
  return navigation.map((item) => {
    const current = item.page === page ? ' aria-current="page"' : "";
    return `<a href="${item.href}"${current}>${item.label}</a>`;
  }).join("");
}

function header(page) {
  return `<div class="shell header-inner">
    ${brand()}
    <nav class="primary-nav" aria-label="Navigazione principale">${navigationLinks(page)}</nav>
    <span class="account-preview">Accedi / Registrati</span>
  </div>`;
}

function footer() {
  return `<div class="shell footer-inner">
    ${brand()}
    <p>Xbxjshdn vbxjdn<br><span><a href="https://github.com/onitproductionita-design/aurea-demo/blob/main/CREDITI-FOTO.md">Crediti fotografici</a></span></p>
    <nav aria-label="Navigazione a piè di pagina">${navigationLinks()}</nav>
  </div>`;
}

function courseCard(course) {
  return `<article class="course-card" aria-labelledby="titolo-${course.id}">
    <button class="card-media" type="button" aria-label="Dettagli del corso ${course.title}"
      aria-expanded="false" aria-controls="dettagli-${course.id}">
      <img src="${course.image}" width="1200" height="800" alt="" loading="lazy">
      <span class="topic-tag">Massaggio</span>
    </button>
    <div class="card-copy">
      <div class="card-meta">
        <span>${icon("film")}Xbxjshdn</span>
        <span>${icon("clock")}Vbxjdn</span>
      </div>
      <h3 id="titolo-${course.id}">${course.title}</h3>
      <p class="card-summary">${summaryPlaceholder}</p>
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
            ${Array.from({ length: 4 }, (_, index) => `<li>
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

function productCard(product) {
  return `<article class="course-card product-card">
    <div class="card-media">
      <img src="${product.image}" alt="${product.alt}" loading="lazy">
    </div>
    <div class="card-copy">
      <h3>${product.title}</h3>
      <p class="card-summary">${summaryPlaceholder}</p>
      <div class="product-price-row">
        <span class="card-price">XX</span>
        <button class="button" type="button" disabled>Paga ora ${icon("arrow")}</button>
      </div>
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
      <img src="assets/hero-fotografia.jpg" width="1400" height="933" alt="Fotografia dimostrativa di un trattamento viso in un ambiente dai toni crema" fetchpriority="high">
    </div>
  </section>
  <nav class="themes" aria-label="Esplora il sito">
    <ul class="shell theme-list">
      <li><a href="catalogo.html">
        <span class="theme-icon">${icon("film")}</span>
        <strong>Videocorsi</strong>
      </a></li>
      <li><a href="cosmetici.html">
        <span class="theme-icon">${icon("leaf")}</span>
        <strong>Cosmetici</strong>
      </a></li>
    </ul>
  </nav>
  <section class="shell showcase" aria-labelledby="showcase-title">
    <div class="section-heading">
      <div><p class="eyebrow"><span></span>Xbxjshdn</p><h2 id="showcase-title">Videocorsi</h2></div>
      <a class="text-link all-courses" href="catalogo.html" aria-label="Tutti i videocorsi">Xbxjshdn vbxjdn ${icon("arrow")}</a>
    </div>
    <div class="course-grid">${courses.map(courseCard).join("")}</div>
  </section>`;
}

function collectionPage(page) {
  const isCosmetics = page === "cosmetics";
  const title = isCosmetics ? "Cosmetici" : "Videocorsi";
  const cards = isCosmetics ? products.map(productCard) : courses.map(courseCard);
  return `<section class="catalog-intro" aria-labelledby="catalog-title">
    <div class="shell intro-inner">
      ${botanical()}
      <nav class="breadcrumbs" aria-label="Percorso di navigazione">
        <ol><li><a href="index.html">Home</a></li><li>${icon("chevron")}<span aria-current="page">${title}</span></li></ol>
      </nav>
      <h1 id="catalog-title"><em>${title}</em></h1>
      <p>${summaryPlaceholder}</p>
    </div>
  </section>
  <div class="shell catalog-list">
    <div class="course-grid${isCosmetics ? " product-grid" : ""}">${cards.join("")}</div>
  </div>`;
}

const page = document.body.dataset.page;
const main = document.getElementById("contenuto");
document.getElementById("intestazione").innerHTML = header(page);
document.getElementById("piè-di-pagina").innerHTML = footer();

const content = page === "home" ? homePage() : collectionPage(page);
main.innerHTML = content;

for (const details of main.querySelectorAll(".course-details")) {
  const cover = details.closest(".course-card").querySelector(".card-media");
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
