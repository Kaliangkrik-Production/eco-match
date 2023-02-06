import Image from "next/image";

export default function Signin() {
  return (
    <main className="h-screen w-screen bg-[url('https://cdn.discordapp.com/attachments/1071765184126914680/1072021538938814594/Sign-In.png')] bg-cover bg-right">
      <div className="flex h-screen w-full flex-col items-center justify-center gap-24 rounded-r-[2rem] bg-white lg:w-1/2">
        <h1 className="text-6xl font-bold">Sign In</h1>
        <div className="flex w-3/4 flex-col gap-8 text-xl font-semibold">
          <label>Username/Email</label>
          <input
            className="h-12 rounded-lg border border-black"
            type="email"
            placeholder="        Username or Email"
          />
          <label className="">Password</label>
          <input
            className="h-12 rounded-lg border border-black"
            type="password"
            placeholder="        Password"
          />
          <div className="flex flex-auto flex-row">
            <input
              type="checkbox"
              className="bg-[#a3e062]"
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
        </div>
      </div>
    </main>
  );
}
