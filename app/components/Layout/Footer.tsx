'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import {
    Home,
    Calendar,
    Phone,
    MapPin,
    Mail,
    Scissors,
    Image as ImageIcon,
    CalendarIcon
} from "lucide-react"



const shortLinks = [
    { name: "Home", href: "/", Icon: Home },
    {name: "services", href: "/services", Icon: Scissors},
    {name: "gallery", href: "/gallery", Icon: ImageIcon},
    {name: "My bookings", href: "/bookings", Icon: Calendar}


];
const socials = [
    { label: "Instagram", short: "IG", href: "#" },
    { label: "Facebook", short: "FB", href: "#" },
    { label: "TikTok", short: "TT", href: "#" },
    { label: "WhatsApp", short: "WA", href: "https://wa.me/254116201844" },
];
const headingClass = "mb-4 font-semibold text-[#fdf9ff]"

export default function Footer() {
    const pathName = usePathname()
    return (
        <footer className="mt-20 border-t border-[#705A78] bg-[#2B063F]">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid gap-10 md:grid-cols-4">
                    <div>
                        <h1 className="text-xl text-[#FDF9FF] font-bold">
                            GEE CURLY
                        </h1>
                        <p className="text-[#FFF5FA] text-sm mt-1">
                            Beauty &amp; Spa
                        </p>
                        <p className="text-[#FFF5FA] text-sm mt-1">
                            Premium hair, beauty and spa services tailored for you
                        </p>
                    </div>
                    <div>
                        <h3 className={headingClass}>Quick Links</h3>
                        <ul className="space-y-3">
                            {shortLinks.map(({ name, href, Icon }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="flex items-center gap-2 text-sm text-[#FFF5FA] transition-colors hover:text-[#B56BC5]"
                                    >
                                        <Icon className="h-4 w-4" />
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className={headingClass}>Contact Us</h3>
                        <ul className="space-y-3 text-sm text-[#FFF5FA]">
                            <li className="flex items-start gap-2">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                                Lumumba Drive, Roysambu
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                                <a href="tel:+254116201844" className="hover:text-[#B56BC5]">
                                    +254 116 201 844
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                                <a href="mailto:geecurly@gmail.com" className="break-all hover:text-[#B56BC5]">
                                    geecurly@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={headingClass}>Follow Us</h3>
                        <div className="flex gap-2">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#705A78] text-xs font-semibold text-[#FFF5FA] transition-colors hover:border-[#B56BC5] hover:text-[#B56BC5]"
                                >
                                    {s.short}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-[#705A78] pt-6 text-center text-xs text-[#FFF5FA]/70">
                    © {new Date().getFullYear()} Gee Curly Beauty &amp; Spa. All rights reserved.
                </div>
                </div>

        </footer>
    )
}