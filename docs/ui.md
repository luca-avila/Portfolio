# Directivas de UI

Este documento traduce los bocetos de `wireframes/` en criterios de implementación para el portfolio. Leerlo junto con [`AGENTS.md`](../AGENTS.md). Los PNG son referencias de composición, jerarquía y comportamiento; sus bloques grises representan contenido pendiente, no elementos de interfaz que deban copiarse literalmente.

## Principios generales

- Portfolio de una sola página, en español y exclusivamente en modo oscuro.
- Dar protagonismo a la fotografía, las capturas y el contenido. Usar superficies sobrias, bordes finos y espacio generoso; evitar decoración que compita con los proyectos.
- Mantener una misma familia de radios grandes, bordes y estilos de botones en todas las secciones. Usar Tailwind CSS v4 para el diseño; `globals.css` queda para la base y, si hace falta, tokens compartidos.
- Tratar las medidas de los wireframes como proporciones aproximadas. Ajustar tamaños y espacios para preservar la jerarquía en pantallas reales, sin perseguir una copia píxel por píxel.
- Si faltan textos, fotos, capturas, CV o URL definitivos, resolver el contenido en `src/content/` y los archivos en `public/` antes de dar por terminada la sección. No publicar enlaces rotos ni datos biográficos inventados.

## Sistema visual

| Elemento | Directiva |
| --- | --- |
| Fondo | Negro cercano a `#0a0a0a`; superficies apenas más claras para cards y modal. |
| Texto | Blanco o gris muy claro para títulos y acciones; gris con contraste AA para descripciones y metadatos. |
| Bordes | Sutiles, cercanos a `white/10`; separar superficies sin depender solo de sombras. |
| Radios | Grandes en cards, paneles y botones (`rounded-2xl` / `rounded-3xl` como referencia). |
| Tipografía | Una jerarquía clara: titular dominante, títulos de sección y proyecto, cuerpo legible, etiquetas secundarias. Evitar texto diminuto en pills. |
| Espaciado | Ancho de contenido y márgenes laterales consistentes. Separación amplia entre secciones y separación menor dentro de cada card. |
| Acciones | CTA principal más visible que el secundario; estados hover y foco perceptibles. El aspecto debe repetirse en Hero, modal y descarga del CV. |

Los nombres de secciones y textos de interfaz van en español: **Proyectos**, **Sobre mí** y **Contacto**. Traducir también los grupos de proyectos, por ejemplo **Destacados** y **En desarrollo**, salvo que el contenido final pida otra redacción. Mantener en inglés solo nombres propios y tecnologías.

## Estructura y adaptación

Orden de lectura y navegación: Hero → Proyectos → Sobre mí → Contacto → Footer. La navegación usa anclas a estas secciones. En escritorio puede seguir la franja horizontal de `projects.png`; en móvil debe conservar enlaces accesibles sin desbordar ni tapar el contenido. Si se usa un menú desplegable, su botón necesita nombre accesible y estado expandido.

Diseñar primero para móvil. En pantallas estrechas, las composiciones de dos columnas pasan a una columna, las capturas conservan su proporción y los botones pueden ocupar todo el ancho. En escritorio, recuperar la distribución lateral de los bocetos. No fijar alturas que corten texto o imágenes; comprobar textos largos, zoom y tamaños intermedios.

## Secciones

### Hero — `wireframes/hero.png`

- Composición dividida: fotografía a la izquierda, titular y breve presentación a la derecha. La imagen llena su área, se recorta con `object-cover` y se muestra en escala de grises. El borde de la foto llega al borde interior del bloque, como en el boceto.
- Dos CTA bajo el texto: uno hacia **Proyectos** y otro hacia **Contacto** o el enlace de contacto principal, según el contenido final. Distinguir visualmente la acción primaria de la secundaria.
- En móvil, apilar foto y texto en el orden que facilite leer la presentación y ver los CTA sin perder el retrato. Mantener un recorte reconocible del sujeto.

### Proyectos — `wireframes/projects.png`

- Separar los proyectos en **Destacados** y **En desarrollo**. El boceto muestra a Irruptivo y ClockLog como ejemplos; los datos definitivos viven en `src/content/projects.ts`.
- Cada card tiene captura a la izquierda y, a la derecha, título, pills de stack y descripción breve. La captura debe ser claramente visible y respetar su proporción; la card completa puede abrir el detalle si la interacción se anuncia con foco, cursor y semántica adecuados.
- En móvil, colocar captura antes del texto, permitir que las pills salten de línea y evitar truncar la descripción esencial.

### Detalle de proyecto — `wireframes/project-detail.png`

- Al activar una card, abrir un modal centrado sobre un fondo atenuado. Orden interno: título y cierre, imagen, descripción, stack y enlaces **Demo** / **Repositorio**.
- El panel debe caber en móvil y permitir desplazamiento interno cuando el contenido supere la altura disponible. No estirar la captura ni ocultar el botón de cierre.
- Cerrar con el botón **Cerrar**, `Escape` o clic fuera. Usar `role="dialog"`, `aria-modal="true"`, nombre accesible, foco inicial dentro, trampa de foco mínima y devolución del foco al disparador al cerrar. Bloquear el desplazamiento del fondo mientras esté abierto.
- Los enlaces externos usan `target="_blank" rel="noopener noreferrer"`. Si una Demo o un Repositorio no existe, no mostrar una acción inerte.

### Sobre mí — `wireframes/about.png`

- Panel amplio con avatar circular, nombre, tecnologías en pills distribuidas en varias filas, puntos breves de experiencia y descarga del CV.
- Usar texto biográfico concreto y verificable. El botón descarga o abre `/cv.pdf` con un nombre accesible; el archivo debe existir antes de publicar la acción.
- En móvil, priorizar avatar, nombre y resumen; dejar que las pills y los puntos se adapten sin columnas estrechas.

### Contacto y Footer — `wireframes/contact.png`

- Conservar el panel oscuro y la agrupación central de vías de contacto. La versión 1 ofrece solo enlaces: correo `mailto:`, GitHub, LinkedIn y X. **Ignorar los campos de formulario dibujados en el wireframe.**
- Cada icono necesita `aria-label` y área táctil cómoda. Los enlaces externos abren pestaña nueva con `target="_blank" rel="noopener noreferrer"`; el correo usa `mailto:`.
- El Footer cierra la página con información breve y coherente con el resto del diseño, sin repetir un formulario.

## Accesibilidad y revisión visual

- Usar landmarks y encabezados en orden lógico; cada ancla de navegación debe apuntar a una sección existente.
- Dar `alt` descriptivo a retrato y capturas. Marcar como decorativos solo los elementos que realmente lo sean.
- Mantener contraste AA: al menos 4.5:1 para texto normal y 3:1 para texto grande. Los estados de foco deben verse sobre el fondo oscuro.
- Verificar con teclado la navegación, las cards, el modal, los enlaces y la descarga del CV.
- Revisar al menos una vista móvil y una de escritorio por sección, además de una anchura intermedia para detectar desbordes.

La implementación técnica, estructura de archivos y comandos de validación se mantienen en [`AGENTS.md`](../AGENTS.md); la secuencia de trabajo está en [`plan.md`](plan.md).
