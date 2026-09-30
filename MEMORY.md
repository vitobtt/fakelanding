# Memoria del proyecto

Landing page hecha con Next.js 16, React 19, Tailwind CSS 4, shadcn/ui y GSAP.

## Estructura de la página (`app/page.tsx`)

1. **Header** flotante tipo píldora (marrón oscuro), fijo arriba. Logo (círculo rosa),
   enlaces "Inicio", "Sección 1", "Sección 2" y botón "Empezar" rojo.
2. **Hero** a pantalla completa (`h-svh`) con degradado rosa-lila de cielo:
   - `public/image/background.webp`: paisaje con cielo transparente, a todo el ancho y anclado abajo.
   - `public/image/the-sun.webp`: personaje arcoíris detrás del paisaje, asomando por el horizonte.
   - `public/video/mongo-patada-horizontal.webm`: personaje naranja delante, en el centro, flotando con GSAP
     (`components/mongo-float.tsx`). La patada se reproduce una vez y se repite al volver al hero
     después de que haya salido del todo de la pantalla (ScrollTrigger).
   - Los tres van posicionados en % dentro del mismo contenedor para no descuadrarse. El vídeo de mongo
     es 16:9 con el personaje pequeño, por eso se escala a `w-[71%]`.
3. **Sección 2** (`#seccion-2`): fondo con `public/video/caballo-rugido.webm` invertido en espejo y capa azul al 50%.
   Dos columnas centradas con flex:
   - Columna 1: titular en Montserrat negrita.
   - Columna 2: `caballo.webm` en 16:9, redondeado, con sombra y capa negra al 50%.
4. **Sección negra** (`#seccion-3`): `public/image/monster-isolated.webp` a la izquierda, 700px de alto,
   apoyado abajo y sobresaliendo por encima sobre la sección del caballo.
5. **4 secciones de color** (`#seccion-4` a `#seccion-7`), vacías: colores en la lista `colores`.

Todas las secciones salvo el hero comparten `seccionBase` (altura mínima 600px).

## Fuentes (`app/layout.tsx`)

- Inter (`font-sans`), Faster One (`font-display`), Montserrat (`font-montserrat`), Geist Mono.

## Animaciones

- `lib/gsap.ts` registra GSAP + ScrollTrigger + `useGSAP`.
- `components/smooth-scroll.tsx`: scroll suave con Lenis sincronizado con el ticker de GSAP.
- `components/mongo-float.tsx`: flotación en bucle del personaje del hero y repetición de la patada con ScrollTrigger.

## Pendiente

- El enlace "Sección 1" del menú no apunta a ninguna sección.
- Las 4 secciones de color están vacías.
- `npx eslint` falla por un error interno de `eslint-plugin-react` (no del código).
