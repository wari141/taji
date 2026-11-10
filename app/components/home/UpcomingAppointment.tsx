import Link from "next/link";

export type Appointment = {
    id:string;
    service: string;
    stylist: string;
    when:string;
    status: "Confirmed" | "Pending" | "Cancelled";
}
const sampleAppointment: Appointment = {
    id: "sample",
    service: "Hair Braiding",
    stylist: "mercy",
    when: "Tommorrow, 10:00",
    status: "Confirmed",
};

export default function UpcomingAppointment({
    appointment=sampleAppointment,}: {
    appointment?:Appointment | null;
}) {
    return (
        <div className="rounded-2xl bg-[#D8B4E5] p-5">
            <div className="flex items-center justify-between">
                <h3 className="font-bold"> Upcoming Appointment</h3>
                <Link
                    className="text-xs font-semibold text-[#6A1B82] hover:underline"
                    href="/bookings">
                    View All
                </Link>
            </div>
            {appointment ? (
                <>
                    <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl bg-[#FDF9FF] p-4 sm:flex-nowrap sm:gap-4">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#6A1B82] text-lg font-bold text-white">
                            {appointment.stylist[0]}
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="text-xs text-[#705A78]">{appointment.when}</p>
                            <p className="font-bold">{appointment.service}</p>
                            <p className="text-xs text-[#705A78]">
                                with {appointment.stylist}
                            </p>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${appointment.status === "Confirmed" ? "bg-[#22A06B]/10 text-[#22A06B]" : appointment.status === "Pending" ? "bg-[#E9A23B]/15 text-[#A08BA8]" : "bg-[#DC4C5A]/10 text-[#DC4C5A]"}`}>
                            {appointment.status}
                        </span>
                    </div>
                    <Link
                        className=" mt-4 block rounded-full bg-[#6A1B82] py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#8E2BA5]"
                        href="/bookings"
                    >
                       Manage Booking
                    </Link>
                </>
            ):(
                <div className="mt-4 rounded-xl bg-[#FDF9FF] p-6 text-center">
                    <p className="text-sm text-[#705A78]">
                        You have no upcoming Appointments.
                    </p>
                    <Link
                        className="mt-3 inline-block rounded-full bg-[#6A1B82] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#8E2BA5]"
                        href="/services">
                        Book now
                    </Link>
                </div>
            )}
        </div>
    )
}
