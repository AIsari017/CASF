import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CASF 2025",
  description: "Central Asian Spring Festival",
  icons: {
    icon: "/vercel.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
