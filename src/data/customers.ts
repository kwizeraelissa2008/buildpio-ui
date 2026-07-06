import type { Customer, CustomerStatus } from "../types/customer";

const companies = [
  "TechNova", "GrowthLab", "FutureSoft", "VisionHub", "CloudPeak",
  "DataStream", "NexusAI", "ScaleUp Inc", "BrightPath", "Quantum Labs",
  "PixelForge", "CoreSync", "VentureFlow", "AlphaBridge", "Zenith Corp",
  "PulseMetrics", "SwiftStack", "OrbitPay", "ClearMind", "NovaEdge",
  "BlueShift", "HyperGrid", "TrueNorth", "EchoBase", "PrimeStack",
  "FluxWorks", "ApexLogic", "SignalPath", "DeepRoot", "LaunchPad",
];

const industries = [
  "SaaS", "FinTech", "HealthTech", "E-commerce", "EdTech",
  "MarTech", "Cybersecurity", "AI/ML", "Logistics", "Real Estate",
];

const contacts = [
  "Alex Morgan", "Jordan Lee", "Taylor Reed", "Casey Brooks", "Riley Chen",
  "Morgan Blake", "Jamie Fox", "Quinn Adams", "Drew Parker", "Skyler Hunt",
];

const statuses: CustomerStatus[] = [
  "New Lead", "Contacted", "Meeting Scheduled", "Proposal Sent",
  "Negotiating", "Active", "Churned",
];

const employees = [
  "Sarah Johnson", "David Kim", "Emma Wilson", "Michael Brown",
  "Olivia Chen", "James Rodriguez",
];

function createCustomer(id: number): Customer {
  const company = companies[id - 1];
  const contact = contacts[id % contacts.length];

  return {
    id,
    company,
    contact,
    email: `${contact.toLowerCase().replace(" ", ".")}@${company.toLowerCase().replace(/\s/g, "")}.com`,
    industry: industries[id % industries.length],
    revenue: 5000 + id * 2300,
    status: statuses[id % statuses.length],
    assignedEmployee: employees[id % employees.length],
    avatar: `https://i.pravatar.cc/150?img=${(id + 10) % 70}`,
    lastContact: id % 4 === 0 ? "Today" : id % 4 === 1 ? "Yesterday" : `${id % 7} days ago`,
    meetingHistory: [
      `Discovery call — ${id % 28 + 1} days ago`,
      ...(id % 3 === 0 ? [`Demo session — ${id % 14 + 1} days ago`] : []),
    ],
    notes: [
      { id: 1, content: "Interested in enterprise plan. Budget confirmed.", author: "Sarah Johnson", timestamp: "2 days ago" },
      { id: 2, content: "Decision maker is CTO. Follow up next week.", author: "David Kim", timestamp: "5 days ago" },
    ],
    messages: [
      { id: 1, sender: contact, content: "Thanks for the demo. We're reviewing internally.", timestamp: "Yesterday 3:42 PM" },
      { id: 2, sender: "Sarah Johnson", content: "Happy to answer any questions from your team.", timestamp: "Yesterday 4:15 PM" },
    ],
    timeline: [
      { id: 1, event: "Lead captured from website", timestamp: "14 days ago" },
      { id: 2, event: "Initial outreach sent", timestamp: "12 days ago" },
      { id: 3, event: "Discovery call completed", timestamp: "7 days ago" },
    ],
  };
}

export const customers: Customer[] = Array.from({ length: 30 }, (_, i) => createCustomer(i + 1));

export const inboxCustomers = customers.slice(0, 6);
