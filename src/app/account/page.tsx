import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Page() {
  return (
    <main>
      <NavBar />
      <div className="mb-10 flex h-full w-full flex-col items-center justify-center bg-white">
        <h1 className="mb-5 mt-16 text-4xl font-bold">User Profile</h1>
        <div className="mb-10 flex h-[50rem] w-[90%] flex-col items-center justify-center rounded-xl pb-10 shadow-2xl shadow-black">
          <div className="flex h-[30%] w-full flex-col items-center justify-center">
            <div className="flex h-[60%] w-full flex-row items-center justify-center rounded-t-xl bg-red-400" />
            <div className="relative bottom-[20%] h-20 w-20 rounded-full bg-blue-400" />
          </div>
          <div className="mt-10 flex h-screen w-[95%] flex-col rounded-md bg-teal-500"></div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
