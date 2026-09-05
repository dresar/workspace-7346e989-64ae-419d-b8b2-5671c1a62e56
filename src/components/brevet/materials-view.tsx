"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Clock,
  PlayCircle,
  FileText,
  HelpCircle,
  Lightbulb,
  Search,
  BookOpen,
  Sparkles,
  Trophy,
  Filter,
} from "lucide-react"
import { useUIStore } from "@/lib/store"
import { CHAPTERS, getTotalLessons, getTotalMinutes, getTotalQuizzes } from "@/data"
import type { Chapter } from "@/data/types"

export function MaterialsView() {
  const { setView } = useUIStore()
  const [expandedChapter, setExpandedChapter] = useState<string | null>(CHAPTERS[0]?.id || null)
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all")
  const [searchFilter, setSearchFilter] = useState("")

  const totalLessons = getTotalLessons()
  const totalMinutes = getTotalMinutes()
  const totalQuizzes = getTotalQuizzes()

  const filteredChapters = CHAPTERS.filter((chapter) => {
    if (filterDifficulty !== "all" && chapter.difficulty !== filterDifficulty) {
      return false
    }
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase()
      const matchTitle = chapter.title.toLowerCase().includes(q)
      const matchDesc = chapter.description.toLowerCase().includes(q)
      const matchLessons = chapter.lessons.some(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.tags.some((t) => t.toLowerCase().includes(q)),
      )
      if (!matchTitle && !matchDesc && !matchLessons) return false
    }
    return true
  })

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-background p-6 md:p-8">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Kurikulum Perpajakan Brevet A & B Terbaru 2026
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            📚 Materi Lengkap Brevet AB
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
            12 Bab komprehensif mulai dari Pengantar & KUP, Coretax DJP, PPh 21 TER, PPh Badan, PPN 12%,
            hingga Pajak Internasional dan Akuntansi Pajak dengan studi kasus riil.
          </p>

          {/* Quick Stats Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5 rounded-lg bg-card/80 border px-3 py-1.5 text-xs font-medium shadow-sm">
              <BookOpen className="h-4 w-4 text-primary" />
              <span>12 Bab Lengkap</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-card/80 border px-3 py-1.5 text-xs font-medium shadow-sm">
              <FileText className="h-4 w-4 text-blue-500" />
              <span>{totalLessons} Pelajaran Detail</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-card/80 border px-3 py-1.5 text-xs font-medium shadow-sm">
              <HelpCircle className="h-4 w-4 text-amber-500" />
              <span>{totalQuizzes} Soal & Pembahasan</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-card/80 border px-3 py-1.5 text-xs font-medium shadow-sm">
              <Clock className="h-4 w-4 text-emerald-500" />
              <span>~{Math.round(totalMinutes / 60)} Jam Pembelajaran</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari judul bab, topik, atau kata kunci..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full rounded-lg border border-input bg-background pl-9 pr-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Filter className="h-4 w-4 text-muted-foreground hidden sm:block" />
          <div className="flex rounded-lg border border-input p-0.5 bg-muted/40 text-xs">
            <button
              onClick={() => setFilterDifficulty("all")}
              className={`rounded px-2.5 py-1 font-medium transition-all ${
                filterDifficulty === "all"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Semua Level
            </button>
            <button
              onClick={() => setFilterDifficulty("pemula")}
              className={`rounded px-2.5 py-1 font-medium transition-all ${
                filterDifficulty === "pemula"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Pemula
            </button>
            <button
              onClick={() => setFilterDifficulty("menengah")}
              className={`rounded px-2.5 py-1 font-medium transition-all ${
                filterDifficulty === "menengah"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Menengah
            </button>
            <button
              onClick={() => setFilterDifficulty("mahir")}
              className={`rounded px-2.5 py-1 font-medium transition-all ${
                filterDifficulty === "mahir"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mahir
            </button>
          </div>
        </div>
      </div>

      {/* Chapters List */}
      <div className="space-y-4">
        {filteredChapters.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
            expanded={expandedChapter === chapter.id}
            onToggle={() =>
              setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)
            }
            onLessonClick={(lessonId) =>
              setView({ type: "lesson", chapterId: chapter.id, lessonId })
            }
            onExamClick={() => setView({ type: "exam", chapterId: chapter.id })}
          />
        ))}

        {filteredChapters.length === 0 && (
          <div className="rounded-xl border border-dashed p-8 text-center text-muted-foreground">
            Tidak ada bab atau materi yang cocok dengan pencarian "{searchFilter}".
          </div>
        )}
      </div>
    </div>
  )
}

