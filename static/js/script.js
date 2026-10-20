/* -------------------------------------------------------
   1. AS 12 CASAS LENDÁRIAS DE ALTA JOAOHERIA (MOTOR 3D)
------------------------------------------------------- */
const jewels3D = [
    {
        title: "Colar Mouawad L'Incomparable",
        maison: "MOUAWAD",
        desc: "Avaliado em $55 Milhões. Contém o maior diamante amarelo do mundo sem falhas internas.",
        site: "https://www.mouawad.com",
        color: "#F3CE72",
        img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "O Diamante Hope",
        maison: "HARRY WINSTON",
        desc: "Safira/diamante azul profundo de 45.52 quilates com história imperial e refração rara.",
        site: "https://www.harrywinston.com",
        color: "#3B82F6",
        img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Anel de Esmeralda Muzo",
        maison: "BVLGARI",
        desc: "Esmeralda Colombiana de 25 quilates cravejada com diamantes de corte brilhante.",
        site: "https://www.bulgari.com",
        color: "#10B981",
        img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Colar Toussaint Panthère",
        maison: "CARTIER",
        desc: "Alta Joalheria lendária inspirada no design emblemático de Jeanne Toussaint com diamantes e safiras.",
        site: "https://www.cartier.com",
        color: "#EF4444",
        img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Colar Zip Haute Joaillerie",
        maison: "VAN CLEEF & ARPELS",
        desc: "Mecanismo revolucionário transformável em ouro e gemas nobres da Place Vendôme.",
        site: "https://www.vancleefarpels.com",
        color: "#F59E0B",
        img: "https://images.unsplash.com/photo-1611591475281-919924584281?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "O Diamante Amarelo Tiffany",
        maison: "TIFFANY & CO.",
        desc: "Um dos maiores diamantes amarelos do mundo, com 128.54 quilates e lapidação lendária.",
        site: "https://www.tiffany.com",
        color: "#06B6D4",
        img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Diamante Graff Lesedi La Rona",
        maison: "GRAFF",
        desc: "Lapidação extraordinária de 302.37 quilates, um dos maiores diamantes principais do mundo.",
        site: "https://www.graff.com",
        color: "#EC4899",
        img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Colar Point d'Interrogation",
        maison: "BOUCHERON",
        desc: "Design assimétrico ícone da Place Vendôme cravejado com diamantes finos e gotas preciosas.",
        site: "https://www.boucheron.com",
        color: "#8B5CF6",
        img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Diadema Imperatriz Joséphine",
        maison: "CHAUMET",
        desc: "Alta joalheria histórica parisiense inspirada nas tiaras e diademas da realeza.",
        site: "https://www.chaumet.com",
        color: "#6366F1",
        img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Coleção Masterpieces Ouro & Diamantes",
        maison: "DAMIANI",
        desc: "Artesanato italiano refinado com cravação manual e diamantes de raridade extrema.",
        site: "https://www.damiani.com",
        color: "#D97706",
        img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Anel Solitaire Hearts On Fire",
        maison: "HEARTS ON FIRE",
        desc: "Famoso pelo corte de simetria perfeita com refração e brilho incomparáveis.",
        site: "https://www.heartsonfire.com",
        color: "#F43F5E",
        img: "https://images.unsplash.com/photo-1611591475281-919924584281?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Ovo Imperial de Alta Joalheria",
        maison: "FABERGÉ",
        desc: "Obras-primas lendárias com esmalte complexo e gemas preciosas raras.",
        site: "https://www.faberge.com",
        color: "#14B8A6",
        img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Kylie Jenner Iconic Fantasy Bra",
        maison: "VICTORIA'S SECRET",
        desc: "Peça espetacular cravejada de diamantes e franjas reluzentes com asas de anjo monumentais.",
        site: "https://www.victoriassecret.com",
        color: "#E2E8F0",
        img: "../static/assets/kylie_fantasy_braa.jpg"
    },
];

