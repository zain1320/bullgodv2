"use client"

import { useEffect, useRef, useState } from "react"

export function ProsperityCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <section className="relative py-8 md:py-20 px-4 md:px-8 bg-[#2E2DF2]">
      <div
        ref={cardRef}
        className={`max-w-6xl mx-auto bg-black border-4 border-[#F2DB69] rounded-2xl overflow-hidden transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-12 -rotate-1"
        }`}
        style={{
          boxShadow: "0 0 30px rgba(242, 219, 105, 0.3), 0 10px 40px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-video md:aspect-auto md:min-h-[400px] p-4 md:p-6 flex items-center justify-center py-0">
            <div
              className="relative w-full max-w-full overflow-hidden border-2 border-[#F2DB69]"
              style={{
                boxShadow: "0 0 20px rgba(242, 219, 105, 0.2)",
              }}
            >
              <img
                src="/images/design-mode/b3zdC.gif"
                alt="YOXI walking through golden temple gate"
                className="w-full h-full object-cover pr-0 mt-0 pt-0 border-none"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center p-6 md:p-12 space-y-4 md:space-y-6 text-center">
            <h2
              className="text-3xl md:text-5xl font-black text-[#F2DB69] leading-tight"
              style={{
                textShadow:
                  "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 0 0 20px rgba(242, 219, 105, 0.5)",
              }}
            >
              THE PROSPERITY
              <br />
              PROTOCOL
            </h2>

            <div className="space-y-3 md:space-y-4 w-full">
              <p className="text-[#FFF9E6] text-sm md:text-xl leading-relaxed font-medium">
                Where Eastern mysticism meets digital rebellion.
              </p>
              <p className="text-[#F2DB69] text-base md:text-2xl font-bold italic">Fortune favors the bold.</p>
            </div>

            <div className="flex items-center gap-3 pt-4 w-full max-w-md">
              <div className="h-1 flex-1 bg-gradient-to-r from-[#F2DB69] to-transparent rounded-full" />
              <span className="text-3xl">喜</span>
              <div className="h-1 flex-1 bg-gradient-to-l from-[#F2DB69] to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
