"use client"

import { useEffect, useRef, useState } from "react"

export function TokenomicsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-[#2E2DF2] relative overflow-hidden">
      {/* Grid texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />

      <div className="container mx-auto relative z-10">
        <h2
          className="text-5xl md:text-7xl font-black text-black text-center mb-4"
          style={{ textShadow: "3px 3px 0px #F2DB69" }}
        >
          TOKENOMICS
        </h2>
        <p className="text-2xl md:text-3xl font-bold text-[#F2DB69] text-center mb-12">財富殿堂</p>

        <div className="flex justify-center mb-12">
          <div className="p-8 border-4 border-black bg-black shadow-2xl transform hover:scale-105 transition-transform max-w-md w-full">
            <div className="flex items-center justify-center mb-4">
              <span className="text-[#F2DB69] text-3xl">💰</span>
            </div>
            <h4 className="text-[#F2DB69] font-black text-xl mb-4 tracking-wider">TOTAL SUPPLY</h4>
            <p className="text-white text-4xl font-black tabular-nums">
              {isVisible ? <CountUp end={1000000000} duration={2} /> : "0"}
            </p>
            <div className="mt-4 h-1 bg-[#F2DB69] w-1/2 mx-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center max-w-6xl mx-auto mt-12">
          <div className="p-6 border-4 border-black bg-black shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-3">
              <span className="text-[#F2DB69] text-3xl">💰</span>
            </div>
            <h4 className="text-[#F2DB69] font-black text-lg mb-3 tracking-wider">CIRCULATING</h4>
            <p className="text-white text-3xl font-black">
              {isVisible ? <CountUp end={80} duration={1.5} suffix="%" /> : "0%"}
            </p>
            <div className="mt-3 h-1 bg-[#F2DB69] w-1/2 mx-auto" />
          </div>

          <div className="p-6 border-4 border-black bg-black shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-3">
              <span className="text-[#F2DB69] text-3xl">🔒</span>
            </div>
            <h4 className="text-[#F2DB69] font-black text-lg mb-3 tracking-wider">LOCKED</h4>
            <p className="text-white text-3xl font-black">
              {isVisible ? <CountUp end={10} duration={1.2} suffix="%" /> : "0%"}
            </p>
            <div className="mt-3 h-1 bg-[#F2DB69] w-1/2 mx-auto" />
          </div>

          <div className="p-6 border-4 border-black bg-black shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-3">
              <span className="text-[#F2DB69] text-3xl">🔥</span>
            </div>
            <h4 className="text-[#F2DB69] font-black text-lg mb-3 tracking-wider">DEV BURNT</h4>
            <p className="text-white text-3xl font-black">
              {isVisible ? <CountUp end={5} duration={1} suffix="%" /> : "0%"}
            </p>
            <div className="mt-3 h-1 bg-[#F2DB69] w-1/2 mx-auto" />
          </div>

          <div className="p-6 border-4 border-black bg-black shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-3">
              <span className="text-[#F2DB69] text-3xl">📢</span>
            </div>
            <h4 className="text-[#F2DB69] font-black text-lg mb-3 tracking-wider">MARKETING</h4>
            <p className="text-white text-3xl font-black">
              {isVisible ? <CountUp end={3} duration={0.8} suffix="%" /> : "0%"}
            </p>
            <div className="mt-3 h-1 bg-[#F2DB69] w-1/2 mx-auto" />
          </div>

          <div className="p-6 border-4 border-black bg-black shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-3">
              <span className="text-[#F2DB69] text-3xl">👥</span>
            </div>
            <h4 className="text-[#F2DB69] font-black text-lg mb-3 tracking-wider">TEAM</h4>
            <p className="text-white text-3xl font-black">
              {isVisible ? <CountUp end={2} duration={0.6} suffix="%" /> : "0%"}
            </p>
            <div className="mt-3 h-1 bg-[#F2DB69] w-1/2 mx-auto" />
          </div>
        </div>

        <p className="text-center text-xl md:text-2xl text-black font-bold mt-12 italic">
          Every burn is an offering — when tokens vanish, joy grows lighter.
        </p>
        <p className="text-center text-lg md:text-xl text-[#F2DB69] font-black mt-2">
          每次燃燒都是供奉 — 代幣消失，喜悅更輕盈。
        </p>
      </div>
    </section>
  )
}

function CountUp({ end, duration, suffix = "" }: { end: number; duration: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  )
}
