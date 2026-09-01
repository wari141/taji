import {auth} from "@/lib/auth";
import ProfileForm from "./ProfileForm";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const session = await auth();
    if (!session?.user?.email) {
        redirect("/login")
    }
    const user = await prisma.user.findUnique({
        where: {
            email: session?.user.email,
        }
    })
    if (!user) {
        redirect("/login")
    }
    return (
        <ProfileForm
            user={{
                name:user?.names ?? "",
                email:user?.email ?? "",
                image: user?.image ?? "",
                contact:user?.contact ?? "",
            }}
        />
    );
}