import Link from "next/link";
import  {ArrowRight, Tag} from "lucide-react";

export type Offer = {
    id: string;
    title: string;
    description: string;
    badge: string;
    validUntil:string;
    image: string;
};

const defaultOffers: Offer[] = [
    {
        id: "braids-20",
        title: "Braids Special",
        description: "Get 10% off all braiding styles this week.",
        badge: "20% OFF",
        validUntil: "Ends Sunday",
        image: "/images/home/img2.jpg",
    },
    {
        id: "spa-combo",
        title: "Spa Day Combo",
        description: "Enjoy a relaxing massage and facial at a special price.",
        badge: "Save kes 500",
        validUntil: "Ends this month",
        image: "/images/home/img2.jpg",
    },
    {
        id: "first-visit",
        title: "First Visit Treat",
        description: "New to Gee Curly? Enjoy 10% off your first booking.",
        badge: "10% OFF",
        validUntil: "New clients",
        image: "/images/home/imag2.jpg"
    }
]
export  default  function SpecialOffers({
    offers = defaultOffers,
                                        }:{
    offers?: Offer[];
}){
    if (offers.length === 0) return null;
     return (
         <section className="px-6 pb-10 md:px-12">
             <div className="">
                 <p className="text-xs font-semibold uppercase tracking-wider text-[#E87522]">
                     Limited time
                 </p>
                 <h2 className="mt-1 text-2xl font-bold md:text-3xl"> Special Offers</h2>
                 <p className="mt-1 text-sm text-[#6D5546]">
                     Treat yourself and save on our current offers.
                 </p>

             </div>
             <div className="mt-6 grid gap-4 md:grid-cols-3">
                 {offers.map((offer) => (
                     <article
                         key={offer.id}
                         style={{
                             backgroundImage: `linear-gradient(to top, rgba(48,30,18,.88), rgba(48,30,18,.16)), url(${offer.image})`,

                         }}
                         className="relative flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-[#8F3F18] bg-cover bg-center p-5 text-white shadow-md">
                         <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-[#5A301E]">
                             <Tag className="h-3 w-3"/>
                             {offer.badge}
                         </span>
                         <h3 className="text-lg font-bold ">{offer.title}</h3>
                         <p className="mt-1 text-sm text-white/85">{offer.description}</p>
                         <p className="mt-2 text-xs font-semibold text-[#D9892B]">
                             {offer.validUntil}
                         </p>
                         <Link
                             href = "/services"
                             className="mt-3 inline-flex w-fit items-center gap-1 text-sm  font-semibold hover:underline ">
                             View offer  <ArrowRight className="h-4 w-4"/>
                         </Link>
                     </article>
                 ))}
             </div>
         </section>
     )
}