import { useTheme } from "next-themes";
import Image from "next/image";
import ta from "@/public/ta.png";
import tadark from "@/public/tadark.png";
import mney from "@/public/mney.png";
import mneydark from "@/public/mneydark.png";
import gorila from "@/public/gorila.png";
import goriladark from "@/public/goriladark.png";
import evey from "@/public/eveyIcon.png";
import eveydark from "@/public/eveyIcondark.png";
import payok from "@/public/payok.png";
import payokdark from "@/public/payokdark.png";
import unibarg from "@/public/unibarg.png";
import unibargdark from "@/public/unibargdark.png";
import livingGreen from "@/public/livinggreen.png";
import livingGreendark from "@/public/livinggreendark.png";

// Define the logo type
type LogoType = {
  id: number;
  name: string;
  logoLight: any;
  logoDark: any;
};

// Array of logos
export const logos: LogoType[] = [
  {
    id: 1,
    name: "Ta Internation",
    logoLight: ta,
    logoDark: tadark,
  },
  {
    id: 2,
    name: "Mney",
    logoLight: mney,
    logoDark: mneydark,
  },
  {
    id: 3,
    name: "Gorila",
    logoLight: gorila,
    logoDark: goriladark,
  },
  {
    id: 4,
    name: "Evey",
    logoLight: evey,
    logoDark: eveydark,
  },
  {
    id: 5,
    name: "Payok",
    logoLight: payok,
    logoDark: payokdark,
  },
  {
    id: 6,
    name: "Unibarg",
    logoLight: unibarg,
    logoDark: unibargdark,
  },
  {
    id: 7,
    name: "Living Green",
    logoLight: livingGreen,
    logoDark: livingGreendark,
  },
];
