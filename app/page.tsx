import Image from "next/image"

import { MongoFloat } from "@/components/mongo-float"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const secciones = [
  { title: "Inicio", href: "#" },
  { title: "Sección 1", href: "#seccion-1" },
  { title: "Sección 2", href: "#seccion-2" },
]

export default function Page() {
  return (
    <>
      <header className="fixed inset-x-0 top-5 z-40 px-4">
        <div className="mx-auto grid h-12 max-w-[860px] grid-cols-[1fr_auto_1fr] items-center rounded-full bg-linear-to-r from-[#3a2a12] to-[#4a2e1a] px-2 pl-3.5 text-white shadow-lg shadow-black/20">
          <a
            href="#"
            aria-label="Inicio"
            className="flex items-center gap-2 justify-self-start font-bold"
          >
            {/* Sustituir por: <Image src="/logo.svg" alt="Logo" width={144} height={40} priority /> */}
            <span className="size-5 rounded-full bg-[#f472b6]" />
            Logo
          </a>

          <NavigationMenu align="center" className="max-sm:hidden">
            <NavigationMenuList>
              {secciones.map((s) => (
                <NavigationMenuItem key={s.title}>
                  <NavigationMenuLink
                    href={s.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-white/90 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                    )}
                  >
                    {s.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="justify-self-end rounded-full bg-[#d23a4c] px-4 text-white hover:bg-[#b82f40]">
            Empezar
          </Button>
        </div>
      </header>

      <section className="relative h-svh w-full overflow-hidden bg-linear-to-br from-[#f2bfdc] to-[#e6cdf0]">
        {/* El paisaje ocupa todo el ancho anclado abajo; el sol y el personaje
            se posicionan en % sobre él para que no se descuadren */}
        <div className="absolute bottom-0 left-1/2 aspect-[2944/1015] w-[max(100%,720px)] -translate-x-1/2"
        >
          <Image
            src="/image/the-sun.webp"
            alt=""
            width={860}
            height={1111}
            priority
            sizes="18vw"
            className="absolute bottom-[46%] left-[12.5%] w-[18%]"
          />
          <Image
            src="/image/background.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <MongoFloat className="absolute bottom-[4%] left-[64%] w-[20%]" />
        </div>
      </section>

      <section
        id="seccion-2"
        className="relative flex items-center overflow-hidden py-24"
      >
        <video
          src="/video/caballo.webm"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 size-full -scale-x-100 object-cover"
        />
        <div className="absolute inset-0 bg-blue-600 opacity-50" />
        <div className="relative mx-auto grid w-full max-w-[1368px] grid-cols-1 gap-8 px-4 md:grid-cols-2">
          <div className="flex min-h-[300px] items-center justify-center">
            <h2 className="max-w-[500px] font-montserrat text-[clamp(2.5rem,4vw,3.5rem)] leading-[1] font-bold tracking-[-0.04em] text-neutral-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
          </div>
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="relative w-full max-w-[500px] overflow-hidden rounded-[20px] shadow-2xl shadow-black/40">
              <video
                src="/video/caballo.webm"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
                className="aspect-video w-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-[1368px] px-4" />
      </section>
    </>
  )
}
