"use client";

import { useSupabase } from "@/components/supabase-provider";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Signup() {
  const { supabase } = useSupabase();
  const md5 = require("md5");
  const [tosAgreed, setTosAgreed] = useState(false);
  const handleSignup = async (event: any) => {
    event.preventDefault();
    try {
      if (event.target.email.value == "") {
        console.log("Please enter your email");
        throw new Error("Please enter your email");
      }
      if (event.target.password.value == "") {
        console.log("Please enter your password");
        throw new Error("Please enter your password");
      }
      if (event.target.confirmPassword.value == "") {
        console.log("Please confirm your password");
        throw new Error("Please confirm your password");
      }
      if (event.target.password.value != event.target.confirmPassword.value) {
        console.log("Password and confirm password do not match");
        throw new Error("Password and confirm password do not match");
      }
      if (!tosAgreed) {
        console.log("Please agree to the terms of service");
        throw new Error("Please agree to the terms of service");
      }
      supabase.auth.signUp({
        email: event.target.email.value,
        password: md5(event.target.password.value),
      });
      //redirect ke login
      const router = useRouter();
      router.push("/signin");
    } catch {
      //kasih alert klo error
    }
  };
  return (
    <main className="flex h-screen w-screen items-center justify-end bg-[url('https://raw.githubusercontent.com/Kaliangkrik-Production/eco-match/main/asset/Sign-Up.png')] bg-cover bg-left">
      <div className="flex h-screen w-full flex-col items-center justify-center gap-24 rounded-l-[2rem] bg-white lg:w-1/2">
        <h1 className="text-5xl font-bold">Sign Up</h1>
        <form
          onSubmit={handleSignup}
          className="flex w-3/4 flex-col gap-5 text-xl font-semibold"
        >
          <label>Email</label>
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            type="email"
            placeholder="Email"
            id="email"
          />

          <label>Username</label>
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            type="text"
            placeholder="Username"
            id="username"
          />

          <label className="">Password</label>
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            type="password"
            placeholder="Password"
            id="password"
          />

          <label className="">Confirm Password</label>
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
          />
          <div className="flex flex-auto flex-row">
            <input
              type="checkbox"
              className="bg-[#a3e062]"
              id="agreeTOS"
              value="agreeTOS"
              name="agreeTOS"
              checked={tosAgreed}
              onChange={(e) => setTosAgreed(e.target.checked)}
            />
            <label htmlFor="agreeTOS" className="text-sm">
              By signing up, you agree to the{" "}
              <a href="/terms" className="text-[#FE7968] hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-[#FE7968] hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="h-12 rounded-lg bg-[#FFDF70] text-black duration-500 hover:bg-yellow-400"
          >
            Sign Up
          </button>
          <label>
            Already have an account?{" "}
            <a
              href="/signin"
              className="font-bold text-[#FE7968] hover:underline"
            >
              Sign In
            </a>
          </label>
        </form>
      </div>
    </main>
  );
}
