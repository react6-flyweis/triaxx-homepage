import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import TalkToSpecialistDialog from "./TalkToSpecialist";

interface PlanCardProps {
  title: string;
  description: React.ReactNode;
  price?: React.ReactNode;
  priceNote?: React.ReactNode;
  features?: string[];
  highlight?: boolean;
  buttonLabel?: string;
  buttonVariant?: "outline" | "default";
}

function CheckIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PlanCard({
  title,
  description,
  price,
  priceNote,
  features = [],
  highlight = false,
  buttonLabel = "Talk to a POS Expert",
  buttonVariant = "outline",
}: PlanCardProps) {
  return (
    <div
      className={
        highlight
          ? "rounded-lg p-0.5 bg-gradient-primary shadow-md -mt-4 md:-mt-8"
          : "rounded-lg p-0.5 bg-gradient-primary flex flex-col self-end"
      }
    >
      <div
        className={
          highlight
            ? "rounded-lg bg-white p-8 flex flex-col"
            : "rounded-lg bg-white p-6 flex flex-col"
        }
      >
        <h3
          className={
            highlight
              ? "font-semibold text-lg mb-2 text-slate-900"
              : "font-semibold text-base mb-2 text-slate-900"
          }
        >
          {title}
        </h3>

        <div
          className={
            highlight
              ? "text-sm text-slate-600 leading-relaxed min-h-[60px]"
              : "text-xs text-slate-600 leading-relaxed min-h-[60px]"
          }
        >
          {description}
        </div>

        <div className="mt-6 mb-4">
          <div
            className={highlight ? "text-5xl font-bold" : "text-4xl font-bold"}
          >
            {price}
          </div>
          {priceNote ? (
            <div className="text-xs text-slate-400 mt-1">{priceNote}</div>
          ) : null}
        </div>

        <ul className="space-y-2 mt-6">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <span className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-sm bg-gradient-primary text-white">
                <CheckIcon />
              </span>
              <span className="text-slate-700">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <TalkToSpecialistDialog>
            <Button
              variant={buttonVariant === "outline" ? "outline" : undefined}
              className={
                highlight
                  ? "w-full h-12 bg-gradient-primary text-white rounded-lg"
                  : "w-full rounded-lg h-11 border-slate-300 text-slate-700 hover:bg-slate-50 text-sm"
              }
            >
              {buttonLabel}
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </TalkToSpecialistDialog>
        </div>
      </div>
    </div>
  );
}
