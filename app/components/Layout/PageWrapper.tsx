'use client'

import Navbar from "./Navbar";
import Footer from "./Footer";

type PageWrapperProps = {
    children: React.ReactNode;
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
};

export default function PageWrapper({
                                        children,
                                        user,
                                    }: PageWrapperProps) {
    return (
        <div className="app-page-background flex min-h-[100svh] flex-col">
            <Navbar user={user}/>

            <main className="min-w-0 flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
