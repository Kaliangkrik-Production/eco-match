import Image from "next/image";
import BellIcon from "@/components/icons/BellIcon";

export default function NavbarAfterLogin() {
    return (
        <div className="fixed flex h-16 w-screen flex-row items-center justify-between gap-4 font-extrabold backdrop-blur-lg">
            <div className="ml-12 flex flex-row items-center justify-between gap-8">
                <a href="/" className="h-6 w-24">
                    <Image
                        src="https://cdn.discordapp.com/attachments/1071765184126914680/1071765219652665404/EcoMatch.png"
                        alt="logo"
                        width={192}
                        height={64}
                    />
                </a>
                {/* HOME, ABOUT, MARKET, MAP */}
                <a href="/home">HOME</a>
                <a href="/about">ABOUT</a>
                <a href="/market">MARKET</a>
                <a href="/map">MAP</a>
            </div>
            <div className="mr-12 flex flex-row items-center justify-center gap-4">
                <BellIcon className=""/>
                <label className="text-black text-xl">Nama</label>
            </div>
        </div>
    );
}
