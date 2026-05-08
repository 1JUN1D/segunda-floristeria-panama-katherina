// ===================================
// LANDING PAGE JS - KB Flowers Panamá
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
    { id: 1, category: "Caja de Madera", tags: ["mixtas","cajas","cumpleaños","arreglos"], name: "Eres la Mejor Mamá del Mundo", description: "Caja de madera con girasoles, rosas rojas y claveles rosados sobre gypsophila, con cartel dedicado a mamá. Detalle tierno y elegante para sorprenderla en su día.", price: 75.00, image: "../assets/FloresPanama/ramo1.png" },
    { id: 2, category: "Rosas", tags: ["rosas","arreglos"], name: "Romance Clásico Bicolor", description: "Centro de rosas rojas y blancas en altura sobre cerámica rústica, con gypsophila y follaje. Romántico y refinado, ideal para aniversarios.", price: 68.75, image: "../assets/FloresPanama/ramo2.png" },
    { id: 3, category: "Premium", tags: ["rosas","premium","bouquets"], name: "Bouquet Premium Pasión Eterna", description: "Imponente ramo de rosas rojas premium en papel kraft y blanco con lazo de satín y gypsophila. Una pieza sofisticada para amor profundo.", price: 100.00, image: "../assets/FloresPanama/ramo3.png" },
    { id: 4, category: "Girasoles", tags: ["girasoles","mixtas","bouquets"], name: "Sol y Pasión", description: "Bouquet alegre con girasoles y rosas rojas, gypsophila y follaje fresco en envoltura roja, dorada y kraft. Energía y calidez en cada flor.", price: 68.75, image: "../assets/FloresPanama/ramo4.png" },
    { id: 5, category: "En Caja", tags: ["mixtas","cajas","cumpleaños"], name: "Cumpleaños Feliz Dulce Sorpresa", description: "Caja rosada con rosa naranja, claveles, margaritas amarillas y globo metálico de cumpleaños. Compacto y festivo para regalar alegría.", price: 47.50, image: "../assets/FloresPanama/ramo5.png" },
    { id: 6, category: "Girasoles", tags: ["girasoles","arreglos","bouquets"], name: "Atardecer en Girasoles", description: "Bouquet de girasoles y rosas rojas en papel rojo brillante con gypsophila, solidago amarillo y tarjeta personalizable. Vibrante y emotivo.", price: 62.50, image: "../assets/FloresPanama/ramo6.png" },
    { id: 7, category: "Premium", tags: ["rosas","premium","arreglos"], name: "Elegancia Rosa Pastel", description: "Arreglo sofisticado de rosas rosadas y lirios stargazer con gypsophila y eucalipto en base plateada con gran lazo rojo. Romántico y elegante.", price: 81.25, image: "../assets/FloresPanama/ramo7.png" },
    { id: 8, category: "Girasoles", tags: ["girasoles","bouquets"], name: "Campo de Sol", description: "Bouquet rústico-elegante de girasoles y rosas rojas con eucalipto plateado y gypsophila en envoltura rosa fucsia y kraft. Fresco y vibrante.", price: 62.50, image: "../assets/FloresPanama/ramo8.png" },
    { id: 9, category: "Caja Gourmet", tags: ["mixtas","cajas","cumpleaños"], name: "Caja Feliz Cumpleaños Gourmet", description: "Caja de regalo con rosas rojas, claveles, chocolates Ferrocher, snacks y globo dorado de cumpleaños. Dulzura y flores juntas.", price: 50.00, image: "../assets/FloresPanama/ramo9.png" },
    { id: 10, category: "Flores Mixtas", tags: ["mixtas","arreglos","cumpleaños"], name: "Fiesta Floral Festiva", description: "Centro floral con rosas rojas, alstroemerias rosadas y gypsophila, coronado con globo de colores. Alegre y versátil para cualquier celebración.", price: 56.25, image: "../assets/FloresPanama/ramo10.png" },
    { id: 11, category: "Caja Premium", tags: ["rosas","cajas","premium"], name: "Caja Roja Ferrero Deluxe", description: "Caja negra elegante con claveles y rosas rojas intensas, decorada con bombones Ferrero Rocher dorados. Lujo, sabor y emoción en uno solo.", price: 60.00, image: "../assets/FloresPanama/ramo11.png" },
    { id: 12, category: "Flores Mixtas", tags: ["mixtas","cumpleaños","arreglos"], name: "Alegría Multicolor de Cumpleaños", description: "Arreglo con margaritas amarillas, rosas lilas, claveles, lirio naranja y globo de Feliz Cumpleaños. Explosión de color y vida.", price: 43.75, image: "../assets/FloresPanama/ramo12.png" },
    { id: 13, category: "Para Él", tags: ["mixtas","cajas","arreglos"], name: "Brindis Tropical Para Él", description: "Composición masculina con girasoles, rosas azules preservadas, latas de bebida, Ferrero y hojas tropicales en caja negra. Moderno y original.", price: 37.50, image: "../assets/FloresPanama/ramo13.png" },
    { id: 14, category: "Caja Corazón", tags: ["rosas","cajas","premium"], name: "Corazón de Amor Eterno", description: "Arreglo en forma de corazón con gypsophila rosada y bombones Ferrero sobre rosas rojas, claveles y margaritas en sombrerera rosa. Romántico único.", price: 50.00, image: "../assets/FloresPanama/ramo14.png" },
    { id: 15, category: "Bouquet", tags: ["rosas","bouquets","arreglos"], name: "Sol Dorado Bouquet", description: "Bouquet elegante de rosas amarillas con statice morado, gypsophila y follaje verde en papel blanco con detalles dorados. Alegría y calidez.", price: 47.50, image: "../assets/FloresPanama/ramo15.png" },
    { id: 16, category: "Girasoles", tags: ["girasoles","bouquets"], name: "Girasoles Nocturnos", description: "Bouquet moderno de girasoles con gypsophila y follaje verde en papel negro mate y lazo blanco. Sofisticado y minimalista contraste.", price: 43.75, image: "../assets/FloresPanama/ramo16.png" },
    { id: 17, category: "Rosas", tags: ["rosas","arreglos"], name: "Encanto Rosa y Carmesí", description: "Bouquet en florero de cristal con rosas rojas, blush, mini claveles rosados y eucalipto en papel rosa pastel. Tierno y elegante.", price: 56.25, image: "../assets/FloresPanama/ramo17.png" },
    { id: 18, category: "Cesta", tags: ["mixtas","arreglos"], name: "Cesta Tradicional de Amor", description: "Cesta tejida con rosas rojas, claveles y gypsophila, decorada con gran lazo dorado. Tradicional y atemporal para expresar afecto.", price: 62.50, image: "../assets/FloresPanama/ramo18.png" },
    { id: 19, category: "Flores Mixtas", tags: ["mixtas","arreglos","cumpleaños"], name: "Te Amo Mamá Multicolor", description: "Arreglo alegre con rosas rojas, margaritas amarillas, claveles rosados y gypsophila en envoltura roja, con tarjeta para mamá. Colorido y emotivo.", price: 43.75, image: "../assets/FloresPanama/ramo19.png" },
    { id: 20, category: "Bouquet", tags: ["rosas","bouquets"], name: "Fucsia Encantador", description: "Composición con rosas fucsias, claveles rosados, statice morado y gypsophila en envoltura kraft con lazo dorado. Vibrante y femenino.", price: 47.50, image: "../assets/FloresPanama/ramo20.png" },
    { id: 21, category: "Rosas", tags: ["rosas","bouquets"], name: "Atardecer Coral", description: "Arreglo vertical con rosas bicolor coral-naranja y claveles rojos, con gypsophila y follaje verde, lazo rosa fucsia. Cálido y delicado.", price: 43.75, image: "../assets/FloresPanama/ramo21.png" },
    { id: 22, category: "Cesta", tags: ["mixtas","arreglos"], name: "Cesta Jardín Encantado", description: "Cesta blanca con rosas rojas y fucsias, margaritas rosadas, girasoles, claveles y statice morado. Campestre, colorido y alegre.", price: 37.50, image: "../assets/FloresPanama/ramo22.png" },
];

// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'priority'; // 'priority' = orden por defecto de la landing
let LANDING_PRIORITY_TAG = ''; // Se establece por cada landing

// --- FORMATEO DE PRECIO ---
function formatUSD(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD', minimumFractionDigits: 2
    }).format(price);
}

// --- ORDENAR PRODUCTOS: primero los de la categoría de la landing ---
function getSortedProducts(priorityTag) {
    const priority = [];
    const rest = [];
    products.forEach(p => {
        if (p.tags && p.tags.includes(priorityTag)) {
            priority.push(p);
        } else {
            rest.push(p);
        }
    });
    // Dentro de cada grupo, ordenar por precio ascendente
    priority.sort((a, b) => a.price - b.price);
    rest.sort((a, b) => a.price - b.price);
    return [...priority, ...rest];
}

// --- FUNCIÓN PARA RENDERIZAR PRODUCTOS ---
function renderProducts(filters = [], limit = null) {
    const container = document.querySelector('.products-container');
    if (!container) return;

    let productsToDisplay = products;

    // Si LANDING_PRIORITY_TAG está definido, usar getSortedProducts
    if (LANDING_PRIORITY_TAG) {
        productsToDisplay = getSortedProducts(LANDING_PRIORITY_TAG);
    }

    // Filtrar por tags si se proporcionan
    if (filters.length > 0) {
        productsToDisplay = productsToDisplay.filter(p => 
            filters.some(f => p.tags && p.tags.includes(f))
        );
    }

    // Limitar cantidad si se especifica
    if (limit) {
        productsToDisplay = productsToDisplay.slice(0, limit);
    }

    container.innerHTML = '';

    // Card de Arreglo Personalizado - SIEMPRE PRIMERO
    const customCard = `
        <div class="product-item product-item-custom" style="border:2px dashed #c44569;background:linear-gradient(135deg,#fff0f5,#fff);">
            <div class="product-image">
                <img src="../assets/FloresPanama/ramo3.png" alt="Arreglo Personalizado - KB Flowers" loading="lazy">
            </div>
            <div class="product-info">
                <h3 style="color:#c44569;">¿Quieres un Arreglo Personalizado?</h3>
                <p>¡Diseñamos contigo el ramo perfecto! Contamos con muchas más opciones disponibles y elaboramos arreglos a tu medida según tus colores, flores favoritas y la ocasión. Cuéntanos tu idea por WhatsApp.</p>
                <div class="product-footer">
                    <span class="price">A Consultar</span>
                    <button class="btn-order" onclick="contactCustomWA()">
                        Personalizar Ahora
                    </button>
                </div>
            </div>
        </div>
    `;
    container.innerHTML = customCard;

    productsToDisplay.forEach(product => {
        const productHTML = `
            <div class="product-item">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name} - Flores a domicilio Panamá" loading="lazy">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        <span class="price">${formatUSD(product.price)}</span>
                        <button class="btn-order" onclick="orderWA('${product.name}', '${product.price}')">
                            Pedir por WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

// --- FUNCIONES DE WHATSAPP (con tracking de landing de origen y backup anti-race) ---
function _getLandingPath() {
    try {
        return window.location.pathname.split('/').pop().replace('.html','') || 'home';
    } catch (e) { return 'unknown'; }
}

function _openWAOnce(url) {
    var opened = false;
    return function() {
        if (!opened) { opened = true; window.open(url, '_blank'); }
    };
}

function contactCustomWA() {
    const landing = _getLandingPath();
    const url = `https://wa.me/50760318371?text=${encodeURIComponent('Hola KB Flowers 🌹, vi la página de '+landing+' y quiero un arreglo personalizado. ¿Me asesoran con opciones?')}`;
    const open = _openWAOnce(url);
    try {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_click', { 'event_category': 'engagement', 'event_label': 'custom_arrangement', 'landing': landing });
            gtag('event', 'conversion', {
                'send_to': 'AW-17971833009/vV8ZCOKaw_0bELHR0flC',
                'value': 1.0, 'currency': 'USD',
                'event_callback': open
            });
        }
    } catch (e) {}
    setTimeout(open, 400);
}

function contactWA(source) {
    source = source || 'generic';
    const landing = _getLandingPath();
    const url = `https://wa.me/50760318371?text=${encodeURIComponent('Hola KB Flowers 🌹, vi su web ('+landing+') y quiero cotizar flores en Panamá. ¿Me asesoran y entregan HOY?')}`;
    const open = _openWAOnce(url);
    try {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_click', { 'event_category': 'engagement', 'event_label': source, 'landing': landing });
            gtag('event', 'conversion', {
                'send_to': 'AW-17971833009/vV8ZCOKaw_0bELHR0flC',
                'value': 1.0, 'currency': 'USD',
                'event_callback': open
            });
        }
    } catch (e) {}
    setTimeout(open, 400);
}

