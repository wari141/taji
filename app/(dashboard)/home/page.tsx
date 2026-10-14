 import {auth} from "@/lib/auth";

 import {redirect} from "next/navigation";
 import Hero from "@/app/components/home/Hero";

 export default async function DashboardPage(){
    const session = await auth();
    if(!session?.user){
        redirect("/login");
    }
    return(
        <div className="mx-auto max-w-7xl overflow-hidden bg-[#f6f4ee] text-[#0f2a1c]">
            <Hero firstName={session.user.name?.split("")[0]}/>

        </div>
    )
 }