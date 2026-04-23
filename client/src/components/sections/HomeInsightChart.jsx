import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ranges = [
  { label: "90d", value: "90d" },
  { label: "30d", value: "30d" },
  { label: "7d", value: "7d" },
];

const fullData = [
  { date: "2026-01-01", reserve: 612, positioning: 428 },
  { date: "2026-01-04", reserve: 618, positioning: 431 },
  { date: "2026-01-07", reserve: 624, positioning: 434 },
  { date: "2026-01-10", reserve: 631, positioning: 437 },
  { date: "2026-01-13", reserve: 639, positioning: 441 },
  { date: "2026-01-16", reserve: 648, positioning: 446 },
  { date: "2026-01-19", reserve: 654, positioning: 452 },
  { date: "2026-01-22", reserve: 661, positioning: 458 },
  { date: "2026-01-25", reserve: 669, positioning: 465 },
  { date: "2026-01-28", reserve: 678, positioning: 472 },
  { date: "2026-01-31", reserve: 686, positioning: 479 },
  { date: "2026-02-03", reserve: 695, positioning: 486 },
  { date: "2026-02-06", reserve: 704, positioning: 492 },
  { date: "2026-02-09", reserve: 712, positioning: 499 },
  { date: "2026-02-12", reserve: 721, positioning: 506 },
  { date: "2026-02-15", reserve: 734, positioning: 514 },
  { date: "2026-02-18", reserve: 746, positioning: 523 },
  { date: "2026-02-21", reserve: 758, positioning: 531 },
  { date: "2026-02-24", reserve: 769, positioning: 540 },
  { date: "2026-02-27", reserve: 781, positioning: 548 },
  { date: "2026-03-02", reserve: 792, positioning: 557 },
  { date: "2026-03-05", reserve: 806, positioning: 566 },
  { date: "2026-03-08", reserve: 818, positioning: 575 },
  { date: "2026-03-11", reserve: 829, positioning: 584 },
  { date: "2026-03-14", reserve: 841, positioning: 592 },
  { date: "2026-03-17", reserve: 854, positioning: 601 },
  { date: "2026-03-20", reserve: 867, positioning: 611 },
  { date: "2026-03-23", reserve: 879, positioning: 620 },
  { date: "2026-03-26", reserve: 892, positioning: 629 },
  { date: "2026-03-29", reserve: 904, positioning: 638 },
];

const numberFormatter = new Intl.NumberFormat("en-US");

const formatDate = (value, short = false) => {
  const date = new Date(value);

  return date.toLocaleDateString("en-US", {
    month: short ? "short" : "long",
    day: "numeric",
  });
};

const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="rounded-[1.2rem] border border-gold-500/20 bg-charcoal-950/96 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.38)] backdrop-blur-xl">
      <p className="font-serif text-sm text-gold-300">{formatDate(label)}</p>
      <div className="mt-3 space-y-2">
        {payload.map((entry) => (
          <div key={entry.dataKey} className="flex items-center gap-3 text-xs text-white/80">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="tracking-[0.18em] uppercase text-white/52">
              {entry.name}
            </span>
            <span className="ml-auto font-medium text-white">
              {numberFormatter.format(entry.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomeInsightChart = () => {
  const [range, setRange] = useState("90d");

  const filteredData = useMemo(() => {
    if (range === "7d") {
      return fullData.slice(-7);
    }

    if (range === "30d") {
      return fullData.slice(-10);
    }

    return fullData;
  }, [range]);

  return (
    <div className="flex h-full flex-col">
      <div className="mb-6 flex flex-col gap-4 border-b border-white/8 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold-400/78">
            Performance Window
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs text-white/52">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_18px_rgba(201,161,74,0.4)]" />
            Reserve Momentum
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/55" />
            Positioning Signal
          </div>
        </div>

        <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.03] p-1">
          {ranges.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setRange(item.value)}
              className={`rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] transition ${
                range === item.value
                  ? "bg-gold-500/12 text-gold-300"
                  : "text-white/52 hover:text-white/78"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-0 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={filteredData}
            margin={{ top: 14, right: 10, left: -18, bottom: 0 }}
          >
            <defs>
              <linearGradient id="reserveFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C9A14A" stopOpacity={0.34} />
                <stop offset="65%" stopColor="#C9A14A" stopOpacity={0.1} />
                <stop offset="100%" stopColor="#C9A14A" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="positioningFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.12} />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis
              dataKey="date"
              tickFormatter={(value) => formatDate(value, true)}
              tick={{ fill: "rgba(255,255,255,0.42)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              dy={10}
            />
            <YAxis
              tickFormatter={(value) => numberFormatter.format(value)}
              tick={{ fill: "rgba(255,255,255,0.36)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={64}
            />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ stroke: "rgba(201,161,74,0.3)", strokeWidth: 1 }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{
                paddingBottom: "22px",
                fontSize: "12px",
                color: "rgba(255,255,255,0.62)",
              }}
            />
            <Area
              type="monotone"
              dataKey="positioning"
              name="Positioning Signal"
              stroke="rgba(255,255,255,0.62)"
              strokeWidth={2}
              fill="url(#positioningFill)"
              dot={false}
              activeDot={{
                r: 5,
                stroke: "#0B0B0B",
                strokeWidth: 2,
                fill: "#FFFFFF",
              }}
            />
            <Area
              type="monotone"
              dataKey="reserve"
              name="Reserve Momentum"
              stroke="#C9A14A"
              strokeWidth={3}
              fill="url(#reserveFill)"
              dot={false}
              activeDot={{
                r: 6,
                stroke: "#0B0B0B",
                strokeWidth: 2,
                fill: "#C9A14A",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HomeInsightChart;
