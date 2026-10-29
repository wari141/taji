import Link from "next/link";

export type Appointment = {
    id:string;
    service: string;
    stylist: string;
    when:string;
    status: "Confrimed" | "Pending";
}
const sampleAppointment: Appointment = {
    id: "sample",
    service: "Hair Braiding",
    stylist: "mercy",
    when: "Tommorrow, 10:00",
    status: "Confrimed",
};

export default function UpcomingAppointment({
    appointment=sampleAppointment,}: {
    appointment?:Appointment | null;
}) {
    return (
        <div className="rounded-2xl bg-[#FFE7D2] p-5">
            <div className="flex items-center justify-between">
                <h3 className="font-bold"> Upcoming Appointment</h3>
                <Link
                    className="text-xs font-semibold text-[#E87522] hover:underline"
                    href="/bookings">
                    View All
                </Link>
            </div>
            {appointment ? (
                <>
                    <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl bg-white p-4 sm:flex-nowrap sm:gap-4">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E87522] text-lg font-bold text-white">
                            {appointment.stylist[0]}
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="text-xs text-[#6D5546]">{appointment.when}</p>
                            <p className="font-bold">{appointment.service}</p>
                            <p className="text-xs text-[#6D5546]">
                                with {appointment.stylist}
                            </p>
                        </div>
                        <span className="rounded-full bg-[#FFE4CC] px-3 py-1 text-xs font-semibold text-[#9C4B20]">
                            {appointment.status}
                        </span>
                    </div>
                    <Link
                        className=" mt-4 block rounded-full bg-[#8F3F18] py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#A84E1C]"
                        href="/bookings"
                    >
                       Manage Booking
                    </Link>
                </>
            ):(
                <div className="mt-4 rounded-xl bg-white p-6 text-center">
                    <p className="text-sm text-[#6D5546]">
                        You have no upcoming Appointments.
                    </p>
                    <Link
                        className="mt-3 inline-block rounded-full bg-[#E87522] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#C95717]"
                        href="/services">
                        Book now
                    </Link>
                </div>
            )}
        </div>
    )
}
