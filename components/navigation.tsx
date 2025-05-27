"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/timeline", label: "Timeline" },
    { href: "/satellite", label: "Satellite" },
    { href: "/articles", label: "Articles" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
  <span className="text-2xl font-extrabold text-white tracking-tight leading-none">
    PalTrack
  </span>
  <div className="flex space-x-[4px] mt-[2px]">
    <div className="w-6 h-[3px] bg-red-500 rounded-sm" />
    <div className="w-6 h-[3px] bg-green-600 rounded-sm" />
    <div className="w-6 h-[3px] bg-black rounded-sm" />
    <div className="w-6 h-[3px] bg-white rounded-sm opacity-90" />
  </div>
</Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-red-400 ${
                  pathname === item.href ? "text-red-400" : "text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-red-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-red-400 hover:bg-gray-800 rounded-md ${
                    pathname === item.href ? "text-red-400 bg-gray-800" : "text-gray-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
