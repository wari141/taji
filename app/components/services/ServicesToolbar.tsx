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
        <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-[#F2D7C1] bg-white p-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
                <label htmlFor="service-search" className="sr-only">
                    Search for a service
                </label>
                <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6d5546]"/>
                <input
                    id="service-search"
                    value={query}
                    placeholder="Search for a service..."
                    onChange={(e) => onQueryChange(e.target.value)}
                    type="text"
                    className="w-full rounded-xl border border-[#F2D7C1] bg-[#FFF8F2] py-2.5 pl-10 pr-4 text-[#3d2a20] outline-none placeholder:text-[#6d5546] focus:border-[#c95717]"/>
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
                                ? "bg-[#c95717] text-white"
                                    : "border border-[#f2d7c1] bg-white text-[#3d2a20] hover:border-[#c95717]"
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
                    className="w-full appearance-none rounded-xl border border-[#F2D7C1] bg-white py-2.5 pl-4 pr-10 text-sm text-[#3D2A20] outline-none focus:border-[#C95717] lg:w-auto"
                >
                    <option value="popular">Sort by: Popular</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6D5546]" />
            </div>
        </div>

    );
}
