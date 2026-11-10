import type { Service } from "@/lib/services-data";

type Props = {
    service: Service;
    selected: boolean;
    onSelect: (id: string) => void;
};

export default function BookingServiceCard({ service, onSelect, selected }: Props) {
    return (
        <button
            type="button"
            aria-pressed={selected}
            onClick={() => onSelect(service.id)}
            className={`overflow-hidden rounded-2xl border bg-[#FDF9FF] text-left transition hover:shadow-md ${
                selected ? "border-[#6A1B82] ring-2 ring-[#6A1B82]/30" : "border-[#E8D7ED]"
            }`}
        >
            <div className="flex min-h-36 items-center gap-3 p-3">
                <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-xl bg-[#D8B4E5] sm:h-36 sm:w-28">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                    />
                    <span className="absolute inset-x-1 bottom-1 rounded-full bg-[#6A1B82]/95 px-1.5 py-1 text-center text-[9px] font-semibold leading-tight text-white">
                        {service.categoryLabel}
                    </span>
                </div>
                <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                    <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#2B063F]">{service.title}</p>
                        <p className="mt-1 text-xs font-semibold text-[#705A78]">
                            {service.duration}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#6A1B82]">
                            <span
                                className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                                    selected ? "border-[#6A1B82]" : "border-[#A08BA8]"
                                }`}
                            >
                                {selected && <span className="h-2 w-2 rounded-full bg-[#6A1B82]" />}
                            </span>
                            KES {service.price.toLocaleString("en-KE")}
                        </span>
                    </div>
                </div>
            </div>
        </button>
    );
}
