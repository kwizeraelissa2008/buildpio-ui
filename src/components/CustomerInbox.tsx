import { inboxCustomers } from "../data/customers";
import type { CustomerStatus } from "../types/customer";
import Avatar from "./ui/Avatar";
import Badge from "./ui/Badge";
import Card from "./ui/Card";

const statusVariant: Record<
  CustomerStatus,
  "success" | "info" | "warning" | "error" | "default"
> = {
  Active: "success",
  "New Lead": "info",
  Contacted: "info",
  "Meeting Scheduled": "warning",
  "Proposal Sent": "warning",
  Negotiating: "warning",
  Churned: "error",
};

function CustomerInbox() {
  return (
    <Card>
      <h2 className="mb-6 text-lg font-bold text-white">Customer Inbox</h2>

      <ul className="space-y-3" aria-label="Recent customers">
        {inboxCustomers.map((customer) => (
          <li
            key={customer.id}
            className="flex items-center gap-4 rounded-xl bg-slate-800 p-4"
          >
            <Avatar src={customer.avatar} alt={customer.company} size="sm" />

            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-white">{customer.company}</p>
              <p className="truncate text-sm text-slate-400">
                {customer.contact} · {customer.lastContact}
              </p>
            </div>

            <Badge variant={statusVariant[customer.status]}>{customer.status}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default CustomerInbox;
