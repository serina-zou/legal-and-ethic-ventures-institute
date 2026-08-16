import type { Metadata } from "next";
import { B612 } from "next/font/google";
import "./globals.css";

/** Matches the presentation PDF (B612 Regular + Bold). */
const b612 = B612({
  variable: "--font-b612",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Legal & Ethics Ventures Institute",
  description:
    "Elevating the game. From textbooks to real-world impact. Advance your career. Be at the center of the future.",
  icons: {
    icon: [{ url: "/flolabs-logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/flolabs-logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${b612.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
