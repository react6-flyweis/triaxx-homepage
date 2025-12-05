import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-blue-400">
      <div className="absolute top-0 left-0 right-0 w-full">
        <Header />
      </div>
      <div className="space-y-10 flex flex-col justify-center items-center ">
        {/* top */}
        <div className="flex flex-col items-center gap-4 max-w-4xl">
          {/* top chips */}
          {/* TODO: font-manrope */}
          <div className="w-fit bg-white text-blue-500 py-2 px-6 rounded-full">
            Your #1 Platform for Point of Sales
          </div>
          {/* text */}
          <h3 className="text-center font-extrabold text-6xl text-[#002B6B]">
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
          <Button
            size="lg"
            className="bg-gradient-primary rounded-none h-12 px-10"
          >
            <span className="font-normal">Talk to Pos Specialist</span>
          </Button>
          <Button variant="ghost" className="rounded-none h-12 px-10 text-lg">
            <div className="border-t w-5"></div>
            <span className="font-normal"> Start Free Trial</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
