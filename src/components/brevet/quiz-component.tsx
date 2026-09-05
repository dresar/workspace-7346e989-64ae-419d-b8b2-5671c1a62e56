"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  Sparkles,
} from "lucide-react"
import { Confetti } from "./confetti"
import { toast } from "sonner"

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  difficulty: string
}

export function QuizComponent({
  questions,
  lessonId,
  chapterId,
  onComplete,
}: {
  questions: QuizQuestion[]
  lessonId?: string
  chapterId?: string
  onComplete?: () => void
}) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  )
  const [submitted, setSubmitted] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  if (!questions || questions.length === 0) return null

  const currentQ = questions[currentIdx]
  const userAnswer = answers[currentIdx]
  const isCorrect = userAnswer === currentQ.correctIndex

  const submitAnswer = () => {
    if (userAnswer === null) return
    setSubmitted(true)

    if (isCorrect) {
      toast.success("Jawaban benar! 🎉", {
        description: currentQ.explanation,
      })
    } else {
      toast.error("Belum tepat, simak penjelasan di bawah ya", {
        description: currentQ.explanation,
      })
    }
  }

  const nextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1)
      setSubmitted(false)
    } else {
      // Calculate final score
      const correctCount = answers.reduce((sum, ans, idx) => {
        return sum + (ans === questions[idx].correctIndex ? 1 : 0)
      }, 0)
      setScore(correctCount)
      setShowResult(true)
      if (correctCount === questions.length) {
        setShowConfetti(true)
      }
      onComplete?.()
    }
  }

  const resetQuiz = () => {
    setCurrentIdx(0)
    setAnswers(Array(questions.length).fill(null))
    setSubmitted(false)
    setShowResult(false)
    setScore(0)
    setShowConfetti(false)
  }

  if (showResult) {
    const percent = Math.round((score / questions.length) * 100)
    const isPerfect = score === questions.length
    const isPass = percent >= 70

    return (
      <div className="relative space-y-6">
        <Confetti trigger={showConfetti} />
        <Card
          className={
            isPerfect
              ? "border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/20"
              : isPass
                ? "border-primary bg-primary/5"
                : "border-amber-500 bg-amber-50/20 dark:bg-amber-950/20"
          }
        >
          <CardContent className="p-8 text-center space-y-4">
            <div className="text-6xl animate-pop">
              {isPerfect ? "🏆" : isPass ? "🎉" : "💪"}
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                {isPerfect
                  ? "Sempurna! 100% Benar!"
                  : isPass
                    ? "Hebat! Kamu Lulus!"
                    : "Terus Berlatih!"}
              </h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Kamu menjawab {score} dari {questions.length} soal dengan tepat ({percent}%)
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-28 h-28">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    className="text-muted/40"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeDasharray={`${2 * Math.PI * 48}`}
                    strokeDashoffset={`${2 * Math.PI * 48 * (1 - percent / 100)}`}
                    className={
                      isPerfect
                        ? "text-emerald-500"
                        : isPass
                          ? "text-primary"
                          : "text-amber-500"
                    }
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">{percent}%</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-center pt-2">
              <Button variant="outline" size="sm" onClick={resetQuiz} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Ulangi Latihan
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Review answers */}
        <div className="space-y-3">
          <p className="text-sm font-bold text-foreground">Pembahasan Setiap Soal:</p>
          {questions.map((q, idx) => {
            const userAns = answers[idx]
            const correct = userAns === q.correctIndex
            return (
              <div
                key={q.id}
                className={`rounded-xl border p-4 text-sm ${
                  correct
                    ? "border-emerald-200 bg-emerald-50/40 dark:border-emerald-900/60 dark:bg-emerald-950/20"
                    : "border-red-200 bg-red-50/40 dark:border-red-900/60 dark:bg-red-950/20"
                }`}
              >
                <div className="flex items-start gap-3">
                  {correct ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  )}
                  <div className="flex-1 space-y-1.5">
                    <p className="font-semibold text-foreground">
                      {idx + 1}. {q.question}
                    </p>
                    <p className="text-xs">
                      Jawaban kamu:{" "}
                      <span className={correct ? "text-emerald-600 font-semibold" : "text-red-600 font-semibold"}>
                        {userAns !== null ? q.options[userAns] : "Tidak dijawab"}
                      </span>
                    </p>
                    {!correct && (
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                        Jawaban benar: {q.options[q.correctIndex]}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground pt-1 border-t border-border/50">
                      💡 {q.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Progress header */}
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="font-semibold text-muted-foreground">
          Soal {currentIdx + 1} dari {questions.length}
        </span>
        <Badge variant="outline" className="text-[11px] capitalize">
          {currentQ.difficulty}
        </Badge>
      </div>
      <Progress
        value={((currentIdx + 1) / questions.length) * 100}
        className="h-1.5"
      />

      {/* Question text */}
      <div className="space-y-4">
        <h4 className="text-base md:text-lg font-bold leading-snug text-foreground">
          {currentQ.question}
        </h4>

        {/* Options */}
        <div className="space-y-2">
          {currentQ.options.map((option, idx) => {
            const isSelected = userAnswer === idx
            const isCorrectAns = idx === currentQ.correctIndex
            const showCorrect = submitted && isCorrectAns
            const showWrong = submitted && isSelected && !isCorrectAns

            return (
              <button
                key={idx}
                disabled={submitted}
                onClick={() => {
                  const newAnswers = [...answers]
                  newAnswers[currentIdx] = idx
                  setAnswers(newAnswers)
                }}
                className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all ${
                  showCorrect
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100"
                    : showWrong
                      ? "border-red-500 bg-red-50 dark:bg-red-950/40 text-red-950 dark:text-red-100"
                      : isSelected
                        ? "border-primary bg-primary/10 shadow-sm"
                        : "border-border hover:border-primary/40 hover:bg-accent/40"
                } ${submitted ? "cursor-default" : "cursor-pointer"}`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                    showCorrect
                      ? "bg-emerald-500 text-white"
                      : showWrong
                        ? "bg-red-500 text-white"
                        : isSelected
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                  }`}
                >
                  {showCorrect ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : showWrong ? (
                    <XCircle className="h-4 w-4" />
                  ) : (
                    String.fromCharCode(65 + idx)
                  )}
                </span>
                <span className="text-sm flex-1 leading-snug">{option}</span>
              </button>
            )
          })}
        </div>

        {/* Explanation callout */}
        {submitted && (
          <Card
            className={`animate-slide-up ${
              isCorrect
                ? "border-emerald-300 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/30"
                : "border-amber-300 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/30"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-2.5">
                {isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <p className="text-xs font-bold text-foreground">
                    {isCorrect ? "Jawaban Tepat! 🎉" : "Kunci & Penjelasan:"}
                  </p>
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-2 pt-2">
          {!submitted ? (
            <Button
              disabled={userAnswer === null}
              onClick={submitAnswer}
              size="sm"
            >
              Periksa Jawaban
            </Button>
          ) : (
            <Button onClick={nextQuestion} size="sm" className="gap-2">
              {currentIdx === questions.length - 1 ? (
                <>
                  <Trophy className="h-4 w-4" />
                  Lihat Hasil
                </>
              ) : (
                <>
                  Soal Berikutnya
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
