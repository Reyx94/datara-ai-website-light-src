'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas dimensions
    canvas.width = 256
    canvas.height = 256
    
    // Logo colors - lighter theme
    const primaryColor = '#3b82f6'
    const secondaryColor = '#8b5cf6'
    const backgroundColor = 'rgba(255, 255, 255, 0.1)'
    
    let angle = 0
    
    const drawLogo = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw background circle
      ctx.beginPath()
      ctx.arc(128, 128, 100, 0, Math.PI * 2)
      ctx.fillStyle = backgroundColor
      ctx.fill()
      
      // Save context for rotation
      ctx.save()
      ctx.translate(128, 128)
      ctx.rotate(angle)
      ctx.translate(-128, -128)
      
      // Draw "D" letter
      ctx.font = 'bold 120px Arial'
      ctx.fillStyle = primaryColor
      ctx.fillText('D', 80, 170)
      
      // Draw "A" letter with gradient
      const gradient = ctx.createLinearGradient(150, 100, 200, 170)
      gradient.addColorStop(0, primaryColor)
      gradient.addColorStop(1, secondaryColor)
      ctx.fillStyle = gradient
      ctx.fillText('A', 130, 170)
      
      // Restore context
      ctx.restore()
      
      // Update angle for rotation
      angle += 0.005
      
      // Request next frame
      requestAnimationFrame(drawLogo)
    }
    
    // Start animation
    drawLogo()
    
    // Cleanup
    return () => {
      // Cancel animation if component unmounts
      cancelAnimationFrame(0)
    }
  }, [])
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full rounded-full shadow-lg"
      style={{ maxWidth: '256px', maxHeight: '256px' }}
    />
  )
}
