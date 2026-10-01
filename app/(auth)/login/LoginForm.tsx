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
              className="w-full max-w-md border-[#304238] bg-[#13231C] space-y-4 rounded-2xl border p-6 shadow-2xl">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#F5F754]">
                    Welcome back
                </h2>
                <p className="mt-2 text-sm text-[#A8B5AC]">
                    Login in to your Taji Curls account
                </p>
            </div>

            {state?.error && (
                <p className="rounded bg-red-100 p-2 text-sm text-red-600">
                    {state.error}
                </p>
            )}
            <p className="text-2xl ">Email</p>
            <div className="relative ">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#718078]"/>
                <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Email"
                    className="w-full border rounded-2xl border-[#333f38] pl-10 pr-4 py-3 text-[#f5f7f5] outline-none transition focus:border-[#7a9b80] focus:ring-1 focus:ring-[#7a9b80] placeholder:text-[#718078] "
                />
            </div>
            <p className="text-2xl">password</p>
            <PasswordInput
                id="password"
                name="password"
                placeholder="password"
            />

            <p className="text-right text-sm">
                <Link href={"/forgot-password"} className="hover:underline font-semibold">
                    Forgot password?
                </Link>
            </p>

            <button
                type="submit"
                disabled={pending}
                className="w-40 text-[#0D1511] rounded-2xl bg-[#7A9B80] py-2.5 transition-all hover:bg-[#91B198] hover:shadow-lg hover:shadow-[#7A9B80]/20 active:scale-[0.98]  disabled:opacity-50"
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