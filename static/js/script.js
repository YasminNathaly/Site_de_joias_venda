const grid = document.querySelector("#product-grid");
const localAssets = {
    ring: grid?.dataset.ringImage ?? "",
    fantasyBra: grid?.dataset.braImage ?? "",
    ringsPoster: grid?.dataset.ringsPoster ?? "",
    ringsVideo: grid?.dataset.ringsVideo ?? ""
};

const jewelryStories = [
    {
        id: "anel-diamante",
        title: "Anel Diamanté Wings",
        category: "aneis",
        label: "Anel · diamantes",
        description: "Uma composição escultural que celebra a leveza e a luz dos diamantes.",
        image: localAssets.ring,
        alt: "Anel com diamantes em desenho inspirado em asas"
    },
    {
        id: "rings-film",
        title: "Três silhuetas, uma promessa",
        category: "aneis",
        label: "Filme editorial · joias",
        description: "Três lapidações em ouro rosé, reveladas em um breve estudo de luz e movimento.",
        image: localAssets.ringsPoster,
        video: localAssets.ringsVideo,
        alt: "Três anéis de noivado com diamantes sobre uma superfície escura"
    },
    {
        id: "diamante-amarelo",
        title: "A cor rara do diamante",
        category: "gemas",
        label: "Gemas · diamantes",
        description: "Uma introdução às nuances de cor que tornam cada diamante singular.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
        alt: "Anel com pedra preciosa em destaque"
    },
    {
        id: "colar-escultural",
        title: "Colares em movimento",
        category: "colares",
        label: "Colares · design",
        description: "Formas fluidas encontram o trabalho delicado da alta joalheria.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
        alt: "Colar dourado fotografado em fundo neutro"
    },
    {
        id: "anel-esmeralda",
        title: "A personalidade da esmeralda",
        category: "aneis",
        label: "Anel · pedras preciosas",
        description: "Verde profundo e brilho sutil em uma das gemas mais admiradas.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
        alt: "Joia com pedras preciosas e detalhes delicados"
    },
    {
        id: "fantasy-bra",
        title: "A joalheria encontra a moda",
        category: "gemas",
        label: "Arquivo · alta joalheria",
        description: "Uma criação cênica que aproxima o universo das gemas da alta-costura.",
        image: localAssets.fantasyBra,
        alt: "Peça de moda adornada com diamantes e pedras preciosas"
    },
    {
        id: "colar-gemas",
        title: "O encanto das gemas coloridas",
        category: "colares",
        label: "Colares · gemas",
        description: "Uma celebração das cores e dos contrastes na criação de joias.",
        image: "https://images.unsplash.com/photo-1611591475281-919924584281?auto=format&fit=crop&w=1000&q=85",
        alt: "Detalhe de colar com pedras preciosas"
    },
    {
        id: "anel-solitario",
        title: "O desenho do solitário",
        category: "aneis",
        label: "Anel · design",
        description: "Linhas essenciais e uma pedra central: um clássico em constante reinvenção.",
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
        alt: "Anel solitário com pedra central lapidada"
    },
    {
        id: "diamantes-luz",
        title: "A luz em cada lapidação",
        category: "gemas",
        label: "Gemas · lapidação",
        description: "Como proporções e acabamento influenciam a maneira como a luz atravessa uma gema.",
        image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85",
        alt: "Joia com diamantes lapidados em diferentes formatos"
    }
];

