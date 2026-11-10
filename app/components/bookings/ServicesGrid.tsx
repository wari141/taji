import type { Service } from "@/lib/services-data";
import BookingServiceCard from "@/app/components/bookings/BookingServicesCard";

type Props = {
    services: Service[];
    selectedId: string | null;
    onSelect: (id: string) => void;
};

export default function ServicesGrid({ services, selectedId, onSelect }: Props) {
    return (
        <div className="mt-6">
            <h3 className="font-serif text-lg font-semibold text-[#2B063F]">
                Select a Service
            </h3>
            <p className="mt-1 text-sm text-[#705A78]">
                Choose the service you want to book. You can browse by category or
                search for a specific service.
            </p>

            {services.length === 0 ? (
                <p className="mt-8 rounded-xl border border-dashed border-[#E8D7ED] p-6 text-center text-sm text-[#705A78]">
                    No services found. Try a different category or search.
                </p>
            ) : (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {services.map((service) => (
                        <BookingServiceCard
                            key={service.id}
                            service={service}
                            selected={service.id === selectedId}
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}