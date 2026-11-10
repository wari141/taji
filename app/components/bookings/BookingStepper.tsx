const steps = [
    { id: 1, label: "Select Service" },
    { id: 2, label: "Choose Date & Time" },
    { id: 3, label: "Your Details" },
    { id: 4, label: "Confirm" },
];

export default function BookingStepper({ current }: { current: number }) {
    return (
        <ol className="flex items-start justify-between">
            {steps.map((step, index) => {
                const active = step.id === current;
                const done = step.id < current;

                return (
                    <li key={step.id} className="relative flex flex-1 flex-col items-center">
                        {index < steps.length - 1 && (
                            <span
                                className={`absolute left-1/2 top-4 h-px w-full ${
                                    done ? "bg-[#6A1B82]" : "bg-[#E8D7ED]"
                                }`}
                            />
                        )}
                        <span
                            className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                                active || done
                                    ? "bg-[#6A1B82] text-white"
                                    : "bg-[#D8B4E5] text-[#705A78]"
                            }`}
                        >
                            {step.id}
                        </span>
                        <span
                            className={`mt-2 text-center text-xs ${
                                active ? "font-semibold text-[#6A1B82] underline underline-offset-4" : "text-[#705A78]"
                            }`}
                        >
                            {step.label}
                        </span>
                    </li>
                );
            })}
        </ol>
    );
}