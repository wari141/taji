import Link from "next/link";
import {
    ArrowRight,
    CalendarDays,
    CheckCircle2,
    Clock,
    RefreshCw,
    Trash2,
    XCircle,
} from "lucide-react";
import type { Booking, BookingsStatus } from "@/lib/bookings";

const statusStyles: Record<
    BookingsStatus,
    { label: string; className: string; Icon: typeof CheckCircle2 }
> = {
    confirmed: {
        label: "Confirmed",
        className: "bg-emerald-500/15 text-emerald-400",
        Icon: CheckCircle2,
    },
    successful: {
        label: "Completed",
        className: "bg-blue-500/15 text-blue-400",
        Icon: CheckCircle2,
    },
    cancelled: {
        label: "Cancelled",
        className: "bg-rose-500/15 text-rose-400",
        Icon: XCircle,
    },
    pending: {
        label: "Pending",
        className: "bg-amber-500/15 text-amber-300",
        Icon: Clock,
    },
};

function formatDate(isoDate: string) {
    const date = new Date(`${isoDate}T00:00:00`);
    return date.toLocaleDateString("en-KE", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

export default function BookingCard({ booking }: { booking: Booking }) {
    const { label, className, Icon } = statusStyles[booking.status];

    return (
        <article className="flex flex-col gap-4 rounded-2xl border border-[#71316f] bg-[#2b0b3f] p-4 md:flex-row md:items-center">
            <div className="h-28 w-full shrink-0 overflow-hidden rounded-xl bg-[#46104f] md:w-40">
                {booking.image && (
                    <img
                        src={booking.image}
                        alt={booking.service}
                        className="h-full w-full object-cover"
                    />
                )}
            </div>
            <div className="flex-1">
                <span className="rounded-full bg-[#df4cbd]/20 px-2.5 py-0.5 text-xs font-medium text-[#f4a8e3]">
                    {booking.category}
                </span>
                <h3 className="mt-2 text-lg font-bold text-[#fff3ff]">
                    {booking.service}
                </h3>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#e6c7e9]">
                    <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4" />
                        {formatDate(booking.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {booking.startTime} - {booking.endTime}
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-between gap-6 md:justify-start">
                <p className="text-xl font-bold text-[#f5c84b]">
                    KES {booking.price.toLocaleString()}
                </p>
                <span
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${className}`}
                >
                    <Icon className="h-4 w-4" /> {label}
                </span>
            </div>
            <div className="flex flex-col gap-2 md:w-44">
                <Link
                    href={`/bookingHistory/${booking.id}`}
                    className="flex items-center justify-center gap-2 rounded-full border border-[#df4cbd] px-4 py-2 text-sm font-medium text-[#fff3ff] hover:bg-[#46104f]"
                >
                    View Details <ArrowRight className="h-4 w-4" />
                </Link>
                {booking.status === "confirmed" && (
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 rounded-full border border-rose-400/50 px-4 py-2 text-sm font-medium text-rose-300 hover:bg-rose-500/10"
                    >
                        <Trash2 className="h-4 w-4" /> Cancel Booking
                    </button>
                )}
                {booking.status === "successful" && (
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 rounded-full bg-[#df4cbd] px-4 py-2 text-sm font-semibold text-[#2b0b3f] hover:bg-[#f08bd8]"
                    >
                        <RefreshCw className="h-4 w-4" /> Book Again
                    </button>
                )}
            </div>
        </article>
    );
}
