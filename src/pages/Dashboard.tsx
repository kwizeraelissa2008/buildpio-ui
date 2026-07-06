import Header from "../components/Header";
import RevenueChart from "../components/RevenueChart";
import ActivityFeed from "../components/ActivityFeed";
import CustomerInbox from "../components/CustomerInbox";
import SystemHealth from "../components/SystemHealth";
import TaskSection from "../components/TaskSection";

import DashboardStats from "../sections/DashboardStats";
import WorkforceSection from "../sections/WorkforceSection";

function Dashboard() {
  return (
    <>
      <Header />

      <main className="space-y-6 p-6">

        <DashboardStats />

        <section className="grid gap-6 xl:grid-cols-2">
          <RevenueChart />
          <ActivityFeed />
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <WorkforceSection />
          <TaskSection />
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <CustomerInbox />
          <SystemHealth />
        </section>

      </main>
    </>
  );
}

export default Dashboard;