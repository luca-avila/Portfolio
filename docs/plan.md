# Plan de implementación

Este plan divide el portfolio en entregas pequeñas para el loop agéntico. Darle **un chunk por vez**, con su objetivo y criterio de cierre. [`AGENTS.md`](../AGENTS.md) fija stack, convenciones y verificaciones; [`ui.md`](ui.md) fija las pautas visuales. Antes de cada chunk, leer el wireframe correspondiente y `loop/.loop/task.md` si contiene instrucciones.

El repositorio parte sin aplicación. Los recursos de `wireframes/` son locales y no se commitean. Cuando falten contenido o assets reales, pedirlos o preparar la estructura para incorporarlos sin inventar datos ni publicar enlaces vacíos.

## Chunk 0 — Base estática

Crear el proyecto con **Next.js 15, React 19, TypeScript estricto, Tailwind CSS v4 y pnpm**. Configurar exportación estática en `next.config.ts`, alias `@/*`, estilos base oscuros, `html lang="es"`, metadatos iniciales y la estructura de `src/content/` y `src/components/`. Dejar una página base con anclas para las secciones que compile y genere `out/`. Respetar la versión fijada del stack al crear el scaffold.

**Cierre:** la app inicia en desarrollo, el build estático termina y los comandos de calidad de `AGENTS.md` pasan.

## Chunk 1 — Hero y navegación

Implementar el Hero a partir de `hero.png` y la navegación por anclas que muestra `projects.png`. Incorporar fotografía y copy definitivos cuando estén disponibles, con sus dos CTA. Resolver la composición móvil y de escritorio, el foco visible y el recorte de imagen.

**Cierre:** la primera pantalla comunica quién es la persona, los CTA llegan a sus destinos y no hay desbordes en móvil.

## Chunk 2 — Listado de proyectos

Crear los datos tipados de proyectos y las secciones **Destacados** / **En desarrollo**. Implementar las cards con captura, título, tecnologías y descripción en español según `projects.png`. Dejar preparada la activación del detalle para el chunk siguiente, sin enlaces o botones inertes.

**Cierre:** los proyectos se entienden en móvil y escritorio, y cada captura y texto corresponde al proyecto correcto.

## Chunk 3 — Modal de proyecto

Implementar la expansión de cards según `project-detail.png`, con contenido del proyecto seleccionado, imagen, stack, Demo y Repositorio cuando existan. Añadir cierre por botón, `Escape` y clic fuera; gestionar foco y desplazamiento del fondo.

**Cierre:** todas las cards abren el proyecto correcto y el diálogo se puede usar y cerrar solo con teclado.

## Chunk 4 — Sobre mí

Implementar `about.png`: avatar, nombre, presentación, tecnologías, experiencia en puntos y descarga de `/cv.pdf`. Ajustar el contenido de `src/content/profile.ts` y comprobar que el archivo descargable existe.

**Cierre:** la sección se lee bien en móvil y la descarga funciona.

## Chunk 5 — Contacto y Footer

Implementar el panel de `contact.png` con correo, GitHub, LinkedIn y X; omitir el formulario del boceto. Añadir Footer y revisar que la navegación alcance todas las secciones.

**Cierre:** los cuatro enlaces llevan a destinos reales, tienen nombres accesibles y el cierre de página es coherente con el resto.

## Chunk 6 — Revisión integral y entrega estática

Revisar la página completa en móvil, ancho intermedio y escritorio: jerarquía visual, contraste, textos en español, navegación con teclado, modal, imágenes y enlaces. Completar metadatos y recursos públicos pertinentes. Añadir `nginx.conf` para servir `out/` con `try_files $uri $uri/ /index.html =404`, gzip y caché larga en `/_next/static`. Documentar el procedimiento de build y publicación en el VPS si hace falta para la entrega.

**Cierre:** `out/` se genera sin errores y queda listo para ser servido directamente por nginx, sin Node en runtime.

## Regla de cierre para todos los chunks

Cada entrega termina con una revisión de la sección afectada y estos cuatro comandos, definidos en `AGENTS.md`:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm exec prettier --check .
pnpm build
```

No pasar al chunk siguiente con errores de tipos, formato, lint o build. Mantener los cambios acotados a la entrega, y usar commits en español con el formato `[sección] descripción breve` cuando corresponda.
