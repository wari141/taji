 import {auth} from "@/lib/auth";

 import {redirect} from "next/navigation";


 export default async function DashboardPage(){
    const session = await auth();
    console.log(session)

    if(!session?.user){
        redirect("/login");
    }
    return(
        <div className=" min-h-screen p-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>

            <div className=" mt-6 rounded-lg">
                <p className="mb-2">ID:{session?.user?.id}</p>
                <h2 className="text-xl font-semibold">welcome, {session.user.name}</h2>
                <p className="mt-2">Email: {session?.user?.email}</p>
            </div>

        </div>
    )
 }