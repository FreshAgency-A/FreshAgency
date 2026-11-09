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
  const [leadType, setLeadType] = useState('Marca de moda / streetwear');
  const [leadGoal, setLeadGoal] = useState('Crear mi eCommerce BUILD (lleva tu tienda al siguiente nivel)');
  const [leadName, setLeadName] = useState('');
  const [contactMethod, setContactMethod] = useState('WhatsApp');
  const [contactValue, setContactValue] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = [
    {
      q: '¿Por qué trabajáis exclusivamente con Shopify?',
      a: 'Porque apostamos por la excelencia técnica en una sola plataforma en lugar de dispersarnos en diez. Al especializarnos al 100% en el ecosistema Shopify, dominamos cada detalle de rendimiento, velocidad de carga, analítica y pagos en 1 clic (Apple Pay y Klarna) para llevar los resultados de tu tienda al siguiente nivel.'
    },
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

  const getContactPlaceholder = () => {
    if (contactMethod === 'WhatsApp') return 'Escribe tu número de teléfono (Ej. +34 600 000 000)';
    if (contactMethod === 'Instagram') return 'Escribe tu usuario de Instagram (Ej. @tumarca)';
    return 'Escribe tu correo electrónico (Ej. hola@tumarca.com)';
  };

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
                    <button
                      onClick={handlePrevCategory}
                      className="p-2.5 rounded-xl bg-[#0b0f17] hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white transition-all"
                      title="Tienda anterior"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={handleNextCategory}
                      className="px-4 py-2 rounded-xl bg-[#0b0f17] hover:bg-[#38bdf8] hover:text-slate-950 border border-sky-400/40 text-white text-xs font-bold flex items-center gap-1.5 transition-all"
                    >
                      <span>Siguiente Tienda</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-5 bg-gradient-to-b from-[#0b0f17] to-[#05070b] rounded-3xl p-7 border border-white/10 flex flex-col items-center justify-between min-h-[400px] relative overflow-hidden">
                    <div className="w-full flex justify-between items-center z-10">
                      <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-bold text-zinc-200">
                        {currentVariant.visualBadge}
                      </span>
                      {currentCategory.id === 'tech' && (
                        <span className="px-2.5 py-1 rounded-full bg-sky-400/15 border border-sky-400/35 text-[11px] font-bold text-[#38bdf8]">
                          {phoneFinishes[selectedPhoneFinish].name}
                        </span>
                      )}
                      {currentCategory.id === 'clothing' && (
                        <span className="px-2.5 py-1 rounded-full bg-sky-400/15 border border-sky-400/35 text-[11px] font-black text-[#38bdf8]">
                          TALLA {selectedClothingSize}
                        </span>
                      )}
                    </div>

                    {currentCategory.id === 'tech' && (
                      <div className="my-5 flex flex-col items-center justify-center relative">
                        <div className="w-40 h-40 rounded-full bg-sky-400/15 blur-2xl absolute pointer-events-none" />
                        <div
                          className={`w-40 h-56 rounded-[34px] border-[3px] ${phoneFinishes[selectedPhoneFinish].border} bg-gradient-to-br ${phoneFinishes[selectedPhoneFinish].frame} shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-3.5 flex flex-col justify-between relative transition-all duration-500`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="w-16 h-16 rounded-2xl bg-black/45 backdrop-blur-md border border-white/15 p-1.5 grid grid-cols-2 gap-1 shadow-inner">
                              <div className="w-5 h-5 rounded-full bg-zinc-950 border-2 border-zinc-600 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-400/60" />
                              </div>
                              <div className="w-5 h-5 rounded-full bg-zinc-950 border-2 border-zinc-600 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-400/60" />
                              </div>
                              <div className="w-5 h-5 rounded-full bg-zinc-950 border-2 border-zinc-600 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-400/60" />
                              </div>
                              <div className="w-3 h-3 rounded-full bg-[#38bdf8] m-auto shadow-[0_0_8px_#38bdf8]" />
                            </div>
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-sky-400/15 text-[#38bdf8] border border-sky-400/35">
                              {currentVariant.isRepair ? 'OLED 1h' : '100% BAT'}
                            </span>
                          </div>

                          <div className="text-center my-auto">
                            <div className="text-xs font-black tracking-tight text-white uppercase">
                              {currentVariant.isRepair ? 'CITA TALLER' : 'LA POMA LAB'}
                            </div>
                            <div className="text-[11px] text-[#38bdf8] font-bold mt-0.5">
                              {currentVariant.isRepair
                                ? selectedRepairSlot
                                : phoneFinishes[selectedPhoneFinish].name}
                            </div>
                          </div>

                          <div className="w-14 h-1 bg-white/30 rounded-full mx-auto" />
                        </div>

                        <div className="flex items-center gap-2 mt-4 z-10">
                          {phoneFinishes.map((fin, fIdx) => (
                            <button
                              key={fin.name}
                              onClick={() => setSelectedPhoneFinish(fIdx)}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-bold border flex items-center gap-1.5 transition-all ${
                                selectedPhoneFinish === fIdx
                                  ? 'border-[#38bdf8] bg-sky-400/15 text-white'
                                  : 'border-white/10 bg-black/50 text-zinc-400 hover:text-white'
                              }`}
                            >
                              <span className={`w-2.5 h-2.5 rounded-full ${fin.swatch}`} />
                              <span>{fin.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentCategory.id === 'candle' && (
                      <div className="my-6 flex flex-col items-center justify-center relative">
                        <div className="w-36 h-36 rounded-full bg-amber-500/20 blur-2xl absolute -top-6 pointer-events-none animate-pulse" />
                        <div
                          className={`flex items-end gap-3 transition-transform duration-500 ${currentVariant.scale}`}
                        >
                          <div className="flex flex-col items-center">
                            <div className="flex gap-2 mb-1">
                              <div className="w-3.5 h-6 rounded-full bg-gradient-to-t from-amber-500 via-amber-300 to-white shadow-[0_0_20px_rgba(251,191,36,0.9)] animate-pulse" />
                              {currentVariant.id === 'xl' && (
                                <div className="w-3.5 h-6 rounded-full bg-gradient-to-t from-amber-500 via-amber-300 to-white shadow-[0_0_20px_rgba(251,191,36,0.9)] animate-pulse" />
                              )}
                            </div>
                            <div className="w-1.5 h-2.5 bg-zinc-700 rounded-t" />
                            <div className="w-36 h-44 rounded-b-3xl rounded-t-lg border-2 border-amber-500/40 bg-gradient-to-b from-amber-900/40 via-amber-950/80 to-black shadow-2xl flex items-center justify-center p-4 relative">
                              <div className="w-full py-4 px-3 bg-[#f4f1ea] text-black rounded-sm text-center shadow-inner">
                                <div className="text-[8px] tracking-[0.22em] font-black uppercase text-zinc-600">
                                  VÉRTICE STUDIO
                                </div>
                                <div className="text-xs font-black tracking-tight mt-1">
                                  ÁMBAR & CEDRO
                                </div>
                                <div className="text-[9px] font-mono text-zinc-600 mt-1">
                                  {currentVariant.id === 'xl' ? '500G · 90 HORAS' : '250G · 45 HORAS'}
                                </div>
                              </div>
                            </div>
                          </div>

                          {currentVariant.isDual && (
                            <div className="flex flex-col items-center -ml-6 scale-90 opacity-95">
                              <div className="w-3 h-5 rounded-full bg-gradient-to-t from-amber-500 via-amber-300 to-white shadow-[0_0_15px_rgba(251,191,36,0.8)] mb-1" />
                              <div className="w-1 h-2 bg-zinc-700" />
                              <div className="w-28 h-36 rounded-b-2xl rounded-t-md border-2 border-amber-500/40 bg-gradient-to-b from-amber-900/40 via-amber-950/80 to-black shadow-2xl flex items-center justify-center p-2.5">
                                <div className="w-full py-3 px-2 bg-[#f4f1ea] text-black rounded-sm text-center">
                                  <div className="text-[7px] font-bold uppercase text-zinc-500">
                                    COFRE COLECCIÓN
                                  </div>
                                  <div className="text-[10px] font-black mt-0.5">+ CORTAMECHAS</div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {currentCategory.id === 'clothing' && (
                      <div className="my-4 flex flex-col items-center justify-center relative">
                        <div className="w-36 h-36 rounded-full bg-sky-400/15 blur-2xl absolute pointer-events-none" />
                        <div className="relative flex items-end justify-center">
                          <svg
                            viewBox="0 0 220 200"
                            className="w-52 h-44 drop-shadow-[0_20px_30px_rgba(0,0,0,0.85)] transition-all duration-300"
                          >
                            <path
                              d="M75 38 C75 14, 145 14, 145 38 L135 52 L85 52 Z"
                              fill={hoodieColors[selectedHoodieColor].hood}
                              stroke={hoodieColors[selectedHoodieColor].stroke}
                              strokeWidth="2.5"
                            />
                            <path
                              d="M72 42 L26 68 L42 145 L64 140 L64 78 L64 172 L156 172 L156 78 L156 140 L178 145 L194 68 L148 42 Z"
                              fill={hoodieColors[selectedHoodieColor].fill}
                              stroke={hoodieColors[selectedHoodieColor].stroke}
                              strokeWidth="2.5"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M80 128 L140 128 L146 160 L74 160 Z"
                              fill="#0f1117"
                              stroke={hoodieColors[selectedHoodieColor].stroke}
                              strokeWidth="2"
                            />
                            <rect
                              x="90"
                              y="76"
                              width="40"
                              height="13"
                              rx="2"
                              fill={currentVariant.isLimited ? '#38bdf8' : '#f4f4f5'}
                            />
                          </svg>

                          {currentVariant.isBundle && (
                            <div className="absolute -right-3 bottom-2 px-3 py-1.5 rounded-xl bg-[#38bdf8] text-slate-950 text-[11px] font-black shadow-xl border border-white">
                              SET HOODIE + JOGGER
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2 mt-3 z-10">
                          {hoodieColors.map((col, cIdx) => (
                            <button
                              key={col.name}
                              onClick={() => setSelectedHoodieColor(cIdx)}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-bold border flex items-center gap-1.5 transition-all ${
                                selectedHoodieColor === cIdx
                                  ? 'border-[#38bdf8] bg-sky-400/15 text-white'
                                  : 'border-white/10 bg-black/50 text-zinc-400 hover:text-white'
                              }`}
                            >
                              <span className={`w-2.5 h-2.5 rounded-full ${col.swatch}`} />
                              <span>{col.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="w-full flex items-center justify-between text-[11px] text-zinc-400 pt-3 border-t border-white/10 z-10">
                      <span className="flex items-center gap-1">
                        <ShieldCheck size={14} className="text-[#38bdf8]" /> Garantía Oficial
                      </span>
                      <span>Pay & Klarna Activo</span>
                    </div>
                  </div>

                  <div className="md:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                        {currentCategory.stockText}
                      </span>
                      <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                        <Star size={14} className="fill-amber-400" /> {currentCategory.reviews}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                        {currentCategory.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                        {currentCategory.subtitle}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#0b0f17] border border-white/10 flex flex-wrap items-baseline justify-between gap-4">
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                          {currentVariant.price} €
                        </span>
                        <span className="text-base text-zinc-500 line-through font-semibold">
                          {currentVariant.oldPrice} €
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-sky-400/15 text-[#38bdf8] text-xs font-extrabold">
                          Ahorras {currentVariant.oldPrice - currentVariant.price} €
                        </span>
                      </div>
                      <div className="text-xs text-zinc-300">
                        o 3 plazos de <strong className="text-[#38bdf8]">{klarnaInstallment} €</strong> sin
                        intereses con <span className="font-black text-white">Klarna.</span>
                      </div>
                    </div>

                    {currentCategory.id === 'clothing' && (
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-xs font-bold text-zinc-300">
                            Selecciona Talla (Interactivo):
                          </label>
                          <span className="text-xs font-semibold text-amber-400">
                            {currentCategory.sizes.find((s) => s.label === selectedClothingSize)?.stock}
                          </span>
                        </div>
                        <div className="grid grid-cols-4 gap-2.5">
                          {currentCategory.sizes.map((sz) => (
                            <button
                              key={sz.label}
                              onClick={() => {
                                setSelectedClothingSize(sz.label);
                                setApplePaySuccess(false);
                              }}
                              className={`py-2.5 rounded-xl font-black text-sm border transition-all ${
                                selectedClothingSize === sz.label
                                  ? 'border-[#38bdf8] bg-[#38bdf8] text-slate-950 shadow-md scale-[1.02]'
                                  : 'border-white/10 bg-[#0b0f17] text-zinc-400 hover:text-white'
                              }`}
                            >
                              {sz.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="text-xs font-bold text-zinc-300 block mb-2.5">
                        {currentCategory.optionLabel}
                      </label>
                      <div className="grid sm:grid-cols-3 gap-2.5">
                        {currentCategory.variants.map((v, idx) => {
                          const isSelected = selectedVariantIdx === idx;
                          return (
                            <button
                              key={v.id}
                              onClick={() => {
                                setSelectedVariantIdx(idx);
                                setApplePaySuccess(false);
                              }}
                              className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                                isSelected
                                  ? 'border-[#38bdf8] bg-sky-400/15 shadow-[0_0_25px_rgba(56,189,248,0.18)] scale-[1.01]'
                                  : 'border-white/10 bg-[#0b0f17] text-zinc-400 hover:border-white/25 hover:text-white'
                              }`}
                            >
                              <div>
                                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#38bdf8] block">
                                  {v.tag}
                                </span>
                                <div className="font-bold text-xs sm:text-sm text-white mt-1 leading-snug">
                                  {v.name}
                                </div>
                              </div>
                              <div className="mt-3 pt-2 border-t border-white/10 flex items-baseline justify-between">
                                <span className="text-base font-black text-white">{v.price} €</span>
                                <span className="text-[11px] text-zinc-500 line-through">
                                  {v.oldPrice} €
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {currentCategory.id === 'tech' && currentVariant.isRepair && (
                      <div className="p-3.5 rounded-2xl bg-sky-400/10 border border-sky-400/30">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-2">
                          <Clock size={14} className="text-[#38bdf8]" />
                          <span>Selecciona hora de cita en el taller (Pieza OLED reservada):</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {currentCategory.repairSlots.map((slot) => (
                            <button
                              key={slot}
                              onClick={() => setSelectedRepairSlot(slot)}
                              className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                                selectedRepairSlot === slot
                                  ? 'bg-[#38bdf8] text-slate-950 border-[#38bdf8] font-black'
                                  : 'bg-[#06080d] text-zinc-300 border-white/10 hover:text-white'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-1">
                      {!applePaySuccess ? (
                        <button
                          onClick={() => {
                            setApplePaySuccess(true);
                            triggerManualSale({
                              type: currentVariant.isRepair ? 'booking' : 'order',
                              store: currentCategory.pillLabel.split('·')[0].trim().toUpperCase(),
                              title: currentVariant.isRepair
                                ? `Cita Taller Confirmada · ${selectedRepairSlot}`
                                : `Nuevo pedido #1089 · Pagado con Pay`,
                              desc: `${currentVariant.name}`,
                              amount: currentVariant.price,
                              badge: 'Demo Interactiva'
                            });
                          }}
                          className="w-full bg-[#38bdf8] hover:bg-sky-300 text-slate-950 font-black py-4 rounded-2xl text-base flex items-center justify-center gap-2 transition-all active:scale-98 shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                        >
                          <span>
                            {currentVariant.isRepair
                              ? `Reservar Cita (${selectedRepairSlot}) por ${currentVariant.price} € con Pay`
                              : `Comprar con Pay por ${currentVariant.price} €`}
                          </span>
                        </button>
                      ) : (
                        <div className="p-4 rounded-2xl bg-sky-400/15 border border-[#38bdf8] flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 size={24} className="text-[#38bdf8] shrink-0" />
                            <div>
                              <div className="font-bold text-sm text-white">
                                ¡Operación de {currentVariant.price} € confirmada en 1 clic!
                              </div>
                              <div className="text-xs text-zinc-300">
                                También hemos enviado la notificación en vivo al iPhone de arriba.
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => setApplePaySuccess(false)}
                            className="text-xs font-bold underline ml-4 shrink-0 text-white"
                          >
                            Repetir
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNextCategory}
                  title="Haz clic para cambiar entre La Poma Lab, Vértice Studio y Nómada Club"
                  className="hidden lg:flex flex-col items-center justify-center gap-2.5 absolute right-4 top-1/2 -translate-y-1/2 w-14 py-6 rounded-2xl bg-[#0b0f17] hover:bg-white text-white hover:text-slate-950 border border-sky-400/45 shadow-[0_0_35px_rgba(56,189,248,0.2)] transition-all duration-300 group z-20"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest [writing-mode:vertical-rl] rotate-180">
                    Siguiente Tienda
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#38bdf8] text-slate-950 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ChevronRight size={22} strokeWidth={3} />
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FROM IDEA TO ECOMMERCE (01 TO 06) */}
      <section
        id="idea-to-store"
        className="py-24 md:py-32 px-6 bg-[#06080d] border-b border-white/10 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                  FROM IDEA TO ECOMMERCE
                </span>
                <button
                  onClick={() => setAutoPlayIdea(!autoPlayIdea)}
                  className={`text-[11px] font-mono px-3 py-1 rounded-full border transition-all ${
                    autoPlayIdea
                      ? 'border-sky-400/40 bg-sky-400/15 text-[#38bdf8]'
                      : 'border-white/10 bg-white/5 text-zinc-400'
                  }`}
                >
                  {autoPlayIdea ? '● Auto-avance activo' : '○ Modo manual'}
                </button>
              </div>

              <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.06] mb-10">
                <span className="block text-white">De la idea</span>
                <span className="block text-zinc-500">a la tienda.</span>
              </h2>

              <div className="border-t border-white/10">
                {ideaToStoreSteps.map((st, idx) => {
                  const isActive = ideaStep === idx;
                  return (
                    <button
                      key={st.num}
                      onClick={() => {
                        setAutoPlayIdea(false);
                        setIdeaStep(idx);
                      }}
                      className={`w-full text-left py-4 px-3 border-b border-white/10 transition-all flex items-start gap-6 group ${
                        isActive ? 'bg-sky-400/[0.06]' : 'hover:bg-white/[0.02]'
                      }`}
                    >
                      <span
                        className={`font-mono text-xs mt-1 transition-colors ${
                          isActive
                            ? 'text-[#38bdf8] font-bold'
                            : 'text-zinc-600 group-hover:text-zinc-400'
                        }`}
                      >
                        {st.num}
                      </span>
                      <div className="flex-1">
                        <div
                          className={`font-mono text-xs sm:text-sm tracking-[0.14em] uppercase font-bold transition-colors ${
                            isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                          }`}
                        >
                          {st.code}
                        </div>
                        <div
                          className={`text-xs sm:text-sm mt-0.5 transition-colors ${
                            isActive ? 'text-zinc-300' : 'text-zinc-500'
                          }`}
                        >
                          {st.desc}
                        </div>
                      </div>
                      <div
                        className={`w-2 h-2 rounded-full self-center transition-all ${
                          isActive ? 'bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]' : 'bg-transparent'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <p className="text-[11px] text-zinc-500 mt-5 leading-relaxed">
                Toca cualquier fase (01 a 06) para ver cómo construimos y desplazamos cada bloque de la
                tienda en tiempo real.
              </p>
            </div>

            <div className="lg:col-span-7 relative flex flex-col items-center justify-center lg:px-12">
              <div className="flex items-center gap-2 mb-3 self-end">
                <button
                  onClick={() => setIdeaBrand('vertice')}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono border transition-all ${
                    ideaBrand === 'vertice'
                      ? 'bg-sky-400/15 border-sky-400/50 text-[#38bdf8] font-bold'
                      : 'bg-white/5 border-white/10 text-zinc-400'
                  }`}
                >
                  VERTICESTUDIO.COM
                </button>
                <button
                  onClick={() => setIdeaBrand('pomalab')}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono border transition-all ${
                    ideaBrand === 'pomalab'
                      ? 'bg-sky-400/15 border-sky-400/50 text-[#38bdf8] font-bold'
                      : 'bg-white/5 border-white/10 text-zinc-400'
                  }`}
                >
                  LAPOMALAB.COM
                </button>
              </div>

              <div className="hidden xl:flex flex-col items-end gap-2.5 absolute -left-4 top-[38%] z-20 pointer-events-none">
                {['REVIEWS', 'TRUST BADGES', 'UPSELL', 'ENVÍO GRATIS'].map((pill) => {
                  const isHighlighted = ideaStep === 3 || ideaStep === 5;
                  return (
                    <div
                      key={pill}
                      className={`px-3.5 py-1.5 rounded-lg font-mono text-[11px] tracking-widest uppercase border transition-all duration-500 ${
                        isHighlighted
                          ? 'bg-[#0b0f17] border-[#38bdf8] text-white shadow-[0_0_20px_rgba(56,189,248,0.25)] translate-x-1'
                          : 'bg-[#0b0f17]/90 border-white/10 text-zinc-500'
                      }`}
                    >
                      {pill}
                    </div>
                  );
                })}
              </div>

              <div className="hidden xl:flex flex-col items-start gap-2.5 absolute -right-4 top-[48%] z-20 pointer-events-none">
                {['META PIXEL', 'EVENTOS DE COMPRA', 'KLAVIYO'].map((pill) => {
                  const isHighlighted = ideaStep === 4 || ideaStep === 5;
                  return (
                    <div
                      key={pill}
                      className={`px-3.5 py-2 rounded-lg font-mono text-[11px] tracking-widest uppercase border transition-all duration-500 ${
                        isHighlighted
                          ? 'bg-sky-400/15 border-[#38bdf8] text-[#38bdf8] font-bold shadow-[0_0_25px_rgba(56,189,248,0.3)] -translate-x-1'
                          : 'bg-[#0b0f17]/90 border-white/10 text-zinc-500'
                      }`}
                    >
                      {pill}
                    </div>
                  );
                })}
              </div>

              <div className="w-full max-w-[540px] rounded-2xl border border-white/15 bg-[#0b0f17] shadow-[0_30px_100px_rgba(0,0,0,0.85)] overflow-hidden relative">
                <div className="bg-[#111726] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-300">
                    {ideaBrand === 'vertice' ? 'VERTICESTUDIO.COM' : 'LAPOMALAB.COM'}
                  </div>
                  <div className="text-[10px] font-mono font-bold text-[#38bdf8]">
                    {ideaToStoreSteps[ideaStep].num} · {ideaToStoreSteps[ideaStep].code}
                  </div>
                </div>

                <div
                  className={`absolute top-16 right-4 z-30 w-72 rounded-2xl bg-[#0d1422]/95 backdrop-blur-xl border border-sky-400/50 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-500 ${
                    ideaStep === 5 || ideaStep === 4
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <span className="px-1.5 py-0.5 rounded bg-[#38bdf8] text-slate-950 font-black text-[10px]">
                      shopify
                    </span>
                    <span>Nuevo pedido</span>
                  </div>
                  <div className="text-sm font-extrabold text-[#38bdf8]">
                    {ideaBrand === 'vertice' ? '+49,90 €' : '+749,00 €'}{' '}
                    <span className="font-normal text-zinc-300">· 1 artículo · Online Store</span>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mt-1.5">
                    {ideaStep === 4 ? 'EVENTO PURCHASE ENVIADO A META PIXEL ✓' : 'READY TO SELL · EN VIVO'}
                  </div>
                </div>

                <div className="h-[510px] overflow-hidden relative bg-white text-zinc-900">
                  {ideaStep === 0 ? (
                    <div className="h-full bg-[#080b12] text-zinc-400 p-5 flex flex-col justify-between font-mono">
                      <div className="border border-dashed border-zinc-700 rounded-lg p-2.5 flex justify-between items-center text-[10px]">
                        <span>[ANNOUNCEMENT BAR · ENVÍO 24H]</span>
                        <span>[100% WIDTH]</span>
                      </div>
                      <div className="border border-dashed border-zinc-700 rounded-lg p-3 flex justify-between items-center text-xs">
                        <span>[NAV: Catálogo | Packs | Reservas]</span>
                        <span className="px-2 py-0.5 bg-zinc-800 rounded text-white">
                          {ideaBrand === 'vertice' ? 'VÉRTICE' : 'LA POMA LAB'}
                        </span>
                        <span>[Search · Cart (0)]</span>
                      </div>
                      <div className="border-2 border-dashed border-sky-400/50 bg-sky-400/10 rounded-xl p-6 text-center my-1 flex flex-col items-center justify-center h-44">
                        <span className="text-[10px] uppercase tracking-widest text-[#38bdf8] mb-1 font-bold">
                          01 · HERO WIREFRAME ARCHITECTURE
                        </span>
                        <div className="w-3/4 h-4 bg-zinc-800 rounded mb-2" />
                        <div className="w-1/2 h-3 bg-zinc-800/70 rounded mb-4" />
                        <div className="px-4 py-1.5 rounded border border-sky-400/50 text-[#38bdf8] text-[10px]">
                          [CTA PRINCIPAL · COMPRAR EN 1 CLIC]
                        </div>
                      </div>
                      <div>
                        <div className="text-center text-[10px] text-zinc-500 mb-2">
                          ─── [GRID DE PRODUCTOS · 4 COLUMNAS] ───
                        </div>
                        <div className="grid grid-cols-4 gap-2.5">
                          {[1, 2, 3, 4].map((n) => (
                            <div
                              key={n}
                              className="border border-dashed border-zinc-700 rounded-lg p-2 h-28 flex flex-col justify-between bg-zinc-900/50"
                            >
                              <div className="w-full h-14 bg-zinc-800/80 rounded" />
                              <div className="w-3/4 h-2 bg-zinc-700 rounded" />
                              <div className="w-1/2 h-2 rounded bg-[#38bdf8]/60" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`transition-transform duration-700 ease-in-out ${
                        ideaStep === 1
                          ? 'translate-y-0'
                          : ideaStep === 2
                          ? '-translate-y-[145px]'
                          : ideaStep === 3
                          ? '-translate-y-[95px]'
                          : ideaStep === 4
                          ? '-translate-y-[60px]'
                          : 'translate-y-0'
                      }`}
                    >
                      <div
                        className={`text-[10px] py-1.5 px-3 text-center font-medium transition-all ${
                          ideaStep === 3
                            ? 'bg-[#38bdf8] text-slate-950 font-bold'
                            : 'bg-zinc-900 text-zinc-100'
                        }`}
                      >
                        {ideaBrand === 'vertice'
                          ? '✨ Envío gratis en pedidos +45€ · Alta perfumería botánica hecha a mano'
                          : '⚡ iPhones Reacondicionados Salud 100% · Reparación OLED en 1 hora'}
                      </div>

                      <div
                        className={`relative h-52 ${
                          ideaBrand === 'vertice'
                            ? 'bg-gradient-to-b from-[#281810] via-[#3b2316] to-[#170d08]'
                            : 'bg-gradient-to-b from-slate-900 via-zinc-900 to-black'
                        } text-white p-5 flex flex-col justify-between overflow-hidden`}
                      >
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 h-32 bg-sky-400/25 blur-2xl rounded-full pointer-events-none" />
                        <div className="flex items-center justify-between text-[11px] text-zinc-200 z-10">
                          <div className="flex items-center gap-3">
                            <span>Colecciones</span>
                            <span>{ideaBrand === 'vertice' ? 'Packs' : 'Taller 1h'}</span>
                            <span>Garantía</span>
                          </div>
                          <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-black text-[10px] tracking-widest uppercase">
                            {ideaBrand === 'vertice' ? 'VÉRTICE' : 'LA POMA LAB'}
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <span className="px-2 py-0.5 rounded-full bg-sky-400/20 text-[#38bdf8] text-[10px] font-bold">
                              🛒 1
                            </span>
                          </div>
                        </div>

                        <div className="text-center my-auto z-10">
                          <h4 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                            {ideaBrand === 'vertice'
                              ? 'Luz y arquitectura aromática'
                              : 'Especialistas en Apple & Microelectrónica'}
                          </h4>
                          <p className="text-[11px] text-zinc-300 mt-1">
                            {ideaBrand === 'vertice'
                              ? 'Cera botánica de soja con mecha orgánica de madera.'
                              : 'Compra tu iPhone Grado A+ o reserva reparación express hoy.'}
                          </p>
                        </div>

                        <div className="flex justify-center z-10">
                          <span className="px-4 py-1.5 rounded-full bg-white text-slate-950 font-black text-[10px] tracking-wide uppercase">
                            Explorar más vendidos ↓
                          </span>
                        </div>
                      </div>

                      <div className="p-5 bg-[#faf8f5]">
                        <div className="text-center mb-3">
                          <div className="text-xs font-black text-zinc-900 tracking-tight uppercase">
                            ─── Más vendidos ───
                          </div>
                          <div className="text-[10px] text-zinc-500">
                            Verificados con reseñas reales y pago rápido con Pay
                          </div>
                        </div>

                        <div className="grid grid-cols-4 gap-2.5">
                          {(ideaBrand === 'vertice'
                            ? [
                                {
                                  name: 'Ámbar & Cedro · 250g',
                                  price: '38,00 €',
                                  tag: '4.9 ★ (112)',
                                  tone: 'from-amber-100 to-stone-200'
                                },
                                {
                                  name: 'Sándalo & Humo · Tarro Ámbar',
                                  price: '42,00 €',
                                  tag: 'Más vendido',
                                  tone: 'from-stone-800 to-amber-950 text-white'
                                },
                                {
                                  name: 'Higo Negro & Vetiver XL',
                                  price: '64,00 €',
                                  tag: 'Doble Mecha',
                                  tone: 'from-orange-100 to-amber-200'
                                },
                                {
                                  name: 'Pack Colección 2x250g',
                                  price: '72,00 €',
                                  tag: 'Envío Gratis',
                                  tone: 'from-stone-200 to-zinc-300'
                                },
                                {
                                  name: 'Bergamota & Lino Puro',
                                  price: '38,00 €',
                                  tag: '45h duración',
                                  tone: 'from-amber-50 to-stone-200'
                                },
                                {
                                  name: 'Bruma Botánica 100ml',
                                  price: '29,00 €',
                                  tag: 'Upsell +1 clic',
                                  tone: 'from-slate-800 to-stone-900 text-white'
                                },
                                {
                                  name: 'Cofre Regalo Completo',
                                  price: '49,90 €',
                                  tag: 'Edición Limitada',
                                  tone: 'from-amber-200 to-orange-200'
                                },
                                {
                                  name: 'Cortamechas Acero Mate',
                                  price: '14,90 €',
                                  tag: 'Accesorio',
                                  tone: 'from-stone-100 to-amber-100'
                                }
                              ]
                            : [
                                {
                                  name: 'iPhone 15 Pro 128GB',
                                  price: '749,00 €',
                                  tag: 'Salud 100%',
                                  tone: 'from-slate-800 to-zinc-950 text-white'
                                },
                                {
                                  name: 'iPhone 15 Pro 256GB',
                                  price: '829,00 €',
                                  tag: 'Más vendido',
                                  tone: 'from-sky-900 to-slate-950 text-white'
                                },
                                {
                                  name: 'Pantalla OLED Original',
                                  price: '119,00 €',
                                  tag: 'Cita en 1h',
                                  tone: 'from-zinc-200 to-slate-300'
                                },
                                {
                                  name: 'Batería Nueva Oficial',
                                  price: '69,00 €',
                                  tag: 'Salud 100%',
                                  tone: 'from-sky-100 to-slate-200'
                                },
                                {
                                  name: 'iPhone 14 Pro 128GB',
                                  price: '649,00 €',
                                  tag: '1 Año Garantía',
                                  tone: 'from-zinc-800 to-black text-white'
                                },
                                {
                                  name: 'Cargador 20W USB-C',
                                  price: '24,90 €',
                                  tag: 'Upsell Carrito',
                                  tone: 'from-stone-100 to-zinc-200'
                                },
                                {
                                  name: 'Cristal Templado Pro',
                                  price: '19,90 €',
                                  tag: 'Instalación incl.',
                                  tone: 'from-sky-50 to-zinc-200'
                                },
                                {
                                  name: 'Diagnóstico Microelect.',
                                  price: '29,00 €',
                                  tag: 'Taller Torrent',
                                  tone: 'from-slate-800 to-zinc-900 text-white'
                                }
                              ]
                          ).map((prod, pIdx) => (
                            <div
                              key={pIdx}
                              className={`rounded-xl bg-white border p-2 transition-all ${
                                (ideaStep === 2 || ideaStep === 3) && pIdx < 4
                                  ? 'border-[#38bdf8] shadow-md scale-[1.02]'
                                  : 'border-stone-200/80'
                              }`}
                            >
                              <div
                                className={`h-20 rounded-lg bg-gradient-to-br ${prod.tone} p-1.5 flex flex-col justify-between relative overflow-hidden`}
                              >
                                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-black/70 text-white self-start">
                                  {prod.tag}
                                </span>
                                <div className="w-7 h-8 rounded-sm bg-white/80 mx-auto shadow-sm border border-black/10" />
                              </div>
                              <div className="mt-1.5">
                                <div className="text-[9px] font-semibold text-zinc-800 line-clamp-1">
                                  {prod.name}
                                </div>
                                <div className="flex items-center justify-between mt-1">
                                  <span className="text-[10px] font-black text-zinc-900">
                                    {prod.price}
                                  </span>
                                  <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-zinc-900 text-white">
                                    + Pay
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {ideaStep === 4 && (
                    <div className="absolute inset-x-4 bottom-14 bg-[#06080d]/95 border border-[#38bdf8] rounded-xl p-3 text-white flex items-center justify-between text-xs shadow-2xl z-20">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-ping" />
                        <span className="font-mono text-[11px] text-[#38bdf8]">
                          DATA LAYER ACTIVO: Meta Pixel · GA4 · Klaviyo
                        </span>
                      </div>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-400/15 text-[#38bdf8]">
                        100% Trackeado
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-x-3 bottom-3 rounded-xl bg-[#0b0f17]/95 backdrop-blur-md border border-white/15 px-4 py-2.5 flex items-center justify-between z-20">
                    <span className="font-mono text-xs tracking-[0.18em] uppercase font-bold text-[#38bdf8] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                      {ideaStep === 5
                        ? 'READY TO SELL'
                        : `FASE ${ideaToStoreSteps[ideaStep].num}: ${ideaToStoreSteps[ideaStep].code}`}
                    </span>
                    <span className="text-xs font-black text-white flex items-center gap-1.5">
                      <ShoppingBag size={13} className="text-[#38bdf8]" />
                      shopify
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO: Seis pasos. Sin sorpresas. */}
      <section id="proceso" className="py-24 md:py-32 px-6 bg-[#04060a] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">
                PROCESO
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.05]">
                <span className="block text-white">Seis pasos.</span>
                <span className="block text-zinc-500">Sin sorpresas.</span>
              </h2>
            </div>

            <div className="lg:max-w-sm">
              <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#38bdf8] mb-2">
                READY IN ≤ 7 DAYS*
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                * Desde que disponemos de toda la información y materiales necesarios. Proyectos fuera del
                alcance estándar se valoran por separado.
              </p>
            </div>
          </div>

          <div className="relative mb-20">
            <div className="hidden lg:block absolute top-[7px] left-0 right-0 h-[1px] bg-sky-400/45 z-0" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
              {[
                { num: '01', label: 'Cuéntanos tu proyecto' },
                { num: '02', label: 'Validamos encaje' },
                { num: '03', label: 'Construimos' },
                { num: '04', label: 'Revisamos' },
                { num: '05', label: 'Te enseñamos' },
                { num: '06', label: 'Lanzamos' }
              ].map((step) => (
                <div key={step.num} className="flex flex-col items-start">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[#38bdf8] bg-[#04060a] shadow-[0_0_12px_rgba(56,189,248,0.5)] mb-4" />
                  <div className="font-mono text-xs text-[#38bdf8] mb-1.5 font-bold">{step.num}</div>
                  <div className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {step.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 grid md:grid-cols-3 gap-10 lg:gap-14">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 mb-3">
                NOSOTROS
              </div>
              <p className="text-lg sm:text-xl font-bold text-white leading-snug">
                Construimos y configuramos BUILD: tienda, conversión, datos y formación.
              </p>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 mb-3">
                TÚ
              </div>
              <p className="text-lg sm:text-xl font-bold text-white leading-snug">
                Marca, productos, fotografías, precios, información y accesos.
              </p>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 mb-3">
                COSTES EXTERNOS
              </div>
              <p className="text-lg sm:text-xl font-bold text-white leading-snug mb-3">
                Shopify · Dominio · Apps adicionales si fueran necesarias.
              </p>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Nunca añadiremos una herramienta de pago sin explicarte antes para qué sirve y cuánto cuesta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EL SISTEMA BUILD */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-3">
              ESPECIALISTAS EN SHOPIFY BUILD
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Qué incluye tu sistema <span className="text-[#38bdf8]">BUILD.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm sm:text-base">
            Entregamos la infraestructura completa para vender productos o reservar servicios desde el primer
            día, sin cuotas mensuales de agencia:
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-3">
            {buildModules.map((mod, index) => {
              const isSelected = activeBuildStep === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveBuildStep(index)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#0b0f17] border-sky-400/50 shadow-[0_0_30px_rgba(56,189,248,0.14)]'
                      : 'bg-[#090d15] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-400/10 text-[#38bdf8] inline-block mb-1.5">
                      {mod.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">{mod.title}</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1">{mod.subtitle}</p>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                      isSelected ? 'bg-[#38bdf8] text-slate-950' : 'bg-white/5 text-zinc-400'
                    }`}
                  >
                    <ArrowRight size={16} />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-6 bg-gradient-to-b from-[#0b0f17] to-[#06080d] border border-white/15 rounded-3xl p-8 sm:p-10 sticky top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/15 text-[#38bdf8] text-xs font-bold mb-6">
              <CheckCircle2 size={14} />
              <span>Incluido llave en mano en tu paquete BUILD</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">
              {buildModules[activeBuildStep].title}
            </h3>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8">
              {buildModules[activeBuildStep].details}
            </p>

            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 mb-8">
              <div className="text-xs text-zinc-500 uppercase font-bold mb-1">
                Impacto Directo en Conversión
              </div>
              <div className="text-lg font-extrabold text-[#38bdf8]">
                {buildModules[activeBuildStep].metrics}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Check size={15} className="text-[#38bdf8]" />
                <span>Implementado en ≤ 7 días</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={15} className="text-[#38bdf8]" />
                <span>Formación 1 a 1 incluida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section id="calculadora" className="py-24 px-6 bg-[#0b0f17] border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-3">
              <Sliders size={14} />
              <span>Calculadora de Amortización</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              ¿Con cuántos pedidos pagas tu tienda?
            </h2>
            <p className="text-zinc-400 mt-3 text-base sm:text-lg">
              Selecciona un caso real o desliza el ticket medio de tu negocio:
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { label: '🕯️🍷 Velas / Vinos (55€)', ticket: 55, visitors: 1500 },
              { label: '👕 Moda / Suplementos (95€)', ticket: 95, visitors: 2200 },
              { label: '📱 La Poma Lab / Móviles (350€)', ticket: 350, visitors: 1200 }
            ].map((preset) => {
              const isSelected = avgTicket === preset.ticket;
              return (
                <button
                  key={preset.label}
                  onClick={() => {
                    setAvgTicket(preset.ticket);
                    setMonthlyVisitors(preset.visitors);
                  }}
                  className={`px-5 py-2.5 rounded-full border text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                    isSelected
                      ? 'bg-[#38bdf8] text-slate-950 border-[#38bdf8] font-black shadow-[0_0_25px_rgba(56,189,248,0.3)] scale-105'
                      : 'bg-[#06080d] hover:bg-zinc-900 border-white/10 text-zinc-300'
                  }`}
                >
                  <span>{preset.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#06080d] border border-white/15 rounded-3xl p-6 sm:p-10">
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm font-bold text-zinc-300">
                    1. Ticket medio por pedido o reparación:
                  </label>
                  <span className="text-3xl font-black text-[#38bdf8]">{avgTicket} €</span>
                </div>
                <input
                  type="range"
                  min="35"
                  max="750"
                  step="5"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  style={{ accentColor: accent.hex }}
                  className="w-full h-2 bg-zinc-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 mt-1.5">
                  <span>35 € (Velas / Vinos)</span>
                  <span>120 € (Taller / Moda)</span>
                  <span>750 € (iPhone 15 Pro)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm font-bold text-zinc-300">
                    2. Personas al mes que visitan tu web / Instagram / Google Maps:
                  </label>
                  <span className="text-2xl font-black text-white">{monthlyVisitors} visitas</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="6000"
                  step="100"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  style={{ accentColor: accent.hex }}
                  className="w-full h-2 bg-zinc-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="p-5 rounded-2xl bg-sky-400/10 border border-sky-400/40">
                <div className="text-xs font-bold uppercase text-[#38bdf8] mb-1">
                  Retorno de la Inversión (BUILD)
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">
                  Con solo{' '}
                  <span className="text-[#38bdf8] underline">
                    {salesToBreakEven} {salesToBreakEven === 1 ? 'venta' : 'ventas'}
                  </span>{' '}
                  de {avgTicket} € ya has amortizado el 100% de tu tienda.
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  A partir del pedido número {salesToBreakEven + 1}, todo el sistema trabaja para generarte
                  beneficio limpio mes tras mes.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0b0f17] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white">
                Proyección mensual con {monthlyVisitors} visitas:
              </h3>

              <div>
                <div className="flex justify-between text-xs text-zinc-400 mb-1.5">
                  <span>Web Tradicional o sin checkout (0.6% conv. · {traditionalSales} ventas)</span>
                  <span className="font-bold text-zinc-300">
                    {traditionalRevenue.toLocaleString('es-ES')} € / mes
                  </span>
                </div>
                <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-600 rounded-full" style={{ width: '24%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-bold text-[#38bdf8]">
                    ⚡ Tienda FRESH con Pay & Klarna (2.8% conv. · {freshSales} ventas)
                  </span>
                  <span className="font-black text-white">
                    {freshRevenue.toLocaleString('es-ES')} € / mes
                  </span>
                </div>
                <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#38bdf8] rounded-full" style={{ width: '92%' }} />
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-zinc-400">Facturación adicional estimada al mes:</div>
                  <div className="text-3xl font-black text-[#38bdf8]">
                    +{extraMonthlyRevenue.toLocaleString('es-ES')} € / mes
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#38bdf8] hover:bg-sky-300 text-slate-950 px-5 py-3 rounded-xl font-black text-xs sm:text-sm transition-all"
                >
                  Captar estas ventas →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="precio" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-3">
            INVERSIÓN ÚNICA · ENTREGA EN ≤ 7 DÍAS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Un solo paquete. Todo incluido.
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Creamos tu eCommerce en Shopify listo para vender y te enseñamos a gestionarlo. Sin cuotas
            mensuales de agencia ni ataduras.
          </p>

          <div className="inline-flex bg-[#0b0f17] p-1.5 rounded-2xl border border-white/10 mt-6">
            <button
              onClick={() => setPaymentPlan('single')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                paymentPlan === 'single' ? 'bg-white text-slate-950 font-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Pago Único
            </button>
            <button
              onClick={() => setPaymentPlan('split')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                paymentPlan === 'split'
                  ? 'bg-[#38bdf8] text-slate-950 font-black'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              En 3 Plazos al 0%
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#0b0f17] to-[#06080d] border-2 border-sky-400/45 rounded-[32px] p-8 sm:p-12 relative overflow-hidden shadow-[0_0_80px_rgba(56,189,248,0.14)]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/15 text-[#38bdf8] text-xs font-black mb-3">
                <Rocket size={14} />
                <span>BUILD — READY IN ≤ 7 DAYS*</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight">
                Creamos tu eCommerce en Shopify
              </h3>
              <p className="text-zinc-400 text-sm mt-1 max-w-md">
                Arquitectura en Shopify, diseño CRO enfocado a conversión, pasarelas 1 clic, analítica y
                formación 1 a 1 grabada.
              </p>
            </div>

            <div className="text-left md:text-right">
              {paymentPlan === 'single' ? (
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    997 € <span className="text-sm font-normal text-zinc-400">+ IVA</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Pago único · Propiedad 100% tuya</div>
                </div>
              ) : (
                <div>
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#38bdf8]">
                    332 € <span className="text-lg font-normal text-zinc-400">/ mes</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">En 3 plazos · 0% intereses</div>
                </div>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 my-8">
            {[
              'Arquitectura completa en Shopify OS 2.0 (Móvil + Desktop)',
              'Diseño CRO de fichas de producto, variantes, tallas y packs',
              'Sistema de Reservas / Citas de taller integrado (Opcional)',
              'Pasarelas en 1 Clic: Apple Pay, Google Pay, Tarjeta y Klarna',
              'Tracking completo: Meta Pixel, Google Analytics 4 y eventos',
              'Integración de Klaviyo y recuperación de carritos abandonados',
              'Conexión de dominio propio y entrega lista en ≤ 7 días*',
              'Formación 1 a 1 grabada para que tengas el control total'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-zinc-200">
                <div className="w-5 h-5 rounded-full bg-sky-400/15 text-[#38bdf8] flex items-center justify-center shrink-0">
                  <Check size={13} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-sky-400/10 border border-sky-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                <strong className="text-white">
                  📍 ¿Tienes un negocio físico referente en Torrent o Valencia?
                </strong>{' '}
                Consulta nuestra disponibilidad actual para acuerdos de Caso de Éxito local o intercambio
                estratégico.
              </div>
            </div>
            <button
              onClick={() => {
                setLeadGoal('Consultar acuerdo local');
                setIsModalOpen(true);
              }}
              className="text-xs font-black text-[#38bdf8] hover:text-white underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Consultar acuerdo local →
            </button>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#38bdf8] hover:bg-sky-300 text-slate-950 font-black py-5 rounded-2xl text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_35px_rgba(56,189,248,0.3)]"
          >
            <span>Empezar mi Proyecto BUILD</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-center mb-10">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-2xl bg-[#0b0f17] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 font-bold text-base sm:text-lg"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-[#38bdf8] transition-transform shrink-0 ${
                    openFaq === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === i && (
                <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 pt-20 pb-12 px-6 bg-[#04060a]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-4">
            ¿LISTO PARA VENDER EN PILOTO AUTOMÁTICO EN ≤ 7 DÍAS?
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-8 max-w-2xl">
            Tu tienda lista esta misma semana.
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#38bdf8] hover:bg-sky-300 text-slate-950 px-8 py-4 rounded-full font-black text-lg transition-transform hover:scale-105 shadow-[0_0_35px_rgba(56,189,248,0.3)]"
          >
            Empezar Proyecto BUILD
          </button>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 pt-8 border-t border-white/5 gap-4">
          <div className="font-black text-white text-base tracking-tighter">
            FRESH<span className="text-[#38bdf8]">.</span> AGENCY
          </div>
          <a
            href="https://likinagency.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            Formado en la metodología de Likin Agency ↗
          </a>
          <p>© 2026 Fresh Agency · Torrent, Valencia</p>
        </div>
      </footer>

      {/* PROJECT CONFIGURATOR MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0b0f17] border border-white/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setLeadSubmitted(false);
              }}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full bg-white/5"
            >
              <X size={18} />
            </button>

            {!leadSubmitted ? (
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] mb-1">
                  SISTEMA BUILD · READY IN ≤ 7 DAYS*
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-5">
                  Cuéntanos cómo es tu proyecto
                </h3>

                <div className="space-y-4">
                  {/* 1. TIPO DE NEGOCIO */}
                  <div>
                    <label className="text-xs font-bold text-zinc-400 block mb-2">
                      1. Tipo de negocio:
                    </label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        'Marca de moda / streetwear',
                        'Marca de productos (velas, vinos, suplementos, cosmética...)',
                        'Tienda física + reparaciones',
                        'Servicios'
                      ].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setLeadType(t)}
                          className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                            leadType === t
                              ? 'border-[#38bdf8] bg-sky-400/15 text-white shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                              : 'border-white/10 bg-[#06080d] text-zinc-400 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. MODALIDAD */}
                  <div>
                    <label className="text-xs font-bold text-zinc-400 block mb-2">
                      2. Modalidad:
                    </label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        'Crear mi eCommerce BUILD (lleva tu tienda al siguiente nivel)',
                        'Rediseñar mi tienda actual de Shopify',
                        'Trasladar mi tienda online actual a Shopify',
                        'Consultar acuerdo local',
                        'Quiero saber más información sobre FreshAgency, ¡Hablemos!'
                      ].map((g, idx) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setLeadGoal(g)}
                          className={`px-3.5 py-2.5 rounded-xl text-xs font-bold border text-left transition-all ${
                            idx === 4 ? 'sm:col-span-2' : ''
                          } ${
                            leadGoal === g
                              ? 'border-[#38bdf8] bg-[#38bdf8] text-slate-950 font-black shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                              : 'border-white/10 bg-[#06080d] text-zinc-400 hover:text-white'
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. NOMBRE DEL NEGOCIO */}
                  <div>
                    <label className="text-xs font-bold text-zinc-400 block mb-1.5">
                      3. Nombre de tu negocio:
                    </label>
                    <input
                      type="text"
                      placeholder="Escribe el nombre de tu tienda o marca..."
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full bg-[#06080d] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>

                  {/* 4. CÓMO QUIERES QUE TE CONTACTEMOS */}
                  <div>
                    <label className="text-xs font-bold text-zinc-400 block mb-2">
                      4. ¿Cómo quieres que te contactemos?
                    </label>
                    <div className="grid grid-cols-3 gap-2 mb-2.5">
                      {['WhatsApp', 'Instagram', 'Correo electrónico'].map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => {
                            setContactMethod(method);
                            setContactValue('');
                          }}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold border text-center transition-all ${
                            contactMethod === method
                              ? 'border-[#38bdf8] bg-sky-400/15 text-[#38bdf8] font-black shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                              : 'border-white/10 bg-[#06080d] text-zinc-400 hover:text-white'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>

                    <input
                      type={
                        contactMethod === 'Correo electrónico'
                          ? 'email'
                          : contactMethod === 'WhatsApp'
                          ? 'tel'
                          : 'text'
                      }
                      placeholder={getContactPlaceholder()}
                      value={contactValue}
                      onChange={(e) => setContactValue(e.target.value)}
                      className="w-full bg-[#06080d] border border-sky-400/40 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>

                  <button
                    onClick={async () => {
                      if (!leadName.trim() || !contactValue.trim()) {
                        alert('Por favor, indícanos el nombre de tu negocio y tu dato de contacto.');
                        return;
                      }
                      setIsSubmitting(true);
                      try {
                        const response = await fetch('https://api.web3forms.com/submit', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json'
                          },
                          body: JSON.stringify({
                            access_key: 'fc680331-2615-4134-9eed-082fc15e973e',
                            subject: `Nuevo Lead Fresh Agency: ${leadName} (${contactMethod})`,
                            'Nombre del Negocio': leadName,
                            'Tipo de Negocio': leadType,
                            'Modalidad Deseada': leadGoal,
                            'Vía de Contacto Preferida': contactMethod,
                            'Dato de Contacto': contactValue
                          })
                        });

                        if (response.status === 200) {
                          setLeadSubmitted(true);
                        } else {
                          alert('Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo.');
                        }
                      } catch (error) {
                        console.error(error);
                        alert('Hubo un error de conexión.');
                      } finally {
                        setIsSubmitting(false);
                      }
                    }}
                    disabled={isSubmitting}
                    className={`w-full bg-[#38bdf8] hover:bg-sky-300 text-slate-950 font-black py-4 rounded-xl text-sm mt-2 transition-all flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-75 cursor-wait' : ''
                    }`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitud →'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-sky-400/15 text-[#38bdf8] flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-2xl font-black">¡Solicitud Recibida!</h4>
                <p className="text-sm text-zinc-400">
                  Hemos recibido los datos de{' '}
                  <strong className="text-white">{leadName}</strong> ({leadType}). Te contactaremos muy
                  pronto vía <strong className="text-[#38bdf8]">{contactMethod}</strong> (
                  <span className="text-white">{contactValue}</span>).
                </p>
                <div className="p-4 rounded-xl bg-[#06080d] border border-white/10 text-xs text-left text-zinc-300 font-mono space-y-1">
                  <div>
                    <strong className="text-[#38bdf8]">Modalidad:</strong> {leadGoal}
                  </div>
                  <div>
                    <strong className="text-[#38bdf8]">Contacto ({contactMethod}):</strong> {contactValue}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setLeadSubmitted(false);
                  }}
                  className="w-full bg-white text-slate-950 font-black py-3.5 rounded-xl text-sm"
                >
                  Volver a la web
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
