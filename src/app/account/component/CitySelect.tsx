import axios from "axios";
import React, { useEffect, useState } from "react";

//fetch city data from api http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=32
//then return as dropdown list
export default function CitySelect(props: any) {
  const [city, setCity] = useState([]);
  useEffect(() => {
    console.log(props.province);
    axios
      .get(
        `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${props.province.id}`
      )
      .then((res) => {
        setCity(res.data.kota_kabupaten);
      });
  }, [props.province.id]);
  return (
    <React.Fragment>
      <label className="text-l mb-5 font-bold">City</label>
      <select
        className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        name="city"
        onChange={props.onChange}
      >
        <option value="">Select City</option>
        {city.map((city: any) => (
          <option key={city.id} value={city}>
            {city.nama}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}
