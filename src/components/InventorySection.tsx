import React from "react";
import { Button } from "@/components/ui/button";
import managementIcon from "@/assets/management.svg";
import trackIcon from "@/assets/track.svg";
import forcastIcon from "@/assets/forcast.svg";
import TalkToSpecialistDialog from "./TalkToSpecialist";

function FeatureItem({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="size-18 p-1 rounded-full bg-gradient-primary flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
          {children}
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-base font-bold">{title}</div>
        <div className="text-sm text-muted-foreground max-w-xs">
          {description}
        </div>
      </div>
    </div>
  );
}

export default function InventorySection() {
  return (
    <section className="py-20 max-w-6xl mx-auto flex flex-col items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* left */}
        <div>
          <h3 className="text-3xl font-semibold mb-6">
            Never Run Out of Inventory
          </h3>
          <div className="w-56 h-1 rounded mb-6 bg-gradient-primary" />
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            Monitors inventory movement across all sales channels and locations,
            ensuring stock is where it's needed, when it's needed, at the right
            cost.
          </p>
        </div>

        {/* right: 2x2 features */}
        <div className="grid grid-cols-2 gap-12">
          <FeatureItem
            title={"Stock management"}
            description={"Maintain a single dashboard for all sales channels"}
          >
            <img src={managementIcon} alt="management" className="w-8 h-8" />
          </FeatureItem>

          <FeatureItem
            title={"Stock tracking"}
            description={"Have an eye on the top performing Stocks"}
          >
            <img src={trackIcon} alt="tracking" className="w-8 h-8" />
          </FeatureItem>

          <FeatureItem
            title={"Demand forecasting"}
            description={"Decide when and how much to reorder"}
          >
            <img src={forcastIcon} alt="forecast" className="w-8 h-8" />
          </FeatureItem>

          <FeatureItem
            title={"Inventory reports"}
            description={
              "Keep your stock levels in check and monitor incoming products"
            }
          >
            <img src={trackIcon} alt="reports" className="w-8 h-8" />
          </FeatureItem>
        </div>
      </div>
      {/* CTA action */}
      <div className="flex pt-20">
        <TalkToSpecialistDialog>
          <Button size="lg" className="bg-gradient-primary rounded h-12 px-10">
            <span className="font-normal">Talk to Pos Specialist</span>
          </Button>
        </TalkToSpecialistDialog>
        <Button variant="ghost" className="h-12 px-10 text-lg">
          <div className="border-t w-5"></div>
          <span className="font-normal"> Start Free Trial</span>
        </Button>
      </div>
    </section>
  );
}
