//dynamic routing
//Menampilkan market sesuai route di browser

export default function Page({params}: any) {

  return (
    <div>
      <div>{ params.marketId }</div>
    </div>
  );
}
