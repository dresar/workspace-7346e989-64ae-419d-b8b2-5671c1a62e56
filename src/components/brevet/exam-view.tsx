"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Trophy, AlertCircle, BookOpen } from "lucide-react"
import { useUIStore } from "@/lib/store"
import { getChapter } from "@/data"
import { QuizComponent } from "./quiz-component"

export function ExamView({ chapterId }: { chapterId: string }) {
  const { setView } = useUIStore()
  const chapter = getChapter(chapterId)

  if (!chapter) {
    return (
      <div className="space-y-4 max-w-4xl mx-auto py-12 text-center">
        <h2 className="text-xl font-bold">Bab tidak ditemukan</h2>
        <Button onClick={() => setView({ type: "materials" })} className="mt-4">
          Kembali ke Daftar Materi
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto pb-16">
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setView({ type: "materials" })}
          className="gap-1.5"
        >
          <ArrowLeft className="h-4 w-4" />
          Daftar Materi
        </Button>
      </div>

      {/* Exam Header Card */}
      <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background shadow-sm">
        <CardHeader className="p-6">
          <div className="flex items-center gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-${chapter.color}-100 text-${chapter.color}-700 text-2xl font-black dark:bg-${chapter.color}-950 dark:text-${chapter.color}-300 shadow-sm`}
            >
              <Trophy className="h-7 w-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  Bab {chapter.number}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {chapter.exam.length} Soal Lengkap
                </Badge>
              </div>
              <CardTitle className="text-xl md:text-2xl mt-1">
                🏆 Ujian & Latihan Komprehensif: {chapter.title}
              </CardTitle>
              <CardDescription className="text-xs md:text-sm mt-1">
                Latihan soal komprehensif untuk menguji dan memperdalam penguasaan materi Bab {chapter.number}.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6 pt-0">
          <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-3.5 flex items-start gap-2.5">
            <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-foreground/80 space-y-0.5">
              <p className="font-semibold text-amber-700 dark:text-amber-400">
                Panduan Pengerjaan:
              </p>
              <p>
                Pilih jawaban terbaik pada setiap soal. Kunci jawaban dan penjelasan undang-undang perpajakan terkait akan langsung ditampilkan setelah kamu menekan "Periksa Jawaban".
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quiz Area */}
      <Card className="border-border shadow-sm">
        <CardContent className="p-6">
          <QuizComponent
            questions={chapter.exam}
            lessonId=""
            chapterId={chapter.id}
          />
        </CardContent>
      </Card>
    </div>
  )
}
