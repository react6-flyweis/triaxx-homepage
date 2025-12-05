import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExclusiveSection from "./components/ExclusiveSection";
import TeamTriaxx from "./components/TeamTriaxx";
import InventorySection from "./components/InventorySection";
import ExperienceSection from "./components/ExperienceSection";
import PlanSection from "./components/PlanSection";
import HowItWorksSection from "./components/HowItWorksSection";

function App() {
  return (
    <div className="">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ExclusiveSection />
      <TeamTriaxx />
      <InventorySection />
      <ExperienceSection />
      <PlanSection />
    </div>
  );
}

export default App;
