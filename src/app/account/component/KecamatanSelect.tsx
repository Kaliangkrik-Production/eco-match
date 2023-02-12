import React, { useState, useEffect } from "react";
import axios from "axios";

interface Kecamatan {
  nama: string;
  id: number;
}

interface KecamatanSelectProps {
  cityId: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

//fetch kecamatan data from api http://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=3274
//then return as dropdown list
export default function KecamatanSelect(props: KecamatanSelectProps) {
  const [kecamatan, setKecamatan] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${props.cityId}`
      )
      .then((res) => {
        setKecamatan(res.data.kecamatan);
      });
  }, [props.cityId]);
  return (
    <React.Fragment>
      <label className="text-l mb-5 font-bold">Kecamatan</label>
      <select
        className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        name="kecamatan"
        onChange={props.onChange}
      >
        <option value="">Select Kecamatan</option>
        {kecamatan.map((kec: Kecamatan) => (
          <option key={kec.id} value={kec.id}>
            {kec.nama}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}
