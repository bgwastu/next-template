import {
  createTheme,
  DEFAULT_THEME,
  mergeMantineTheme,
  rem,
} from "@mantine/core";

export const baseTheme = createTheme({
  fontFamily: "var(--font-body)",
  headings: {
    fontFamily: "var(--font-heading)",
  },
  primaryColor: "brand",
  colors: {
    brand: [
      "#ecf4ff",
      "#dce4f5",
      "#b9c7e2",
      "#94a8d0",
      "#748dc0",
      "#5f7cb7",
      "#5474b4",
      "#44639f",
      "#3a5890",
      "#2c4b80",
    ],
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(16),
    md: rem(18),
    lg: rem(20),
    xl: rem(22),
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, baseTheme);
