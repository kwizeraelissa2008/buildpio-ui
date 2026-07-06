export interface Meeting {
  id: number;
  title: string;
  company: string;
  time: string;
  date: string;
  attendee: string;
  type: "Demo" | "Follow-up" | "Onboarding" | "Review";
}
