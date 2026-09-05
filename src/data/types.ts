// ============================================================================
// TYPE DEFINITIONS - Brevet AB Learning Platform
// ============================================================================

export type Difficulty = "pemula" | "menengah" | "mahir"

export type LessonType = "materi" | "kasus" | "ringkasan" | "tips"

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  difficulty: "mudah" | "sedang" | "sulit"
}

export interface Lesson {
  id: string
  slug: string
  title: string
  subtitle?: string
  type: LessonType
  difficulty: Difficulty
  estimatedMinutes: number
  // Markdown-formatted content (rich text with examples, cases, tables)
  content: string
  // Quick takeaways for revision
  keyPoints: string[]
  // Quiz questions at the end of this lesson
  quiz: QuizQuestion[]
  // Optional: related real-world case study summary
  caseStudy?: {
    title: string
    description: string
    solution: string
  }
  // Tags for search/filter
  tags: string[]
}

export interface Chapter {
  id: string
  slug: string
  number: number
  title: string
  shortTitle: string
  description: string
  icon: string // lucide icon name
  color: string // tailwind color accent e.g. "emerald"
  difficulty: Difficulty
  estimatedMinutes: number
  // Learning objectives
  objectives: string[]
  lessons: Lesson[]
  // Final exam at end of chapter (10 questions)
  exam: QuizQuestion[]
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  // Condition to earn this badge
  condition: {
    type: "lesson_complete" | "chapter_complete" | "quiz_perfect" | "streak" | "exam_pass" | "all_chapters"
    target?: string // chapter id or lesson id
    value?: number // for streak/count-based
  }
}

export interface UserProfile {
  id: string
  name: string
  avatar: string
  currentStreak: number
  longestStreak: number
  lastStudyDate: string
  totalXp: number
  level: number
}
