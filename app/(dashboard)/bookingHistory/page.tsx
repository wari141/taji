import BookingTab from "@/app/components/bookings/BookingTabs";
import {
    filterBookings,
    mockBookings,
    paginate,
    parseFilter,
    parsePage,
} from "@/lib/bookings";
import BookingCard from "@/app/components/bookings/BookingCard";
import BookAgainBanner from "@/app/components/bookings/BookAgainBanner";
import Pagination from "@/app/components/bookings/Pagination";
import {auth} from "@/lib/auth";
import Sidebar from "@/app/components/Layout/Sidebar";

type BookingHistoryProps = {
    searchParams: Promise<{ status?: string; page?: string }>;
};

export default async function BookingHistory({
    searchParams,
}: BookingHistoryProps) {
    const session = await auth();
    const { status, page } = await searchParams;
    const filter = parseFilter(status);
    const filteredBookings = filterBookings(mockBookings, filter);
    const { items, page: currentPage, totalPages } = paginate(
        filteredBookings,
        parsePage(page),
    );

    return (
        <div className="mx-auto flex w-full max-w-screen-2xl gap-4 px-2 py-6 sm:px-4 lg:gap-6 lg:px-6">
            <Sidebar user={session?.user}/>
            <div className="min-w-0 flex-1">
            <section className="relative overflow-hidden rounded-3xl border border-[#71316f] bg-gradient-to-r from-[#2b0b3f] to-[#21072f] p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f4a8e3]">
                    Gee Curly Beauty &amp; Spa
                </p>
                <h1 className="mt-3 text-4xl font-bold text-[#fff3ff] md:text-5xl">
                    Booking History
                </h1>
                <p className="mt-2 text-lg italic text-[#f5c84b]">
                    Your Beauty Journey with Gee Curly
                </p>
            </section>
            <BookingTab active={filter} />
            <div className="mt-6 space-y-4">
                {items.length === 0 ? (
                    <p className="rounded-2xl border border-[#71316f] bg-[#2b0b3f] p-8 text-center text-[#e6c7e9]">
                        No bookings found.
                    </p>
                ) : (
                    items.map((booking) => (
                        <BookingCard key={booking.id} booking={booking} />
                    ))
                )}
            </div>
            <Pagination
                page={currentPage}
                totalPages={totalPages}
                filter={filter}
            />
            <BookAgainBanner />
                </div>
        </div>
    );
}