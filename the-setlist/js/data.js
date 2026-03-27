/* =============================================
   THE SETLIST — Datos simulados (₡ Colones CR)
   ============================================= */

const SERVICES = [
  // Catering
  { id: 1,  category: 'Catering',    name: 'Catering Premium',       desc: 'Menú de 3 tiempos con chef privado, vajilla fina y servicio de meseros.', price: 450000, active: true },
  { id: 2,  category: 'Catering',    name: 'Barra de Cócteles',      desc: 'Bartender profesional con carta de cócteles clásicos y de autor.',         price: 280000, active: true },
  { id: 3,  category: 'Catering',    name: 'Estación de Café',        desc: 'Barista especializado con granos de origen y opciones frías.',              price: 120000, active: true },
  // Decoración
  { id: 4,  category: 'Decoración',  name: 'Decoración Neón',         desc: 'Letreros de neón personalizados, luces LED y ambientación cromática.',      price: 320000, active: true },
  { id: 5,  category: 'Decoración',  name: 'Floral Luxury',           desc: 'Arreglos florales de temporada con flores importadas y centros de mesa.',   price: 260000, active: true },
  { id: 6,  category: 'Decoración',  name: 'Globos & Backdrop',       desc: 'Instalación de arcos de globos, telones y props para fotos.',               price: 150000, active: false },
  // Música
  { id: 7,  category: 'Música',      name: 'DJ Set Profesional',      desc: 'DJ con equipo de sonido premium, luces y 5 horas de música en vivo.',       price: 500000, active: true },
  { id: 8,  category: 'Música',      name: 'Cuarteto de Cuerdas',     desc: 'Cuarteto clásico para ceremonias y cócteles de bienvenida.',                price: 380000, active: true },
  { id: 9,  category: 'Música',      name: 'Banda de Jazz',           desc: 'Trío de jazz en vivo para ambientar cenas y eventos corporativos.',         price: 420000, active: true },
  // Postres
  { id: 10, category: 'Postres',     name: 'Pastel Personalizado',    desc: 'Pastel de diseño exclusivo de hasta 5 pisos con decoración temática.',      price: 180000, active: true },
  { id: 11, category: 'Postres',     name: 'Mesa de Dulces',          desc: 'Candy bar con 15 variedades de dulces, chocolates y macarons.',             price: 220000, active: true },
  { id: 12, category: 'Postres',     name: 'Crepes en Vivo',          desc: 'Estación de crepes dulces y salados preparados al momento.',                price: 160000, active: false },
  // Photobooth
  { id: 13, category: 'Photobooth',  name: 'Photobooth 360°',         desc: 'Cabina 360 con plataforma giratoria, efectos de video y entrega digital.',  price: 350000, active: true },
  { id: 14, category: 'Photobooth',  name: 'Cabina Clásica',          desc: 'Photobooth con impresión instantánea, props y fondo personalizado.',        price: 200000, active: true },
  { id: 15, category: 'Photobooth',  name: 'Fotógrafo Profesional',   desc: 'Cobertura completa del evento con edición y entrega en galería digital.',   price: 600000, active: true },
];

// Imágenes de stock (Unsplash, libres de uso)
const SERVICE_IMAGES = {
  1:  'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80',
  2:  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80',
  3:  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
  4:  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
  5:  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
  6:  'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
  7:  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80',
  8:  'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80',
  9:  'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80',
  10: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
  11: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  12: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&q=80',
  13: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  14: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80',
  15: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80',
};

// Iconos SVG por categoría (Heroicons outline)
const CATEGORY_ICONS = {
  'Catering':   `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.012 0-1.867.668-2.15 1.586m2.15-1.586c1.012 0 1.867.668 2.15 1.586M12 8.25a2.25 2.25 0 0 0-2.25 2.25v.75m4.5-3v.75A2.25 2.25 0 0 1 12 11.25m0 0H9.75m2.25 0h2.25m-2.25 0v6.75m0-6.75a2.25 2.25 0 0 0-2.25 2.25v4.5A2.25 2.25 0 0 0 12 18a2.25 2.25 0 0 0 2.25-2.25v-4.5A2.25 2.25 0 0 0 12 11.25Z"/></svg>`,
  'Decoración': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"/></svg>`,
  'Música':     `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"/></svg>`,
  'Postres':    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.012 0-1.867.668-2.15 1.586m2.15-1.586c1.012 0 1.867.668 2.15 1.586M12 8.25a2.25 2.25 0 0 0-2.25 2.25v.75m4.5-3v.75A2.25 2.25 0 0 1 12 11.25m0 0H9.75m2.25 0h2.25M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18"/></svg>`,
  'Photobooth': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"/></svg>`,
};

const PACKAGES = [
  {
    id: 'pkg1',
    name: 'Paquete Cumpleaños',
    desc: 'Todo lo que necesitas para una celebración de cumpleaños memorable.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.012 0-1.867.668-2.15 1.586m2.15-1.586c1.012 0 1.867.668 2.15 1.586M12 8.25a2.25 2.25 0 0 0-2.25 2.25v.75m4.5-3v.75A2.25 2.25 0 0 1 12 11.25m0 0H9.75m2.25 0h2.25M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18"/></svg>`,
    serviceIds: [1, 7, 10, 11, 14],
    discount: 0.10,
  },
  {
    id: 'pkg2',
    name: 'Paquete Quinceañera',
    desc: 'Una noche mágica e inolvidable para celebrar los 15 años.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/></svg>`,
    serviceIds: [1, 2, 8, 5, 10, 13, 15],
    discount: 0.15,
  },
  {
    id: 'pkg3',
    name: 'Paquete Boda',
    desc: 'El día más especial merece la experiencia más completa.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/></svg>`,
    serviceIds: [1, 2, 3, 8, 5, 10, 11, 15],
    discount: 0.20,
  },
  {
    id: 'pkg4',
    name: 'Paquete Corporativo',
    desc: 'Profesionalismo y elegancia para eventos empresariales.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0"/></svg>`,
    serviceIds: [1, 2, 7, 4, 13],
    discount: 0.12,
  },
  {
    id: 'pkg5',
    name: 'Paquete Graduación',
    desc: 'Celebra el logro con estilo y diversión garantizada.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/></svg>`,
    serviceIds: [1, 7, 11, 14, 4],
    discount: 0.10,
  },
];

// Credenciales admin (simuladas)
const ADMIN_CREDENTIALS = { user: 'admin@thesetlist.com', pass: 'setlist2024' };

// Persistencia en localStorage
function saveServices(list) { localStorage.setItem('ts_services', JSON.stringify(list)); }
function loadServices() {
  const raw = localStorage.getItem('ts_services');
  return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(SERVICES));
}
function saveOrders(list) { localStorage.setItem('ts_orders', JSON.stringify(list)); }
function loadOrders() {
  const raw = localStorage.getItem('ts_orders');
  return raw ? JSON.parse(raw) : [];
}

// Formato colones costarricenses
function formatCurrency(n) {
  return '₡' + Number(n).toLocaleString('es-CR', { minimumFractionDigits: 0 });
}
