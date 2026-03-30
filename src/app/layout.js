import { Header } from "@/components/header/Header";
import { NavigationMobile } from "@/components/navigation/NavigationMobile";
import { Footer } from "@/components/footer/Footer";
import { Fira_Sans, Kurale } from "next/font/google";
import { Modal } from "@/components/UI/Modal";
import { MetaPixel } from "@/libs/MetaPixel";
import { Fab } from "@/components/UI/Fab";
import { ContactData } from "@/data/contactData";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400"],
  display: "swap",
});

const kurale = Kurale({
  variable: "--font-kurale",
  subsets: ["cyrillic", "latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Naomy-клінінгова компанія",
  description:
    "Клінінгова компанія Naomy. Генеральне прибирання, прибирання після ремонту, підтримуюче прибирання, хімчистка",
  openGraph: {
    title: "Naomy-клінінгова компанія",
    description: "Професійні клінінгові послуги у Київі та області",
    url: "https://naomy-cleaning.kyiv.ua/",
    siteName: "Naomy",
    images: [
      {
        url: "https://naomy-cleaning.kyiv.ua/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Naomy clining company",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body
        className={`${firaSans.variable} ${kurale.variable} ${firaSans.className} antialiased`}
      >
        <MetaPixel />
        <div className="drawer drawer-end min-h-svh">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col min-h-screen">
            {/* Navbar and PC menu */}
            <Header />
            <main className="pt-15 flex-1">
              {/* Page content here */}
              {children}
            </main>
            <Footer />
            <Modal />
          </div>
          {/* there is mobile menu logic  */}
          <NavigationMobile />
          <Fab list={ContactData} />
        </div>
      </body>
    </html>
  );
}