function orderWA(productName, price) {
    const landing = _getLandingPath();
    const message = `Hola KB Flowers 🌹, vi el *${productName}* (${formatUSD(price)}) en su web. ¿Está disponible para entrega HOY en Panamá?`;
    const url = `https://wa.me/50760318371?text=${encodeURIComponent(message)}`;
    const open = _openWAOnce(url);
    try {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'product_order', { 'event_category': 'Catalog', 'event_label': productName, 'landing': landing, 'value': price });
            gtag('event', 'conversion', {
                'send_to': 'AW-17971833009/vV8ZCOKaw_0bELHR0flC',
                'value': parseFloat(price) || 1.0, 'currency': 'USD',
                'event_callback': open
            });
        }
    } catch (e) {}
    setTimeout(open, 400);
}

// --- FILTRADO DE PRODUCTOS ---
function filterProducts(tag) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-filter') === tag) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (tag === 'all') {
        renderProducts();
    } else {
        renderProducts([tag]);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar productos por defecto
    renderProducts();
});

// =====================================================================
// SISTEMA DE NEUROVENTAS PARA LANDINGS DE PANAMÁ
// Aplica precio anclado + badges + notificaciones sociales + countdown
// SIN modificar cada landing HTML (usa MutationObserver sobre el grid).
// =====================================================================

