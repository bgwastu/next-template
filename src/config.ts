import { Inter, Lora } from "next/font/google";

export const APP_NAME = "My App";
export const APP_DESCRIPTION = "My App Description";

export const fontHeading = Lora({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
});

export const fontBody = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});
