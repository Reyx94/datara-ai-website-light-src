"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import ThemeToggle from '@/components/ui/theme-toggle'

export default function RaydiumIntegration() {
  const [price, setPrice] = useState("0.00")
  const [change, setChange] = useState("0.00")
  const [isPositive, setIsPositive] = useState(true)

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = (Math.random() * 0.1 + 0.05).toFixed(4)
      const newChange = (Math.random() * 5 - 2.5).toFixed(2)
      setPrice(newPrice)
      setChange(newChange)
      setIsPositive(parseFloat(newChange) >= 0)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="raydium-card rounded-xl p-6 w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">DATAI/USDC</h3>
        <div className="flex items-center gap-2">
          <img src="/raydium-logo.svg" alt="Raydium" className="h-6 w-6" />
          <span className="text-sm font-medium">Raydium DEX</span>
        </div>
      </div>
      
      <div className="flex items-end justify-between mb-6">
        <div className="flex flex-col">
          <span className="text-3xl font-bold">${price}</span>
          <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}{change}%
          </span>
        </div>
        <div className="flex gap-2">
          <Link 
            href="https://raydium.io/swap/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Trade Now
          </Link>
          <Link 
            href="https://raydium.io/liquidity/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Add Liquidity
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex flex-col">
          <span className="text-muted-foreground">24h Volume</span>
          <span className="font-medium">$124,532</span>
        </div>
        <div className="flex flex-col">
          <span className="text-muted-foreground">Liquidity</span>
          <span className="font-medium">$1.2M</span>
        </div>
        <div className="flex flex-col">
          <span className="text-muted-foreground">Token Contract</span>
          <div className="flex items-center gap-1">
            <span className="font-mono text-xs truncate">Datar...x7Yz</span>
            <button className="text-primary hover:text-primary/80">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-muted-foreground">Pair Contract</span>
          <div className="flex items-center gap-1">
            <span className="font-mono text-xs truncate">Rayd...a3Bc</span>
            <button className="text-primary hover:text-primary/80">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
