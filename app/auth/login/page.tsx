"use cient"
import React from "react";
import Input from '@/app/auth/_components/input'
import AuthLayout from "../_components/AuthLayout";
import Link from "next/link";

export default function LoginPage() {
  return (
    <AuthLayout>
      <h2 className="text-3xl font-semibold">Welcome back</h2>
      <p className="text-slate-400 text-sm">
        Sign in to create and manage voting sessions
      </p>

      <form className="mt-8 space-y-4">
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-slate-800 py-3 text-sm hover:bg-slate-700 transition"
        >
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.2 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.4 2.9l5.7-5.7C33.6 6.5 28.9 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5 44.5 36.3 44.5 25c0-1.5-.2-3-.9-4.5z" />
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 13 24 13c2.8 0 5.4 1.1 7.4 2.9l5.7-5.7C33.6 6.5 28.9 4.5 24 4.5c-7.9 0-14.8 4.4-17.7 10.2z" />
            <path fill="#4CAF50" d="M24 45.5c5.1 0 9.7-2 13.1-5.3l-6-5.1C29.1 36.7 26.7 37.5 24 37.5c-5.1 0-9.5-3.3-11.1-7.9l-6.6 5.1C9.2 41 16.1 45.5 24 45.5z" />
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.2 3.2-3.7 5.8-7 7.1l6 5.1c-.4.4 6.2-4.7 6.2-15.2 0-1.5-.2-3-.9-4.5z" />
          </svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-slate-400">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Input label="Password" type="password" placeholder="••••••••" />

        <button className="w-full rounded-xl bg-indigo-500 py-3 font-medium hover:bg-indigo-400 transition">
          Sign In
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-400 text-center">
        Don’t have an account?{" "}
        <Link href="/auth/register" className="text-indigo-400 hover:underline">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
}