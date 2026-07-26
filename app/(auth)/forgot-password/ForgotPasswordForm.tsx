'use client';

import { useActionState } from "react";
import { forgotPassword } from "@/actions/auths";

const initialState = { message: "", error: "" };

export default function ForgotPasswordForm() {
    const [state, formAction, pending] = useActionState(forgotPassword, initialState);

    return (
        <form action={formAction} className="w-96 space-y-4 rounded-lg border p-6">
            <h1 className="text-2xl font-bold">
                Forgot Password
            </h1>
            <p className="text-sm text-gray-500">
                Enter your email and we will send you a password link
            </p>

            {state?.error && (
                <p className="rounded bg-red-100 p-2 text-sm text-red-600">
                    {state.error}
                </p>
            )}
            {state?.message && (
                <p className="rounded bg-green-100 p-2 text-sm text-green-600">
                    {state.message}
                </p>
            )}

            <input className="w-full required rounded border p-2" type="email" name="email" placeholder="Email" />

            <button
                className="w-full rounded bg-amber-300 text-white disabled:opacity-50"
                type="submit"
                disabled={pending}
            >
                {pending ? "Sending..." : "Send Reset Link"}
            </button>
        </form>
    );
}