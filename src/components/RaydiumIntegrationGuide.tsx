'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function RaydiumIntegrationGuide() {
  return (
    <div className="glass rounded-xl p-8 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-6">How to Pair Your Token on Raydium</h3>
      
      <div className="space-y-6">
        <div className="bg-background/50 rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2">Step 1: Create Your SPL Token</h4>
          <p className="text-foreground/80 mb-3">
            Before listing on Raydium, you need to have created your Solana SPL token.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-foreground/80">
            <li>Use the Solana CLI or a token creation service</li>
            <li>Define your token supply and decimals</li>
            <li>Generate your token mint address</li>
          </ul>
        </div>
        
        <div className="bg-background/50 rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2">Step 2: Prepare Liquidity</h4>
          <p className="text-foreground/80 mb-3">
            To create a trading pair, you'll need:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-foreground/80">
            <li>Your DATAI tokens</li>
            <li>SOL or USDC for the paired asset</li>
            <li>A small amount of SOL for transaction fees</li>
          </ul>
        </div>
        
        <div className="bg-background/50 rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2">Step 3: Access Raydium Liquidity</h4>
          <p className="text-foreground/80 mb-3">
            Navigate to the Raydium liquidity pool creation interface:
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-foreground/80">
            <li>Go to <a href="https://raydium.io/liquidity/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Raydium Liquidity</a></li>
            <li>Connect your wallet containing both assets</li>
            <li>Click "Create Pool"</li>
          </ol>
        </div>
        
        <div className="bg-background/50 rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2">Step 4: Configure Your Pool</h4>
          <p className="text-foreground/80 mb-3">
            Set up your liquidity pool parameters:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-foreground/80">
            <li>Select your token from the dropdown or enter your token mint address</li>
            <li>Choose the paired asset (SOL or USDC recommended for better liquidity)</li>
            <li>Set the initial price by determining the ratio of tokens in the pool</li>
            <li>Specify the amount of liquidity to provide</li>
          </ul>
        </div>
        
        <div className="bg-background/50 rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2">Step 5: Create and Finalize</h4>
          <p className="text-foreground/80 mb-3">
            Complete the pool creation process:
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-foreground/80">
            <li>Review all details carefully</li>
            <li>Approve the transaction in your wallet</li>
            <li>Wait for confirmation on the Solana blockchain</li>
            <li>Your pool is now created and trading can begin</li>
          </ol>
        </div>
        
        <div className="bg-background/50 rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2">Step 6: Verify and Share</h4>
          <p className="text-foreground/80 mb-3">
            After pool creation:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-foreground/80">
            <li>Verify your pool is visible on Raydium's swap interface</li>
            <li>Test a small swap to ensure everything works correctly</li>
            <li>Share your token's trading pair link with your community</li>
            <li>Update your website with the direct trading link</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-4 border border-primary/20 rounded-lg bg-primary/5">
        <h4 className="text-lg font-semibold mb-2">Important Considerations</h4>
        <ul className="list-disc pl-5 space-y-1 text-foreground/80">
          <li>Initial liquidity amount will impact price stability</li>
          <li>Consider implementing a vesting schedule for team tokens</li>
          <li>Monitor your pool regularly and add liquidity as needed</li>
          <li>Ensure your token contract is audited for security</li>
        </ul>
      </div>
      
      <div className="mt-8 flex justify-center">
        <Link 
          href="https://raydium.io/liquidity/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Create Liquidity Pool on Raydium
        </Link>
      </div>
    </div>
  )
}
