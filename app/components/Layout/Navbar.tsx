'use client'

import {
    Search,
    Bell,
    LogOut,
    User,
    Menu,
    X,
    Scissors,
    CalendarIcon,
    House,
    Image as ImageIcon,
    Clock3,
} from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { logoutUser } from "@/actions/auths";

type NavbarProps = {
    user?: {
        name?: string | null;
        image?: string | null;
        email?: string | null;
    };
};

const navLinks = [
    { name: "Home", href: "/home", Icon: House },
    { name: "Services", href: "/services", Icon: Scissors },
    { name: "My bookings", href: "/bookings", Icon: CalendarIcon },
    { name: "Gallery", href: "/gallery", Icon: ImageIcon },
    { name: "Booking History", href: "/booking-history", Icon: Clock3 },
];

export default function Navbar({ user }: NavbarProps) {
    const [profileOpen, setProfileOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    // later: load the real count from the database
    const unreadCount = 0;

    const initials =
        user?.name
            ?.split(" ")
            .map((n: string) => n[0])
            .join("")
            .toUpperCase() || "G";

    return (
        <header className="border-b border-line bg-cream px-3 py-4 md:px-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Brand + mobile menu button */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Open navigation menu"
                        className="text-ink md:hidden"
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    <span className="text-sm font-bold uppercase tracking-wide text-ink">
                        Gee Curly <br />
                        Beauty &amp; Spa
                    </span>
                </div>

                {/* Desktop links */}
                <nav className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition-colors ${
                                pathname === link.href
                                    ? "border-b-2 border-brand pb-1 font-bold text-brand"
                                    : "text-ink-soft hover:text-brand"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right side: search, bell, avatar */}
                <div className="flex items-center gap-4">
                    <div className="relative hidden xl:block">
                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8C7160]" />
                        <input
                            placeholder="Search services..."
                            type="text"
                            className="w-56 rounded-full border border-line bg-transparent py-2 pl-9 text-sm text-ink outline-none placeholder:text-[#8C7160] focus:border-brand"
                        />
                    </div>

                    <button
                        type="button"
                        aria-label="Notifications"
                        className="relative text-ink"
                    >
                        <Bell className="h-6 w-6" />
                        {unreadCount > 0 && (
                            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-semibold text-white">
                                {unreadCount}
                            </span>
                        )}
                    </button>

                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setProfileOpen((open) => !open)}
                            aria-label="Open account menu"
                            aria-expanded={profileOpen}
                            className="flex items-center rounded-full border-2 border-transparent transition hover:border-brand"
                        >
                            {user?.image ? (
                                <img
                                    src={user.image}
                                    alt={user.name ?? "User"}
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                            ) : (
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
                                    {initials}
                                </span>
                            )}
                        </button>

                        {profileOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-30"
                                    onClick={() => setProfileOpen(false)}
                                />
                                <div className="absolute right-0 z-40 mt-3 w-64 overflow-hidden rounded-2xl border border-line bg-white shadow-xl">
                                    <div className="border-b border-line p-4">
                                        <p className="font-semibold text-ink">
                                            {user?.name || "Guest"}
                                        </p>
                                        <p className="text-sm text-ink-soft">
                                            {user?.email || "Not signed in"}
                                        </p>
                                    </div>

                                    <Link
                                        href="/profile"
                                        onClick={() => setProfileOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-ink hover:bg-[#FFF0E2]"
                                    >
                                        <User className="h-4 w-4" />
                                        <span>Profile Settings</span>
                                    </Link>

                                    <div className="border-t border-line p-2">
                                        <form action={logoutUser}>
                                            <button
                                                type="submit"
                                                className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-red-500 hover:bg-red-500/10"
                                            >
                                                <LogOut className="h-4 w-4" />
                                                Logout
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile side menu */}
            {sidebarOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40 bg-ink/45 backdrop-blur-sm"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <div className="fixed inset-y-0 left-0 z-50 flex h-dvh w-[min(20rem,88vw)] max-w-full flex-col overflow-y-auto border-r border-line bg-white shadow-2xl">
                        <div className="flex items-center justify-end border-b border-line p-4 pr-5">
                            <button
                                type="button"
                                onClick={() => setSidebarOpen(false)}
                                aria-label="Close navigation menu"
                            >
                                <X className="h-5 w-5 text-brand" />
                            </button>
                        </div>

                        <nav className="space-y-2 p-4">
                            {navLinks.map((link) => {
                                const Icon = link.Icon;
                                const active = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setSidebarOpen(false)}
                                        className={`block rounded-xl border px-4 py-3 transition hover:bg-[#FFF0E2] ${
                                            active
                                                ? "border-brand bg-[#FFF0E2] font-semibold text-brand"
                                                : "border-line text-ink"
                                        }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <Icon className="h-4 w-4" />
                                            <span>{link.name}</span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className="mt-auto space-y-2 p-4">
                            <Link
                                href="/profile"
                                onClick={() => setSidebarOpen(false)}
                                className="flex items-center gap-3 rounded-lg border border-line px-4 py-3 text-ink hover:bg-[#FFF0E2]"
                            >
                                <User className="h-4 w-4" />
                                Profile
                            </Link>

                            <form action={logoutUser}>
                                <button
                                    type="submit"
                                    className="flex w-full items-center gap-3 rounded-lg border border-line px-4 py-3 text-red-500 hover:bg-red-500/10"
                                >
                                    <LogOut className="h-4 w-4" />
                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}