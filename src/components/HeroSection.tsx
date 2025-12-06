import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import TalkToSpecialistDialog from "./TalkToSpecialist";
import heroImage from "@/assets/hero.png";

export default function HeroSection() {
  return (
    <div className="relative flex justify-center items-center min-h-screen">
      {/* background image with gradient effect */}
      <div className="absolute inset-0 -z-20 opacity-80">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 w-full">
        <Header />
      </div>
      <div className="space-y-10 flex flex-col justify-center items-center ">
        {/* top */}
        <div className="flex flex-col items-center gap-4 max-w-4xl">
          {/* top chips */}
          {/* TODO: font-manrope */}
          <div className="w-fit bg-white  py-2 px-6 rounded-full">
            <span className="bg-clip-text bg-gradient-primary text-transparent">
              Your #1 Platform for Point of Sales
            </span>
          </div>
          {/* text */}
          <h3 className="text-center font-bold text-6xl text-[#002B6B]">
            A POS That Works as Hard as You, and Faster Than You.
          </h3>
          {/* desc */}
          <p className="text-center max-w-md">
            Grow without limit with Triaxx and make timely and accurate
            descisions with real-time reports
          </p>
        </div>

        {/* cta action */}
        <div className="flex">
          <TalkToSpecialistDialog>
            <Button
              size="lg"
              className="bg-gradient-primary rounded h-12 px-10"
            >
              <span className="font-normal">Talk to Pos Specialist</span>
            </Button>
          </TalkToSpecialistDialog>
          <Button variant="ghost" className="h-12 px-10 text-lg rounded">
            <div className="h-0.5 w-5 bg-gradient-primary"></div>
            <span className="font-normal bg-clip-text bg-gradient-primary text-transparent">
              {" "}
              Start Free Trial
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
