'use client'

import { useActionState } from "react";
import { updateProfile } from "@/actions/auths";

type ProfileFormProps= {
    user:{
        name:string;
        email: string;
        image?: string |null;
        contact?: string  }
}
type ProfileState= {
    success?: string;
    error?: string;
}

const initialState:ProfileState= {};
   
 


export default function ProfileForm({
    user,

}: ProfileFormProps){
    const [state, formAction, pending] = useActionState(
        updateProfile,
        initialState
    )
    
    const initials = 
    user.name
    ?.split(" ")
    .map((n:string)=>n[0])
    .join("")
    .toUpperCase() ?? "?";
    console.log(user)

    return (
        <div className="space-y-6 md:p-6 mx-auto max-w-5xl bg-[#093a1388] rounded-2xl border border-[#38523455] ">
            <div className=" px-7 pt-3 mt-4 border rounded-2xl border-[#293b24]">
        <h1 className="text-3xl font-bold text-[#F5F7F5]">My profile</h1>
      <p className="text-[#A8B5AC]">Manage your account information and preferences</p>
      </div>
      <form 
      action={formAction}
      className=" rounded-2xl border border-[#304238] bg-[#142e18] p-6">
        <div className="flex  gap-6 flex-col md:flex-row md:items-centre ">
            <div>
                {user.image ?(
                    <img 
                    src={user.image} 
                    alt={user.name || "profile"}
                    className="h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full object-cover"
                     />
                ):(
                   <div className="flex h-16 w-16 md:w-20 md:h-20 items-center justify-center rounded-full bg-[#7A9B80] text-xl font-bold text-[#0D1511]">
                    {initials}
                   </div>
                )}
            </div>
            <div>
                <h4 className="text-2xl text-[#F5F7F5] font-bold md:text-2xl">
                    {user.name} 
                </h4>
                <p className=" text-[#F5F7F5] md:text-2xl">
                    {user.email}
                </p>
                <p></p>
                
            </div>
        </div>
        <hr className="mt-15 mb-5 border-[#04357] " />
        <div className="">
            <div className=" mb-3 ">
                
                    <label htmlFor=" name"> Name</label>
                    <input 
                    id="name"
                    name="name"
                    type="text"
                    defaultValue={user.name ?? ""}
                    className="w-full mt-3  rounded-lg border border-[#304238] bg-[#16261C] px-3 py-2 text-[#F5f7F5] focus:border-[#694f64] focus:bg-[#2f043d]"
                      />
                    
                </div>
                
            
            <div className="mb-3 ">
                <label htmlFor="email">Email</label>
                <input type="email"
                name="email"
                defaultValue={user.email ?? ""}
                 className="w-full mt-3 rounded-lg border border-[#304238] bg-[#16261C] px-3 py-2 text-[#F5f7F5] focus:bg-[#2f043d]"
                 />
            </div>
            <div className="mb-3">
                <label htmlFor="contact">My Contact</label>
                <input type="text" 
                name="contact"
                id="contact"
                defaultValue={user.contact ?? ""}
                className="w-full mt-3 rounded-lg border px-3 py-2 border-[#304238] text-[#f5f7f5] bg-[#16261c] focus:bg-[#2f043d]"
                 />

            </div>

            {state.success && (
               <div className="mb-4 rounded-xl border border-green-700 bg-green-500/10 p-3 text-green-400">
    ✓ {state.success}
</div>
            )}
            
            {state.error && (
    <div className="mb-4 rounded-lg border border-red-700 bg-red-500/10 p-3 text-red-400">
        {state.error}
    </div>
)}
            <div className="justify-end flex border-t border-[#304238] pt-6 mt-8">
          <button
  type="submit"
  disabled={pending}
  className="md:w-auto rounded-2xl border border-[#0a360a] bg-[#0d076188] px-4 py-2 font-semibold transition hover:bg-[#16261C] disabled:cursor-not-allowed disabled:opacity-50"
>
  {pending ? "Saving..." : "Save Changes"}
</button>
        </div>
        </div>
        </form>      
          </div>
    )
}