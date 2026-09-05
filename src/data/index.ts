// ============================================================================
// CHAPTERS INDEX - Aggregates all chapter data
// ============================================================================

import type { Chapter, Lesson, QuizQuestion } from "./types"
import { chapter01 } from "./chapters/chapter01"
import { chapter02 } from "./chapters/chapter02"
import { chapter03 } from "./chapters/chapter03"
import { chapter04 } from "./chapters/chapter04"
import { chapter05 } from "./chapters/chapter05"
import { chapter06 } from "./chapters/chapter06"
import { chapter07 } from "./chapters/chapter07"
import { chapter08 } from "./chapters/chapter08"
import { chapter09 } from "./chapters/chapter09"
import { chapter10 } from "./chapters/chapter10"
import { chapter11 } from "./chapters/chapter11"
import { chapter12 } from "./chapters/chapter12"

export const CHAPTERS: Chapter[] = [
  chapter01,
  chapter02,
  chapter03,
  chapter04,
  chapter05,
  chapter06,
  chapter07,
  chapter08,
  chapter09,
  chapter10,
  chapter11,
  chapter12,
]

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getChapter(chapterId: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.id === chapterId)
}

export function getChapterBySlug(slug: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug)
}

export function getLesson(
  chapterId: string,
  lessonId: string,
): { chapter: Chapter; lesson: Lesson } | undefined {
  const chapter = getChapter(chapterId)
  if (!chapter) return undefined
  const lesson = chapter.lessons.find((l) => l.id === lessonId)
  if (!lesson) return undefined
  return { chapter, lesson }
}

export function getLessonById(lessonId: string): { chapter: Chapter; lesson: Lesson } | undefined {
  for (const chapter of CHAPTERS) {
    const lesson = chapter.lessons.find((l) => l.id === lessonId)
    if (lesson) return { chapter, lesson }
  }
  return undefined
}

export function getNextLesson(
  chapterId: string,
  lessonId: string,
): { chapter: Chapter; lesson: Lesson } | undefined {
  const chapter = getChapter(chapterId)
  if (!chapter) return undefined
  const idx = chapter.lessons.findIndex((l) => l.id === lessonId)
  if (idx === -1) return undefined

  // Next lesson in same chapter
  if (idx < chapter.lessons.length - 1) {
    return { chapter, lesson: chapter.lessons[idx + 1] }
  }

  // First lesson of next chapter
  const chapterIdx = CHAPTERS.findIndex((c) => c.id === chapterId)
  if (chapterIdx < CHAPTERS.length - 1) {
    const nextChapter = CHAPTERS[chapterIdx + 1]
    if (nextChapter.lessons.length > 0) {
      return { chapter: nextChapter, lesson: nextChapter.lessons[0] }
    }
  }

  return undefined
}

export function getPrevLesson(
  chapterId: string,
  lessonId: string,
): { chapter: Chapter; lesson: Lesson } | undefined {
  const chapter = getChapter(chapterId)
  if (!chapter) return undefined
  const idx = chapter.lessons.findIndex((l) => l.id === lessonId)
  if (idx === -1) return undefined

  // Prev lesson in same chapter
  if (idx > 0) {
    return { chapter, lesson: chapter.lessons[idx - 1] }
  }

  // Last lesson of prev chapter
  const chapterIdx = CHAPTERS.findIndex((c) => c.id === chapterId)
  if (chapterIdx > 0) {
    const prevChapter = CHAPTERS[chapterIdx - 1]
    if (prevChapter.lessons.length > 0) {
      return { chapter: prevChapter, lesson: prevChapter.lessons[prevChapter.lessons.length - 1] }
    }
  }

  return undefined
}

// Stats
export function getTotalLessons(): number {
  return CHAPTERS.reduce((sum, c) => sum + c.lessons.length, 0)
}

export function getTotalQuizzes(): number {
  return CHAPTERS.reduce(
    (sum, c) => sum + c.lessons.reduce((s, l) => s + l.quiz.length, 0) + c.exam.length,
    0,
  )
}

export function getTotalMinutes(): number {
  return CHAPTERS.reduce((sum, c) => sum + c.estimatedMinutes, 0)
}

export function getAllQuizQuestions(): QuizQuestion[] {
  const all: QuizQuestion[] = []
  for (const chapter of CHAPTERS) {
    for (const lesson of chapter.lessons) {
      all.push(...lesson.quiz)
    }
    all.push(...chapter.exam)
  }
  return all
}

// Search across all lessons
export function searchLessons(query: string): { chapter: Chapter; lesson: Lesson; score: number }[] {
  const results: { chapter: Chapter; lesson: Lesson; score: number }[] = []
  const q = query.toLowerCase().trim()
  if (!q) return results

  for (const chapter of CHAPTERS) {
    for (const lesson of chapter.lessons) {
      let score = 0
      if (lesson.title.toLowerCase().includes(q)) score += 10
      if (lesson.subtitle?.toLowerCase().includes(q)) score += 5
      if (lesson.tags.some((t) => t.toLowerCase().includes(q))) score += 8
      if (lesson.content.toLowerCase().includes(q)) score += 3
      if (chapter.title.toLowerCase().includes(q)) score += 4

      if (score > 0) {
        results.push({ chapter, lesson, score })
      }
    }
  }

  return results.sort((a, b) => b.score - a.score).slice(0, 20)
}
