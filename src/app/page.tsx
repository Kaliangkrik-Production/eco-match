import NavBar from "@/components/NavBar";

export default function Page() {
  //logic disini

  //i am here
  return (
    <main>
      <NavBar />
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
            <div className="flex flex-row items-center justify-center gap-4 pt-8 text-xs font-bold text-white md:text-sm lg:text-lg">
              <a className="rounded-lg bg-green-400 px-8 py-2">Sign In</a>
              <a className="rounded-lg bg-red-400 px-8 py-2">Sign Up</a>
            </div>
          </div>
        </div>
        <div className="collapse h-full bg-black md:visible md:w-1/2">
          ILUSTRASI
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
