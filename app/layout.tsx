import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrument_sans = Instrument_Sans({
  variable: "--instrument-sans",
  subsets: ["latin-ext", "latin"],
});

export const metadata: Metadata = {
  title: "Components",
  description: "React Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrument_sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