const searchInput = document.querySelector("#site-search");
const searchForm = document.querySelector(".search-form");
const suggestions = document.querySelector("#search-suggestions");
const count = document.querySelector("#results-count");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#jewel-dialog");
let activeCategory = "todos";
let activeSlide = 0;
let carouselTimer;
let carouselPaused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function renderStories(query = "") {
    if (!grid) return;
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
    const matchingStories = jewelryStories.filter((story) => {
        const matchesCategory = activeCategory === "todos" || story.category === activeCategory;
        const searchableText = `${story.title} ${story.label} ${story.description}`.toLocaleLowerCase("pt-BR");
        return matchesCategory && searchableText.includes(normalizedQuery);
    });

    grid.innerHTML = matchingStories.map((story) => `
        <article class="product-card">
            <div class="product-image-wrap">
                <img class="product-image" src="${story.image}" alt="${story.alt}" loading="lazy" decoding="async">
                <span class="image-unavailable" hidden>Prévia visual indisponível</span>
                ${story.video ? `<video class="card-preview-video" muted loop playsinline preload="none" poster="${story.image}" aria-hidden="true"><source src="${story.video}" type="video/mp4"></video><button class="video-toggle" type="button" data-preview-video aria-label="Reproduzir filme de quatro segundos: ${story.title}" aria-pressed="false">▶</button>` : ""}
                <span class="product-badge">${story.label}</span>
                <button class="product-view" type="button" data-story-id="${story.id}" aria-haspopup="dialog" aria-label="Visualização rápida: ${story.title}">Conhecer a peça ↗</button>
            </div>
            <div class="product-info">
                <p class="product-category">${story.category}</p>
                <h3 class="product-title">${story.title}</h3>
                <p class="product-description">${story.description}</p>
            </div>
        </article>
    `).join("");

    grid.querySelectorAll(".product-image").forEach((image) => {
        image.addEventListener("error", () => {
            image.hidden = true;
            image.closest(".product-image-wrap").querySelector(".image-unavailable").hidden = false;
        }, { once: true });
    });

    const total = matchingStories.length;
    count.textContent = `${total} ${total === 1 ? "destaque" : "destaques"}`;
    emptyState.hidden = total > 0;
}

function showSuggestions(query) {
    if (!suggestions || !searchInput) return;
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
    if (!normalizedQuery) {
        suggestions.hidden = true;
        searchInput.setAttribute("aria-expanded", "false");
        return;
    }
    const matches = jewelryStories.filter((story) =>
        `${story.title} ${story.label} ${story.description}`.toLocaleLowerCase("pt-BR").includes(normalizedQuery)
    ).slice(0, 5);

    suggestions.innerHTML = matches.length
        ? matches.map((story) => `
            <button class="suggestion-option" type="button" role="option" data-story-id="${story.id}">
                <img src="${story.image}" alt="" loading="lazy" decoding="async"><span class="suggestion-copy"><strong>${story.title}</strong><span>${story.label}</span></span>
            </button>`).join("")
        : `<div class="suggestion-option"><strong>Nenhuma sugestão encontrada</strong><span>Tente “anel”, “colar” ou “diamante”.</span></div>`;
    suggestions.hidden = false;
    searchInput.setAttribute("aria-expanded", "true");
}

function focusStory(storyId) {
    const story = jewelryStories.find((item) => item.id === storyId);
    if (!story) return;
    activeCategory = "todos";
    document.querySelectorAll(".filter-button").forEach((button) => {
        const selected = button.dataset.filter === "todos";
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
    searchInput.value = story.title;
    renderStories(story.title);
    suggestions.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
    document.querySelector("#colecao")?.scrollIntoView({ behavior: "smooth" });
}

function openViewer(storyId) {
    const story = jewelryStories.find((item) => item.id === storyId);
    if (!story || !dialog) return;
    const zoomImage = document.querySelector("#zoom-image");
    zoomImage.hidden = false;
    document.querySelector("#zoom-image-error").hidden = true;
    zoomImage.alt = story.alt;
    zoomImage.onerror = () => {
        zoomImage.hidden = true;
        document.querySelector("#zoom-image-error").hidden = false;
    };
    zoomImage.src = story.image;
    document.querySelector("#dialog-title").textContent = story.title;
    document.querySelector("#dialog-category").textContent = story.label;
    document.querySelector("#dialog-description").textContent = story.description;
    document.querySelector("#zoom-stage").classList.remove("is-zoomed");
    dialog.showModal();
}

document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.filter;
        searchInput.value = "";
        suggestions.hidden = true;
        searchInput.setAttribute("aria-expanded", "false");
        document.querySelectorAll(".filter-button").forEach((filter) => {
            const selected = filter === button;
            filter.classList.toggle("is-selected", selected);
            filter.setAttribute("aria-pressed", String(selected));
        });
        renderStories();
    });
});

