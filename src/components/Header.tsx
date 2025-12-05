import triaxxLogo from "@/assets/triaxx-logo.svg";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-5">
      <img src={triaxxLogo} alt="Triaxx Logo" className="h-8" />

      <nav aria-label="Primary" className="flex-1">
        <ul className="hidden md:flex justify-center gap-10 text-slate-900  font-medium tracking-wide">
          <li>
            <a
              href="/"
              className="transition-colors duration-150 hover:text-sky-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/subscriptions"
              className="transition-colors duration-150 hover:text-sky-600"
            >
              Subscriptions
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="transition-colors duration-150 hover:text-sky-600"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="transition-colors duration-150 hover:text-sky-600"
            >
              About Us
            </a>
          </li>
        </ul>
      </nav>

      <div>{/* cta placeholder (e.g., sign in / button) */}</div>

      <div className="bg-gradient-primary rounded-full  p-0.5">
        <Button variant="outline" className="bg-white rounded-full ">
          <span>Register Now</span>
          <div className="size-7 bg-white flex items-center justify-center rounded-full ">
            <ArrowUpRight className="size-4 bg-transparent bg-primary-gradient text-clip" />
          </div>
        </Button>
      </div>
    </header>
  );
}
