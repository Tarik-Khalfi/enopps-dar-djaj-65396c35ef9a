import { Footer, Nav } from "@/components";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
});
const bernier = localFont({
  src: "../public/assets/font/BERNIER™ Regular.ttf",
});

export const metadata = {
  title: "Dar Djaj - Spécialité poulet",
  description:
    "Votre Restaurant Unique Et Authentique Venez decouvrir le goût inmensurable de notre cuisine Car la rôtisserie de qualité, c'est notre métier.",
  keywords: [
    "Fast-food",
    "Snack",
    "Restaurant",
    "Poulet ",
    "Cuisine",
    "Rotisserie",
    "Rotisserie  Chicken",
    "Poulet braise",
    "Sauce",
    "Poulet  rôtie",
    "menu",
    "sauce",
    "agadir",
    "maroc",
    "Morocco",
    "chicken agadir",
    "poulet agadir",
    "restaurant poulet agadir",
    "snack poulet agadir",
    "rotiserrie agadir",
  ],
  authors: [
    {
      name: "Dar D'jaj",
      url: "https://dardjaj.ma/",
    },
  ],
  creator: "enopps",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://dardjaj.ma/",
    title: "Dar Djaj - Spécialité poulet ",
    description:
      "Votre Restaurant Unique Et Authentique Venez decouvrir le goût inmensurable de notre cuisine Car la rôtisserie de qualité, c'est notre métier.",
    siteName: "DarD'jaj",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${roboto.variable} ${poppins.variable} ${bernier.variable} bg-[#0B0E11] text-white`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
