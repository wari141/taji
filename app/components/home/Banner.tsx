import  Link from 'next/link';
import  {ArrowRight}  from "lucide-react";

type CtaBannerProps = {
    image?: string;
}

 export default function CtaBanner({
     image = "/images/home/image1.jpg",
                                }:CtaBannerProps) {
     return (
         <section className="px-6 pb-10 md:px-12">
             <div
                 style={{backgroundImage: `linear-gradient(to right, rgba(43,6,63,.28), rgba(43,6,63,.88)), url(${image})`}}
                 className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#4A0D62] bg-cover bg-left p-6 text-white md:flex-row md:items-center md:p-8">
                 <div className="md:pl-48">
                     <p className="text-xs font-semibold uppercase tracking-wider text-[#E8A5D0]">
                         Treat Yourself
                     </p>
                     <h2 className="mt-1 text-2xl font-bold md:text-3xl">Ready for a new look?</h2>
                     <p className="mt-1 text-sm text-white/80">
                         Book your next appointment and treat yourself.
                     </p>
                 </div>
                 <Link
                     href="/services"
                     className="bg-[#D6A84F] text-[#2B063F] hover:bg-[#F2C66D] flex shrink-0 items-center rounded-full px-6 py-3 text-[#2B063F] text-sm font-semibold transition"

                 >
                     Book Appointment <ArrowRight className="h-4 w-4"/>
                 </Link>
             </div>
         </section>
     )
 }