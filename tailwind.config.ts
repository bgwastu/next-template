import { theme } from "./src/theme";
import type { Config } from "tailwindcss";
import tailwindPresetMantine from "tailwind-preset-mantine";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  presets: [tailwindPresetMantine({ mantineColors: theme.colors })],
  plugins: [],
};

export default config;
