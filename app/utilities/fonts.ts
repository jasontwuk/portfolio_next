import { Nunito, League_Spartan, Ubuntu_Mono } from "next/font/google";

export const nunito = Nunito({ subsets: ["latin"], display: "swap" });

export const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export const ubntu_mono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
