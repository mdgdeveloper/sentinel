import { authClient } from "@/lib/auth-client"

export interface SignUpParams {
  email: string;
  password: string;
  name: string;
  image?: string;
}

export interface SignUpCallbacks {
  onRequest?: () => void;
  onSuccess?: (ctx: Record<string, unknown>) => void;
  onError?: (ctx: unknown) => void;
}

export async function signUpUser(
  params: SignUpParams,
  callbacks?: SignUpCallbacks
) {
  const { email, password, name, image = "" } = params;

  const { data, error } = await authClient.signUp.email({
    email,
    password,
    name,
    image,
    callbackURL: "/dashboard"
  }, {
    onRequest: () => {
      callbacks?.onRequest?.();
    },
    onSuccess: (ctx) => {
      callbacks?.onSuccess?.(ctx);
    },
    onError: (ctx) => {
      callbacks?.onError?.(ctx);
    }
  });

  return { data, error };
}