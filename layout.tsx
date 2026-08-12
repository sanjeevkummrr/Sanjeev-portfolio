import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
