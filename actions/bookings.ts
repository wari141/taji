"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { services } from "@/lib/services-data";

type BookingInput = {
    serviceId: string;
    date: string;
    slot: string;
    details: {
        name: string;
        email: string;
        phone: string;
    };
};

type BookingResult =
    | { ok: true; bookingId: string; message: string }
    | { ok: false; message: string };

const SLOT_HOURS: Record<string, number> = {
    "7:00 AM": 7,
    "9:00 AM": 9,
    "11:00 AM": 11,
    "12:00 PM": 12,
    "2:00 PM": 14,
    "4:00 PM": 16,
    "6:00 PM": 18,
};

export async function createBooking(input: BookingInput): Promise<BookingResult> {
    const service = services.find((item) => item.id === input.serviceId);
    const hour = SLOT_HOURS[input.slot];

    if (!service || !hour || !/^\d{4}-\d{2}-\d{2}$/.test(input.date)) {
        return { ok: false, message: "Please review your service, date, and time." };
    }

    const [year, month, day] = input.date.split("-").map(Number);
    const calendarDate = new Date(Date.UTC(year, month - 1, day));
    if (
        calendarDate.getUTCFullYear() !== year ||
        calendarDate.getUTCMonth() !== month - 1 ||
        calendarDate.getUTCDate() !== day
    ) {
        return { ok: false, message: "Please choose a valid appointment date." };
    }

    const appointmentAt = new Date(
        `${input.date}T${String(hour).padStart(2, "0")}:00:00+03:00`,
    );
    if (appointmentAt <= new Date()) {
        return { ok: false, message: "Please choose a future appointment time." };
    }

    const phone = input.details.phone.replace(/[\s-]/g, "");
    if (!/^(?:\+254|254|0)[17]\d{8}$/.test(phone)) {
        return { ok: false, message: "Please enter a valid Kenyan phone number." };
    }

    const session = await auth();
    let customerName = input.details.name.trim();
    let customerEmail = input.details.email.trim();
    let userId: string | null = null;

    if (session?.user?.id) {
        const account = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: { id: true, names: true, surname: true, email: true },
        });
        if (!account) {
            return { ok: false, message: "Your account could not be verified. Please sign in again." };
        }
        userId = account.id;
        customerName = `${account.names} ${account.surname}`;
        customerEmail = account.email;
    } else if (
        customerName.length < 2 ||
        !/^\S+@\S+\.\S+$/.test(customerEmail)
    ) {
        return { ok: false, message: "Please enter a valid name and email address." };
    }

    try {
        const booking = await prisma.booking.create({
            data: {
                userId,
                serviceId: service.id,
                serviceTitle: service.title,
                servicePrice: service.price,
                serviceDuration: service.duration,
                appointmentAt,
                customerName,
                customerEmail,
                customerPhone: phone,
            },
            select: { id: true },
        });

        revalidatePath("/bookings");
        revalidatePath("/booking-history");
        return {
            ok: true,
            bookingId: booking.id,
            message: "Your booking has been confirmed.",
        };
    } catch {
        return {
            ok: false,
            message: "We couldn't save your booking. Please try again.",
        };
    }
}
