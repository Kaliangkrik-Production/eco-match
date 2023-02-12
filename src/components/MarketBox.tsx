export default function MarketBox({ obj, cat }: any) {
  return (
    <div className="aspect-[3/5] h-[32rem] rounded-lg">
      <div
        className="aspect-[3/3] w-full rounded-lg"
        style={{
          backgroundImage: `url("${obj.pic}")`,
          backgroundSize: "cover",
        }}
      ></div>
      <a href={"/market/" + obj.id}>
        <h1 className="overflow-clip py-3 text-xl font-bold">{obj.name}</h1>
      </a>

      {/* <h2>Rating</h2>
      <h2>Reviews</h2>
      <h3>Kategori: {cat}</h3>*/}
    </div>
  );
}
