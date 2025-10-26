"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t-4 border-[#F2DB69] py-12 px-4">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-black text-[#F2DB69] mb-4">DexScreener</h3>
        <Button
          size="lg"
          className="bg-[#F2DB69] hover:bg-[#F2DB69]/90 text-black font-black text-lg px-8 py-6 border-2 border-black mb-8 cursor-default"
        >
          Chart
        </Button>

        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="bg-[#E63946] hover:bg-[#E63946]/90 text-[#F2DB69] border-2 border-[#F2DB69]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="h-6 w-6" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}
