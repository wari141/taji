'use client';

import {useActionState} from "react";
import {forgotPassword} from "@/actions/auths";
import PasswordInput from "@/app/components/ui/PasswordInput";
import {Mail} from "lucide-react";

const initialState = {message: "", error: ""};

export default function ForgotPasswordForm() {
    const [state, formAction, pending] = useActionState(forgotPassword, initialState);

    return (
        <form action={formAction} className="w-96  space-y-4 rounded-lg border border-[#16271e] p-6">
            <div>
                <h1 className="text-2xl text-center text-[#8FAF96] tracking-tight uppercase  font-bold">
                    Taji curls beauty & spa
                </h1>
                <p className="text-sm text-center text-[#F5F7F5] mt-2 mb-2.5">
                    Forgot your password?
                </p>
                <p className="text-sm text-center text-[#A8B5AC]">
                    No worries, Enter your email and we`ll
                    <br/>
                    help you reset your password
                </p>
            </div>

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
            <div>
                <label htmlFor="email" className="mb-1 block text-sm text-[#A8B5AC]">
                    Your email
                </label>
                <div className="relative">
                    <Mail
                        className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#718078]"/>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email"
                        className="w-full border rounded-2xl border-[#333f38] pl-10 pr-4 py-3 text-[#f5f7f5] outline-none transition focus:border-[#7a9b80] focus:ring-1 focus:ring-[#7a9b80] placeholder:text-[#718078] "
                    />
                </div>
            </div>
            <button
                className="w-48 rounded-2xl  bg-[#7A9B80] py-2.5 text-white disabled:opacity-50"
                type="submit"
                disabled={pending}
            >
                {pending ? "Sending..." : "Send Reset Link"}
            </button>
        </form>
    );
}