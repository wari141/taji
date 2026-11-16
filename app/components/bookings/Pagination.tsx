import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { BookingFilter } from "@/lib/bookings";

const BASE = "/bookingHistory";

function buildHref(filter: BookingFilter, page: number) {
    const params = new URLSearchParams();
    if (filter !== "all") params.set("status", filter);
    if (page > 1) params.set("page", String(page));
    const query = params.toString();
    return query ? `${BASE}?${query}` : BASE;
}

const buttonClass =
    "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-medium transition-colors";

export default function Pagination({
    page,
    totalPages,
    filter,
}: {
    page: number;
    totalPages: number;
    filter: BookingFilter;
}) {
    if (totalPages <= 1) return null;

    return (
        <nav aria-label="Pagination" className="mt-6 flex items-center justify-center gap-2">
            {page > 1 ? (
                <Link
                    href={buildHref(filter, page - 1)}
                    aria-label="Previous page"
                    className={`${buttonClass} border-[#71316f] bg-[#2b0b3f] text-[#fff3ff] hover:border-[#df4cbd]`}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Link>
            ) : (
                <span aria-disabled="true" className={`${buttonClass} cursor-not-allowed border-[#71316f] text-[#b98bc2] opacity-50`}>
                    <ChevronLeft className="h-4 w-4" />
                </span>
            )}

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <Link
                    key={pageNumber}
                    href={buildHref(filter, pageNumber)}
                    aria-current={pageNumber === page ? "page" : undefined}
                    className={`${buttonClass} ${
                        pageNumber === page
                            ? "border-[#df4cbd] bg-[#df4cbd] text-[#0d1511]"
                            : "border-[#71316f] bg-[#2b0b3f] text-[#e6c7e9] hover:border-[#df4cbd]"
                    }`}
                >
                    {pageNumber}
                </Link>
            ))}

            {page < totalPages ? (
                <Link
                    href={buildHref(filter, page + 1)}
                    aria-label="Next page"
                    className={`${buttonClass} border-[#71316f] bg-[#2b0b3f] text-[#fff3ff] hover:border-[#df4cbd]`}
                >
                    <ChevronRight className="h-4 w-4" />
                </Link>
            ) : (
                <span aria-disabled="true" className={`${buttonClass} cursor-not-allowed border-[#71316f] text-[#b98bc2] opacity-50`}>
                    <ChevronRight className="h-4 w-4" />
                </span>
            )}
        </nav>
    );
}

