import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Raleway } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";

const fontRaleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | E-commerce`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontRaleway.className}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
