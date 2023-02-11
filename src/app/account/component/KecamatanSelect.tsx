import React, { useState, useEffect } from "react";
import axios from "axios";

//fetch kecamatan data from api http://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=3274
//then return as dropdown list
export default function KecamatanSelect(props: any) {
  const [kecamatan, setKecamatan] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${props.city.id}`
      )
      .then((res) => {
        setKecamatan(res.data.kecamatan);
      });
  }, [props.city.id]);
  return (
    <React.Fragment>
      <label className="text-l mb-5 font-bold">Kecamatan</label>
      <select
        className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        name="kecamatan"
        onChange={props.onChange}
      >
        <option value="">Select Kecamatan</option>
        {kecamatan.map((kec: any) => (
          <option key={kec.id} value={kec}>
            {kec.nama}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}
