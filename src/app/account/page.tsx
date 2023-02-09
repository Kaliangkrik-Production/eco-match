import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Combobox } from "@headlessui/react";

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
          <div className="mt-10 grid h-screen w-[95%] grid-cols-2 gap-12 rounded-md bg-teal-500 p-8">
            <div className="flex flex-col">
              <label className="text-l mb-5 font-bold">First Name</label>
              <input
                className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                placeholder="Nama"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-l mb-5 font-bold">Last Name</label>
              <input
                className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Nama"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="text-l mb-5 font-bold">Email</label>
              <input
                className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Email"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              {/* DOB */}
              <label className="text-l mb-5 font-bold">Date of Birth</label>
              <input
                className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Tanggal Lahir"
              />
            </div>
            <div className="flex flex-col">
              {/* Phone Number */}
              <label className="text-l mb-5 font-bold">Phone Number</label>
              <input
                className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Nomor Telepon"
                id="phone"
              />
            </div>
            <div className="flex flex-col">
              {/* Gender */}
              <label className="text-l mb-5 font-bold">Gender</label>
              <div className="flex h-10 flex-col items-center justify-center rounded-xl border border-gray-500">
                <ul className="flex flex-row items-center justify-center gap-4">
                  <li>
                    <div className="flex flex-row gap-2">
                      <input
                        id="male"
                        type="radio"
                        value=""
                        name="gender-radio"
                        className="h-4 w-4"
                      />
                      <label htmlFor="male">Male</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-2">
                      <input
                        id="female"
                        type="radio"
                        value=""
                        name="gender-radio"
                        className="h-4 w-4"
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-2">
                      <input
                        id="none"
                        type="radio"
                        value=""
                        name="gender-radio"
                        className="h-4 w-4"
                      />
                      <label htmlFor="none">None</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