const cardPreviewTimers = new WeakMap();
const cardPreviewGenerations = new WeakMap();

function playCardPreview(card) {
    const video = card?.querySelector(".card-preview-video");
    const control = card?.querySelector("[data-preview-video]");
    if (!video || !control) return;
    window.clearTimeout(cardPreviewTimers.get(card));
    const generation = (cardPreviewGenerations.get(card) ?? 0) + 1;
    cardPreviewGenerations.set(card, generation);
    video.currentTime = 0;
    video.play().then(() => {
        if (cardPreviewGenerations.get(card) !== generation || video.paused) return;
        card.classList.add("is-playing-preview");
        control.textContent = "Ⅱ";
        control.setAttribute("aria-pressed", "true");
        control.setAttribute("aria-label", `Pausar filme de quatro segundos: ${card.querySelector(".product-title").textContent}`);
        cardPreviewTimers.set(card, window.setTimeout(() => stopCardPreview(card), 4000));
    }).catch((error) => {
        if (cardPreviewGenerations.get(card) !== generation) return;
        if (error.name === "AbortError") return;
        control.textContent = "×";
        control.disabled = true;
        control.setAttribute("aria-label", "Filme indisponível neste navegador");
    });
}

function stopCardPreview(card) {
    const video = card?.querySelector(".card-preview-video");
    const control = card?.querySelector("[data-preview-video]");
    if (!video || !control) return;
    cardPreviewGenerations.set(card, (cardPreviewGenerations.get(card) ?? 0) + 1);
    window.clearTimeout(cardPreviewTimers.get(card));
    video.pause();
    video.currentTime = 0;
    card.classList.remove("is-playing-preview");
    control.textContent = "▶";
    control.setAttribute("aria-pressed", "false");
    control.setAttribute("aria-label", `Reproduzir filme de quatro segundos: ${card.querySelector(".product-title").textContent}`);
}

grid?.addEventListener("pointerover", (event) => {
    const card = event.target.closest(".product-card");
    if (!card?.contains(event.relatedTarget) && event.pointerType === "mouse" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) playCardPreview(card);
});
grid?.addEventListener("pointerout", (event) => {
    const card = event.target.closest(".product-card");
    if (card && !card.contains(event.relatedTarget)) stopCardPreview(card);
});
grid?.addEventListener("focusin", (event) => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) playCardPreview(event.target.closest(".product-card"));
});
grid?.addEventListener("focusout", (event) => {
    const card = event.target.closest(".product-card");
    if (card && !card.contains(event.relatedTarget)) stopCardPreview(card);
});

grid?.addEventListener("click", (event) => {
    const previewControl = event.target.closest("[data-preview-video]");
    if (previewControl) {
        event.stopPropagation();
        const previewVideo = previewControl.closest(".product-image-wrap").querySelector(".card-preview-video");
        if (previewVideo.paused) playCardPreview(previewControl.closest(".product-card"));
        else stopCardPreview(previewControl.closest(".product-card"));
        return;
    }
    const button = event.target.closest("[data-story-id]");
    if (button) openViewer(button.dataset.storyId);
});

searchInput?.addEventListener("input", () => {
    renderStories(searchInput.value);
    showSuggestions(searchInput.value);
});

searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstSuggestion = suggestions.querySelector("[data-story-id]");
    if (firstSuggestion) focusStory(firstSuggestion.dataset.storyId);
    else {
        activeCategory = "todos";
        renderStories(searchInput.value);
        suggestions.hidden = true;
    }
});

suggestions?.addEventListener("click", (event) => {
    const option = event.target.closest("[data-story-id]");
    if (option) focusStory(option.dataset.storyId);
});

document.addEventListener("click", (event) => {
    if (!searchForm?.contains(event.target)) {
        suggestions.hidden = true;
        searchInput?.setAttribute("aria-expanded", "false");
    }
});

