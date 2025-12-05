export default function ExperienceSection() {
  return (
    <section className="w-full py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Top-left: big title (black) */}
        <div className="bg-black text-white flex items-center justify-center px-12 py-24">
          <h2 className="text-5xl  font-extrabold leading-tight text-center max-w-md">
            The{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Triaxx
            </span>
            <br /> Experience
          </h2>
        </div>

        {/* Top-right: feature headline (white) */}
        <div className="bg-white text-black flex items-center justify-center px-12 py-24">
          <div className="max-w-md text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
              Access from any part
              <br /> of the globe
            </h3>
            <p className="text-base leading-relaxed">
              Get Trivaxx on mobile and access it from any part of the globe
              seamlessly. All your data’s are stored securely and can be
              accessed by authorization
            </p>
          </div>
        </div>

        {/* Bottom-left: white card */}
        <div className="bg-white text-black flex items-center justify-center px-12 py-24">
          <div className="max-w-md text-center">
            <h4 className="text-2xl md:text-3xl font-bold mb-6">
              Table and Floor Management
            </h4>
            <p className="text-base leading-relaxed">
              Employees can see a visual floor plan showing which tables are
              occupied, reserved, or available and Table Merging/Splitting
            </p>
          </div>
        </div>

        {/* Bottom-right: black card */}
        <div className="bg-black text-white flex items-center justify-center px-12 py-24">
          <div className="max-w-md text-center">
            <h4 className="text-2xl md:text-3xl font-bold mb-6">
              Sales Performance Tracking
            </h4>
            <p className="text-base leading-relaxed">
              Employees can view their daily sales totals, rack employee
              productivity in terms of orders taken. Staff can send messages to
              other employees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
