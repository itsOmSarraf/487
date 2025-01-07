'use client'
import Image from "next/image";
import { useState } from "react";
import Logo from "./logo.svg"
interface NavItemProps {
    text: string;
}

const NavItem = ({ text }: NavItemProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative group cursor-pointer inline-flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Left Parenthesis - Added top-1/2 and -translate-y-1/2 for vertical centering */}
            <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 transform transition-all duration-300 ${isHovered
                    ? "-translate-x-2 opacity-100"
                    : "translate-x-2 opacity-0"
                    }`}
            >
                (
            </span>

            {/* Main Text Container - Added px-4 for better spacing around text */}
            <div className="relative overflow-hidden">
                <span className="block transition-transform duration-300 transform group-hover:-translate-y-full">
                    {text}
                </span>
                <span className="absolute top-full left-0 block transition-transform duration-300 transform group-hover:-translate-y-full">
                    {text}
                </span>
            </div>

            {/* Right Parenthesis - Added top-1/2 and -translate-y-1/2 for vertical centering */}
            <span
                className={`absolute right-0 top-1/2 -translate-y-1/2 transform transition-all duration-300 ${isHovered
                    ? "translate-x-2 opacity-100"
                    : "-translate-x-2 opacity-0"
                    }`}
            >
                )
            </span>
        </div>
    );
};

export default function Navbar() {
    return (
        <nav className="w-full flex justify-between p-8 pt-4 text-[16px]">
            <div className="w-1/2 flex gap-3">
                <Image src={Logo} alt="SSV" width={75} height={75} />
            </div>
            <div className="flex gap-6">
                {["PORTFOLIO", "TEAM", "ETHOS"].map((item) => (
                    <NavItem key={item} text={item} />
                ))}
            </div>
        </nav>
    );
}