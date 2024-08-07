"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
     <Script src="https://telegram.org/js/telegram-web-app.js"></Script>
    </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
