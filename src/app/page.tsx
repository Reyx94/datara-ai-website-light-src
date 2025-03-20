"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import AnimatedLogo from '@/components/AnimatedLogo'
import RaydiumIntegration from '@/components/RaydiumIntegration'
import RaydiumIntegrationGuide from '@/components/RaydiumIntegrationGuide'
import { FloatingElement } from '@/components/FloatingElement'

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-grid-pattern">
        <FloatingElement className="absolute top-20 left-10 w-12 h-12 bg-primary/10 rounded-full" speed={2} />
        <FloatingElement className="absolute bottom-20 right-10 w-16 h-16 bg-primary/10 rounded-full" speed={3} />
        <FloatingElement className="absolute top-40 right-20 w-8 h-8 bg-primary/10 rounded-full" speed={1.5} />
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Datara AI</h1>
            <p className="text-xl md:text-2xl mb-10 text-foreground/80">
              Advanced AI-powered token traded on Solana Raydium, with future plans for multichain expansion
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#buy" className="btn-hover-effect inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Buy Token
              </a>
              <a href="#" className="btn-hover-effect inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                View Whitepaper
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Datara AI</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                {mounted && <AnimatedLogo />}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">The Future of AI on Blockchain</h3>
              <p className="mb-4 text-foreground/80">
                Datara AI represents the convergence of artificial intelligence and blockchain technology, creating a powerful ecosystem that leverages the strengths of both domains.
              </p>
              <p className="mb-4 text-foreground/80">
                Our token is designed to fuel the next generation of AI applications, providing the necessary resources for development, training, and deployment of advanced AI models.
              </p>
              <p className="text-foreground/80">
                Built on Solana's high-performance blockchain, Datara AI offers lightning-fast transactions, minimal fees, and a sustainable approach to blockchain technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover glass rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">AI-Powered</h3>
              <p className="text-foreground/80">
                Leveraging cutting-edge artificial intelligence to optimize token performance and provide unique utilities to holders.
              </p>
            </div>
            <div className="card-hover glass rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Solana Ecosystem</h3>
              <p className="text-foreground/80">
                Built on Solana's high-performance blockchain, offering fast transactions, low fees, and seamless integration with the Raydium DEX.
              </p>
            </div>
            <div className="card-hover glass rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Multichain Future</h3>
              <p className="text-foreground/80">
                Planned expansion to multiple blockchains, creating a cross-chain ecosystem that maximizes accessibility and utility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Tokenomics</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Token Distribution</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Public Sale</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[40%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Team & Advisors</span>
                    <span className="font-medium">20%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[20%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Ecosystem Development</span>
                    <span className="font-medium">25%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[25%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Marketing & Partnerships</span>
                    <span className="font-medium">10%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[10%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Reserve</span>
                    <span className="font-medium">5%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[5%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Token Details</h3>
              <div className="glass rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-foreground/70 mb-1">Token Name</p>
                    <p className="font-medium">Datara AI</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70 mb-1">Token Symbol</p>
                    <p className="font-medium">DATAI</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70 mb-1">Total Supply</p>
                    <p className="font-medium">1,000,000,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70 mb-1">Blockchain</p>
                    <p className="font-medium">Solana</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70 mb-1">DEX</p>
                    <p className="font-medium">Raydium</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70 mb-1">Initial Market Cap</p>
                    <p className="font-medium">$2,000,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Roadmap</h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border"></div>
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="ml-auto mr-[calc(50%+2rem)] md:mr-[calc(50%+4rem)] p-6 glass rounded-xl max-w-md">
                  <h3 className="text-xl font-bold mb-2">Q2 2025</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Token launch on Solana</li>
                    <li>• Listing on Raydium DEX</li>
                    <li>• Community building initiatives</li>
                    <li>• Partnership announcements</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="mr-auto ml-[calc(50%+2rem)] md:ml-[calc(50%+4rem)] p-6 glass rounded-xl max-w-md">
                  <h3 className="text-xl font-bold mb-2">Q3 2025</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• AI utility platform beta release</li>
                    <li>• Staking program launch</li>
                    <li>• CEX listings</li>
                    <li>• Ecosystem expansion</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="ml-auto mr-[calc(50%+2rem)] md:mr-[calc(50%+4rem)] p-6 glass rounded-xl max-w-md">
                  <h3 className="text-xl font-bold mb-2">Q4 2025</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• AI-powered DeFi tools</li>
                    <li>• Cross-chain bridge development</li>
                    <li>• Strategic partnerships</li>
                    <li>• Governance implementation</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="mr-auto ml-[calc(50%+2rem)] md:ml-[calc(50%+4rem)] p-6 glass rounded-xl max-w-md">
                  <h3 className="text-xl font-bold mb-2">Q1 2026</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Multichain expansion</li>
                    <li>• Advanced AI features release</li>
                    <li>• Ecosystem growth initiatives</li>
                    <li>• Global marketing campaign</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Raydium Integration Section */}
      <section id="buy" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Trade on Raydium</h2>
          <div className="flex justify-center">
            <RaydiumIntegration />
          </div>
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">How to Buy DATAI Token</h3>
            <ol className="text-left space-y-4 text-foreground/80">
              <li className="flex gap-3">
                <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">1</span>
                <div>
                  <p className="font-medium">Create a Solana Wallet</p>
                  <p className="text-sm">Download Phantom, Solflare, or another Solana-compatible wallet</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">2</span>
                <div>
                  <p className="font-medium">Add SOL to Your Wallet</p>
                  <p className="text-sm">Purchase SOL from an exchange and transfer it to your wallet</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">3</span>
                <div>
                  <p className="font-medium">Connect to Raydium</p>
                  <p className="text-sm">Visit Raydium.io and connect your Solana wallet</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">4</span>
                <div>
                  <p className="font-medium">Swap SOL for DATAI</p>
                  <p className="text-sm">Select SOL as the "From" token and DATAI as the "To" token, then execute the swap</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
      
      {/* Raydium Integration Guide Section */}
      <section id="raydium-guide" className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">For Token Creators</h2>
          <div className="flex justify-center">
            <RaydiumIntegrationGuide />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="glass rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Datara AI Community</h2>
            <p className="mb-8 text-foreground/80">
              Stay updated on the latest developments, participate in discussions, and become part of the future of AI on blockchain.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Join Discord
              </a>
              <a href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-[#1DA1F2] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#1DA1F2]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Follow on Twitter
              </a>
              <a href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-[#0088cc] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#0088cc]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Join Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
