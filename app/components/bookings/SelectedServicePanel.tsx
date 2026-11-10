import {Clock} from  "lucide-react";
import  type {Service} from "@/lib/services-data";

export default  function SelectedServicePanel({service}: {service: Service | null}) {
    return (
        <div>
            <h3 className="font-serif text-base font-semibold text-[#2B063F]">
                Selected Service
            </h3>
            {!service ? (
                <p className="mt-3 rounded-xl border border-dashed border-[#E8D7ED] p-4 ">
                    Pick a service from the list  to see its details
                </p>
            ):(
                <div className="mt-3 overflow-hidden rounded-2xl border border-[#E8D7ED] bg-[#FDF9FF]">
                    <div className="mx-auto h-52 w-full max-w-[176px] overflow-hidden rounded-xl bg-[#D8B4E5]">
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            className="h-full w-full object-cover"/>
                    </div>
                    <div className="space-y-2 p-3">
                        <span className="inline-block rounded-full bg-[#D8B4E5] px-2.5 py-0.5 text-[10px] font-semibold text-[#6A1B82]">
                            {service.categoryLabel}
                        </span>
                        <p className="text-sm font-semibold text-[#2B063F]">{service.title}</p>
                        <p className="text-xs text-[#705A78]">{service.description}</p>
                        
                        <div className="flex items-center justify-between border-t border-[#E8D7ED] pt-2">
                            <span className="flex items-center gap-1.5 text-xs text-[#705A78]">
                                <Clock className="h-3.5 w-3.5"/>
                                {service.duration}
                            </span>
                            <span className="text-sm font-bold text-[#6A1B82]">
                                KES {service.price.toLocaleString("en-KE")}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
