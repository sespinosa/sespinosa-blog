import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

import NavBarComponent from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "SESPINOSA",
  description: "SESPINOSA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <body className={inter.className}>
        <Providers>
          <div className="mx-auto container">
            <NavBarComponent />
            <div className="px-6">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
