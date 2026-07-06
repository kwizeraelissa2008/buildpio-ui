import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { monthlyRevenue } from "../data/analytics";
import { formatCurrency } from "../utils/format";
import ChartContainer from "./charts/ChartContainer";

function RevenueChart() {
  return (
    <ChartContainer
      title="Revenue Growth"
      subtitle="Monthly recurring revenue trend"
    >
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={monthlyRevenue} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={48}
          />
          <Tooltip
            formatter={(value) => [formatCurrency(Number(value)), "Revenue"]}
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "12px",
              color: "#f8fafc",
            }}
            labelStyle={{ color: "#94a3b8" }}
            cursor={{ stroke: "#334155" }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            strokeWidth={2.5}
            dot={{ fill: "#3b82f6", r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, fill: "#60a5fa" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default RevenueChart;
