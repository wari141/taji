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
            <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8C7160]" />
            <input 
            required
            minLength={8}
            autoComplete="new-password"
            id={id}
            name={name}
            placeholder={placeholder}
            type = {visible ? "text" : "password"}
            className="w-full rounded-2xl border border-[#EED1B9] focus:ring-[#E87522] placeholder:text-[#8C7160]
            py-3 pl-10 pr-10 text-[#3D2A20]  outline-none transition focus:border-[#E87522] focus:ring-1" 
            />
            <button 
            type="button"
            onClick={() => setVisible((v) =>!v)}
            aria-label={visible ? "Hide password":"Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C7160] hover:text-[#3D2A20]">
                {visible ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
            </button>
        </div>
    )
}