import "@/styles/global.css";

import { Roboto } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Header />

        <main className="page-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
