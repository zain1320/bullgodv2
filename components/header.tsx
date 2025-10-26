"use client"

import { Instagram, Twitter, Send, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const ecosystemLinks = [
    { name: "YOXI TOKEN", soon: true },
    { name: "DEXSCREENER", soon: true },
    { name: "COINGECKO", soon: true },
    { name: "COINMARKETCAP", soon: true },
    { name: "GECKOTERMINAL", soon: true },
    { name: "DEXTOOLS", soon: true },
  ]

  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "Twitter", icon: Twitter, url: "https://x.com/JoyOnBNB" },
    { name: "Telegram", icon: Send, url: "#" },
    { name: "TikTok", icon: Music, url: "#" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2E2DF2] border-b-2 border-black">
        <div className="container mx-auto px-2 md:px-4 py-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <img
              src="/yoxi-logo.png"
              alt="YOXI Logo"
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-black object-cover shadow-lg flex-shrink-0"
              style={{
                imageRendering: "high-quality",
                WebkitFontSmoothing: "antialiased",
                backfaceVisibility: "hidden",
              }}
            />
            <h1
              className="text-2xl md:text-4xl font-black text-[#F2DB69] tracking-tight whitespace-nowrap"
              style={{ textShadow: "3px 3px 0px #000" }}
            >
              YOXI
            </h1>
          </div>

          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <Button
              onClick={() => setIsEcosystemOpen(!isEcosystemOpen)}
              className="bg-[#F2DB69] hover:bg-[#F2DB69]/90 text-black font-black px-3 md:px-6 text-sm md:text-base border-2 border-black whitespace-nowrap"
              style={{ textShadow: "none" }}
            >
              ECOSYSTEM {isEcosystemOpen ? "▲" : "▼"}
            </Button>

            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black border-2 border-black flex-shrink-0"
            >
              <div className="flex flex-col gap-1">
                <div className="w-5 h-0.5 bg-black"></div>
                <div className="w-5 h-0.5 bg-black"></div>
                <div className="w-5 h-0.5 bg-black"></div>
              </div>
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        <div className="bg-blue-600 border-t-2 border-b-2 overflow-hidden py-2 border-foreground">
          <div className="flex animate-scroll whitespace-nowrap">
            <span className="text-[#F2DB69] font-black text-lg mx-8">PROSPERITY RETURNS · 財富回歸</span>
            <span className="text-[#F2DB69] font-black text-lg mx-8">THE EASTERN SPIRIT · 東方之靈</span>
            <span className="text-[#F2DB69] font-black text-lg mx-8">THE LAST GUARDIAN · 最後守護者</span>
            <span className="text-[#F2DB69] font-black text-lg mx-8">PROSPERITY RETURNS · 財富回歸</span>
            <span className="text-[#F2DB69] font-black text-lg mx-8">THE EASTERN SPIRIT · 東方之靈</span>
            <span className="text-[#F2DB69] font-black text-lg mx-8">THE LAST GUARDIAN · 最後守護者</span>
          </div>
        </div>
      </header>

      {isEcosystemOpen && (
        <div className="fixed top-[120px] right-4 z-50 w-80 animate-fade-in">
          <div className="relative">
            <div className="bg-[#F2DB69] border-4 border-black rounded-t-lg px-4 py-2 flex items-center justify-between">
              <span className="text-black font-black text-lg">ECOSYSTEM ▲</span>
              <button
                onClick={() => setIsEcosystemOpen(false)}
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800"
              >
                ✕
              </button>
            </div>

            <div className="bg-black border-4 border-t-0 border-black rounded-b-lg p-4 space-y-2">
              {ecosystemLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 px-4 hover:bg-[#F2DB69]/10 transition-colors group cursor-default"
                >
                  <span className="text-[#F2DB69] font-bold text-lg group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                  {link.soon && (
                    <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded border-2 border-black">
                      SOON
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute -top-4 -left-4 text-3xl animate-float">🪙</div>
            <div className="absolute -bottom-4 -right-4 text-3xl animate-float" style={{ animationDelay: "1s" }}>
              🪙
            </div>
          </div>
        </div>
      )}

      {isEcosystemOpen && <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setIsEcosystemOpen(false)} />}

      {isMenuOpen && (
        <div className="fixed top-[120px] right-4 z-50 w-64 animate-fade-in">
          <div className="relative">
            <div className="bg-[#00FF00] border-4 border-black rounded-t-lg px-4 py-2 flex items-center justify-between">
              <span className="text-black font-black text-lg">SOCIAL MEDIA</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800"
              >
                ✕
              </button>
            </div>

            <div className="bg-black border-4 border-t-0 border-black rounded-b-lg p-4 space-y-2">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                if (link.url === "#") {
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 py-3 px-4 hover:bg-[#00FF00]/20 transition-colors group rounded cursor-default"
                    >
                      <Icon className="h-6 w-6 text-[#00FF00] group-hover:text-white transition-colors" />
                      <span className="text-[#00FF00] font-bold text-lg group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                    </div>
                  )
                }
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-3 px-4 hover:bg-[#00FF00]/20 transition-colors group rounded"
                  >
                    <Icon className="h-6 w-6 text-[#00FF00] group-hover:text-white transition-colors" />
                    <span className="text-[#00FF00] font-bold text-lg group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {isMenuOpen && <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setIsMenuOpen(false)} />}
    </>
  )
}
