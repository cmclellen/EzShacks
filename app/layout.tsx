import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { DarkModeProvider } from "./_contexts/DarkModeContext";

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
      <DarkModeProvider>
        <body
          className={`${josefin.className} antialiased bg-surface flex flex-col h-screen text-primary px-5`}
        >
          <Header />
          <div className="flex-1 grid md:px-8 py-12">
            <main className="max-w-7xl mx-auto w-full">{children}</main>
          </div>
          <Footer />
        </body>
      </DarkModeProvider>
    </html>
  );
}
