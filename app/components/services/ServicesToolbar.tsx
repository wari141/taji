 `use client`;

import {ChevronDown, Search} from "lucide-react";
import {categories, type CategoryId} from "@/lib/services-data";

export type SortOption = "popular" | "price-asc" | "price-desc" | "name";

type Props = {
    query: string;
    onQueryChange: (value: string) => void;
    category: CategoryId | "all";
    onCategoryChange: (value: CategoryId | "all") => void;
    sort: SortOption;
    onSortChange: (value: SortOption) => void;
};

const pills: {id:CategoryId | "all"; name:string}[] = [
    {id: "all", name: "All"},
    ...categories,
];
export default  function ServicesToolbar({
    query,
    onQueryChange,
    category,
    onCategoryChange,
    sort,
    onSortChange,
                                         }:Props){
    return (
        <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-[#E8D7ED] bg-[#FDF9FF] p-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
                <label htmlFor="service-search" className="sr-only">
                    Search for a service
                </label>
                <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#705A78]"/>
                <input
                    id="service-search"
                    value={query}
                    placeholder="Search for a service..."
                    onChange={(e) => onQueryChange(e.target.value)}
                    type="text"
                    className="w-full rounded-xl border border-[#E8D7ED] bg-[#FDF9FF] py-2.5 pl-10 pr-4 text-[#2B063F] outline-none placeholder:text-[#705A78] focus:border-[#8E2BA5]"/>
            </div>
            <div className="flex flex-wrap gap-2">
                {pills.map(pill => {
                    const active = category ===pill.id;
                    return (
                        <button
                            key={pill.id}
                            type="button"
                            aria-pressed={active}
                            onClick={() => onCategoryChange(pill.id)}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                                active
                                ? "bg-[#6A1B82] text-white"
                                    : "border border-[#E8D7ED] bg-[#FDF9FF] text-[#2B063F] hover:border-[#8E2BA5]"
                            }`
                            }>
                            {pill.name}
                        </button>
                    )
                })}
            </div>
            {/* Sort */}
            <div className="relative">
                <label htmlFor="service-sort" className="sr-only">
                    Sort services
                </label>
                <select
                    id="service-sort"
                    value={sort}
                    onChange={(e) => onSortChange(e.target.value as SortOption)}
                    className="w-full appearance-none rounded-xl border border-[#E8D7ED] bg-[#FDF9FF] py-2.5 pl-4 pr-10 text-sm text-[#2B063F] outline-none focus:border-[#8E2BA5] lg:w-auto"
                >
                    <option value="popular">Sort by: Popular</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#705A78]" />
            </div>
        </div>

    );
}
