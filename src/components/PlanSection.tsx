import { Button } from "@/components/ui/button";
import PlanCard from "./PlanCard";
import PlanSkeletonCard from "./PlanSkeletonCard";
import api from "@/lib/api";
import { useEffect, useState } from "react";

interface PlanItem {
  _id: string;
  name: string;
  plan_duration?: string;
  plan_facility?: string;
  Status?: boolean;
  CreateBy?: { user_id?: number; Name?: string; email?: string };
  CreateAt?: string;
  UpdatedAt?: string;
  Plan_id?: number;
  UpdatedBy?: number;
}

export default function PlanSection() {
  const [plans, setPlans] = useState<PlanItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchPlans() {
      setLoading(true);
      setError(null);
      try {
        // The api instance uses `baseURL` from env. The endpoint from the backend
        // is `/api/master/plan/getall` (baseURL should be configured).
        const res = await api.get("/api/master/plan/getall");
        const data = res?.data;
        if (!mounted) return;
        if (data && Array.isArray(data.data)) {
          setPlans(data.data as PlanItem[]);
        } else {
          setPlans([]);
        }
      } catch (err: any) {
        setError(err?.message || "Failed to load plans");
        setPlans([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchPlans();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    const skeletons = [1, 2, 3];

    return (
      <section id="subscriptions" className="py-16">
        <div className="max-w-6xl mx-auto ">
          <div className="flex items-start justify-between mb-28">
            <h2 className="text-4xl ">Plans for every Business</h2>
            <div className="bg-gradient-primary p-0.5 rounded-md">
              <Button variant="outline" className="px-6 py-2 rounded-md">
                <span className="bg-clip-text bg-gradient-primary text-transparent">
                  Register now
                </span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {skeletons.map((s) => (
              <PlanSkeletonCard key={s} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="subscriptions" className="py-16">
      <div className="max-w-6xl mx-auto ">
        <div className="flex items-start justify-between mb-28">
          <h2 className="text-4xl ">Plans for every Business</h2>
          <div className="bg-gradient-primary p-0.5 rounded-md">
            <Button variant="outline" className="px-6 py-2 rounded-md">
              <span className="bg-clip-text bg-gradient-primary text-transparent">
                Register now
              </span>
            </Button>
          </div>
        </div>

        {error ? <div className="text-sm text-red-600">{error}</div> : null}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {plans && plans.length > 0 ? (
            plans.map((p) => {
              const features = p.plan_facility
                ? p.plan_facility.split(",").map((s) => s.trim())
                : [];

              const title = p.name || "Plan";
              const price = p.plan_duration || "Custom";

              // Highlight if Plan_id === 1 (sample data indicates Premium with id 1)
              const highlight = p.Plan_id === 1;

              return (
                <PlanCard
                  key={p._id}
                  title={title}
                  description={p.plan_facility || ""}
                  price={price}
                  priceNote={p.Status ? "+ active" : undefined}
                  features={features}
                  highlight={highlight}
                />
              );
            })
          ) : (
            <div className="col-span-1 md:col-span-3 text-center text-slate-600">
              No plans available at the moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
