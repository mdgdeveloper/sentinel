"use client";

import { SignUpForm } from "@/components/auth/signup-form";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Create a new account
        </h1>

        <SignUpForm
          onSuccess={() => {
            // After successful signup redirect to sign-in
            window.location.href = "/(auth)/signin";
          }}
        />

        <button
          onClick={() => (window.location.href = "/api/auth/google")}
          className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
        >
          <svg className="h-5 w-5" viewBox="0 0 488 512" fill="currentColor">
            <path d="M488 261.8c0-17.8-1.6-35-4.6-51.8H249v98h134.1c-5.8 31.4-22.9 57.9-49 75.8v62h79.4c46.5-42.8 73.5-105.9 73.5-184z" />
            <path d="M249 492c66.2 0 121.9-21.9 162.3-59.4l-79.4-62c-22 14.8-50 23.6-82.9 23.6-63.7 0-117.8-43 137.2-100.8H29.5v63.5C69.8 429 151.8 492 249 492z" />
            <path d="M111.8 292.3C106 274.9 103 256.1 103 236.5s3-38.4 8.8-55.8v-63.5H29.5C10.6 155 0 193.9 0 236.5c0 42.6 10.6 81.5 29.5 119l82.3-63.2z" />
            <path d="M249 97.9c35.9 0 68.1 12.4 93.4 36.7l70-70C375.9 26 320.2 4 249 4 151.8 4 69.8 67 29.5 156.2l82.3 63.5C131.2 140.9 185.3 97.9 249 97.9z" />
          </svg>
          Continue with Google
        </button>

        <p className="text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
