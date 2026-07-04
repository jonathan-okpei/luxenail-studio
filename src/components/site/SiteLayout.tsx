import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:text-ivory focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="pt-[80px] md:pt-[92px]">
        {children}
      </main>
      <Footer />
    </>
  );
}