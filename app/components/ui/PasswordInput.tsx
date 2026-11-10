'use client';

import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function PasswordInput({
    id, 
    name, 
    placeholder,
}:{
    id:string;
    name:string;
    placeholder:string;
}) {
    const [visible, setVisible] = useState(false)
    return (
        <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#A08BA8]" />
            <input 
            required
            minLength={8}
            autoComplete="new-password"
            id={id}
            name={name}
            placeholder={placeholder}
            type = {visible ? "text" : "password"}
            className="w-full rounded-2xl border border-[#E8D7ED] bg-[#F8F0FA] focus:ring-[#6A1B82] placeholder:text-[#A08BA8]
            py-3 pl-10 pr-10 text-[#2B063F]  outline-none transition focus:border-[#6A1B82] focus:ring-1" 
            />
            <button 
            type="button"
            onClick={() => setVisible((v) =>!v)}
            aria-label={visible ? "Hide password":"Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A08BA8] hover:text-[#2B063F]">
                {visible ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
            </button>
        </div>
    )
}