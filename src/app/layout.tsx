import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nunitoRegular = localFont({
  src: "./fonts/nunito-regular.woff",
  variable: "--font-nunito-regular",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoRegular.variable}`}>
        {children}
      </body>
    </html>
  );
}
