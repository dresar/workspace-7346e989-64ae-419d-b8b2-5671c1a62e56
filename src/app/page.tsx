"use client"

import { useEffect } from "react"
import { Header } from "@/components/brevet/header"
import { ChapterDrawer } from "@/components/brevet/chapter-drawer"
import { Footer } from "@/components/brevet/footer"
import { MaterialsView } from "@/components/brevet/materials-view"
import { LessonView } from "@/components/brevet/lesson-view"
import { ExamView } from "@/components/brevet/exam-view"
import { ToolsView } from "@/components/brevet/tools-view"
import { SearchView } from "@/components/brevet/search-view"
import { useUIStore } from "@/lib/store"

export default function Home() {
  const { view, setTheme } = useUIStore()

  // Initialize theme from system or localStorage
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = (saved as "light" | "dark") || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)
  }, [setTheme])

  const renderView = () => {
    switch (view.type) {
      case "materials":
        return <MaterialsView />
      case "lesson":
        return <LessonView chapterId={view.chapterId} lessonId={view.lessonId} />
      case "exam":
        return <ExamView chapterId={view.chapterId} />
      case "tools":
        return <ToolsView />
      case "search":
        return <SearchView query={view.query} />
      default:
        return <MaterialsView />
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20">
      {/* Top sticky header */}
      <Header />

      {/* Slide-over chapter drawer for navigation on demand */}
      <ChapterDrawer />

      {/* Main Full-Width Content Container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {renderView()}
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  )
}
