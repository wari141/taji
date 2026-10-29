import {ArrowRight, Award, Gem, ShieldCheck, Leaf} from "lucide-react";

const reasons = [
    {
        title: "Professional Stylist",
        text: "Skilled and experienced beauty  professionals",
        icon: Award,
    },
    {
        title: "Premium Products",
        text: "we use only  the best and safest products for our client",
        icon: Leaf,
    },
    {
        title: "Clean & Safe Environment",
        text: "Your health and safety comes first",
        icon: ShieldCheck,
    },
    {
        title: "Affordable prices",
        text: "Quality beauty services at the  best rates",
        icon: Gem,
    }
]
export default function WhyChooseUs() {
    
    return (
        <section className="bg-white ">
            <div className="">
                <h2 className="font-bold text-2xl md:text-3xl tracking-wider"> Why Choose Us</h2>
                <p className="font-semibold mt-2 text-[#E87522] text-sm ">Your Beauty , Our Priority</p>
                <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                    {reasons.map(({title, text, icon: Icon}) => (
                        <li
                            key={title}
                            className="flex items-start gap-3">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFE7D2] text-[#E87522] ">
                                <Icon className="h-5 w-5"/>
                            </span>
                            <div>
                                <h3 className="text-sm font-bold">{title}</h3>
                                <p className="text-xs text-[#6D5546]">{text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}