searchInput?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" && !suggestions.hidden) {
        event.preventDefault();
        suggestions.querySelector("[role='option']")?.focus();
    }
    if (event.key === "Escape") {
        suggestions.hidden = true;
        searchInput.setAttribute("aria-expanded", "false");
        searchForm.classList.remove("is-open");
        searchInput.blur();
    }
});
suggestions?.addEventListener("keydown", (event) => {
    const options = [...suggestions.querySelectorAll("[role='option']")];
    const index = options.indexOf(event.target);
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    options[(index + direction + options.length) % options.length]?.focus();
});

document.querySelectorAll("[data-category-link]").forEach((link) => {
    link.addEventListener("click", () => {
        activeCategory = link.dataset.categoryLink;
        searchInput.value = "";
        const matchingFilter = document.querySelector(`[data-filter="${activeCategory}"]`);
        matchingFilter?.click();
    });
});

document.querySelector(".menu-trigger")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const menu = document.querySelector("#mega-menu");
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    menu.hidden = expanded;
});

document.querySelector(".menu-toggle")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const links = document.querySelector("#primary-links");
    const expanded = button.getAttribute("aria-expanded") === "true";
    searchForm.classList.remove("is-open");
    button.setAttribute("aria-expanded", String(!expanded));
    button.setAttribute("aria-label", expanded ? "Abrir menu" : "Fechar menu");
    links.classList.toggle("is-open", !expanded);
});

document.querySelectorAll(".nav-links > a, .mega-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        const button = document.querySelector(".menu-toggle");
        button?.setAttribute("aria-expanded", "false");
        button?.setAttribute("aria-label", "Abrir menu");
        document.querySelector("#primary-links")?.classList.remove("is-open");
        document.querySelector(".menu-trigger")?.setAttribute("aria-expanded", "false");
        document.querySelector("#mega-menu").hidden = true;
    });
});

document.querySelector(".search-icon")?.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 700px)").matches) searchForm.classList.toggle("is-open");
    searchInput.focus();
});

document.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
});
document.querySelector("#zoom-stage")?.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("is-zoomed");
});
document.querySelector("#zoom-stage")?.addEventListener("pointermove", (event) => {
    if (!event.currentTarget.classList.contains("is-zoomed")) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    const image = event.currentTarget.querySelector("img");
    image.style.transformOrigin = `${x}% ${y}%`;
});

const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".carousel-dot")];

function goToSlide(index) {
    if (!slides.length) return;
    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
        const active = slideIndex === activeSlide;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
        const video = slide.querySelector("video");
        if (active) {
            if (carouselPaused) video?.pause();
            else video?.play().catch(() => {});
        } else {
            video?.pause();
        }
    });
    dots.forEach((dot, dotIndex) => {
        const active = dotIndex === activeSlide;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-pressed", String(active));
    });
}

function resetCarouselTimer() {
    window.clearInterval(carouselTimer);
    if (!carouselPaused && !document.hidden) {
        carouselTimer = window.setInterval(() => goToSlide(activeSlide + 1), 7000);
    }
}

document.querySelectorAll("[data-carousel]").forEach((button) => {
    button.addEventListener("click", () => {
        goToSlide(activeSlide + (button.dataset.carousel === "next" ? 1 : -1));
        resetCarouselTimer();
    });
});

dots.forEach((dot) => dot.addEventListener("click", () => {
    goToSlide(Number(dot.dataset.slideTo));
    resetCarouselTimer();
}));

document.querySelector(".carousel-pause")?.addEventListener("click", (event) => {
    carouselPaused = !carouselPaused;
    event.currentTarget.textContent = carouselPaused ? "Reproduzir" : "Pausar";
    event.currentTarget.setAttribute("aria-pressed", String(carouselPaused));
    if (carouselPaused) slides[activeSlide]?.querySelector("video")?.pause();
    else slides[activeSlide]?.querySelector("video")?.play().catch(() => {});
    resetCarouselTimer();
});

