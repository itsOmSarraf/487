import Image from "next/image";
import favicon from "./favicon.ico"
export default function Navbar() {
    return (
        <nav className="w-full flex justify-between px-6 py-2 text-2xl mt-2">
            <div className="w-1/2 flex gap-3">
                <Image src={favicon} alt={"SSV"} width={25} height={25} />
                <p className="font-bold">SSV</p>
            </div>
            <div className="flex gap-4">
                {['PORTFOLIO', 'TEAM', 'ETHOS'].map((item) => (
                    <div key={item} className="relative group overflow-hidden cursor-pointer">
                        <span className="block transition-transform duration-300 transform group-hover:-translate-y-full">
                            {item}
                        </span>
                        <span className="absolute top-full left-0 block transition-transform duration-300 transform group-hover:-translate-y-full">
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </nav>
    )
}
