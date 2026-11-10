"use client";

import { useMemo, useState } from "react";
import { createBooking } from "@/actions/bookings";
import { ArrowRight, CheckCircle2, CircleAlert, Lock, LoaderCircle, X } from "lucide-react";
import BookingCalendar from "@/app/components/bookings/BookingCalendar";
import BookingStepper from "@/app/components/bookings/BookingStepper";
import CategorySidebar from "@/app/components/bookings/CategorySidebar";
import DetailsStep, {
    type BookingDetails,
    type BookingUser,
} from "@/app/components/bookings/DetailsStep";
import HelpStrip from "@/app/components/bookings/HelpStrip";
import SelectedServicePanel from "@/app/components/bookings/SelectedServicePanel";
import ServicesGrid from "@/app/components/bookings/ServicesGrid";
import TimeSlots from "@/app/components/bookings/TimeSlots";
import { services } from "@/lib/services-data";

export default function BookingFlow({ user }: { user: BookingUser }) {
    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [date, setDate] = useState<Date | null>(null);
    const [slot, setSlot] = useState<string | null>(null);
    const [details, setDetails] = useState<BookingDetails | null>(null);
    const [detailsStarted, setDetailsStarted] = useState(false);
    const [isConfirming, setIsConfirming] = useState(false);
    const [confirmationResult, setConfirmationResult] = useState<
        { ok: boolean; message: string; bookingId?: string } | null
    >(null);

    const selected = services.find((service) => service.id === selectedId) ?? null;
    const step = details ? 4 : detailsStarted ? 3 : selected ? 2 : 1;
    const canContinue = Boolean(selected && date && slot);

    function handleDateSelect(nextDate: Date) {
        setDate(nextDate);
        setSlot(null);
    }

    async function handleConfirmBooking() {
        if (!selected || !date || !slot || !details) return;

        setIsConfirming(true);
        setConfirmationResult(null);
        const bookingDate = [
            date.getFullYear(),
            String(date.getMonth() + 1).padStart(2, "0"),
            String(date.getDate()).padStart(2, "0"),
        ].join("-");

        try {
            const result = await createBooking({
                serviceId: selected.id,
                date: bookingDate,
                slot,
                details,
            });
            setConfirmationResult(result);
        } catch {
            setConfirmationResult({
                ok: false,
                message: "We couldn't save your booking. Please try again.",
            });
        } finally {
            setIsConfirming(false);
        }
    }

    const filteredServices = useMemo(() => {
        const query = search.trim().toLowerCase();
        return services.filter(
            (service) =>
                (category === "all" || service.category === category) &&
                (query === "" || service.title.toLowerCase().includes(query)),
        );
    }, [category, search]);

    if (details && selected && date && slot) {
        const when = `${date.toLocaleDateString("en-KE", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
        })} at ${slot}`;

        return (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#2B063F]/60 p-4 backdrop-blur-sm sm:p-6"
                role="presentation"
            >
                <section
                    aria-labelledby="booking-confirm-title"
                    aria-modal="true"
                    className="my-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#E8D7ED] bg-[#FDF9FF] p-5 shadow-2xl sm:p-8"
                    role="dialog"
                >
                    <div className="mb-6 flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6A1B82]">
                                Review your appointment
                            </p>
                            <h2
                                id="booking-confirm-title"
                                className="mt-1 font-serif text-2xl font-semibold text-[#2B063F] sm:text-3xl"
                            >
                                Confirm your booking
                            </h2>
                        </div>
                        <button
                            type="button"
                            aria-label="Close booking confirmation"
                            onClick={() => {
                                setDetails(null);
                                setDetailsStarted(false);
                            }}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E8D7ED] bg-[#FDF9FF] text-[#705A78] transition hover:bg-[#FFF5FA]"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                    <BookingStepper current={step} />
                    <p className="mt-6 text-sm text-[#705A78]">
                        Review the details below for {details.name}.
                    </p>
                    <div className="mt-4 space-y-4 rounded-2xl border border-[#E8D7ED] bg-[#FDF9FF] p-5">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#A08BA8]">
                                Service
                            </p>
                            <p className="mt-1 font-semibold text-[#2B063F]">{selected.title}</p>
                        </div>
                        <div className="border-t border-[#E8D7ED] pt-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#A08BA8]">
                                Date and time
                            </p>
                            <p className="mt-1 text-sm text-[#2B063F]">{when}</p>
                        </div>
                        <div className="border-t border-[#E8D7ED] pt-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#A08BA8]">
                                Contact details
                            </p>
                            <p className="mt-1 text-sm text-[#2B063F]">{details.name}</p>
                            <p className="text-sm text-[#705A78]">{details.email}</p>
                            <p className="text-sm text-[#705A78]">{details.phone}</p>
                        </div>
                    </div>
                    {confirmationResult && (
                        <div
                            role="status"
                            className={`mt-4 flex items-start gap-3 rounded-xl border p-4 ${
                                confirmationResult.ok
                                    ? "border-[#22A06B]/30 bg-[#22A06B]/10 text-[#2B063F]"
                                    : "border-[#DC4C5A]/30 bg-[#DC4C5A]/10 text-[#2B063F]"
                            }`}
                        >
                            {confirmationResult.ok ? (
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                            ) : (
                                <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" />
                            )}
                            <div>
                                <p className="text-sm font-semibold">{confirmationResult.message}</p>
                                {confirmationResult.bookingId && (
                                    <p className="mt-1 text-xs">Reference: {confirmationResult.bookingId}</p>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="mt-6 flex justify-end">
                        {confirmationResult?.ok ? (
                            <button
                                type="button"
                                onClick={() => {
                                    setDetails(null);
                                    setDetailsStarted(false);
                                    setConfirmationResult(null);
                                }}
                                className="rounded-full bg-[#6A1B82] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#8E2BA5]"
                            >
                                Done
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={handleConfirmBooking}
                                disabled={isConfirming}
                                className="inline-flex items-center gap-2 rounded-full bg-[#6A1B82] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#8E2BA5] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isConfirming && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                {isConfirming ? "Confirming..." : "Confirm booking"}
                            </button>
                        )}
                    </div>
                </section>
            </div>
        );
    }

    if (detailsStarted && selected && date && slot) {
        const when = `${date.toLocaleDateString("en-KE", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
        })} at ${slot}`;

        return (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#2B063F]/60 p-4 backdrop-blur-sm sm:p-6"
                role="presentation"
            >
                <section
                    aria-labelledby="booking-details-title"
                    aria-modal="true"
                    className="my-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#E8D7ED] bg-[#FDF9FF] p-5 shadow-2xl sm:p-8"
                    role="dialog"
                >
                    <div className="mb-6 flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6A1B82]">
                                Booking details
                            </p>
                            <h2
                                id="booking-details-title"
                                className="mt-1 font-serif text-2xl font-semibold text-[#2B063F] sm:text-3xl"
                            >
                                Complete your booking
                            </h2>
                        </div>
                        <button
                            type="button"
                            aria-label="Close booking details"
                            onClick={() => setDetailsStarted(false)}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E8D7ED] bg-[#FDF9FF] text-[#705A78] transition hover:bg-[#FFF5FA]"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                    <BookingStepper current={step} />
                    <DetailsStep
                        user={user}
                        summary={{ service: selected.title, when }}
                        onBack={() => setDetailsStarted(false)}
                        onSubmit={setDetails}
                    />
                </section>
            </div>
        );
    }

    return (
        <div className="grid gap-6 lg:grid-cols-[260px_1fr_320px]">
            <CategorySidebar
                selected={category}
                onSelect={setCategory}
                search={search}
                onSearch={setSearch}
            />
            <section className="rounded-2xl border border-[#E8D7ED] bg-[#FDF9FF] p-4 md:p-6">
                <BookingStepper current={step} />
                <ServicesGrid
                    services={filteredServices}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                />
                <HelpStrip />
            </section>
            <aside className="space-y-5 rounded-2xl border border-[#E8D7ED] bg-[#FDF9FF] p-4">
                <SelectedServicePanel service={selected} />
                <div>
                    <h3 className="mb-3 font-serif text-base font-semibold text-[#2B063F]">
                        Choose Date
                    </h3>
                    <BookingCalendar selected={date} onSelect={handleDateSelect} />
                </div>
                <TimeSlots date={date} selected={slot} onSelect={setSlot} />
                <div>
                    <button
                        type="button"
                        disabled={!canContinue}
                        onClick={() => setDetailsStarted(true)}
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#6A1B82] py-2.5 text-sm font-semibold text-white transition hover:bg-[#8E2BA5] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Continue <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="mt-2 flex items-center justify-center gap-1 text-[11px] text-[#A08BA8]">
                        <Lock className="h-3 w-3" /> Secure booking
                    </p>
                </div>
            </aside>
        </div>
    );
}




