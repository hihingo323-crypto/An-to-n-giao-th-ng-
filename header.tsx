"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">🚗</div>
            <h1 className="text-xl font-bold">An Toàn Giao Thông</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#laws" className="hover:opacity-80 transition">
              Luật Lệ
            </Link>
            <Link href="#tips" className="hover:opacity-80 transition">
              Mẹo Lái Xe
            </Link>
            <Link href="#about" className="hover:opacity-80 transition">
              Về Chúng Tôi
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl">
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="#laws" className="hover:opacity-80 transition">
              Luật Lệ
            </Link>
            <Link href="#tips" className="hover:opacity-80 transition">
              Mẹo Lái Xe
            </Link>
            <Link href="#about" className="hover:opacity-80 transition">
              Về Chúng Tôi
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
