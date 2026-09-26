# AGENTS.md — Portfolio

## Proyecto

Portfolio personal one-page, estático, en español, solo modo oscuro.
Fuente visual: `wireframes/` (local, no se commitea — ver `.gitignore`).
Secciones: Hero, Projects, Project-detail (modal), About, Contact.

Stack fijado, no cambiar sin aprobación explícita:
`Next.js 15 (App Router) + React 19 + TypeScript estricto + Tailwind CSS v4 + pnpm`.
Deploy: build estático (`out/`) servido directo con `nginx` en VPS propio. Sin Docker, sin Node en runtime. Nada de Vercel.

## Setup

Requiere `node >= 20`, `pnpm >= 9`.

Scaffold inicial (solo si el repo sigue vacío):

```bash
pnpm dlx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm
pnpm install
```

Comandos día a día (deben existir en `package.json`):

```bash
pnpm dev      # dev en http://localhost:3000
pnpm build    # build estático -> out/
pnpm start    # solo si hay server; en v1 estático no se usa
pnpm lint     # eslint
pnpm exec tsc --noEmit          # chequeo tipos
pnpm exec prettier --check .    # formato
```

## Estructura esperada

```text
src/app/layout.tsx        # html lang="es", metadata, color-scheme dark
src/app/page.tsx          # composición one-page
src/app/globals.css       # @import "tailwindcss";
src/components/Navbar.tsx
src/components/Hero.tsx
src/components/Projects.tsx
src/components/ProjectCard.tsx
src/components/ProjectModal.tsx
src/components/About.tsx
src/components/Contact.tsx
src/components/Footer.tsx
src/content/projects.ts   # datos Irruptivo, ClockLog, etc.
src/content/profile.ts    # bio, links, skills
public/                   # foto hero, avatares, cv.pdf, og-image
nginx.conf
```

Si `next.config.ts` no existe, crearlo con:

```ts
import type { NextConfig } from "next";
const config: NextConfig = { output: "export", images: { unoptimized: true } };
export default config;
```

Motivo: `output: "export"` genera `out/` servible por nginx sin Node en runtime.

## UI — contrato desde wireframes

Leer `wireframes/*.png` antes de tocar UI. Son la spec:

- `hero.png`: split. Izquierda foto sangrada `grayscale object-cover`. Derecha titular + 2 CTAs.
- `projects.png`: nav `Projects / About / Contact`. Grupos `Featured` + `Building in public`. Card: screenshot izquierda, título + pills stack + descripción derecha.
- `project-detail.png`: `Card expanded (on click)` = modal centrado con `X`, imagen, descripción, stack, 2 botones (Demo / Repo). Cerrar con `X`, `Escape` y click fuera. Focus trap mínimo.
- `about.png`: avatar circular, nombre, pills stack (4+2), bullets experiencia, botón descarga CV (`/cv.pdf`).
- `contact.png`: ignorar inputs de formulario. **v1 solo links**: `mailto:`, GitHub, LinkedIn, X con `target="_blank" rel="noopener noreferrer"`.

Reglas globales:

- Todo el contenido en español. Descripciones de proyectos también en español.
- Solo oscuro. Base cercana a `#0a0a0a`, bordes sutiles `white/10`, radios grandes (`rounded-2xl/3xl`). No `light mode`, no `next-themes`.
- Mobile-first responsive. Hero stackea en vertical en móvil.
- Accesibilidad mínima: `alt` en imágenes, `aria-label` en iconos, contraste AA, foco visible, modal con `role="dialog" aria-modal="true"`.

## Estilo de código

- Server Components por defecto. `"use client"` solo en `ProjectModal`, navbar móvil, o interacción real.
- TypeScript `strict`. Nada de `any` sin justificar. Tipos de contenido en `src/content/*.ts`.
- Alias `@/*` para imports. Nada de rutas relativas `../../../`.
- Tailwind para todo el estilo. Nada de CSS Modules ni `style={{}}` salvo excepción justificada.
- `next/image` para fotos/screenshots. Hero con `priority`.
- Contenido hardcodeado en `src/content/`, nunca inline en JSX largo.
- Español en UI, inglés solo en nombres técnicos (`Featured`, `Building in public` se traducen o se mantienen solo si el wireframe final lo exige — por defecto traducir).

## Calidad — verificación obligatoria por iteración

El loop agéntico no da una tarea por hecha hasta que pase esto:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm exec prettier --check .
pnpm build
```

- Cero warnings de ESLint en archivos tocados.
- `pnpm build` debe generar `out/` sin errores.
- No agregar Vitest/Playwright en v1 (portfolio estático). Si se agregan después, documentarlo aquí primero.

## Build + Deploy (VPS + nginx)

- No usar comandos ni config de Vercel ni de Docker.
- Sin `Dockerfile`. El build genera `out/` y nginx lo sirve directo.
- `nginx.conf`: servir estáticos, `try_files $uri $uri/ /index.html =404`, gzip, cache larga en `/_next/static`.
- Puertos: exponer `80`. Nada de `.env` en v1. No commitear secretos.

Comandos de referencia:

```bash
pnpm build
rsync -avz --delete out/ user@vps:/var/www/portfolio/
```

## Reglas para el loop agéntico

1. Cambios pequeños por iteración: una sección por vez (Hero → Projects → Modal → About → Contact).
2. Antes de codificar, leer `wireframes/*.png` correspondiente y `loop/.loop/task.md` si no está vacío.
3. No tocar `loop/`, `wireframes/`, `.agents/` más allá de lectura. Ya están en `.gitignore`, no forzar `git add -f`.
4. No agregar dependencias sin justificar: `framer-motion`, CMS, i18n, `next-themes` están prohibidos en v1 salvo orden explícita.
5. No agregar API Routes, Server Actions, ni `fetch`/POST. Contact es solo links.
6. Commits en español, formato: `[sección] descripción breve`.

## Troubleshooting

- `pnpm build` falla con imágenes: verificar `images.unoptimized: true` en `next.config.ts` (obligatorio con `output: export`).
- Página en blanco tras deploy nginx: revisar `try_files` y que el `root` apunte a `out/`, no a `.next/`.
- Estilos Tailwind no aplican: verificar `@import "tailwindcss";` en `globals.css` y que `layout.tsx` lo importe.
