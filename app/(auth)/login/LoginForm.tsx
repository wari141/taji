'use client';

import {useActionState} from "react";
import {loginUser} from "@/actions/auths";
import Link from "next/link";
import PasswordInput from "@/app/components/ui/PasswordInput";
import {Mail} from "lucide-react";

const initialState = {error: ""};

export default function LoginForm() {
    const [state, formAction, pending] = useActionState(loginUser, initialState);

    return (
        <form action={formAction}
              className="w-full max-w-md space-y-4 rounded-2xl border border-[#6A1B82] bg-[#4A0D62] p-5 text-[#FDF9FF] shadow-xl sm:p-6">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#D6A84F]">
                    Welcome back
                </h2>
                <p className="mt-2 text-sm text-[#D8B4E5]">
                    Login in to your Gee Curly account
                </p>
            </div>

            {state?.error && (
                <p className="rounded bg-[#DC4C5A]/10 p-2 text-sm text-[#DC4C5A]">
                    {state.error}
                </p>
            )}
            <p className="text-base font-medium sm:text-lg">Email</p>
            <div className="relative ">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#B56BC5]"/>
                <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Email"
                    className="w-full border rounded-2xl border-[#B56BC5] bg-[#F8F0FA] pl-10 pr-4 py-3 text-[#2B063F] outline-none transition focus:border-[#6A1B82] focus:ring-1 focus:ring-[#6A1B82] placeholder:text-[#B56BC5] "
                />
            </div>
            <p className="text-base font-medium sm:text-lg">password</p>
            <PasswordInput
                id="password"
                name="password"
                placeholder="Password"
            />

            <p className="text-right text-sm">
                <Link href={"/forgot-password"} className="hover:underline font-semibold">
                    Forgot password?
                </Link>
            </p>

            <button
                type="submit"
                disabled={pending}
                className="w-full rounded-2xl bg-[#6A1B82] py-3 text-[#F8F0FA] transition-all hover:bg-[#8E2BA5] hover:shadow-lg hover:shadow-[#6A1B82]/20 active:scale-[0.98] disabled:opacity-50 sm:w-40"
            >
                {pending ? "Logging in..." : "Login"}
            </button>
            <p className="text-sm text-center">
                Don`t have an account?{" "}
                <Link href={"/register"} className="font-semibold text-[#D96BA5]">
                    Sign Up
                </Link>
            </p>
        </form>
    );
}