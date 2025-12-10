export default function PlanSkeletonCard() {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <div className="h-6 w-1/3 bg-slate-200 rounded animate-pulse mb-4" />
      <div className="h-10 w-2/3 bg-slate-200 rounded animate-pulse mb-6" />

      <div className="flex items-center justify-between mb-4">
        <div className="h-8 w-20 bg-slate-200 rounded animate-pulse" />
        <div className="h-6 w-16 bg-slate-200 rounded animate-pulse" />
      </div>

      <ul className="space-y-3">
        <li className="h-4 w-full bg-slate-200 rounded animate-pulse" />
        <li className="h-4 w-5/6 bg-slate-200 rounded animate-pulse" />
        <li className="h-4 w-4/6 bg-slate-200 rounded animate-pulse" />
      </ul>

      <div className="mt-6 h-10 bg-slate-200 rounded animate-pulse" />
    </div>
  );
}
