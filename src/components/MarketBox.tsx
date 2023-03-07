export default function MarketBox({ obj, cat }: any) {
  return (
    <a href={"/market/" + obj.id}>
      <div className="flex aspect-[5/6] h-[28rem] flex-col items-center justify-between rounded-lg bg-black/0 hover:bg-black/40 duration-200">
        <div
          className="aspect-[5/5] w-full rounded-lg"
          style={{
            backgroundImage: `url("${obj.pic}")`,
            backgroundSize: "cover",
          }}
        ></div>
        <h1 className="overflow-clip py-3 text-xl font-bold">{obj.name}</h1>

        {/* <h2>Rating</h2>
      <h2>Reviews</h2>
      <h3>Kategori: {cat}</h3>*/}
      </div>
    </a>
  );
}
