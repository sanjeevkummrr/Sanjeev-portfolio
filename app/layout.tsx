import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Sanjeev Kumar — Infrastructure Support Engineer",
  description:
    "Portfolio of Sanjeev Kumar, Infrastructure and Production Support professional.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}