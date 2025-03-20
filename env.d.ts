// Fix: Ensure CloudflareEnv recognizes 'DB'

export interface CloudflareEnv {
  DB: D1Database; // Ensure TypeScript recognizes Cloudflare D1 Database
}

declare const cf: { env: CloudflareEnv };

Fix: Add CloudflareEnv DB type definition
