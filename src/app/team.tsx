'use client'
import Image from "next/image";
import favicon from "./favicon.ico";
import { useState } from "react";

type TeamMember = {
    name: string;
    role: string;
    bio: string;
};

const TeamComponent = () => {
    const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);

    const teamMembers = [
        { name: "Sarah Chen", role: "Principal Investor", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
        { name: "Michael Zhang", role: "Investment Director", bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." },
        { name: "David Kumar", role: "Associate", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla." },
        { name: "Emma Wilson", role: "Analyst", bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit." }
    ];

    return (
        <div className="w-1/2 flex flex-col justify-center items-center group relative rotate-45">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="grid grid-cols-2 gap-32 px-16">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`relative cursor-pointer transition-all duration-300 
                                ${hoveredMember ? 'opacity-0' : 'opacity-100'}`}
                            onMouseEnter={() => setHoveredMember(member)}
                            onMouseLeave={() => setHoveredMember(null)}
                        >
                            <Image
                                src={favicon}
                                alt={member.name}
                                width={150}
                                height={150}
                                className="rounded-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Center Content with Info Card */}
            <div className="relative -rotate-45">
                {/* Static Text */}
                <div className={`text-center transition-opacity duration-300 ${hoveredMember ? 'opacity-0' : 'opacity-100'}`}>
                    <p className="text-4xl font-bold">4</p>
                    <p className="text-xl text-center">BUILDING THE FUND <br /> IN AUSTRALIA</p>
                </div>

                {/* Info Card - Absolute positioned over the text */}
                <div
                    className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        transition-all duration-300 bg-[#1E1E1E] p-6 rounded-lg w-[350px]
                        ${hoveredMember ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                    {hoveredMember && (
                        <>
                            <p className="text-2xl font-bold">{hoveredMember.name}</p>
                            <p className="text-gray-400 text-lg">{hoveredMember.role}</p>
                            <p className="text-sm mt-3">{hoveredMember.bio}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamComponent;
