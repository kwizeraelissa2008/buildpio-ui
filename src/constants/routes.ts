export const ROUTES = {
  DASHBOARD: "/",
  WORKFORCE: "/workforce",
  CUSTOMERS: "/customers",
  ANALYTICS: "/analytics",
  SETTINGS: "/settings",
} as const;

export const NAV_ITEMS = [
  { name: "Dashboard", path: ROUTES.DASHBOARD, subtitle: "Overview" },
  { name: "AI Workforce", path: ROUTES.WORKFORCE, subtitle: "Manage agents" },
  { name: "Customers", path: ROUTES.CUSTOMERS, subtitle: "CRM" },
  { name: "Analytics", path: ROUTES.ANALYTICS, subtitle: "Insights" },
  { name: "Settings", path: ROUTES.SETTINGS, subtitle: "Preferences" },
] as const;
