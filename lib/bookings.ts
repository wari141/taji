export type BookingsStatus = "confirmed" | "successful" | "cancelled" | "pending";
export type BookingFilter = "all" | "upcoming" | "completed" | "cancelled";

export type Booking = {
    id: string;
    category: string;
    service: string;
    date: string;
    startTime: string;
    endTime: string;
    price: number;
    status: BookingsStatus;
    image?: string | null;
};

export const mockBookings: Booking[] = [
    { id: "1", category: "Hair", service: "Knotless Braids", date: "2025-05-02", startTime: "10:00 AM", endTime: "1:00 PM", price: 2500, status: "confirmed" },
    { id: "2", category: "Hair", service: "Knotless Braids", date: "2025-05-16", startTime: "3:00 PM", endTime: "4:00 PM", price: 2000, status: "successful" },
    { id: "3", category: "Nails", service: "Nail Art", date: "2026-11-11", startTime: "11:00 AM", endTime: "12:00 PM", price: 1300, status: "cancelled" },
    { id: "4", category: "Makeup", service: "Makeup Application", date: "2026-11-12", startTime: "2:00 PM", endTime: "3:30 PM", price: 1500, status: "pending" },
];

export const bookingFilters: { value: BookingFilter; label: string }[] = [
    { value: "all", label: "All Bookings" },
    { value: "upcoming", label: "Upcoming" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
];

export function parseFilter(value?: string): BookingFilter {
    return bookingFilters.some((filter) => filter.value === value)
        ? (value as BookingFilter)
        : "all";
}

export function filterBookings(bookings: Booking[], filter: BookingFilter) {
    switch (filter) {
        case "upcoming":
            return bookings.filter((booking) => booking.status === "confirmed");
        case "completed":
            return bookings.filter((booking) => booking.status === "successful");
        case "cancelled":
            return bookings.filter((booking) => booking.status === "cancelled");
        default:
            return bookings;
    }
}

export const PAGE_SIZE = 3;

export function parsePage(value?: string) {
    const page = Number(value);
    return Number.isInteger(page) && page > 0 ? page : 1;
}

export function paginate<T>(items: T[], page: number, pageSize = PAGE_SIZE) {
    const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
    const currentPage = Math.min(page, totalPages);

    return {
        items: items.slice((currentPage - 1) * pageSize, currentPage * pageSize),
        page: currentPage,
        totalPages,
    };
}
