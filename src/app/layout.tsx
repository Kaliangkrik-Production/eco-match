import "./globals.css";
import { Inter } from "@next/font/google";
import NavBar from "@/components/NavBar";
import SupabaseListener from "../components/supabase-listener";
import SupabaseProvider from "../components/supabase-provider";
import { createClient } from "../utils/supabase-server";

const inter = Inter({ subsets: ["latin"] });

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }: any) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
