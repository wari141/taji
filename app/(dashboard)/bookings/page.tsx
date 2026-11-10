import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import BookingFlow from "@/app/components/bookings/BookingFlow";
import BookingsHero from "@/app/components/bookings/BookingsHero";

export default async function Bookings() {
    const session = await auth();
    const userId = session?.user?.id;
    const dbUser = userId
        ? await prisma.user.findUnique({
              where: { id: userId },
              select: { names: true, surname: true, email: true, contact: true },
          })
        : null;
    const user = dbUser
        ? {
              name: `${dbUser.names} ${dbUser.surname}`,
              email: dbUser.email,
              contact: dbUser.contact ?? "",
          }
        : null;

    return (
        <div className="mx-auto w-full max-w-screen-2xl bg-[#FFF5FA] px-4 py-8 md:px-6 md:py-10">
            <BookingsHero />
            <BookingFlow user={user} />
        </div>
    );
}

