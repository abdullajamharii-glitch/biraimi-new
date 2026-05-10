import type { Metadata } from "next";
import { Poppins, Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Al Beraimi Cafeteria | Best Grilled Chicken & Shawarma in Sharjah",
  description:
    "Al Beraimi Cafeteria - Sharjah's favorite cafeteria serving delicious grilled chicken, shawarma, burgers, fresh juices, and authentic Arabic meals. Open daily 11AM-4AM. Visit us at Al Jubail and Al Qasimia branches.",
  keywords: [
    "Best Cafeteria in Sharjah",
    "Best Shawarma in Sharjah",
    "Grilled Chicken Sharjah",
    "Al Jubail Cafeteria",
    "Al Qasimia Cafeteria",
    "Late Night Food Sharjah",
    "Affordable Restaurant Sharjah",
    "Best Arabic Food in Sharjah",
    "Broasted Chicken Sharjah",
    "Fresh Juice Sharjah",
  ],
  openGraph: {
    title: "Al Beraimi Cafeteria | Best Grilled Chicken & Shawarma in Sharjah",
    description:
      "Sharjah's favorite cafeteria serving delicious grilled chicken, shawarma, burgers, fresh juices, and authentic Arabic meals.",
    type: "website",
    locale: "en_AE",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${poppins.variable} ${cairo.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
