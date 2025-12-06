import exclusiveImage from "../assets/exclusive.png";
import TalkToSpecialistDialog from "./TalkToSpecialist";
import { Button } from "./ui/button";

export default function ExclusiveSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        {/* Left: image */}
        <div className="w-full lg:w-1/2">
          <img
            src={exclusiveImage}
            alt="Exclusive"
            className="w-full h-[350px] object-cover rounded-md shadow-lg"
          />
        </div>

        {/* Right: content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex flex-col gap-4">
            <span className="text-pink-600 font-medium uppercase text-sm">
              Exclusive from Triaxx POS
            </span>

            <h2 className="text-3xl  font-extrabold leading-tight">
              Offline Mode, So You Can Make Sales Even Without an Internet
              Connection
            </h2>

            <p className="text-gray-500 max-w-xl">
              Sell at events or in areas with spotty internet and keep making
              sales, even during an internet outage.
            </p>

            <div className="mt-4">
              <TalkToSpecialistDialog>
                <Button
                  size="lg"
                  className="bg-gradient-primary rounded-lg h-14 px-12"
                >
                  <span className="font-medium">Talk to a POS Specialist</span>
                </Button>
              </TalkToSpecialistDialog>
            </div>
          </div>

          <p className="text-gray-600 max-w-prose">
            Triaxx POS has a sleek PWA frontend that is fast and resilient, and
            can even continue working offline if needed.
          </p>
        </div>
      </div>
    </section>
  );
}
