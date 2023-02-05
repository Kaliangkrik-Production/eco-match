import "./globals.css";
import { Inter } from "@next/font/google";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden scroll-smooth"
    >
      <head />
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
