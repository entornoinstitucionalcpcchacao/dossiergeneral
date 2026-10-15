
/* ============================================================================
   ★★★  ARCHIVO DE CONFIGURACIÓN — EDITA SOLO AQUÍ  ★★★
   ----------------------------------------------------------------------------
   Este archivo es el ÚNICO que necesitas tocar para mantener el dossier:

   1) LOGOS ........ cambia la ruta si tus logos tienen otro nombre.
   2) REDES ....... pega los enlaces reales (https://...) en cada campo.
   3) DOSSIERES ... copia un bloque { ... }, pega debajo y edítalo.
   4) GALERÍA ..... copia un bloque { ... }, pega debajo y edítalo.
   5) CIFRAS ...... ajusta los números institucionales.
   No requiere servidor, ni base de datos, ni conocimientos de programación.
   ============================================================================ */

window.DOSSIER = {

  /* ---------- 1. IDENTIDAD ---------- */
  institucion: "Concejo Municipal · Comisión Permanente de Participación Ciudadana",
  gerencia:    "Gerencia Para el Entorno Institucional y Participación Ciudadana",
  lema:        "Voces que construyen ciudad",

  /* ---------- 2. LOGOS (sustituye los archivos en assets/img/logos/) ---------- */
  logos: {
    comision: "assets/img/logos/logo-comision.png",
    concejo:  "assets/img/logos/logo-concejo.png"
  },

  /* ---------- 3. REDES SOCIALES (★ pega aquí tus enlaces reales ★) ---------- */
  redes: [
    { nombre: "Instagram", detalle: "@participacion.ciudadana", url: "#", icono: "instagram" },
    { nombre: "X / Twitter", detalle: "@cparticipacion",        url: "#", icono: "x" },
    { nombre: "Facebook", detalle: "Comisión de Participación", url: "#", icono: "facebook" },
    { nombre: "TikTok", detalle: "@participa.concejo",          url: "#", icono: "tiktok" },
    { nombre: "YouTube", detalle: "Canal institucional",        url: "#", icono: "youtube" },
    { nombre: "Correo", detalle: "participacion@concejo.gob",  url: "mailto:participacion@concejo.gob", icono: "mail" }
  ],

  /* ---------- 4. DOSSIERES HOSPEDADOS (★ agrega/quita libremente ★)
     competencia → etiqueta del filtro (puedes inventar las que necesites)
     url → enlace a la página del dossier (usa "dossieres/plantilla.html" como base)
     portada → imagen opcional de fondo; si va vacía ("") se dibuja una con
               las iniciales del título en los colores institucionales.          */
  dossieres: [
    {
      titulo: "Rendición de Cuentas 2026",
      competencia: "Transparencia",
      anio: 2026,
      resumen: "Informe integral de gestión, indicadores de participación y ejecución presupuestaria del período.",
      url: "dossieres/plantilla.html",
      portada: ""
    },
    {
      titulo: "Presupuesto Participativo",
      competencia: "Participación",
      anio: 2026,
      resumen: "Metodología, cronograma y resultados de las asambleas de priorización vecinal.",
      url: "dossieres/plantilla.html",
      portada: ""
    },
    {
      titulo: "Consejos Comunales y Comunas",
      competencia: "Organización",
      anio: 2025,
      resumen: "Mapeo de estructuras de poder popular, acompañamiento técnico y plan de formación.",
      url: "dossieres/plantilla.html",
      portada: ""
    },
    {
      titulo: "Consulta Popular y Cabildos",
      competencia: "Participación",
      anio: 2025,
      resumen: "Memoria fotográfica y documental de los procesos de consulta ciudadana del municipio.",
      url: "dossieres/plantilla.html",
      portada: ""
    },
    {
      titulo: "Derechos Humanos y Ciudadanía",
      competencia: "DD. HH.",
      anio: 2024,
      resumen: "Agenda de formación en derechos humanos, niñez, adolescencia y juventudes.",
      url: "dossieres/plantilla.html",
      portada: ""
    },
    {
      titulo: "Género e Igualdad",
      competencia: "Inclusión",
      anio: 2024,
      resumen: "Políticas municipales de igualdad, prevención de violencias y empoderamiento de las mujeres.",
      url: "dossieres/plantilla.html",
      portada: ""
    }
  ],

  /* ---------- 5. GALERÍA DE TRAYECTORIA (★ solo imágenes de assets/img/galeria/ ★)
     ancho/alto solo controlan la proporción en el muro; la foto manda.        */
  galeria: [
    { src: "assets/img/galeria/galeria-01.png", titulo: "Primera asamblea de ciudadanos", anio: 2024, alto: 300 },
    { src: "assets/img/galeria/galeria-02.png", titulo: "Formación de vocerías",          anio: 2024, alto: 380 },
    { src: "assets/img/galeria/galeria-03.png", titulo: "Consulta popular",               anio: 2025, alto: 320 },
    { src: "assets/img/galeria/galeria-04.png", titulo: "Cabildo abierto",                anio: 2025, alto: 420 },
    { src: "assets/img/galeria/galeria-05.png", titulo: "Visita a consejo comunal",       anio: 2026, alto: 310 },
    { src: "assets/img/galeria/galeria-06.png", titulo: "Jornada de rendición de cuentas",anio: 2026, alto: 400 },
    { src: "assets/img/galeria/galeria-07.png", titulo: "Mesa técnica con comunas",       anio: 2026, alto: 330 },
    { src: "assets/img/galeria/galeria-08.png", titulo: "Cierre anual con la comunidad",  anio: 2026, alto: 360 }
  ],

  /* ---------- 6. CIFRAS INSTITUCIONALES (animadas) ---------- */
  cifras: [
    { numero: 12,  sufijo: "",  etiqueta: "Dossieres publicados" },
    { numero: 140, sufijo: "+", etiqueta: "Asambleas acompañadas" },
    { numero: 68,  sufijo: "",  etiqueta: "Consejos comunales aliados" },
    { numero: 3,   sufijo: "",  etiqueta: "Años de trayectoria" }
  ]
};
