`use client`;

import Link from "next/link";
import {
   ArrowRight,
   Brush ,ChevronRight, Flower2,Hand, LayoutGrid,Scissors, type LucideIcon
} from "lucide-react";

import {categories, type CategoryId, type Service} from "@/lib/services-data";

type Props = {
    services: Service[];
    category: CategoryId | "all";
    onCategoryChange: (value: CategoryId | "all") => void;
}
const icons: Record<CategoryId | "all", LucideIcon> = {
    all: LayoutGrid,
    hair: Scissors,
    nails: Hand,
    makeup: Brush,
    spa: Flower2
};

export default function ServicesSidebar({
    services, category, onCategoryChange,
                                        }: Props) {
    const items: { id: CategoryId| "all"; name: string; count: number }[] = [
        {id: "all", name: "ALL Services", count: services.length},
        ...categories.map((c) => ({
            id: c.id,
            name: c.name,
            count: services.filter((s) => s.category === c.id).length,

        })),
    ];
    return (
        <aside className="hidden w-60  shrink-0 lg:block">
            <div className="sticky top-6 space-y-5">
                <div
                    className="overflow-hidden round-2xl bg-linear-to-br from-[#f7c9bb] to-[#e87522] p-5 text-white shadow-sm ">
                    <span
                        className="rounded-full bg-[#8f3f18] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
                        Special Offer
                    </span>
                    <p className="mt-3 font-serif text-3xl font-bold">20% OFF</p>
                    <p className="text-sm font-medium ">All Spa Treatments</p>
                    <Link
                        href="/bookings"
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#8f3f18] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6f3010]">
                        Book now
                        <ArrowRight className="h-4 w-4"/>
                    </Link>
                </div>
                <nav
                    aria-label="Services categories"
                    className="rounded-2xl border border-[#f2d7c1] bg-white p-3 shadow-sm">
                    <h2 className="px-2 pb-2 pt-1 font-bold text-[#3d2a20]">
                        Service Categories
                    </h2>
                    <ul className="space-y-1">
                        {items.map(({id, name, count})  => {
                            const Icon = icons[id];
                            const active = category === id;
                            return (
                                <li
                                    key={id}
                                    className="">
                                    <button
                                        type="button"
                                        arial-current = {active ? "true" : undefined}
                                        onClick={() => onCategoryChange(id)}
                                        className={`flex w-full  items-center gap-3 rounded-xl py-2.5 px-3 text-left text-sm transition ${
                                           active 
                                           ? "bg-[#FFE4CC] font-semibold text-[#c95717]" 
                                               : "text-[#6d5546] hover:bg-[#fff3e8]"
                                        }`}>
                                        <Icon className="h-5 w-5 shrink-0"/>
                                        <span className="flex-1">{name}</span>
                                        <span className="text-xs opacity-70">{count}</span>
                                        <ChevronRight className="h-4 w-4 shrink-0"/>
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}