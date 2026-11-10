"use client";

import {useState, type FormEvent} from "react";
import Link from "next/link";
import {ArrowLeft, LogIn} from "lucide-react";

export type BookingUser = {
    name: string;
    email: string;
    contact: string;
} | null;

export type BookingDetails = {
    name: string;
    email: string;
    phone: string;
};

type Props = {
    user: BookingUser;
    summary: { service: string; when: string };
    onBack: () => void;
    onSubmit: (details: BookingDetails) => void;
};

const PHONE_RE = /^(?:\+254|254|0)[17]\d{8}$/;
const inputClass =
    "w-full rounded-lg border border-[#E8D7ED] bg-[#FDF9FF] px-3 py-2.5 text-sm text-[#2B063F] outline-none focus:border-[#6A1B82]";

export default function DetailsStep({user, summary, onBack, onSubmit}: Props) {
    const [name, setName] = useState(user?.name ?? "");
    const [email, setEmail] = useState(user?.email ?? "");
    const [phone, setPhone] = useState(user?.contact ?? "");
    const [errors, setErrors] = useState<Record<string, string>>({});

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const cleanPhone = phone.replace(/[\s-]/g, "");
        const nextErrors: Record<string, string> = {};

        if (!user) {
            if (name.trim().length < 2) nextErrors.name = "Please enter your name.";
            if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
                nextErrors.email = "Enter a valid email address.";
            }
        }
        if (!PHONE_RE.test(cleanPhone)) {
            nextErrors.phone = "Enter a valid phone number, e.g. 0712 345 678.";
        }

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        onSubmit({
            name: user ? user.name : name.trim(),
            email: user ? user.email : email.trim(),
            phone: cleanPhone,
        });
    }

    return (
        <div className="mt-6">
            <h3 className="font-serif text-lg font-semibold text-[#2B063F]">
                Your Details
            </h3>
            <p className="mt-1 text-sm text-[#705A78]">
                {user
                    ? `Booking as ${user.name} (${user.email}). We just need a phone number.`
                    : "Tell us how to reach you about this booking."}
            </p>

            <div className="mt-4 rounded-xl bg-[#FFF5FA] px-4 py-3 text-sm">
                <p className="font-semibold text-[#2B063F]">{summary.service}</p>
                <p className="text-xs text-[#705A78]">{summary.when}</p>
            </div>

            {!user && (
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#E8D7ED] bg-[#FDF9FF] p-3">
                    <LogIn className="mt-0.5 h-4 w-4 shrink-0 text-[#6A1B82]"/>
                    <p className="text-xs text-[#705A78]">
                        Would you like to log in to get the full experience? You can
                        track your bookings and check out faster.{" "}
                        <Link href="/login" className="font-semibold text-[#6A1B82] hover:underline">
                            Log in
                        </Link>{" "}
                        or{" "}
                        <Link href="/register" className="font-semibold text-[#6A1B82] hover:underline">
                            sign up
                        </Link>
                        .
                    </p>
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-4 space-y-4">
                {!user && (
                    <>
                        <div>
                            <label htmlFor="guest-name" className="mb-1 block text-xs font-semibold text-[#705A78]">
                                Full name
                            </label>
                            <input
                                id="guest-name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                autoComplete="name"
                                className={inputClass}
                            />
                            {errors.name && <p className="mt-1 text-xs text-[#DC4C5A]">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="guest-email" className="mb-1 block text-xs font-semibold text-[#705A78]">
                                Email
                            </label>
                            <input
                                id="guest-email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                autoComplete="email"
                                className={inputClass}
                            />
                            {errors.email && <p className="mt-1 text-xs text-[#DC4C5A]">{errors.email}</p>}
                        </div>
                    </>
                )}
                <div>
                    <label htmlFor="guest-phone" className="mb-1 block text-xs font-semibold text-[#705A78]">
                        Phone number
                    </label>
                    <input
                        id="guest-phone"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        autoComplete="tel"
                        placeholder="0712 345 678"
                        type="tel"
                        className={inputClass}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-[#DC4C5A]">{errors.phone}</p>}
                </div>
                <div className="flex items-center justify-between pt-2">
                    <button
                        type="button"
                        onClick={onBack}
                        className="flex items-center gap-2 rounded-full border border-[#6A1B82] bg-[#FDF9FF] px-6 py-2.5 text-sm font-semibold text-[#6A1B82] transition hover:bg-[#FFF5FA]"
                    >
                        <ArrowLeft className="h-4 w-4"/> Back
                    </button>
                    <button
                        type="submit"
                        className="rounded-full bg-[#6A1B82] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#8E2BA5]"
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}