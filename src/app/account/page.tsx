"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import TheFeedNotification from "@/components/TheFeedNotification";
import React, { ReactNode, Component } from "react";
import AccountDetailTextBox from "./component/AccountDetailTextBox";
import CitySelect from "./component/CitySelect";
import KecamatanSelect from "./component/KecamatanSelect";
import KelurahanSelect from "./component/KelurahanSelect";
import ProvinceSelect from "./component/ProvinceSelect";

interface AccountState {
  province: any;
  city: any;
  kecamatan: any;
  kelurahan: any;
  user: any;
}

class Account extends Component<{}, AccountState> {
  constructor(props: any) {
    super(props);
    this.state = {
      province: {},
      city: {},
      kecamatan: {},
      kelurahan: {},
      user: {},
    };
  }

  //handle save button clicked
  handleSaveButtonClicked = () => {
    console.log("save button clicked");
  };

  handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ province: event.target.value });
  };

  handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ city: event.target.value });
  };

  handleKecamatanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ kecamatan: event.target.value });
  };

  handleKelurahanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ kelurahan: event.target.value });
  };

  render(): ReactNode {
    const { province, city, kecamatan } = this.state;
    return (
      <main>
        <NavBar />
        <div className="mb-10 flex h-full w-full flex-col items-center justify-center bg-white">
          <h1 className="mb-5 mt-16 text-4xl font-bold">User Profile</h1>
          <div className="mb-10 flex h-[85rem] w-[90%] flex-col items-center justify-center rounded-xl pb-10 shadow-2xl shadow-black">
            <div className="flex h-[30%] w-full flex-col items-center justify-center">
              <div className="flex h-[60%] w-full flex-row rounded-t-xl bg-red-400">
                <div className="flex w-full items-start justify-end">
                  {/* Edit button in top right of red border */}
                  <button className="mt-5 mr-5 flex flex-row text-xl font-bold text-black hover:text-gray-800 hover:underline">
                    {/* SVG Pencil */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      fill="currentColor"
                      className="mr-1 h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <label>Edit</label>
                  </button>
                </div>
              </div>
              <div className="relative bottom-[20%] h-20 w-20 rounded-full bg-blue-400" />
            </div>
            <div className="mt-10 grid h-[80rem] w-[95%] grid-cols-6 gap-12 rounded-md bg-teal-500 p-8">
              <div className="col-span-3 flex flex-col">
                <AccountDetailTextBox
                  labelText="First Name"
                  placeholder="First Name"
                />
              </div>
              <div className="col-span-3 flex flex-col">
                <AccountDetailTextBox
                  labelText="Last Name"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-span-6 flex flex-col">
                <AccountDetailTextBox labelText="Email" placeholder="Email" />
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
                <AccountDetailTextBox
                  labelText="Phone Number"
                  placeholder="Phone Number"
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
              <div className="col-span-3 flex flex-col">
                <ProvinceSelect onChange={this.handleProvinceChange} />
                {/* <label className="text-l mb-5 font-bold">Province</label>
                <input
                  className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Provinsi"
                  id="province"
                /> */}
              </div>
              <div className="col-span-3 flex flex-col">
                <CitySelect
                  onChange={this.handleCityChange}
                  provinceId={province}
                />
                {/* <label className="text-l mb-5 font-bold">City</label>
                <input
                  className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Kota"
                  id="city"
                /> */}
              </div>
              <div className="col-span-2 flex flex-col">
                <KecamatanSelect
                  onChange={this.handleKecamatanChange}
                  cityId={city}
                />
              </div>
              <div className="col-span-2 flex flex-col">
                <KelurahanSelect
                  kecamatanId={kecamatan}
                  onChange={this.handleKelurahanChange}
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
              <div className="col-span-1 col-start-5 flex flex-col">
                <button
                  className="h-10 w-32 rounded-lg bg-red-400 font-bold text-white hover:bg-red-700"
                  onClick={this.handleSaveButtonClicked}
                >
                  Save
                </button>
              </div>
              <div className="col-span-1 col-start-6 flex flex-col">
                <button className="h-10 w-32 rounded-lg bg-white font-bold text-black hover:bg-gray-300">
                  Cancel
                </button>
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