// --- HELPERS DE PRECIO ANTERIOR ---
// Precio "Antes" 30% mayor al precio actual, redondeado a $0.50.
function _calcShopPriceUSD(price) {
    return Math.ceil((price * 1.30) * 2) / 2;
}

function _badgeForProductPa(p) {
    if (!p) return null;
    if (p.id % 9 === 0) return { txt: '⭐ Más vendido', cls: 'badge-best' };
    if (p.id % 7 === 0) return { txt: '🔥 Top semana', cls: 'badge-hot' };
    if (p.id % 11 === 0) return { txt: '⏰ Últimos 3 hoy', cls: 'badge-low' };
    if ((p.tags || []).includes('premium')) return { txt: '💎 Premium', cls: 'badge-prem' };
    return null;
}

// Usa formatUSD ya existente para mostrar el precio anclado
function _decoratePriceCardPa(card) {
    if (!card || card.dataset.neuroDecorated === '1') return;
    card.dataset.neuroDecorated = '1';

    var priceEl = card.querySelector('.price');
    if (!priceEl) return;
    var raw = priceEl.textContent.replace(/[^0-9.]/g, '');
    var price = parseFloat(raw);
    if (!price || isNaN(price)) return;

    var shop = _calcShopPriceUSD(price);
    var save = shop - price;
    var pct  = Math.round((save / shop) * 100);

    // Wrap del precio con bloque de anclaje
    var wrap = priceEl.closest('.price-block') || priceEl.parentNode;
    var newBlock = document.createElement('div');
    newBlock.className = 'price-block-anchor';
    newBlock.innerHTML =
        '<span class="lbl-shop">Antes</span>' +
        '<span class="price-shop">' + formatUSD(shop) + '</span>' +
        '<span class="lbl-web">Ahora</span>' +
        '<span class="price-web">' + formatUSD(price) + '</span>' +
        '<span class="price-save">Ahorras ' + formatUSD(save) + '</span>';
    wrap.parentNode.replaceChild(newBlock, wrap);

    // Badge de descuento sobre la imagen
    var imgWrap = card.querySelector('.product-img-wrap, .product-image');
    if (imgWrap && !imgWrap.querySelector('.product-discount-badge')) {
        imgWrap.style.position = 'relative';
        var badge = document.createElement('span');
        badge.className = 'product-discount-badge';
        badge.textContent = '-' + pct + '% HOY';
        imgWrap.appendChild(badge);

        // Tag de status si el producto tiene id (lo intentamos recuperar del nombre)
        var nameEl = card.querySelector('h3');
        if (nameEl) {
            var prod = (typeof products !== 'undefined') ? products.find(function(p) { return p.name === nameEl.textContent.trim(); }) : null;
            var status = _badgeForProductPa(prod);
            if (status) {
                var st = document.createElement('span');
                st.className = 'product-status-badge ' + status.cls;
                st.textContent = status.txt;
                imgWrap.appendChild(st);
            }
        }
    }
}

