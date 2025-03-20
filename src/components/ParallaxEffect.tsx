'use client'

import { useEffect, useRef } from 'react'

export default function ParallaxEffect({ 
  children,
  className = '',
  intensity = 20
}: { 
  children: React.ReactNode
  className?: string
  intensity?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      
      // Calculate mouse position relative to the container
      const x = e.clientX - left
      const y = e.clientY - top
      
      // Calculate percentage position
      const xPercent = (x / width - 0.5) * 2 // -1 to 1
      const yPercent = (y / height - 0.5) * 2 // -1 to 1
      
      // Apply transform based on mouse position
      container.style.transform = `
        perspective(1000px)
        rotateY(${xPercent * intensity * 0.05}deg)
        rotateX(${-yPercent * intensity * 0.05}deg)
        translateX(${xPercent * intensity * 0.5}px)
        translateY(${yPercent * intensity * 0.5}px)
      `
    }
    
    // Add event listener
    window.addEventListener('mousemove', handleMouseMove)
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [intensity])
  
  return (
    <div 
      ref={containerRef} 
      className={`transition-transform duration-200 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}
