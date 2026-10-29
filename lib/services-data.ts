export type CategoryId = "hair" | "nails" | "makeup" | "spa";

export type Service = {
    id: string;
    title: string;
    description: string;
    category: CategoryId;
    style?: string;
    image: string;
    video?: string;
    mediaType: "photo" | "video";
    duration: string;
    price: number;
};

export const categories: { id: CategoryId; name: string }[] = [
    { id: "hair", name: "Hair" },
    { id: "nails", name: "Nails" },
    { id: "makeup", name: "Makeup" },
    { id: "spa", name: "Spa" },
];

const PLACEHOLDER = "/images/home/imag2.jpg"; // TODO: swap per service later

export const services: Service[] = [
    {
        id: "knotless-braids",
        title: "Knotless Braids",
        description:
            "Lightweight, natural-looking braids that last longer and protect your hair.",
        category: "hair",
        style: "Knotless Braids",
        image: PLACEHOLDER,
        mediaType: "photo",
        duration: "3-5 hours",
        price: 3800,
    },
    {
        id: "hair-styling",
        title: "Hair Styling",
        description: "Elegant style for everyday wear and special occasions.",
        category: "hair",
        style: "Styling",
        image: PLACEHOLDER,
        mediaType: "video",
        duration: "2-3 hours",
        price: 3000,
    },
    {
        id: "nail-art",
        title: "Nail Art",
        description: "Beautiful, trendy and long-lasting nail designs.",
        category: "nails",
        image: PLACEHOLDER,
        mediaType: "photo",
        duration: "3-5 hours",
        price: 3800,
    },
    {
        id: "facial-treatment",
        title: "Facial Treatment",
        description: "Rejuvenate your skin with our premium facial treatment.",
        category: "spa",
        image: PLACEHOLDER,
        mediaType: "photo",
        duration: "2 hours",
        price: 2000,
    },
    {
        id: "marley-waist-length",
        title: "Waist-length Marley",
        description: "Long, full Marley braids with a soft natural finish.",
        category: "hair",
        style: "Marley Braids",
        image: PLACEHOLDER,
        mediaType: "photo",
        duration: "3-5 hours",
        price: 3800,
    },
    {
        id: "coco-twist",
        title: "Coco Twist",
        description: "Soft, bouncy twists with a coconut-curl finish.",
        category: "hair",
        style: "Coco Twist",
        image: PLACEHOLDER,
        mediaType: "photo",
        duration: "3-5 hours",
        price: 2800,
    },
    {
        id: "makeup-application",
        title: "Makeup Application",
        description: "Flawless looks for every occasion, from natural to glam.",
        category: "makeup",
        image: PLACEHOLDER,
        mediaType: "video",
        duration: "1-2 hours",
        price: 1500,
    },
    {
        id: "hair-coloring",
        title: "Hair Coloring",
        description: "Vibrant, long-lasting colour for a fresh new look.",
        category: "hair",
        style: "Coloring",
        image: PLACEHOLDER,
        mediaType: "photo",
        duration: "2-4 hours",
        price: 2500,
    },
    {
        id: "relaxing-massage",
        title: "Relaxing Massage",
        description: "Relieves stress and restores your body's balance.",
        category: "spa",
        image: PLACEHOLDER,
        mediaType: "photo",
        duration: "1 hour",
        price: 2000,
    },
    {
        id: "bridal-package",
        title: "Bridal Package",
        description: "Complete beauty package for your special day.",
        category: "makeup",
        image: PLACEHOLDER,
        mediaType: "photo",
        duration: "3-6 hours",
        price: 5000,
    },
    {
        id: "hair-treatment",
        title: "Hair Treatment",
        description: "Nourish, strengthen and revive your hair.",
        category: "hair",
        style: "Treatments",
        image: PLACEHOLDER,
        mediaType: "video",
        duration: "1-2 hours",
        price: 1800,
    },
    {
        id: "gel-nails",
        title: "Gel Nails",
        description: "Long-lasting, glossy and beautiful nails.",
        category: "nails",
        image: PLACEHOLDER,
        mediaType: "photo",
        duration: "1 hour",
        price: 1500,
    },
    {
        id: "body-scrub",
        title: "Body Scrub",
        description: "Exfoliate, refresh and leave your skin glowing.",
        category: "spa",
        image: PLACEHOLDER,
        mediaType: "photo",
        duration: "1 hour",
        price: 2000,
    },
    {
        id: "locs-styling",
        title: "Locs Styling",
        description: "Stylish, neat and natural locs for every personality.",
        category: "hair",
        style: "Locs",
        image: PLACEHOLDER,
        mediaType: "video",
        duration: "2-4 hours",
        price: 2500,
    },
];



export function getServicesByCategoryId(category: CategoryId) {
    return services.filter((s) => s.category === category);
}

export function getStyleGroups(category: CategoryId) {
    const groups = new Map<string, Service[]>();
    for (const s of getServicesByCategoryId(category)) {
        if (!s.style) continue;
        groups.set(s.style, [...(groups.get(s.style) ?? []), s]);
    }
    return [...groups.entries()].map(([title, items]) => ({ title, items }));
}


if (process.env.NODE_ENV !== "production") {
    const ids = services.map((s) => s.id);
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    if (dupes.length) console.warn("Duplicate service ids:", dupes);
}