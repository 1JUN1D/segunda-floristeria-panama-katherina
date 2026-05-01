// ===================================
// LANDING PAGE JS - KB Flowers Panamá
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
    { id: 1, category: "Rosas en Caja", tags: ["rosas","cajas","cumpleaños"], name: "Latido de Poder", description: "Rosas rojas en caja corazón. No es solo un regalo, es la forma más directa de decir lo que sientes sin abrir la boca. Quien lo recibe, lo entiende al instante.", price: 322.50, image: "../assets/ramo1.webp" },
    { id: 2, category: "Rosas en Caja", tags: ["rosas","cajas"], name: "Garantía de Amor", description: "Rosas rojas en caja corazón compacta. Ese detalle que transforma un día normal en un recuerdo que no se borra. Para cuando necesitas que sepa que va en serio.", price: 160.00, image: "../assets/ramo2.webp" },
    { id: 3, category: "Caja Elegante", tags: ["rosas","cajas"], name: "Conquista Roja", description: "Rosas rojas en caja elegante. La forma más poderosa de sorprender a alguien que lo merece todo. Para ese momento donde las palabras no alcanzan.", price: 235.00, image: "../assets/ramo3.webp" },
    { id: 4, category: "Caja Floral", tags: ["mixtas","cajas"], name: "Refugio Secreto", description: "Flores rosadas y crema en caja floral. Suavidad que desarma. Un detalle que ilumina el espacio y alegra el corazón sin necesidad de una razón especial.", price: 118.75, image: "../assets/ramo4.webp" },
    { id: 5, category: "Premium", tags: ["rosas","premium","cumpleaños"], name: "Victoria Completa", description: "Rosas rojas con globo personalizado. 33\" de alto x 18\" de ancho. El regalo que llega y roba todas las miradas. Para celebrar logros o decir: estoy orgulloso de ti.", price: 225.00, image: "../assets/ramo5.webp" },
    { id: 6, category: "Caja Floral", tags: ["mixtas","cajas"], name: "Despertar de Energía", description: "Margaritas blancas, flores azules y rosas amarillas en caja amarilla. Lo abres y sientes que el día empieza de nuevo. Para sacarle una sonrisa a quien más quieres.", price: 118.75, image: "../assets/ramo6.webp" },
    { id: 7, category: "Cesta", tags: ["mixtas","arreglos"], name: "Territorio Encantado", description: "Rosas rosadas, blancas y azules en cesta con lazo. Parece salido de un sueño. Un regalo lleno de ternura que nadie espera y nadie olvida.", price: 122.50, image: "../assets/ramo7.webp" },
    { id: 8, category: "Bouquet", tags: ["rosas","bouquets"], name: "Dominio Suave", description: "Rosas rosadas con detalles blancos en bouquet. Delicado como un abrazo. Un detalle que dice más que mil mensajes de texto.", price: 118.75, image: "../assets/ramo8.webp" },
    { id: 9, category: "Jarrón", tags: ["mixtas","arreglos"], name: "Fortaleza Pastel", description: "Hortensias pastel rosado, azul y blanco en jarrón de cristal. Frescura y elegancia en una sola pieza. Transforma cualquier espacio en un rincón de calma.", price: 122.50, image: "../assets/ramo9.webp" },
    { id: 10, category: "Flores Mixtas", tags: ["mixtas","arreglos"], name: "Impacto Sutil", description: "Cientos de mini flores en tonos pastel. Ligero, mágico, diferente a todo. El regalo que hace que digan: ¿de dónde sacaste algo tan hermoso?", price: 156.25, image: "../assets/ramo10.webp" },
    { id: 11, category: "Bouquet", tags: ["bouquets","arreglos"], name: "Comando Sereno", description: "Lirios blancos con flores azules en bouquet. Transmite paz y frescura como un atardecer frente al mar. Para alguien que merece un respiro.", price: 137.50, image: "../assets/ramo11.webp" },
    { id: 12, category: "Corazón", tags: ["rosas","premium","cumpleaños"], name: "Precision del Corazón", description: "Flores blancas y rosas rosadas en forma de corazón. Ternura hecha arreglo. Un detalle que habla directo al corazón sin rodeos.", price: 187.50, image: "../assets/ramo12.webp" },
    { id: 13, category: "Con Globos", tags: ["mixtas","arreglos","cumpleaños"], name: "Estrategia Dulce", description: "Rosas rosadas y blancas con globos transparentes. Moderno, festivo y romántico. El regalo que convierte cualquier día en una celebración.", price: 150.00, image: "../assets/ramo13.webp" },
    { id: 14, category: "Premium", tags: ["rosas","premium"], name: "Imperio Rosa", description: "Rosas suaves, orquídeas y flores selectas en caja con lazo. Distinción pura. Para cuando quieres que el detalle hable de tu buen gusto y tu cariño sin límites.", price: 350.00, image: "../assets/ramo14.webp" },
    { id: 15, category: "Caja Premium", tags: ["rosas","cajas"], name: "Arquitectura Floral", description: "Rosas rosadas, crema y blancas con detalles verdes en caja rosa. Un pedacito de jardín que llega a sus manos. Sofisticado, dulce y memorable.", price: 250.00, image: "../assets/ramo15.webp" },
    { id: 16, category: "Caja Floral", tags: ["rosas","cajas"], name: "Arsenal de Pasión", description: "Rosas en tonos rojos y rosa, abundante y llamativo en caja floral. Impacto visual que deja sin palabras. Para cuando quieres que el regalo grite lo que sientes.", price: 312.50, image: "../assets/ramo16.webp" },
    { id: 17, category: "Caja Floral", tags: ["rosas","cajas"], name: "Conquista Real", description: "Rosas rojas con orquídeas blancas en caja floral. Romance y distinción en una sola entrega. Un regalo que dice: esto es de verdad.", price: 275.00, image: "../assets/ramo17.webp" },
    { id: 18, category: "Jarrón", tags: ["mixtas","arreglos"], name: "Blindaje Emocional", description: "Calas rosadas y blancas con rosas en jarrón de cristal. Gracia natural que llena cualquier ambiente de calma. Para quien valora lo fino y lo delicado.", price: 187.50, image: "../assets/ramo18.webp" },
    { id: 19, category: "Rosas", tags: ["rosas","arreglos"], name: "Detonador Dorado", description: "Rosas rojas, naranjas y doradas con detalles verdes. Energía cálida que ilumina. Como regalar un atardecer en flores.", price: 235.00, image: "../assets/ramo19.webp" },
    { id: 20, category: "Jarrón", tags: ["rosas","arreglos"], name: "Legado Carmesí", description: "Rosas rojas, flores blancas y eucalipto en jarrón de cristal. Clásico que nunca falla. Romance con un toque de frescura que conquista desde el primer vistazo.", price: 118.75, image: "../assets/ramo20.webp" },
    { id: 21, category: "Caja Floral", tags: ["rosas","cajas"], name: "Incendio Interior", description: "Rosas rojas, naranjas y rosadas en caja floral. Intensidad y color para alguien que te mueve por dentro. El detalle que dice: me haces sentir vivo.", price: 187.50, image: "../assets/ramo21.webp" },
    { id: 22, category: "Bouquet", tags: ["rosas","bouquets"], name: "Vitamina Solar", description: "Rosas naranja y coral con eucalipto en bouquet. Optimismo en cada pétalo. Para alegrar, felicitar o simplemente recordarle a alguien que brilla.", price: 137.50, image: "../assets/ramo22.webp" },
    { id: 23, category: "Bouquet", tags: ["rosas","bouquets"], name: "Código Elegante", description: "Rosas blancas y rosadas, tulipanes y eucalipto en papel translúcido con lazo satinado. Estilo minimalista coreano que enamora. Diferente, delicado, inolvidable.", price: 106.25, image: "../assets/ramo23.webp" },
    { id: 24, category: "Bouquet", tags: ["rosas","bouquets"], name: "Rendición Total", description: "Rosas rosadas y lisianthus en papel rosa pastel con lazo. Romanticismo suave con un toque moderno. El bouquet que toda mujer sueña recibir.", price: 112.50, image: "../assets/ramo24.webp" },
    { id: 25, category: "Gerberas", tags: ["gerberas","bouquets","cumpleaños"], name: "Explosión Viva", description: "Gerberas rosadas y blancas con mariposas decorativas en papel rosa vibrante. Alegría que se ve y se siente. Un regalo que arranca sonrisas al instante.", price: 118.75, image: "../assets/ramo25.webp" },
    { id: 26, category: "Gerberas", tags: ["gerberas","bouquets"], name: "Territorio Fresco", description: "Gerberas crema y rosado, rosas, tulipanes en papel color menta con lazo. Frescura que entra por los ojos. Natural, moderno y lleno de vida.", price: 100.00, image: "../assets/ramo26.webp" },
    { id: 27, category: "Gerberas", tags: ["gerberas","bouquets"], name: "Golpe Directo", description: "Gerberas rojas intensas con eucalipto en papel kraft y lazo rojo. Sin vueltas. Para cuando quieres que el rojo hable por ti.", price: 87.50, image: "../assets/ramo27.webp" },
    { id: 28, category: "Gerberas", tags: ["gerberas","bouquets"], name: "Dominio Coral", description: "Gerberas rosadas, lirios, flores coral y fucsia en papel durazno. Vibrante como un atardecer tropical. El regalo que nadie puede ignorar.", price: 106.25, image: "../assets/ramo28.webp" },
    { id: 29, category: "Gerberas", tags: ["gerberas","bouquets"], name: "Susurro Táctico", description: "Gerberas rosadas y lisianthus pastel en papel beige con lazo. Minimalista y tierno. Para decir te quiero sin exagerar, pero sin dejar dudas.", price: 81.25, image: "../assets/ramo29.webp" },
    { id: 30, category: "Gerberas", tags: ["gerberas","bouquets"], name: "Fuerza Rosa", description: "Gerberas rosadas y fucsia con flores de relleno en papel blanco con lazo. Fresco y alegre. El detalle perfecto para expresar cariño con estilo.", price: 87.50, image: "../assets/ramo30.webp" },
    { id: 31, category: "Gerberas", tags: ["gerberas","bouquets"], name: "Misión Delicada", description: "Gerberas rosadas con flores de relleno en papel rosa pastel. Minimalista y dulce. Un regalo que dice mucho con poco.", price: 81.25, image: "../assets/ramo31.webp" },
    { id: 32, category: "Gerberas", tags: ["gerberas","bouquets"], name: "Encanto Magnético", description: "Gerberas rosadas con margaritas blancas en papel rosa con cinta. Alegre, femenino y muy fotogénico. El bouquet que pide que le tomen foto.", price: 87.50, image: "../assets/ramo32.webp" },
    { id: 33, category: "Rosas", tags: ["rosas","bouquets"], name: "Pacto Eterno", description: "Rosas rosadas frescas con gypsophila en papel rosa pastel. Clásico romántico que nunca pasa de moda. Gratitud, amor y admiración en un solo ramo.", price: 93.75, image: "../assets/ramo33.webp" },
    { id: 34, category: "Rosas", tags: ["rosas","bouquets"], name: "Amanecer Dorado", description: "Rosas durazno y crema con gypsophila en envoltura translúcida con lazo naranja. Calidez que se siente. Para nuevos comienzos y buenos deseos.", price: 87.50, image: "../assets/ramo34.webp" },
    { id: 35, category: "Bouquet", tags: ["bouquets","mixtas"], name: "Escudo de Primavera", description: "Rosas rosadas, hortensia verde, lisianthus blanco y manzanilla en papel crema con lazo. Como recibir un pedazo de primavera. Paz, ternura y armonía en tus manos.", price: 81.25, image: "../assets/ramo35.webp" },
    { id: 36, category: "Bouquet", tags: ["bouquets","mixtas"], name: "Poder Coreano", description: "Hortensia rosada, lisianthus y rosas rosadas en envoltura azul pastel y rosa. Estilo coreano que conquista. Delicadeza y dulzura en cada detalle.", price: 87.50, image: "../assets/ramo36.webp" },
    { id: 37, category: "Rosas", tags: ["rosas","bouquets"], name: "Alianza Perfecta", description: "12 rosas rojas y rosadas con baby breath y follaje en papel floral crema y rosa con lazo. El equilibrio perfecto entre pasión y ternura. Para momentos que importan.", price: 68.75, image: "../assets/ramo37.webp" },
    { id: 38, category: "Gerberas", tags: ["gerberas","bouquets"], name: "Carga Dorada", description: "8 gerberas amarillas y blancas con flores de relleno en papel crema con lazo. Alegría concentrada en un ramo. Luz y energía positiva para regalar.", price: 60.00, image: "../assets/ramo38.webp" },
    { id: 39, category: "Girasoles", tags: ["girasoles","bouquets"], name: "Artillería Solar", description: "3 girasoles y 2 gerberas amarillo-naranja con baby breath en papel crema y rosado. Optimismo que se contagia. El regalo que levanta el ánimo al instante.", price: 56.25, image: "../assets/ramo39.webp" },
    { id: 40, category: "Rosas", tags: ["rosas","bouquets"], name: "Reinado Dorado", description: "12 rosas amarillas con flores de relleno y follaje en papel crema y amarillo. Amistad, alegría y los mejores deseos en un ramo vibrante que ilumina.", price: 65.00, image: "../assets/ramo40.webp" },
    { id: 41, category: "Rosas", tags: ["rosas","bouquets"], name: "Código Amarillo", description: "7 rosas amarillas con baby breath y eucalipto en papel crema con lazo. Sencillo pero poderoso. Para decir te aprecio con un gesto lleno de luz.", price: 47.50, image: "../assets/ramo41.webp" },
    { id: 42, category: "Mixto Amarillo", tags: ["girasoles","bouquets","cumpleaños"], name: "Triunfo Dorado", description: "Tulipanes amarillos con margaritas y gerberas amarillas en papel crema con lazo amarillo. Felicidad pura. Ideal para graduaciones, logros o celebrar la vida.", price: 65.00, image: "../assets/ramo42.webp" },
    { id: 43, category: "Rosas", tags: ["rosas","bouquets"], name: "Esencia Clásica", description: "6 rosas amarillas con baby breath y follaje en papel blanco con lazo de yute. Rústico y moderno. Un gesto auténtico que vale más que cualquier mensaje.", price: 40.00, image: "../assets/ramo43.webp" },
    { id: 44, category: "Rosas", tags: ["rosas","bouquets"], name: "Revolución de Color", description: "6 rosas multicolor arcoíris con baby breath en papel elegante con lazo. Único y llamativo. El regalo que dice: tú no eres como las demás.", price: 47.50, image: "../assets/ramo44.webp" },
    { id: 45, category: "Bouquet", tags: ["bouquets","arreglos"], name: "Protección Dulce", description: "Claveles rosados con rosas spray y baby breath en papel rosado con lazo. Ternura y elegancia sin complicaciones. Un detalle dulce que llega al corazón.", price: 70.00, image: "../assets/ramo45.webp" },
    { id: 46, category: "Girasoles", tags: ["girasoles","bouquets"], name: "Fusión Radiante", description: "Girasol central con rosas rosadas, baby breath y eucalipto en papel suave con lazo. Calidez y ternura juntas. Como recibir un rayo de sol con un abrazo.", price: 56.25, image: "../assets/ramo46.webp" },
    { id: 47, category: "Gerberas", tags: ["gerberas","bouquets"], name: "Precision Rosa", description: "Una gerbera rosada con baby breath y eucalipto en papel suave. Pequeño pero significativo. Para esos gestos espontáneos que marcan la diferencia.", price: 27.50, image: "../assets/ramo47.webp" },
    { id: 48, category: "Gerberas", tags: ["gerberas","bouquets"], name: "Operación Blush", description: "Gerberas rosadas suaves con flores silvestres en papel pastel con lazo. Natural y elegante. Un detalle que habla de buen gusto y cariño sincero.", price: 37.50, image: "../assets/ramo48.webp" },
    { id: 49, category: "Bouquet", tags: ["bouquets","arreglos"], name: "Escudo Suave", description: "Claveles rosados con flores manzanilla y follaje en papel blanco translúcido. Sutil y delicado. Para cuando un gesto pequeño dice todo lo que necesitas.", price: 32.50, image: "../assets/ramo49.webp" },
    { id: 50, category: "Bouquet", tags: ["bouquets","arreglos"], name: "Fuego Clásico", description: "Claveles rojos con eucalipto en papel blanco minimalista y lazo rojo. Clásico y directo. Amor, admiración y pasión sin rodeos.", price: 35.00, image: "../assets/ramo50.webp" },
    { id: 51, category: "Rosas", tags: ["rosas","bouquets"], name: "Elegancia Letal", description: "Rosas rojas premium con eucalipto en envoltura blanca con lazo negro. Contraste moderno que impacta. Sofisticación y pasión en un solo gesto.", price: 43.75, image: "../assets/ramo51.webp" },
    { id: 52, category: "Rosas", tags: ["rosas","bouquets"], name: "Código Lavanda", description: "Rosas lavanda con gypsophila rosada en envoltura suave con lazo. Diferente, romántico y moderno. Para quien busca sorprender con algo que no es lo típico.", price: 42.50, image: "../assets/ramo52.webp" },
    { id: 53, category: "Rosas", tags: ["rosas","bouquets"], name: "Blindaje Azul", description: "Rosas blancas con gypsophila azul en envoltura blanca con lazos celestes. Paz y pureza que se siente. Perfecto para nacimientos, agradecimientos o momentos especiales.", price: 45.00, image: "../assets/ramo53.webp" },
    { id: 54, category: "Flores Mixtas", tags: ["mixtas","bouquets"], name: "Destello Blanco", description: "Gypsophila blanca con margaritas amarillas en envoltura blanca. Fresco, natural y lleno de luz. Un ramo que alegra sin necesidad de ser grande.", price: 41.25, image: "../assets/ramo54.webp" },
    { id: 55, category: "Bouquet", tags: ["bouquets","arreglos"], name: "Fortaleza Azul", description: "Hortensia azul en papel translúcido con lazo satinado. Minimalista y elegante. Una sola flor que dice todo con su presencia.", price: 47.50, image: "../assets/ramo55.webp" },
    { id: 56, category: "Bouquet", tags: ["bouquets","arreglos"], name: "Conquista Romántica", description: "Lily rosada con rosas blush y gypsophila en papel rosado con lazo. Femenino y romántico. El bouquet que hace suspirar.", price: 52.50, image: "../assets/ramo56.webp" },
    { id: 57, category: "Bouquet", tags: ["bouquets","arreglos"], name: "Potencia Lily", description: "Lilies rosadas premium en plena floración con follaje abundante. Impactante y generoso. Para cuando quieres que el regalo hable fuerte y claro.", price: 75.00, image: "../assets/ramo57.webp" }
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
