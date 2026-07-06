import type { Meeting } from "../types/meeting";

export const meetings: Meeting[] = [
  { id: 1, title: "Product Demo", company: "TechNova", time: "10:00 AM", date: "Today", attendee: "Alex Morgan", type: "Demo" },
  { id: 2, title: "Follow-up Call", company: "GrowthLab", time: "2:30 PM", date: "Today", attendee: "Jordan Lee", type: "Follow-up" },
  { id: 3, title: "Onboarding Session", company: "FutureSoft", time: "4:00 PM", date: "Today", attendee: "Taylor Reed", type: "Onboarding" },
  { id: 4, title: "Quarterly Review", company: "VisionHub", time: "11:00 AM", date: "Tomorrow", attendee: "Casey Brooks", type: "Review" },
  { id: 5, title: "Enterprise Demo", company: "CloudPeak", time: "3:00 PM", date: "Tomorrow", attendee: "Riley Chen", type: "Demo" },
  { id: 6, title: "Contract Discussion", company: "DataStream", time: "9:30 AM", date: "Wed", attendee: "Morgan Blake", type: "Follow-up" },
];
