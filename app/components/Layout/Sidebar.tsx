'use client';

import Link from 'next/link';
import {usePathname} from "next/navigation";
import {
    LayoutDashboard,
    Calendar,
    Heart,
    Settings,
    Bell,
    HelpCircle,
    LogOut,
    ChevronRight,
} from "lucide-react";

import {logoutUser} from "@/actions/auths";

type SidebarProps = {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
    notificationCount?: number;
}

const links = [
    {name: "DashBoard", href: "/dashboard", Icon: LayoutDashboard},
    {name: "My Bookings", href: "/bookings", Icon: Calendar},
    {name: "Favourites", href: "/favorites", Icon: Heart},
    {name: "Profile Settings", href: "/profile", Icon: Settings},
    {name: "Notifications", href: "/notifications", Icon: Bell},
    {name: "Help & Support", href: "/help", Icon: HelpCircle},
]
export default function Sidebar({user, notificationCount = 2}: SidebarProps) {
    const pathname = usePathname();

    const initials =
        user?.name
            ?.split("")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase() || "G";

    return (
        <aside className="hidden self-stretch shrink-0 lg:flex lg:w-64">
            <div className="flex w-full flex-col gap-3">
                <div
                    className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-[#705a78] bg-gradient-to-b from-[#3a0d52] to-[#2b063f] p-5">
                    <div className="flex flex-col items-center text-center">
                        {user?.image ? (
                            <img
                                src={user.image}
                                alt={user.name ?? "Profile"}
                                className="h-24 w-24 rounded-full border-2 border-[#b56bc5] object-cover"/>
                        ) : (
                            <div
                                className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#b56bc5] text-2xl font-bold text-[#2b063f]">
                                {initials}
                            </div>
                        )
                        }
                        <p className="mt-3 font-bold capitalize text-[#fdf9ff]">{user?.name || "Guest"}</p>
                        <p className="break-all text-xs text-[#fff5fa]/70">{user?.email}</p>

                    </div>
                    <nav className="mt-4 flex flex-1 flex-col space-y-0.5">
                        {links.map(({name, href, Icon}) => {
                            const active = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={
                                        `flex items-center gap-3 rounded-xl px-4 text-sm py-2.5 text-sm font-medium transition-colors ${
                                            active
                                                ? "bg-gradient-to-r from-[#f5d27a] to-[#e9b949] text-[#2b063f]"
                                                : " text-[#fff5fa] hover:bg-white/10"
                                        }`
                                    }
                                >
                                    <Icon className="h-5 w-5 shrink-0"/>
                                    <span className="flex-1">{name}</span>

                                    {name === "Notifications" && notificationCount > 0 && (
                                        <span
                                            className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-semibold text-white">
                                            {notificationCount}
                                        </span>
                                    )}
                                    {active && <ChevronRight className={`h-4 w-4`}/>}
                                </Link>
                            )
                        })}
                        <form action={logoutUser} className={`mt-auto pt-2`}>
                            <button
                                type="submit"
                                className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-[#fff5fa] text-sm font-medium transition-colors hover:bg-red-500/15 hover:text-red-300">
                                <LogOut className="h-5 w-5 shrink-0"/>
                                Logout
                            </button>
                        </form>
                    </nav>
                    <div
                        className="shrink-0 rounded-3xl border border-[#71316f] bg-gradient-to-br from-[#5a1a7a] to-[#2b0b3f] p-4">
          <span className="rounded-full bg-[#f5d27a] px-3 py-1 text-xs font-semibold text-[#2b0b3f]">
            Special Offer
          </span>
                        <p className="mt-3 text-3xl font-extrabold text-[#fff3ff]">20% OFF</p>
                        <p className="text-sm text-[#e6c7e9]">All Spa Treatments</p>
                        <Link
                            href="/services"
                            className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f5d27a] to-[#e9b949] px-4 py-2 text-sm font-semibold text-[#2b0b3f] hover:brightness-95"
                        >
                            Book Now <ChevronRight className="h-4 w-4"/>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
);
}