# Carmen Aunión — Web personal

Landing one-page premium para Carmen Aunión, psicóloga sanitaria.
**Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Vercel**

---

## Arrancar en local

```bash
npm install
npm run dev
```
→ http://localhost:3000

---

## Personalizar contenido

Todo el texto, datos y URLs están en **un solo archivo**:

```
lib/config.ts
```

No necesitas tocar ningún componente. Edita ahí:
- Nombre, tagline, precio, ubicación
- `calendlyUrl` → tu enlace real de Calendly (ya está puesto el de Carmen)
- Email, Instagram, modalidades
- Textos de hero, sobre mí, servicios, proceso, testimonios, reserva

---

## Fotos

Sustituye los marcadores en `public/` por las fotos reales de Carmen (formato vertical 4:5 recomendado):

| Archivo | Dónde aparece |
|---|---|
| `public/portrait-hero.jpg` | Hero (pantalla completa de fondo) |
| `public/portrait-about.jpg` | Sección "Sobre mí" |

**El hero funciona mejor con una foto vertical**, donde Carmen esté centrada
en la parte superior. El degradado oscuro en la parte baja asegura siempre
la legibilidad del texto encima.

---

## Hero: foto de fondo + efecto cristal

El hero muestra la foto a pantalla completa con una tarjeta
de vidrio esmerilado (`backdrop-filter: blur`) encima del texto.
El nav cambia automáticamente a blanco mientras la foto es visible
y vuelve al modo oscuro sobre fondo claro al hacer scroll.

Para usar una foto real, simplemente reemplaza `public/portrait-hero.jpg`.
El componente `Hero.tsx` ya usa `<Image fill>` de Next.js.

---

## Calendly

Integración real en la sección Reserva. El widget carga
inline con los colores de la marca. URL configurada:
`https://calendly.com/carmen-al0405/30min`

---

## Deploy en Vercel

1. Sube el proyecto a GitHub
2. En Vercel → Add New → Project → importa el repo
3. Vercel detecta Next.js automáticamente → Deploy

Sin variables de entorno necesarias.

---

## Estructura

```
app/              Layout, página, estilos globales
components/       Secciones (Hero, About, Services, Process, Trust, Booking, Contact, Footer)
components/ui/    Piezas reutilizables (Button, Container, Eyebrow, Reveal)
lib/config.ts    ← TODO el contenido editable aquí
public/           Fotos (sustituir por las reales)
```

---

## Fotos reales — cómo añadirlas

Las imágenes actuales son marcadores de posición. Para sustituirlas descarga
estas fotos de Unsplash (gratuitas) y guárdalas en `public/` con exactamente
estos nombres:

| Archivo | Foto sugerida (Unsplash) | Sección |
|---|---|---|
| `portrait-hero.jpg` | https://unsplash.com/photos/hIgeoQjS_iE | Hero (consulta acogedora) |
| `portrait-about.jpg` | https://unsplash.com/photos/rDEOVtE7vOs | Sobre mí (mujer joven) |
| `service-1.jpg` | https://unsplash.com/photos/K8KiCHh4WU4 | Terapia individual |
| `service-2.jpg` | https://unsplash.com/photos/VLPUm5wP5Z0 | Ansiedad y estrés |
| `service-3.jpg` | https://unsplash.com/photos/YnHGhzNvRpU | Autoestima |
| `service-4.jpg` | https://unsplash.com/photos/505eectW54k | Gestión emocional |
| `service-5.jpg` | https://unsplash.com/photos/Aig5M36YvXs | Relaciones personales |
| `service-6.jpg` | https://unsplash.com/photos/376KN_ISplE | Talleres |

Pasos:
1. Abre cada URL → botón "Download free" → descarga
2. Renombra el archivo y muévelo a la carpeta `public/`
3. Reinicia el servidor (`npm run dev`) — aparecen automáticamente

Las fotos de servicio se muestran muy difuminadas y en baja opacidad,
así que cualquier foto cálida y cercana funciona bien.
