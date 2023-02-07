import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Page() {
  //logic disini

  //i am here
  return (
    <main>
      <NavBar />
      <div className="flex h-screen w-full flex-row justify-center bg-white font-extrabold">
        <div className="flex w-screen flex-row items-center justify-center md:w-1/2">
          <div className="flex flex-col items-start justify-center gap-10">
            <div>
              <h1 className="text-4xl text-[#848643] md:text-6xl lg:text-8xl">
                EcoMatch
              </h1>
              <h2 className="text-lg text-[#9C9C9C] md:text-2xl lg:text-3xl">
                green products stores locator.
              </h2>
            </div>

            <a className="rounded-lg bg-[#FFDF70] text-lg text-black hover:bg-[#e8be23]">
              <div className="flex h-12 w-44 items-center justify-center">
                Register Now
              </div>
            </a>
          </div>
        </div>
        <div className="hidden h-full items-center justify-center md:visible md:flex md:w-1/2">
          <Image
            src="https://cdn.discordapp.com/attachments/1071765184126914680/1072021539458916412/landing.jpeg"
            alt="illustrasi"
            width={1200}
            height={1000}
          />
        </div>
      </div>
      <div className="h-screen w-screen bg-yellow-500" id="about"></div>
      <div className="h-screen w-screen bg-green-500" id="market"></div>
      <div className="h-screen w-screen bg-blue-500" id="map"></div>
      <Footer />
    </main>
  );
}
