import Header from "@/components/Header";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <section id="dashboard">
      <Header />
      {children}
    </section>
  );
}
