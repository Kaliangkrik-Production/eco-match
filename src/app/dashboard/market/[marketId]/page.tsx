//dynamic routing
//Menampilkan market sesuai route di browser

import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter()
  const marketId = router.query.marketId

  return (
    <div>
      <div>{ marketId }</div>
    </div>
  );
}
