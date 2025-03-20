'use client'

import { useEffect, useRef } from 'react'

export default function HoverCard({
  children,
  className = '',
  intensity = 15
}: {
  children: React.ReactNode
  className?: string
  intensity?: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect()
      
      // Calculate mouse position relative to the card
      const x = e.clientX - left
      const y = e.clientY - top
      
      // Calculate percentage position
      const xPercent = (x / width - 0.5) * 2 // -1 to 1
      const yPercent = (y / height - 0.5) * 2 // -1 to 1
      
      // Apply transform based on mouse position
      card.style.transform = `
        perspective(1000px)
        rotateY(${xPercent * intensity}deg)
        rotateX(${-yPercent * intensity}deg)
        scale3d(1.05, 1.05, 1.05)
      `
      
      // Add highlight effect
      const gradientX = (x / width) * 100
      const gradientY = (y / height) * 100
      card.style.background = `
        radial-gradient(
          circle at ${gradientX}% ${gradientY}%, 
          rgba(255, 255, 255, 0.8) 0%, 
          rgba(240, 249, 255, 0.8) 50%, 
          rgba(240, 240, 245, 0.8) 100%
        )
      `
    }
    
    const handleMouseLeave = () => {
      // Reset transform and background when mouse leaves
      card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
      card.style.background = ''
    }
    
    // Add event listeners
    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)
    
    // Cleanup
    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [intensity])
  
  return (
    <div 
      ref={cardRef} 
      className={`transition-all duration-200 ${className}`}
      style={{ 
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center'
      }}
    >
      {children}
    </div>
  )
}
