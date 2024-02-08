import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300"] }); 
export const metadata = {
  title: "DHD Cisco Data",
  description: "Build by Daniel Mosso",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
