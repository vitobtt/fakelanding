"use client"

import Image from "next/image"
import { useRef } from "react"

import { gsap, useGSAP } from "@/lib/gsap"

export function SunRise({ className }: { className?: string }) {
  const ref = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    // Sale una sola vez desde detrás del horizonte: parte escondido bajo el
    // mar del paisaje (que va delante) y sube hasta su sitio
    gsap.from(ref.current, {
      yPercent: 100,
      duration: 4,
      delay: 0.3,
      ease: "power3.out",
    })
  })

  return (
    <Image
      ref={ref}
      src="/image/the-sun.webp"
      alt=""
      width={860}
      height={1111}
      priority
      sizes="18vw"
      className={className}
    />
  )
}
