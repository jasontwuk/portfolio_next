import type { Metadata } from "next";

import "../app/utilities/globals.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AccessibilityReporter } from "./components/AccessibilityReporter";

import { league_spartan } from "./utilities/fonts";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Home - Jason Liao",
  description: "Jason Liao's protfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const setInitialTheme = `
    (function() {
      const theme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (theme === 'dark' || (!theme && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
  `;

  return (
    // *** Note: fix a "dark" class hydration warning (because using Local Storage to store "theme")
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Note: script to set theme class on initial load */}
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>

      <body
        className={clsx(
          league_spartan.className,
          "w-full bg-white px-5 py-5 md:py-12",
          // +++ Note: for dark mode
          "dark:bg-zinc-800",
        )}
      >
        <div
          className={clsx(
            "mx-auto flex min-h-screen w-full max-w-screen-lg flex-col gap-20 text-sm text-slate-800 sm:text-base",
            // +++ Note: for dark mode
            "dark:text-slate-200",
          )}
        >
          <AccessibilityReporter />

          <Header />

          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
