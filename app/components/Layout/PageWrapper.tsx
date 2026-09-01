'use client'

import Navbar from "./Navbar";

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
    <div className="min-h-screen bg-[#0d1511]">
      <Navbar user={user} />

      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}