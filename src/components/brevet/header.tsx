"use client"

import { useState, useEffect } from "react"
import {
  BookOpen,
  Calculator,
  Search,
  Sun,
  Moon,
  Menu,
  GraduationCap,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useUIStore } from "@/lib/store"
import { cn } from "@/lib/utils"

export function Header() {
  const { view, setView, toggleMenu, theme, toggleTheme } = useUIStore()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setView({ type: "search", query: searchQuery.trim() })
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
        {/* Left: Brand & Menu Button */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Bab Menu"
            className="hover:bg-accent"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <button
            onClick={() => setView({ type: "materials" })}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-md transition-transform group-hover:scale-105">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-tight">Brevet AB</span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                  2026
                </span>
              </div>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Materi Lengkap Pajak Indonesia
              </p>
            </div>
          </button>
        </div>

        {/* Center: Search */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex-1 max-w-md hidden md:block"
        >
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari materi pajak (misal: PPh 21, PPN 12%, Coretax, PTKP)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-input bg-muted/40 hover:bg-muted/70 pl-9 pr-4 py-1.5 text-sm transition-all placeholder:text-muted-foreground focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </form>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant={view.type === "materials" ? "default" : "ghost"}
            size="sm"
            onClick={() => setView({ type: "materials" })}
            className="gap-1.5 text-xs sm:text-sm"
          >
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Materi Lengkap</span>
          </Button>

          <Button
            variant={view.type === "tools" ? "default" : "ghost"}
            size="sm"
            onClick={() => setView({ type: "tools" })}
            className="gap-1.5 text-xs sm:text-sm"
          >
            <Calculator className="h-4 w-4" />
            <span className="hidden sm:inline">Tools Hitung</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="rounded-full"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Sun className="h-4 w-4 text-amber-400" />
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
