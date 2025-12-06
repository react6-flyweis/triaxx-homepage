export default function Footer() {
  return (
    <footer className="w-full bg-transparent border-t pt-14 pb-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column: logo + location/contact */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent text-4xl">
              Triaxx
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Location</h3>
            <p className="text-base text-muted-foreground">
              <strong className="font-semibold">Corporate Head Office:</strong>{" "}
              3787 Jerry Dove Drive, Florence, South city, 29501, South Africa
            </p>

            <div className="mt-6 space-y-2 text-base">
              <p>
                <span className="font-semibold">Phone:</span> 843-496-7759
              </p>
              <p>
                <span className="font-semibold">Fax:</span> 02-222264303
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                info@mastershub.com
              </p>
            </div>
          </div>

          <div className="mt-auto text-[15px] text-[#b94a7b]">
            ©2025 All rights reserved
          </div>
        </div>

        {/* Right column: newsletter */}
        <div className="space-y-4">
          {/*  quick links / others / about - spread into two columns inside */}
          <div className="grid grid-cols-3 justify-start">
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li>Features</li>
                <li>Subscription</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Others</h4>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li>How it works</li>
                <li>About Us</li>
              </ul>
            </div>

            <div className="">
              <h4 className="text-xl font-bold mb-4">About us</h4>
            </div>
          </div>

          <div className="flex flex-col max-w-md">
            <h3 className="text-xl font-bold mb-1">
              Signup Newsletter & Become Member
            </h3>
            <p className="text-base text-muted-foreground mb-3">
              Sign up for exclusive offers, original stories, Features, events,
              Early Access and more.
            </p>

            <label className="text-sm">E-mail*</label>
            <input
              type="email"
              placeholder=""
              className="border-0 border-b-2 border-black focus:outline-none py-1 mb-4 bg-transparent"
            />

            <button
              className="inline-block w-fit px-8  py-2 rounded-md text-white font-medium shadow-lg"
              style={{
                background: "linear-gradient(180deg,#6a1b9a 0%,#d32f2f 100%)",
              }}
            >
              Sign Me Up
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
