"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { ReactNode, useEffect, useState } from "react";
import React, { Component } from "react";
import axios from "axios";

class Account extends Component {
  render(): ReactNode {
    return (
      <main>
        <NavBar />
        <div className="mb-10 flex h-full w-full flex-col items-center justify-center bg-white">
          <h1 className="mb-5 mt-16 text-4xl font-bold">User Profile</h1>
          <div className="mb-10 flex h-[70rem] w-[90%] flex-col items-center justify-center rounded-xl pb-10 shadow-2xl shadow-black">
            <div className="flex h-[30%] w-full flex-col items-center justify-center">
              <div className="flex h-[60%] w-full flex-row items-center justify-center rounded-t-xl bg-red-400" />
              <div className="relative bottom-[20%] h-20 w-20 rounded-full bg-blue-400" />
            </div>
            <div className="mt-10 grid h-[65rem] w-[95%] grid-cols-6 gap-12 rounded-md bg-teal-500 p-8">
              <div className="col-span-3 flex flex-col">
                <label className="text-l mb-5 font-bold">First Name</label>
                <input
                  className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 "
                  placeholder="Nama"
                  type="text"
                />
              </div>
              <div className="col-span-3 flex flex-col">
                <label className="text-l mb-5 font-bold">Last Name</label>
                <input
                  className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Nama"
                />
              </div>
              <div className="col-span-6 flex flex-col">
                <label className="text-l mb-5 font-bold">Email</label>
                <input
                  className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Email"
                />
              </div>
              <div className="col-span-6 flex flex-col">
                {/* DOB */}
                <label className="text-l mb-5 font-bold">Date of Birth</label>
                <input
                  className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Tanggal Lahir"
                />
              </div>
              <div className="col-span-4 flex flex-col">
                {/* Phone Number */}
                <label className="text-l mb-5 font-bold">Phone Number</label>
                <input
                  className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Nomor Telepon"
                  id="phone"
                />
              </div>
              <div className="col-span-2 flex flex-col">
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
                  </ul>
                </div>
              </div>
              <div className="col-span-6 flex flex-col">
                <label className="text-l mb-5 font-bold">Address</label>
                <input
                  className="h-20 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Alamat"
                  id="address"
                />
              </div>
              <div className="col-span-2 flex flex-col">
                <label className="text-l mb-5 font-bold">Province</label>
                <input
                  className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Provinsi"
                  id="province"
                />
              </div>
              <div className="col-span-2 flex flex-col">
                <label className="text-l mb-5 font-bold">City</label>
                <input
                  className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Kota"
                  id="city"
                />
              </div>
              <div className="col-span-2 flex flex-col">
                <label className="text-l mb-5 font-bold">Zipcode</label>
                <input
                  className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Kode Pos"
                  id="zipcode"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}
export default function Page() {
  return <Account />;
}

// export default function Page() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [provinces, setProvinces] = useState([]);
//   const [selectedProvince, setSelectedProvince] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get(
//         "http://dev.farizdotid.com/api/daerahindonesia/provinsi"
//       );
//       setProvinces(result.data.semuaprovinsi);
//     };
//     fetchData();
//   }, []);
//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelect = (province: any) => {
//     setSelectedProvince(province);
//     setIsOpen(false);
//   };
//   return (
//     <main>
//       <NavBar />
//       <div className="mb-10 flex h-full w-full flex-col items-center justify-center bg-white">
//         <h1 className="mb-5 mt-16 text-4xl font-bold">User Profile</h1>
//         <div className="mb-10 flex h-[70rem] w-[90%] flex-col items-center justify-center rounded-xl pb-10 shadow-2xl shadow-black">
//           <div className="flex h-[30%] w-full flex-col items-center justify-center">
//             <div className="flex h-[60%] w-full flex-row items-center justify-center rounded-t-xl bg-red-400" />
//             <div className="relative bottom-[20%] h-20 w-20 rounded-full bg-blue-400" />
//           </div>
//           <div className="mt-10 grid h-[65rem] w-[95%] grid-cols-6 gap-12 rounded-md bg-teal-500 p-8">
//             <div className="col-span-3 flex flex-col">
//               <label className="text-l mb-5 font-bold">First Name</label>
//               <input
//                 className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 "
//                 placeholder="Nama"
//                 type="text"
//               />
//             </div>
//             <div className="col-span-3 flex flex-col">
//               <label className="text-l mb-5 font-bold">Last Name</label>
//               <input
//                 className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
//                 placeholder="Nama"
//               />
//             </div>
//             <div className="col-span-6 flex flex-col">
//               <label className="text-l mb-5 font-bold">Email</label>
//               <input
//                 className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
//                 placeholder="Email"
//               />
//             </div>
//             <div className="col-span-6 flex flex-col">
//               {/* DOB */}
//               <label className="text-l mb-5 font-bold">Date of Birth</label>
//               <input
//                 className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
//                 placeholder="Tanggal Lahir"
//               />
//             </div>
//             <div className="col-span-4 flex flex-col">
//               {/* Phone Number */}
//               <label className="text-l mb-5 font-bold">Phone Number</label>
//               <input
//                 className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
//                 placeholder="Nomor Telepon"
//                 id="phone"
//               />
//             </div>
//             <div className="col-span-2 flex flex-col">
//               {/* Gender */}
//               <label className="text-l mb-5 font-bold">Gender</label>
//               <div className="flex h-10 flex-col items-center justify-center rounded-xl border border-gray-500">
//                 <ul className="flex flex-row items-center justify-center gap-4">
//                   <li>
//                     <div className="flex flex-row gap-2">
//                       <input
//                         id="male"
//                         type="radio"
//                         value=""
//                         name="gender-radio"
//                         className="h-4 w-4"
//                       />
//                       <label htmlFor="male">Male</label>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="flex flex-row gap-2">
//                       <input
//                         id="female"
//                         type="radio"
//                         value=""
//                         name="gender-radio"
//                         className="h-4 w-4"
//                       />
//                       <label htmlFor="female">Female</label>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-span-6 flex flex-col">
//               <label className="text-l mb-5 font-bold">Address</label>
//               <input
//                 className="h-20 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
//                 placeholder="Alamat"
//                 id="address"
//               />
//             </div>
//             <div className="col-span-2 flex flex-col">
//               <label className="text-l mb-5 font-bold">Province</label>
//               <div className="relative">
//                 <button
//                   className="focus:shadow-outline block appearance-none rounded-full border border-gray-300 bg-white py-2 px-4 font-medium leading-normal text-gray-800 focus:outline-none"
//                   onClick={handleToggle}
//                 >
//                   {selectedProvince || "Select Province"}
//                 </button>
//                 {isOpen && (
//                   <div className="absolute right-0 z-30 w-48 rounded-lg bg-white py-2 shadow-xl">
//                     {provinces.map((province) => (
//                       <button
//                         key={province.id}
//                         className="block px-4 py-2 text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
//                         onClick={() => handleSelect(province.nama)}
//                       >
//                         {province.nama}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="col-span-2 flex flex-col">
//               <label className="text-l mb-5 font-bold">City</label>
//               <input
//                 className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
//                 placeholder="Kota"
//                 id="city"
//               />
//             </div>
//             <div className="col-span-2 flex flex-col">
//               <label className="text-l mb-5 font-bold">Zipcode</label>
//               <input
//                 className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
//                 placeholder="Kode Pos"
//                 id="zipcode"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// }
