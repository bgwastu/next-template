import {
  createTheme,
  DEFAULT_THEME,
  mergeMantineTheme,
  rem,
} from "@mantine/core";

export const baseTheme = createTheme({
  primaryColor: "brand",
  colors: {
    brand: [
      "#e6f3ff",
      "#cce7ff",
      "#99ceff",
      "#66b5ff",
      "#339cff",
      "#0083ff",
      "#0066cc",
      "#004d99",
      "#003366",
      "#001a33",
    ],
  },
  activeClassName: "active:scale-95 duration-100",
  cursorType: "pointer",
  fontSizes: {
    xs: rem(12),
    sm: rem(16),
    md: rem(18),
    lg: rem(20),
    xl: rem(22),
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, baseTheme);
