import axios from "axios";
import React, { useEffect, useState } from "react";

interface City {
  nama: string;
  id: number;
}

interface CitySelectProps {
  provinceId: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

//fetch city data from api http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=32
//then return as dropdown list
export default function CitySelect(props: CitySelectProps) {
  const [city, setCity] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${props.provinceId}`
      )
      .then((res) => {
        setCity(res.data.kota_kabupaten);
      });
  }, [props.provinceId]);
  return (
    <React.Fragment>
      <label className="text-l mb-5 font-bold">City</label>
      <select
        className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        name="city"
        onChange={props.onChange}
      >
        <option value="">Select City</option>
        {city.map((city: City) => (
          <option key={city.id} value={city.id}>
            {city.nama}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}
