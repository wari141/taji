'use client'

import {Search, Bell, LogOut, User, Menu, X, Scissors, CalendarIcon, House, Image, Clock3, } from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {logoutUser} from "@/actions/auths";

type NavbarProps = {
    user?: {
        name?: string | null;
        image?: string | null;
        email?: string | null;
    }
}
const navLinks = [
    {
        name: "Home", href: "/", Icon: House
    },
    {
        name: "Services", href: "/services", Icon: Scissors
    },
    {
        name: "My bookings", href: "/bookings", Icon: CalendarIcon
    },
    {
        name: "Gallery", href: "/gallery", Icon: Image
    },
    {name: "Booking History", href: "/booking-history", Icon: Clock3
    },


]

export default function Navbar({
                                   user,
                               }:
                               NavbarProps
) {
    const [profileOpen] = useState(false)
    const initials =
        user?.name
            ?.split(" ")
            .map((n: string) => n[0])
            .join("")
            .toUpperCase() || "G";
    const pathname = usePathname();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <header className="border-b border-[#304238] bg-[#0D1511] px-3 md:px-6 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="md:hidden text-[#F5F7F5]">

                        <Menu className="h-6 w-6"/>

                    </button>

                    <span className="text-sm font-bold uppercase tracking-wide text-[#f5f7f5]">
                        Taji Curls <br/>
                        Beauty & Spa
                        </span>
                </div>
                <nav className="md:flex hidden items-center gap-6">
                    {navLinks.map((link) => {
                        const Icon = link.Icon;
                        return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition-colors ${
                                pathname === link.href
                                    ? "border-b-2 border-[#7a9b80] pb-1 font-bold text-[#7a9b80]"
                                    : "text-[#a8b5ac] hover:text-[#7a9b80]"
                            }`}
                        >

                            <Icon className=" hidden h-2 w-2"/>
                           <span>{link.name}</span>


                        </Link>
                        ) })}
                </nav>
                <div className="flex items-center gap-4">
                    <div className="relative hidden xl:block">
                        <Search
                            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#718078]"/>
                        <input
                            placeholder="Search services..."
                            type="text"
                            className="w-56 rounded-full border border-[#304238] bg-transparent py-2 pl-9 text-sm text-[#f5f7f5] outline-none placeholder:text-[#718078] focus:border-[#7a9b80]"/>
                    </div>
                    <button
                        type="button"
                        className="relative
                    text-[#f5f7f5]">
                        <Bell className="h-6 w-6"/>
                        <span
                            className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#7A9B80] text-[10px] font-semibold text-[#0D1511]"
                        >
                            2
                        </span>
                    </button>
                    <div className="relative">
                        <Link
                            href="/profile"
                            className="flex items-center gap-2   border-[#304238] px-2 py-1 hover:border-[#7A9B80] transition"
                        >
                            {user?.image ? (
                                <img
                                    src={user.image}
                                    alt={user.name ?? "User"}
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                            ) : (
                                <span
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7A9B80] text-xs font-semibold text-[#0D1511]">
                                    {initials}
                                </span>
                            )}


                        </Link>
                        {profileOpen && (
                            <div
                                className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-[#304238] bg-[#16261C] shadow-xl">
                                <div className="border-b border-[#304238] p-4">
                                    <p className="font-semibold text-[#F5F7F5]">
                                        {user?.name || "Guest"}
                                    </p>
                                    <p className="text-sm text-[#A8B5AC]">
                                        {user?.email || "Not signed in"}
                                    </p>
                                </div>
                                <Link
                                    href="/profile"
                                    className="flex items-center gap-3 px-4 py-3 text-[#F5F7F5] hover:bg-[#203128]"
                                >
                                    <User className="h-4 w-4"/>
                                    <span>Profile Settings</span>
                                </Link>
                                <div className="border-t border-[#304238] p-2">
                                    <form action={logoutUser}>
                                        <button
                                            type="submit"
                                            className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-red-400 hover:bg-red-500/10"
                                        >
                                            <LogOut className="h-4 w-4"/>
                                            Logout
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {sidebarOpen && (
                <>
                    <div
                        className="fixed inset-0   z-40"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <div className="fixed left-0 top-0h-full w-52 h-172 bg-[#16261C] z-50 border-r border-[#304238]">
                        <div className="flex items-center justify-end pr-5 p-4 border-b border-[#304238]">
                            <button

                                onClick={() => setSidebarOpen(false)}
                            >
                                <X className="h-5 w-5 text-[#F5f7f5]"/>
                            </button>
                        </div>
                        <nav className="p-4 space-y-2">
                            {navLinks.map((link) =>{
                                const Icon = link.Icon
                                return(
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className="block border  border-[#304238]  rounded-lg px-4 py-3 text-[#F5F7F5] hover:bg-gray-900"
                                >
                                    <div className="flex items-center gap-2">
                                    <Icon className="h-3.5 w-3.5"/>
                                   <span> {link.name}</span>
                                    </div>
                                </Link>
                            )})}
                        </nav>

                        <div className="absolute bottom-4 left-4 right-4 space-y-2">
                            <Link
                                href="/profile"
                                className="flex items-center gap-3 border border-[#304238] rounded-lg px-4 py-3 text-[#F5F7F5] hover:bg-[#203128]"
                            >
                                <User className="h-4 w-4"/>
                                Profile
                            </Link>

                            <form action={logoutUser}>
                                <button
                                    type="submit"
                                    className="flex w-full items-center border border-[#304238] gap-3 rounded-lg px-4 py-3 text-red-400 hover:bg-red-500/10"
                                >
                                    <LogOut className="h-4 w-4"/>
                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            )
            }
        </header>
    )
}