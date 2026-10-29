'use client';

import {useActionState} from "react";
import {forgotPassword} from "@/actions/auths";

import PasswordInput from "@/app/components/ui/PasswordInput";
import {Mail} from "lucide-react";

const initialState = {message: "", error: ""};

export default function ForgotPasswordForm() {
    const [state, formAction, pending] = useActionState(forgotPassword, initialState);

    return (
        <form action={formAction} className="w-full max-w-md space-y-4 rounded-2xl border border-[#F2D7C1] bg-white p-5 shadow-xl sm:p-7">
            <div>
                <h1 className="text-2xl text-center text-[#E87522] tracking-tight uppercase  font-bold">
                    Gee Curly beauty & spa
                </h1>
                <p className="text-sm text-center text-[#3D2A20] mt-2 mb-2.5">
                    Forgot your password?
                </p>
                <p className="text-sm text-center text-[#6D5546]">
                    No worries. Enter your email and we&apos;ll

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
                <label htmlFor="email" className="mb-1 block text-sm text-[#6D5546]">
                    Your email
                </label>
                <div className="relative">
                    <Mail
                        className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8C7160]"/>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email"
                        className="w-full border rounded-2xl border-[#EED1B9] pl-10 pr-4 py-3 text-[#3D2A20] outline-none transition focus:border-[#E87522] focus:ring-1 focus:ring-[#E87522] placeholder:text-[#8C7160] "
                    />
                </div>
            </div>
            <button
                className="w-full rounded-2xl bg-[#E87522] py-3 text-white transition hover:bg-[#C95717] disabled:opacity-50 sm:w-auto sm:px-8"
                type="submit"
                disabled={pending}
            >
                {pending ? "Sending..." : "Send Reset Link"}
            </button>
        </form>
    );
}