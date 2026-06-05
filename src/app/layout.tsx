import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'Epley Plumbing Co. | Gastonia NC Plumbers & Water Heater Repair',
  description: 'Epley Plumbing Co. offers reliable plumbing services in Gastonia, NC. Fast, affordable drain cleaning, water heater repair, leak detection, and emergency plumbing. Request an estimate today!',
  keywords: ["Plumber Gastonia NC, Emergency Plumber Gastonia, Water Heater Repair Gastonia, Gastonia plumbing services, drain cleaning Gastonia, leak detection Gastonia, pipe repair Gastonia, local plumber Gastonia, commercial plumbing Gastonia"],
  openGraph: {
    "title": "Epley Plumbing Co. | Reliable Plumbers in Gastonia, NC",
    "description": "Trusted local plumbing company offering fast, affordable services in Gastonia, NC. Specializing in repairs, drain cleaning, water heaters, and emergency plumbing.",
    "url": "https://www.epleyplumbing.com",
    "siteName": "Epley Plumbing Co.",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/some-barbells-gym_23-2147671941.jpg",
        "alt": "Epley Plumbing Co. van in Gastonia"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Epley Plumbing Co. | Reliable Plumbers in Gastonia, NC",
    "description": "Trusted local plumbing company offering fast, affordable services in Gastonia, NC. Specializing in repairs, drain cleaning, water heaters, and emergency plumbing.",
    "images": [
      "http://img.b2bpic.net/free-photo/some-barbells-gym_23-2147671941.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
