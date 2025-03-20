// Fix: Add missing env.d.ts file for CloudflareEnv

export interface CloudflareEnv {
  DB: any; // Temporary fix, replace 'any' with the correct database type if known
}
