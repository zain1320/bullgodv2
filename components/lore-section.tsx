"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function LoreSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeFrame, setActiveFrame] = useState(0)
  const [scrollProgress, setScrollProgress] = useState<number[]>([0, 0, 0, 0, 0, 0])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const frames = section.querySelectorAll("[data-frame]")

      const newProgress = Array.from(frames).map((frame) => {
        const rect = frame.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Calculate how much of the frame is visible
        const frameTop = rect.top
        const frameBottom = rect.bottom

        // Frame enters from bottom, exits from top
        if (frameTop > windowHeight) return 0 // Not yet visible
        if (frameBottom < 0) return 1 // Already passed

        // Calculate progress (0 to 1) as frame moves through viewport
        const progress = 1 - frameTop / windowHeight
        return Math.max(0, Math.min(1, progress))
      })

      setScrollProgress(newProgress)

      // Set active frame based on which is most visible
      const mostVisibleIndex = newProgress.reduce(
        (maxIdx, progress, idx, arr) => (progress > arr[maxIdx] && progress < 0.9 ? idx : maxIdx),
        0,
      )
      setActiveFrame(mostVisibleIndex)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const frames = [
    {
      image: "/legend/frame1.png",
      title: "The Golden Cat of Fortune",
      titleCn: "黃金之貓",
      text: "Before coins and chains, fortune walked the earth as a golden cat - Yoxi (有喜), born from joy and blessed by dragons. His steps shimmered with light, and prosperity followed wherever he roamed.",
      textCn: "在沒有幣與鎖的時代，黃金之貓有喜誕生於喜悅，受龍之氣息庇佑。祂行走之處，步步生光，財富與幸福隨之而來。",
    },
    {
      image: "/legend/frame2.png",
      title: "The Awakening",
      titleCn: "覺醒",
      text: "Beneath red clouds and golden mist, a shadow stirred - not of darkness, but of light. The guardian of fortune had awakened once more to watch over the East.",
      textCn: "在紅雲與金霧之下，一道光影甦醒。那不是黑暗的陰影，而是光明的守護。財富的守護者，再次注視著東方。",
    },
    {
      image: "/legend/frame3.png",
      title: "The Eternal Guardian",
      titleCn: "永恆守護者",
      text: "Through dynasties and empires, Yoxi's name echoed in temples and markets alike - a sacred spirit whose smile brought calm and whose presence promised abundance.",
      textCn: "歷經王朝與帝國更替，有喜之名在廟宇與市集中回響。祂的微笑帶來安寧，祂的身影象徵豐盈與祥和。",
    },
    {
      image: "/legend/frame4.png",
      title: "The Story of the Grandfather",
      titleCn: "祖父的故事",
      text: "In a quiet home of modern China, an old man spoke to his grandson of the Golden Cat who guarded the wealth of the East. The child listened, eyes bright with wonder.",
      textCn: "在現代中國的一間靜屋裡，祖父向孫子講述那位守護東方財富的黃金之貓。孩子凝神傾聽，雙眼閃爍著好奇與憧憬。",
    },
    {
      image: "/legend/frame5.png",
      title: "The Vision of Prosperity",
      titleCn: "繁榮的願景",
      text: "The boy grew up and built a new temple for fortune - Binance. Some say the same golden spirit that blessed emperors now guides builders of the blockchain age.",
      textCn: "那個男孩長大後，建立了新的財富殿堂——幣安。人們說，昔日庇佑帝王的黃金之靈，如今引領著鏈上時代的創造者。",
    },
    {
      image: "/legend/frame6.png",
      title: "The Golden Guardian of the New Age",
      titleCn: "新時代的黃金守護者",
      text: "Above a city of golden light and endless data, Yoxi stands watch - silent, steady, eternal. His eyes gleam across the digital heavens as joy and fortune flow once more.",
      textCn: "在閃耀著金光與數據的城市之上，有喜靜靜守望。祂的目光穿越數位天穹，沉穩而永恆，讓喜悅與財富再次流動。",
    },
  ]

  return (
    <section ref={sectionRef} className="relative bg-black">
        <div className="relative py-16 md:py-24 text-center border-b border-[#F2DB69]/20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#F2DB69] glow-text mb-4 tracking-tight">
            THE LEGEND OF YOXI
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#F2DB69]/90 mb-6">有喜傳說</h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-[#F2DB69] to-transparent max-w-md mx-auto" />
        </div>
      </div>

      <div className="space-y-0">
        {frames.map((frame, index) => {
          const progress = scrollProgress[index] || 0
          const opacity = Math.min(1, progress * 1.5)
          const scale = 1 + progress * 0.1 // Subtle zoom effect
          const translateY = (1 - progress) * 50 // Parallax effect

          return (
            <div
              key={index}
              data-frame={index}
              className="relative min-h-screen flex items-end justify-center px-4 pb-12"
            >
              <div
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  opacity,
                  transform: `scale(${scale}) translateY(${translateY}px)`,
                }}
              >
                <Image
                  src={frame.image || "/placeholder.svg"}
                  alt={frame.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div
                className="relative z-10 max-w-3xl w-full transition-all duration-700 ease-out"
                style={{
                  opacity: Math.max(0, (progress - 0.2) * 2),
                  transform: `translateY(${Math.max(0, (1 - progress) * 30)}px)`,
                }}
              >
                <div className="space-y-4 text-center">
                  <h2 className="text-2xl md:text-4xl font-black text-[#FFF9E6] glow-text drop-shadow-2xl">
                    {frame.title}
                  </h2>
                  <h3 className="text-lg md:text-2xl font-bold text-[#F2DB69] drop-shadow-xl">{frame.titleCn}</h3>

                  <div className="h-px bg-gradient-to-r from-transparent via-[#F2DB69] to-transparent my-4 max-w-md mx-auto" />

                  <p className="text-sm md:text-base text-[#FFF9E6] leading-relaxed drop-shadow-lg px-4 max-w-2xl mx-auto">
                    {frame.text}
                  </p>
                  <p className="text-xs md:text-sm text-[#F2DB69] leading-relaxed font-medium drop-shadow-lg px-4 max-w-2xl mx-auto">
                    {frame.textCn}
                  </p>
                </div>
              </div>

              {index % 2 === 0 && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-[#F2DB69] rounded-full animate-float-particle opacity-40"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${8 + Math.random() * 4}s`,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
