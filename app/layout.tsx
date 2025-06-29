import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | EzShacks",
    default: "Welcome | EzShacks",
  },
  description: "Where easy meets extraordinary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-surface grid grid-rows-[auto_1fr_auto] h-screen text-primary`}
      >
        <Header />
        <main className="w-full max-w-7xl mx-auto">
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
