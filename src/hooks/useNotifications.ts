import { useState } from "react";

export function useNotifications() {
  const [open, setOpen] = useState(false);
  return { open, setOpen, toggle: () => setOpen((o) => !o) };
}
