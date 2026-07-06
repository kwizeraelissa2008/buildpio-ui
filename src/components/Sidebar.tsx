import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { cn } from "../utils/cn";
import { useSidebarContext } from "../hooks/useSidebar";
import Avatar from "./ui/Avatar";

const menu = [
  { name: "Dashboard", path: ROUTES.DASHBOARD, icon: LayoutDashboard, ready: true },
  { name: "AI Workforce", path: ROUTES.WORKFORCE, icon: Users, ready: false },
  { name: "Customers", path: ROUTES.CUSTOMERS, icon: MessageSquare, ready: false },
  { name: "Analytics", path: ROUTES.ANALYTICS, icon: BarChart3, ready: false },
  { name: "Settings", path: ROUTES.SETTINGS, icon: Settings, ready: false },
];

function Sidebar() {
  const { collapsed, toggle, isMobile } = useSidebarContext();
  const location = useLocation();

  return (
    <>
      {/* Mobile backdrop */}
      {isMobile && !collapsed && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={toggle}
          aria-hidden="true"
        />
      )}

      <aside
        aria-label="Main navigation"
        className={cn(
          "fixed z-50 flex h-full flex-col border-r border-slate-800 bg-slate-900 transition-all duration-300 lg:relative lg:z-auto",
          collapsed ? "w-[72px]" : "w-72",
          isMobile && (collapsed ? "-translate-x-full" : "translate-x-0"),
        )}
      >
        {/* Logo */}
        <div
          className={cn(
            "flex items-center border-b border-slate-800 p-6",
            collapsed && "justify-center px-4",
          )}
        >
          {collapsed ? (
            <span className="text-xl font-bold text-blue-400">B</span>
          ) : (
            <h1 className="text-2xl font-bold text-blue-400">Buildpio</h1>
          )}
        </div>

        {/* Nav links */}
        <nav aria-label="Sidebar" className="flex-1 space-y-1 p-3">
          {menu.map((item) => {
            const Icon = item.icon;

            // Active only when the current path genuinely matches this item.
            // Non-ready routes always redirect to "/" so they are never "active".
            const isActive =
              item.path === ROUTES.DASHBOARD
                ? location.pathname === ROUTES.DASHBOARD
                : location.pathname === item.path;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end
                title={collapsed ? item.name : undefined}
                aria-label={item.name}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                  collapsed && "justify-center px-3",
                  isActive
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white",
                )}
              >
                <Icon size={20} aria-hidden="true" className="shrink-0" />

                {!collapsed && (
                  <span className="flex flex-1 items-center justify-between">
                    {item.name}
                    {!item.ready && (
                      <span className="rounded-md bg-slate-700 px-1.5 py-0.5 text-[10px] font-medium text-slate-400">
                        Soon
                      </span>
                    )}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* User profile */}
        <div className="border-t border-slate-800 p-3">
          {collapsed ? (
            <div className="flex justify-center">
              <Avatar src="https://i.pravatar.cc/100" alt="Elissa" size="sm" />
            </div>
          ) : (
            <div className="flex items-center gap-3 rounded-xl bg-slate-800 p-3">
              <Avatar src="https://i.pravatar.cc/100" alt="Elissa" size="sm" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">Elissa</p>
                <p className="truncate text-xs text-slate-400">Founder</p>
              </div>
            </div>
          )}
        </div>

        {/* Collapse toggle (desktop only) */}
        <button
          onClick={toggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="absolute -right-3 top-20 hidden h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-400 transition hover:text-white lg:flex"
        >
          {collapsed ? (
            <ChevronRight size={14} aria-hidden="true" />
          ) : (
            <ChevronLeft size={14} aria-hidden="true" />
          )}
        </button>
      </aside>
    </>
  );
}

export default Sidebar;
