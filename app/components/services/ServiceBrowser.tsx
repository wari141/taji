'use client';

import {useMemo, useState} from "react";
import type {CategoryId, Service} from "@/lib/services-data";
import ServicesToolbar, {type SortOption} from "@/app/components/services/ServicesToolbar";
import ServicesGrid from "@/app/components/services/ServicesGrid";
import ServicesSidebar from "@/app/components/services/ServicesSidebar";

export default function ServiceBrowser({services}: {services: Service[]}) {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<CategoryId | "all">("all");
    const [sort, setSort] = useState<SortOption>("popular");

    const visible = useMemo(()=>{
        const q = query.trim().toLowerCase();

        const filtered = services.filter((s) =>{
            const matchesCategory = category === "all" || s.category === category;
            const matchQuery =
                q === "" ||
                s.title.toLowerCase().includes(q) ||
                s.description.toLowerCase().includes(q) ||
                (s.style?.toLowerCase().includes(q) ?? false);
            return matchesCategory && matchQuery;
        });
        const sorted = [...filtered];
        if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
        if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
        if (sort === "name") sorted.sort((a, b) => a.title.localeCompare(b.title));
        return sorted;
    }, [services, query, category, sort]);
    return (
        <>
            <div className="flex items-start gap-6">
                <ServicesSidebar
                    services={services}
                    category={category}
                    onCategoryChange={setCategory}
                />
                <div className="min-w-0 flex-1">
                <ServicesToolbar
                    query={query}
                    onQueryChange={setQuery}
                    category={category}
                    onCategoryChange={setCategory}
                    sort={sort}
                    onSortChange={setSort}
                />
                <ServicesGrid services={visible} />
                </div>
            </div>

        </>
    );
}
