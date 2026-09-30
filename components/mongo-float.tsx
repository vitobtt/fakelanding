"use client"

import { useRef } from "react"

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"

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

    // La patada se reproduce una vez; al salir del hero y volver con el scroll
    // se repite desde el principio
    const video = ref.current
    if (!video) return
    ScrollTrigger.create({
      trigger: video.closest("section") ?? video,
      start: "top top",
      end: "bottom top",
      onEnterBack: () => {
        video.currentTime = 0
        video.play()
      },
    })
  })

  return (
    <video
      ref={ref}
      src="/video/mongo-patada-horizontal.webm"
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      className={className}
    />
  )
}
