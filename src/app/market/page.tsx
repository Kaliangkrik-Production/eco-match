"use client";
import NavBar from "@/components/NavBar";
import MarketBox from "@/components/MarketBox";
import { useSupabase } from "@/components/supabase-provider";
import { useState, useEffect } from "react";

export default function Page() {
  const { supabase } = useSupabase();
  const [markets, setMarkets] = useState<any>([]);

  useEffect(() => {
    async function fetchMarket() {
      try {
        const { data, error } = await supabase.from("markets").select("*");
        setMarkets(data);
      } catch {}
    }
    fetchMarket();
  }, []);

  return (
    <main>
      <NavBar />
      <div className="h-auto min-h-screen p-24">
        <div className="h-auto min-h-screen">
          <div className="flex flex-row flex-wrap items-start justify-center gap-12">
            {markets?.map((i: any) => (
              <MarketBox
                obj={i}
                key={i.id}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
