import Image from "next/image";
import  {Scissors, ShieldCheck, Sparkles, Tag} from "lucide-react";

const  featurs = [
    {icon : Scissors, label : "Expert Stylist"},
    {icon : ShieldCheck, label : "Premium products"},
    {icon : Sparkles, label : "Clean & Safe environment"},
    {icon: Tag, label : "Affordable Prices"},
]

export  default function  ServicesHero(){
    return (
       <section className="relative overflow-hidden bg-linear-to-br from-[#FFF3E8] to-[#FFE4CC]">
           <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 pt-10 md:grid-cols-2 md:px-6 md:pt-0">
           <div className="md:py-12">
               <p className="tracking-wider uppercase text-[#E87522] text-sm inline-text">Gee Curly Beauty $ Spa</p>
               <h2 className="text-4xl text-[#3d2a20] font-bold mt-2 font-serif leading-tight md:text-5xl">
                   Discover our
                   <span className="block text-5xl text-[#e87522]">
                       Services
                   </span>
               </h2>
               <p className="text-sm mt-3 max-w-md text-[#6d5546]">
                   From  stunning  hairstyles to relaxing spa treatments, find the perfect services to enhance your beauty and well-being
               </p>
               
               <ul className="mt-6 grid grid-cols-2  gap-4 sm:grid-cols-4">
                   {featurs.map(({icon:Icon, label}) => (
                       <li
                           key={label}
                           className="flex items-center  gap-2">
                           <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFE7D2] text-[#E87522]">
                           <Icon className="h-5 w-5"/>
                           </span>
                           <span className="text-xs leading-tight text-[#5A301E]">
                               {label}
                           </span>
                       </li>
                   ))}
               </ul>
           </div>
               <div className="relative h-72 md:h-full md:min-h-72">
                   <Image
                       fill
                       priority
                       alt="Woma with braids"
                       src="/images/home/imag2.jpg"
                       loading = "eager"
                       sizes = "(min-width:786px) 50vw, 100vw"
                       className="object-cover object-top"/>
                   <p className="absolute right-4 top-6 -rotate-6 font-serif text-2xl italic text-[#c95717] md:text-3xl">
                       Look Good,
                       <br/>
                       Feel Good,
                       <br/>
                       Always
                   </p>
               </div>
           </div>
       </section>
    )
}