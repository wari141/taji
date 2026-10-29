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
              className="w-full max-w-md space-y-4 rounded-2xl border border-[#F2D7C1] bg-white p-5 shadow-xl sm:p-6">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#E87522]">
                    Welcome back
                </h2>
                <p className="mt-2 text-sm text-[#6D5546]">
                    Login in to your Gee Curly account
                </p>
            </div>

            {state?.error && (
                <p className="rounded bg-red-100 p-2 text-sm text-red-600">
                    {state.error}
                </p>
            )}
            <p className="text-base font-medium sm:text-lg">Email</p>
            <div className="relative ">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8C7160]"/>
                <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Email"
                    className="w-full border rounded-2xl border-[#EED1B9] pl-10 pr-4 py-3 text-[#3D2A20] outline-none transition focus:border-[#E87522] focus:ring-1 focus:ring-[#E87522] placeholder:text-[#8C7160] "
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
                className="w-full rounded-2xl bg-[#E87522] py-3 text-[#FFF3E8] transition-all hover:bg-[#C95717] hover:shadow-lg hover:shadow-[#E87522]/20 active:scale-[0.98] disabled:opacity-50 sm:w-40"
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