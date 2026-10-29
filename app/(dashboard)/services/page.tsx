import ServicesHero  from "@/app/components/services/ServicesHero";
import  {services} from "@/lib/services-data";
import  ServiceBrowsers from  "@/app/components/services/ServiceBrowser"
import Banner from  "@/app/components/home/Banner"

export default function  Services() {
    return (
        <div className="">
        <ServicesHero/>
            <div className="mx-auto w-full max-w-7xl px-4 py-8 md:p-6">
                <ServiceBrowsers services={services}/>
            </div>
            <div className="mx-auto max-w-7xl overflow-hidden bg-[#FFF3E8] text-[#8F3F18]">
            <Banner/>
                </div>
        </div>
    )
}