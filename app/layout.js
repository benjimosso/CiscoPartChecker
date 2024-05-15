import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
// Vercel Insights and Analytics
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
// import { ThemeProvider } from "@/components/theme-provider";

// const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({ subsets: ["latin"], weight: ["300"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300"] });
export const metadata = {
  title: "Cisco Part Checker",
  description: "Build by Daniel Mosso",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          {children}
          <SpeedInsights />
          <Analytics />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
