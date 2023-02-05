import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Page() {
  //logic disini

  //i am here
  return (
    <main>
      <div
        className="flex h-screen w-full flex-row bg-white"
        id="home"
      >
        <div className="flex w-full flex-row items-center justify-center md:w-1/2">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl font-extrabold text-green-800 md:text-6xl lg:text-8xl">
              EcoMatch
            </h1>
            <h2 className="text-lg font-extrabold text-green-800 md:text-2xl lg:text-3xl">
              green products stores locator.
            </h2>
            <a className="rounded-lg bg-yellow-300 px-8 py-2 text-xs font-bold text-white">Register Now</a>
          </div>
        </div>
        <div className="collapse h-ful md:visible md:w-1/2 place-content-center">
          <Image src="https://cdn.discordapp.com/attachments/1071765184126914680/1071768249345265725/gunung.png" alt="illustrasi" width={1200} height={1000}/>
        </div>
      </div>
      <div
        className="h-screen w-screen bg-yellow-500"
        id="about"
      ></div>
      <div
        className="h-screen w-screen bg-green-500"
        id="market"
      ></div>
      <div
        className="h-screen w-screen bg-blue-500"
        id="map"
      ></div>
    </main>
  );
}
