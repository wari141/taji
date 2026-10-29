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
        <article className="flex flex-col overflow-hidden rounded-2xl border border-[#F2d7c1] bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
            <ServiceMedia  service={service} />
            <div className="flex flex-col p-4">
                <span className="w-fit rounded-md bg-[#ffe7d2] px-2 py-0.5 text-xsfont-semibold text-[#c95717]">
                    {categoryName}
                </span>
                <h3 className="mt-2 font-bold text-[#3d2a20]">{service.title}</h3>
                <p className="mt-1 line-clamp-2 tetx-sm text-[#6d5546]">
                    {service.description}
                </p>
                <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-[#6d5546]">
                        <Clock className="h-4 w-4 text-[#c95717]"/>
                        {service.duration}
                    </span>
                    <span className="font-bold text-[#3d2a20]">
                        KES {service.price.toLocaleString("en-ke")}
                    </span>
                </div>
                <Link
                    href={`/bookings?serviceId=${service.id}`}
                    className="mt-4 flex items-center justify-center bg-[#c95717] py-2.5 font-semibold hover:bg-[#a8470f]">
                    Book Now
                    <ArrowRight className="h-4 w-4"/>
                </Link>
            </div>
        </article>
    )
}