const pauseButton = document.querySelector(".carousel-pause");
if (pauseButton) {
    pauseButton.textContent = carouselPaused ? "Reproduzir" : "Pausar";
    pauseButton.setAttribute("aria-pressed", String(carouselPaused));
}

document.querySelector(".hero")?.addEventListener("mouseenter", () => window.clearInterval(carouselTimer));
document.querySelector(".hero")?.addEventListener("mouseleave", resetCarouselTimer);
document.addEventListener("visibilitychange", resetCarouselTimer);
document.querySelector(".hero")?.addEventListener("focusin", () => window.clearInterval(carouselTimer));
document.querySelector(".hero")?.addEventListener("focusout", resetCarouselTimer);

const cutDetails = {
    round: {
        name: "BRILHANTE REDONDO",
        description: "Lapidação clássica de 57 ou 58 facetas, pensada para refletir a luz com intensidade.",
        points: [[120, 24], [165, 39], [201, 78], [213, 120], [201, 162], [165, 201], [120, 216], [75, 201], [39, 162], [27, 120], [39, 78], [75, 39]]
    },
    radiant: {
        name: "ESMERALDA / RADIANTE",
        description: "Linhas retangulares e cantos chanfrados criam uma silhueta arquitetônica e sofisticada.",
        points: [[74, 27], [166, 27], [211, 72], [211, 168], [166, 213], [74, 213], [29, 168], [29, 72]]
    },
    marquise: {
        name: "MARQUISE / NAVETE",
        description: "Pontas alongadas definem um perfil elegante, com uma leitura visual especialmente vertical.",
        points: [[120, 15], [153, 58], [188, 120], [153, 182], [120, 225], [87, 182], [52, 120], [87, 58]]
    },
    oval: {
        name: "OVAL",
        description: "O contorno alongado combina a suavidade do corte brilhante com uma proporção elegante.",
        points: [[120, 18], [165, 33], [198, 72], [210, 120], [198, 168], [165, 207], [120, 222], [75, 207], [42, 168], [30, 120], [42, 72], [75, 33]]
    },
    princess: {
        name: "PRINCESS",
        description: "Um desenho quadrado de linhas definidas, com facetas que valorizam a geometria da pedra.",
        points: [[56, 28], [184, 28], [212, 56], [212, 184], [184, 212], [56, 212], [28, 184], [28, 56]]
    }
};

const cutIllustration = document.querySelector("#cut-illustration");
const cutOutline = document.querySelector("#gem-outline");
const gemFacets = document.querySelector("#gem-facets");

