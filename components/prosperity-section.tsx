import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProsperitySection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-black border-8 border-[#F2DB69] p-2 shadow-2xl">
          <div className="bg-black p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <img
                src="/traditional-chinese-temple-with-red-clouds-and-gol.jpg"
                alt="Traditional Chinese Temple"
                className="w-full h-auto border-4 border-[#F2DB69]"
              />
            </div>
            <div className="flex-1 text-left">
              <h3
                className="text-5xl md:text-6xl font-black text-[#F2DB69] mb-6 leading-tight"
                style={{ textShadow: "3px 3px 0px #E63946" }}
              >
                THE PROSPERITY PROTOCOL
              </h3>
              <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
                Where Eastern mysticism meets digital rebellion. Fortune favours the bold.
              </p>
              <Button
                size="lg"
                className="bg-transparent hover:bg-[#F2DB69]/10 text-[#F2DB69] font-black text-lg px-8 py-6 border-2 border-[#F2DB69]"
              >
                EXPLORE THE COLLECTION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
