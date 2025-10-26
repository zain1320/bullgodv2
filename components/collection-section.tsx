"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"

export function CollectionSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const items = [
    {
      number: "01",
      title: "WARRIOR YOXI",
      subtitle: "POWER × STRENGTH × COURAGE",
      chinese: "戰士喜",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251016-WA0018-hQHxVZn0hq2FYoATQYnOVBJAzRaDje.jpg",
    },
    {
      number: "02",
      title: "FORTUNE YOXI",
      subtitle: "WEALTH × PROSPERITY × JOY",
      chinese: "財富喜",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251016-WA0029-N1ZUextKhkm3wmgID6NWk1mIxBxG3Q.jpg",
    },
    {
      number: "03",
      title: "COOL YOXI",
      subtitle: "STYLE × CONFIDENCE × SWAGGER",
      chinese: "酷炫喜",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251016-WA0015-QkumQ2OlbL1KC40qs0FSlukbCwbCIA.jpg",
    },
    {
      number: "04",
      title: "GAMER YOXI",
      subtitle: "SKILL × FOCUS × VICTORY",
      chinese: "遊戲喜",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-15%20at%2016.17.00_c8de5c9a-plIZAM1Z8YhJ01YArOCy6ugyOtdYAw.jpg",
    },
    {
      number: "05",
      title: "JOURNEY YOXI",
      subtitle: "ADVENTURE × FREEDOM × SPIRIT",
      chinese: "旅程喜",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-15%20at%2013.10.52_53e87326-MpC2Lsak6j71P4PJzguY1exbmf7NxK.jpg",
    },
    {
      number: "06",
      title: "WISDOM YOXI",
      subtitle: "KNOWLEDGE × PEACE × HARMONY",
      chinese: "智慧喜",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-15%20at%2013.10.52_03195900-1tszqD9uYl87EljZVbxuckMjGQWB8D.jpg",
    },
    {
      number: "07",
      title: "CHEF YOXI",
      subtitle: "ABUNDANCE × TRADITION × BLESSING",
      chinese: "廚師喜",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251016-WA0013-f6f9RrcTswG1hsqCfkzOrICDK9qenZ.jpg",
    },
    {
      number: "08",
      title: "COMMUNITY YOXI",
      subtitle: "UNITY × FRIENDSHIP × CELEBRATION",
      chinese: "社區喜",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-15%20at%2016.14.50_6fd1449c-Fr91yki6lRmsXRZ6poHZwYRmiNHTDD.jpg",
    },
  ]

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchend", handleTouchEnd)
    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Parchment texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />

      <div className="container mx-auto relative z-10">
        <h2
          className="text-5xl md:text-7xl font-black text-[#F2DB69] text-center mb-4"
          style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.8)" }}
        >
          SCROLLS OF JOY
        </h2>
        <p className="text-2xl md:text-3xl font-bold text-white text-center mb-12">喜之卷軸</p>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto pb-8 scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex gap-8 animate-scroll-fast hover:[animation-play-state:paused]">
            {/* Duplicate items twice for seamless infinite loop */}
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="relative group flex-shrink-0 w-[350px] transform hover:-translate-y-4 hover:scale-105 transition-all duration-300"
              >
                <div className="border-4 border-[#F2DB69] overflow-hidden bg-[#2E2DF2] p-4 shadow-2xl hover:shadow-[#F2DB69]/50">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-[500px] object-cover border-2 border-black group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gold glow on hover */}
                    <div className="absolute inset-0 bg-[#F2DB69]/0 group-hover:bg-[#F2DB69]/20 transition-all duration-300 pointer-events-none" />
                  </div>
                  <div className="absolute top-8 left-8 bg-[#F2DB69] text-black font-black text-4xl px-4 py-2 border-2 border-black shadow-lg">
                    {item.number}
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="text-[#F2DB69] font-black text-2xl mb-2" style={{ textShadow: "2px 2px 0px #000" }}>
                      {item.title}
                    </h4>
                    <p className="text-white font-bold text-sm mb-2">{item.subtitle}</p>
                    <p className="text-[#F2DB69] font-black text-3xl">{item.chinese}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
