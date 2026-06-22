export const site = {
  name: "Carmen Aunión",
  role: "Psicóloga · Terapia individual",
  tagline: "Psicología sin tabúes",
  location: "Online · Sevilla",
  price: "35€",

  calendlyUrl: "https://calendly.com/carmen-al0405/30min",

  contact: {
    email: "nobuterapiabajocoste@gmail.com",
    instagram: "carmenaunion.psicologia",
    instagramUrl: "https://www.instagram.com/carmenaunion.psicologia/",
    modes: "Online · 1 hora · 35€",
    formation: "Máster Psicología Gral. Sanitaria · NoBu Psicología",
  },

  hero: {
    eyebrow: "Psicóloga sanitaria · Online · 35€",
    headlineLead: "Hablar",
    headlineAccent: "ayuda.",
    sub: "Un espacio sin filtros y sin juicios para entender lo que sientes y avanzar a tu ritmo.",
    pillars: [
      { value: "35€", label: "Por sesión" },
      { value: "Online", label: "Desde cualquier lugar" },
      { value: "Sin tabúes", label: "Libre de juicios" },
    ],
  },

  about: {
    eyebrow: "Sobre mí",
    title: "Hola, soy",
    titleAccent: "Carmen.",
    paragraphs: [
      "Psicóloga sanitaria centrada en acompañar procesos personales con calma, escucha y profundidad. Creo en una terapia humana, accesible y sin etiquetas. Un espacio donde puedas hablar de lo que te preocupa sin miedo a ser juzgada.",
      "Formo parte del equipo de NoBu Psicología, un centro comprometido con acercar la salud mental a más personas. Desde ahí nace el programa de terapia a bajo coste: 35€ con supervisión continua del equipo.",
    ],
    cards: [
      {
        title: "Formación",
        text: "Máster en Psicología General Sanitaria. Formación continua en NoBu Psicología.",
      },
      {
        title: "Filosofía",
        text: "Enfoque integrador e individualizado. Sin recetas únicas. Adaptado a ti.",
      },
    ],
  },

  services: {
    eyebrow: "Servicios",
    title: "Áreas en las que puedo acompañarte.",
    intro: "Sesiones personalizadas, online y adaptadas a lo que necesitas en cada momento. Sin recetas genéricas.",
    items: [
      {
        label: "Terapia individual",
        text: "Un espacio propio para mirar lo que ocurre dentro y avanzar a tu ritmo.",
        tags: ["Exploración personal", "Acompañamiento"],
      },
      {
        label: "Ansiedad y estrés",
        text: "Comprender qué sostiene la ansiedad y aprender a regularla con herramientas reales.",
        tags: ["Regulación", "Hábitos sostenibles"],
      },
      {
        label: "Autoestima",
        text: "Reconstruir la mirada hacia ti desde el cuidado y la verdad. Diálogo interno más amable.",
        tags: ["Autoconcepto", "Imagen corporal"],
      },
      {
        label: "Gestión emocional",
        text: "Aprender a escuchar tus emociones sin reprimirlas. Tolerancia al malestar y expresión sana.",
        tags: ["Identificación emocional"],
      },
      {
        label: "Relaciones personales",
        text: "Vínculos más sanos: límites, comunicación y bienestar relacional. Asertividad.",
        tags: ["Habilidades sociales", "Límites"],
      },
      {
        label: "Talleres psicológicos",
        text: "Recursos prácticos y crecimiento personal en grupo. Temáticas mensuales y comunidad cuidada.",
        tags: ["Grupal", "Herramientas"],
      },
    ],
  },

  process: {
    eyebrow: "Cómo trabajo",
    title: "Empezar es más sencillo de lo que imaginas.",
    steps: [
      {
        title: "Primera toma de contacto",
        text: "Escríbeme o reserva un hueco directamente. Resolvemos dudas y vemos si encajamos, sin ningún compromiso.",
      },
      {
        title: "Sesión inicial",
        text: "Me cuentas tu situación y construimos juntas los objetivos del proceso, a tu medida y a tu ritmo.",
      },
      {
        title: "Acompañamiento real",
        text: "Sesiones de 1h, online, a 35€. Herramientas concretas y seguimiento de verdad, no relleno.",
      },
    ],
  },

  trust: {
    eyebrow: "Testimonios",
    title: "Lo que cuentan quienes",
    titleAccent: "ya han venido.",
    testimonials: [
      {
        quote: "Carmen me ha acompañado en uno de los momentos más difíciles. Salgo de cada sesión sintiéndome escuchada y con herramientas reales.",
        author: "Lucía M.",
        context: "Ansiedad",
      },
      {
        quote: "Por primera vez siento que puedo hablar sin filtrar lo que pienso. Es un espacio cuidado y muy humano.",
        author: "Marta R.",
        context: "Autoestima",
      },
      {
        quote: "He aprendido a entender mis emociones en lugar de pelearme con ellas. Ha cambiado mi forma de relacionarme conmigo.",
        author: "Andrea G.",
        context: "Gestión emocional",
      },
      {
        quote: "La cercanía de Carmen marca la diferencia. Te sientes acompañada, nunca juzgada.",
        author: "Paula S.",
        context: "Relaciones personales",
      },
      {
        quote: "El precio accesible me permitió empezar terapia cuando más lo necesitaba. Estaré siempre agradecida.",
        author: "Elena V.",
        context: "Estrés y bienestar",
      },
      {
        quote: "Cada sesión es una oportunidad para mirarme con más cariño. Una psicóloga profesional y muy humana.",
        author: "Sara L.",
        context: "Crecimiento personal",
      },
    ],
  },

  booking: {
    eyebrow: "Reserva tu cita",
    title: "Da el primer paso.",
    text: "Elige el día y la hora que mejor te vengan. Sin llamadas, sin esperas. Primera sesión sin compromiso a 35€.",
  },

  nav: [
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Servicios", href: "#servicios" },
    { label: "Cómo trabajo", href: "#proceso" },
    { label: "FAQ", href: "#faq" },
    { label: "Reservar", href: "#reservar" },
  ],
};

export type Site = typeof site;
