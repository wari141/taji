'use client';

import  {useEffect, useState} from 'react'
import { createPortal } from 'react-dom'
import  Image from  "next/image"
import { Play, X} from "lucide-react"
import type {Service} from  "@/lib/services-data"

export  default function ServiceMedia ({service}:{service:Service}) {

    const [open, setOpen] = useState(false)
    const isVideo = service.mediaType === 'video'
    useEffect(() => {
        if (!open) return;
        const onKey = (e:KeyboardEvent) => {
            if (e .key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow= prev;
        };

    },[open]
    );
    return (
        <>
            <button
                type="button"
                aria-label={`${isVideo ? 'Play Video of' : 'View photo of'} ${service.title}`}
                onClick={() => setOpen(true)}
                className="relative block h-36 w-full cursor-pointer overflow-hidden">
                <Image
                    src ={service.image}
                    alt={service.title}
                    fill
                    sizes ="(min-width:1280px) 25vw, (min-width: 768px) 33vw, 100vw "
                    className="object-cover "/>
                {isVideo && (
                    <span className="absolute inset-0 flex items-center justify-center ">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FDF9FF]/90 text-[#8E2BA5] ">
                            <Play className="h-6 w-6 translate-x-0.5 fill-current"/>
                        </span>
                    </span>
                )}
            </button>

            {open &&
                createPortal(
                    <div
                        role="dialog"
                        onClick={() => setOpen(false)}
                        aria-label={service.title}
                        aria-modal={true}
                        className="fixed  inset-0 z-[100] flex items-center justify-center bg-[#2B063F]/90  p-4">
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Close"
                            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full  bg-[#6A1B82] text-white hover:bg-[#8E2BA5]"
                            >
                            <X className="h-6 w-6"/>
                        </button>
                        <div
                        >
                            {isVideo && service.video ? (
                                <video
                                    controls
                                    autoPlay
                                    poster={service.image}
                                    src = {service.video}
                                    onClick={(e) => e.stopPropagation()}
                                    className="h-auto max-h-[85vh] w-auto max-w-[90vw] rounded-2xl border-4 border-[#F8F0FA] shadow-2xl"
                                    />
                            ): (
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    onClick={(e) => e.stopPropagation()}
                                    className="h-auto max-h-[85vh] w-auto max-w-[90vw] rounded-2xl border-4 border-[#F8F0FA] object-contain shadow-2xl"
                                />
                            )}
                        </div>
                    </div>,
                    document.body
                )}
        </>
    )
}