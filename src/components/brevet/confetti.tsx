"use client"

import { useEffect, useState } from "react"

interface ConfettiProps {
  trigger: boolean
}

const COLORS = ["#10b981", "#f59e0b", "#ef4444", "#3b82f6", "#a855f7", "#ec4899"]

export function Confetti({ trigger }: ConfettiProps) {
  const [pieces, setPieces] = useState<JSX.Element[]>([])

  useEffect(() => {
    if (!trigger) return

    const newPieces: JSX.Element[] = []
    for (let i = 0; i < 50; i++) {
      const left = Math.random() * 100
      const delay = Math.random() * 0.5
      const duration = 2 + Math.random() * 2
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      const size = 8 + Math.random() * 8
      const isCircle = Math.random() > 0.5
      newPieces.push(
        <div
          key={i}
          className="confetti"
          style={{
            left: `${left}%`,
            backgroundColor: color,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: isCircle ? "50%" : "0",
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />,
      )
    }
    // Use microtask to defer state update outside effect body
    Promise.resolve().then(() => setPieces(newPieces))

    const timer = setTimeout(() => setPieces([]), 5000)
    return () => clearTimeout(timer)
  }, [trigger])

  return <>{pieces}</>
}
