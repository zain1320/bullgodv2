"use client"

import { Button } from "@/components/ui/button"
import { Twitter } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-32 px-4 bg-[#2E2DF2] overflow-hidden">
      {/* Wave pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="black" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>

      {/* Floating gold coins */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float-slow opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            🪙
          </div>
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2
          className="text-6xl md:text-8xl font-black text-[#F2DB69] mb-6"
          style={{ textShadow: "5px 5px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000" }}
        >
          有喜来了
        </h2>
        <p className="text-3xl md:text-4xl font-black text-black mb-4">JOY HAS ARRIVED</p>

        <p className="text-xl md:text-2xl text-white mb-4 max-w-2xl mx-auto leading-relaxed">
          The legend has awakened. The Golden Cat walks again.
        </p>
        <p className="text-lg md:text-xl text-black font-bold mb-12">傳說已醒。金貓再臨。</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            size="lg"
            className="bg-black hover:bg-black/90 hover:scale-110 transition-all text-[#F2DB69] font-black text-xl px-12 py-8 border-4 border-[#F2DB69] shadow-2xl"
            asChild
          >
            <a href="https://x.com/JoyOnBNB" target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-2 h-6 w-6" />
              FOLLOW ME
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
