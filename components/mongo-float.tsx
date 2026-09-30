"use client"

import { useRef } from "react"

import { gsap, useGSAP } from "@/lib/gsap"

export function MongoFloat({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useGSAP(() => {
    // Flota subiendo y bajando suavemente con un ligero balanceo
    gsap.to(ref.current, {
      y: "-6%",
      rotation: 1.5,
      duration: 2.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <video
      ref={ref}
      src="/video/mongo-fin.webm"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      className={className}
    />
  )
}
