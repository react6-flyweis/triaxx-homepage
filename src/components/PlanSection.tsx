import { Button } from "@/components/ui/button";

const FEATURES = [
  "Unlimited Orders",
  "Monthly Renewals",
  "Unlimited Devices",
  "Live Kitchen Orders",
];

function FeatureList() {
  return (
    <ul className="space-y-2 mt-6">
      {FEATURES.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm">
          <span className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-sm bg-pink-500 text-white">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-slate-700">{f}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PlanSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between mb-12">
          <h2 className="text-4xl font-bold">Plans for every Business</h2>
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 border-pink-300 text-pink-600 hover:bg-pink-50"
          >
            Register now
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Free */}
          <div className="rounded-3xl border-2 border-pink-200 bg-white p-6 flex flex-col self-end">
            <div>
              <h3 className="text-pink-600 font-semibold text-base mb-2">
                Free
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed min-h-[60px]">
                Sell in person, online, over the phone, or on the go. Only pay
                when you take a payment.
              </p>

              <div className="mt-6 mb-4">
                <div className="text-4xl font-bold">$0/mo.</div>
                <div className="text-xs text-slate-400 mt-1">
                  + processing fees
                </div>
              </div>

              <FeatureList />
            </div>

            <div className="mt-6">
              <Button
                variant="outline"
                className="w-full rounded-lg h-11 border-slate-300 text-slate-700 hover:bg-slate-50 text-sm"
              >
                Talk to a POS Expert ↗
              </Button>
            </div>
          </div>

          {/* Plus (highlight - larger) */}
          <div className="rounded-3xl border-2 border-pink-300 bg-white p-8 flex flex-col shadow-md -mt-4 md:-mt-8">
            <div>
              <h3 className="text-pink-600 font-semibold text-lg mb-2">Plus</h3>
              <p className="text-sm text-slate-600 leading-relaxed min-h-[60px]">
                Get advanced features designed specifically for your industry.
                Upgrade or cancel anytime.
              </p>

              <div className="mt-6 mb-4">
                <div className="text-5xl font-bold">$29+/mo.</div>
                <div className="text-xs text-slate-400 mt-1">
                  + processing fees
                </div>
              </div>

              <FeatureList />
            </div>

            <div className="mt-6">
              <Button className="w-full h-12 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg hover:from-pink-600 hover:to-red-600">
                Talk to a POS Expert ↗
              </Button>
            </div>
          </div>

          {/* Premium / Custom */}
          <div className="rounded-3xl border-2 border-pink-200 bg-white p-6 flex flex-col self-end">
            <div>
              <h3 className="text-pink-600 font-semibold text-base mb-2">
                Premium
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed min-h-[60px]">
                Talk with our team to build a plan that meets the complexity of
                your operations, and cloud access.
              </p>

              <div className="mt-6 mb-4">
                <div className="text-4xl font-bold">Custom</div>
                <div className="text-xs text-slate-400 mt-1">
                  + processing fees
                </div>
              </div>

              <FeatureList />
            </div>

            <div className="mt-6">
              <Button
                variant="outline"
                className="w-full rounded-lg h-11 border-slate-300 text-slate-700 hover:bg-slate-50 text-sm"
              >
                Talk to a POS Expert ↗
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
