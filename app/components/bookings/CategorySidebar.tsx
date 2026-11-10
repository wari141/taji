import {
    Brush,
    Flower2,
    LayoutGrid,
    Scissors,
    Sparkles,
    type LucideIcon,
} from "lucide-react";

type Category = { id: string; label: string; icon: LucideIcon };

const categories: Category[] = [
    { id: "all", label: "All Services", icon: LayoutGrid },
    { id: "hair", label: "Hair Services", icon: Scissors },
    { id: "nails", label: "Nails", icon: Sparkles },
    { id: "makeup", label: "Makeup", icon: Brush },
    { id: "spa", label: "Spa & Massage", icon: Flower2 },
];

type Props = {
    selected: string;
    onSelect: (id: string) => void;
    search: string;
    onSearch: (value: string) => void;
};

export default function CategorySidebar({
    selected,
    onSelect,
    search,
    onSearch,
}: Props) {
    return (
        <aside className="space-y-4 rounded-2xl border border-[#E8D7ED] bg-[#FDF9FF] p-4">
            <div className="relative">
                <input
                    aria-label="Search services"
                    value={search}
                    onChange={(event) => onSearch(event.target.value)}
                    placeholder="Search for a service..."
                    type="search"
                    className="w-full rounded-full border border-[#E8D7ED] bg-[#FDF9FF] py-2 pl-3 pr-3 text-sm text-[#2B063F] outline-none focus:border-[#6A1B82]"
                />
            </div>
            <h2 className="font-serif text-lg font-semibold text-[#2B063F]">
                Service Category
            </h2>
            <ul className="space-y-2">
                {categories.map(({ id, label, icon: Icon }) => {
                    const active = id === selected;
                    return (
                        <li key={id}>
                            <button
                                type="button"
                                onClick={() => onSelect(id)}
                                className={`flex w-full items-center justify-start gap-3 rounded-xl px-3 py-2.5 text-sm ${
                                    active
                                        ? "bg-[#D8B4E5] font-semibold text-[#2B063F]"
                                        : "bg-[#FDF9FF] text-[#705A78] hover:bg-[#FFF5FA]"
                                }`}
                            >
                                <span
                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                                        active
                                            ? "bg-[#6A1B82] text-white"
                                            : "bg-[#D8B4E5] text-[#6A1B82]"
                                    }`}
                                >
                                    <Icon className="h-4 w-4" />
                                </span>
                                <span className="flex-1 text-left">{label}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className="rounded-2xl bg-gradient-to-br from-[#4A0D62] to-[#D96BA5] p-4">
                <p className="text-xs font-semibold text-white">Special Offer</p>
                <p className="mt-1 font-serif text-3xl font-bold text-[#F8E2AD]">20% OFF</p>
                <p className="text-xs text-white">All Spa Treatments</p>
                <button
                    type="button"
                    className="mt-3 rounded-full bg-[#D6A84F] px-4 py-1.5 text-xs font-semibold text-[#2B063F] hover:bg-[#F2C66D]"
                >
                    View Offer
                </button>
            </div>
        </aside>
    );
}