function drawCutIllustration(cutKey) {
    const details = cutDetails[cutKey];
    if (!details || !cutIllustration || !cutOutline || !gemFacets) return;

    const pointList = details.points.map(([x, y]) => `${x},${y}`).join(" ");
    cutOutline.setAttribute("points", pointList);
    cutIllustration.setAttribute("aria-label", `Ilustração facetada da lapidação ${details.name.toLocaleLowerCase("pt-BR")}`);
    document.querySelector("#gem-sample").setAttribute("aria-label", `Ilustração da lapidação ${details.name.toLocaleLowerCase("pt-BR")}`);
    document.querySelector("#cut-name").textContent = details.name;
    document.querySelector("#cut-description").textContent = details.description;
    document.querySelector(".visual-caption span:first-child").textContent = details.name;
    document.querySelector(".visual-caption span:last-child").textContent = `${String(Object.keys(cutDetails).indexOf(cutKey) + 1).padStart(2, "0")} / 05`;

    gemFacets.replaceChildren();
    const center = [120, 120];
    const innerPoints = details.points.map(([x, y]) => [
        center[0] + (x - center[0]) * 0.55,
        center[1] + (y - center[1]) * 0.55
    ]);
    const innerRing = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    innerRing.setAttribute("points", innerPoints.map(([x, y]) => `${x},${y}`).join(" "));
    innerRing.setAttribute("fill", "rgb(255 255 255 / 16%)");
    innerRing.setAttribute("stroke", "rgb(255 255 255 / 86%)");
    innerRing.setAttribute("stroke-width", "1.2");
    gemFacets.append(innerRing);

    details.points.forEach(([x, y], index) => {
        const next = innerPoints[index];
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", String(center[0]));
        line.setAttribute("y1", String(center[1]));
        line.setAttribute("x2", String(next[0]));
        line.setAttribute("y2", String(next[1]));
        line.setAttribute("stroke", "rgb(255 255 255 / 86%)");
        line.setAttribute("stroke-width", "1.1");
        gemFacets.append(line);

        if (index % 2 === 0) {
            const facet = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            const outerNext = details.points[(index + 1) % details.points.length];
            facet.setAttribute("points", `${x},${y} ${outerNext[0]},${outerNext[1]} ${next[0]},${next[1]} ${center[0]},${center[1]}`);
            facet.setAttribute("fill", index % 4 === 0 ? "rgb(255 255 255 / 16%)" : "rgb(212 175 55 / 15%)");
            gemFacets.append(facet);
        }
    });

    document.querySelectorAll(".cut-button").forEach((button) => {
        const selected = button.dataset.cut === cutKey;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
}

document.querySelectorAll(".cut-button").forEach((button) => {
    button.addEventListener("click", () => drawCutIllustration(button.dataset.cut));
});

const gemSample = document.querySelector("#gem-sample");
let gemPointerStart = null;
let gemRotation = 0;
gemSample?.addEventListener("pointerdown", (event) => {
    gemPointerStart = event.clientX;
    gemSample.setPointerCapture(event.pointerId);
});
gemSample?.addEventListener("pointermove", (event) => {
    if (gemPointerStart === null) return;
    gemRotation = (gemRotation + (event.clientX - gemPointerStart) * 0.7) % 360;
    gemPointerStart = event.clientX;
    gemSample.querySelector("svg").style.transform = `rotateY(${gemRotation}deg)`;
    gemSample.setAttribute("aria-valuenow", String((Math.round(gemRotation) + 360) % 360));
    gemSample.setAttribute("aria-valuetext", `${(Math.round(gemRotation) + 360) % 360} graus`);
});
gemSample?.addEventListener("pointerup", () => {
    gemPointerStart = null;
});
gemSample?.addEventListener("pointercancel", () => {
    gemPointerStart = null;
});
gemSample?.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    gemRotation += event.key === "ArrowRight" ? 15 : -15;
    gemSample.querySelector("svg").style.transform = `rotateY(${gemRotation}deg)`;
    gemSample.setAttribute("aria-valuenow", String((Math.round(gemRotation) + 360) % 360));
    gemSample.setAttribute("aria-valuetext", `${(Math.round(gemRotation) + 360) % 360} graus`);
});
if (gemSample) {
    gemSample.tabIndex = 0;
    gemSample.setAttribute("aria-label", "Girar ilustração facetada. Arraste ou use as setas do teclado. Ilustração educativa, não visualização 360 graus de uma peça.");
}

const lensContainer = document.querySelector("#gem-product");
const lens = lensContainer?.querySelector(".lens");
const lensImage = lensContainer?.querySelector("img");

function updateLens(clientX, clientY) {
    if (!lensContainer || !lens || !lensImage) return;
    const bounds = lensContainer.getBoundingClientRect();
    const x = Math.max(0, Math.min(bounds.width, clientX - bounds.left));
    const y = Math.max(0, Math.min(bounds.height, clientY - bounds.top));
    const diameter = lens.offsetWidth || 145;
    const left = Math.max(0, Math.min(bounds.width - diameter, x - diameter / 2));
    const top = Math.max(0, Math.min(bounds.height - diameter, y - diameter / 2));
    lens.style.left = `${left}px`;
    lens.style.top = `${top}px`;
    lens.style.backgroundImage = `url("${lensImage.currentSrc || lensImage.src}")`;
    lens.style.backgroundSize = `${bounds.width * 2.4}px ${bounds.height * 2.4}px`;
    lens.style.backgroundPosition = `${-(x * 2.4 - diameter / 2)}px ${-(y * 2.4 - diameter / 2)}px`;
}

