// Base response type for all auth operations
export interface AuthResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
}

// User type based on your Prisma schema
export interface User {
  id: string
  email: string
  name: string | null
  emailVerified: Date | null
  image: string | null
  createdAt: Date
  updatedAt: Date
}

// Session type
export interface Session {
  id: string
  userId: string
  expiresAt: Date
  token: string
  ipAddress?: string
  userAgent?: string
}

// Session data with user info
export interface SessionData {
  session: Session | null
  user: User | null
}

// Sign up form data
export interface SignUpData {
  email: string
  password: string
  name: string
}

// Sign in form data
export interface SignInData {
  email: string
  password: string
}

// Auth state for components
export interface AuthState {
  user: User | null
  session: Session | null
  isLoading: boolean
  isAuthenticated: boolean
}

// Better Auth specific types (extend as needed)
export interface BetterAuthSession {
  session: Session
  user: User
}

export interface BetterAuthError {
  message: string
  code?: string
}