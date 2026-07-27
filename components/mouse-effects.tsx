'use client'

import { useEffect, useRef, useCallback } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  hue: number
}

interface Ripple {
  x: number
  y: number
  radius: number
  maxRadius: number
  opacity: number
}

export function MouseEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)

  const mousePos = useRef({ x: -999, y: -999 })
  const ringPos = useRef({ x: -999, y: -999 })
  const particles = useRef<Particle[]>([])
  const ripples = useRef<Ripple[]>([])
  const animFrameRef = useRef<number>(0)
  const lastParticleTime = useRef(0)
  const isHovering = useRef(false)

  const spawnParticles = useCallback((x: number, y: number) => {
    const now = Date.now()
    if (now - lastParticleTime.current < 20) return
    lastParticleTime.current = now

    const count = isHovering.current ? 3 : 2
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 2 + 0.5
      particles.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        life: 1,
        maxLife: 1,
        size: Math.random() * 4 + 2,
        hue: Math.random() * 60 + 30, // gold to amber range
      })
    }

    // Keep particle count manageable
    if (particles.current.length > 150) {
      particles.current = particles.current.slice(-120)
    }
  }, [])

  const spawnRipple = useCallback((x: number, y: number) => {
    ripples.current.push({
      x,
      y,
      radius: 0,
      maxRadius: 80,
      opacity: 1,
    })
    if (ripples.current.length > 10) {
      ripples.current = ripples.current.slice(-8)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`
        cursorDotRef.current.style.top = `${e.clientY}px`
      }

      spawnParticles(e.clientX, e.clientY)
    }

    const onMouseDown = (e: MouseEvent) => {
      spawnRipple(e.clientX, e.clientY)
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, label, [tabindex]')
      isHovering.current = !!interactive

      if (cursorRingRef.current) {
        if (interactive) {
          cursorRingRef.current.style.width = '52px'
          cursorRingRef.current.style.height = '52px'
          cursorRingRef.current.style.borderColor = 'rgba(212, 175, 55, 0.9)'
          cursorRingRef.current.style.background = 'rgba(212, 175, 55, 0.08)'
        } else {
          cursorRingRef.current.style.width = '36px'
          cursorRingRef.current.style.height = '36px'
          cursorRingRef.current.style.borderColor = 'rgba(212, 175, 55, 0.6)'
          cursorRingRef.current.style.background = 'transparent'
        }
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseover', onMouseOver)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Smooth ring follow
      const dx = mousePos.current.x - ringPos.current.x
      const dy = mousePos.current.y - ringPos.current.y
      ringPos.current.x += dx * 0.12
      ringPos.current.y += dy * 0.12

      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${ringPos.current.x}px`
        cursorRingRef.current.style.top = `${ringPos.current.y}px`
      }

      // Draw ripples
      ripples.current = ripples.current.filter(r => r.opacity > 0.01)
      for (const r of ripples.current) {
        r.radius += 2.5
        r.opacity = (1 - r.radius / r.maxRadius) * 0.8

        ctx.beginPath()
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `hsla(45, 80%, 60%, ${r.opacity})`
        ctx.lineWidth = 2
        ctx.stroke()

        // Second inner ring
        const r2 = r.radius * 0.6
        ctx.beginPath()
        ctx.arc(r.x, r.y, r2, 0, Math.PI * 2)
        ctx.strokeStyle = `hsla(45, 90%, 75%, ${r.opacity * 0.5})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Draw particles
      particles.current = particles.current.filter(p => p.life > 0.01)
      for (const p of particles.current) {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.05   // slight gravity
        p.vx *= 0.97
        p.life -= 0.028
        const alpha = p.life
        const size = p.size * p.life

        // Glow effect
        ctx.save()
        ctx.globalAlpha = alpha * 0.4
        ctx.beginPath()
        const glowRadius = Math.max(0, size * 2.5)
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2)
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius)
        glow.addColorStop(0, `hsla(${p.hue}, 90%, 70%, 0.8)`)
        glow.addColorStop(1, `hsla(${p.hue}, 90%, 70%, 0)`)
        ctx.fillStyle = glow
        ctx.fill()
        ctx.restore()

        // Bright core
        ctx.save()
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(0, size), 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 90%, 80%, ${alpha})`
        ctx.fill()
        ctx.restore()
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseover', onMouseOver)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [spawnParticles, spawnRipple])

  return (
    <>
      {/* Full-screen canvas for particle/ripple effects */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9998 }}
        aria-hidden="true"
      />

      {/* Cursor dot — snaps instantly to mouse */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ffe066 0%, #d4af37 60%, transparent 100%)',
          boxShadow: '0 0 12px 4px rgba(212, 175, 55, 0.8), 0 0 24px 8px rgba(212, 175, 55, 0.3)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'screen',
          transition: 'width 0.15s ease, height 0.15s ease',
        }}
      />

      {/* Cursor ring — lags behind with smooth lerp */}
      <div
        ref={cursorRingRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '1.5px solid rgba(212, 175, 55, 0.6)',
          background: 'transparent',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9997,
          transition: 'width 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 0.2s ease, background 0.2s ease',
          backdropFilter: 'blur(0px)',
        }}
      />

      {/* Hide system cursor globally */}
      <style>{`
        *, *::before, *::after {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
