import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex h-1/4 w-screen flex-row items-center justify-center bg-[#EFEFEF]">
      <a href="/" className="h-6 w-24">
        <Image
          src="https://raw.githubusercontent.com/Kaliangkrik-Production/eco-match/main/asset/EcoMatch.png"
          alt="logo"
          width={192}
          height={64}
        />
      </a>
    </div>
  );
}
