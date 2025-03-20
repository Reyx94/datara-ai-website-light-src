'use client'

import { useEffect, useRef } from 'react'

export default function ShimmerEffect({
  children,
  className = '',
  color = 'rgba(59, 130, 246, 0.2)',
  duration = 2,
  delay = 0
}: {
  children: React.ReactNode
  className?: string
  color?: string
  duration?: number
  delay?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    // Set initial styles
    container.style.position = 'relative'
    container.style.overflow = 'hidden'
    
    // Create shimmer element
    const shimmer = document.createElement('div')
    shimmer.style.position = 'absolute'
    shimmer.style.top = '0'
    shimmer.style.left = '0'
    shimmer.style.width = '100%'
    shimmer.style.height = '100%'
    shimmer.style.background = `linear-gradient(90deg, transparent, ${color}, transparent)`
    shimmer.style.transform = 'translateX(-100%)'
    shimmer.style.animation = `shimmer ${duration}s infinite ease-in-out`
    shimmer.style.animationDelay = `${delay}s`
    
    // Create keyframes for the animation
    const keyframes = `
      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        50% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `
    
    // Add keyframes to document
    const style = document.createElement('style')
    style.textContent = keyframes
    document.head.appendChild(style)
    
    // Add shimmer to container
    container.appendChild(shimmer)
    
    // Cleanup
    return () => {
      document.head.removeChild(style)
      if (container.contains(shimmer)) {
        container.removeChild(shimmer)
      }
    }
  }, [color, duration, delay])
  
  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
