'use client';

import { useActionState } from "react";
import { loginUser } from "@/actions/auths";
import Link from "next/link";

const initialState = { error: "" };

export default function LoginForm() {
    const [state, formAction, pending] = useActionState(loginUser, initialState);

    return (
        <form action={formAction} className="w-96 space-y-4 rounded-lg border p-6">
            <h1 className="text-2xl font-bold text-gray-600">
                login
            </h1>

            {state?.error && (
                <p className="rounded bg-red-100 p-2 text-sm text-red-600">
                    {state.error}
                </p>
            )}

            <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded border p-2"
            />
            <input
                type="password"
                name="password"
                placeholder="password"
                className="w-full rounded border p-2"
            />
            <p className="text-center text-sm">
                <Link href={"/forgot-password"} className="hover:underline font-semibold">
                    Forgot password?
                </Link>
            </p>

            <button
                type="submit"
                disabled={pending}
                className="w-full text-white rounded bg-amber-400 disabled:opacity-50"
            >
                {pending ? "Logging in..." : "Login"}
            </button>
            <p className="text-sm text-center">
                Don`t have an account?{" "}
                <Link href={"/register"} className="font-semibold text-amber-200">
                    Sign Up
                </Link>
            </p>
        </form>
    );
}