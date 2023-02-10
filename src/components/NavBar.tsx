"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSupabase } from "./supabase-provider";

let nama: string | undefined;

export default function NavBar() {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await supabase.auth.getUser();
        setUser(data);
        console.log(data.user);
        nama = data.user?.email;
      } catch {}
    }
    fetchUser();
  }, []);

  return (
    <div className="flex h-16 w-screen flex-row items-center justify-between gap-4 font-extrabold backdrop-blur-lg">
      <div className="ml-12 flex flex-row items-center justify-between gap-8">
        <a
          href="/"
          className="h-6 w-24"
        >
          <Image
            src="https://raw.githubusercontent.com/Kaliangkrik-Production/eco-match/main/asset/EcoMatch.png"
            alt="logo"
            width={192}
            height={64}
          />
        </a>
        {/* HOME, ABOUT, MARKET, MAP */}
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/market">MARKET</a>
        <a href="/map">MAP</a>
      </div>
      {user?.user == null ? userGaAda() : userAda()}
    </div>
  );
}

function userAda() {
  return (
    <div className="mr-12 flex flex-row items-center justify-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        type="button"
        className="h-6 w-6 cursor-pointer fill-slate-700 hover:fill-[#FFDF70]"
      >
        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
      </svg>
      <div className="h-8 w-8 rounded-full bg-slate-400"></div>
      <label className="text-xl text-black">{nama}</label>
    </div>
  );
}

function userGaAda() {
  return (
    <div className="mr-12 flex flex-row items-center justify-center gap-4">
      <a
        href="/signin"
        className="rounded-lg hover:bg-gray-300"
      >
        <div className="flex h-10 w-28 items-center justify-center text-black">
          Sign In
        </div>
      </a>
      <a
        href="/signup"
        className="rounded-lg bg-[#FE7968] hover:bg-[#d04735]"
      >
        <div className="flex h-10 w-28 items-center justify-center text-white">
          Sign Up
        </div>
      </a>
    </div>
  );
}
