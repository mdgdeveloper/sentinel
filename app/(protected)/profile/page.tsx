"use client";

import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";

export default function ProfilePage() {
  const { user, isLoading, error, signOut } = useAuth();

  if (isLoading) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-8 text-red-600">{error}</p>;
  }

  if (!user) {
    return (
      <div className="text-center mt-8 space-y-4">
        <p>You are not logged in.</p>
        <Link
          href="/signin"
          className="text-blue-600 hover:underline underline-offset-2"
        >
          Go to sign-in
        </Link>
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Your Profile</h1>

      <div className="space-y-2">
        <p>
          <span className="font-medium text-gray-700">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-medium text-gray-700">Email:</span> {user.email}
        </p>
      </div>

      <button
        onClick={handleSignOut}
        className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
      >
        Sign out
      </button>
    </div>
  );
}
