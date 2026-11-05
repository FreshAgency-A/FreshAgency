import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Check,
  ShieldCheck,
  Zap,
  Smartphone,
  ShoppingBag,
  Clock,
  ChevronRight,
  Star,
  Lock,
  TrendingUp,
  Award,
  MapPin,
  RefreshCw,
  Layers,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  Calendar,
  Wrench,
  Package
} from 'lucide-react';

const STORES = [
  {
    id: 'poma',
    brand: 'LA POMA LAB',
    domain: 'lapomalab.com',
    category: 'Apple & Servicio Técnico',
    badge: 'GARANTÍA 24 MESES · TALLER CERTIFICADO',
    title: 'iPhone 15 Pro · Titanio & Taller Express',
    rating: '4.9',
    reviews: '312 reseñas verificadas',
    colors: [
      { id: 'natural', name: 'Titanio Natural', hex: '#a8a29e' },
      { id: 'blue', name: 'Titanio Azul', hex: '#38bdf8' },
      { id: 'black', name: 'Titanio Negro', hex: '#27272a' }
    ],
    optionsLabel: 'Selecciona modalidad (Stock o Reparación en el acto):',
    options: [
      {
        id: '128gb',
        name: 'Comprar iPhone 15 Pro · 128GB (Salud Batería 100%)',
        tag: 'Stock inmediato',
        price: 749,
        oldPrice: 899,
        isRepair: false
      },
      {
        id: '256gb',
        name: 'Comprar iPhone 15 Pro · 256GB (Salud Batería 100%)',
        tag: 'Más vendido',
        price: 829,
        oldPrice: 979,
        isRepair: false
      },
      {
        id: 'repair',
        name: 'Reservar Taller · Cambio Pantalla Original OLED (60 min)',
        tag: 'Cita Express',
        price: 119,
        oldPrice: 149,
        isRepair: true
      }
    ],
    slots: ['Hoy · 17:30h', 'Mañana · 11:00h', 'Mañana · 16:30h']
  },
  {
    id: 'vertice',
    brand: 'VÉRTICE STUDIO',
    domain: 'verticestudio.com',
    category: 'Estudio Aromático & Lifestyle',
    badge: 'CERA DE SOJA 100% ORGÁNICA · HECHO EN VALENCIA',
    title: 'N°04 Santal & Cedro Ahumado',
    rating: '4.9',
    reviews: '184 reseñas verificadas',
    optionsLabel: 'Selecciona formato y duración:',
    options: [
      {
        id: 'std',
        name: 'Formato Estándar · 250g (45h de combustión)',
        tag: 'Clásico',
        price: 38,
        oldPrice: 45,
        flames: 1,
        isPack: false
      },
      {
        id: 'xl',
        name: 'Formato XL Estudio · 500g Doble Mecha (90h)',
        tag: 'Best Seller',
        price: 64,
        oldPrice: 78,
        flames: 2,
        isPack: false
      },
      {
        id: 'pack',
        name: 'Pack Ritual Completo · 2x250g + Cortamechas Mate',
        tag: 'Ahorra 20%',
        price: 72,
        oldPrice: 90,
        flames: 2,
        isPack: true
      }
    ]
  },
  {
    id: 'nomada',
    brand: 'NÓMADA CLUB',
    domain: 'nomadaclub.es',
    category: 'Moda & Heavyweight Streetwear',
    badge: 'ALGODÓN PEINADO 500 GSM · DROP LIMITADO',
    title: 'Heavy Boxy Hoodie · Carbon Edition',
    rating: '5.0',
    reviews: '429 reseñas verificadas',
    sizes: ['S', 'M', 'L', 'XL'],
    optionsLabel: 'Selecciona pack o edición:',
    options: [
      {
        id: 'single',
        name: 'Hoodie Boxy 500gsm · Edición Individual',
        tag: 'Drop 04',
        price: 68,
        oldPrice: 85
      },
      {
        id: 'duo',
        name: 'Pack Dúo · Hoodie 500gsm + Camiseta 280gsm',
        tag: 'Más popular',
        price: 94,
        oldPrice: 120
      },
      {
        id: 'full',
        name: 'Full Set Nómada · Hoodie + Pantalón + Gorra',
        tag: 'Pack Completo',
        price: 139,
        oldPrice: 175
      }
    ]
  }
];

const BUILD_STEPS = [
  {
    id: 0,
    num: '01',
    code: 'STRUCTURE',
    desc: 'Wireframe, header, grid, navegación.'
  },
  {
    id: 1,
    num: '02',
    code: 'DESIGN',
    desc: 'Colores, tipografía, branding.'
  },
  {
    id: 2,
    num: '03',
    code: 'PRODUCT',
    desc: 'Producto, galería, precio, variantes, CTA.'
  },
  {
    id: 3,
    num: '04',
    code: 'CONVERSION',
    desc: 'Reviews, trust, upsells, UX.'
  },
  {
    id: 4,
    num: '05',
    code: 'DATA',
    desc: 'Pixel, analytics, tracking, Klaviyo.'
  },
  {
    id: 5,
    num: '06',
    code: 'READY',
    desc: 'La tienda completa. Preparada para vender.'
  }
];

