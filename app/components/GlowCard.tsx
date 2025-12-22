"use client"

import { useRef } from "react"

export default function GlowEdgeCard({ title, subtitle }: { title: string; subtitle: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const top = y
    const bottom = rect.height - y
    const left = x
    const right = rect.width - x

    const min = Math.min(top, bottom, left, right)

    el.classList.remove(
      "glow-top",
      "glow-bottom",
      "glow-left",
      "glow-right"
    )

    if (min === top) el.classList.add("glow-top")
    else if (min === bottom) el.classList.add("glow-bottom")
    else if (min === left) el.classList.add("glow-left")
    else el.classList.add("glow-right")
  }

  const handleMouseLeave = () => {
    ref.current?.classList.remove(
      "glow-top",
      "glow-bottom",
      "glow-left",
      "glow-right"
    )
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="edge-card relative bg-gradient-to-br
  from-[#1a1a1a]
  via-[#0d0d0d]
  to-black
  rounded-2xl
  border border-white/10 p-6  space-y-4 transition"
    >
      <h2 className="text-3xl font-bold text-blue-400">{title}</h2>
      <p className="text-white/70">{subtitle}</p>
    </div>
  )
}
