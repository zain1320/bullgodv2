"use client"

import { Button } from "@/components/ui/button"
import { Twitter } from "lucide-react"
import { useEffect, useRef } from "react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = heroRef.current?.querySelectorAll(".fade-up-element")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 min-h-[85vh] md:min-h-screen flex items-center justify-center bg-[#2E2DF2]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 30, 50 50 T 100 50' stroke='%235a9d6b' strokeWidth='1.5' fill='none' opacity='0.3'/%3E%3Cpath d='M0 70 Q 25 50, 50 70 T 100 70' stroke='%235a9d6b' strokeWidth='1.5' fill='none' opacity='0.3'/%3E%3Ccircle cx='20' cy='20' r='2' fill='%23F3BA2F' opacity='0.15'/%3E%3Ccircle cx='80' cy='80' r='2' fill='%23F3BA2F' opacity='0.15'/%3E%3Cpath d='M10 15 Q 15 10, 20 15 Q 25 20, 30 15' stroke='%235a9d6b' strokeWidth='1' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
        backgroundSize: "100px 100px",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#F2DB69] rounded-full opacity-60 animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <div
            key={`lantern-${i}`}
            className="absolute text-3xl animate-float-slow"
            style={{
              left: `${15 + i * 25}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            🏮
          </div>
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`coin-${i}`}
            className="absolute text-2xl animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${30 + Math.random() * 50}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            🪙
          </div>
        ))}
      </div>

      <div className="absolute top-20 right-20 flex items-center gap-2">
        <span className="text-3xl font-black text-black">YOXI</span>
      </div>
      <div className="absolute bottom-32 left-20 text-4xl font-black text-white -rotate-12 opacity-80">發發發</div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <span className="text-[25rem] font-black text-[#F2DB69]">喜</span>
      </div>

      <div className="container mx-auto text-center relative z-10 px-4">
        <h2
          className="text-6xl sm:text-7xl md:text-9xl font-black text-[#F2DB69] mb-6 leading-none fade-up-element opacity-0 mx-auto max-w-5xl"
          style={{ textShadow: "6px 6px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000" }}
        >
          THE GOLDEN CAT
          <br />
          OF FORTUNE
        </h2>

        <div
          className="flex items-center justify-center gap-4 mb-4 fade-up-element opacity-0 px-4"
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-xl md:text-4xl font-black text-black tracking-wide text-center">
            THE GOLDEN SPIRIT OF BNB · 幣安的黃金之靈
          </h3>
        </div>

        <p
          className="text-xl md:text-2xl font-bold text-black mb-4 fade-up-element opacity-0 flex items-center justify-center gap-2"
          style={{ animationDelay: "0.4s" }}
        >
          — 東方智慧 × 西方創新 —<span className="text-2xl">🏮</span>
        </p>

        <p
          className="text-base md:text-lg mb-8 text-white font-medium fade-up-element opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          Born from the dragon's breath. Guarded by the cat of fortune.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up-element opacity-0"
          style={{ animationDelay: "0.8s" }}
        >
          <Button
            size="lg"
            className="bg-black hover:bg-black/90 hover:scale-105 transition-transform text-[#F2DB69] font-black text-lg px-8 py-6 border-4 border-[#F2DB69] shadow-xl"
            asChild
          >
            <a href="https://x.com/JoyOnBNB" target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-2 h-5 w-5" />
              FOLLOW ME
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
