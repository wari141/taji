'use client';

import {useActionState} from "react";
import {forgotPassword} from "@/actions/auths";

import PasswordInput from "@/app/components/ui/PasswordInput";
import {Mail} from "lucide-react";

const initialState = {message: "", error: ""};

export default function ForgotPasswordForm() {
    const [state, formAction, pending] = useActionState(forgotPassword, initialState);

    return (
        <form action={formAction} className="w-full max-w-md space-y-4 rounded-2xl border border-[#E8D7ED] bg-[#FDF9FF] p-5 shadow-xl sm:p-7">
            <div>
                <h1 className="text-2xl text-center text-[#6A1B82] tracking-tight uppercase  font-bold">
                    Gee Curly beauty & spa
                </h1>
                <p className="text-sm text-center text-[#2B063F] mt-2 mb-2.5">
                    Forgot your password?
                </p>
                <p className="text-sm text-center text-[#705A78]">
                    No worries. Enter your email and we&apos;ll

                    help you reset your password
                </p>
            </div>

            {state?.error && (
                <p className="rounded bg-[#DC4C5A]/10 p-2 text-sm text-[#DC4C5A]">
                    {state.error}
                </p>
            )}
            {state?.message && (
                <p className="rounded bg-[#22A06B]/10 p-2 text-sm text-[#22A06B]">
                    {state.message}
                </p>
            )}
            <div>
                <label htmlFor="email" className="mb-1 block text-sm text-[#705A78]">
                    Your email
                </label>
                <div className="relative">
                    <Mail
                        className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#A08BA8]"/>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email"
                        className="w-full border rounded-2xl border-[#E8D7ED] pl-10 pr-4 py-3 text-[#2B063F] outline-none transition focus:border-[#6A1B82] focus:ring-1 focus:ring-[#6A1B82] placeholder:text-[#A08BA8] "
                    />
                </div>
            </div>
            <button
                className="w-full rounded-2xl bg-[#6A1B82] py-3 text-white transition hover:bg-[#8E2BA5] disabled:opacity-50 sm:w-auto sm:px-8"
                type="submit"
                disabled={pending}
            >
                {pending ? "Sending..." : "Send Reset Link"}
            </button>
        </form>
    );
}