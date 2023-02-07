import Footer from "@/components/Footer";
import NavbarAfterLogin from "@/components/NavbarAfterLogin";

export default function Home() {
  return (
    <main>
      <NavbarAfterLogin />
      <div className="h-auto min-h-screen p-24">
        <div className="flex items-center justify-center">
          <input
            className="block w-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="py-24">
          <div className="flex scroll-m-10 flex-row items-start justify-start gap-8 overflow-auto whitespace-nowrap rounded-lg">
            <div className="h-96 w-full bg-black"></div>
          </div>
        </div>

        <div className="py-24">
          <div className="items-top flex flex-row justify-between">
            <h1 className="mb-8 text-2xl font-bold">Popular Market</h1>
            <a
              href="/market"
              className="text-xl"
            >
              See All
            </a>
          </div>
          <div className="flex scroll-m-10 flex-row items-start justify-start gap-8 overflow-auto whitespace-nowrap">
            <div className="aspect-video h-64 bg-black"></div>
            <div className="aspect-video h-64 bg-black"></div>
            <div className="aspect-video h-64 bg-black"></div>
            <div className="aspect-video h-64 bg-black"></div>
            <div className="aspect-video h-64 bg-black"></div>
            <div className="aspect-video h-64 bg-black"></div>
            <div className="aspect-video h-64 bg-black"></div>
          </div>
        </div>

        <div className="flex h-auto w-full flex-col py-24 lg:flex-row">
          {/*Kategori*/}
          <div className="flex h-[40rem] w-full flex-col items-center justify-between lg:w-1/4">
            <div className="items-top flex w-full flex-row justify-between">
              <h1 className="mb-8 text-2xl font-bold">Categories</h1>
              <a
                href="/categories"
                className="text-xl"
              >
                See All
              </a>
            </div>
            <div className="h-full w-full rounded-lg bg-gray-400"></div>
          </div>

          {/*Edukasi*/}
          <div className="flex h-[40rem] w-full flex-col items-center justify-between py-8 px-0 lg:w-1/2 lg:py-0 lg:px-8">
            <div className="items-top flex w-full flex-row justify-between">
              <h1 className="mb-8 text-2xl font-bold">Education</h1>
              <a
                href="/education"
                className="text-xl"
              >
                See All
              </a>
            </div>
            <div className="h-full w-full rounded-lg bg-gray-400"></div>
          </div>

          {/*Promo*/}
          <div className="flex h-[40rem] w-full flex-col items-center justify-between lg:w-1/4">
            <div className="h-full w-full rounded-lg bg-gray-400"></div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
