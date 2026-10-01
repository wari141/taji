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
        <footer className="mt-20 border-t border-[#304238]">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid gap-10 md:grid-cols-4">
                    <div>
                        <h1 className="text-xl text-[#F5F7F5] font-bold">
                            TAji CURLS
                        </h1>
                        <p className="text-[#A8B5AC] text-sm mt-1">
                            Beauty & Spa
                        </p>
                        <p className="text-[#A8B5AC] text-sm mt-1">
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
                                    ? "border-b-2 border-[#7a9b80] pb-1 text-[#7a9b80]"
                                    : "text-[#a8b5ac] hover:text-[#7a9b80]"
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
                        <h3 className="mb-4 font-semibold text-[#F5F7F5]">Contact Us</h3>
                        <div className="text-sm space-y-3 text-[#A8B5AC]">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4"/>
                                Lumumba Drive, Roysambu
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4"/>
                                +254 116 201 844
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4"/>
                                geecurly@gmail.com
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-[#F5F7F5]">
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