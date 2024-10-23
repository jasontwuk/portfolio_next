import { Roboto, Nunito, Ubuntu_Mono } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const nunito = Nunito({ subsets: ["latin"], display: "swap" });

export const ubntu_mono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
