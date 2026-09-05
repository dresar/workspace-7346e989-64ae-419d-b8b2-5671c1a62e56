"use client"

import { Heart, GraduationCap, BookOpen, Calculator, Search } from "lucide-react"
import { useUIStore } from "@/lib/store"
import { CHAPTERS, getTotalLessons } from "@/data"

export function Footer() {
  const { setView } = useUIStore()

  return (
    <footer className="mt-auto border-t border-border/80 bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-bold">Brevet AB Pemula 2026</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground max-w-md">
              Platform belajar Brevet A & B paling komprehensif dengan 12 bab materi super detail,
              latihan interaktif, dan update perpajakan terbaru 2026 (UU HPP & Coretax DJP).
            </p>
            <div className="flex gap-3 text-xs text-muted-foreground">
              <span>{CHAPTERS.length} Bab</span>
              <span>•</span>
              <span>{getTotalLessons()} Pelajaran Lengkap</span>
              <span>•</span>
              <span>Studi Kasus & Hitung Riil</span>
            </div>
          </div>

          {/* Navigasi Utama */}
          <div className="space-y-2 text-xs md:text-sm">
            <p className="font-bold text-foreground">Menu</p>
            <button
              onClick={() => setView({ type: "materials" })}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              📚 Semua Materi
            </button>
            <button
              onClick={() => setView({ type: "tools" })}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              🧮 Tools Hitung Pajak
            </button>
          </div>

          {/* Materi Populer */}
          <div className="space-y-2 text-xs md:text-sm">
            <p className="font-bold text-foreground">Topik Populer</p>
            <button
              onClick={() =>
                setView({ type: "lesson", chapterId: "ch04", lessonId: "ch04-l01" })
              }
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              PPh 21 TER 2026
            </button>
            <button
              onClick={() =>
                setView({ type: "lesson", chapterId: "ch05", lessonId: "ch05-l01" })
              }
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              PPh Badan (22%)
            </button>
            <button
              onClick={() =>
                setView({ type: "lesson", chapterId: "ch07", lessonId: "ch07-l01" })
              }
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              PPN 12% & Efektif 11%
            </button>
            <button
              onClick={() =>
                setView({ type: "lesson", chapterId: "ch12", lessonId: "ch12-l04" })
              }
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Sistem Coretax DJP
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p className="flex items-center gap-1.5">
            Dibuat untuk praktisi, mahasiswa, dan pejuang Brevet Pajak Indonesia 🇮🇩
          </p>
          <p className="text-center md:text-right">
            Materi mengacu UU HPP No. 7/2021, UU Cipta Kerja, dan regulasi Coretax 2025-2026.
          </p>
        </div>
      </div>
    </footer>
  )
}
