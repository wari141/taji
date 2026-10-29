'use client';

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export type Hairstyle = {
    id: string;
    name: string;
    image: string;
};

const defaultStyles: Hairstyle[] = [
    { id: "cornrows", name: "Cornrows", image: "/images/home/img4.jpg" },
    { id: "cocotwist", name: "Coco Twist", image: "/images/home/img2.jpg" },
    { id: "knotless", name: "Knotless Braids", image: "/images/home/imag2.jpg" },
    { id: "locs", name: "Locs", image: "/images/home/imag6.jpg" },
    { id: "natural", name: "Natural Hair", image: "/images/home/image1.jpg" },
    { id: "twists", name: "Twists", image: "/images/home/img4.jpg" },
];

export default function GetInspired({
    styles = defaultStyles,
}: {
    styles?: Hairstyle[];
}) {
    const listRef = useRef<HTMLUListElement>(null);

    const scrollByCards = (direction: -1 | 1) => {
        const list = listRef.current;
        if (!list) return;

        list.scrollBy({
            left: direction * Math.max(220, list.clientWidth * 0.8),
            behavior: "smooth",
        });
    };

    return (
        <section className="relative overflow-hidden bg-linear-to-r from-cream via-peach to-cream px-4 py-8 text-ink sm:px-6 md:px-12 md:py-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />

            <div className="relative flex min-w-0 flex-col gap-6 md:flex-row md:items-center md:gap-8">
                <div className="w-full md:w-60 md:shrink-0">
                    <p className="inline-block rounded-full bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
                        Popular Hairstyles
                    </p>
                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">Get Inspired</h2>
                    <p className="mt-2 max-w-sm text-sm text-ink-soft">
                        Check out some of our latest looks and find your next hairstyle.
                    </p>
                    <Link
                        href="/gallery"
                        className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#E87522] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark focus-visible:outline-white"
                    >
                        View gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>

                <div className="min-w-0 flex-1">
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <p className="text-sm font-medium text-ink-soft">Explore our styles</p>
                        <div className="flex shrink-0 gap-2">
                            <button
                                type="button"
                                onClick={() => scrollByCards(-1)}
                                aria-label="Show previous hairstyles"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/80 text-brand-deep transition hover:bg-white focus-visible:outline-brand"
                            >
                                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                onClick={() => scrollByCards(1)}
                                aria-label="Show more hairstyles"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/80 text-brand-deep transition hover:bg-white focus-visible:outline-brand"
                            >
                                <ChevronRight className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <ul
                        ref={listRef}
                        aria-label="Popular hairstyles"
                        className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-2"
                        style={{ scrollbarWidth: "thin" }}
                    >
                        {styles.map((style) => (
                            <li
                                key={style.id}
                                className="relative h-44 min-w-0 flex-[0_0_72%] snap-start overflow-hidden rounded-2xl border border-white/80 bg-brand-dark bg-cover bg-center shadow-lg sm:h-52 sm:flex-[0_0_46%] md:flex-[0_0_42%] lg:flex-[0_0_31%]"
                                style={{ backgroundImage: `url("${style.image}")` }}
                            >
                                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                                <p className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-white sm:p-4 sm:text-base">
                                    {style.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
