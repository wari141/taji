const slots = [
    { label: "7:00 AM", hour: 7 },
    { label: "9:00 AM", hour: 9 },
    { label: "11:00 AM", hour: 11 },
    { label: "12:00 PM", hour: 12 },
    { label: "2:00 PM", hour: 14 },
    { label: "4:00 PM", hour: 16 },
    { label: "6:00 PM", hour: 18 },
];

type Props = {
    date: Date | null;
    selected: string | null;
    onSelect: (slot: string) => void;
};

export default function TimeSlots({ date, selected, onSelect }: Props) {
    const now = new Date();
    const isToday =
        date !== null &&
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() &&
        date.getDate() === now.getDate();

    return (
        <div>
            <h3 className="font-serif text-base font-semibold text-[#2B063F]">
                Available Time Slots
            </h3>
            {!date && <p className="mt-2 text-xs text-[#A08BA8]">Pick a date to see times.</p>}
            <div className="mt-3 grid grid-cols-2 gap-2">
                {slots.map(({ label, hour }) => {
                    const passed = isToday && hour <= now.getHours();
                    const disabled = !date || passed;
                    const active = selected === label;

                    return (
                        <button
                            key={label}
                            type="button"
                            disabled={disabled}
                            onClick={() => onSelect(label)}
                            className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${
                                active
                                    ? "border-[#6A1B82] bg-[#6A1B82] text-white"
                                    : disabled
                                      ? "cursor-not-allowed border-[#E8D7ED] bg-[#FDF9FF] text-[#A08BA8]"
                                      : "border-[#E8D7ED] bg-[#FDF9FF] text-[#2B063F] hover:border-[#6A1B82]"
                            }`}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}


