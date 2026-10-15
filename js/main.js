
/* ============================================================
   Núcleo interactivo del dossier — no requiere edición.
   Todo el contenido sale de js/config.js
   ============================================================ */
(function () {
  'use strict';
  const CFG = window.DOSSIER || {};

  /* ---------- Iconos SVG inline (sin dependencias externas) ---------- */
  const ICONOS = {
    instagram: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none"/></svg>',
    x: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.3 22H3.1l7.3-8.3L2.5 2h6.4l4.4 5.9L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"/></svg>',
    facebook: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7h3z"/></svg>',
    tiktok: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.4 2 1.8 3.5 3.9 3.8v3c-1.5 0-2.8-.4-3.9-1.2v6.3c0 3.4-2.5 5.9-5.8 5.9A5.6 5.6 0 0 1 5 15c0-3.2 2.6-5.7 5.9-5.6v3.1c-1.6-.2-2.9.9-2.9 2.5 0 1.4 1.1 2.5 2.6 2.5 1.6 0 2.7-1.2 2.7-3V3h3.3z"/></svg>',
    youtube: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2s-.2-1.5-.8-2.1c-.8-.8-1.6-.8-2-.9C16.4 5 12 5 12 5s-4.4 0-7.2.2c-.4.1-1.2.1-2 .9C2.2 6.7 2 8.2 2 8.2S1.8 9.9 1.8 11.6v1.6c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.1c.8.8 1.8.8 2.2.9 1.6.2 7 .2 7 .2s4.4 0 7.2-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.4v-1.6c0-1.7-.2-3.4-.2-3.4zM9.8 15V8.9l5.8 3.1L9.8 15z"/></svg>',
    mail: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>',
    flecha: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>'
  };

  /* ---------- Preloader ---------- */
  window.addEventListener('load', () => {
    const pre = document.querySelector('.preloader');
    if (pre) { setTimeout(() => pre.classList.add('oculto'), 500); }
  });

  document.addEventListener('DOMContentLoaded', () => {

    /* ====== Inyectar identidad ====== */
    document.querySelectorAll('[data-campo="institucion"]').forEach(el => el.textContent = CFG.institucion || '');
    document.querySelectorAll('[data-campo="gerencia"]').forEach(el => el.textContent = CFG.gerencia || '');
    document.querySelectorAll('[data-campo="lema"]').forEach(el => el.textContent = CFG.lema || '');
    if (CFG.logos) {
      const imgComision = document.getElementById('logo-comision');
      const imgConcejo = document.getElementById('logo-concejo');
      if (imgComision && CFG.logos.comision) imgComision.src = CFG.logos.comision;
      if (imgConcejo && CFG.logos.concejo) imgConcejo.src = CFG.logos.concejo;
    }

    /* ====== Header y navegación ====== */
    const header = document.getElementById('header');
    const botonArriba = document.getElementById('ir-arriba');
    const alHacerScroll = () => {
      header.classList.toggle('solido', window.scrollY > 60);
      botonArriba.classList.toggle('visible', window.scrollY > 500);
    };
    window.addEventListener('scroll', alHacerScroll, { passive: true });
    alHacerScroll();
    botonArriba.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    const hamburguesa = document.getElementById('hamburguesa');
    const nav = document.getElementById('nav');
    hamburguesa.addEventListener('click', () => {
      hamburguesa.classList.toggle('activa');
      nav.classList.toggle('abierto');
      document.body.style.overflow = nav.classList.contains('abierto') ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburguesa.classList.remove('activa'); nav.classList.remove('abierto'); document.body.style.overflow = '';
    }));

    /* ====== Revelado al hacer scroll ====== */
    const observador = new IntersectionObserver(entradas => {
      entradas.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observador.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.revelar, .revelar-hijo').forEach(el => observador.observe(el));

    /* ====== Contadores animados ====== */
    const contadores = document.querySelectorAll('[data-contador]');
    const obsContador = new IntersectionObserver(entradas => {
      entradas.forEach(entrada => {
        if (!entrada.isIntersecting) return;
        const el = entrada.target, meta = +el.dataset.contador, sufijo = el.dataset.sufijo || '';
        const duracion = 1600, inicio = performance.now();
        const paso = ahora => {
          const p = Math.min((ahora - inicio) / duracion, 1);
          const suavizado = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(meta * suavizado) + sufijo;
          if (p < 1) requestAnimationFrame(paso);
        };
        requestAnimationFrame(paso);
        obsContador.unobserve(el);
      });
    }, { threshold: 0.6 });
    contadores.forEach(c => obsContador.observe(c));

    /* ====== Partículas del hero (fucsia/lila, estilo red neuronal vecinal) ====== */
    const lienzo = document.getElementById('lienzo-particulas');
    if (lienzo && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      const ctx = lienzo.getContext('2d');
      let ancho, alto, puntos = [];
      const COLORES = ['rgba(244,198,224,.8)', 'rgba(183,139,238,.7)', 'rgba(255,255,255,.55)'];
      const redimensionar = () => {
        ancho = lienzo.width = lienzo.offsetWidth;
        alto = lienzo.height = lienzo.offsetHeight;
        const cantidad = Math.min(90, Math.floor(ancho * alto / 16000));
        puntos = Array.from({ length: cantidad }, () => ({
          x: Math.random() * ancho, y: Math.random() * alto,
          vx: (Math.random() - .5) * .45, vy: (Math.random() - .5) * .45,
          r: Math.random() * 2.2 + .8, c: COLORES[Math.floor(Math.random() * COLORES.length)]
        }));
      };
      redimensionar();
      window.addEventListener('resize', redimensionar);
      const dibujar = () => {
        ctx.clearRect(0, 0, ancho, alto);
        for (let i = 0; i < puntos.length; i++) {
          const p = puntos[i];
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > ancho) p.vx *= -1;
          if (p.y < 0 || p.y > alto) p.vy *= -1;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.c; ctx.fill();
          for (let j = i + 1; j < puntos.length; j++) {
            const q = puntos[j], dx = p.x - q.x, dy = p.y - q.y, dist = Math.hypot(dx, dy);
            if (dist < 130) {
              ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = `rgba(183,139,238,${(1 - dist / 130) * .28})`;
              ctx.lineWidth = 1; ctx.stroke();
            }
          }
        }
        requestAnimationFrame(dibujar);
      };
      dibujar();
    }

    /* ====== DOSSIERES: render + filtros por competencia ====== */
    const rejilla = document.getElementById('rejilla-dossieres');
    const cajaFiltros = document.getElementById('filtros');
    const dossieres = CFG.dossieres || [];
    const GRADIENTES = [
      ['#D4007F', '#9D6BF2'], ['#7A0A55', '#D4007F'], ['#9D6BF2', '#F0129B'],
      ['#4A0637', '#B78BEE'], ['#F0129B', '#7A0A55'], ['#B78BEE', '#D4007F']
    ];

    if (rejilla) {
      if (!dossieres.length) {
        rejilla.innerHTML = '<div class="dossier-vacio">Aún no hay dossieres publicados. Agréguelos desde <strong>js/config.js</strong>.</div>';
      } else {
        dossieres.forEach((d, i) => {
          const g = GRADIENTES[i % GRADIENTES.length];
          const inicial = (d.titulo || '?').trim().charAt(0).toUpperCase();
          const articulo = document.createElement('article');
          articulo.className = 'dossier-tarjeta';
          articulo.dataset.competencia = d.competencia || 'General';
          articulo.innerHTML = `
            <div class="dossier-tarjeta__portada" style="background: linear-gradient(135deg, ${g[0]}, ${g[1]})">
              <span class="inicial">${inicial}</span>
              ${d.portada ? `<img src="${d.portada}" alt="${d.titulo}" loading="lazy">` : ''}
              <span class="dossier-tarjeta__competencia">${d.competencia || 'General'}</span>
            </div>
            <div class="dossier-tarjeta__cuerpo">
              <span class="dossier-tarjeta__anio">${d.anio || ''}</span>
              <h3>${d.titulo}</h3>
              <p>${d.resumen || ''}</p>
              <a class="dossier-tarjeta__enlace" href="${d.url || '#'}" target="_self">Abrir dossier ${ICONOS.flecha}</a>
            </div>`;
          rejilla.appendChild(articulo);
        });

        /* Filtros generados desde las competencias existentes */
        if (cajaFiltros) {
          const competencias = [...new Set(dossieres.map(d => d.competencia || 'General'))];
          ['Todos', ...competencias].forEach((comp, idx) => {
            const btn = document.createElement('button');
            btn.className = 'filtro' + (idx === 0 ? ' activo' : '');
            btn.textContent = comp;
            btn.addEventListener('click', () => {
              cajaFiltros.querySelectorAll('.filtro').forEach(b => b.classList.remove('activo'));
              btn.classList.add('activo');
              rejilla.querySelectorAll('.dossier-tarjeta').forEach(t => {
                const mostrar = comp === 'Todos' || t.dataset.competencia === comp;
                t.classList.toggle('oculto', !mostrar);
              });
            });
            cajaFiltros.appendChild(btn);
          });
        }
      }
    }

    /* ====== GALERÍA + LIGHTBOX ====== */
    const muro = document.getElementById('galeria-muro');
    const lightbox = document.getElementById('lightbox');
    let indiceActual = 0;

    if (muro) {
      (CFG.galeria || []).forEach((foto, i) => {
        const fig = document.createElement('figure');
        fig.className = 'galeria__item';
        fig.innerHTML = `
          <img src="${foto.src}" alt="${foto.titulo}" loading="lazy" style="aspect-ratio:4/${Math.round((foto.alto || 340) / 75)}; object-fit:cover;">
          <span class="galeria__anio">${foto.anio || ''}</span>
          <figcaption><strong>${foto.titulo}</strong></figcaption>`;
        fig.addEventListener('click', () => abrirLightbox(i));
        muro.appendChild(fig);
      });

      const imgLb = document.getElementById('lightbox-img');
      const capLb = document.getElementById('lightbox-caption');
      function abrirLightbox(i) {
        indiceActual = i;
        pintarLightbox();
        lightbox.classList.add('abierto');
        document.body.style.overflow = 'hidden';
      }
      function pintarLightbox() {
        const foto = CFG.galeria[indiceActual];
        imgLb.src = foto.src;
        imgLb.alt = foto.titulo;
        capLb.textContent = `${foto.titulo} · ${foto.anio || ''}`;
      }
      function cerrarLightbox() { lightbox.classList.remove('abierto'); document.body.style.overflow = ''; }
      function mover(dir) {
        indiceActual = (indiceActual + dir + CFG.galeria.length) % CFG.galeria.length;
        pintarLightbox();
      }
      document.getElementById('lightbox-cerrar').addEventListener('click', cerrarLightbox);
      document.getElementById('lightbox-prev').addEventListener('click', e => { e.stopPropagation(); mover(-1); });
      document.getElementById('lightbox-next').addEventListener('click', e => { e.stopPropagation(); mover(1); });
      lightbox.addEventListener('click', e => { if (e.target === lightbox) cerrarLightbox(); });
      document.addEventListener('keydown', e => {
        if (!lightbox.classList.contains('abierto')) return;
        if (e.key === 'Escape') cerrarLightbox();
        if (e.key === 'ArrowLeft') mover(-1);
        if (e.key === 'ArrowRight') mover(1);
      });
    }

    /* ====== REDES SOCIALES ====== */
    const rejillaRedes = document.getElementById('rejilla-redes');
    if (rejillaRedes) {
      (CFG.redes || []).forEach(red => {
        const a = document.createElement('a');
        a.className = 'red';
        a.href = red.url || '#';
        a.target = red.url && red.url.startsWith('http') ? '_blank' : '_self';
        a.rel = 'noopener';
        a.innerHTML = `
          <span class="red__icono">${ICONOS[red.icono] || ICONOS.mail}</span>
          <span class="red__texto"><strong>${red.nombre}</strong><span>${red.detalle || ''}</span></span>`;
        rejillaRedes.appendChild(a);
      });
    }

    /* ====== CIFRAS ====== */
    const rejillaCifras = document.getElementById('rejilla-cifras');
    if (rejillaCifras) {
      (CFG.cifras || []).forEach(c => {
        const div = document.createElement('div');
        div.className = 'cifra';
        div.innerHTML = `<strong data-contador="${c.numero}" data-sufijo="${c.sufijo || ''}">0</strong><span>${c.etiqueta}</span>`;
        rejillaCifras.appendChild(div);
      });
      rejillaCifras.querySelectorAll('[data-contador]').forEach(c => obsContador.observe(c));
    }
  });
})();
