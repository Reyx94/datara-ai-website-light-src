// Role model mirrors the user roles described in the platform spec.
export type UserRole =
  | "guest"
  | "registered"
  | "trusted"
  | "premium"
  | "expert"
  | "vendor"
  | "vendor_pro"
  | "sponsor_vendor"
  | "moderator"
  | "admin"

export const ROLE_LABELS: Record<UserRole, string> = {
  guest: "Guest",
  registered: "Registered Member",
  trusted: "Trusted Member",
  premium: "Premium Member",
  expert: "Verified Expert",
  vendor: "Verified Vendor",
  vendor_pro: "Vendor Pro",
  sponsor_vendor: "Sponsor Vendor",
  moderator: "Moderator",
  admin: "Admin",
}

// All assignable roles, in ascending order of privilege.
export const ALL_ROLES: UserRole[] = [
  "guest",
  "registered",
  "trusted",
  "premium",
  "expert",
  "vendor",
  "vendor_pro",
  "sponsor_vendor",
  "moderator",
  "admin",
]

// Roles that can access the admin/moderation area.
export const STAFF_ROLES: UserRole[] = ["moderator", "admin"]

export interface Profile {
  id: string
  username: string | null
  role: UserRole
  country: string | null
  premium_status: boolean
  vendor_status: string | null
  expert_status: string | null
  trust_level: number
  created_at: string
}
