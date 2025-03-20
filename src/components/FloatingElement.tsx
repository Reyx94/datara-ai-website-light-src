'use client'

import { useEffect, useRef } from 'react'

export function FloatingElement({ 
  className = '', 
  speed = 1,
  children
}: { 
  className?: string
  speed?: number
  children?: React.ReactNode
}) {
  const elementRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const element = elementRef.current
    if (!element) return
    
    let startTime = Date.now()
    let animationFrameId: number
    
    const animate = () => {
      const currentTime = Date.now()
      const elapsedTime = (currentTime - startTime) / 1000 // Convert to seconds
      
      // Calculate vertical position using sine wave
      const verticalOffset = Math.sin(elapsedTime * speed * 0.5) * 10
      
      // Apply the transformation
      element.style.transform = `translateY(${verticalOffset}px)`
      
      // Request next frame
      animationFrameId = requestAnimationFrame(animate)
    }
    
    // Start animation
    animate()
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [speed])
  
  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
