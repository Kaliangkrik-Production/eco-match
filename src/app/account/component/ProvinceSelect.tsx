import React, { useState, useEffect } from "react";
import axios from "axios";

interface Province {
  nama: string;
  id: number;
}

interface ProvinceSelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

//fetch province data from api http://dev.farizdotid.com/api/daerahindonesia/provinsi
//then return as dropdown list
export default function ProvinceSelect(props: ProvinceSelectProps) {
  const [province, setProvince] = useState([]);
  useEffect(() => {
    axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
      .then((res) => {
        setProvince(res.data.provinsi);
      });
  }, []);
  return (
    <React.Fragment>
      <label className="text-l mb-5 font-bold">Province</label>
      <select
        className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        name="province"
        onChange={props.onChange}
      >
        <option value="">Select Province</option>
        {province.map((prov: Province) => (
          <option key={prov.id} value={prov.id}>
            {prov.nama}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}
