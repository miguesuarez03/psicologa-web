/**
 * ─────────────────────────────────────────────────────────────
 *  IMÁGENES DE LA WEB
 *
 *  Todas las fotos usan Unsplash CDN directamente — no hace
 *  falta subir nada. Cuando Carmen tenga fotos propias:
 *
 *  1. Súbelas a /public con estos nombres:
 *       portrait-hero.jpg, portrait-about.jpg,
 *       service-1.jpg … service-6.jpg
 *  2. Cambia las URLs de abajo por "/portrait-hero.jpg" etc.
 * ─────────────────────────────────────────────────────────────
 */

const UNS = "https://images.unsplash.com";

export const images = {
  /**
   * HERO — consulta/interior cálido y acogedor
   * Foto: sala de estar minimalista con luz suave
   */
  hero: `${UNS}/photo-1616486338812-3dadae4b4ace?w=1800&q=85&fit=crop&auto=format`,

  /**
   * SOBRE MÍ — mujer joven, profesional, cercana
   * Foto: retrato natural de mujer joven sonriente
   */
  about: "/portrait-about.png",

  /**
   * SERVICIOS — fotos con relación temática, muy difuminadas en UI
   */
  services: [
    // 01 Terapia individual — silla acogedora, espacio tranquilo
    `${UNS}/photo-1555041469-a586c61ea9bc?w=800&q=80&fit=crop&auto=format`,
    // 02 Ansiedad y estrés — manos, calma, respiración
    `${UNS}/photo-1499209974431-9dddcece7f88?w=800&q=80&fit=crop&auto=format`,
    // 03 Autoestima — luz sobre superficie, introspección
    `${UNS}/photo-1508214751196-bcfd4ca60f91?w=800&q=80&fit=crop&auto=format`,
    // 04 Gestión emocional — cuaderno, escritura
    `${UNS}/photo-1486312338219-ce68d2c6f44d?w=800&q=80&fit=crop&auto=format`,
    // 05 Relaciones personales — dos personas, conexión
    `${UNS}/photo-1521791136064-7986c2920216?w=800&q=80&fit=crop&auto=format`,
    // 06 Talleres psicológicos — grupo, taller
    `${UNS}/photo-1552664730-d307ca884978?w=800&q=80&fit=crop&auto=format`,
  ],
};
