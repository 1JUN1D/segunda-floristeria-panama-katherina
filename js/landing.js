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

// --- FUNCIONES DE WHATSAPP ---
function contactCustomWA() {
    const url = 'https://wa.me/50760318371?text=Hola%20KB%20Flowers,%20me%20gustar%C3%ADa%20cotizar%20un%20arreglo%20personalizado.%20%C2%BFPodr%C3%ADan%20ayudarme%3F';
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-17971833009/vV8ZCOKaw_0bELHR0flC',
            'value': 1.0,
            'currency': 'USD',
            'event_callback': function () { window.open(url, '_blank'); }
        });
    } catch (e) { window.open(url, '_blank'); }
}

function contactWA() {
    const url = 'https://wa.me/50760318371?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20flores.%20%C2%BFPodr%C3%ADan%20ayudarme%3F';
    // Track conversion - Mensaje WhatsApp
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-17971833009/vV8ZCOKaw_0bELHR0flC',
            'value': 1.0,
            'currency': 'COP',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

function orderWA(productName, price) {
    const message = `Hola, me interesa ${productName} (${formatUSD(price)}). ¿Podrías darme más información?`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/50760318371?text=${encodedMessage}`;
    
    // Track conversion to Google Ads
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-17971833009/vV8ZCOKaw_0bELHR0flC',
            'value': 1.0,
            'currency': 'COP',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
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

// --- NOTA FLOTANTE: DELIVERY NO INCLUIDO ---
(function injectDeliveryNote() {
    function buildNote() {
        if (document.getElementById('deliveryNote')) return;
        var style = document.createElement('style');
        style.textContent = `
            .delivery-floating-note { position: fixed; bottom: 20px; left: 20px; background: linear-gradient(135deg,#ff6b9d,#c44569); color:#fff; padding:12px 18px; border-radius:30px; font-family:'Segoe UI',Tahoma,sans-serif; font-size:14px; font-weight:600; box-shadow:0 6px 18px rgba(196,69,105,0.35); z-index:9998; display:flex; align-items:center; gap:8px; max-width:280px; line-height:1.3; animation: pulseDelivery 2.5s ease-in-out infinite; }
            .delivery-floating-note .delivery-icon { font-size:18px; }
            .delivery-floating-note .delivery-close { background:rgba(255,255,255,0.2); border:none; color:#fff; cursor:pointer; border-radius:50%; width:22px; height:22px; display:flex; align-items:center; justify-content:center; font-size:14px; margin-left:6px; }
            @keyframes pulseDelivery { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-4px);} }
            @media (max-width: 600px) { .delivery-floating-note{font-size:12px; padding:10px 14px; max-width:220px; bottom:12px; left:12px;} }
        `;
        document.head.appendChild(style);
        var note = document.createElement('div');
        note.className = 'delivery-floating-note';
        note.id = 'deliveryNote';
        note.innerHTML = '<span class="delivery-icon">🚚</span><span>El servicio de Delivery <strong>NO está incluido</strong> en el precio.</span><button class="delivery-close" aria-label="Cerrar">×</button>';
        note.querySelector('.delivery-close').onclick = function() { note.style.display = 'none'; };
        document.body.appendChild(note);
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildNote);
    } else {
        buildNote();
    }
})();
