type Stat = { value: string; label: string };

export default function StatsStrip({ items }: { items: Stat[] }) {
  return (
    <section className="my-8 rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-center">
        {items.map((s, i) => (
          <div key={i} className="space-y-1">
            <div className="text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent
                            bg-gradient-to-r from-white to-white/70">
              {s.value}
            </div>
            <div className="text-sm text-white/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