// --- CSS GLOBAL DE NEUROVENTAS ---
(function injectNeuroSalesCSSPa() {
    if (document.getElementById('neurosales-css-pa')) return;
    var s = document.createElement('style');
    s.id = 'neurosales-css-pa';
    s.textContent = `
        .product-discount-badge {
            position: absolute; top: 10px; left: 10px;
            background: linear-gradient(135deg, #d62828, #9d0208);
            color: #fff; padding: 6px 12px; border-radius: 20px;
            font-size: 13px; font-weight: 800; letter-spacing: 0.4px;
            box-shadow: 0 4px 12px rgba(157,2,8,0.45);
            z-index: 5; transform: rotate(-4deg);
            animation: neuroPulsePa 2.2s ease-in-out infinite;
        }
        @keyframes neuroPulsePa {
            0%,100% { transform: rotate(-4deg) scale(1); }
            50% { transform: rotate(-4deg) scale(1.06); }
        }
        .product-status-badge {
            position: absolute; top: 48px; right: 10px;
            color: #fff; padding: 5px 10px; border-radius: 14px;
            font-size: 11px; font-weight: 700; letter-spacing: 0.3px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.18); z-index: 5;
        }
        .product-status-badge.badge-best { background: linear-gradient(135deg,#f59e0b,#d97706); }
        .product-status-badge.badge-hot  { background: linear-gradient(135deg,#ef4444,#b91c1c); }
        .product-status-badge.badge-low  { background: linear-gradient(135deg,#7c3aed,#5b21b6); }
        .product-status-badge.badge-prem { background: linear-gradient(135deg,#0f766e,#0d4842); }
        .price-block-anchor { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
        .price-block-anchor .lbl-shop { font-size: 11px; color: #888; font-weight: 500; text-transform: uppercase; letter-spacing: 0.4px; }
        .price-block-anchor .price-shop { font-size: 14px; color: #999; text-decoration: line-through; font-weight: 500; }
        .price-block-anchor .lbl-web { font-size: 11px; color: #c44569; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px; }
        .price-block-anchor .price-web { font-size: 22px; color: #c44569; font-weight: 800; line-height: 1; }
        .price-block-anchor .price-save { font-size: 11px; color: #16a34a; font-weight: 700; margin-top: 2px; background: #ecfdf5; padding: 2px 8px; border-radius: 8px; display: inline-block; align-self: flex-start; }
        .social-notif { position: fixed; left: 20px; bottom: 90px; max-width: 310px; background: #fff; color: #333; border-radius: 14px; padding: 12px 14px; display: flex; gap: 10px; align-items: flex-start; box-shadow: 0 10px 28px rgba(0,0,0,0.18); border-left: 4px solid #16a34a; z-index: 9990; font-size: 13px; line-height: 1.4; transform: translateY(120%); opacity: 0; transition: all 0.45s cubic-bezier(.22,1.5,.36,1); pointer-events: none; }
        .social-notif.show { transform: translateY(0); opacity: 1; }
        .social-notif .sn-emoji { font-size: 22px; line-height: 1; }
        .social-notif .sn-name { font-weight: 700; color: #111; }
        .social-notif .sn-time { color: #888; font-size: 11px; margin-top: 3px; }
        @media (max-width: 600px) { .social-notif { left: 12px; right: 12px; max-width: none; bottom: 80px; } }
    `;
    document.head.appendChild(s);
})();

