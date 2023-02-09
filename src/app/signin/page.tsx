"use client";
import { useSupabase } from "@/components/supabase-provider";
import { useRouter } from "next/navigation";

export default function Signin() {
  const { supabase } = useSupabase();
  const md5 = require("md5");
  const router = useRouter();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    try {
      await supabase.auth.signInWithPassword({
        email: event.target.email.value,
        password: md5(event.target.password.value),
      });
      const session = supabase.auth.getUser();
      console.log(session);
      router.push("/home");
    } catch {}
  };

  return (
    <main className="h-screen w-screen bg-[url('https://raw.githubusercontent.com/Kaliangkrik-Production/eco-match/main/asset/Sign-In.png')] bg-cover bg-right">
      <div className="flex h-screen w-full flex-col items-center justify-center gap-24 rounded-r-[2rem] bg-white lg:w-1/2">
        <h1 className="text-6xl font-bold">Sign In</h1>
        <form
          onSubmit={handleLogin}
          className="flex w-3/4 flex-col gap-5 text-xl font-semibold"
        >
          <label>Email</label>
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black focus:border-blue-500 focus:ring-blue-500"
            type="email"
            placeholder="Email"
            id="email"
          />
          <label className="">Password</label>
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            type="password"
            placeholder="Password"
            id="password"
          />
          <div className="flex flex-auto flex-row">
            <input
              type="checkbox"
              className="bg-green-500"
              id="remember"
              value="remember"
              name="remember"
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button
            type="submit"
            className="h-12 rounded-lg bg-[#FFDF70] text-black duration-500 hover:bg-yellow-400"
          >
            Login
          </button>
          <label>
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-bold text-[#FE7968] hover:underline"
            >
              Sign up
            </a>
          </label>
        </form>
      </div>
    </main>
  );
}
