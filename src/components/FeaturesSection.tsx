import employeeManagementImage from "../assets/employee-management.png";
import inventoryAletsImage from "../assets/inventory-alerts.png";
import orderManagementImage from "../assets/order-management.png";
import mobileRemoteAccessImage from "../assets/mobile-remote-access.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselPrevious,
  // CarouselNext,
} from "./ui/carousel";
import { RepeatIcon } from "lucide-react";

export default function FeaturesSection() {
  return (
    <div className="flex flex-col items-center gap-6 py-20   space-y-10 max-w-6xl mx-auto">
      <h3 className="text-5xl">
        Key Features to grow
        <span className="ml-1 text-primary">10X</span>
      </h3>
      {/* carousel */}
      <Carousel opts={{ align: "start", containScroll: "trimSnaps" }}>
        {/* <CarouselPrevious /> */}
        <CarouselContent className="w-full">
          {[
            {
              title: "Employee Management",
              description:
                "Manage employee roles, permissions, and attendance with ease.",
              image: employeeManagementImage,
            },
            {
              title: "Inventory Alerts",
              description:
                "Receive real-time notifications for low stock and inventory updates.",
              image: inventoryAletsImage,
            },
            {
              title: "Order Management",
              description:
                "Streamline order processing from placement to delivery.",
              image: orderManagementImage,
            },
            {
              title: "Mobile & Remote Access",
              description: "Access your POS system from anywhere, anytime.",
              image: mobileRemoteAccessImage,
            },
          ].map((feature) => (
            <CarouselItem
              key={feature.title}
              className="basis-full sm:basis-1/2 lg:basis-1/4"
            >
              <div className="relative w-60 h-96 rounded-md overflow-hidden">
                {/* image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 h-full w-full object-cover z-0"
                />

                {/* vignette overlay */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.85) 100%)",
                  }}
                />

                {/* content */}
                <div className="flex w-full justify-between items-end gap-5 absolute bottom-4 left-0 px-2 z-20">
                  <h4 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h4>

                  <div className="shrink-0 bg-white rounded-full flex justify-center items-center size-8">
                    <RepeatIcon />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
