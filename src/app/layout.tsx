import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "BookLore",
    template: "%s | BookLore",
  },

  description:
    "An immersive digital bookshelf built with Next.js. Browse interactive books, explore detailed pages, and experience realistic 3D animations inspired by physical books.",

  keywords: [
    "BookLore",
    "books",
    "digital bookshelf",
    "3D book",
    "Next.js",
    "React",
    "TypeScript",
    "CSS animations",
    "interactive storytelling",
    "web animation",
    "literature",
    "reading",
  ],

  authors: [
    {
      name: "Anshu Raikwar",
    },
  ],

  creator: "Anshu Raikwar",

  applicationName: "BookLore",

  category: "Books",

  metadataBase: new URL("https://anshuraikwar.github.io/BookLore"),

  openGraph: {
    title: "BookLore",
    description:
      "Explore books through an interactive 3D bookshelf experience. Browse, discover, and watch books come alive as you scroll.",
    type: "website",
    siteName: "BookLore",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "BookLore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BookLore",
    description:
      "An immersive digital bookshelf with interactive 3D books and rich book pages.",
    images: ["/og-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
