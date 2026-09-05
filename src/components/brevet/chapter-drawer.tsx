"use client"

import { useEffect, useState } from "react"
import {
  X,
  BookOpen,
  Search,
  ChevronRight,
  GraduationCap,
  Calculator,
  Layers,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useUIStore } from "@/lib/store"
import { CHAPTERS } from "@/data"
import { cn } from "@/lib/utils"

export function ChapterDrawer() {
  const { menuOpen, setMenuOpen, view, setView } = useUIStore()
  const [filterQuery, setFilterQuery] = useState("")

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [setMenuOpen])

  if (!menuOpen) return null

  const filteredChapters = CHAPTERS.filter((ch) => {
    if (!filterQuery.trim()) return true
    const q = filterQuery.toLowerCase()
    return (
      ch.title.toLowerCase().includes(q) ||
      ch.description.toLowerCase().includes(q) ||
      ch.lessons.some(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.tags.some((t) => t.toLowerCase().includes(q)),
      )
    )
  })

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer Panel */}
      <aside className="relative z-10 flex w-full max-w-md flex-col bg-background shadow-2xl border-r border-border animate-in slide-in-from-left duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-bold text-sm">Daftar Bab & Materi</h2>
              <p className="text-xs text-muted-foreground">12 Bab Lengkap Brevet AB</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(false)}
            aria-label="Tutup menu"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Search / Filter in Drawer */}
        <div className="p-3 border-b border-border bg-muted/20">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari bab atau pelajaran..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full rounded-md border border-input bg-background pl-8 pr-3 py-1.5 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </div>

        {/* Chapters list */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {filteredChapters.map((chapter) => (
            <div
              key={chapter.id}
              className="rounded-lg border border-border/60 bg-card p-2.5 transition-all hover:border-primary/40"
            >
              <button
                onClick={() => {
                  setView({ type: "materials" })
                  setMenuOpen(false)
                }}
                className="flex w-full items-start gap-2.5 text-left mb-2 group"
              >
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold",
                    `bg-${chapter.color}-100 text-${chapter.color}-700 dark:bg-${chapter.color}-950 dark:text-${chapter.color}-300`,
                  )}
                >
                  {chapter.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-semibold group-hover:text-primary transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground line-clamp-1">
                    {chapter.lessons.length} Pelajaran • {chapter.estimatedMinutes} menit
                  </p>
                </div>
              </button>

              <div className="space-y-1 pl-9 border-l border-border/50 ml-3.5">
                {chapter.lessons.map((lesson, idx) => {
                  const isCurrent =
                    view.type === "lesson" &&
                    view.chapterId === chapter.id &&
                    view.lessonId === lesson.id

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => {
                        setView({
                          type: "lesson",
                          chapterId: chapter.id,
                          lessonId: lesson.id,
                        })
                        setMenuOpen(false)
                      }}
                      className={cn(
                        "flex w-full items-center justify-between rounded px-2 py-1 text-xs text-left transition-colors",
                        isCurrent
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground",
                      )}
                    >
                      <span className="truncate">
                        {chapter.number}.{idx + 1} {lesson.title}
                      </span>
                      <ChevronRight className="h-3 w-3 shrink-0 opacity-50 ml-1" />
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer shortcuts */}
        <div className="border-t border-border p-3 flex gap-2 bg-muted/20">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setView({ type: "materials" })
              setMenuOpen(false)
            }}
            className="flex-1 text-xs gap-1.5"
          >
            <BookOpen className="h-3.5 w-3.5" />
            Semua Materi
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setView({ type: "tools" })
              setMenuOpen(false)
            }}
            className="flex-1 text-xs gap-1.5"
          >
            <Calculator className="h-3.5 w-3.5" />
            Tools Hitung
          </Button>
        </div>
      </aside>
    </div>
  )
}