const PROCESS_TIMELINE = [
  { num: '01', title: 'Cuéntanos tu proyecto' },
  { num: '02', title: 'Validamos encaje' },
  { num: '03', title: 'Construimos' },
  { num: '04', title: 'Revisamos' },
  { num: '05', title: 'Te enseñamos' },
  { num: '06', title: 'Lanzamos' }
];

export default function App() {
  // Live iPhone notifications state
  const [salesCount, setSalesCount] = useState(14);
  const [revenueToday, setRevenueToday] = useState(1840);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      store: 'LA POMA LAB',
      time: 'Ahora mismo',
      text: 'Nuevo pedido #1084 · iPhone 15 Pro 256GB · 829,00 €'
    },
    {
      id: 2,
      store: 'LA POMA LAB · TALLER',
      time: 'Hace 4 min',
      text: 'Reserva confirmada · Pantalla OLED iPhone 14 · 119,00 €'
    },
    {
      id: 3,
      store: 'VÉRTICE STUDIO',
      time: 'Hace 12 min',
      text: 'Nuevo pedido #412 · Pack Ritual 2x250g · 72,00 €'
    }
  ]);

  // Interactive Showcase state
  const [storeMode, setStoreMode] = useState('fresh'); // 'fresh' | 'old'
  const [storeIndex, setStoreIndex] = useState(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSlot, setSelectedSlot] = useState('Hoy · 17:30h');
  const [selectedSize, setSelectedSize] = useState('L');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // De la idea a la tienda state
  const [activeBuildStep, setActiveBuildStep] = useState(5);

  // ROI Calculator state
  const [ticketPromedio, setTicketPromedio] = useState(120);

  const currentStore = STORES[storeIndex];
  const currentOption = currentStore.options[selectedOptionIdx] || currentStore.options[0];

  const handleSimulateSale = () => {
    const samples = [
      { store: 'LA POMA LAB', amount: 749, msg: 'Nuevo pedido · iPhone 15 Pro 128GB · 749,00 €' },
      { store: 'LA POMA LAB · TALLER', amount: 119, msg: 'Cita pagada · Cambio Pantalla OLED · 119,00 €' },
      { store: 'VÉRTICE STUDIO', amount: 64, msg: 'Nuevo pedido · Vela Formato XL 500g · 64,00 €' },
      { store: 'NÓMADA CLUB', amount: 94, msg: 'Nuevo pedido · Pack Dúo Heavyweight · 94,00 €' }
    ];
    const pick = samples[Math.floor(Math.random() * samples.length)];
    setSalesCount((c) => c + 1);
    setRevenueToday((r) => r + pick.amount);
    setNotifications((prev) => [
      {
        id: Date.now(),
        store: pick.store,
        time: 'Justo ahora',
        text: pick.msg
      },
      ...prev.slice(0, 2)
    ]);
  };

  const handleNextStore = () => {
    setStoreIndex((prev) => (prev + 1) % STORES.length);
    setSelectedOptionIdx(0);
    setCheckoutSuccess(false);
  };

  const handleSelectStore = (idx) => {
    setStoreIndex(idx);
    setSelectedOptionIdx(0);
    setCheckoutSuccess(false);
  };

  const handleTriggerApplePay = () => {
    setCheckoutSuccess(true);
    setTimeout(() => setCheckoutSuccess(false), 2600);
  };

  const salesNeeded = Math.max(1, Math.ceil(997 / ticketPromedio));

  return (
    <div className="min-h-screen bg-[#05070b] text-zinc-100 selection:bg-sky-400 selection:text-black overflow-x-hidden">
      {/* Ambient Ice Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-cyan-400/5 rounded-full blur-[140px]" />
      </div>

      {/* NAVBAR — Clean, wide spacing, no overlapping */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#05070b]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          {/* Left: Brand Logo + Likin Badge */}
          <div className="flex items-center gap-5 sm:gap-8 min-w-0">
            <a href="#" className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-white shrink-0">
              FRESH<span className="text-sky-400">.</span>
            </a>

            <a
              href="https://likinagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/[0.06] hover:bg-sky-400/[0.12] transition-all text-xs text-zinc-200 whitespace-nowrap shrink-0 group"
            >
              <Award className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>
                Formado en la metodología de{' '}
                <strong className="font-semibold text-white underline decoration-sky-400/60 underline-offset-2">
                  Likin Agency
                </strong>
              </span>
              <ExternalLink className="w-3 h-3 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>
          </div>

          {/* Right: Nav items */}
          <nav className="flex items-center gap-5 sm:gap-8 shrink-0">
            <a
              href="#escaparate"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-300 hover:text-sky-400 transition-colors whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Toca y Prueba</span>
            </a>
            <a
              href="#proceso"
              className="hidden sm:inline-block text-sm font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap"
            >
              Proceso 7 Días
            </a>
            <a
              href="#inversion"
              className="px-4 sm:px-5 py-2.5 rounded-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(56,189,248,0.35)] whitespace-nowrap"
            >
              Crear mi eCommerce
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-300 text-xs font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                READY IN ≤ 7 DAYS · SHOPIFY EXPERT
              </span>

              <a
                href="https://likinagency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.03] text-xs text-zinc-300"
              >
                <Award className="w-3.5 h-3.5 text-sky-400" />
                <span>Estándar Likin Agency ↗</span>
              </a>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.09] py-1">
              Creamos tu eCommerce.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400 pb-2">
                Tú lo escalas.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              No diseñamos simples páginas web. Construimos infraestructuras <strong className="text-zinc-200">Shopify</strong> preparadas para vender productos físicos y reservar servicios en piloto automático desde el primer día.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <a
                href="#escaparate"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-base transition-all shadow-[0_0_35px_rgba(56,189,248,0.4)]"
              >
                <span>Probar Demo Interactiva</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#inversion"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white font-semibold text-base transition-all"
              >
                <span>Ver Paquete BUILD · 997 €</span>
              </a>
            </div>

            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10 max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">≤ 7 días</p>
                <p className="text-xs text-zinc-400 mt-0.5">Entrega llave en mano</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-sky-400">1-Clic</p>
                <p className="text-xs text-zinc-400 mt-0.5">Apple Pay & Klarna nativo</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">100%</p>
                <p className="text-xs text-zinc-400 mt-0.5">Autogestionable por ti</p>
              </div>
            </div>
          </div>

          {/* Right Column: Live iPhone Lockscreen Simulator */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-3xl border border-white/15 bg-gradient-to-b from-zinc-900/90 to-[#070a10] p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
                  <span className="text-xs font-mono uppercase tracking-wider text-sky-300">
                    TU MÓVIL CON SHOPIFY ACTIVO
                  </span>
                </div>
                <button
                  onClick={handleSimulateSale}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs transition-all cursor-pointer active:scale-95 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                >
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>¡Simular Venta!</span>
                </button>
              </div>

              {/* Revenue Counter */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-3.5">
                  <span className="text-[11px] font-mono uppercase text-zinc-400">Facturación Hoy</span>
                  <p className="text-2xl font-extrabold text-white mt-1">
                    {revenueToday.toLocaleString('es-ES')} €
                  </p>
                </div>
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-3.5">
                  <span className="text-[11px] font-mono uppercase text-zinc-400">Pedidos / Citas</span>
                  <p className="text-2xl font-extrabold text-sky-400 mt-1">{salesCount} completados</p>
                </div>
              </div>

              {/* Notification Stack */}
              <div className="space-y-2.5">
                {notifications.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`rounded-2xl p-3.5 border transition-all ${
                      idx === 0
                        ? 'bg-sky-400/[0.09] border-sky-400/40 shadow-[0_0_25px_rgba(56,189,248,0.12)]'
                        : 'bg-white/[0.03] border-white/[0.07] opacity-80'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-sky-300 flex items-center gap-1.5">
                        <ShoppingBag className="w-3.5 h-3.5" />
                        {item.store}
                      </span>
                      <span className="text-zinc-500 font-mono text-[11px]">{item.time}</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-zinc-100">{item.text}</p>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-center text-zinc-500 mt-4">
                Toca <strong className="text-zinc-300">«¡Simular Venta!»</strong> para ver cómo entran los pagos y reservas en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE STORE SHOWCASE */}
      <section id="escaparate" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
              DEMO INTERACTIVA EN VIVO
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2">
              Toca y prueba cómo compran tus clientes.
            </h2>
          </div>

          {/* Switch Old Web vs Fresh Store */}
          <div className="inline-flex rounded-full p-1 bg-zinc-900 border border-white/10 self-start">
            <button
              onClick={() => setStoreMode('old')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                storeMode === 'old'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ❌ Web Tradicional (No vende)
            </button>
            <button
              onClick={() => setStoreMode('fresh')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                storeMode === 'fresh'
                  ? 'bg-sky-400 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.35)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ⚡ Tienda FRESH (Shopify)
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            {STORES.map((st, idx) => (
              <button
                key={st.id}
                onClick={() => handleSelectStore(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  storeIndex === idx
                    ? 'bg-sky-400/15 border-sky-400 text-sky-300'
                    : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white'
                }`}
              >
                {st.brand} · <span className="font-normal opacity-80">{st.category}</span>
              </button>
            ))}
          </div>

          <button
            onClick={handleNextStore}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-sky-400/20 border border-white/15 hover:border-sky-400/50 text-xs font-bold text-sky-300 transition-all cursor-pointer"
          >
            <span>Siguiente Tienda</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Showcase Container */}
        {storeMode === 'old' ? (
          <div className="rounded-3xl border border-rose-500/30 bg-zinc-950 p-8 sm:p-12 text-center space-y-5">
            <p className="text-xs font-mono uppercase tracking-widest text-rose-400">
              EL PROBLEMA DEL 90% DE LOS NEGOCIOS LOCALES
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white max-w-2xl mx-auto">
              «Rellena este formulario y te responderemos en 24-48 horas...»
            </h3>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
              Cuando un cliente quiere comprar un iPhone, reservar una reparación urgente o pedir un regalo, no quiere esperar un correo ni llamar por teléfono. Si no puede pagar o reservar en 15 segundos desde el móvil, se va a la competencia.
            </p>
            <button
              onClick={() => setStoreMode('fresh')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-400 text-slate-950 font-bold text-sm cursor-pointer"
            >
              <span>Ver cómo lo resuelve FRESH en 1 clic</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#0b101b] to-[#070a10] overflow-hidden shadow-2xl">
            {/* Browser Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-zinc-700" />
                <span className="w-3 h-3 rounded-full bg-zinc-700" />
                <span className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
              <div className="px-4 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-sky-400" />
                <span>{currentStore.domain}</span>
              </div>
              <div className="text-xs font-bold tracking-wider uppercase text-zinc-400">
                {currentStore.brand}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 relative">
              {/* Left Product Minimalist Illustration */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col items-center justify-center bg-gradient-to-b from-sky-400/[0.05] to-transparent border-b lg:border-b-0 lg:border-r border-white/10 relative">
                <span className="text-[11px] font-mono uppercase tracking-widest text-sky-300 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/25 mb-6 text-center">
                  {currentStore.badge}
                </span>

                {/* Minimalist SVG per store */}
                {currentStore.id === 'poma' && (
                  <div className="my-4 flex flex-col items-center">
                    <div
                      className="w-44 h-80 rounded-[36px] border-4 p-3 flex flex-col justify-between shadow-2xl transition-colors duration-300 relative"
                      style={{
                        borderColor:
                          selectedColor === 'blue'
                            ? '#38bdf8'
                            : selectedColor === 'natural'
                            ? '#a8a29e'
                            : '#52525b',
                        background:
                          'linear-gradient(160deg, rgba(30,41,59,0.95) 0%, rgba(9,13,22,0.98) 100%)'
                      }}
                    >
                      {/* Dynamic Island */}
                      <div className="w-16 h-4 rounded-full bg-black mx-auto flex items-center justify-end px-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400/70" />
                      </div>
                      {/* Screen Info */}
                      <div className="text-center space-y-2 my-auto">
                        <Smartphone className="w-10 h-10 text-sky-400 mx-auto" />
                        <p className="text-xs font-bold text-white tracking-tight">LA POMA LAB</p>
                        <p className="text-[11px] text-sky-300 font-mono">
                          {currentOption.isRepair ? 'TALLER EXPRESS 60m' : 'SALUD BATERÍA 100%'}
                        </p>
                      </div>
                      <div className="w-20 h-1 rounded-full bg-white/30 mx-auto" />
                    </div>

                    {/* Finish selector */}
                    <div className="flex items-center gap-2.5 mt-5">
                      {currentStore.colors.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setSelectedColor(c.id)}
                          className={`px-3 py-1 rounded-full text-xs border transition-all cursor-pointer flex items-center gap-1.5 ${
                            selectedColor === c.id
                              ? 'border-sky-400 bg-sky-400/15 text-white font-semibold'
                              : 'border-white/10 bg-white/[0.02] text-zinc-400'
                          }`}
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span>{c.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStore.id === 'vertice' && (
                  <div className="my-6 flex flex-col items-center">
                    <div className="relative flex items-end justify-center gap-3 h-64">
                      {/* Main Amber Jar */}
                      <div className="relative flex flex-col items-center">
                        <div className="flex gap-3 mb-1">
                          <div className="w-3 h-6 rounded-full bg-gradient-to-t from-amber-500 via-amber-300 to-white animate-pulse shadow-[0_0_20px_#f59e0b]" />
                          {currentOption.flames === 2 && (
                            <div className="w-3 h-6 rounded-full bg-gradient-to-t from-amber-500 via-amber-300 to-white animate-pulse shadow-[0_0_20px_#f59e0b]" />
                          )}
                        </div>
                        <div className="w-36 h-44 rounded-b-2xl rounded-t-md border-2 border-amber-500/40 bg-gradient-to-b from-amber-900/50 to-stone-950 p-4 flex flex-col justify-center items-center shadow-2xl">
                          <div className="w-full py-3 px-2 bg-[#f5f2eb] text-stone-900 rounded text-center shadow">
                            <p className="text-[10px] font-mono tracking-widest uppercase">VÉRTICE</p>
                            <p className="text-xs font-extrabold mt-0.5">N°04 SANTAL</p>
                            <p className="text-[9px] text-stone-600 mt-0.5">VALENCIA · SOJA ORGÁNICA</p>
                          </div>
                        </div>
                      </div>

                      {/* Second Jar if Pack */}
                      {currentOption.isPack && (
                        <div className="w-24 h-32 rounded-b-xl rounded-t border border-amber-500/30 bg-gradient-to-b from-amber-950/60 to-stone-950 p-2 flex items-center justify-center">
                          <div className="w-full py-2 bg-[#f5f2eb] text-stone-900 rounded text-center">
                            <p className="text-[8px] font-bold">PACK RITUAL</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {currentStore.id === 'nomada' && (
                  <div className="my-4 flex flex-col items-center">
                    {/* Minimalist Boxy Hoodie SVG */}
                    <svg viewBox="0 0 220 200" className="w-56 h-52 drop-shadow-2xl">
                      <path
                        d="M70 30 Q110 15 150 30 L195 65 L175 100 L155 85 L155 180 L65 180 L65 85 L45 100 L25 65 Z"
                        fill="#18181b"
                        stroke="#38bdf8"
                        strokeWidth="2.5"
                      />
                      <path d="M85 30 Q110 55 135 30" fill="none" stroke="#52525b" strokeWidth="2" />
                      <rect x="82" y="125" width="56" height="32" rx="6" fill="#27272a" stroke="#3f3f46" />
                      <text
                        x="110"
                        y="92"
                        textAnchor="middle"
                        fill="#f4f4f5"
                        fontSize="11"
                        fontWeight="bold"
                        letterSpacing="2"
                      >
                        NÓMADA · {selectedSize}
                      </text>
                    </svg>

                    {/* Size buttons */}
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-xs text-zinc-400 mr-1">Talla:</span>
                      {currentStore.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`w-9 h-9 rounded-xl font-bold text-xs border transition-all cursor-pointer ${
                            selectedSize === sz
                              ? 'bg-sky-400 text-slate-950 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                              : 'bg-white/[0.03] border-white/10 text-zinc-300 hover:border-white/30'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Interactive Product Configurator */}
              <div className="lg:col-span-7 p-7 sm:p-10 lg:pr-20 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-sky-400">
                      {currentStore.brand}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-bold text-white">{currentStore.rating}</span>
                      <span className="text-zinc-400">({currentStore.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5">
                    {currentStore.title}
                  </h3>

                  {/* Dynamic Price Display */}
                  <div className="flex items-baseline gap-3 mt-4">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      {currentOption.price} €
                    </span>
                    <span className="text-lg text-zinc-500 line-through">
                      {currentOption.oldPrice} €
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-300 text-xs font-bold">
                      Ahorras {currentOption.oldPrice - currentOption.price} €
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    o 3 plazos sin intereses de{' '}
                    <strong className="text-zinc-200">
                      {(currentOption.price / 3).toFixed(2)} €
                    </strong>{' '}
                    con Klarna
                  </p>
                </div>

                {/* Option Selector */}
                <div className="space-y-2.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {currentStore.optionsLabel}
                  </label>
                  {currentStore.options.map((opt, idx) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedOptionIdx(idx)}
                      className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        selectedOptionIdx === idx
                          ? 'bg-sky-400/10 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.15)]'
                          : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            selectedOptionIdx === idx
                              ? 'border-sky-400 bg-sky-400 text-slate-950'
                              : 'border-zinc-500'
                          }`}
                        >
                          {selectedOptionIdx === idx && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-white truncate">
                          {opt.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-white/[0.06] text-[10px] font-mono text-sky-300">
                          {opt.tag}
                        </span>
                        <span className="text-sm font-extrabold text-white">{opt.price} €</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Extra Slot Selector if Repair is chosen on LA POMA LAB */}
                {currentStore.id === 'poma' && currentOption.isRepair && (
                  <div className="p-3.5 rounded-2xl bg-sky-400/[0.07] border border-sky-400/30 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-sky-300">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Elige hora de entrada en taller (Torrent):</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {currentStore.slots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            selectedSlot === slot
                              ? 'bg-sky-400 text-slate-950 border-sky-400'
                              : 'bg-black/40 border-white/10 text-zinc-300'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 1-Click Buy CTA */}
                <div className="pt-1">
                  <button
                    onClick={handleTriggerApplePay}
                    className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-zinc-100 text-black font-extrabold text-base transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer active:scale-[0.99]"
                  >
                    {checkoutSuccess ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>
                          ¡Pedido Procesado en 1 Clic! ({currentOption.price} €)
                        </span>
                      </>
                    ) : (
                      <>
                        <span>
                          {currentOption.isRepair
                            ? `Reservar Cita con Pay · ${currentOption.price} €`
                            : `Comprar en 1 clic con Pay · ${currentOption.price} €`}
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* Right Edge Vertical Arrow Button */}
                <button
                  onClick={handleNextStore}
                  title="Ver siguiente ejemplo de tienda"
                  className="hidden lg:flex absolute right-0 top-0 bottom-0 w-14 border-l border-white/10 bg-white/[0.02] hover:bg-sky-400/15 transition-all flex-col items-center justify-center gap-3 group cursor-pointer"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 group-hover:text-sky-300 [writing-mode:vertical-rl] rotate-180">
                    Siguiente Tienda
                  </span>
                  <div className="w-8 h-8 rounded-full bg-sky-400/20 border border-sky-400/40 flex items-center justify-center text-sky-300 group-hover:translate-x-0.5 transition-transform">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* SECTION: DE LA IDEA A LA TIENDA (Interactive 01 STRUCTURE -> 06 READY) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-24 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 01 to 06 Interactive Steps */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                FROM IDEA TO ECOMMERCE
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 leading-tight">
                De la idea
                <span className="block text-zinc-500">a la tienda.</span>
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {BUILD_STEPS.map((st, idx) => {
                const isActive = activeBuildStep === idx;
                return (
                  <button
                    key={st.num}
                    onClick={() => setActiveBuildStep(idx)}
                    className={`w-full py-3.5 px-3 text-left transition-all flex items-start gap-5 cursor-pointer ${
                      isActive ? 'bg-sky-400/[0.07]' : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <span
                      className={`text-xs font-mono mt-0.5 ${
                        isActive ? 'text-sky-400 font-bold' : 'text-zinc-500'
                      }`}
                    >
                      {st.num}
                    </span>
                    <div>
                      <p
                        className={`text-xs font-mono uppercase tracking-wider ${
                          isActive ? 'text-white font-bold' : 'text-zinc-300'
                        }`}
                      >
                        {st.code}
                      </p>
                      <p className="text-xs text-zinc-400 mt-0.5">{st.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="text-[11px] text-zinc-500">
              Haz clic en cada fase (01 a 06) para inspeccionar cómo ensamblamos la arquitectura de conversión de tu tienda.
            </p>
          </div>

          {/* Right Column: Live Evolving Store Preview + Floating Conversion/Data Pills */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Left Floating Badges (CONVERSION) */}
            <div className="hidden xl:flex flex-col gap-2.5 absolute -left-8 top-1/4 z-20">
              {['REVIEWS', 'TRUST BADGES', 'UPSELL', 'ENVÍO GRATIS'].map((pill) => (
                <div
                  key={pill}
                  className={`px-3 py-1.5 rounded-lg border text-[10px] font-mono uppercase tracking-wider transition-all ${
                    activeBuildStep >= 3
                      ? 'bg-[#070b12]/95 border-sky-400/50 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                      : 'bg-zinc-900/60 border-white/10 text-zinc-600'
                  }`}
                >
                  {pill}
                </div>
              ))}
            </div>

            {/* Right Floating Badges (DATA) */}
            <div className="hidden xl:flex flex-col gap-2.5 absolute -right-6 bottom-1/4 z-20">
              {['META PIXEL', 'EVENTOS DE COMPRA', 'KLAVIYO'].map((pill) => (
                <div
                  key={pill}
                  className={`px-3 py-1.5 rounded-lg border text-[10px] font-mono uppercase tracking-wider transition-all ${
                    activeBuildStep >= 4
                      ? 'bg-[#070b12]/95 border-sky-400/50 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                      : 'bg-zinc-900/60 border-white/10 text-zinc-600'
                  }`}
                >
                  {pill}
                </div>
              ))}
            </div>

            {/* Browser Window */}
            <div className="w-full max-w-xl rounded-2xl border border-white/15 bg-[#0c1017] overflow-hidden shadow-2xl relative">
              {/* Top browser bar */}
              <div className="px-4 py-2.5 bg-zinc-900 flex items-center justify-between border-b border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400">VERTICESTUDIO.COM</span>
                <span className="text-[10px] font-mono text-sky-400">
                  PASO {BUILD_STEPS[activeBuildStep].num}
                </span>
              </div>

              {/* Announcement Bar */}
              <div
                className={`py-1.5 text-center text-[10px] font-medium transition-colors ${
                  activeBuildStep === 0
                    ? 'bg-zinc-800 text-zinc-400'
                    : 'bg-sky-950/90 text-sky-200 border-b border-sky-400/20'
                }`}
              >
                Envío Express 24h Gratis en pedidos +45€ · Cera 100% Soja Orgánica
              </div>

              {/* Dynamic Viewport that scrolls based on step */}
              <div className="relative h-[410px] overflow-hidden bg-white text-zinc-900">
                <div
                  className="transition-transform duration-700 ease-in-out"
                  style={{
                    transform:
                      activeBuildStep === 2 || activeBuildStep === 3
                        ? 'translateY(-135px)'
                        : 'translateY(0px)'
                  }}
                >
                  {/* Hero Banner inside Store */}
                  <div
                    className={`h-48 p-6 flex flex-col justify-center items-center text-center relative transition-all ${
                      activeBuildStep === 0
                        ? 'bg-zinc-200 text-zinc-500 border-b border-dashed border-zinc-400'
                        : 'bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white'
                    }`}
                  >
                    <p className="text-[10px] uppercase tracking-widest opacity-80">
                      VÉRTICE STUDIO · COLECCIÓN BOTÁNICA
                    </p>
                    <h4 className="text-xl font-bold mt-1">
                      {activeBuildStep === 0
                        ? '[ WIREFRAME HERO BANNER ]'
                        : 'Luz y aroma que transforman tu espacio'}
                    </h4>
                    <span className="mt-3 px-4 py-1.5 rounded-full text-[11px] font-bold bg-white text-stone-900">
                      Explorar Colección
                    </span>
                  </div>

                  {/* Product Grid inside Store */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-700">
                        Más vendidos
                      </p>
                      {activeBuildStep >= 3 && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                          ★ 4.9/5 (184 opiniones)
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { name: 'Santal & Cedro', price: '38,00 €', tone: 'from-amber-200 to-stone-300' },
                        { name: 'Lavanda & Salvia', price: '38,00 €', tone: 'from-stone-300 to-amber-100' },
                        { name: 'Higo & Vetiver', price: '42,00 €', tone: 'from-amber-300 to-stone-200' },
                        { name: 'Pack Ritual Dúo', price: '72,00 €', tone: 'from-stone-800 to-amber-900' }
                      ].map((prod, i) => (
                        <div key={i} className="rounded-lg border border-stone-200 p-2 text-left">
                          <div
                            className={`h-24 rounded bg-gradient-to-br ${
                              activeBuildStep === 0 ? 'from-zinc-200 to-zinc-300' : prod.tone
                            } flex items-center justify-center mb-2`}
                          >
                            <div className="w-8 h-10 rounded bg-white/80 shadow-sm" />
                          </div>
                          <p className="text-[10px] font-bold text-stone-800 truncate">{prod.name}</p>
                          <p className="text-[10px] text-stone-500">{prod.price}</p>
                          <div className="mt-1.5 py-1 rounded bg-stone-900 text-white text-center text-[9px] font-bold">
                            Añadir
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Shopify Sale Notification on Step 06 READY */}
                {activeBuildStep === 5 && (
                  <div className="absolute top-16 right-4 z-30 w-64 rounded-xl bg-[#0b101b]/95 border border-sky-400/50 p-3 text-white shadow-2xl backdrop-blur-md">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-sky-400">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>shopify · Nuevo pedido</span>
                    </div>
                    <p className="text-xs font-semibold mt-1">+72,00 € · 1 artículo · Online Store</p>
                  </div>
                )}
              </div>

              {/* Bottom Ready Status Bar */}
              <div className="px-4 py-2.5 bg-[#080c14] border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-sky-400 font-bold">READY TO SELL</span>
                <span className="text-zinc-400">shopify infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PROCESO — SEIS PASOS. SIN SORPRESAS. (READY IN <= 7 DAYS) */}
      <section id="proceso" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-24 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              PROCESO
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-2 leading-[1.08]">
              Seis pasos.
              <span className="block text-zinc-500">Sin sorpresas.</span>
            </h2>
          </div>

          <div className="max-w-xs space-y-1">
            <p className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
              READY IN ≤ 7 DAYS*
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              * Desde que disponemos de toda la información y materiales necesarios. Proyectos con desarrollos a medida complejos se valoran por separado.
            </p>
          </div>
        </div>

        {/* 6 Steps Timeline */}
        <div className="relative pt-4 pb-16">
          <div className="hidden md:block absolute top-[22px] left-0 right-0 h-[2px] bg-sky-400/35" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative">
            {PROCESS_TIMELINE.map((item) => (
              <div key={item.num} className="space-y-3">
                <div className="w-3.5 h-3.5 rounded-full bg-[#05070b] border-2 border-sky-400 shadow-[0_0_12px_#38bdf8]" />
                <p className="text-xs font-mono text-sky-400 font-bold">{item.num}</p>
                <p className="text-sm sm:text-base font-bold text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Columns: NOSOTROS / TÚ / COSTES EXTERNOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-white/10">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              NOSOTROS
            </span>
            <p className="text-lg sm:text-xl font-bold text-white leading-snug">
              Construimos y configuramos BUILD: tienda, conversión, datos y formación.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              TÚ
            </span>
            <p className="text-lg sm:text-xl font-bold text-white leading-snug">
              Marca, productos, fotografías, precios, información y accesos.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              COSTES EXTERNOS
            </span>
            <p className="text-lg sm:text-xl font-bold text-white leading-snug">
              Shopify · Dominio · Apps adicionales si fueran necesarias.
            </p>
            <p className="text-xs text-zinc-400 pt-1">
              Nunca añadiremos una herramienta de pago sin explicarte antes para qué sirve y cuánto cuesta.
            </p>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-16">
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-zinc-900/80 to-[#070a10] p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
              CALCULADORA DE AMORTIZACIÓN
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
              ¿Cuántas ventas necesitas para recuperar tu inversión?
            </h3>
          </div>

          {/* 3 Distinct Sector Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { label: '🕯️🍷 Velas / Vinos (55 €)', value: 55 },
              { label: '👕 Moda / Suplementos (95 €)', value: 95 },
              { label: '📱 Móviles / Reparaciones (350 €)', value: 350 }
            ].map((preset) => (
              <button
                key={preset.value}
                onClick={() => setTicketPromedio(preset.value)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  ticketPromedio === preset.value
                    ? 'bg-sky-400 text-slate-950 border-sky-400'
                    : 'bg-white/[0.03] border-white/10 text-zinc-300 hover:border-white/30'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Ticket medio de tu cliente:</span>
                <span className="text-xl font-extrabold text-sky-400">{ticketPromedio} €</span>
              </div>
              <input
                type="range"
                min="25"
                max="600"
                step="5"
                value={ticketPromedio}
                onChange={(e) => setTicketPromedio(Number(e.target.value))}
                className="w-full accent-sky-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                <span>25 €</span>
                <span>300 €</span>
                <span>600 €</span>
              </div>
            </div>

            <div className="md:col-span-5 rounded-2xl bg-sky-400/10 border border-sky-400/30 p-6 text-center">
              <span className="text-xs font-mono uppercase text-sky-300">RETORNO DIRECTO</span>
              <p className="text-4xl font-extrabold text-white my-2">
                Con solo {salesNeeded} {salesNeeded === 1 ? 'venta' : 'ventas'}
              </p>
              <p className="text-xs text-zinc-300">
                ya has amortizado el 100% de tu tienda BUILD (997 €). A partir de ahí, todo es margen para tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION — BUILD (997€) + TORRENT / VALENCIA CALLOUT */}
      <section id="inversion" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-20">
        <div className="rounded-3xl border-2 border-sky-400/40 bg-gradient-to-b from-[#0c1424] to-[#060911] p-8 sm:p-12 shadow-[0_0_60px_rgba(56,189,248,0.12)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/15 text-sky-300 text-xs font-mono uppercase">
                PAQUETE OFICIAL LLAVE EN MANO
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
                BUILD · Crear mi eCommerce
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-1">
                Creamos tu tienda Shopify lista para vender y te enseñamos a gestionarla en menos de 7 días.
              </p>
            </div>

            <div className="md:text-right shrink-0">
              <span className="text-xs font-mono uppercase text-zinc-400">INVERSIÓN ÚNICA</span>
              <p className="text-4xl sm:text-5xl font-extrabold text-white mt-1">
                997 € <span className="text-lg font-normal text-zinc-400">+ IVA</span>
              </p>
              <p className="text-xs text-sky-300 mt-1">Posibilidad de pago fraccionado · Entrega ≤ 7 días</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
            {[
              'Arquitectura y diseño completo en Shopify enfocado a conversión (CRO)',
              'Configuración de pagos en 1 clic (Apple Pay, Google Pay, Tarjeta y Klarna)',
              'Sistema híbrido opcional: venta de catálogo + calendario de citas/taller',
              'Optimización móvil ultrarrápida y estructura SEO local y nacional',
              'Integración de analítica, píxeles de seguimiento (Meta/Google) y reseñas',
              'Formación personalizada 1 a 1 para que sepas gestionar pedidos y stock'
            ].map((feat, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sky-400/20 border border-sky-400/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-sky-300" />
                </div>
                <span className="text-sm text-zinc-200">{feat}</span>
              </div>
            ))}
          </div>

          {/* Local Strategic Partnership Callout — Torrent o Valencia */}
          <div className="rounded-2xl bg-sky-400/10 border border-sky-400/40 p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <MapPin className="w-6 h-6 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">
                  ¿Tienes un negocio físico referente en Torrent o Valencia?
                </p>
                <p className="text-xs text-zinc-300 mt-0.5">
                  Estamos seleccionando comercios locales estratégicos para nuestros próximos Casos de Éxito. Consulta condiciones especiales de lanzamiento o intercambio comercial directo.
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-sky-400 text-slate-950 font-extrabold text-xs whitespace-nowrap shrink-0">
              Plazas Limitadas
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="https://wa.me/34600000000?text=Hola%20Fresh%20Agency,%20quiero%20informaci%C3%B3n%20sobre%20mi%20tienda%20Shopify"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-base text-center transition-all shadow-[0_0_30px_rgba(56,189,248,0.4)]"
            >
              Solicitar Propuesta para mi Negocio →
            </a>
            <p className="text-xs text-zinc-400">
              Sin permanencias. La tienda es 100% de tu propiedad desde el día 1.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-extrabold text-white">
              FRESH<span className="text-sky-400">.</span>
            </span>
            <span>· Agencia eCommerce Shopify · Torrent & Valencia</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://likinagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-sky-400 transition-colors"
            >
              Metodología Likin Agency ↗
            </a>
            <span>© {new Date().getFullYear()} Fresh Agency</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
