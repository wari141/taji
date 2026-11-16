import Link from "next/link";
import { CalendarDays, CheckCheck, Clock, X } from "lucide-react";
import { bookingFilters, type BookingFilter } from "@/lib/bookings";

const icons = {
    all: CalendarDays,
    upcoming: Clock,
    completed: CheckCheck,
    cancelled: X,
};

export default function BookingTab({ active }: { active: BookingFilter }) {
    return (
        <nav aria-label="Booking filters" className="mt-6 flex gap-3 overflow-x-auto pb-1">
            {bookingFilters.map(({ value, label }) => {
                const Icon = icons[value];
                const isActive = value === active;
                const href = value === "all" ? "/bookingHistory" : `/bookingHistory?status=${value}`;

                return (
                    <Link
                        key={value}
                        href={href}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                            isActive
                                ? "border-[#df4cbd] bg-[#df4cbd] text-[#2b0b3f]"
                                : "border-[#71316f] bg-[#2b0b3f] text-[#e6c7e9] hover:border-[#df4cbd] hover:text-[#fff3ff]"
                        }`}
                    >
                        <Icon className="h-4 w-4" />
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}

