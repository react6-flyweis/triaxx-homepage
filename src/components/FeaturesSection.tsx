import employeeManagementImage from "../assets/employee-management.png";
import inventoryAletsImage from "../assets/inventory-alerts.png";
import orderManagementImage from "../assets/order-management.png";
import mobileRemoteAccessImage from "../assets/mobile-remote-access.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

export default function FeaturesSection() {
  return (
    <div className="flex flex-col items-center gap-6 py-20   space-y-10">
      <h3 className="text-5xl">
        Key Features to grow
        <span className="ml-1 text-primary">10X</span>
      </h3>
      {/* carousel */}
      <Carousel
        // Embla options: align to start and contain scroll to trim snaps
        opts={{ align: "start", containScroll: "trimSnaps" }}
        className="max-w-5xl"
      >
        <CarouselPrevious />
        <CarouselContent className="">
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
            <CarouselItem key={feature.title}>
              <div className="relative w-72 h-96 rounded-md overflow-hidden">
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
                <div className="absolute bottom-4 left-4 z-20">
                  <h4 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h4>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
}
