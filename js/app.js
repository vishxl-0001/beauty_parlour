/**
 * TULA CIRA — Esthetic & Beauty (Sevilla)
 * Master Client-Side Application Bundle
 * Compatible with both file:// protocol and HTTP servers.
 */

(function () {
  'use strict';

  // ============================================================
  // 1. DATA CATALOG
  // ============================================================
  const SALON_INFO = {
    name: 'TULA CIRA',
    subtitle: 'Esthetic & Beauty',
    location: 'C. Juan Antonio Cavestany, 6, 41018 Sevilla, España',
    addressShort: 'C. Juan Antonio Cavestany, 6, Sevilla',
    phone: '+34 682 13 41 96',
    phoneRaw: '34682134196',
    instagram: '@tulaestheticbeauty',
    instagramUrl: 'https://www.instagram.com/tulaestheticbeauty/',
    mapsUrl: 'https://maps.google.com/?q=C.+Juan+Antonio+Cavestany,+6,+41018+Sevilla',
    rating: '5.0',
    reviewsCount: '11',
    scheduleNotice: 'Lunes a Sábado con cita previa'
  };

  const SERVICE_CATEGORIES = [
    { id: 'todos', name: 'Todos los tratamientos' },
    { id: 'faciales', name: 'Faciales' },
    { id: 'manicura', name: 'Manicura' },
    { id: 'extensiones-unas', name: 'Extensiones de Uñas' },
    { id: 'pedicura', name: 'Pedicura' },
    { id: 'pestanas-cejas', name: 'Pestañas & Cejas' },
    { id: 'pestanas', name: 'Extensiones de Pestañas' },
    { id: 'corporales', name: 'Tratamientos Corporales' },
    { id: 'masajes', name: 'Masajes & Bienestar' },
    { id: 'depilacion-facial', name: 'Depilación Facial' },
    { id: 'depilacion-corporal', name: 'Depilación Corporal' },
    { id: 'maquillaje', name: 'Maquillaje' }
  ];

  const SERVICES = [
    // MANICURA
    {
      id: 'mani-semi-basica',
      name: 'Manicura semipermanente básica',
      category: 'manicura',
      price: 18.95,
      formattedPrice: '18,95 €',
      duration: '30 min',
      description: 'Limpieza de cutículas, limado y esmaltado semipermanente de alta durabilidad.',
      featured: false
    },
    {
      id: 'mani-rubber',
      name: 'Manicura semipermanente Rubber',
      category: 'manicura',
      price: 20.95,
      formattedPrice: '20,95 €',
      duration: '40 min',
      description: 'Base Rubber con refuerzo flexible que nivela la uña natural aportando máxima resistencia.',
      featured: true
    },
    {
      id: 'mani-refuerzo-gel',
      name: 'Manicura semipermanente con refuerzo Gel',
      category: 'manicura',
      price: 23.00,
      formattedPrice: '23,00 €',
      duration: '45 min',
      description: 'Ideal para uñas frágiles o quebradizas con capa protectora de gel de refuerzo.',
      featured: false
    },
    {
      id: 'mani-rusa-corto',
      name: 'Manicura rusa — tamaño corto',
      category: 'manicura',
      price: 34.00,
      formattedPrice: '34,00 €',
      duration: '1 h 15 min',
      description: 'Técnica en seco con torno de precisión para un acabado impecable bajo cutícula.',
      featured: true
    },
    {
      id: 'mani-rusa-ml',
      name: 'Manicura rusa — tamaño M/L',
      category: 'manicura',
      price: 39.00,
      formattedPrice: '39,00 €',
      duration: '1 h 15 min',
      description: 'Manicura combinada perfeccionista con torno y nivelación en longitud media/larga.',
      featured: false
    },
    {
      id: 'mani-tradicional',
      name: 'Manicura tradicional',
      category: 'manicura',
      price: 15.00,
      formattedPrice: '15,00 €',
      duration: '30 min',
      description: 'Cuidado completo con esmalte clásico de secado al aire.',
      featured: false
    },
    {
      id: 'mani-sin-esmalte',
      name: 'Manicura sin esmaltado',
      category: 'manicura',
      price: 15.00,
      formattedPrice: '15,00 €',
      duration: '30 min',
      description: 'Tratamiento higiénico e hidratante con pulido natural y brillo protector.',
      featured: false
    },
    {
      id: 'mani-retirada',
      name: 'Retirada semipermanente',
      category: 'manicura',
      price: 6.00,
      formattedPrice: '6,00 €',
      duration: '15 min',
      description: 'Retirada cuidadosa sin dañar la queratina de la uña con nutrición final.',
      featured: false
    },
    {
      id: 'mani-reconstruccion',
      name: 'Reconstrucción de uña rota',
      category: 'manicura',
      price: 5.00,
      formattedPrice: '5,00 €',
      duration: '10 min',
      description: 'Reparación con fibra o acrygel devolviendo simetría perfecta.',
      featured: false
    },
    {
      id: 'mani-reparacion-1',
      name: 'Reparación de una uña',
      category: 'manicura',
      price: 1.00,
      formattedPrice: '1,00 €',
      duration: '5 min',
      description: 'Ajuste puntual o retoque de una sola uña.',
      featured: false
    },

    // EXTENSIONES DE UÑAS
    {
      id: 'ext-corto',
      name: 'Extensión de uñas — tamaño corto',
      category: 'extensiones-unas',
      price: 35.95,
      formattedPrice: '35,95 €',
      duration: '1 h 20 min',
      description: 'Esculpido en gel/acrílico sobre molde adaptado a la forma de tus manos.',
      featured: false
    },
    {
      id: 'ext-m',
      name: 'Extensión de uñas — tamaño M',
      category: 'extensiones-unas',
      price: 38.00,
      formattedPrice: '38,00 €',
      duration: '1 h 20 min',
      description: 'Largo medio estilizado con arquitectura y punto de estrés balanceado.',
      featured: false
    },
    {
      id: 'ext-l-xl',
      name: 'Extensión de uñas — tamaño L/XL',
      category: 'extensiones-unas',
      price: 43.00,
      formattedPrice: '43,00 €',
      duration: '1 h 35 min',
      description: 'Uñas largas esculpidas con precisión artística (almendra, coffin o stiletto).',
      featured: false
    },
    {
      id: 'relleno-corto',
      name: 'Relleno Gel / Polygel / Acrílico — corto',
      category: 'extensiones-unas',
      price: 28.00,
      formattedPrice: '28,00 €',
      duration: '1 h',
      description: 'Mantenimiento del crecimiento en extensiones cortas.',
      featured: false
    },
    {
      id: 'relleno-m',
      name: 'Relleno — tamaño M',
      category: 'extensiones-unas',
      price: 30.00,
      formattedPrice: '30,00 €',
      duration: '1 h',
      description: 'Equilibrado y relleno del ápice en extensiones medianas.',
      featured: false
    },
    {
      id: 'relleno-l-xl',
      name: 'Relleno — L/XL',
      category: 'extensiones-unas',
      price: 33.00,
      formattedPrice: '33,00 €',
      duration: '1 h 15 min',
      description: 'Mantenimiento integral de uñas largas.',
      featured: false
    },
    {
      id: 'retirada-extensiones',
      name: 'Retirada Acrílico / Gel / Polygel',
      category: 'extensiones-unas',
      price: 11.95,
      formattedPrice: '11,95 €',
      duration: '20 min',
      description: 'Retirada profesional sin debilitar tu lecho ungueal.',
      featured: false
    },

    // PEDICURA
    {
      id: 'pedi-basica',
      name: 'Pedicura básica',
      category: 'pedicura',
      price: 20.95,
      formattedPrice: '20,95 €',
      duration: '40 min',
      description: 'Corte, limado, tratamiento de cutículas e hidratación calmante.',
      featured: false
    },
    {
      id: 'pedi-tradicional',
      name: 'Pedicura esmalte tradicional',
      category: 'pedicura',
      price: 25.95,
      formattedPrice: '25,95 €',
      duration: '45 min',
      description: 'Pedicura completa con esmaltado clásico de alta pigmentación.',
      featured: false
    },
    {
      id: 'pedi-semi',
      name: 'Pedicura semipermanente',
      category: 'pedicura',
      price: 30.95,
      formattedPrice: '30,95 €',
      duration: '45 min',
      description: 'Pedicura integral con esmaltado semipermanente de brillo duradero.',
      featured: true
    },
    {
      id: 'pedi-durezas',
      name: 'Pedicura + tratamiento de durezas',
      category: 'pedicura',
      price: 33.00,
      formattedPrice: '33,00 €',
      duration: '1 h',
      description: 'Tratamiento podal intensivo para talones agrietados y durezas con exfoliación.',
      featured: false
    },
    {
      id: 'pedi-semi-durezas',
      name: 'Pedicura semipermanente + tratamiento de durezas',
      category: 'pedicura',
      price: 38.00,
      formattedPrice: '38,00 €',
      duration: '1 h',
      description: 'La experiencia podal completa: suavidad extrema y esmaltado impecable.',
      featured: false
    },
    {
      id: 'esmaltado-semi-pies',
      name: 'Esmaltado semipermanente de pies',
      category: 'pedicura',
      price: 18.95,
      formattedPrice: '18,95 €',
      duration: '25 min',
      description: 'Preparación rápida y color semipermanente.',
      featured: false
    },
    {
      id: 'retirada-pedi-semi',
      name: 'Retirada semipermanente pies',
      category: 'pedicura',
      price: 6.00,
      formattedPrice: '6,00 €',
      duration: '15 min',
      description: 'Retirada suave e hidratación con aceites esenciales.',
      featured: false
    },

    // PESTAÑAS (EXTENSIONES)
    {
      id: 'pestanas-clasicas',
      name: 'Extensiones clásicas',
      category: 'pestanas',
      price: 55.00,
      formattedPrice: '55,00 €',
      duration: '1 h 30 min',
      description: 'Técnica pelo a pelo para una mirada natural y sofisticada.',
      featured: false
    },
    {
      id: 'pestanas-vol-sutil',
      name: 'Volumen sutil',
      category: 'pestanas',
      price: 65.00,
      formattedPrice: '65,00 €',
      duration: '1 h 45 min',
      description: 'Abanicos ligeros 2D-3D que densifican la línea de pestañas con elegancia.',
      featured: false
    },
    {
      id: 'pestanas-vol-medio',
      name: 'Volumen medio',
      category: 'pestanas',
      price: 70.00,
      formattedPrice: '70,00 €',
      duration: '1 h 45 min',
      description: 'Mayor densidad y profundidad con abanicos hechos a mano.',
      featured: false
    },
    {
      id: 'pestanas-mega-vol',
      name: 'Mega volumen',
      category: 'pestanas',
      price: 85.00,
      formattedPrice: '85,00 €',
      duration: '1 h 45 min',
      description: 'Efecto aterciopelado ultranegro y máxima densidad.',
      featured: false
    },
    {
      id: 'relleno-clasicas',
      name: 'Relleno clásicas',
      category: 'pestanas',
      price: 44.00,
      formattedPrice: '44,00 €',
      duration: '1 h 30 min',
      description: 'Mantenimiento recomendado cada 2 a 3 semanas.',
      featured: false
    },
    {
      id: 'relleno-vol-sutil',
      name: 'Relleno volumen sutil',
      category: 'pestanas',
      price: 48.00,
      formattedPrice: '48,00 €',
      duration: '1 h 30 min',
      description: 'Reposición de abanicos 2D-3D.',
      featured: false
    },
    {
      id: 'relleno-vol-medio',
      name: 'Relleno volumen medio',
      category: 'pestanas',
      price: 50.00,
      formattedPrice: '50,00 €',
      duration: '1 h 30 min',
      description: 'Retoque y reemplazo de extensiones crecidas.',
      featured: false
    },
    {
      id: 'relleno-mega-vol',
      name: 'Relleno mega volumen',
      category: 'pestanas',
      price: 65.00,
      formattedPrice: '65,00 €',
      duration: '1 h 30 min',
      description: 'Mantenimiento del volumen ultra denso.',
      featured: false
    },
    {
      id: 'relleno-1-semana',
      name: 'Relleno / retoque 1 semana',
      category: 'pestanas',
      price: 23.00,
      formattedPrice: '23,00 €',
      duration: '40 min',
      description: 'Retoque exprés para eventos especiales o tras la primera semana.',
      featured: false
    },
    {
      id: 'retirada-pestanas',
      name: 'Retirada de extensiones',
      category: 'pestanas',
      price: 10.00,
      formattedPrice: '10,00 €',
      duration: '15 min',
      description: 'Disolución con crema profesional que respeta tu pestaña natural.',
      featured: false
    },

    // PESTAÑAS & CEJAS
    {
      id: 'lifting-pestanas',
      name: 'Lifting de pestañas',
      category: 'pestanas-cejas',
      price: 35.00,
      formattedPrice: '35,00 €',
      duration: '1 h',
      description: 'Curvatura natural duradera y tinte nutritivo con queratina.',
      featured: true
    },
    {
      id: 'laminado-cejas',
      name: 'Laminado de cejas',
      category: 'pestanas-cejas',
      price: 30.00,
      formattedPrice: '30,00 €',
      duration: '45 min',
      description: 'Fija y direcciona el vello de la ceja para un efecto peinado y definido.',
      featured: false
    },
    {
      id: 'pack-laminado-lifting',
      name: 'Pack laminado de cejas + lifting de pestañas',
      category: 'pestanas-cejas',
      price: 50.00,
      formattedPrice: '50,00 €',
      duration: '1 h 10 min',
      description: 'La combinación definitiva para realzar la mirada sin necesidad de maquillaje diario.',
      featured: false
    },

    // DEPILACIÓN FACIAL
    {
      id: 'depil-hilo-completo',
      name: 'Hilo cejas + labio + mentón/patillas',
      category: 'depilacion-facial',
      price: 15.95,
      formattedPrice: '15,95 €',
      duration: '15 min',
      description: 'Técnica milenaria con hilo 100% de algodón que no irrita la piel.',
      featured: false
    },
    {
      id: 'diseno-cejas-hilo',
      name: 'Diseño de cejas con hilo',
      category: 'depilacion-facial',
      price: 10.00,
      formattedPrice: '10,00 €',
      duration: '10 min',
      description: 'Visagismo y depilación milimétrica adaptada a tus facciones.',
      featured: false
    },
    {
      id: 'labio-hilo',
      name: 'Labio superior con hilo',
      category: 'depilacion-facial',
      price: 7.00,
      formattedPrice: '7,00 €',
      duration: '5 min',
      description: 'Rápido, limpio y suave sin riesgo de manchas solares.',
      featured: false
    },
    {
      id: 'diseno-cejas-pinzas-cera',
      name: 'Diseño de cejas con pinzas/cera',
      category: 'depilacion-facial',
      price: 8.00,
      formattedPrice: '8,00 €',
      duration: '10 min',
      description: 'Definición clásica de cejas con cera suave de baja temperatura.',
      featured: false
    },
    {
      id: 'labio-cera',
      name: 'Labio superior con cera',
      category: 'depilacion-facial',
      price: 6.00,
      formattedPrice: '6,00 €',
      duration: '5 min',
      description: 'Depilación rápida y eficaz.',
      featured: false
    },

    // DEPILACIÓN CORPORAL
    {
      id: 'depil-axilas',
      name: 'Axilas',
      category: 'depilacion-corporal',
      price: 10.00,
      formattedPrice: '10,00 €',
      duration: '10 min',
      description: 'Depilación higiénica con cera tibia.',
      featured: false
    },
    {
      id: 'depil-medias-piernas',
      name: 'Medias piernas — mujer',
      category: 'depilacion-corporal',
      price: 15.00,
      formattedPrice: '15,00 €',
      duration: '20 min',
      description: 'Desde rodilla o muslo con loción calmante posterior.',
      featured: false
    },
    {
      id: 'depil-piernas-completas',
      name: 'Piernas completas — mujer',
      category: 'depilacion-corporal',
      price: 20.00,
      formattedPrice: '20,00 €',
      duration: '25 min',
      description: 'Piernas completas con acabado sedoso e hidratante.',
      featured: false
    },
    {
      id: 'depil-medios-brazos',
      name: 'Medios brazos',
      category: 'depilacion-corporal',
      price: 12.00,
      formattedPrice: '12,00 €',
      duration: '10 min',
      description: 'Depilación suave de antebrazo.',
      featured: false
    },
    {
      id: 'depil-brazos-completos',
      name: 'Brazos completos',
      category: 'depilacion-corporal',
      price: 18.00,
      formattedPrice: '18,00 €',
      duration: '15 min',
      description: 'Brazos completos con loción hidratante.',
      featured: false
    },
    {
      id: 'depil-ingles-basicas',
      name: 'Ingles básicas',
      category: 'depilacion-corporal',
      price: 10.00,
      formattedPrice: '10,00 €',
      duration: '10 min',
      description: 'Depilación de contorno de bikini.',
      featured: false
    },
    {
      id: 'depil-ingles-brasilenas',
      name: 'Ingles brasileñas',
      category: 'depilacion-corporal',
      price: 15.00,
      formattedPrice: '15,00 €',
      duration: '15 min',
      description: 'Diseño reducido con cera elástica especial pieles delicadas.',
      featured: false
    },
    {
      id: 'depil-zona-intima',
      name: 'Zona íntima completa',
      category: 'depilacion-corporal',
      price: 25.00,
      formattedPrice: '25,00 €',
      duration: '30 min',
      description: 'Depilación integral con máxima delicadeza y confort.',
      featured: false
    },
    {
      id: 'depil-linea-alba',
      name: 'Línea del alba',
      category: 'depilacion-corporal',
      price: 5.00,
      formattedPrice: '5,00 €',
      duration: '5 min',
      description: 'Depilación puntual de zona abdominal.',
      featured: false
    },
    {
      id: 'depil-espalda-hombre',
      name: 'Espalda — hombre',
      category: 'depilacion-corporal',
      price: 15.00,
      formattedPrice: '15,00 €',
      duration: '15 min',
      description: 'Depilación masculina de espalda completa.',
      featured: false
    },

    // FACIALES
    {
      id: 'facial-higiene',
      name: 'Higiene facial',
      category: 'faciales',
      price: 35.00,
      formattedPrice: '35,00 €',
      duration: '45 min',
      description: 'Limpieza profunda, exfoliación suave y mascarilla purificante.',
      featured: false
    },
    {
      id: 'facial-personalizado',
      name: 'Tratamiento facial personalizado',
      category: 'faciales',
      price: 45.00,
      formattedPrice: '45,00 €',
      duration: '1 h',
      description: 'Diagnóstico previo y activos reestructurantes según las necesidades de tu piel.',
      featured: true
    },
    {
      id: 'facial-premium',
      name: 'Tratamiento facial premium',
      category: 'faciales',
      price: 55.00,
      formattedPrice: '55,00 €',
      duration: '1 h 15 min',
      description: 'Cuidado antiedad y luminosidad profunda con masaje kobido y sérums intensivos.',
      featured: false
    },

    // TRATAMIENTOS CORPORALES
    {
      id: 'corp-maderoterapia',
      name: 'Maderoterapia corporal',
      category: 'corporales',
      price: 45.00,
      formattedPrice: '45,00 €',
      duration: '1 h',
      description: 'Técnica holística con instrumentos anatómicos de madera para modelar, tonificar y drenar.',
      featured: true
    },
    {
      id: 'corp-drenaje-brasileno',
      name: 'Drenaje linfático moldeador brasileño',
      category: 'corporales',
      price: 45.00,
      formattedPrice: '45,00 €',
      duration: '1 h',
      description: 'Maniobras rítmicas profundas y desinfiltrantes para reducir volumen y esculpir la silueta.',
      featured: false
    },
    {
      id: 'corp-personalizado',
      name: 'Tratamiento corporal personalizado',
      category: 'corporales',
      price: 50.00,
      formattedPrice: '50,00 €',
      duration: '1 h',
      description: 'Protocolo a medida combinando aparatología suave o masaje reductor/reafirmante.',
      featured: false
    },

    // MASAJES
    {
      id: 'masaje-relajante',
      name: 'Masaje relajante',
      category: 'masajes',
      price: 40.00,
      formattedPrice: '40,00 €',
      duration: '50 min',
      description: 'Desconexión total con aceites botánicos calientes y presiones suaves descontracturantes.',
      featured: true
    },
    {
      id: 'masaje-corporal',
      name: 'Masaje corporal',
      category: 'masajes',
      price: 45.00,
      formattedPrice: '45,00 €',
      duration: '1 h',
      description: 'Masaje integral cuerpo entero aliviando tensiones musculares acumuladas.',
      featured: false
    },
    {
      id: 'masaje-maderoterapia-comb',
      name: 'Maderoterapia / masaje corporal',
      category: 'masajes',
      price: 45.00,
      formattedPrice: '45,00 €',
      duration: '1 h',
      description: 'Fusión de técnicas manuales y maderas nobles para bienestar y reactivación circulatoria.',
      featured: false
    },

    // MAQUILLAJE
    {
      id: 'maq-social',
      name: 'Maquillaje social',
      category: 'maquillaje',
      price: 40.00,
      formattedPrice: '40,00 €',
      duration: '1 h',
      description: 'Look elegante y duradero para comidas, cenas o eventos diurnos.',
      featured: false
    },
    {
      id: 'maq-evento',
      name: 'Maquillaje para evento',
      category: 'maquillaje',
      price: 50.00,
      formattedPrice: '50,00 €',
      duration: '1 h 15 min',
      description: 'Maquillaje de fiesta de alta fijación, pestañas individuales y acabado fotogénico impecable.',
      featured: false
    }
  ];

  // ============================================================
  // 2. BOOKING MODAL ENGINE
  // ============================================================
  class BookingModal {
    constructor() {
      this.currentStep = 1;
      this.selectedCategory = 'faciales';
      this.selectedService = null;
      this.selectedDate = null;
      this.selectedTime = null;
      this.contactData = {
        name: '',
        phone: '',
        email: '',
        notes: ''
      };

      this.viewDate = new Date();
      this.availableTimeSlots = ['10:00', '11:30', '13:00', '16:00', '17:30', '19:00'];

      this.initElements();
      this.bindEvents();
    }

    initElements() {
      this.drawer = document.getElementById('bookingDrawer');
      this.backdrop = document.getElementById('bookingBackdrop');
      this.panel = document.getElementById('bookingPanel');
      this.closeBtn = document.getElementById('closeBookingBtn');
      this.contentContainer = document.getElementById('bookingStepContent');
      this.stepIndicator = document.getElementById('bookingStepIndicator');
      this.drawerTitle = document.getElementById('bookingDrawerTitle');
      this.drawerSubtitle = document.getElementById('bookingDrawerSubtitle');
    }

    bindEvents() {
      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', () => this.close());
      }
      if (this.backdrop) {
        this.backdrop.addEventListener('click', () => this.close());
      }

      document.querySelectorAll('[data-open-booking]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const serviceId = btn.getAttribute('data-service-id');
          this.open(serviceId);
        });
      });

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.drawer && !this.drawer.classList.contains('hidden')) {
          this.close();
        }
      });
    }

    open(preselectedServiceId = null) {
      if (!this.drawer) return;
      document.body.classList.add('overflow-hidden');
      this.drawer.classList.remove('hidden');

      setTimeout(() => {
        if (this.backdrop) {
          this.backdrop.classList.remove('opacity-0');
          this.backdrop.classList.add('opacity-100');
        }
        if (this.panel) {
          this.panel.classList.remove('translate-x-full');
          this.panel.classList.add('translate-x-0');
        }
      }, 10);

      if (preselectedServiceId) {
        const s = SERVICES.find(item => item.id === preselectedServiceId);
        if (s) {
          this.selectedService = s;
          this.selectedCategory = s.category;
          this.currentStep = 3;
          this.render();
          return;
        }
      }

      if (!this.selectedService) {
        this.currentStep = 1;
      }
      this.render();
    }

    close() {
      if (!this.drawer) return;
      if (this.backdrop) {
        this.backdrop.classList.remove('opacity-100');
        this.backdrop.classList.add('opacity-0');
      }
      if (this.panel) {
        this.panel.classList.remove('translate-x-0');
        this.panel.classList.add('translate-x-full');
      }

      setTimeout(() => {
        this.drawer.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }, 350);
    }

    goToStep(step) {
      this.currentStep = step;
      this.render();
      if (this.panel) this.panel.scrollTop = 0;
    }

    render() {
      this.updateHeaderAndProgress();

      switch (this.currentStep) {
        case 1:
          this.renderStep1Categories();
          break;
        case 2:
          this.renderStep2Services();
          break;
        case 3:
          this.renderStep3Date();
          break;
        case 4:
          this.renderStep4Time();
          break;
        case 5:
          this.renderStep5Contact();
          break;
        case 6:
          this.renderStep6Confirmation();
          break;
        default:
          this.renderStep1Categories();
      }
    }

    updateHeaderAndProgress() {
      const titles = {
        1: { title: 'Elige tu tratamiento', sub: 'Paso 1 de 5 · Selecciona la categoría' },
        2: { title: 'Selecciona el servicio', sub: 'Paso 2 de 5 · Tratamientos disponibles' },
        3: { title: 'Selecciona una fecha', sub: 'Paso 3 de 5 · Disponibilidad en Sevilla' },
        4: { title: 'Elige una hora', sub: 'Paso 4 de 5 · Horarios disponibles' },
        5: { title: 'Tus datos de contacto', sub: 'Paso 5 de 5 · Confirmación personalizada' },
        6: { title: 'Solicitud lista', sub: 'TULA CIRA Esthetic & Beauty' }
      };

      const info = titles[this.currentStep] || titles[1];
      if (this.drawerTitle) this.drawerTitle.textContent = info.title;
      if (this.drawerSubtitle) this.drawerSubtitle.textContent = info.sub;

      if (this.stepIndicator) {
        if (this.currentStep === 6) {
          this.stepIndicator.innerHTML = `
            <div class="w-full bg-[#B98F8B] h-1 rounded-full"></div>
          `;
        } else {
          const percent = ((this.currentStep - 1) / 4) * 100;
          this.stepIndicator.innerHTML = `
            <div class="w-full bg-[#E8D5D1] h-1 rounded-full overflow-hidden">
              <div class="bg-[#2D2524] h-full transition-all duration-300" style="width: ${Math.max(15, percent)}%"></div>
            </div>
          `;
        }
      }
    }

    renderStep1Categories() {
      const categories = SERVICE_CATEGORIES.filter(c => c.id !== 'todos');
      
      let html = `
        <div class="space-y-4">
          <p class="text-xs uppercase tracking-widest text-[#6E514E] font-medium">Categorías de belleza y estética</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      `;

      categories.forEach(cat => {
        const count = SERVICES.filter(s => s.category === cat.id).length;
        const isSelected = this.selectedCategory === cat.id;
        html += `
          <button 
            type="button" 
            data-cat-id="${cat.id}"
            class="step1-cat-btn text-left p-4 rounded-sm border transition-all duration-200 flex flex-col justify-between ${
              isSelected 
                ? 'border-[#2D2524] bg-[#2D2524] text-[#FFFDFB]' 
                : 'border-[#E8D5D1]/60 bg-[#FFFDFB] text-[#2D2524] hover:border-[#B98F8B] hover:bg-[#F8F3F0]'
            }"
          >
            <div class="font-serif text-lg tracking-wide ${isSelected ? 'text-[#FFFDFB]' : 'text-[#2D2524]'}">${cat.name}</div>
            <div class="text-xs mt-2 ${isSelected ? 'text-[#D7B8B4]' : 'text-[#6E514E]'} font-normal">${count} servicios</div>
          </button>
        `;
      });

      html += `
          </div>
        </div>
      `;

      this.contentContainer.innerHTML = html;

      this.contentContainer.querySelectorAll('.step1-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          this.selectedCategory = btn.getAttribute('data-cat-id');
          this.goToStep(2);
        });
      });
    }

    renderStep2Services() {
      const categoryObj = SERVICE_CATEGORIES.find(c => c.id === this.selectedCategory);
      const categoryServices = SERVICES.filter(s => s.category === this.selectedCategory);

      let html = `
        <div class="space-y-4">
          <div class="flex items-center justify-between pb-2 border-b border-[#E8D5D1]/50">
            <button type="button" id="backToStep1Btn" class="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#6E514E] hover:text-[#2D2524] transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              Cambiar categoría
            </button>
            <span class="text-xs uppercase tracking-wider text-[#B98F8B] font-semibold">${categoryObj ? categoryObj.name : ''}</span>
          </div>

          <div class="space-y-2.5">
      `;

      categoryServices.forEach(s => {
        const isSelected = this.selectedService && this.selectedService.id === s.id;
        html += `
          <div class="p-4 bg-[#FFFDFB] rounded-sm border ${isSelected ? 'border-[#2D2524] ring-1 ring-[#2D2524]' : 'border-[#E8D5D1]/60 hover:border-[#B98F8B]'} transition-all flex flex-col justify-between gap-3">
            <div>
              <div class="flex items-start justify-between gap-3">
                <h4 class="font-serif text-lg text-[#2D2524] leading-snug">${s.name}</h4>
                <div class="font-serif text-lg font-medium text-[#2D2524] whitespace-nowrap">${s.formattedPrice}</div>
              </div>
              <p class="text-xs text-[#6E514E] mt-1 line-clamp-2 leading-relaxed">${s.description}</p>
              <div class="flex items-center gap-1 text-[11px] text-[#B98F8B] mt-2 font-medium">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>${s.duration}</span>
              </div>
            </div>
            <div class="pt-2 border-t border-[#FAF7F4] flex justify-end">
              <button 
                type="button" 
                data-choose-service="${s.id}" 
                class="px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all ${
                  isSelected 
                    ? 'bg-[#2D2524] text-[#FFFDFB]' 
                    : 'bg-[#FAF7F4] text-[#2D2524] border border-[#D7B8B4] hover:bg-[#2D2524] hover:text-[#FFFDFB]'
                }"
              >
                ${isSelected ? 'Seleccionado ✓' : 'Elegir tratamiento'}
              </button>
            </div>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;

      this.contentContainer.innerHTML = html;

      document.getElementById('backToStep1Btn')?.addEventListener('click', () => this.goToStep(1));

      this.contentContainer.querySelectorAll('[data-choose-service]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-choose-service');
          this.selectedService = SERVICES.find(s => s.id === id);
          this.goToStep(3);
        });
      });
    }

    renderStep3Date() {
      const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      const daysWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

      const year = this.viewDate.getFullYear();
      const month = this.viewDate.getMonth();
      const monthName = months[month];

      const firstDay = new Date(year, month, 1);
      let startDayOffset = firstDay.getDay() - 1;
      if (startDayOffset === -1) startDayOffset = 6;

      const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      let html = `
        <div class="space-y-4">
          <div class="p-3 bg-[#FAF7F4] border border-[#E8D5D1] rounded-sm flex items-center justify-between">
            <div>
              <div class="text-[11px] uppercase tracking-wider text-[#6E514E]">Servicio seleccionado</div>
              <div class="font-serif text-base text-[#2D2524] font-medium leading-tight">${this.selectedService ? this.selectedService.name : 'Tratamiento'}</div>
              <div class="text-xs text-[#B98F8B] font-medium mt-0.5">${this.selectedService ? this.selectedService.formattedPrice : ''} · ${this.selectedService ? this.selectedService.duration : ''}</div>
            </div>
            <button type="button" id="changeServiceBtn" class="text-xs underline text-[#6E514E] hover:text-[#2D2524]">Cambiar</button>
          </div>

          <div class="bg-[#FFFDFB] p-4 rounded-sm border border-[#E8D5D1]/70">
            <div class="flex items-center justify-between mb-4 pb-2 border-b border-[#FAF7F4]">
              <h4 class="font-serif text-xl text-[#2D2524] font-medium tracking-wide">${monthName} ${year}</h4>
              <div class="flex items-center gap-1">
                <button type="button" id="prevMonthBtn" class="p-1.5 rounded text-[#6E514E] hover:bg-[#FAF7F4] hover:text-[#2D2524] transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button type="button" id="nextMonthBtn" class="p-1.5 rounded text-[#6E514E] hover:bg-[#FAF7F4] hover:text-[#2D2524] transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>

            <div class="grid grid-cols-7 gap-1 text-center text-[11px] uppercase tracking-wider text-[#6E514E] font-medium mb-2">
              ${daysWeek.map(d => `<div>${d}</div>`).join('')}
            </div>

            <div class="grid grid-cols-7 gap-1.5 text-center">
      `;

      for (let i = 0; i < startDayOffset; i++) {
        html += `<div class="h-9"></div>`;
      }

      for (let day = 1; day <= lastDayOfMonth; day++) {
        const currentDate = new Date(year, month, day);
        currentDate.setHours(0, 0, 0, 0);

        const dayOfWeek = currentDate.getDay();
        const isPast = currentDate < today;
        const isSunday = dayOfWeek === 0;
        const isDisabled = isPast || isSunday;

        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const isSelected = this.selectedDate === dateStr;

        html += `
          <button 
            type="button"
            data-date-str="${dateStr}"
            ${isDisabled ? 'disabled' : ''}
            class="calendar-day-btn h-9 w-full flex items-center justify-center text-xs font-medium rounded-sm transition-all ${
              isSelected 
                ? 'selected bg-[#2D2524] text-[#FFFDFB]' 
                : isDisabled
                  ? 'text-[#C7A29E]/40 cursor-not-allowed bg-transparent'
                  : 'text-[#2D2524] hover:bg-[#E8D5D1]/50 bg-[#FAF7F4]/60'
            }"
          >
            ${day}
          </button>
        `;
      }

      html += `
            </div>
          </div>

          <div class="flex items-center justify-between pt-2">
            <button type="button" id="backToStep2Btn" class="text-xs uppercase tracking-wider text-[#6E514E] hover:text-[#2D2524] flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              Volver a servicios
            </button>
            <button 
              type="button" 
              id="continueToStep4Btn" 
              ${!this.selectedDate ? 'disabled' : ''} 
              class="btn-luxury-primary text-xs ${!this.selectedDate ? 'opacity-40 cursor-not-allowed' : ''}"
            >
              Continuar a Horas
            </button>
          </div>
        </div>
      `;

      this.contentContainer.innerHTML = html;

      document.getElementById('changeServiceBtn')?.addEventListener('click', () => this.goToStep(2));
      document.getElementById('backToStep2Btn')?.addEventListener('click', () => this.goToStep(2));

      document.getElementById('prevMonthBtn')?.addEventListener('click', () => {
        this.viewDate.setMonth(this.viewDate.getMonth() - 1);
        this.renderStep3Date();
      });

      document.getElementById('nextMonthBtn')?.addEventListener('click', () => {
        this.viewDate.setMonth(this.viewDate.getMonth() + 1);
        this.renderStep3Date();
      });

      this.contentContainer.querySelectorAll('[data-date-str]').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.disabled) return;
          this.selectedDate = btn.getAttribute('data-date-str');
          this.goToStep(4);
        });
      });

      document.getElementById('continueToStep4Btn')?.addEventListener('click', () => {
        if (this.selectedDate) {
          this.goToStep(4);
        }
      });
    }

    renderStep4Time() {
      const formattedDatePretty = this.formatDatePretty(this.selectedDate);

      let html = `
        <div class="space-y-5">
          <div class="p-3.5 bg-[#FAF7F4] border border-[#E8D5D1] rounded-sm flex items-center justify-between">
            <div>
              <div class="text-[11px] uppercase tracking-wider text-[#6E514E]">Cita seleccionada</div>
              <div class="font-serif text-lg text-[#2D2524] font-medium leading-tight">${this.selectedService ? this.selectedService.name : ''}</div>
              <div class="text-xs text-[#B98F8B] font-medium mt-1 flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                <span>${formattedDatePretty}</span>
              </div>
            </div>
            <button type="button" id="changeDateBtn" class="text-xs underline text-[#6E514E] hover:text-[#2D2524]">Cambiar fecha</button>
          </div>

          <div>
            <p class="text-xs uppercase tracking-widest text-[#6E514E] font-medium mb-3">Horas disponibles para este día</p>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      `;

      this.availableTimeSlots.forEach(time => {
        const isSelected = this.selectedTime === time;
        html += `
          <button 
            type="button" 
            data-time-slot="${time}"
            class="time-slot-btn py-3 px-4 border rounded-sm text-center font-medium text-sm transition-all ${
              isSelected 
                ? 'selected bg-[#2D2524] text-[#FFFDFB] border-[#2D2524]' 
                : 'border-[#E8D5D1] bg-[#FFFDFB] text-[#2D2524] hover:border-[#B98F8B] hover:bg-[#FAF7F4]'
            }"
          >
            <span class="block">${time}</span>
            <span class="block text-[10px] text-[#B98F8B] uppercase tracking-wider mt-0.5">Disponible</span>
          </button>
        `;
      });

      html += `
            </div>
            <p class="text-[11px] text-[#6E514E] mt-3 italic text-center">Horario continuo con cita previa en C. Juan Antonio Cavestany, 6</p>
          </div>

          <div class="flex items-center justify-between pt-3 border-t border-[#FAF7F4]">
            <button type="button" id="backToStep3Btn" class="text-xs uppercase tracking-wider text-[#6E514E] hover:text-[#2D2524] flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              Volver a fecha
            </button>
            <button 
              type="button" 
              id="continueToStep5Btn" 
              ${!this.selectedTime ? 'disabled' : ''} 
              class="btn-luxury-primary text-xs ${!this.selectedTime ? 'opacity-40 cursor-not-allowed' : ''}"
            >
              Continuar a tus datos
            </button>
          </div>
        </div>
      `;

      this.contentContainer.innerHTML = html;

      document.getElementById('changeDateBtn')?.addEventListener('click', () => this.goToStep(3));
      document.getElementById('backToStep3Btn')?.addEventListener('click', () => this.goToStep(3));

      this.contentContainer.querySelectorAll('[data-time-slot]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.selectedTime = btn.getAttribute('data-time-slot');
          this.goToStep(5);
        });
      });

      document.getElementById('continueToStep5Btn')?.addEventListener('click', () => {
        if (this.selectedTime) {
          this.goToStep(5);
        }
      });
    }

    renderStep5Contact() {
      const formattedDatePretty = this.formatDatePretty(this.selectedDate);

      let html = `
        <form id="bookingContactForm" class="space-y-4">
          <div class="p-4 bg-[#FAF7F4] border border-[#E8D5D1] rounded-sm space-y-2">
            <div class="text-[11px] uppercase tracking-widest text-[#B98F8B] font-semibold">Resumen de tu reserva</div>
            <div class="flex items-start justify-between">
              <div class="font-serif text-lg text-[#2D2524]">${this.selectedService ? this.selectedService.name : ''}</div>
              <div class="font-serif text-lg font-medium text-[#2D2524]">${this.selectedService ? this.selectedService.formattedPrice : ''}</div>
            </div>
            <div class="text-xs text-[#6E514E] flex flex-wrap gap-x-4 gap-y-1 pt-1 border-t border-[#E8D5D1]/40">
              <span>📅 ${formattedDatePretty}</span>
              <span>⏰ ${this.selectedTime} h</span>
              <span>⏳ ${this.selectedService ? this.selectedService.duration : ''}</span>
            </div>
          </div>

          <div class="space-y-3 pt-1">
            <div>
              <label class="block text-xs uppercase tracking-wider text-[#2D2524] font-medium mb-1">Nombre completo *</label>
              <input 
                type="text" 
                id="clientNameInput" 
                required
                value="${this.contactData.name}"
                placeholder="Ej. Carmen Sánchez" 
                class="w-full px-3.5 py-2.5 bg-[#FFFDFB] border border-[#E8D5D1] text-sm text-[#2D2524] focus:outline-none focus:border-[#2D2524] transition-colors rounded-sm"
              />
            </div>

            <div>
              <label class="block text-xs uppercase tracking-wider text-[#2D2524] font-medium mb-1">Teléfono móvil *</label>
              <input 
                type="tel" 
                id="clientPhoneInput" 
                required
                value="${this.contactData.phone}"
                placeholder="Ej. +34 600 00 00 00" 
                class="w-full px-3.5 py-2.5 bg-[#FFFDFB] border border-[#E8D5D1] text-sm text-[#2D2524] focus:outline-none focus:border-[#2D2524] transition-colors rounded-sm"
              />
            </div>

            <div>
              <label class="block text-xs uppercase tracking-wider text-[#2D2524] font-medium mb-1">Correo electrónico</label>
              <input 
                type="email" 
                id="clientEmailInput" 
                value="${this.contactData.email}"
                placeholder="tu.email@ejemplo.com" 
                class="w-full px-3.5 py-2.5 bg-[#FFFDFB] border border-[#E8D5D1] text-sm text-[#2D2524] focus:outline-none focus:border-[#2D2524] transition-colors rounded-sm"
              />
            </div>

            <div>
              <label class="block text-xs uppercase tracking-wider text-[#2D2524] font-medium mb-1">Observaciones o preferencias</label>
              <textarea 
                id="clientNotesInput" 
                rows="2" 
                placeholder="¿Alguna necesidad específica o diseño especial?" 
                class="w-full px-3.5 py-2 bg-[#FFFDFB] border border-[#E8D5D1] text-sm text-[#2D2524] focus:outline-none focus:border-[#2D2524] transition-colors rounded-sm"
              >${this.contactData.notes}</textarea>
            </div>
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-[#FAF7F4]">
            <button type="button" id="backToStep4Btn" class="text-xs uppercase tracking-wider text-[#6E514E] hover:text-[#2D2524] flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              Volver a hora
            </button>
            <button 
              type="submit" 
              class="btn-luxury-primary text-xs"
            >
              Confirmar solicitud
            </button>
          </div>
        </form>
      `;

      this.contentContainer.innerHTML = html;

      document.getElementById('backToStep4Btn')?.addEventListener('click', () => this.goToStep(4));

      const form = document.getElementById('bookingContactForm');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('clientNameInput').value.trim();
        const phone = document.getElementById('clientPhoneInput').value.trim();
        const email = document.getElementById('clientEmailInput').value.trim();
        const notes = document.getElementById('clientNotesInput').value.trim();

        if (!name || !phone) {
          alert('Por favor, indica tu nombre y teléfono de contacto.');
          return;
        }

        this.contactData = { name, phone, email, notes };
        this.goToStep(6);
      });
    }

    renderStep6Confirmation() {
      const formattedDatePretty = this.formatDatePretty(this.selectedDate);
      const serviceName = this.selectedService ? this.selectedService.name : 'Tratamiento';
      const clientName = this.contactData.name || 'Cliente';

      const waText = encodeURIComponent(
        `Hola, soy ${clientName}. Me gustaría reservar una cita en TULA CIRA para el servicio de *${serviceName}* (${this.selectedService ? this.selectedService.formattedPrice : ''}) el día *${formattedDatePretty}* a las *${this.selectedTime} h*. ¿Tenéis disponibilidad? Muchas gracias.`
      );
      const waUrl = `https://wa.me/${SALON_INFO.phoneRaw}?text=${waText}`;

      let html = `
        <div class="space-y-6 text-center py-4 animate-fade-in">
          <div class="w-16 h-16 mx-auto bg-[#E8D5D1]/60 rounded-full flex items-center justify-center text-[#2D2524]">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"/></svg>
          </div>

          <div>
            <span class="inline-block px-3 py-1 bg-[#FAF7F4] border border-[#B98F8B] text-[#6E514E] text-[11px] uppercase tracking-widest font-semibold mb-2">
              SOLICITUD ENVIADA
            </span>
            <h3 class="font-serif text-3xl text-[#2D2524] tracking-wide">Tu cita está en preparación</h3>
            <p class="text-xs text-[#6E514E] mt-2 max-w-xs mx-auto leading-relaxed">
              Gracias por elegir <span class="font-semibold text-[#2D2524]">TULA CIRA Esthetic & Beauty</span>. Te esperamos en nuestro estudio en Sevilla.
            </p>
          </div>

          <div class="bg-[#FFFDFB] p-5 border border-[#E8D5D1] rounded-sm text-left max-w-sm mx-auto shadow-sm space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-[#FAF7F4]">
              <span class="text-[11px] uppercase tracking-widest text-[#B98F8B]">Detalle de reserva</span>
              <span class="font-serif text-lg font-medium text-[#2D2524]">${this.selectedService ? this.selectedService.formattedPrice : ''}</span>
            </div>
            <div>
              <div class="font-serif text-xl text-[#2D2524] leading-snug">${serviceName}</div>
              <div class="text-xs text-[#6E514E] mt-1">Duración estimada: ${this.selectedService ? this.selectedService.duration : ''}</div>
            </div>
            <div class="pt-2 border-t border-[#FAF7F4] text-xs space-y-1 text-[#2D2524]">
              <div><strong>Fecha:</strong> ${formattedDatePretty}</div>
              <div><strong>Hora:</strong> ${this.selectedTime} h</div>
              <div><strong>Nombre:</strong> ${clientName}</div>
              <div><strong>Teléfono:</strong> ${this.contactData.phone}</div>
              <div><strong>Ubicación:</strong> ${SALON_INFO.addressShort}</div>
            </div>
          </div>

          <div class="space-y-3 max-w-sm mx-auto">
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-luxury-rose w-full text-xs py-3.5 tracking-wider font-semibold"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-1.127-.066-.271-.088-.619-.202-1.069-.398-1.895-.824-3.125-2.748-3.219-2.875-.095-.127-.777-1.033-.777-1.969 0-.937.49-1.398.664-1.589.174-.19.38-.238.507-.238.127 0 .253.001.364.007.119.006.277-.045.433.329.163.392.556 1.356.604 1.455.048.099.08.214.016.341-.063.127-.095.206-.19.317-.095.111-.2.248-.286.333-.095.095-.194.198-.083.389.111.19.493.813 1.058 1.316.727.647 1.34.848 1.531.943.19.095.301.079.412-.048.111-.127.476-.555.603-.745.127-.19.254-.159.428-.095.175.063 1.111.524 1.301.619.19.095.317.143.365.222.047.079.047.46-.096.865z"/></svg>
              CONTINUAR POR WHATSAPP
            </a>

            <button 
              type="button" 
              id="finishBookingBtn"
              class="btn-luxury-outline w-full text-xs py-3"
            >
              Cerrar ventana
            </button>
          </div>
        </div>
      `;

      this.contentContainer.innerHTML = html;

      document.getElementById('finishBookingBtn')?.addEventListener('click', () => {
        this.close();
        setTimeout(() => {
          this.currentStep = 1;
          this.selectedService = null;
          this.selectedDate = null;
          this.selectedTime = null;
        }, 500);
      });
    }

    formatDatePretty(dateStr) {
      if (!dateStr) return '';
      const parts = dateStr.split('-');
      const date = new Date(parts[0], parseInt(parts[1]) - 1, parts[2]);
      const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      return `${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]}`;
    }
  }

  // ============================================================
  // 3. UI INITIALIZATION & EVENT LISTENERS
  // ============================================================
  document.addEventListener('DOMContentLoaded', () => {
    const bookingEngine = new BookingModal();
    window.tulaBooking = bookingEngine;

    // Navbar scroll
    const navbar = document.getElementById('mainNavbar');
    if (navbar) {
      const handleScroll = () => {
        if (window.scrollY > 40) {
          navbar.classList.add('bg-[#FFFDFB]/95', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-[#E8D5D1]/40', 'py-3.5');
          navbar.classList.remove('bg-transparent', 'py-5');
        } else {
          navbar.classList.remove('bg-[#FFFDFB]/95', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-[#E8D5D1]/40', 'py-3.5');
          navbar.classList.add('bg-transparent', 'py-5');
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    // Mobile nav drawer
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenuDrawer');
    const closeBtn = document.getElementById('closeMobileMenuBtn');
    const links = document.querySelectorAll('.mobile-nav-link');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      });
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          document.body.classList.remove('overflow-hidden');
        });
      }
      links.forEach(l => {
        l.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          document.body.classList.remove('overflow-hidden');
        });
      });
    }

    // Render Signature Services (6 featured treatments)
    const signatureContainer = document.getElementById('signatureServicesGrid');
    if (signatureContainer) {
      const signatureList = [
        {
          id: 'mani-rusa-corto',
          name: 'Manicura rusa',
          detail: 'Técnica en seco con torno de precisión y esmaltado impecable',
          price: '34 €',
          duration: '1 h 15 min',
          tag: 'Cuidado de Uñas',
          image: './assets/editorial-manicure.jpg'
        },
        {
          id: 'pedi-semi',
          name: 'Pedicura semipermanente',
          detail: 'Limpieza profunda, exfoliación botánica y brillo de larga duración',
          price: '30,95 €',
          duration: '45 min',
          tag: 'Pies & Bienestar',
          image: './assets/authentic-nail-art.jpg'
        },
        {
          id: 'facial-personalizado',
          name: 'Tratamiento facial personalizado',
          detail: 'Diagnóstico estético y principios activos adaptados a tu tipo de piel',
          price: '45 €',
          duration: '1 h',
          tag: 'Estética Facial',
          image: './assets/hero-facial.jpg'
        },
        {
          id: 'lifting-pestanas',
          name: 'Lifting de pestañas',
          detail: 'Curvatura natural elegante, tinte y nutrición intensiva de queratina',
          price: '35 €',
          duration: '1 h',
          tag: 'Mirada Sublime',
          image: './assets/lashes-brows.jpg'
        },
        {
          id: 'corp-maderoterapia',
          name: 'Maderoterapia corporal',
          detail: 'Técnica moldeadora con maderas nobles para tonificar y drenar',
          price: '45 €',
          duration: '1 h',
          tag: 'Remodelación',
          image: './assets/body-maderoterapia.jpg'
        },
        {
          id: 'masaje-relajante',
          name: 'Masaje relajante',
          detail: 'Pausa y desconexión integral con aceites aromáticos templados',
          price: '40 €',
          duration: '50 min',
          tag: 'Bienestar & Spa',
          image: './assets/studio-interior.jpg'
        }
      ];

      signatureContainer.innerHTML = signatureList.map(item => `
        <div class="group relative bg-[#FFFDFB] border border-[#E8D5D1]/80 hover:border-[#B98F8B] transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div class="relative h-56 sm:h-64 overflow-hidden bg-[#FAF7F4]">
            <img 
              src="${item.image}" 
              alt="${item.name}" 
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#2D2524]/60 via-transparent to-transparent"></div>
            <span class="absolute top-3 left-3 bg-[#FFFDFB]/95 backdrop-blur-xs text-[#2D2524] text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-xs font-semibold">
              ${item.tag}
            </span>
            <div class="absolute bottom-3 right-3 text-right">
              <span class="font-serif text-2xl text-[#FFFDFB] font-semibold tracking-wide drop-shadow-sm">${item.price}</span>
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h4 class="font-serif text-2xl text-[#2D2524] leading-snug group-hover:text-[#6E514E] transition-colors">${item.name}</h4>
              <p class="text-xs text-[#6E514E] mt-2 leading-relaxed font-normal">${item.detail}</p>
            </div>

            <div class="pt-4 mt-4 border-t border-[#FAF7F4] flex items-center justify-between">
              <div class="flex items-center gap-1.5 text-xs text-[#B98F8B]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>${item.duration}</span>
              </div>

              <button 
                type="button" 
                data-signature-reserve="${item.id}"
                class="text-xs uppercase tracking-widest font-semibold text-[#2D2524] hover:text-[#B98F8B] flex items-center gap-1 transition-colors"
              >
                <span>Reservar</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      `).join('');

      signatureContainer.querySelectorAll('[data-signature-reserve]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-signature-reserve');
          bookingEngine.open(id);
        });
      });
    }

    // Render Service Explorer
    const tabsContainer = document.getElementById('serviceCategoryTabs');
    const listContainer = document.getElementById('serviceListContainer');
    const searchInput = document.getElementById('serviceSearchInput');
    const countBadge = document.getElementById('serviceCountBadge');

    if (tabsContainer && listContainer) {
      let activeCategory = 'todos';
      let searchTerm = '';

      tabsContainer.innerHTML = SERVICE_CATEGORIES.map(cat => `
        <button 
          type="button" 
          data-category="${cat.id}"
          class="cat-pill whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wider rounded-full border border-[#D7B8B4]/70 transition-all font-medium ${
            cat.id === 'todos' ? 'active' : 'bg-[#FFFDFB] text-[#6E514E]'
          }"
        >
          ${cat.name}
        </button>
      `).join('');

      const renderServices = () => {
        let filtered = SERVICES;

        if (activeCategory !== 'todos') {
          filtered = filtered.filter(s => s.category === activeCategory);
        }

        if (searchTerm.trim() !== '') {
          const term = searchTerm.toLowerCase();
          filtered = filtered.filter(s => 
            s.name.toLowerCase().includes(term) || 
            s.description.toLowerCase().includes(term)
          );
        }

        if (countBadge) {
          countBadge.textContent = `${filtered.length} tratamientos`;
        }

        if (filtered.length === 0) {
          listContainer.innerHTML = `
            <div class="py-12 text-center text-[#6E514E] border border-dashed border-[#E8D5D1] rounded-sm p-8">
              <p class="font-serif text-xl text-[#2D2524]">No se encontraron tratamientos</p>
              <p class="text-xs mt-1">Prueba con otra palabra o selecciona otra categoría.</p>
              <button type="button" id="resetFiltersBtn" class="mt-4 px-4 py-2 text-xs uppercase tracking-wider bg-[#2D2524] text-[#FFFDFB]">
                Ver todos los servicios
              </button>
            </div>
          `;
          document.getElementById('resetFiltersBtn')?.addEventListener('click', () => {
            activeCategory = 'todos';
            if (searchInput) searchInput.value = '';
            searchTerm = '';
            updateActiveTab();
            renderServices();
          });
          return;
        }

        let html = '';

        if (activeCategory === 'todos' && !searchTerm) {
          SERVICE_CATEGORIES.filter(c => c.id !== 'todos').forEach(cat => {
            const catServices = filtered.filter(s => s.category === cat.id);
            if (catServices.length === 0) return;

            html += `
              <div class="mb-10">
                <div class="flex items-center gap-3 mb-4 pb-2 border-b border-[#E8D5D1]/60">
                  <span class="w-2 h-2 rounded-full bg-[#B98F8B]"></span>
                  <h3 class="font-serif text-2xl text-[#2D2524] tracking-wide uppercase">${cat.name}</h3>
                  <span class="text-xs text-[#B98F8B] font-mono ml-auto">${catServices.length} opciones</span>
                </div>
                <div class="divide-y divide-[#E8D5D1]/40">
                  ${catServices.map(s => renderServiceRow(s)).join('')}
                </div>
              </div>
            `;
          });
        } else {
          html = `
            <div class="divide-y divide-[#E8D5D1]/40">
              ${filtered.map(s => renderServiceRow(s)).join('')}
            </div>
          `;
        }

        listContainer.innerHTML = html;

        listContainer.querySelectorAll('[data-reserve-service]').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-reserve-service');
            bookingEngine.open(id);
          });
        });
      };

      const renderServiceRow = (s) => `
        <div class="service-row py-4 px-3 sm:px-4 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
          <div class="space-y-1 pr-4">
            <div class="flex items-baseline gap-3 flex-wrap">
              <h4 class="font-serif text-lg sm:text-xl text-[#2D2524] group-hover:text-[#6E514E] transition-colors font-medium">${s.name}</h4>
              ${s.featured ? '<span class="text-[10px] uppercase tracking-wider bg-[#E8D5D1] text-[#2D2524] px-2 py-0.5 rounded-xs font-semibold">Destacado</span>' : ''}
            </div>
            <p class="text-xs text-[#6E514E] line-clamp-2 max-w-xl font-normal leading-relaxed">${s.description}</p>
            <div class="flex items-center gap-2 text-xs text-[#B98F8B]">
              <svg class="w-3.5 h-3.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>${s.duration}</span>
            </div>
          </div>
          <div class="flex items-center justify-between sm:justify-end gap-5 pt-2 sm:pt-0 border-t border-[#FAF7F4] sm:border-0">
            <div class="text-right">
              <span class="font-serif text-xl sm:text-2xl font-medium text-[#2D2524] tracking-tight">${s.formattedPrice}</span>
              <span class="block text-[10px] text-[#B98F8B] uppercase tracking-wider">Tarifa</span>
            </div>
            <button 
              type="button" 
              data-reserve-service="${s.id}"
              class="px-4 py-2 bg-[#2D2524] text-[#FFFDFB] text-xs uppercase tracking-widest hover:bg-[#6E514E] transition-all rounded-xs whitespace-nowrap shadow-xs flex items-center gap-1.5"
            >
              <span>Reservar</span>
              <svg class="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      `;

      const updateActiveTab = () => {
        tabsContainer.querySelectorAll('.cat-pill').forEach(btn => {
          if (btn.getAttribute('data-category') === activeCategory) {
            btn.classList.add('active');
            btn.classList.remove('bg-[#FFFDFB]', 'text-[#6E514E]');
          } else {
            btn.classList.remove('active');
            btn.classList.add('bg-[#FFFDFB]', 'text-[#6E514E]');
          }
        });
      };

      tabsContainer.querySelectorAll('.cat-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          activeCategory = btn.getAttribute('data-category');
          updateActiveTab();
          renderServices();
        });
      });

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          searchTerm = e.target.value;
          renderServices();
        });
      }

      renderServices();
    }

    // Gallery Lightbox
    const modal = document.getElementById('galleryLightbox');
    const imgEl = document.getElementById('lightboxImg');
    const captionEl = document.getElementById('lightboxCaption');
    const closeLightboxBtn = document.getElementById('closeLightboxBtn');

    if (modal && imgEl) {
      document.querySelectorAll('[data-gallery-item]').forEach(item => {
        item.addEventListener('click', () => {
          const src = item.getAttribute('data-gallery-src');
          const caption = item.getAttribute('data-gallery-caption') || 'TULA CIRA Esthetic & Beauty';
          imgEl.src = src;
          if (captionEl) captionEl.textContent = caption;
          modal.classList.remove('hidden');
          document.body.classList.add('overflow-hidden');
        });
      });

      const closeLightbox = () => {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      };

      if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('lightbox-backdrop')) {
          closeLightbox();
        }
      });

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeLightbox();
        }
      });
    }

    // WhatsApp direct links
    const defaultMsg = encodeURIComponent(
      'Hola, me gustaría reservar una cita en TULA CIRA Esthetic & Beauty en Sevilla. ¿Qué disponibilidad tenéis esta semana? Muchas gracias.'
    );
    const waUrl = `https://wa.me/${SALON_INFO.phoneRaw}?text=${defaultMsg}`;

    document.querySelectorAll('[data-whatsapp-direct]').forEach(btn => {
      btn.setAttribute('href', waUrl);
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
    });
  });

})();
