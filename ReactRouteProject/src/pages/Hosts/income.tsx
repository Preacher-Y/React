import { memo } from "react";


import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

function Income() {
  const incomeTotal = 2260;

  const chartData = [
    { label: "Ju", value: 3900, fill: "#fde7c7" },
    { label: "Au", value: 1200, fill: "#fee4c2" },
    { label: "Se", value: 3000, fill: "#fde7c7" },
    { label: "Oc", value: 2600, fill: "#fde2c1" },
    { label: "No", value: 1500, fill: "#FF8B2C" },
    { label: "De", value: 600, fill: "#FFA662" },
  ];

  const transactions = [
    { amount: 720, date: "1/12/22" },
    { amount: 560, date: "10/11/22" },
    { amount: 980, date: "23/11/22" },
  ];

  const yTicks = [0, 1000, 2000, 3000, 4000, 5000];

  return (
    <div className=" rounded-2xl px-6 my-8 mb-16 text-stone-900">
      <div className="flex flex-col space-y-4 mb-4">
        <h2 className="text-3xl font-bold">Income</h2>
        <button className="text-sm w-[20%] text-start cursor-pointer ">Last <span className="underline underline-offset-3">30 days</span></button>
      </div>

      <div className="mt-1 text-3xl font-extrabold my-8">${incomeTotal.toLocaleString()}</div>
      <div className="mt-3 w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 4, right: 8, bottom: 8, left: 0 }}>
            <CartesianGrid stroke="#d7cfc6" strokeDasharray="4 6" vertical={false} />
            <XAxis dataKey="label" tick={{ fill: "#444", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis
              ticks={yTicks}
              domain={[0, 5000]}
              tick={{ fill: "#78716c", fontSize: 10 }}
              width={28}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => (v === 0 ? "$0" : `$${v / 1000}k`)}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              wrapperStyle={{ outline: "none" }}
              contentStyle={{ borderRadius: 8, border: "1px solid #eee" }}
              formatter={(value) => [`$${Number(value).toLocaleString()}`, "Income"]}
              labelFormatter={(label) => label}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between items-center mt-4">
        <h3 className="text-base font-bold">Your transactions ({transactions.length})</h3>
        <button className="text-xs">Last <span className="underline underline-offset-3">30 days</span></button>
      </div>

      <div className="mt-2 space-y-2">
        {transactions.map((t, idx) => (
          <div key={idx} className="flex justify-between bg-white p-3 rounded-lg shadow-sm">
            <span className="font-bold">${t.amount}</span>
            <span className="text-xs text-stone-500">{t.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Income)