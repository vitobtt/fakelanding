"use client"

import "lenis/dist/lenis.css"

import Lenis from "lenis"
import { useEffect } from "react"

import { gsap, ScrollTrigger } from "@/lib/gsap"

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 })

    // Lenis avanza con el reloj de GSAP y avisa a ScrollTrigger en cada frame
    lenis.on("scroll", ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return null
}
