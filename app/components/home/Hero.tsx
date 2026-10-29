 import  Link from "next/link";
import {ArrowRight, CalendarDays} from  "lucide-react";
type  HeroProps = {
    firstName?: string,
    image?: string,
}

export default function Hero({
                                 firstName,
                                 image = "/images/home/imag2.jpg",
                             }: HeroProps) {

    return (
        <section
            style={{
                backgroundImage:
                    `linear-gradient( to right, rgba(48, 30, 18, .82), rgba(48, 30, 18, .12)), url(${image})`,
            }}
            className="relative flex min-h-[420px] bg-contain items-center  bg-[#8F3F18] bg-[position:80%_20%] bg-no-repeat  bg-cover bg-right px-6 py-14 md:px-12"
        >
            <div className="max-w-xl text-white">
                <p className="text-xs font-semibold uppercase tracking-wider">
                    welcome back {firstName ? `, ${firstName}` : ""}
                </p>
                <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
                    Beauty Begins with {""}
                    <span className="text-[#D9892B]"> Confidence</span>
                </h1>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
                    At Gee Curly Beauty &amp; Spa, we bring out the best in you with
                    premium beauty services, expert styles and a relaxing experience.
                </p>

                <div className="mt-6  flex  flex-wrap gap-2">
                    <Link
                        href="/bookings"
                        className=" flex items-center gap-2 rounded-full  bg-[#E87522] px-5 py-3 text-sm font-semibold  text-white transition  hover:bg-[#C95717]"
                    >
                        <CalendarDays className="h-4 w-4"/>
                        Book Appointment
                        <ArrowRight className="h-4 w-4"/>

                    </Link>

                    <Link
                        href="/services"
                        className="  border border-white/70 rounded-full   px-5 py-3 text-sm font-semibold  text-white transition  hover:bg-white/10"
                    >
                       Explore Services

                    </Link>

                </div>
            </div>

          <p className="absolute bottom-8 right-8 hidden font-serif text-xl italic md:block leading-snug text-white -rotate-6 text-right">
              Look Good
              <br/>
              Feel good
              <br/>
              Always
          </p>
        </section>
    )
}