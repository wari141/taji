'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import {

    Phone,
    MapPin,
    Mail,
    Scissors,
    Image as ImageIcon,
    CalendarIcon
} from "lucide-react"



const shortLinks = [
    {name: "services", href: "/services", Icon: Scissors},
    {name: "gallery", href: "/gallery", Icon: ImageIcon},
    {name: "My bookings", href: "/bookings", Icon: CalendarIcon}

]

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
                            Beauty & Spa
                        </p>
                        <p className="text-[#FFF5FA] text-sm mt-1">
                            Premium hair, beauty and spa services tailored for you
                        </p>
                    </div>
                    <div>
                        {shortLinks.map(link => {
                            const Icon = link.Icon
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`transition-colors ${
                                    pathName === link.href
                                    ? "border-b-2 border-[#B56BC5] pb-1 text-[#B56BC5]"
                                    : "text-[#FFF5FA] hover:text-[#B56BC5]"
                                    }`}
                                >
                                    <div className=" flex items-center gap-2 mb-3">
                                        <Icon className="h-4 w-4  relative"/>
                                        <span>{link.name}</span>
                                    </div>
                                </Link>
                            )
                        })}

                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold text-[#FDF9FF]">Contact Us</h3>
                        <div className="text-sm space-y-3 text-[#FFF5FA]">
                            <div className="flex min-w-0 items-start gap-2 break-words">
                                <MapPin className="h-4 w-4 shrink-0"/>
                                Lumumba Drive, Roysambu
                            </div>
                            <div className="flex min-w-0 items-start gap-2 break-words">
                                <Phone className="h-4 w-4 shrink-0"/>
                                +254 116 201 844
                            </div>
                            <div className="flex min-w-0 items-start gap-2 break-words">
                                <Mail className="h-4 w-4 shrink-0"/>
                                <a className="break-all" href="mailto:geecurly@gmail.com">geecurly@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-[#FDF9FF]">
                            Follow us on
                        </h3>
                        <div>

                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}