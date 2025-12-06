import connect1 from "@/assets/connect-1.png";
import connect2 from "@/assets/connect-2.png";

export default function ConnectSection() {
  return (
    <section id="contact" className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          see how Triaxx can help you operate
          <br /> more efficiently
        </h2>
      </div>

      {/* Full-width cards */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <article className="relative h-80 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center filter brightness-75"
              style={{ backgroundImage: `url(${connect1})` }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <p className="text-sm mb-2 opacity-90">Most beneficial</p>
              <h3 className="text-lg md:text-2xl font-semibold mb-4 max-w-xs">
                Talk to our POS consultants and have all of your questions
                answered.
              </h3>

              <button className="py-2 px-4 border border-white rounded-md bg-transparent hover:bg-white/10 transition">
                Talk to a POS Specialist
              </button>
            </div>
          </article>

          <article className="relative h-80 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center filter brightness-75"
              style={{ backgroundImage: `url(${connect2})` }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <p className="text-sm mb-2 opacity-90">Quick Start</p>
              <h3 className="text-lg md:text-2xl font-semibold mb-4 max-w-xs">
                Get started with a free Trial
              </h3>

              <button className="py-2 px-4 border border-white rounded-md bg-transparent hover:bg-white/10 transition">
                Talk to a POS Specialist
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
