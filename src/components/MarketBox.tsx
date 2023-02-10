import Image from "next/image";

export default function MarketBox() {
  return (
    <div className="aspect-[3/5] h-[32rem] rounded-lg">
      <div
        className="aspect-[3/3] w-full rounded-lg"
        style={{
          backgroundImage: `url("${"https://lh5.googleusercontent.com/p/AF1QipMRNb_2IHQsB9ZXtCGYwuHh7VuDWd5uXAAIp-iN"}")`,
          backgroundSize: "cover",
        }}
      ></div>
      <h1 className="py-3 text-xl font-bold">Lorem, ipsum dolor.</h1>
      <h2>Rating</h2>
      <h2>Reviews</h2>
      <h3>Kategori</h3>
    </div>
  );
}
