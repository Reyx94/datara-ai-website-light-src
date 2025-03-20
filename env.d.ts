// Fix: Ensure CloudflareEnv recognizes 'DB' properly

import type { D1Database } from "@cloudflare/workers-types";

export interface CloudflareEnv {
  DB: D1Database; // Now TypeScript should recognize Cloudflare D1 Database
}

declare const cf: { env: CloudflareEnv };
