import { registerUser } from "@/actions/auths"  ;
import Link from "next/link";

export default function RegisterPage(){
    return (
        <div className="flex min-h-screen items-center justify-center">
            <form action={registerUser} className="w-96 space-y-4 rounded-lg border p-6">
                <h1 className="text-2xl font-bold text-gray-600 t">
                Create Account
                </h1>

                <input
                name="surname"
                type="text"
                placeholder="Surname"
                className="w-full rounded border p-2"
                />
                <input
                name="names"
                type="text"
                placeholder="names"
                className="w-full rounded border p-2"
            
                />

                <input 
                name="email"
                type="email"
                placeholder="Email"
                className="w-full rounded border p-2"
                
                />

                <input type="password"
                name="password"
                
                placeholder="Password"
                className="w-full rounded border p-2"
                 />

                 <input 
                 type="password"
                 name="confirm password"
                 placeholder="Confirm password"
                 className="w-full rounded border p-2"
                  
                  />

                    <button type="submit"
                    className="w-full text-white rounded bg-amber-400"
                     >Sign up</button>

                     <p className="text-centre text-sm">
                        Alreday have an Account? {" "}
                        <Link
                        href={"/login"}
                        className="font-semibold text-amber-500 hover:underline"
                        >
                            Login
                        </Link>
                     </p>
            </form>
        </div>
    )
}