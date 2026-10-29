import  {MapPin, Phone, Navigation} from "lucide-react";

type LocationProps = {
    address?: string;
    phone?: string;
};

export default function Location({
    address = "Lumumba Drive, Roysambu",
    phone= "+254 116 201 844",
                                 }:LocationProps) {
    const query = encodeURIComponent(`Gee Curly Beauty & spa, ${address}`);
    
    return (
        <section className="px-6 pb-10 md:px-12">
            <div className="grid overflow-hidden rounded-2xl bg-white shadow-md md:grid-cols-2">
                <div className="flex flex-col justify-center p-6 md:p-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#E87522] ">
                        Visit Us
                    </p>
                    <h2 className="mt-1 text-2xl font-bold md:text-3xl">
                        Find Us Easily
                    </h2>
                    <p className="mt-1 text-sm text-[#6D5546]">
                        Drop by the salon. We would love to see you.
                    </p>
                    <ul className="mt-5 space-y-3 text-sm">
                        <li className="flex items-center gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFE7D2] text-[#E87522]">
                                <MapPin className="h-4 w-4"/>
                            </span>
                            {address}
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFE7D2] text-[#E87522]">
                               <Phone className="h-4 w-4"/>
                            </span>
                            <a
                                href={`tel:${phone.replace(/\s/g, "")}`}
                                className="hover:underline">
                                {phone}
                            </a>
                        </li>

                    </ul>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                        className="mt-6 inline-flex w-fit gap-2 rounded-full items-center bg-[#E87522] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#C95717]">
                      <Navigation className="h-4 w-4"/>
                        Get Directions
                    </a>
                </div>
                <iframe src={`https://www.google.com/maps?q=${query}&output=embed`}
                        title="Gee Curly Beauty & Spa location"
                        loading="lazy"
                        className="h-64 w-full border-0 md:min-h-72 md:h-full"/>
            </div>
        </section>
    )
}
