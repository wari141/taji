import ServicesHero  from "@/app/components/services/ServicesHero";
import  {services} from "@/lib/services-data";
import  ServiceBrowsers from  "@/app/components/services/ServiceBrowser"
import Banner from  "@/app/components/home/Banner"

export default function  Services() {
    return (
        <div className="bg-[#FDF9FF]">
        <ServicesHero/>
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-8 md:px-6 md:py-10">
                <ServiceBrowsers services={services}/>
            </div>
            <div className="w-full overflow-hidden bg-[#FDF9FF] text-[#2B063F]">
            <Banner/>
                </div>
        </div>
    )
}

