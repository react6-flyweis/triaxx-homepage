import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

import womanImg from "@/assets/buisness-women.gif";

export default function Testimonial() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  //   const canScrollPrev =
  //     typeof api?.canScrollPrev === "function" ? api.canScrollPrev() : false;
  //   const canScrollNext =
  //     typeof api?.canScrollNext === "function" ? api.canScrollNext() : false;

  const testimonials = [
    {
      name: "Manuel Rikob",
      title: "CEO of Intel",
      quote:
        "Working with Master in me has been an incredibly painless and enjoyable experience.",
      image: womanImg,
    },
    {
      name: "Sarah Connor",
      title: "Head of Retail",
      quote:
        "Triaxx helped us streamline operations — the team loved the simplicity.",
      image: womanImg,
    },
  ];

  return (
    <section className="py-12 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-4xl font-bold">What our clients say</h2>

          {/* top-right navigation (placed in header area) */}
          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="ghost"
              className="bg-gradient-primary text-white hover:opacity-90 shadow-lg rounded-full"
              onClick={() => api?.scrollPrev()}
              //   disabled={!canScrollPrev}
            >
              <ArrowLeft />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="bg-gradient-primary text-white hover:opacity-90 shadow-lg rounded-full"
              onClick={() => api?.scrollNext()}
              //   disabled={!canScrollNext}
            >
              <ArrowRight />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ loop: true, slidesToScroll: 1 }}
          className=""
        >
          <CarouselContent className="">
            {testimonials.map((t, idx) => (
              <CarouselItem key={idx} className="basis-[80%] md:basis-[60%]">
                <div className="flex gap-0 rounded-2xl overflow-hidden shadow-lg">
                  <div className="w-1/2 bg-black text-white p-8 flex flex-col justify-center">
                    <div className="text-sm opacity-80 mb-2">
                      {t.name} • <span className="opacity-70">{t.title}</span>
                    </div>
                    <blockquote className="text-2xl leading-snug font-medium">
                      “{t.quote}”
                    </blockquote>
                  </div>
                  <div className="w-1/2">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
