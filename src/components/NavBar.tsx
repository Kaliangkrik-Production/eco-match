import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed flex h-16 w-screen flex-row items-center justify-between gap-4 font-extrabold backdrop-blur-lg">
      <div className="ml-12 flex flex-row items-center justify-between gap-8">
        <a
          href="/"
          className="h-6 w-24"
        >
          <Image
            src="https://cdn.discordapp.com/attachments/1071765184126914680/1071765219652665404/EcoMatch.png"
            alt="logo"
            width={192}
            height={64}
          />
        </a>
        <a href="/home">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/market">MARKET</a>
        <a href="/map">MAP</a>
      </div>

      <div className="mr-12 flex flex-row items-center justify-center gap-4 text-white">
        <a
          href="/signin"
          className="rounded-lg bg-green-400"
        >
          <div className="flex h-10 w-28 items-center justify-center">
            Sign In
          </div>
        </a>
        <a
          href="/signup"
          className="rounded-lg bg-red-400"
        >
          <div className="flex h-10 w-28 items-center justify-center">
            Sign Up
          </div>
        </a>
      </div>
    </div>
  );
}
