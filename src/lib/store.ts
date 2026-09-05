"use client"

import { create } from "zustand"

export type View =
  | { type: "materials" }
  | { type: "lesson"; chapterId: string; lessonId: string }
  | { type: "exam"; chapterId: string }
  | { type: "tools" }
  | { type: "search"; query: string }

interface UIState {
  view: View
  menuOpen: boolean
  theme: "light" | "dark"
  setView: (view: View) => void
  setMenuOpen: (open: boolean) => void
  toggleMenu: () => void
  toggleTheme: () => void
  setTheme: (theme: "light" | "dark") => void
}

export const useUIStore = create<UIState>((set) => ({
  view: { type: "materials" },
  menuOpen: false,
  theme: "light",
  setView: (view) => {
    set({ view, menuOpen: false })
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  },
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  toggleMenu: () => set((s) => ({ menuOpen: !s.menuOpen })),
  toggleTheme: () =>
    set((s) => {
      const newTheme = s.theme === "light" ? "dark" : "light"
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", newTheme === "dark")
        localStorage.setItem("theme", newTheme)
      }
      return { theme: newTheme }
    }),
  setTheme: (theme) => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark")
      localStorage.setItem("theme", theme)
    }
    set({ theme })
  },
}))
