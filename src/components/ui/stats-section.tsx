interface StatItemProps {
  value: string;
  label: string;
  id: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-3xl md:text-4xl font-bold mb-2">{value}</div>
      <div className="text-sm text-zinc-600">{label}</div>
    </div>
  );
}

interface StatsSectionProps {
  stats: Array<{ value: string; label: string; id?: string }>;
  className?: string;
}

export function StatsSection({ stats, className = "" }: StatsSectionProps) {
  return (
    <div className={`py-10 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatItem
              key={stat.id || `${stat.label}-${stat.value}`}
              id={stat.id || `${stat.label}-${stat.value}`}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
