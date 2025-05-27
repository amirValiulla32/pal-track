import type React from "react"
import type { Metadata } from "next"
import { PT_Serif } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "PalTrack - Documenting the Truth",
  description:
    "An open-source platform archiving the destruction in Gaza through articles, satellite images, and media analysis.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ptSerif.className} bg-black text-white min-h-screen`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
