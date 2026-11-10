import ServiceCard from "./ServiceCard";
import type { Service } from "@/lib/services-data";

export default function ServicesGrid({ services }: { services: Service[] }) {
    if (services.length === 0) {
        return (
            <p className="rounded-2xl border border-[#E8D7ED] bg-[#FDF9FF] p-8 text-center text-[#705A78]">
                No services found.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>
    );
}

