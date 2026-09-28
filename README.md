# Portafolio

Portafolio personal one-page, estático, en español y solo modo oscuro. Stack:
Next.js 15 (App Router), React 19, TypeScript estricto, Tailwind CSS v4 y pnpm.

El build genera HTML estático en `out/`, pensado para servirse directo con
nginx, sin Node en runtime.

## Requisitos

- `node >= 20`
- `pnpm >= 9`

## Comandos

```bash
pnpm install                        # instalar dependencias
pnpm dev                            # desarrollo en http://localhost:3000
pnpm build                          # build estático -> out/
pnpm lint                           # eslint
pnpm exec tsc --noEmit              # chequeo de tipos
pnpm exec prettier --check .        # verificación de formato
```

## Estructura

```text
src/app/layout.tsx       # html lang="es", metadatos, tema oscuro
src/app/page.tsx         # composición one-page
src/app/globals.css      # @import "tailwindcss";
src/components/          # secciones y componentes
src/content/             # datos tipados (proyectos, perfil)
public/                  # assets estáticos
```

La verificación de cierre de cada entrega ejecuta, en orden, `pnpm lint`,
`pnpm exec tsc --noEmit`, `pnpm exec prettier --check .` y `pnpm build`.

## Publicación (VPS + nginx)

Sin Docker, sin Vercel, sin Node en runtime: el build es un directorio de
archivos estáticos que nginx sirve directo.

1. Generar el artefacto:

   ```bash
   pnpm build
   ```

   El contenido queda en `out/` (`out/index.html`, `out/_next/static/` y los
   assets de `public/` copiados dentro).

2. Copiar `out/` al VPS:

   ```bash
   rsync -avz --delete out/ user@vps:/var/www/portfolio/
   ```

3. Configurar nginx con `nginx.conf` (en la raíz del repo). Su `root` apunta a
   la carpeta desplegada (`/var/www/portfolio`) y resuelve con
   `try_files $uri $uri/ /index.html =404`, gzip y caché larga en
   `/_next/static`.

4. Validar y recargar:

   ```bash
   sudo nginx -t && sudo systemctl reload nginx
   ```

`public/cv.pdf` no se publica hasta existir el archivo real, por eso la sección
Sobre mí no muestra botón de descarga.
