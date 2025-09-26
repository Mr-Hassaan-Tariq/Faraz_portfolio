import { League_Spartan, Qwitcher_Grypen } from "next/font/google";

export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-league-spartan",
});

export const qwitcherGrypen = Qwitcher_Grypen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-qwitcher-grypen",
});
