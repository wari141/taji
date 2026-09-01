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
        className="w-96 max-w-md bg-[#16261c] p-8 shadow-2xl space-y-4 rounded-2xl border-[#304238] border"
        >
          <div className="text-sm">
            <h1 className="text-2xl uppercase mb-2 text-center tracking-tight">
                Taji curls Beauty & spa
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
                <p className="rounded bg-red-100 p-2 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4 shrink-0"/>
                    {state.error}
                </p>
              )}
              <label htmlFor="newPassword " className="mb-2 block text-sm font-medium text-[#f5f7f5] ">New Password</label>
              <PasswordInput 
              id="password"
              name="password"
              placeholder="New password"
              />

              <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-[#f5f7f5]">Confirm Password</label>
              <PasswordInput
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              />
              <div className="justify-center flex pt-2">
              <button 
              type="submit"
              disabled ={pending}
              className="w-48 rounded-2xl duration-200 hover:bg-[#91b198] active:scale-[0.98] hover:shadow-lg hover:shadow-[#7a9b80] bg-[#7a9b80] py-2 font-semibold transition-all text-white disabled:opacity-50">
                {pending ? "updating..." : "Update Password"}

              </button>
              </div>
              <div className="pt-2 text-center relative">
                <ArrowLeft className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#718078]"/>
        
                    <Link
                    href = "/login"
                    className="text-sm font-medium text-[#a8b5ac] hover:text-[#91b198]">
                       
                        Back to Login
                    </Link>
              </div>
        </form>
       
    )
}