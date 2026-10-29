import Link from "next/link";

import {ArrowRight, Scissors } from "lucide-react";
import {Span} from "next/dist/server/lib/trace/tracer";



export type  Services = {
    id: string;
    name: string;
    price: number;
    image: string;
};
const defaultServices: Services[] = [
    {id: "coco-twist", name: "Coco twist", price: 2700, image:"/images/home/img2.jpg"},
    {id: "nails",name: "nails", price: 2700, image:"/images/home/img2.jpg"},
    {id: "makeup", name: "Makeup", price: 2700, image:"/images/home/img2.jpg"},
    {id: "spa", name: "Coco twist", price: 2700, image:"/images/home/img2.jpg"},
];

export default  function FeelServices({
    services=defaultServices,
                                  }: {services?: Services[];
}) {
    return(
        <section className="px-4 py-10 sm:px-6 md:px-12">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
                <div className="">
                    <h3 className="text-[#E87522] text-xs font-semibold uppercase tracking-wider">Our services</h3>

                    <h1 className="mt-1 text-2xl font-bold md:text-3xl">  Featured Services</h1>
                    <p className="mt-1 text-sm text-[#6D5546]"> Explore our most  popular beauty services, crafted just for you</p>
                </div>
               <Link
                   href="/services"
                   className="text-[#E87522] flex shrink-0 items-center gap-1 text-sm font-semibold hover:underline"
               >
                view All Services
                <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-4">
                {services.map(service => (
                    <article
                    key={service.id}
                    className="overflow-hidden rounded-2xl bg-white  shadow-md"
                    >
                        <div
                            className="h-36 bg-[#FFE8D5] bg-cover bg-center"
                            style={{backgroundImage: `url(${service.image})`}}
                        />
                        <div className="px-4 pb-4 pt-7 relative">
                            <span className="absolute -top-5 left-4 flex h-10 w-10 items-center justify-center rounded-full shadow text-white bg-[#E87522]">
                                <Scissors className="h-5 w-5"/>
                            </span>
                            <h3 className="font-bold">{service.name}</h3>
                            <p className="text-sm text-[#6D5546]">
                                From KES {service.price.toLocaleString()}
                            </p>
                            <Link
                                href={`/bookings?service=${service.id}`}
                                className="mt-3 flex items-center justify-center gap-1 rounded-full bg-[#E87522] py-2 text-sm font-semibold text-white transition hover:bg-[#C95717]"
                            >
                                Book Now <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