/* ----------------------------------------------------
   2. CASAS LENDÁRIAS (GRADE DE EXPOSIÇÃO)
---------------------------------------------------- */
const maisons = [
    { name: "Cartier", site: "https://www.cartier.com", location: "Paris • 1847", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop" },
    { name: "Van Cleef & Arpels", site: "https://www.vancleefarpels.com", location: "Place Vendôme • 1906", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop" },
    { name: "Bvlgari", site: "https://www.bulgari.com", location: "Roma • 1884", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop" },
    { name: "Mouawad", site: "https://www.mouawad.com", location: "Genebra • 1890", img: "https://images.unsplash.com/photo-1611591475281-919924584281?q=80&w=600&auto=format&fit=crop" },
    { name: "Boucheron", site: "https://www.boucheron.com", location: "Place Vendôme • 1858", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop" },
    { name: "Graff", site: "https://www.graff.com", location: "Londres • 1960", img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600&auto=format&fit=crop" },
    { name: "Harry Winston", site: "https://www.harrywinston.com", location: "Nova York • 1932", img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=600&auto=format&fit=crop" },
    { name: "Tiffany & Co.", site: "https://www.tiffany.com", location: "Nova York • 1837", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop" }
];

/* ----------------------------------------------------
   3. NOTÍCIAS INTERNACIONAIS (INCLUINDO VICTORIA'S SECRET)
---------------------------------------------------- */
const newsItems = [
    {
        title: "Sotheby's Anuncia Leilão do Diamante Amarelo Imperial Mouawad",
        date: "20 de Outubro, 2026",
        category: "Leilões da Place Vendôme",
        desc: "Uma das maiores gemas sem falhas da história vai a leilão em Genebra com estimativa superior a $40 milhões.",
        site: "https://www.sothebys.com"
    },
    {
        title: "Victoria's Secret Anuncia Parceria com Casas de Alta Joalheria para Exposição de Gemas",
        date: "18 de Outubro, 2026",
        category: "Alta Joalheria & Moda",
        desc: "Relatórios apontam colaborações exclusivas com a Casa Mouawad para a produção de peças comemorativas em ouro sustentável.",
        site: "https://www.victoriassecret.com"
    },
    {
        title: "A História dos 100 Anos do Desenho do Colar Toussaint da Cartier",
        date: "15 de Outubro, 2026",
        category: "História & Patrimônio",
        desc: "Como Jeanne Toussaint revolucionou o design de joias na década de 1930 criando panteras em diamantes e safiras.",
        site: "https://www.cartier.com"
    }
];

let current3DIndex = 0;
let currentScale = 1.45; // Zoom fixo e ampliado
let lightTheme3D = 'gold';

function init3DEngine() {
    const canvas = document.getElementById('jewel3dCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const container = document.getElementById('canvas3dContainer');

    function resize() {
        if (!container) return;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Pré-carregamento das Imagens
    const loadedImages = {};
    jewels3D.forEach((jewel, idx) => {
        const img = new Image();
        img.src = jewel.img;
        loadedImages[idx] = img;
    });

    // Partículas de Brilho
    const sparkles = Array.from({ length: 30 }, () => ({
        x: (Math.random() - 0.5) * 180,
        y: (Math.random() - 0.5) * 180,
        size: Math.random() * 2.5 + 1,
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.005
    }));

    // Loop Renderizador
    function render3DGem() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        ctx.save();
        ctx.translate(centerX, centerY);

        // Pedestal sob a foto
        ctx.beginPath();
        ctx.ellipse(0, 110 * currentScale, 110 * currentScale, 25 * currentScale, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(20, 20, 28, 0.85)';
        ctx.fill();
        
        let strokeColor = 'rgba(212, 175, 55, 0.4)';
        if (lightTheme3D === 'ice') strokeColor = 'rgba(147, 197, 253, 0.5)';
        if (lightTheme3D === 'emerald') strokeColor = 'rgba(52, 211, 153, 0.5)';
        
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Desenhar Foto Centralizada e Ampliada
        const imgObj = loadedImages[current3DIndex];

        if (imgObj && imgObj.complete) {
            ctx.save();
            ctx.scale(currentScale, currentScale);

            const imgW = 180;
            const imgH = 220;

            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(-imgW / 2, -imgH / 2, imgW, imgH, 20);
            } else {
                ctx.rect(-imgW / 2, -imgH / 2, imgW, imgH);
            }
            ctx.clip();

            ctx.drawImage(imgObj, -imgW / 2, -imgH / 2, imgW, imgH);
            ctx.restore();
        }

        // Partículas de Brilho
        sparkles.forEach(s => {
            s.alpha += s.speed;
            if (s.alpha > 1 || s.alpha < 0) s.speed = -s.speed;

            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size * currentScale, 0, Math.PI * 2);
            ctx.fillStyle = lightTheme3D === 'emerald' ? '#A7F3D0' : (lightTheme3D === 'ice' ? '#BFDBFE' : '#FFF8E1');
            ctx.globalAlpha = Math.abs(s.alpha) * 0.9;
            ctx.fill();
        });

        ctx.restore();
        requestAnimationFrame(render3DGem);
    }

    render3DGem();
}

/* ----------------------------------------------------
   4. FUNÇÕES DE CONTROLE GLOBAL (WINDOW)
---------------------------------------------------- */
window.setLighting = function(type) {
    lightTheme3D = type;
    const goldBtn = document.getElementById('lightGold');
    const iceBtn = document.getElementById('lightIce');
    const emeraldBtn = document.getElementById('lightEmerald');

    if (goldBtn) goldBtn.className = type === 'gold' ? 'px-3 py-1 rounded-full font-cinzel text-[9px] tracking-widest text-champagne-300 bg-champagne-500/30 border border-champagne-400' : 'px-3 py-1 rounded-full font-cinzel text-[9px] tracking-widest text-slate-400';
    if (iceBtn) iceBtn.className = type === 'ice' ? 'px-3 py-1 rounded-full font-cinzel text-[9px] tracking-widest text-blue-300 bg-blue-500/30 border border-blue-400' : 'px-3 py-1 rounded-full font-cinzel text-[9px] tracking-widest text-slate-400';
    if (emeraldBtn) emeraldBtn.className = type === 'emerald' ? 'px-3 py-1 rounded-full font-cinzel text-[9px] tracking-widest text-emerald-300 bg-emerald-500/30 border border-emerald-400' : 'px-3 py-1 rounded-full font-cinzel text-[9px] tracking-widest text-slate-400';
};

function update3DCardInfo() {
    const jewel = jewels3D[current3DIndex];
    const maisonEl = document.getElementById('3dJewelMaison');
    const titleEl = document.getElementById('3dJewelTitle');
    const descEl = document.getElementById('3dJewelDesc');
    const linkEl = document.getElementById('3dOfficialLink');

    if (maisonEl) maisonEl.innerText = jewel.maison;
    if (titleEl) titleEl.innerText = jewel.title;
    if (descEl) descEl.innerText = jewel.desc;
    if (linkEl) {
        linkEl.href = jewel.site;
        const span = linkEl.querySelector('span');
        if (span) span.innerText = `VISITAR SITE OFICIAL ${jewel.maison}`;
    }
}

window.prev3DJewel = function() {
    current3DIndex = (current3DIndex - 1 + jewels3D.length) % jewels3D.length;
    update3DCardInfo();
};

window.next3DJewel = function() {
    current3DIndex = (current3DIndex + 1) % jewels3D.length;
    update3DCardInfo();
};

/* ----------------------------------------------------
   5. RENDERIZAÇÃO DINÂMICA DAS SEÇÕES HTML
---------------------------------------------------- */
function renderMaisons() {
    const container = document.getElementById('maisonsContainer');
    if (!container) return;
    container.innerHTML = maisons.map(m => `
        <div class="glass-dark dark:glass-dark light:glass-light rounded-[28px] overflow-hidden group hover:border-champagne-400/50 transition-all p-6 flex flex-col justify-between reveal-element">
            <div>
                <img src="${m.img}" alt="${m.name}" class="w-full h-44 object-cover rounded-[20px] mb-4 group-hover:scale-105 transition-transform">
                <h4 class="font-serif text-2xl font-normal mb-1">${m.name}</h4>
                <span class="font-cinzel text-[10px] text-slate-400 block mb-6">${m.location}</span>
            </div>
            <a href="${m.site}" target="_blank" class="w-full py-2.5 rounded-full border border-champagne-500/30 text-center font-cinzel text-[9px] tracking-[0.2em] text-champagne-400 hover:bg-champagne-500 hover:text-obsidian transition-all">
                VISITAR SITE OFICIAL
            </a>
        </div>
    `).join('');
}

function renderNews() {
    const container = document.getElementById('newsContainer');
    if (!container) return;
    container.innerHTML = newsItems.map(n => `
        <div class="glass-dark dark:glass-dark light:glass-light rounded-[32px] p-8 border border-champagne-500/25 flex flex-col justify-between group hover:border-champagne-400/50 transition-all reveal-element">
            <div>
                <span class="font-cinzel text-[10px] tracking-[0.25em] text-champagne-400 font-semibold uppercase block mb-3">${n.category}</span>
                <h3 class="font-serif text-2xl font-normal mb-4 group-hover:text-champagne-300 transition-colors">${n.title}</h3>
                <p class="font-sans font-light text-slate-400 text-xs leading-relaxed mb-6">${n.desc}</p>
            </div>
            <div class="flex items-center justify-between border-t border-champagne-500/20 pt-4">
                <span class="font-sans text-[10px] text-slate-500">${n.date}</span>
                <a href="${n.site}" target="_blank" class="font-cinzel text-[10px] text-champagne-400 hover:underline flex items-center gap-1.5">
                    <span>LER COMPLETO</span>
                    <i class="fa-solid fa-arrow-right text-[8px]"></i>
                </a>
            </div>
        </div>
    `).join('');
}

/* ----------------------------------------------------
   6. ANIMAÇÃO REVEAL AO SCROLLAR
---------------------------------------------------- */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-element').forEach(el => observer.observe(el));
}

/* ----------------------------------------------------
   7. ALTERNÂNCIA DE TEMAS
---------------------------------------------------- */
window.toggleLuxeTheme = function() {
    const html = document.documentElement;
    const icon = document.getElementById('themeIcon');
    const videoMask = document.getElementById('videoMask');

    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        if (icon) icon.className = 'fa-solid fa-sun text-amber-600';
        if (videoMask) videoMask.className = 'absolute inset-0 video-mask-light transition-all duration-700';
    } else {
        html.classList.remove('light');
        html.classList.add('dark');
        if (icon) icon.className = 'fa-solid fa-moon text-champagne-400';
        if (videoMask) videoMask.className = 'absolute inset-0 video-mask-dark transition-all duration-700';
    }
};

/* ----------------------------------------------------
   8. MODAL DE INSCRIÇÃO
---------------------------------------------------- */
window.openVaultModal = function() {
    const modal = document.getElementById('vaultModal');
    const card = document.getElementById('vaultCard');
    if (modal && card) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        card.classList.remove('modal-vault-enter');
        card.classList.add('modal-vault-active');
    }
};

window.closeVaultModal = function() {
    const modal = document.getElementById('vaultModal');
    const card = document.getElementById('vaultCard');
    if (modal && card) {
        card.classList.remove('modal-vault-active');
        card.classList.add('modal-vault-enter');
        setTimeout(() => {
            modal.classList.add('opacity-0', 'pointer-events-none');
        }, 300);
    }
};

window.handleVaultSubmit = function(e) {
    e.preventDefault();
    alert('Inscrição confirmada com sucesso! Você receberá nosso boletim em breve.');
    window.closeVaultModal();
};

/* ----------------------------------------------------
   9. CANVAS AMBIENTE DE PARTÍCULAS DOURADAS
---------------------------------------------------- */
function initAmbientParticles() {
    const canvas = document.getElementById('ambientCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 45 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
        speedY: Math.random() * -0.3 - 0.1
    }));

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.y += p.speedY;
            if (p.y < 0) p.y = height;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

/* ----------------------------------------------------
   INICIALIZAÇÃO GERAL NO CARREGAMENTO
---------------------------------------------------- */
window.addEventListener('DOMContentLoaded', function() {
    renderMaisons();
    renderNews();
    init3DEngine();
    initAmbientParticles();
    setTimeout(initScrollReveal, 100);
});