'use client';

import { useActionState } from "react";
import { resetPassword } from "@/actions/auths";

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
        <form action={formAction} className="w-96 space-y-4 rounded-lg border">
            <h1 className="text-2xl font-bold">
                Reset Password
            </h1>
            <input 
            type="hidden"
            className="w-full"
            value={token ?? ""}
            name="token"
              />
              {state?.error && (
                <p className="rounded bg-red-100 p-2 text-sm text-red-600">
                    {state.error}
                </p>
              )}
              <input 
              type="password" 
              required
              placeholder="New Password"
              name="password"
              className="w-full rounded border p-2" />

              <input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full rounded border p-2" 
              required
              />

              <button 
              type="submit"
              disabled ={pending}
              className="w-full rounded bg-amber-500 p-2 text-white disabled::opacity-50">
                {pending ? "updating..." : "Update Password"}

              </button>
        </form>
    )
}