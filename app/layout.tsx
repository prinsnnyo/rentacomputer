import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rentacomputer - IT Equipment Rental Solutions",
  description: "Professional IT equipment rental services for businesses and events",
  generator: 'v0.dev',
  icons: {
    icon: '/rentacomputercom_logo.jpg', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
