import { Heart, ShieldCheck, Sparkles } from "lucide-react";

const perks = [
    { id: "stylist", icon: Sparkles, label: "Professional", sub: "Stylist" },
    { id: "care", icon: Heart, label: "Personalized", sub: "Care" },
    { id: "clean", icon: ShieldCheck, label: "Safe & Clean", sub: "Environment" },
];

export default function BookingsHero() {
    return (
        <section className="relative overflow-hidden rounded-2xl border border-[#E8D7ED] bg-gradient-to-r from-[#F4C6DF] via-[#FFF5FA] to-[#F8F0FA]">
            <div className="grid items-center md:grid-cols-[minmax(0,1fr)_minmax(220px,320px)]">
                <div className="z-10 p-6 md:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D6A84F]">
                        Book your appointment
                    </p>
                    <h2 className="mt-3 text-4xl font-bold leading-tight text-[#2B063F] md:text-5xl">
                        Make Time for
                        <br />
                        <span className="text-[#D6A84F]">Yourself</span>
                    </h2>
                    <p className="mt-3 text-sm text-[#705A78]">
                        Relax, refresh, and let our team bring out the best in you. Choose your preferred
                        service, date, and time. It&apos;s quick and easy!
                    </p>
                    <div className="mt-6 flex flex-wrap gap-5">
                        {perks.map(({ id, icon: Icon, label, sub }) => (
                            <div key={id} className="flex items-center gap-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F0FA] text-[#D6A84F]">
                                    <Icon className="h-4 w-4" />
                                </span>
                                <p className="text-xs leading-tight text-[#705A78]">
                                    {label}
                                    <br />
                                    {sub}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative mx-auto h-64 w-full max-w-[260px] overflow-hidden rounded-t-2xl md:my-6 md:mr-6 md:h-[360px] md:max-w-none md:rounded-2xl">
                    <img
                        src="/images/home/img4.jpg"
                        alt="A client enjoying a beauty treatment"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                    <p className="absolute right-4 top-5 -rotate-12 font-serif text-lg italic leading-snug text-white drop-shadow md:text-xl">
                        Look Good
                        <br />
                        Feel Good
                        <br />
                        Always
                    </p>
                </div>
            </div>
        </section>
    );
}
