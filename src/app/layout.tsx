import PostHogPageView from "@/components/posthog-pageview";
import { PHProvider } from "@/components/posthog-provider";
import { APP_DESCRIPTION, APP_NAME, fontBody, fontHeading } from "@/config";
import { theme } from "@/theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontBody.variable} ${fontHeading.variable}`}>
      <head>
        <ColorSchemeScript />
      </head>
      <PHProvider>
        <PostHogPageView />
        <body className="antialiased">
          <MantineProvider theme={theme} withCssVariables>
            <Notifications />
            {children}
          </MantineProvider>
        </body>
      </PHProvider>
    </html>
  );
}
