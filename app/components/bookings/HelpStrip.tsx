import { CalendarCheck, MessageCircle } from "lucide-react";

export default function HelpStrip() {
    return (
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-[#E8D7ED] bg-[#FFF5FA] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6A1B82] text-white">
                    <CalendarCheck className="h-5 w-5"/>
                </span>
                <div className="">
                    <p className="text-sm font-semibold text-[#2B063F]">Need help choosing?</p>
                    <p className="text-xs text-[#705A78]">
                        Our team is here to guide you to the perfect service.
                    </p>
                </div>
            </div>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/254116201844"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#6A1B82] bg-[#FDF9FF] px-4 py-2 text-xs font-semibold text-[#6A1B82] transition hover:bg-[#FFF5FA]">
                <MessageCircle className="h-4 w-4"/>
                Chat with us
            </a>
        </div>
    )
}