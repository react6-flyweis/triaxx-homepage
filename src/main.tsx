import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Smooth scroll for hash routes
function scrollToHash(retries = 12, delay = 150) {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const tryFind = (attempt = 0) => {
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (attempt < retries) {
      setTimeout(() => tryFind(attempt + 1), delay);
    }
  };

  tryFind();
}

// Run after initial render to handle direct links like /#section
window.requestAnimationFrame(() => {
  // small delay to allow lazy components to mount
  setTimeout(() => scrollToHash(), 50);
});

// Handle back/forward or programmatic hash changes
window.addEventListener("hashchange", () => scrollToHash());

// Intercept local anchor clicks (href="#...") to smooth-scroll instead of jump
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement | null;
  if (!target) return;
  const anchor = target.closest("a") as HTMLAnchorElement | null;
  if (!anchor) return;
  const href = anchor.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  const id = href.slice(1);
  const el = document.getElementById(id);
  if (!el) return;

  e.preventDefault();
  history.pushState(null, "", `#${id}`);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
});
