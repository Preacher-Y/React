import { memo, useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

function Reviews() {

  const reviews = useMemo(
    () => [
      {
        name: "Elliot",
        date: "December 1, 2022",
        rating: 5,
        text: "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      },
      {
        name: "Sandy",
        date: "November 23, 2022",
        rating: 5,
        text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      },
    ],
    []
  );

  const { avg, dist } = useMemo(() => {
    const total = reviews.length || 0;
    const sum = reviews.reduce((s, r) => s + r.rating, 0);
    const avg = total ? (sum / total).toFixed(1) : "0.0";
    const dist = [5, 4, 3, 2, 1].map((star) => {
      const count = reviews.filter((r) => r.rating === star).length;
      const pct = total ? Math.round((count / total) * 100) : 0;
      return { star, label: `${star} stars`, count, pct };
    });
    return { avg, dist };
  }, [reviews]);

  return (
    <div className="px-6 h-full mb-16 grid gap-3">

      <div className="flex gap-4 items-center">
        <h2 className="text-2xl font-bold">Your reviews</h2>
        <a href="#" className=" text-gray-600 text-sm">last <span className="underline text-gray-600 font-semibold underline-offset-3 ">30 days</span></a>
      </div>

      <div className="flex items-center space-x-2 mt-1">
        <span className="text-2xl font-bold">{avg}</span>
        <span className="text-orange-500 text-xl">★</span>
        <span className="text-sm">overall rating</span>
      </div>

      <div className="mt-2 w-full z-10 h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={dist}
            layout="vertical"
            margin={{ top: 6, right: 24, bottom: 0, left: 0 }}
          >
            <CartesianGrid stroke="#d7cfc6" strokeDasharray="4 6" vertical={false} />
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis
              type="category"
              dataKey="label"
              width={56}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              formatter={(v, _n, { payload }) => [
                `${v}%`,
                `${payload.star} star${payload.star > 1 ? "s" : ""}`,
              ]}
              wrapperStyle={{ outline: "none" }}
              contentStyle={{ borderRadius: 8, border: "1px solid #eee" }}
            />
            <Bar
              dataKey="pct"
              barSize={10}
              radius={[999, 999, 999, 999]}
              fill="#FF8B2C"
              background={{ fill: "#e5e7eb", radius: 999 }}
            >
              <LabelList
                dataKey="pct"
                position="right"
                formatter={(v) => `${v}%`}
                className="text-[11px] fill-stone-600"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 space-y-4">
        <h1 className="font-bold">Reviews {`(${reviews.length})`} </h1>
        {reviews.map((r, idx) => (
          <div key={idx}>
            <div className="flex items-center space-x-1 text-orange-500">
              {Array.from({ length: r.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-sm font-semibold mt-1">
              {r.name} <span className="text-xs text-stone-500">{r.date}</span>
            </p>
            <p className="text-sm mt-1 text-stone-700">{r.text}</p>
            {idx < reviews.length && <hr className="mt-4 text-gray-300" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Reviews);
