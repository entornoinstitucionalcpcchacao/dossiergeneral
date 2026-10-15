# Dossier Institucional — Comisión Permanente de Participación Ciudadana

Sitio web estático (HTML + CSS + JS puro, sin frameworks ni servidor) que funciona como
**dossier maestro** de la Gerencia de Gestión Institucional. Desde él se enlazan todos los
dossieres temáticos que se vayan produciendo.

## Estructura de carpetas

```
dossier-cppc/
├── index.html                  ← Dossier maestro (no editar salvo secciones fijas)
├── dossieres/
│   └── plantilla.html          ← Duplícala para crear cada nuevo dossier temático
├── css/
│   ├── style.css               ← Estilos (paleta fucsia/blanco/lila al inicio :root)
│   └── animations.css          ← Animaciones y revelados
├── js/
│   ├── config.js               ← ★ ÚNICO archivo de contenido que editarás ★
│   └── main.js                 ← Lógica (no requiere edición)
└── assets/
    └── img/
        ├── logos/              ← logo-comision.png · logo-concejo.png (sustituye con los oficiales)
        ├── hero/               ← Imagen de la tarjeta del hero
        └── galeria/            ← Banco de imágenes de la trayectoria
```

## Tareas cotidianas (todo desde `js/config.js`)

### 1. Agregar un dossier nuevo
Copia un bloque dentro de `dossieres: [ ... ]` y edítalo:
```js
{
  titulo: "Mi nuevo dossier",
  competencia: "Participación",     // crea la etiqueta que necesites
  anio: 2026,
  resumen: "Descripción breve...",
  url: "dossieres/mi-dossier.html", // duplica plantilla.html y edítala
  portada: ""                       // o "assets/img/galeria/mi-foto.jpg"
}
```
El filtro por competencia se genera **solo**.

### 2. Agregar / quitar imágenes de la galería
1. Copia la foto a `assets/img/galeria/`.
2. Agrega su bloque en `galeria: [ ... ]` (título, año y alto aproximado).
3. Para quitarla, borra el bloque (o bórralo del objeto; la foto puede quedar en la carpeta sin riesgo).

### 3. Cambiar los logos
Sustituye los archivos en `assets/img/logos/` **conservando el nombre**, o cambia la ruta
en `logos: { comision: "...", concejo: "..." }`. Formatos recomendados: PNG con fondo
transparente o PNG/JPG.

### 4. Poner los enlaces de redes sociales
En `redes: [ ... ]` reemplaza `url: "#"` por el enlace real, p. ej.:
```js
{ nombre: "Instagram", detalle: "@participacion.ciudadana",
  url: "https://instagram.com/participacion.ciudadana", icono: "instagram" },
```

## Publicar
Sube la carpeta completa a cualquier hosting estático (GitHub Pages, Netlify, servidor
municipal) o ábrela localmente con doble clic en `index.html`.

---
Paleta: fucsia `#D4007F` · lila `#B78BEE` · blanco, con derivados en `:root` (css/style.css).
