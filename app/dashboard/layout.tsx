"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {useState} from "react";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toogleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <section id="dashboard">
      <Sidebar menuOpen={menuOpen} toogleMenu={toogleMenu} />
      <main>
        <Header toogleMenu={toogleMenu} menuOpen={menuOpen} />
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
