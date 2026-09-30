# Memoria del proyecto

Landing page hecha con Next.js 16, React 19, Tailwind CSS 4, shadcn/ui y GSAP.

## Estructura de la página (`app/page.tsx`)

1. **Header** flotante tipo píldora (marrón oscuro), fijo arriba. Logo (círculo rosa),
   enlaces "Inicio", "Sección 1", "Sección 2" y botón "Empezar" rojo.
2. **Hero** a pantalla completa (`h-svh`) con degradado rosa-lila de cielo:
   - `public/image/background.webp`: paisaje con cielo transparente, a todo el ancho y anclado abajo.
   - `public/image/the-sun.webp`: personaje arcoíris detrás del paisaje, asomando por el horizonte.
   - `public/video/mongo-fin.webm`: personaje naranja delante, flotando con GSAP (`components/mongo-float.tsx`).
   - Los tres van posicionados en % dentro del mismo contenedor para no descuadrarse.
3. **Sección 2** (`#seccion-2`): fondo con `public/video/caballo.webm` invertido en espejo y capa azul al 50%.
   Dos columnas centradas con flex:
   - Columna 1: titular en Montserrat negrita.
   - Columna 2: `caballo.webm` en 16:9, redondeado, con sombra y capa negra al 50%.
4. **Sección negra**: vacía, pendiente de contenido.

## Fuentes (`app/layout.tsx`)

- Inter (`font-sans`), Faster One (`font-display`), Montserrat (`font-montserrat`), Geist Mono.

## Animaciones

- `lib/gsap.ts` registra GSAP + ScrollTrigger + `useGSAP`.
- `components/smooth-scroll.tsx`: scroll suave con Lenis sincronizado con el ticker de GSAP.
- `components/mongo-float.tsx`: flotación en bucle del personaje del hero.

## Pendiente

- El enlace "Sección 1" del menú no apunta a ninguna sección.
- La sección negra está vacía.
- `npx eslint` falla por un error interno de `eslint-plugin-react` (no del código).
