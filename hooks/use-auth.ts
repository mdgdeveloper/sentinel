"use client";

import { useEffect, useState } from 'react';
import { authClient } from '@/lib/auth-client';

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface Session {
  user: User;
  session: {
    id: string;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string;
    userAgent?: string;
  }
}

interface UserAuthReturn {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
}


export function useAuth(): UserAuthReturn {
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refreshSession = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error } = await authClient.getSession();

      if (error) {
        setError(error.message || "Failed to get session")
        setSession(null)
      } else {
        setSession(
          data
            ? {
              ...data,
              user: {
                ...data.user,
                image: data.user.image ?? undefined,
              },
              session: {
                ...data.session,
                ipAddress: data.session.ipAddress ?? undefined,
                userAgent: data.session.userAgent ?? undefined,
              },
            }
            : null
        )
      }
    } catch {
      setError("Network error occurred")
      setSession(null);
    } finally {
      setIsLoading(false)
    }
  };

  const signOut = async () => {
    try {
      setError(null)
      await authClient.signOut();
      setSession(null)
    } catch (err) {
      setError("Failed to sign out")
    }
  };

  useEffect(() => {
    refreshSession();
  }, []);

  return {
    user: session?.user || null,
    session,
    isLoading,
    isAuthenticated: !!session?.user,
    error,
    signOut,
    refreshSession
  };
}
