import NavBar from "@/components/NavBar";

export default function Page() {
  return (
    <main>
      <NavBar />
      <div className="h-auto min-h-screen p-24">
        <div className="py-24">
          <div className="flex scroll-m-10 flex-row items-start justify-start gap-8 overflow-auto whitespace-nowrap rounded-lg">
            <div className="h-96 w-full bg-black"></div>
          </div>
        </div>
        <div className="h-auto min-h-screen py-24">
          <div className="flex flex-row flex-wrap items-start justify-between gap-12">
            <div className="h-96 w-72 bg-black"></div>
            <div className="h-96 w-72 bg-black"></div>
            <div className="h-96 w-72 bg-black"></div>
            <div className="h-96 w-72 bg-black"></div>
            <div className="h-96 w-72 bg-black"></div>
            <div className="h-96 w-72 bg-black"></div>
            <div className="h-96 w-72 bg-black"></div>
            <div className="h-96 w-72 bg-black"></div>
            <div className="h-96 w-72 bg-black"></div>
            <div className="h-96 w-72 bg-black"></div>
            <div className="h-96 w-72 bg-black"></div>
            <div className="h-96 w-72 bg-black"></div>
            <div className="h-96 w-72 bg-black"></div>
            <div className="h-96 w-72 bg-black"></div>
            <div className="h-96 w-72 bg-black"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
