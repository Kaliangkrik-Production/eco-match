import React, { useState, useEffect } from "react";
import axios from "axios";

interface Kelurahan {
  nama: string;
  id: number;
}

interface KelurahanSelectProps {
  kecamatanId: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

//fetch kelurahan data from api http://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=3274010
//then return as dropdown list
export default function KelurahanSelect(props: KelurahanSelectProps) {
  const [kelurahan, setKelurahan] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${props.kecamatanId}`
      )
      .then((res) => {
        setKelurahan(res.data.kelurahan);
      });
  }, [props.kecamatanId]);
  return (
    <React.Fragment>
      <label className="text-l mb-5 font-bold">Kelurahan</label>
      <select
        className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        name="kelurahan"
        onChange={props.onChange}
      >
        <option value="">Select Kelurahan</option>
        {kelurahan.map((kel: Kelurahan) => (
          <option key={kel.id} value={kel.id}>
            {kel.nama}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}
