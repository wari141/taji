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
                 style={{backgroundImage: `linear-gradient(to right, rgba(48,30,18,.28), rgba(48,30,18,.88)), url(${image})`}}
                 className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#8F3F18] bg-cover bg-left p-6 text-white md:flex-row md:items-center md:p-8">
                 <div className="md:pl-48">
                     <p className="text-xs font-semibold uppercase tracking-wider text-[#D9892B]">
                         Treat Yourself
                     </p>
                     <h2 className="mt-1 text-2xl font-bold md:text-3xl">Ready for a new look?</h2>
                     <p className="mt-1 text-sm text-white/80">
                         Book your next appointment and treat yourself.
                     </p>
                 </div>
                 <Link
                     href="/services"
                     className="bg-[#E87522] hover:bg-[#C95717] flex shrink-0 items-center rounded-full px-6 py-3 text-white text-sm font-semibold transition"

                 >
                     Book Appointment <ArrowRight className="h-4 w-4"/>
                 </Link>
             </div>
         </section>
     )
 }