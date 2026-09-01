"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-[#7A9B80] py-2.5 rounded-full font-semibold transition-all duration-200 hover:bg-[#91B198] hover:shadow-lg active:scale-[0.98] hover:shadow-[#7a9b80]/20 bg-[#0D1511] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "Creating account..." : "Sign up"}
    </button>
  );
}