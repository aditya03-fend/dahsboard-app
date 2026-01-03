import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: "Dashboard App | Product Management Demo",
  description:
    "A product dashboard demo built with Next.js and TypeScript, featuring product listing, search, pagination, and a clean UI. Created for frontend developer portfolio.",
  keywords: [
    "Dashboard App",
    "Product Dashboard",
    "Next.js",
    "TypeScript",
    "Frontend Portfolio",
    "Product List",
    "Admin Dashboard",
  ],
  authors: [{ name: "Aditya" }],
  creator: "Aditya",
  openGraph: {
    title: "Dashboard App | Product Management Demo",
    description:
      "Demo dashboard app showcasing product listing, filtering, and pagination using Next.js and TypeScript.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard App</title>
      </head>
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  )
}