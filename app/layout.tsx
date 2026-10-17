import type { Metadata } from "next";
import { Oswald, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"] });
const publicSans = Public_Sans({ variable: "--font-public", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "IRB Metallbau GmbH & Co. KG – Trocken- und Akustikbau in Vorpommern",
    template: "%s – IRB Metallbau GmbH & Co. KG",
  },
  description:
    "Trocken- und Akustikbau, Dachgeschossausbau, Systemdecken, Innentüren und bautechnischer Brandschutz. Seit 1995 termingerecht, qualitätssicher und zuverlässig in Vorpommern.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${oswald.variable} ${publicSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-2">
          Zum Inhalt springen
        </a>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
