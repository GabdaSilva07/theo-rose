import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import {ThemeProvider} from "@/components/theme-provider/theme-provider";
import React from "react";
import {Navbar} from "@/components/Navbar/Navbar";


const lato = Lato({weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
        {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
