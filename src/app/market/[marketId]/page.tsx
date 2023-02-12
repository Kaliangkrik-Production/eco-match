//dynamic routing
//Menampilkan market sesuai route di browser
"use client";

import NavBar from "@/components/NavBar";
import { useSupabase } from "@/components/supabase-provider";
import { useEffect, useState } from "react";

export default function Page({ params }: any) {
  const { supabase } = useSupabase();
  const [market, setMarket] = useState<any>();
  
  useEffect(() => {
    async function fetchMarket() {
      const temp = await supabase
        .from("markets")
        .select("*, cats(name)")
        .eq("id", params.marketId);
      console.log(temp);
      setMarket(temp);
    }
    fetchMarket();
  }, []);

  return (
    <main>
      <NavBar />
      <div className="flex h-screen w-screen flex-row items-center justify-center p-16 gap-16">
        <div className="flex h-full w-1/3 flex-col items-start justify-start gap-8">
          <div
            className="aspect-[3/4] w-full rounded-lg border-2 border-black"
            style={{
              backgroundImage: `url("${market?.data[0].pic}")`,
              backgroundSize: "cover",
            }}
          ></div>
          <h1 className="text-xl font-bold">{market?.data[0].name}</h1>
          <h1>{market?.data[0].address}</h1>
          <h1>Category: {market?.data[0].cats.name}</h1>
        </div>
        <iframe
          src={
            "https://www.google.com/maps/embed?pb=" + market?.data[0].location
          }
          className="h-full w-2/3 border-2 border-black"
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
}
