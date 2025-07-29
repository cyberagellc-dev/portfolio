import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "William Averill - Web Developer Portfolio",
  description:
    "Portfolio website showcasing William Averill's web development projects and skills. Entry-level developer specializing in React, Next.js, and modern web technologies.",
  openGraph: {
    title: "William Averill - Web Developer Portfolio",
    description:
      "Portfolio website showcasing William Averill's web development projects and skills. Entry-level developer specializing in React, Next.js, and modern web technologies.",
    images: [
      {
        url: "https://res.cloudinary.com/dwcc4zkfp/image/upload/c_fill,w_1200,h_630,g_face,q_auto/v1753801058/IMG_0215_uo8khs.jpg",
        width: 1200,
        height: 630,
        alt: "William Averill - Web Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "William Averill - Web Developer Portfolio",
    description:
      "Portfolio website showcasing William Averill's web development projects and skills. Entry-level developer specializing in React, Next.js, and modern web technologies.",
    images: [
      "https://res.cloudinary.com/dwcc4zkfp/image/upload/c_fill,w_1200,h_630,g_face,q_auto/v1753801058/IMG_0215_uo8khs.jpg",
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
