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
        <div className="mx-auto w-full max-w-5xl space-y-6 rounded-2xl border border-[#F2D7C1] bg-white p-4 sm:p-6">
            <div className="mt-2 rounded-2xl border border-[#F2D7C1] px-4 py-4 sm:px-7">
                <h1 className="text-3xl font-bold text-[#3D2A20]">My profile</h1>
                <p className="text-[#6D5546]">Manage your account information and preferences</p>
            </div>
            <form
                action={formAction}
                className=" rounded-2xl border border-[#F2D7C1] bg-[#FFFFFF] p-6">
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
                                className="flex h-16 w-16 md:w-20 md:h-20 items-center justify-center rounded-full bg-[#E87522] text-xl font-bold text-[#FFF3E8]">
                                {initials}
                            </div>
                        )}
                    </div>
                    <div>
                        <h4 className="text-2xl text-[#3D2A20] font-bold md:text-2xl">
                            {user.name}
                        </h4>
                        <p className="break-words text-sm text-[#3D2A20] sm:text-base">
                            {user.email}
                        </p>
                        <p></p>

                    </div>
                </div>
                <hr className="mt-15 mb-5 border-[#F2D7C1] "/>
                <div className="">
                    <div className=" mb-3 ">

                        <label htmlFor=" name"> Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            defaultValue={user.name ?? ""}
                            className="w-full mt-3  rounded-lg border border-[#F2D7C1] bg-[#FFFFFF] px-3 py-2 text-[#3D2A20] focus:border-[#B95F24] focus:bg-[#FFF0E2]"
                        />

                    </div>


                    <div className="mb-3 ">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               name="email"
                               defaultValue={user.email ?? ""}
                               className="w-full mt-3 rounded-lg border border-[#F2D7C1] bg-[#FFFFFF] px-3 py-2 text-[#3D2A20] focus:bg-[#FFF0E2]"
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
                            className="w-full mt-3 rounded-lg border px-3 py-2 border-[#F2D7C1] text-[#3D2A20] bg-[#FFFFFF] focus:bg-[#FFF0E2]"
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
                    <div className="justify-end flex border-t border-[#F2D7C1] pt-6 mt-8">
                        <button
                            type="submit"
                            disabled={pending}
                            className="w-full rounded-2xl border border-[#F2D7C1] bg-[#E87522] px-4 py-3 font-semibold text-white transition hover:bg-[#C95717] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                        >
                            {pending ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}