import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Hero from "@/app/components/home/Hero";
import GetInspired from "@/app/components/home/GetInspired";
import FeaturedServices from "@/app/components/home/FeaturedServices";
import WhyChooseUs from "@/app/components/home/WhyChooseUs";
import UpcomingAppointment from "@/app/components/home/UpcomingAppointment";
import CtaBanner from "@/app/components/home/Banner";
import Location from "@/app/components/home/Location";
import SpecialOffers from "@/app/components/home/SpecialOffers";

export default async function HomePage() {
    const session = await auth();
    if (!session?.user) redirect("/login");

    return (
        <div className="mx-auto max-w-7xl overflow-hidden bg-[#FFF3E8] text-[#8F3F18]">
            <Hero firstName={session?.user?.name?.trim().split(/\s+/)[0]} />
            <FeaturedServices />
            <SpecialOffers />
            <GetInspired />
            <section className="grid gap-8 px-6 py-10 md:px-12 lg:grid-cols-2">
                <WhyChooseUs />
                <UpcomingAppointment />
            </section>
            <Location />
            <CtaBanner />
        </div>
    );
}
