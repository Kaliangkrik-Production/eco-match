import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <NavBar />
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-12 bg-[url('https://cdn.discordapp.com/attachments/1071765184126914680/1072658133006159992/Asset-About3.png')]  bg-cover bg-bottom px-48">
        <Image
          src="https://cdn.discordapp.com/attachments/1071765184126914680/1072656281401294969/Pict-About.png"
          alt="illustrasi"
          width={600}
          height={500}
        />
        <p className="text-xl">
          Masalah lingkungan yang terjadi akhir-akhir ini memicu kesadaran
          lingkungan dan meningkatkan jumlah merek produk hijau. Sayangnya,
          masyarakat kesulitan menemukan merek-merek tersebut karena kurangnya
          paparan media, baik media massa maupun media sosial. Untuk menjawab
          permasalahan yang ada, penulis merancang bisnis e-commerce EcoMatch
          sebagai marketplace produk hijau. EcoMatch fokus sebagai wadah yang
          mempertemukan toko produk hijau dengan konsumen, sehingga memudahkan
          transaksi produk hijau.
        </p>
      </div>
    </main>
  );
}
