"use client";

import {useFormStatus} from "react-dom";

export function SubmitButton() {
    const {pending} = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full text-[#E87522] py-2.5 rounded-full font-semibold transition-all duration-200 hover:bg-[#C95717] hover:shadow-lg active:scale-[0.98] hover:shadow-[#E87522]/20 bg-[#FFF3E8] disabled:cursor-not-allowed disabled:opacity-50"
        >
            {pending ? "Creating account..." : "Sign up"}
        </button>
    );
}