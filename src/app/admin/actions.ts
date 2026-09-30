"use server"

import { revalidatePath } from "next/cache"
import { createClient, getCurrentProfile } from "@/lib/supabase/server"
import { ALL_ROLES, type UserRole } from "@/lib/supabase/types"

// Change a member's role. Only admins may do this; enforced here and again by
// the database RLS + guard trigger.
export async function updateUserRole(formData: FormData): Promise<void> {
  const session = await getCurrentProfile()
  if (!session || session.profile?.role !== "admin") {
    throw new Error("Not authorized")
  }

  const userId = String(formData.get("userId") ?? "")
  const role = String(formData.get("role") ?? "") as UserRole
  if (!userId || !ALL_ROLES.includes(role)) throw new Error("Invalid input")

  // Use the request-scoped client so the admin's JWT satisfies RLS.
  const supabase = await createClient()
  const { error } = await supabase.from("profiles").update({ role }).eq("id", userId)
  if (error) throw new Error(error.message)

  revalidatePath("/admin")
}
