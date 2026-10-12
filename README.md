# Panas RPG, landing page

Next.js 16 (App Router, export estático), TypeScript y CSS Modules. Diseño: propuesta E ("Pantalla de título").

```bash
pnpm install
pnpm dev      # desarrollo
pnpm build    # genera out/ (HTML estático)
pnpm lint
```

## Arquitectura (screaming architecture)

Las carpetas de `src/` dicen de qué trata el producto, no qué framework usa. Cada capacidad agrupa lo suyo:

```
src/
  app/            Rutas de Next, solo composición (layout.tsx, page.tsx)
  modpack/        Núcleo: qué es Panas RPG (versiones, enlaces, autor)
  site-shell/     Navegación, pie de página y enlace "saltar al contenido"
  hero/           Portada
  world-tour/     Recorrido por los cuatro mundos (la cámara que viaja por el arte)
  biomes/         Capturas reales del juego (galería)
  quests/         Las 7 fases de misiones (FTB Quests)
  skills/         Clases y árbol de habilidades
  installation/   Requisitos, lanzadores y orden de resource packs
  changelog/      Registro de versiones
  community/      Cierre: unirse al grupo
  shared/         UI y estilos sin dominio (Container, ButtonLink, tokens)
```

Dentro de cada capacidad:

| Carpeta | Contiene |
|---|---|
| `domain/` | Tipos del negocio (`Release`, `ResourcePack`, `QuestPhase`...) |
| `application/` | Casos de uso pequeños (`getHeroFacts`, `getInstallRequirements`) |
| `infrastructure/` | Fuente del contenido (`*.content.ts`). Cambiar un texto o un dato se hace aquí |
| `presentation/` | Componentes React y su CSS Module. Las imágenes viven en `assets/` junto a quien las usa |

Reglas: las dependencias van hacia dentro (presentation → application → domain); `shared/` no conoce ninguna capacidad; solo son Client Components los que necesitan estado del navegador (`SiteNavigation`, `TourCamera`, `LauncherTabs`).

## Pendiente de confirmar

- `loadedMods` (240) es el recuento del juego (captura del menú). El manifest del pack lista 234 archivos de CurseForge (227 en `modlist.html`) más 5 jars propios; decidir qué cifra mostrar (`src/modpack/infrastructure/panas-rpg.content.ts`).
- Permiso de uso del arte de la ficha de CurseForge (autor: juanse_vg).
- Sin imagen Open Graph: falta el dominio final para `metadataBase`.
- `contenido/` (texto de la web anterior) y `propuestas/` (propuestas de diseño en HTML) son material local ignorado por git; no forman parte de la build.
