/**
 * TULA CIRA — Esthetic & Beauty (Sevilla)
 * Estructura de Servicios y Precios DEMO
 * 
 * Este archivo centraliza el catálogo de servicios de forma editable y modular.
 * Puedes modificar nombres, precios, duraciones o categorías fácilmente.
 */

export const SERVICE_CATEGORIES = [
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

export const SERVICES = [
  // --- MANICURA ---
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
    description: 'Base Rubber con refuerzo flexible que nivela la uña natural aportando resistencia.',
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

  // --- EXTENSIONES DE UÑAS ---
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

  // --- PEDICURA ---
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

  // --- PESTAÑAS (EXTENSIONES) ---
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

  // --- PESTAÑAS & CEJAS ---
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
    description: 'Fija y direcciona el vello de la ceja para un efecto peinado, tupido y definido.',
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

  // --- DEPILACIÓN FACIAL ---
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

  // --- DEPILACIÓN CORPORAL ---
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

  // --- FACIALES ---
  {
    id: 'facial-higiene',
    name: 'Higiene facial',
    category: 'faciales',
    price: 35.00,
    formattedPrice: '35,00 €',
    duration: '45 min',
    description: 'Limpieza profunda, exfoliación, desincrustación suave y mascarilla purificante.',
    featured: false
  },
  {
    id: 'facial-personalizado',
    name: 'Tratamiento facial personalizado',
    category: 'faciales',
    price: 45.00,
    formattedPrice: '45,00 €',
    duration: '1 h',
    description: 'Diagnóstico previo y activos botánicos y reestructurantes según las necesidades de tu piel.',
    featured: true
  },
  {
    id: 'facial-premium',
    name: 'Tratamiento facial premium',
    category: 'faciales',
    price: 55.00,
    formattedPrice: '55,00 €',
    duration: '1 h 15 min',
    description: 'Cuidado antiedad y luminosidad profunda con masaje kobido reafirmante y sérums intensivos.',
    featured: false
  },

  // --- TRATAMIENTOS CORPORALES ---
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

  // --- MASAJES ---
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

  // --- MAQUILLAJE ---
  {
    id: 'maq-social',
    name: 'Maquillaje social',
    category: 'maquillaje',
    price: 40.00,
    formattedPrice: '40,00 €',
    duration: '1 h',
    description: 'Look elegante y duradero para comidas, cenas o sesiones fotográficas.',
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

export const SALON_INFO = {
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
