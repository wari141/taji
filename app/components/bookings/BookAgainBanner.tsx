import Link from "next/link";
import { CalendarPlus, ArrowRight } from "lucide-react";

export default function BookAgainBanner() {
    return (
        <section className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-[#71316f] bg-gradient-to-r from-[#2b0b3f] to-[#46104f] p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
                <CalendarPlus className="h-10 w-10 shrink-0 text-[#f5c84b]" />
                <div>
                    <h2 className="text-lg font-bold text-[#fff3ff]">Need to Book Again?</h2>
                    <p className="text-sm text-[#e6c7e9]">
                        Schedule your next appointment and keep looking fabulous.
                    </p>
                </div>
            </div>
            <Link
                href="/services"
                className="flex items-center gap-2 rounded-full bg-[#f5c84b] px-5 py-2.5 text-sm font-semibold text-[#2b0b3f] hover:brightness-95"
            >
                Book an Appointment <ArrowRight className="h-4 w-4" />
            </Link>
        </section>
    );
}
