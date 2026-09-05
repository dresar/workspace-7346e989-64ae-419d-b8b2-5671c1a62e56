"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, ArrowRight, SearchX, BookOpen, Clock } from "lucide-react"
import { useUIStore } from "@/lib/store"
import { searchLessons } from "@/data"

export function SearchView({ query }: { query: string }) {
  const { setView } = useUIStore()

  // In-memory instant search across all 12 chapters
  const results = searchLessons(query)

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto pb-16">
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          🔍 Hasil Pencarian
        </h1>
        <p className="text-sm text-muted-foreground">
          Mencari topik: <strong className="text-foreground">"{query}"</strong>
        </p>
      </div>

      {results.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="p-12 text-center space-y-3">
            <SearchX className="h-12 w-12 text-muted-foreground/50 mx-auto" />
            <h3 className="font-bold text-base md:text-lg">Tidak ada hasil ditemukan</h3>
            <p className="text-xs md:text-sm text-muted-foreground max-w-sm mx-auto">
              Coba kata kunci lain seperti "PPN", "PPh 21", "PTKP", "Coretax", "Rekonsiliasi", atau "Faktur".
            </p>
            <Button onClick={() => setView({ type: "materials" })} className="mt-4 gap-2">
              <BookOpen className="h-4 w-4" />
              Lihat Semua Materi
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <p className="text-xs md:text-sm text-muted-foreground">
            Ditemukan <strong className="text-foreground font-semibold">{results.length}</strong> pelajaran yang relevan:
          </p>

          <div className="space-y-3">
            {results.map(({ chapter, lesson }) => (
              <Card
                key={lesson.id}
                className="cursor-pointer hover:shadow-md hover:border-primary/50 transition-all group border-border/80"
                onClick={() =>
                  setView({
                    type: "lesson",
                    chapterId: chapter.id,
                    lessonId: lesson.id,
                  })
                }
              >
                <CardContent className="p-4 md:p-5">
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-${chapter.color}-100 text-${chapter.color}-700 text-sm font-bold dark:bg-${chapter.color}-950 dark:text-${chapter.color}-300`}
                    >
                      {chapter.number}
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="secondary" className="text-[10px]">
                          Bab {chapter.number}: {chapter.shortTitle}
                        </Badge>
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {lesson.estimatedMinutes} menit
                        </span>
                      </div>
                      <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors truncate">
                        {lesson.title}
                      </h3>
                      {lesson.subtitle && (
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {lesson.subtitle}
                        </p>
                      )}
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all mt-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
