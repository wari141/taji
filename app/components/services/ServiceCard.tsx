import  Image from  "next/image";
import Link from  "next/link";
import  {ArrowRight,Clock } from  "lucide-react";
import {categories, type Service} from "@/lib/services-data";
import ServiceMedia from "@/app/components/services/ServiceMedia";


export default function ServiceCard({ service}: {service: Service}) {
    const  categoryName =
        categories.find((c) => c.id === service.category)?.name?? service.category;
    const isVideo = service.mediaType === "video";
    return (
        <article className="flex flex-col overflow-hidden rounded-2xl border border-[#E8D7ED] bg-[#FDF9FF] shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
            <ServiceMedia  service={service} />
            <div className="flex flex-col p-4">
                <span className="w-fit rounded-md bg-[#D8B4E5] px-2 py-0.5 text-xsfont-semibold text-[#8E2BA5]">
                    {categoryName}
                </span>
                <h3 className="mt-2 font-bold text-[#2B063F]">{service.title}</h3>
                <p className="mt-1 line-clamp-2 tetx-sm text-[#705A78]">
                    {service.description}
                </p>
                <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-[#705A78]">
                        <Clock className="h-4 w-4 text-[#8E2BA5]"/>
                        {service.duration}
                    </span>
                    <span className="font-bold text-[#2B063F]">
                        KES {service.price.toLocaleString("en-ke")}
                    </span>
                </div>
                <Link
                    href={`/bookings?serviceId=${service.id}`}
                    className="mt-4 flex items-center justify-center bg-[#6A1B82] py-2.5 font-semibold hover:bg-[#8E2BA5]">
                    Book Now
                    <ArrowRight className="h-4 w-4"/>
                </Link>
            </div>
        </article>
    )
}