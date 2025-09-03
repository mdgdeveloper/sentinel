import { authClient } from "@/lib/auth-client"

export async function signOut() {
  try {
    const { data, error } = await authClient.signOut()

    if (error) {
      throw new Error(error.message)
    }

    return { success: true, data }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    }
  }
}