function ChapterCard({
  chapter,
  expanded,
  onToggle,
  onLessonClick,
  onExamClick,
}: {
  chapter: Chapter
  expanded: boolean
  onToggle: () => void
  onLessonClick: (lessonId: string) => void
  onExamClick: () => void
}) {
  const difficultyLabel = {
    pemula: "Pemula",
    menengah: "Menengah",
    mahir: "Mahir",
  }[chapter.difficulty]

  return (
    <Card className="overflow-hidden transition-all border-border/80 hover:border-primary/40 shadow-sm hover:shadow-md">
      <CardHeader
        className="cursor-pointer hover:bg-accent/20 transition-colors p-5"
        onClick={onToggle}
      >
        <div className="flex items-start gap-4">
          <div
            className={`flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-xl bg-${chapter.color}-100 text-${chapter.color}-700 text-xl md:text-2xl font-black dark:bg-${chapter.color}-950 dark:text-${chapter.color}-300 shadow-sm`}
          >
            {chapter.number}
          </div>
          <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className="text-base md:text-lg font-bold">{chapter.title}</CardTitle>
              <Badge variant="outline" className="text-xs font-normal">
                {difficultyLabel}
              </Badge>
            </div>
            <CardDescription className="line-clamp-2 text-xs md:text-sm">
              {chapter.description}
            </CardDescription>
            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1.5">
              <span className="flex items-center gap-1">
                <FileText className="h-3.5 w-3.5 text-primary" />
                {chapter.lessons.length} pelajaran
              </span>
              <span className="flex items-center gap-1">
                <HelpCircle className="h-3.5 w-3.5 text-amber-500" />
                {chapter.lessons.reduce((s, l) => s + l.quiz.length, 0) + chapter.exam.length} soal
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-emerald-500" />
                {chapter.estimatedMinutes} menit
              </span>
            </div>
          </div>
          <ChevronRight
            className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
              expanded ? "rotate-90 text-primary" : ""
            }`}
          />
        </div>
      </CardHeader>

      {expanded && (
        <CardContent className="border-t pt-4 p-5 space-y-4 animate-slide-up">
          {/* Learning Objectives */}
          <div className="rounded-lg bg-muted/40 p-3.5 border border-border/50">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
              🎯 Sasaran Pembelajaran:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-foreground/90">
              {chapter.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lessons List */}
          <div className="space-y-2">
            {chapter.lessons.map((lesson, idx) => (
              <button
                key={lesson.id}
                onClick={() => onLessonClick(lesson.id)}
                className="group flex w-full items-center gap-3 rounded-lg border border-border/70 p-3 text-left transition-all hover:bg-accent/40 hover:border-primary/50 shadow-none hover:shadow-sm"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <PlayCircle className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-muted-foreground">
                      {chapter.number}.{idx + 1}
                    </span>
                    <span className="font-semibold text-sm truncate group-hover:text-primary transition-colors">
                      {lesson.title}
                    </span>
                    {lesson.type === "kasus" && (
                      <Badge variant="secondary" className="text-[10px] gap-1 py-0 h-4">
                        <Lightbulb className="h-2.5 w-2.5" /> Kasus
                      </Badge>
                    )}
                  </div>
                  {lesson.subtitle && (
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                      {lesson.subtitle}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0 font-medium">
                  <Clock className="h-3.5 w-3.5" />
                  {lesson.estimatedMinutes}m
                  <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}

            {/* Exam */}
            {chapter.exam.length > 0 && (
              <button
                onClick={onExamClick}
                className="group flex w-full items-center gap-3 rounded-lg border-2 border-dashed border-primary/40 bg-primary/5 p-3 text-left transition-all hover:bg-primary/10 hover:border-primary cursor-pointer"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Trophy className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-primary">
                      🏆 Ujian & Latihan Soal Bab {chapter.number}
                    </span>
                    <Badge variant="outline" className="text-xs bg-background">
                      {chapter.exam.length} soal lengkap
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Uji pemahaman komprehensif seluruh materi bab ini disertai pembahasan detail
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  )
}
