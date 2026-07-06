import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { SidebarProvider } from "../hooks/useSidebar";
import { useSidebar } from "../hooks/useSidebar";

function DashboardLayout() {
  const sidebar = useSidebar();

  return (
    <SidebarProvider value={sidebar}>
      <div className="flex min-h-screen bg-slate-950">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
