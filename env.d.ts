// Fix: Ensure CloudflareEnv recognizes 'DB' properly

export interface CloudflareEnv extends Record<string, any> {
  DB: any; // Change 'any' to 'D1Database' if necessary
}

declare const cf: { env: CloudflareEnv };
