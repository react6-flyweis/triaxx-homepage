import { Button } from "./ui/button";
import buisnessWomenImage from "@/assets/buisness-women.gif";

export default function TeamTriaxx() {
  return (
    <section className="bg-black text-white w-full">
      <div className="max-w-6xl mx-auto py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          {/* left content */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6">
              <h5 className="font-bold text-4xl bg-clip-text text-transparent bg-gradient-primary">
                Team Triaxx
              </h5>
              <p className="font-semibold text-2xl">
                Our Team Made a POS Software with Most Powerful Automization and
                Customization Features
              </p>
            </div>

            <p className="mt-4 text-gray-200">
              Sell at events or in areas with spotty internet and keep making
              sales, even during an internet outage.
            </p>

            {/* cta action */}
            <div className="mt-8 flex items-center gap-6">
              <Button
                size="lg"
                className="bg-gradient-primary rounded h-12 px-10"
              >
                <span className="font-normal">Talk to Pos Specialist</span>
              </Button>

              <Button
                variant="ghost"
                className="h-12 px-10 text-lg flex items-center gap-3"
              >
                <div className="h-px w-6 bg-white/90" />
                <span className="font-normal">Start Free Trial</span>
              </Button>
            </div>

            <p className="mt-8 text-gray-300">
              Triaxx has development a Product with Great value to the
              restaurant's and Bars. We believe that the customization work and
              everything you pay for is worth the investment.
            </p>
          </div>

          {/* right image area */}
          <div className="lg:w-1/2 w-full">
            <div className="w-full h-96 lg:h-[520px] bg-white rounded overflow-hidden shadow-lg">
              <img
                src={buisnessWomenImage}
                alt="Team Triaxx"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
