"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Lightbulb,
  HelpCircle,
  CheckCircle2,
  BookOpen,
  Layers,
  Info,
} from "lucide-react"
import { useUIStore } from "@/lib/store"
import { getLesson, getLessonById, getNextLesson, getPrevLesson } from "@/data"
import { QuizComponent } from "./quiz-component"

export function LessonView({
  chapterId,
  lessonId,
}: {
  chapterId: string
  lessonId: string
}) {
  const { setView, toggleMenu } = useUIStore()
  const [readProgress, setReadProgress] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  // Direct static lookup
  const lessonData = getLesson(chapterId, lessonId) || getLessonById(lessonId)
  const prevLesson = lessonData
    ? getPrevLesson(lessonData.chapter.id, lessonData.lesson.id)
    : undefined
  const nextLesson = lessonData
    ? getNextLesson(lessonData.chapter.id, lessonData.lesson.id)
    : undefined

  // Scroll to top on lesson load
  useEffect(() => {
    setShowQuiz(false)
    setReadProgress(0)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [lessonId, chapterId])

  // Track reading progress
  const trackProgress = useCallback(() => {
    const el = contentRef.current
    if (!el) return

    const scrollTop = window.scrollY
    const docHeight = el.scrollHeight + el.offsetTop
    const winHeight = window.innerHeight
    const scrollableHeight = docHeight - winHeight
    if (scrollableHeight <= 0) {
      setReadProgress(100)
      return
    }
    const percent = Math.min(
      100,
      Math.max(0, Math.round((scrollTop / scrollableHeight) * 100)),
    )
    setReadProgress(percent)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", trackProgress, { passive: true })
    return () => window.removeEventListener("scroll", trackProgress)
  }, [trackProgress])

  if (!lessonData) {
    return (
      <div className="space-y-4 max-w-4xl mx-auto py-12 text-center">
        <h2 className="text-xl font-bold">Pelajaran tidak ditemukan</h2>
        <p className="text-muted-foreground">
          Pelajaran yang kamu cari mungkin telah dipindahkan atau tidak tersedia.
        </p>
        <Button onClick={() => setView({ type: "materials" })} className="mt-4">
          Kembali ke Daftar Materi
        </Button>
      </div>
    )
  }

  const { chapter, lesson } = lessonData
  const difficultyLabel =
    {
      pemula: "Pemula",
      menengah: "Menengah",
      mahir: "Mahir",
    }[lesson.difficulty as string] || lesson.difficulty

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto pb-16">
      {/* Top sticky navigation & reading progress bar */}
      <div className="sticky top-16 z-30 -mx-4 px-4 py-2.5 bg-background/95 backdrop-blur-md border-b border-border/80 shadow-xs transition-all">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setView({ type: "materials" })}
              className="shrink-0 gap-1.5 text-xs h-8"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Daftar Materi</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="shrink-0 gap-1.5 text-xs h-8 text-muted-foreground hover:text-foreground"
            >
              <Layers className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Pilih Bab</span>
            </Button>
          </div>

          {/* Reading progress pill */}
          <div className="flex items-center gap-2.5 flex-1 max-w-xs mx-2">
            <Progress value={readProgress} className="h-1.5 flex-1" />
            <span className="text-[11px] font-bold text-muted-foreground shrink-0 font-mono">
              {readProgress}%
            </span>
          </div>
        </div>
      </div>

      {/* Lesson Header */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge
            variant="secondary"
            className={`font-semibold bg-${chapter.color}-100 text-${chapter.color}-700 dark:bg-${chapter.color}-950 dark:text-${chapter.color}-300`}
          >
            Bab {chapter.number}: {chapter.shortTitle}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {difficultyLabel}
          </Badge>
          <Badge variant="outline" className="gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {lesson.estimatedMinutes} menit baca
          </Badge>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
          {lesson.title}
        </h1>

        {lesson.subtitle && (
          <p className="text-sm md:text-base text-muted-foreground font-medium">
            {lesson.subtitle}
          </p>
        )}
      </div>

      {/* Main Lesson Body (Markdown with remark-gfm and custom components) */}
      <article
        ref={contentRef}
        className="prose-pajak max-w-none text-foreground bg-card rounded-2xl border border-border/70 p-6 md:p-10 shadow-xs"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            table: ({ node, ...props }) => (
              <div className="my-6 overflow-x-auto rounded-xl border border-border/80 bg-card shadow-xs">
                <table
                  className="w-full text-sm border-collapse text-left"
                  {...props}
                />
              </div>
            ),
            thead: ({ node, ...props }) => (
              <thead
                className="bg-muted/80 text-foreground font-bold border-b border-border/80"
                {...props}
              />
            ),
            tbody: ({ node, ...props }) => (
              <tbody className="divide-y divide-border/60" {...props} />
            ),
            tr: ({ node, ...props }) => (
              <tr
                className="transition-colors hover:bg-muted/30 even:bg-muted/15"
                {...props}
              />
            ),
            th: ({ node, ...props }) => (
              <th
                className="px-4 py-3 font-bold text-xs uppercase tracking-wider text-foreground"
                {...props}
              />
            ),
            td: ({ node, ...props }) => (
              <td
                className="px-4 py-3 text-sm text-foreground/90 align-middle"
                {...props}
              />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="my-5 rounded-xl border-l-4 border-primary bg-primary/5 p-4 text-sm text-foreground/90 not-italic shadow-xs"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="mt-8 mb-4 pb-2 text-xl md:text-2xl font-bold tracking-tight text-foreground border-b border-border/70 flex items-center gap-2"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="mt-6 mb-3 text-lg md:text-xl font-bold text-foreground"
                {...props}
              />
            ),
            h4: ({ node, ...props }) => (
              <h4
                className="mt-4 mb-2 text-base font-bold text-foreground"
                {...props}
              />
            ),
            ul: ({ node, ...props }) => (
              <ul className="my-4 space-y-1.5 pl-6 list-disc text-foreground/90" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="my-4 space-y-1.5 pl-6 list-decimal text-foreground/90" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="my-3 text-sm md:text-base leading-relaxed text-foreground/90" {...props} />
            ),
            strong: ({ node, ...props }) => (
              <strong className="font-bold text-foreground" {...props} />
            ),
            code: ({ node, className, children, ...props }) => {
              const isInline = !className
              return isInline ? (
                <code
                  className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-xs font-semibold text-primary border border-border/50"
                  {...props}
                >
                  {children}
                </code>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {lesson.content}
        </ReactMarkdown>
      </article>

      {/* Case Study Card */}
      {lesson.caseStudy && (
        <Card className="border-amber-300/80 bg-amber-50/40 dark:border-amber-900/60 dark:bg-amber-950/20 shadow-xs">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
              <Lightbulb className="h-5 w-5 shrink-0" />
              <h3 className="font-bold text-base md:text-lg">
                Studi Kasus: {lesson.caseStudy.title}
              </h3>
            </div>
            <p className="text-sm text-foreground/85 leading-relaxed">
              {lesson.caseStudy.description}
            </p>
            <div className="rounded-xl bg-amber-100/60 dark:bg-amber-900/40 p-4 border border-amber-200 dark:border-amber-800/80 space-y-1.5">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                💡 Analisis & Solusi Pajak:
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {lesson.caseStudy.solution}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Key Takeaways */}
      {lesson.keyPoints && lesson.keyPoints.length > 0 && (
        <Card className="border-primary/30 bg-primary/5 shadow-xs">
          <CardContent className="p-6 space-y-3">
            <h3 className="flex items-center gap-2 font-bold text-base md:text-lg text-primary">
              <CheckCircle2 className="h-5 w-5" />
              Poin Kunci (Ringkasan Cepat)
            </h3>
            <ul className="space-y-2">
              {lesson.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Interactive Quiz */}
      {lesson.quiz.length > 0 && (
        <Card className="border-border shadow-xs">
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border">
              <div>
                <h3 className="flex items-center gap-2 font-bold text-base md:text-lg">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  Uji Pemahaman Materi ({lesson.quiz.length} Soal)
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Latihan interaktif langsung dengan kunci jawaban & penjelasan lengkap.
                </p>
              </div>
              {!showQuiz && (
                <Button
                  onClick={() => setShowQuiz(true)}
                  size="sm"
                  className="shrink-0"
                >
                  Mulai Latihan
                </Button>
              )}
            </div>

            {showQuiz ? (
              <QuizComponent
                questions={lesson.quiz}
                lessonId={lesson.id}
                chapterId={chapter.id}
              />
            ) : (
              <div className="rounded-xl bg-muted/30 p-6 text-center">
                <HelpCircle className="h-8 w-8 mx-auto text-muted-foreground/40 mb-2" />
                <p className="text-xs md:text-sm text-muted-foreground mb-3">
                  Selesaikan membaca materi di atas lalu klik tombol di bawah untuk mencoba soal latihan.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowQuiz(true)}
                >
                  Buka Latihan Soal
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Tags */}
      {lesson.tags && lesson.tags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap pt-2">
          <span className="text-xs text-muted-foreground font-medium">Kata Kunci:</span>
          {lesson.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[11px]">
              #{tag}
            </Badge>
          ))}
        </div>
      )}

      {/* Bottom Navigation Buttons */}
      <div className="flex items-center justify-between gap-3 pt-6 border-t border-border">
        {prevLesson ? (
          <Button
            variant="outline"
            onClick={() =>
              setView({
                type: "lesson",
                chapterId: prevLesson.chapter.id,
                lessonId: prevLesson.lesson.id,
              })
            }
            className="gap-2 max-w-[48%] h-auto py-2.5 text-left"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            <div className="truncate">
              <span className="block text-[10px] text-muted-foreground uppercase font-semibold">
                Sebelumnya
              </span>
              <span className="truncate text-xs font-semibold">
                {prevLesson.lesson.title}
              </span>
            </div>
          </Button>
        ) : (
          <Button
            variant="outline"
            onClick={() => setView({ type: "materials" })}
            className="gap-1.5 text-xs"
          >
            <BookOpen className="h-3.5 w-3.5" />
            Semua Materi
          </Button>
        )}

        {nextLesson ? (
          <Button
            onClick={() =>
              setView({
                type: "lesson",
                chapterId: nextLesson.chapter.id,
                lessonId: nextLesson.lesson.id,
              })
            }
            className="gap-2 max-w-[48%] h-auto py-2.5 text-right ml-auto"
          >
            <div className="truncate text-right">
              <span className="block text-[10px] text-primary-foreground/80 uppercase font-semibold">
                Berikutnya
              </span>
              <span className="truncate text-xs font-semibold">
                {nextLesson.lesson.title}
              </span>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Button>
        ) : (
          <Button
            onClick={() => setView({ type: "materials" })}
            className="gap-1.5 text-xs ml-auto"
          >
            <CheckCircle2 className="h-4 w-4" />
            Selesai Bab Ini
          </Button>
        )}
      </div>
    </div>
  )
}
