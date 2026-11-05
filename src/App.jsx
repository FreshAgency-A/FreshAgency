import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Zap,
  Rocket,
  Menu,
  X,
  Check,
  Smartphone,
  ShieldCheck,
  Sparkles,
  ShoppingBag,
  Calendar,
  ChevronDown,
  Lock,
  AlertCircle,
  CheckCircle2,
  Sliders,
  Star,
  ArrowUpRight,
  MousePointerClick,
  Bell,
  Eye,
  ChevronRight,
  ChevronLeft,
  Flame,
  Shirt,
  Award,
  MapPin,
  Clock
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- FINAL PRODUCTION COLOR PALETTE: ELECTRIC ICE BLUE (#38bdf8) ---
  const accent = {
    hex: '#38bdf8',
    hexSoft: 'rgba(56, 189, 248, 0.14)',
    hexBorder: 'rgba(56, 189, 248, 0.45)',
    hexGlow: 'rgba(56, 189, 248, 0.24)',
    gradientText: 'linear-gradient(90deg, #ffffff 0%, #e0f2fe 45%, #38bdf8 100%)',
    buttonText: '#030712'
  };

  // --- 1. HERO LIVE SHOPIFY SIMULATOR STATE ---
  const [isSimulatingSales, setIsSimulatingSales] = useState(true);
  const [simulatedRevenue, setSimulatedRevenue] = useState(1845);
  const [pulseButton, setPulseButton] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'order',
      store: 'LA POMA LAB',
      title: 'Nuevo pedido #1084 · iPhone 15 Pro 256GB',
      desc: 'Titanio Natural · Salud Batería 100% · Pagado con Pay',
      amount: 829,
      time: 'Hace 1 min',
      badge: 'Envío Express 24h'
    },
    {
      id: 2,
      type: 'booking',
      store: 'LA POMA LAB',
      title: 'Cita Taller Confirmada · Cambio Pantalla OLED',
      desc: 'Hoy 17:30h · Reparación en 1 hora · Pieza reservada',
      amount: 119,
      time: 'Hace 6 min',
      badge: 'Taller Torrent'
    },
    {
      id: 3,
      type: 'order',
      store: 'VÉRTICE STUDIO',
      title: 'Nuevo pedido #1083 · Pack Colección',
      desc: '2x250g Ámbar & Cedro + Cortamechas · Pay',
      amount: 72,
      time: 'Hace 14 min',
      badge: 'Envío Gratis'
    }
  ]);

  const sampleNewOrders = [
    {
      type: 'order',
      store: 'LA POMA LAB',
      title: 'Nuevo pedido #1085 · iPhone 15 Pro 128GB',
      desc: 'Titanio Azul · Reacondicionado Grado A+ · Klarna 3x',
      amount: 749,
      badge: 'Recogida en Tienda'
    },
    {
      type: 'booking',
      store: 'LA POMA LAB',
      title: 'Cita Taller Confirmada · Cambio Pantalla OLED',
      desc: 'Mañana 11:00h · Servicio Técnico Microelectrónica',
      amount: 119,
      badge: 'Cita Confirmada'
    },
    {
      type: 'order',
      store: 'VÉRTICE STUDIO',
      title: 'Nuevo pedido #1086 · Formato XL 500g',
      desc: 'Vela Botánica Doble Mecha (90h) · Pagado con Pay',
      amount: 64,
      badge: 'Envío 24h'
    },
    {
      type: 'order',
      store: 'NÓMADA CLUB',
      title: 'Nuevo pedido #1087 · Full Studio Set',
      desc: 'Boxy Hoodie 480gsm + Jogger · Talla L · Pay',
      amount: 119,
      badge: 'Drop Limitado'
    }
  ];

  const [orderPoolIndex, setOrderPoolIndex] = useState(0);

  const triggerManualSale = (customOrder = null) => {
    setPulseButton(true);
    setTimeout(() => setPulseButton(false), 350);

    const nextItem = customOrder || sampleNewOrders[orderPoolIndex % sampleNewOrders.length];
    const newNotif = {
      id: Date.now(),
      ...nextItem,
      time: 'Ahora mismo'
    };
    setNotifications((prev) => [newNotif, ...prev.slice(0, 2)]);
    setSimulatedRevenue((prev) => prev + nextItem.amount);
    if (!customOrder) {
      setOrderPoolIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (!isSimulatingSales) return;
    const interval = setInterval(() => {
      triggerManualSale();
    }, 5000);
    return () => clearInterval(interval);
  }, [isSimulatingSales, orderPoolIndex]);

  // --- 2. INTERACTIVE STORE SHOWCASE STATE (LA POMA LAB -> VÉRTICE STUDIO -> NÓMADA CLUB) ---
  const [comparisonMode, setComparisonMode] = useState('fresh');
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedPhoneFinish, setSelectedPhoneFinish] = useState(0);
  const [selectedRepairSlot, setSelectedRepairSlot] = useState('Hoy 17:30h');
  const [selectedClothingSize, setSelectedClothingSize] = useState('L');
  const [selectedHoodieColor, setSelectedHoodieColor] = useState(0);
  const [applePaySuccess, setApplePaySuccess] = useState(false);

  const phoneFinishes = [
    {
      name: 'Titanio Natural',
      frame: 'from-stone-400 via-zinc-700 to-zinc-950',
      border: 'border-stone-400/70',
      swatch: 'bg-stone-400'
    },
    {
      name: 'Titanio Azul',
      frame: 'from-sky-800 via-slate-900 to-black',
      border: 'border-sky-400/70',
      swatch: 'bg-sky-700'
    },
    {
      name: 'Titanio Negro',
      frame: 'from-zinc-700 via-zinc-900 to-black',
      border: 'border-zinc-500/70',
      swatch: 'bg-zinc-800'
    }
  ];

  const hoodieColors = [
    { name: 'Obsidian Black', fill: '#121318', hood: '#181a20', stroke: '#52525b', swatch: 'bg-zinc-900' },
    { name: 'Glacier Grey', fill: '#3f444e', hood: '#2f343d', stroke: '#94a3b8', swatch: 'bg-slate-500' },
    { name: 'Washed Cobalt', fill: '#172554', hood: '#1e3a8a', stroke: '#38bdf8', swatch: 'bg-blue-900' }
  ];

  const storeCategories = [
    {
      id: 'tech',
      pillLabel: 'La Poma Lab · Apple',
      brandName: 'LA POMA LAB · Apple & Microelectrónica',
      storeUrl: 'https://lapomalab.com',
      badge: 'REACONDICIONADOS GRADO A+ & TALLER EXPRESS EN 1 HORA',
      stockText: '● Disponible hoy en tienda o envío urgente 24h',
      reviews: '4.9 ★ (248 reseñas verificadas)',
      title: 'iPhone 15 Pro / Servicio Técnico Oficial',
      subtitle:
        'Arquitectura híbrida en Shopify: permite a tus clientes comprar terminales en stock con Klarna o reservar hora de reparación en el taller sin esperas.',
      optionLabel: 'Selecciona Compra o Reserva de Taller (Cambia el precio en vivo):',
      repairSlots: ['Hoy 17:30h', 'Mañana 11:00h', 'Mañana 16:30h'],
      variants: [
        {
          id: '128gb',
          name: 'iPhone 15 Pro · 128GB Reacondicionado (Salud 100%)',
          tag: 'Grado A+ · 1 Año Garantía',
          price: 749,
          oldPrice: 899,
          visualBadge: '128GB · Salud Batería 100%',
          isRepair: false
        },
        {
          id: '256gb',
          name: 'iPhone 15 Pro · 256GB Reacondicionado (Salud 100%)',
          tag: 'Más Vendido · Cargador 20W',
          price: 829,
          oldPrice: 979,
          visualBadge: '256GB Pro · Salud Batería 100%',
          isRepair: false
        },
        {
          id: 'repair',
          name: 'Reserva Taller · Cambio Pantalla Original OLED (En 1h)',
          tag: 'Reparación Express · Sin Cita Previa Larga',
          price: 119,
          oldPrice: 149,
          visualBadge: 'Taller Express · Pantalla OLED',
          isRepair: true
        }
      ]
    },
    {
      id: 'candle',
      pillLabel: 'Vértice Studio · Hogar',
      brandName: 'VÉRTICE STUDIO · Alta Perfumería & Hogar',
      storeUrl: 'https://verticestudio.com',
      badge: 'CERA BOTÁNICA DE SOJA · ALTA PERFUMERÍA ARTESANAL',
      stockText: '● En Stock · Envío gratuito en 24h',
      reviews: '4.9 ★ (312 reseñas verificadas)',
      title: 'Colección Botánica Nº 04 · Ámbar & Cedro',
      subtitle:
        'Vaso de vidrio ámbar de botica con mecha de madera orgánica crepitante. Ficha optimizada con selector de formato que multiplica el ticket medio.',
      optionLabel: 'Selecciona Formato o Pack Colección (Cambia el precio en vivo):',
      variants: [
        {
          id: 'std',
          name: 'Estándar · 250g (45h de combustión)',
          tag: 'Formato Clásico',
          price: 38,
          oldPrice: 45,
          visualBadge: '250g · 1 Mecha de Madera',
          scale: 'scale-95',
          isDual: false
        },
        {
          id: 'xl',
          name: 'Formato XL · 500g Doble Mecha (90h)',
          tag: 'Más Vendido · Doble Mecha',
          price: 64,
          oldPrice: 78,
          visualBadge: '500g XL · Doble Mecha Orgánica',
          scale: 'scale-105',
          isDual: false
        },
        {
          id: 'pack',
          name: 'Pack Colección · 2x250g + Cortamechas',
          tag: 'Ahorra 18€ + Envío Gratis',
          price: 72,
          oldPrice: 90,
          visualBadge: 'Cofre 2x250g + Cortamechas Acero',
          scale: 'scale-100',
          isDual: true
        }
      ]
    },
    {
      id: 'clothing',
      pillLabel: 'Nómada Club · Moda',
      brandName: 'NÓMADA CLUB · Heavyweight Garments',
      storeUrl: 'https://nomadaclub.es',
      badge: 'ALGODÓN PEINADO 480 GSM · CORTE BOXY ARQUITECTÓNICO',
      stockText: '● Drop Limitado · Envío inmediato 24h',
      reviews: '5.0 ★ (419 reseñas verificadas)',
      title: 'Boxy Hoodie 480gsm · Colección Studio',
      subtitle:
        'Sudadera de alto gramaje con caída estructurada y capucha de doble capa. Selector interactivo de tallas, tonos y packs de ahorro.',
      optionLabel: 'Selecciona Prenda o Full Set (Cambia el precio en vivo):',
      sizes: [
        { label: 'S', stock: 'En stock' },
        { label: 'M', stock: 'En stock' },
        { label: 'L', stock: '🔥 Últimas 2 uds en talla L' },
        { label: 'XL', stock: 'Últimas 4 uds en talla XL' }
      ],
      variants: [
        {
          id: 'hoodie',
          name: 'Boxy Hoodie · 480gsm Heavy Cotton',
          tag: 'Prenda Individual',
          price: 68,
          oldPrice: 80,
          visualBadge: '480 GSM · Heavy Cotton',
          isBundle: false,
          isLimited: false
        },
        {
          id: 'limited',
          name: 'Edición Limitada · Bordado Alta Densidad',
          tag: 'Serie Numerada',
          price: 84,
          oldPrice: 98,
          visualBadge: 'Edición Limitada · Bordado 3D',
          isBundle: false,
          isLimited: true
        },
        {
          id: 'packduo',
          name: 'Full Studio Set · Hoodie + Jogger',
          tag: 'Ahorra 26€ · Envío Gratis',
          price: 119,
          oldPrice: 145,
          visualBadge: 'Full Studio Set · Hoodie + Jogger',
          isBundle: true,
          isLimited: false
        }
      ]
    }
  ];

  const currentCategory = storeCategories[categoryIndex];
  const currentVariant = currentCategory.variants[selectedVariantIdx] || currentCategory.variants[0];
  const klarnaInstallment = Math.round(currentVariant.price / 3);

  const handleNextCategory = () => {
    setCategoryIndex((prev) => (prev + 1) % storeCategories.length);
    setSelectedVariantIdx(0);
    setApplePaySuccess(false);
  };

  const handlePrevCategory = () => {
    setCategoryIndex((prev) => (prev - 1 + storeCategories.length) % storeCategories.length);
    setSelectedVariantIdx(0);
    setApplePaySuccess(false);
  };

  const handleSelectCategory = (idx) => {
    setCategoryIndex(idx);
    setSelectedVariantIdx(0);
    setApplePaySuccess(false);
  };

  // --- 3. "DE LA IDEA A LA TIENDA" INTERACTIVE STEPPER STATE (01 to 06) ---
  const [ideaStep, setIdeaStep] = useState(5);
  const [autoPlayIdea, setAutoPlayIdea] = useState(true);
  const [ideaBrand, setIdeaBrand] = useState('vertice');

  const ideaToStoreSteps = [
    {
      num: '01',
      code: 'STRUCTURE',
      desc: 'Wireframe, header, grid, navegación.'
    },
    {
      num: '02',
      code: 'DESIGN',
      desc: 'Colores, tipografía, branding.'
    },
    {
      num: '03',
      code: 'PRODUCT',
      desc: 'Producto, galería, precio, variantes, CTA.'
    },
    {
      num: '04',
      code: 'CONVERSION',
      desc: 'Reviews, trust, upsells, UX.'
    },
    {
      num: '05',
      code: 'DATA',
      desc: 'Pixel, analytics, tracking, Klaviyo.'
    },
    {
      num: '06',
      code: 'READY',
      desc: 'La tienda completa. Preparada para vender.'
    }
  ];

  useEffect(() => {
    if (!autoPlayIdea) return;
    const timer = setInterval(() => {
      setIdeaStep((prev) => (prev + 1) % ideaToStoreSteps.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [autoPlayIdea]);

  // --- 4. ROI CALCULATOR & BUILD SYSTEM STATE ---
  const [avgTicket, setAvgTicket] = useState(350);
  const [monthlyVisitors, setMonthlyVisitors] = useState(1200);
  const storeCost = 997;

  const salesToBreakEven = Math.max(1, Math.ceil(storeCost / avgTicket));
  const traditionalSales = Math.round(monthlyVisitors * 0.006);
  const freshSales = Math.round(monthlyVisitors * 0.028);
  const traditionalRevenue = traditionalSales * avgTicket;
  const freshRevenue = freshSales * avgTicket;
  const extraMonthlyRevenue = freshRevenue - traditionalRevenue;

  const [activeBuildStep, setActiveBuildStep] = useState(0);
  const [paymentPlan, setPaymentPlan] = useState('single');

  const buildModules = [
    {
      title: '1. Arquitectura y Diseño Completo en Shopify',
      subtitle: 'Creamos tu eCommerce desde cero con estética de marca líder.',
      details:
        'Más del 85% de tus clientes entran desde el móvil. Construimos una tienda ultrarrápida, limpia y pensada al milímetro para que comprar un producto o reservar cita lleve menos de 15 segundos.',
      metrics: 'Diseño 100% responsive · Carga en < 0.8s',
      badge: 'Core BUILD'
    },
    {
      title: '2. Estructura de Catálogo, Variantes, Packs y Reservas',
      subtitle: 'Configuramos tus productos o citas de taller para elevar el ticket medio.',
      details:
        'Organizamos tus colecciones, selectores de capacidad, tallas, packs ahorro o calendario de reparaciones (como has probado arriba en La Poma Lab y Vértice Studio).',
      metrics: '+35% en valor medio por pedido gracias a packs y variantes',
      badge: 'Catálogo & CRO'
    },
    {
      title: '3. Pasarelas de Pago en 1 Clic (Pay, Tarjeta y Klarna)',
      subtitle: 'Cobros directos a tu cuenta bancaria sin fricción.',
      details:
        'Activamos Shopify Payments, Apple Pay, Google Pay y pago en 3 plazos sin intereses con Klarna (tu cliente divide el pago y tú cobras el 100% al instante).',
      metrics: 'Checkout en 1 clic · Cero formularios eternos',
      badge: 'Pagos & Envíos'
    },
    {
      title: '4. Tracking de Datos (Meta Pixel, GA4) y Klaviyo',
      subtitle: 'Tu tienda lista para medir cada euro y recuperar carritos.',
      details:
        'Dejamos configurados todos los eventos de compra (ViewContent, AddToCart, InitiateCheckout, Purchase) para tus anuncios y las secuencias automáticas para recuperar carritos abandonados.',
      metrics: 'Recupera hasta un 18% de ventas abandonadas en automático',
      badge: 'Data & Retención'
    },
    {
      title: '5. Formación Práctica 1 a 1 Grabada',
      subtitle: 'Te enseñamos a gestionar toda tu tienda desde el móvil.',
      details:
        'Siguiendo la metodología de Likin Agency: al entregarte la tienda te hacemos una formación personalizada (que queda grabada para ti) donde aprendes a subir productos, cambiar precios y gestionar envíos sin depender de nadie.',
      metrics: 'Propiedad 100% tuya · Sin cuotas mensuales de mantenimiento',
      badge: 'Control Total'
    }
  ];

  // --- 5. FAQ & MODAL STATE ---
  const [openFaq, setOpenFaq] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leadType, setLeadType] = useState('Tienda Física + Reparaciones / Stock (Ej. La Poma Lab)');
  const [leadGoal, setLeadGoal] = useState('Crear mi eCommerce BUILD llave en mano');
  const [leadName, setLeadName] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const faqs = [
    {
      q: '¿Cuánto tardáis en entregar la tienda lista para vender?',
      a: 'En un máximo de 7 días (READY IN ≤ 7 DAYS*) desde que tenemos la información y materiales de tu negocio. Trabajamos con un sistema estructurado de 6 pasos sin sorpresas.'
    },
    {
      q: '¿Funciona tanto para tiendas como La Poma Lab (móviles y taller) como para marcas de velas, vino o ropa?',
      a: 'Sí. En el simulador interactivo de arriba puedes probar cómo adaptamos Shopify tanto para vender stock con pago fraccionado (Klarna / Apple Pay) como para reservar citas de taller o vender packs de producto.'
    },
    {
      q: '¿Necesito saber programar para gestionar la tienda después?',
      a: 'En absoluto. Nuestro paquete BUILD incluye una formación 1 a 1 grabada donde te enseñamos a controlar pedidos, stock y precios directamente desde la aplicación móvil de Shopify.'
    },
    {
      q: '¿Cómo funcionan los acuerdos para negocios referentes en Torrent o Valencia?',
      a: 'Si tienes un negocio físico consolidado en Torrent o Valencia con buen producto y quieres digitalizar tus ventas, consúltanos para valorar un acuerdo especial de Caso de Éxito local o intercambio estratégico.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        '--accent': accent.hex,
        '--accent-soft': accent.hexSoft,
        '--accent-border': accent.hexBorder,
        '--accent-glow': accent.hexGlow,
        '--btn-text': accent.buttonText
      }}
      className="min-h-screen bg-[#06080d] text-white font-sans overflow-x-hidden relative selection:bg-sky-400 selection:text-slate-950"
    >
      {/* Ambient Glacial Glows */}
      <div
        style={{ backgroundColor: accent.hexSoft }}
        className="fixed top-0 left-1/4 w-[540px] h-[540px] rounded-full blur-[165px] pointer-events-none z-0"
      />
      <div className="fixed bottom-0 right-1/4 w-[480px] h-[480px] bg-sky-500/[0.04] rounded-full blur-[160px] pointer-events-none z-0" />

      {/* HEADER */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06080d]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]'
            : 'bg-[#06080d]/70 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          <a
            href="#"
            className="text-2xl sm:text-[26px] font-black tracking-tighter flex items-center shrink-0"
          >
            FRESH<span className="text-[#38bdf8]">.</span>
          </a>

          <a
            href="https://likinagency.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-400/[0.07] hover:bg-sky-400/[0.14] border border-sky-400/35 text-xs font-medium text-zinc-200 hover:text-white transition-all whitespace-nowrap shrink-0 group shadow-[0_0_25px_rgba(56,189,248,0.12)]"
            title="Visitar web oficial de Likin Agency"
          >
            <Award size={14} className="text-[#38bdf8] shrink-0" />
            <span className="whitespace-nowrap">
              Formado en la metodología de{' '}
              <strong className="text-white font-bold underline underline-offset-4 decoration-sky-400/70">
                Likin Agency
              </strong>
            </span>
            <ArrowUpRight
              size={13}
              className="text-[#38bdf8] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>

          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <nav className="flex items-center gap-6 text-sm font-medium text-zinc-400">
              <a
                href="#demo"
                className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <Sparkles size={14} className="text-[#38bdf8]" />
                <span>Toca y Prueba</span>
              </a>
              <a
                href="#idea-to-store"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                De la idea a la tienda
              </a>
              <a href="#proceso" className="hover:text-white transition-colors whitespace-nowrap">
                Proceso
              </a>
              <a href="#precio" className="hover:text-white transition-colors whitespace-nowrap">
                Precio
              </a>
            </nav>

            <button
              onClick={() => setIsModalOpen(true)}
              className="group bg-[#38bdf8] hover:bg-sky-300 text-slate-950 px-5 py-2.5 rounded-full text-sm font-black transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-[0_0_25px_rgba(56,189,248,0.3)]"
            >
              <span>Empezar Proyecto</span>
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>

          <button
            className="lg:hidden text-white p-2.5 rounded-xl bg-white/5 border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#06080d]/98 backdrop-blur-2xl pt-24 px-6 flex flex-col gap-5 lg:hidden">
          <a
            href="https://likinagency.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between px-4 py-3 rounded-2xl bg-sky-400/10 border border-sky-400/30 text-xs font-semibold text-zinc-200"
          >
            <span className="flex items-center gap-2">
              <Award size={15} className="text-[#38bdf8]" />
              Formado en la metodología de <strong className="text-white underline">Likin Agency</strong>
            </span>
            <ArrowUpRight size={15} className="text-[#38bdf8]" />
          </a>
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-bold border-b border-white/10 pb-4 flex justify-between items-center"
          >
            <span>Toca y Prueba (La Poma Lab / Vértice)</span>
            <Sparkles size={18} className="text-[#38bdf8]" />
          </a>
          <a
            href="#idea-to-store"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-bold border-b border-white/10 pb-4"
          >
            De la idea a la tienda (01 - 06)
          </a>
          <a
            href="#proceso"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-bold border-b border-white/10 pb-4"
          >
            Proceso (≤ 7 días)
          </a>
          <a
            href="#precio"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-bold border-b border-white/10 pb-4"
          >
            Precio BUILD (997 €)
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsModalOpen(true);
            }}
            className="bg-[#38bdf8] text-slate-950 px-6 py-4 mt-2 rounded-full font-black text-lg flex items-center justify-center gap-2"
          >
            <span>Empezar Proyecto</span>
            <ArrowRight size={20} />
          </button>
        </div>
      )}

      {/* HERO SECTION & LIVE iPHONE SIMULATOR */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <a
              href="https://likinagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-sky-400/40 bg-sky-400/10 text-xs sm:text-sm font-semibold text-zinc-200 mb-7 transition-all hover:border-sky-400 hover:bg-sky-400/15"
            >
              <span className="px-2 py-0.5 rounded-full bg-[#38bdf8] text-slate-950 font-black text-[11px] tracking-tight">
                SHOPIFY BUILD
              </span>
              <span>Metodología de conversión validada por</span>
              <span className="text-white font-extrabold underline underline-offset-4 decoration-sky-400 flex items-center gap-0.5">
                Likin Agency
                <ArrowUpRight
                  size={14}
                  className="text-[#38bdf8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </span>
            </a>

            <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-black tracking-tight leading-[1.12] mb-6">
              <span className="block py-0.5 text-white">Creamos tu eCommerce.</span>
              <span
                style={{ backgroundImage: accent.gradientText }}
                className="inline-block py-1 pb-2 text-transparent bg-clip-text"
              >
                Tú lo escalas.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mb-9 font-normal leading-relaxed">
              Diseñamos e implementamos tiendas{' '}
              <span className="text-white font-semibold">Shopify</span> preparadas para vender desde el
              primer día. Sin plantillas lentas, listas en{' '}
              <span className="text-[#38bdf8] font-bold">≤ 7 días</span> y con formación incluida para que
              tengas el control total.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-11">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center justify-center gap-3 bg-[#38bdf8] hover:bg-sky-300 text-slate-950 px-8 py-4 rounded-full font-black text-base sm:text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(56,189,248,0.3)]"
              >
                <span>Crear mi eCommerce (BUILD)</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#demo"
                className="flex items-center justify-center gap-2.5 bg-[#0b0f17] hover:bg-zinc-900 text-white border border-white/15 px-7 py-4 rounded-full font-bold text-base transition-all"
              >
                <Eye size={18} className="text-[#38bdf8]" />
                <span>Probar Demo Interactiva</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-white/10 w-full max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">≤ 7 días</div>
                <div className="text-xs text-zinc-500 mt-0.5">Entrega llave en mano</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#38bdf8]">
                  1-Clic
                </div>
                <div className="text-xs text-zinc-500 mt-0.5">Pay, Google Pay & Klarna</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">100% Tuya</div>
                <div className="text-xs text-zinc-500 mt-0.5">Formación 1 a 1 incluida</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[410px] bg-gradient-to-b from-sky-400/25 via-zinc-800/40 to-zinc-950 p-1.5 rounded-[42px] border border-sky-400/30 shadow-[0_25px_90px_rgba(56,189,248,0.2)]">
              <div className="bg-[#090d16] rounded-[36px] p-5 sm:p-6 border border-white/5 relative overflow-hidden">
                <div className="w-32 h-6 bg-black rounded-full mx-auto mb-5 flex items-center justify-between px-3 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-300 tracking-wider">LA POMA LAB</span>
                </div>

                <div className="bg-[#0b0f17] border border-white/10 rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                        Facturación Hoy (En Vivo)
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2 mt-0.5">
                        <span>{simulatedRevenue.toLocaleString('es-ES')},00 €</span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sky-400/15 text-[#38bdf8]">
                          +34%
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsSimulatingSales(!isSimulatingSales)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold border transition-all ${
                        isSimulatingSales
                          ? 'bg-sky-400/15 text-[#38bdf8] border-sky-400/40'
                          : 'bg-zinc-900 text-zinc-400 border-white/10'
                      }`}
                    >
                      {isSimulatingSales ? '● Auto ON' : '○ Pausado'}
                    </button>
                  </div>

                  <button
                    onClick={() => triggerManualSale()}
                    className={`w-full bg-[#38bdf8] hover:bg-sky-300 text-slate-950 text-xs sm:text-sm font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(56,189,248,0.35)] active:scale-95 ${
                      pulseButton ? 'scale-[1.03] ring-4 ring-sky-400/40' : ''
                    }`}
                  >
                    <Zap size={15} className="fill-slate-950" />
                    <span>⚡ ¡Simular Venta en Vivo!</span>
                  </button>
                </div>

                <div className="flex items-center justify-between px-1 mb-2.5 text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Bell size={12} className="text-[#38bdf8]" />
                    Notificaciones en tiempo real
                  </span>
                  <span className="font-mono text-[10px] text-sky-400">Shopify iOS App</span>
                </div>

                <div className="space-y-2.5 min-h-[280px]">
                  {notifications.map((item, idx) => (
                    <div
                      key={item.id}
                      className={`p-3.5 rounded-2xl border transition-all duration-500 ${
                        idx === 0
                          ? 'bg-[#0f1624] border-sky-400/50 shadow-[0_0_25px_rgba(56,189,248,0.16)] scale-[1.01]'
                          : 'bg-[#0b0f17]/80 border-white/5 opacity-85'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5">
                          <div className="w-9 h-9 rounded-xl bg-sky-400/15 text-[#38bdf8] flex items-center justify-center shrink-0 mt-0.5">
                            {item.type === 'order' ? (
                              <ShoppingBag size={17} />
                            ) : (
                              <Calendar size={17} />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-sky-400/15 text-[#38bdf8]">
                                {item.store}
                              </span>
                              <span className="text-[10px] text-zinc-500">{item.time}</span>
                            </div>
                            <div className="text-xs font-bold text-white mt-1 leading-snug">
                              {item.title}
                            </div>
                            <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-sm font-black text-[#38bdf8]">+{item.amount},00 €</div>
                        </div>
                      </div>
                      <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-400">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-zinc-300 font-medium">
                          {item.badge}
                        </span>
                        <span>Stock sincronizado ✓</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE STORE SHOWCASE */}
      <section id="demo" className="py-24 px-6 bg-[#0b0f17] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-3">
                <MousePointerClick size={15} />
                <span>Experiencia de Compra Interactiva</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                Toca y prueba cómo compran tus clientes.
              </h2>
              <p className="text-zinc-400 mt-2 max-w-2xl text-base sm:text-lg">
                Cambia acabados, capacidades o tallas para ver cómo se actualiza el precio al instante, y
                pulsa la <strong className="text-[#38bdf8]">flecha derecha (→)</strong> para explorar{' '}
                <strong className="text-white">La Poma Lab</strong>,{' '}
                <strong className="text-white">Vértice Studio</strong> y{' '}
                <strong className="text-white">Nómada Club</strong>.
              </p>
            </div>

            <div className="bg-[#06080d] p-1.5 rounded-2xl border border-white/10 flex items-center self-start shrink-0">
              <button
                onClick={() => setComparisonMode('boring')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  comparisonMode === 'boring'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <AlertCircle size={15} />
                <span>❌ Web Tradicional (No convierte)</span>
              </button>
              <button
                onClick={() => setComparisonMode('fresh')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 ${
                  comparisonMode === 'fresh'
                    ? 'bg-[#38bdf8] text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Zap size={15} />
                <span>⚡ Tienda FRESH (Shopify)</span>
              </button>
            </div>
          </div>

          {comparisonMode === 'fresh' && (
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap items-center gap-2.5">
                {storeCategories.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(idx)}
                    className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                      categoryIndex === idx
                        ? 'bg-[#38bdf8] text-slate-950 font-black shadow-[0_0_20px_rgba(56,189,248,0.25)]'
                        : 'bg-[#06080d] text-zinc-400 border border-white/10 hover:text-white'
                    }`}
                  >
                    {cat.id === 'tech' && <Smartphone size={15} />}
                    {cat.id === 'candle' && <Flame size={15} />}
                    {cat.id === 'clothing' && <Shirt size={15} />}
                    <span>{cat.pillLabel}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={handleNextCategory}
                className="text-xs font-bold flex items-center gap-1.5 bg-sky-400/10 hover:bg-sky-400/20 text-[#38bdf8] border border-sky-400/35 px-4 py-2 rounded-full transition-all"
              >
                <span>
                  Siguiente Tienda ({storeCategories[(categoryIndex + 1) % storeCategories.length].pillLabel})
                </span>
                <ChevronRight size={15} />
              </button>
            </div>
          )}

          <div className="relative rounded-3xl border border-white/15 bg-[#06080d] overflow-hidden shadow-[0_25px_100px_rgba(0,0,0,0.85)]">
            <div className="bg-[#0b0f17] border-b border-white/10 px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                <span className="w-3 h-3 rounded-full bg-sky-400/70" />
              </div>
              <div className="bg-black/60 border border-white/10 rounded-lg px-4 py-1 text-xs text-zinc-300 flex items-center gap-2 font-mono">
                <Lock size={11} className="text-[#38bdf8]" />
                <span>
                  {comparisonMode === 'boring'
                    ? 'http://www.web-antigua-sin-tienda.es/presupuesto.php'
                    : currentCategory.storeUrl}
                </span>
              </div>
              <div className="text-xs font-mono text-[#38bdf8] hidden sm:block">
                {comparisonMode === 'boring' ? 'Carga: 6.8s · Sin Checkout' : 'Shopify OS 2.0 · 0.6s ⚡'}
              </div>
            </div>

            {comparisonMode === 'boring' ? (
              <div className="p-8 md:p-14 bg-zinc-950 text-zinc-300 flex flex-col items-center text-center">
                <div className="max-w-2xl w-full bg-[#0b0f17] border border-red-500/30 rounded-3xl p-6 sm:p-10">
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider">
                    ❌ ASÍ PIERDEN VENTAS LOS NEGOCIOS TRADICIONALES
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-4 mb-2">
                    "Pide presupuesto y te responderemos en 48-72h laborables"
                  </h3>
                  <p className="text-sm text-zinc-400 mb-6">
                    Cuando un cliente quiere comprar un iPhone reacondicionado, reservar un cambio de pantalla
                    o pedir una vela para regalo, <strong className="text-white">no quiere rellenar 6 campos y esperar 3 días</strong>.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-left opacity-65 pointer-events-none mb-6">
                    <div className="h-10 bg-zinc-900 border border-zinc-700 rounded-lg px-3 flex items-center text-xs text-zinc-500">
                      1. Nombre y Apellidos (Obligatorio)*
                    </div>
                    <div className="h-10 bg-zinc-900 border border-zinc-700 rounded-lg px-3 flex items-center text-xs text-zinc-500">
                      2. Correo electrónico*
                    </div>
                    <div className="h-10 bg-zinc-900 border border-zinc-700 rounded-lg px-3 flex items-center text-xs text-zinc-500">
                      3. Teléfono de contacto*
                    </div>
                    <div className="h-10 bg-zinc-900 border border-zinc-700 rounded-lg px-3 flex items-center text-xs text-zinc-500">
                      4. Modelo o producto que buscas*
                    </div>
                    <div className="h-10 bg-zinc-900 border border-zinc-700 rounded-lg px-3 flex items-center text-xs text-zinc-500 sm:col-span-2">
                      5. Asunto de tu solicitud*
                    </div>
                    <div className="h-20 bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-xs text-zinc-500 sm:col-span-2">
                      6. Escribe detalladamente tu consulta y un comercial te llamará...
                    </div>
                  </div>
                  <button
                    onClick={() => setComparisonMode('fresh')}
                    className="w-full bg-[#38bdf8] hover:bg-sky-300 text-slate-950 font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Zap size={18} />
                    <span>Cambiar a Tienda FRESH con Pago y Reserva en 1 Clic →</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 sm:p-10 lg:pr-24 relative">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-[#38bdf8]">
                      {currentCategory.id === 'tech' && <Smartphone size={22} />}
                      {currentCategory.id === 'candle' && <Flame size={22} className="text-amber-400" />}
                      {currentCategory.id === 'clothing' && <Shirt size={22} />}
                    </div>
                    <div>
                      <div className="font-black tracking-tight text-base sm:text-xl text-white">
                        {currentCategory.brandName}
                      </div>
                      <p className="text-[11px] sm:text-xs text-zinc-400 font-medium">
                        {currentCategory.badge}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