// --- OBSERVADOR DE GRIDS DE PRODUCTOS ---
// Funciona para cualquier landing que renderice productos en .product-card-landing
// o .product-item, sin tocar el HTML de cada landing.
(function watchProductGrids() {
    function decorateExisting() {
        document.querySelectorAll('.product-card-landing, .product-item').forEach(_decoratePriceCardPa);
    }

    function start() {
        decorateExisting();

        var obs = new MutationObserver(function(muts) {
            muts.forEach(function(m) {
                m.addedNodes.forEach(function(node) {
                    if (node.nodeType !== 1) return;
                    if (node.matches && (node.matches('.product-card-landing') || node.matches('.product-item'))) {
                        _decoratePriceCardPa(node);
                    } else if (node.querySelectorAll) {
                        node.querySelectorAll('.product-card-landing, .product-item').forEach(_decoratePriceCardPa);
                    }
                });
            });
        });
        // Observa todo el body — barato porque solo reacciona a inserciones
        obs.observe(document.body, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else { start(); }
})();

// --- NOTIFICACIONES SOCIALES (FOMO) ---
(function injectSocialNotifsPa() {
    var pool = [
        { name: 'María C.',    area: 'San Francisco',   product: 'Bouquet Premium Pasión Eterna', ago: 4 },
        { name: 'Andrés L.',   area: 'Costa del Este',  product: 'Elegancia Rosa Pastel',         ago: 9 },
        { name: 'Daniela P.',  area: 'Obarrio',         product: 'Corazón de Amor Eterno',        ago: 14 },
        { name: 'Roberto M.',  area: 'Bella Vista',     product: 'Atardecer en Girasoles',        ago: 21 },
        { name: 'Sofía R.',    area: 'Marbella',        product: 'Sol y Pasión',                  ago: 28 },
        { name: 'Carlos V.',   area: 'San Miguelito',   product: 'Caja Roja Ferrero Deluxe',      ago: 36 },
        { name: 'Ana G.',      area: 'Clayton',         product: 'Cesta Tradicional de Amor',     ago: 44 },
        { name: 'Diego T.',    area: 'Punta Pacífica',  product: 'Sol Dorado Bouquet',            ago: 52 },
    ];
    var idx = 0;

    function showOne() {
        var item = pool[idx % pool.length]; idx++;
        var n = document.createElement('div');
        n.className = 'social-notif';
        n.innerHTML = '<span class="sn-emoji">🌹</span>' +
            '<div><div><span class="sn-name">' + item.name + '</span> de ' + item.area +
            ' acaba de pedir <strong>' + item.product + '</strong></div>' +
            '<div class="sn-time">Hace ' + item.ago + ' min · ✅ Pedido confirmado</div></div>';
        document.body.appendChild(n);
        setTimeout(function() { n.classList.add('show'); }, 50);
        setTimeout(function() {
            n.classList.remove('show');
            setTimeout(function() { if (n.parentNode) n.parentNode.removeChild(n); }, 500);
        }, 6500);
    }

    function start() {
        setTimeout(function() {
            showOne();
            setInterval(showOne, 25000);
        }, 8000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else { start(); }
})();

// --- CONTADOR DE URGENCIA "ENTREGA HOY" (escasez temporal real) ---
// Cutoff Panamá: 2:00 PM (más estricto que Cali porque el tráfico es de día completo)
(function injectUrgencyCountdownPa() {
    function updateCountdown() {
        var bar = document.querySelector('.top-bar');
        if (!bar) return;
        var marker = document.getElementById('urgencyCountdownTextPa');
        if (!marker) {
            marker = document.createElement('span');
            marker.id = 'urgencyCountdownTextPa';
            marker.style.cssText = 'display:block;font-weight:700;margin-top:2px;font-size:13px;color:#fff;';
            bar.appendChild(marker);
        }
        var now = new Date();
        var cutoff = new Date(now); cutoff.setHours(14, 0, 0, 0); // 2:00 PM
        var diffMs = cutoff - now;
        if (diffMs > 0) {
            var totalMin = Math.floor(diffMs / 60000);
            var h = Math.floor(totalMin / 60);
            var m = totalMin % 60;
            var label = (h > 0 ? h + 'h ' : '') + m + 'm';
            marker.innerHTML = '⏰ Pide en las próximas <strong>' + label + '</strong> y entregamos HOY antes de las 6:00 PM';
        } else {
            marker.innerHTML = '🌅 Próximas entregas: MAÑANA. Pide ya y aseguras tu cupo del primer turno';
        }
    }
    function start() {
        updateCountdown();
        setInterval(updateCountdown, 60000);
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else { start(); }
})();

// --- NOTA FLOTANTE: URGENCIA + RECIPROCIDAD (gatillo de neuroventas) ---
// Reemplaza la antigua nota "Delivery NO incluido" que generaba priming negativo.
// Esta versión crea urgencia, es clickeable y dispara conversión a WhatsApp.
(function injectUrgencyNote() {
    function buildNote() {
        if (document.getElementById('urgencyNotePanama')) return;
        // Limpiar nota negativa antigua si quedó cacheada
        var old = document.getElementById('deliveryNote'); if (old) old.remove();

        var style = document.createElement('style');
        style.textContent = `
            .urgency-floating-note { position: fixed; bottom: 20px; left: 20px; background: linear-gradient(135deg,#ff6b9d,#c44569); color:#fff; padding:12px 18px; border-radius:30px; font-family:'Segoe UI',Tahoma,sans-serif; font-size:14px; font-weight:600; box-shadow:0 6px 18px rgba(196,69,105,0.35); z-index:9998; display:flex; align-items:center; gap:8px; max-width:300px; line-height:1.3; animation: pulseUrgencyPa 2.5s ease-in-out infinite; cursor:pointer; }
            .urgency-floating-note .urgency-icon { font-size:20px; }
            .urgency-floating-note .urgency-close { background:rgba(255,255,255,0.2); border:none; color:#fff; cursor:pointer; border-radius:50%; width:22px; height:22px; display:flex; align-items:center; justify-content:center; font-size:14px; margin-left:6px; flex-shrink:0; }
            @keyframes pulseUrgencyPa { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-4px);} }
            @media (max-width: 600px) { .urgency-floating-note{font-size:12px; padding:10px 14px; max-width:240px; bottom:12px; left:12px;} }
        `;
        document.head.appendChild(style);

        var note = document.createElement('div');
        note.className = 'urgency-floating-note';
        note.id = 'urgencyNotePanama';
        note.innerHTML = '<span class="urgency-icon">🌹</span><span>Pide antes de las <strong>2:00 PM</strong> y entregamos HOY en Panamá</span><button class="urgency-close" aria-label="Cerrar">×</button>';
        note.addEventListener('click', function(ev) {
            if (ev.target.classList.contains('urgency-close')) {
                note.style.display = 'none';
                return;
            }
            if (typeof contactWA === 'function') contactWA('urgency_note');
        });
        document.body.appendChild(note);
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildNote);
    } else {
        buildNote();
    }
})();
