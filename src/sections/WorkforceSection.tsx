import { dashboardEmployees } from "../data/employees";
import EmployeeCard from "../components/EmployeeCard";
import Card from "../components/ui/Card";

function WorkforceSection() {
  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">AI Workforce</h2>
        <span className="rounded-lg bg-blue-600/20 px-3 py-1 text-sm font-medium text-blue-400">
          {dashboardEmployees.length} Active
        </span>
      </div>

      <div className="space-y-3">
        {dashboardEmployees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            selected={false}
            onClick={() => {}}
          />
        ))}
      </div>
    </Card>
  );
}

export default WorkforceSection;
