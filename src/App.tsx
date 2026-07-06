import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />

          {/* Placeholder routes — redirect to dashboard until pages are built */}
          <Route path={ROUTES.WORKFORCE} element={<Navigate to={ROUTES.DASHBOARD} replace />} />
          <Route path={ROUTES.CUSTOMERS} element={<Navigate to={ROUTES.DASHBOARD} replace />} />
          <Route path={ROUTES.ANALYTICS} element={<Navigate to={ROUTES.DASHBOARD} replace />} />
          <Route path={ROUTES.SETTINGS} element={<Navigate to={ROUTES.DASHBOARD} replace />} />

          {/* Catch-all for any other unknown path */}
          <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
