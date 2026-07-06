import { cn } from "../../utils/cn";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}

function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div role="tablist" aria-label="Tabs" className="flex gap-1 rounded-xl bg-slate-800 p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`tabpanel-${tab.id}`}
          id={`tab-${tab.id}`}
          onClick={() => onChange(tab.id)}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
            activeTab === tab.id
              ? "bg-slate-900 text-white shadow-sm"
              : "text-slate-400 hover:text-white",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
