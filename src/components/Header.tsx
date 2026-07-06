import { useEffect, useRef } from "react";
import { Bell, Menu, Plus, Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../constants/routes";
import { useSidebarContext } from "../hooks/useSidebar";
import { useNotifications } from "../hooks/useNotifications";
import Button from "./ui/Button";
import Dropdown from "./ui/Dropdown";
import Input from "./ui/Input";
import Avatar from "./ui/Avatar";
import Badge from "./ui/Badge";
import { notifications } from "../data/notifications";
import type { NotificationType } from "../types/notification";

const notificationVariantMap: Record<NotificationType, "success" | "info" | "warning" | "error"> =
  {
    success: "success",
    info: "info",
    warning: "warning",
    error: "error",
  };

function Header() {
  const location = useLocation();
  const { toggle, isMobile } = useSidebarContext();
  const { open, setOpen, toggle: toggleNotifications } = useNotifications();
  const notifRef = useRef<HTMLDivElement>(null);

  const current =
    NAV_ITEMS.find(
      (item) =>
        item.path === location.pathname ||
        (item.path !== "/" && location.pathname.startsWith(item.path)),
    ) ?? NAV_ITEMS[0];

  const unread = notifications.filter((n) => !n.read).length;

  // Close notification panel when clicking outside
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open, setOpen]);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-4 backdrop-blur-xl lg:px-6">
      <div className="flex items-center gap-4">
        {isMobile && (
          <button
            onClick={toggle}
            aria-label="Toggle sidebar"
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        )}
        <div>
          <p className="text-xs text-slate-500">Buildpio OS / {current.name}</p>
          <h1 className="text-xl font-bold text-white lg:text-2xl">{current.name}</h1>
          <p className="hidden text-sm text-slate-400 sm:block">{current.subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:block">
          <Input
            placeholder="Search..."
            icon={<Search size={16} aria-hidden="true" />}
            className="w-64 bg-slate-900"
            aria-label="Search"
          />
        </div>

        {/* Notification panel */}
        <div ref={notifRef} className="relative">
          <Button
            variant="secondary"
            size="sm"
            onClick={toggleNotifications}
            aria-label={`Notifications${unread > 0 ? `, ${unread} unread` : ""}`}
            aria-expanded={open}
            aria-haspopup="dialog"
            className="relative"
          >
            <Bell size={18} aria-hidden="true" />
            {unread > 0 && (
              <span
                aria-hidden="true"
                className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white"
              >
                {unread}
              </span>
            )}
          </Button>

          {open && (
            <div
              role="dialog"
              aria-label="Notifications"
              className="absolute right-0 top-full z-50 mt-2 w-80 rounded-2xl border border-slate-800 bg-slate-900 shadow-xl"
            >
              <div className="border-b border-slate-800 px-4 py-3">
                <p className="font-semibold text-white">Notifications</p>
              </div>
              <ul className="max-h-80 overflow-y-auto">
                {notifications.map((n) => (
                  <li
                    key={n.id}
                    className="border-b border-slate-800/50 px-4 py-3 transition hover:bg-slate-800/50"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-white">{n.title}</p>
                      <div className="flex shrink-0 items-center gap-2">
                        <Badge variant={notificationVariantMap[n.type]}>{n.type}</Badge>
                        {!n.read && (
                          <span
                            aria-label="Unread"
                            className="h-2 w-2 rounded-full bg-blue-500"
                          />
                        )}
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{n.message}</p>
                    <p className="mt-1 text-xs text-slate-500">{n.time}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Dropdown
          trigger={
            <Button size="sm">
              <Plus size={16} aria-hidden="true" />
              <span className="hidden sm:inline">Create</span>
            </Button>
          }
          items={[
            { label: "New AI Employee", onClick: () => {} },
            { label: "Add Customer", onClick: () => {} },
            { label: "Create Task", onClick: () => {} },
            { label: "Schedule Meeting", onClick: () => {} },
          ]}
        />

        <Avatar
          src="https://i.pravatar.cc/100"
          alt="Elissa"
          size="md"
          className="border-blue-500"
        />
      </div>
    </header>
  );
}

export default Header;
