'use client';

import { useActionState } from "react";
import { resetPassword } from "@/actions/auths";
import Link from "next/link";
import {ArrowLeft, AlertCircle} from "lucide-react"
import PasswordInput from "@/app/components/ui/PasswordInput";

const initialState = {
    error: "",
};

export default function ResetPasswordForm({
    token, 
}:{
    token?: string;
}
){
    const [state, formAction, pending] = useActionState(
        resetPassword,
        initialState
    );
    return (
        <form action={formAction} 
        className="w-full max-w-md space-y-4 rounded-2xl border border-[#E8D7ED] bg-[#FDF9FF] p-5 shadow-xl sm:p-8"
        >
          <div className="text-sm">
            <h1 className="text-2xl uppercase mb-2 text-center tracking-tight">
                Gee Curly Beauty & spa
            </h1>
             <p className="text-sm text-center  mt-2 mb-2">
                Reset your password
             </p>
             <h3 className="text-center">Create a new password  for your  account.</h3>
          </div>
          
            <input 
            type="hidden"
            value={token ?? ""}
            name="token"
              />
              {state?.error && (
                <p className="rounded bg-[#DC4C5A]/10 p-2 text-sm text-[#DC4C5A]">
                    <AlertCircle className="h-4 w-4 shrink-0"/>
                    {state.error}
                </p>
              )}
              <label htmlFor="newPassword" className="mb-2 block text-sm font-medium text-[#2B063F] ">New Password</label>
              <PasswordInput 
              id="newPassword"
              name="password"
              placeholder="New password"
              />

              <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-[#2B063F]">Confirm Password</label>
              <PasswordInput
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              />
              <div className="justify-center flex pt-2">
              <button 
              type="submit"
              disabled ={pending}
              className="w-full rounded-2xl duration-200 sm:w-48 hover:bg-[#8E2BA5] active:scale-[0.98] hover:shadow-lg hover:shadow-[#6A1B82] bg-[#6A1B82] py-2 font-semibold transition-all text-white disabled:opacity-50">
                {pending ? "Updating..." : "Update Password"}

              </button>
              </div>
              <div className="relative pt-2 text-center">
                <ArrowLeft className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#A08BA8]"/>
        
                    <Link
                    href = "/login"
                    className="inline-flex min-h-11 items-center justify-center gap-1 text-sm font-medium text-[#705A78] hover:text-[#8E2BA5]">
                       
                        Back to Login
                    </Link>
              </div>
        </form>
       
    )
}