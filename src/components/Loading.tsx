import triaxxLogo from "@/assets/triaxx-logo.svg";

export default function Loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <img src={triaxxLogo} alt="Triaxx Logo" className="h-40" />
    </div>
  );
}
