import { auth } from "@/lib/auth";
import PageWrapper from "../components/Layout/PageWrapper";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <PageWrapper user={session?.user}>
      {children}
    </PageWrapper>
  );
}
