import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const HeroSection = lazy(() => import("@/components/HeroSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const ExclusiveSection = lazy(() => import("./components/ExclusiveSection"));
const TeamTriaxx = lazy(() => import("./components/TeamTriaxx"));
const InventorySection = lazy(() => import("./components/InventorySection"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const PlanSection = lazy(() => import("./components/PlanSection"));
const HowItWorksSection = lazy(() => import("./components/HowItWorksSection"));
const Footer = lazy(() => import("./components/Footer"));
const ConnectSection = lazy(() => import("./components/ConnectSection"));
const Testimonial = lazy(() => import("./components/Testimonial"));

function App() {
  return (
    <div className="">
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ExclusiveSection />
        <TeamTriaxx />
        <InventorySection />
        <Testimonial />
        <ExperienceSection />
        <PlanSection />
        <ConnectSection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
