import AppSidebar from "@/components/Appsidebar";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <SidebarProvider>
      <Topbar />
      <AppSidebar />
      <main className=" w-full bg-gray-900 ">
        <div className=" w-full min-h-[calc(100vh-40px)] py-28 px-10">
          <Outlet />
        </div>
        <Footer />
      </main>
    </SidebarProvider>
  );
};

export default layout;
