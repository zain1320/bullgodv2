import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Ticker } from "@/components/ticker"
import { ProsperityCard } from "@/components/prosperity-card"
import { LoreSection } from "@/components/lore-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { CollectionSection } from "@/components/collection-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2E2DF2] overflow-x-hidden">
      <Header />
      <Ticker />
      <Hero />
      <ProsperityCard />
      <LoreSection />
      <TokenomicsSection />
      <CollectionSection />
      <CTASection />
      <Footer />
    </main>
  )
}
