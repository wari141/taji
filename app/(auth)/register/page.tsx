"use client";

import {registerUser} from "@/actions/auths";
import Link from "next/link";
import {SubmitButton} from "./SubmitButton";
import {useActionState} from "react";
import PasswordInput from "@/app/components/ui/PasswordInput";
import {Mail, User} from "lucide-react";

export default function RegisterPage() {
    const [state, formAction] = useActionState(registerUser, undefined);

    return (
        <div
            className="flex min-h-screen items-center justify-center bg-[#0D1511] px-4 sm:px-6 lg:px-12">
            <form action={formAction} className="w-96 space-y-4 rounded-lg border p-6">
                <div className="mb-8">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#8FAF96]">
                        Taji curls beauty & spa
                    </p>
                    <h1 className="text-3xl font-bold text-[#F5F7F5]">
                        Create your account
                    </h1>
                    <p className="mt-2 text-sm text-[#A8B5AC]">
                        Join Taji Curls and start your beauty journey.
                    </p>
                </div>

                {state?.error && (
                    <p className="rounded border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-400">
                        {state.error}
                    </p>
                )}

                <div>
                    <label htmlFor="surname" className="mb-1 block text-sm text-[#A8B5AC]">
                        Your surname
                    </label>
                    <div className="relative">
                        <User
                            className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#718078]"/>
                        <input
                            id="surname"
                            name="surname"
                            type="text"
                            placeholder="Surname"
                            autoComplete="family-name"

                            className="w-full border rounded-2xl border-[#333f38] pl-10 pr-4 py-3 text-[#f5f7f5] outline-none transition focus:border-[#7a9b80] focus:ring-1 focus:ring-[#7a9b80] placeholder:text-[#718078] "
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="names" className="mb-1 block text-sm text-[#A8B5AC]">
                        Full names
                    </label>
                    <div className="relative">
                        <User
                            className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#718078]"/>
                        <input
                            id="names"
                            name="names"
                            type="text"
                            autoComplete="given-name"
                            placeholder="Names"

                            className="w-full border rounded-2xl border-[#333f38] pl-10 pr-4 py-3 text-[#f5f7f5] outline-none transition focus:border-[#7a9b80] focus:ring-1 focus:ring-[#7a9b80] placeholder:text-[#718078] "
                        />
                    </div>
                </div>

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

                <div>
                    <label htmlFor="password" className="mb-1 block text-sm text-[#A8B5AC]">
                        Password
                    </label>
                    <PasswordInput
                        id="password"
                        name="password"
                        placeholder="Password"
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="mb-1 block text-sm text-[#A8B5AC]">
                        Confirm your password
                    </label>
                    <PasswordInput
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                    />
                </div>

                <SubmitButton/>

                <p className="text-center text-sm">
                    Already have an Account?{" "}
                    <Link href="/login" className="font-semibold text-amber-500 hover:underline">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}