import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Brevet AB Pemula 2026 - Belajar Pajak Interaktif",
  description:
    "Platform belajar Brevet A & B paling lengkap. Materi super detail dengan bahasa santai, quiz interaktif, kalkulator pajak, dan update perpajakan 2026 (Coretax, PPN 12%, PPh OP/Badan, dll).",
  keywords: [
    "Brevet AB",
    "Brevet Pajak",
    "Pajak 2026",
    "Coretax",
    "PPh",
    "PPN",
    "Konsultan Pajak",
    "Belajar Pajak",
    "Indonesia Tax",
  ],
  authors: [{ name: "Brevet AB 2026" }],
  openGraph: {
    title: "Brevet AB Pemula 2026 - Belajar Pajak Interaktif",
    description:
      "12 bab lengkap pajak Indonesia dengan bahasa santai, quiz interaktif, dan kalkulator pajak. Update 2026!",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
