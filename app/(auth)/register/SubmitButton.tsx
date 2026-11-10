"use client";

import {useFormStatus} from "react-dom";

export function SubmitButton() {
    const {pending} = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full bg-[#6A1B82] py-2.5 rounded-full font-semibold text-white transition-all duration-200 hover:bg-[#8E2BA5] hover:shadow-lg active:scale-[0.98] hover:shadow-[#6A1B82]/20 disabled:cursor-not-allowed disabled:opacity-50"
        >
            {pending ? "Creating account..." : "Sign up"}
        </button>
    );
}