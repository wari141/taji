'use client'

import {useActionState} from "react";
import {updateProfile} from "@/actions/auths";


type ProfileFormProps = {
    user: {
        name: string;
        email: string;
        image?: string | null;
        contact?: string
    }
}
type ProfileState = {
    success?: string;
    error?: string;
}

const initialState: ProfileState = {};


export default function ProfileForm({
                                        user,

                                    }: ProfileFormProps) {
    const [state, formAction, pending] = useActionState(
        updateProfile,
        initialState
    )

    const initials =
        user.name
            ?.split(" ")
            .map((n: string) => n[0])
            .join("")
            .toUpperCase() ?? "?";


    return (
        <div className="mx-auto w-full max-w-5xl space-y-6 rounded-2xl border border-[#E8D7ED] bg-[#FDF9FF] p-4 sm:p-6">
            <div className="mt-2 rounded-2xl border border-[#E8D7ED] px-4 py-4 sm:px-7">
                <h1 className="text-3xl font-bold text-[#2B063F]">My profile</h1>
                <p className="text-[#705A78]">Manage your account information and preferences</p>
            </div>
            <form
                action={formAction}
                className=" rounded-2xl border border-[#E8D7ED] bg-[#FDF9FF] p-6">
                <div className="flex  gap-6 flex-col md:flex-row md:items-centre ">
                    <div>
                        {user.image ? (
                            <img
                                src={user.image}
                                alt={user.name || "profile"}
                                className="h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full object-cover"
                            />
                        ) : (
                            <div
                                className="flex h-16 w-16 md:w-20 md:h-20 items-center justify-center rounded-full bg-[#6A1B82] text-xl font-bold text-[#F8F0FA]">
                                {initials}
                            </div>
                        )}
                    </div>
                    <div>
                        <h4 className="text-2xl text-[#2B063F] font-bold md:text-2xl">
                            {user.name}
                        </h4>
                        <p className="break-words text-sm text-[#2B063F] sm:text-base">
                            {user.email}
                        </p>
                        <p></p>

                    </div>
                </div>
                <hr className="mt-15 mb-5 border-[#E8D7ED] "/>
                <div className="">
                    <div className=" mb-3 ">

                        <label htmlFor=" name"> Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            defaultValue={user.name ?? ""}
                            className="w-full mt-3  rounded-lg border border-[#E8D7ED] bg-[#FDF9FF] px-3 py-2 text-[#2B063F] focus:border-[#8E2BA5] focus:bg-[#FFF5FA]"
                        />

                    </div>


                    <div className="mb-3 ">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               name="email"
                               defaultValue={user.email ?? ""}
                               className="w-full mt-3 rounded-lg border border-[#E8D7ED] bg-[#FDF9FF] px-3 py-2 text-[#2B063F] focus:bg-[#FFF5FA]"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contact">My Contact</label>
                        <input
                            autoComplete="tel"
                            inputMode="tel"
                            type="tel"
                            name="contact"
                            id="contact"
                            defaultValue={user.contact ?? ""}
                            className="w-full mt-3 rounded-lg border px-3 py-2 border-[#E8D7ED] text-[#2B063F] bg-[#FDF9FF] focus:bg-[#FFF5FA]"
                        />

                    </div>

                    {state.success && (
                        <div className="mb-4 rounded-xl border border-[#22A06B]/40 bg-[#22A06B]/10 p-3 text-[#22A06B]">
                            ✓ {state.success}
                        </div>
                    )}

                    {state.error && (
                        <div className="mb-4 rounded-lg border border-[#DC4C5A]/40 bg-[#DC4C5A]/10 p-3 text-[#DC4C5A]">
                            {state.error}
                        </div>
                    )}
                    <div className="justify-end flex border-t border-[#E8D7ED] pt-6 mt-8">
                        <button
                            type="submit"
                            disabled={pending}
                            className="w-full rounded-2xl border border-[#E8D7ED] bg-[#6A1B82] px-4 py-3 font-semibold text-white transition hover:bg-[#8E2BA5] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                        >
                            {pending ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}