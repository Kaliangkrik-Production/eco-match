import NavBar from "@/components/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar nama="ahmad" />
        {children}
      </body>
    </html>
  );
}
