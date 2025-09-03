import { authClient } from "@/lib/auth-client"

export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    })

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

export async function signInWithGoogle() {
  try {
   const { data, error }  = await authClient.signIn.social({
    provider: "google",
  });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}