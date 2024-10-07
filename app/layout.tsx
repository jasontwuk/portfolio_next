import type { Metadata } from "next";

import "../app/utilities/globals.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AccessibilityReporter } from "./components/AccessibilityReporter";

import { roboto } from "./utilities/fonts";

export const metadata: Metadata = {
  title: "Home - Jason Liao",
  description: "Jason Liao's protfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} w-full px-5`}>
        <div className="mx-auto flex min-h-screen w-full max-w-screen-lg flex-col text-sm text-slate-800 sm:text-base">
          <AccessibilityReporter />

          <Header />

          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
