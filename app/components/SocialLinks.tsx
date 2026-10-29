import { } from "lucide-react";

const socialLinks = [
    {
        name: "Instagram",
        href: "https://instagram.com/tajicurls",

    },
    {
        name: "Facebook",
        href: "https://facebook.com/tajicurls",

    },
];

function TikTokIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M16.6 5.82c-.99-.9-1.6-2.19-1.6-3.62h-3.03v13.5c0 1.6-1.3 2.9-2.9 2.9a2.9 2.9 0 0 1 0-5.8c.28 0 .55.04.8.11V9.94a5.94 5.94 0 0 0-.8-.05C5.06 9.89 2 12.95 2 16.95S5.06 24 9.07 24s5.94-3.06 5.94-6.05v-6.8a8.16 8.16 0 0 0 4.99 1.7v-3.03c-1.15 0-2.24-.37-3.4-1.0Z" />
        </svg>
    );
}

export default function SocialLinks() {
    return (
        <div className="flex items-center gap-3">
            {socialLinks.map(({ name, href }) => (
                <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${name}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F2D7C1] text-[#6D5546] transition hover:border-[#E87522] hover:text-[#E87522]"
                >

                </a>
                ))}
            <a
                href="https://tiktok.com/@tajicurls"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on TikTok"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F2D7C1] text-[#6D5546] transition hover:border-[#E87522] hover:text-[#E87522]"
            >
            <TikTokIcon className="h-4 w-4" />
        </a>
</div>
);
}