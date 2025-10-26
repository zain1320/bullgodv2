import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "YOXI",
  description: "The Golden Cat of Fortune. Guardian of Prosperity. Where ancient joy meets the blockchain age.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "YOXI - The Cat of Fortune",
    description: "The Golden Cat of Fortune. Guardian of Prosperity. Where ancient joy meets the blockchain age.",
    images: [
      {
        url: "/yoxi-logo.png",
        width: 1200,
        height: 630,
        alt: "YOXI - The Golden Cat of Fortune",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YOXI - The Cat of Fortune",
    description: "The Golden Cat of Fortune. Guardian of Prosperity. Where ancient joy meets the blockchain age.",
    images: ["/yoxi-logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
