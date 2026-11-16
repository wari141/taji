export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="app-page-background min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
}