lensContainer?.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") lensContainer.classList.add("is-lens-active");
});
lensContainer?.addEventListener("pointermove", (event) => {
    if (event.pointerType === "mouse" && lensContainer.classList.contains("is-lens-active")) updateLens(event.clientX, event.clientY);
});
lensContainer?.addEventListener("pointerleave", () => lensContainer.classList.remove("is-lens-active"));
lensContainer?.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "touch") return;
    lensContainer.classList.add("is-lens-active");
    updateLens(event.clientX, event.clientY);
});
lensContainer?.addEventListener("pointerup", (event) => {
    if (event.pointerType === "touch") lensContainer.classList.remove("is-lens-active");
});

const csTabs = [...document.querySelectorAll(".cs-tab")];
const csComparison = document.querySelector("#cs-comparison");
const comparisonRange = document.querySelector("#comparison-range");
const comparisonAxis = document.querySelector("#comparison-axis");
const comparisonValue = document.querySelector("#comparison-value");

function updateComparison(value) {
    const percent = Number(value);
    if (comparisonValue) comparisonValue.value = `${percent}%`;
    comparisonAxis?.style.setProperty("left", `${percent}%`);
    csComparison?.style.setProperty("--comparison-value", String(percent / 100));
    csComparison?.style.setProperty("--clarity-blur", `${(100 - percent) / 33}px`);
    csComparison?.style.setProperty("--carat-scale", `${0.64 + percent / 280}`);
}

csTabs.forEach((tab, index) => {
    tab.tabIndex = index === 0 ? 0 : -1;
    tab.addEventListener("click", () => {
        csTabs.forEach((item) => {
            const selected = item === tab;
            item.classList.toggle("is-selected", selected);
            item.setAttribute("aria-selected", String(selected));
            item.tabIndex = selected ? 0 : -1;
        });
        document.querySelectorAll(".cs-panel").forEach((panel) => {
            panel.hidden = panel.id !== tab.getAttribute("aria-controls");
        });
        csComparison?.setAttribute("data-cs", tab.dataset.cs);
        updateComparison(comparisonRange.value);
    });
    tab.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        const offset = event.key === "ArrowRight" ? 1 : -1;
        csTabs[(index + offset + csTabs.length) % csTabs.length]?.focus();
        csTabs[(index + offset + csTabs.length) % csTabs.length]?.click();
    });
});

comparisonRange?.addEventListener("input", () => updateComparison(comparisonRange.value));
if (comparisonRange) updateComparison(comparisonRange.value);

const appointmentForm = document.querySelector("#appointment-form");
const appointmentDate = document.querySelector("#appointment-date");
if (appointmentDate) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
    appointmentDate.min = localToday;
}
appointmentForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!appointmentForm.reportValidity()) return;
    document.querySelector("#appointment-status").textContent =
        "Formulário validado nesta demonstração. Nenhum dado foi enviado; conecte um endpoint seguro para receber solicitações.";
});

const siteHeader = document.querySelector(".site-header");
const headerScrollObserver = new IntersectionObserver(([entry]) => {
    siteHeader?.classList.toggle("is-scrolled", !entry.isIntersecting);
});
headerScrollObserver.observe(document.querySelector(".announcement"));

    const hero = document.querySelector(".hero");
    hero?.addEventListener("pointermove", (event) => {
        if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const bounds = hero.getBoundingClientRect();
        const x = (event.clientX / bounds.width - 0.5) * -12;
        const y = (event.clientY / bounds.height - 0.5) * -8;
        hero.style.setProperty("--hero-x", `${x}px`);
        hero.style.setProperty("--hero-y", `${y}px`);
    });
    hero?.addEventListener("pointerleave", () => {
        hero.style.removeProperty("--hero-x");
        hero.style.removeProperty("--hero-y");
    });

    renderStories();
goToSlide(0);
resetCarouselTimer();
