'use client'
import Image from "next/image";
import { teamMembers } from "./teamMembers"
import { useState } from "react";


import LinkedIn from "./favicon.ico";
type TeamMember = {
    name: string;
    role: string;
    bio: string;
    tags: string[];
    imageUrl: string;
};

const TeamComponent = () => {
    const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
    const [isComponentHovered, setIsComponentHovered] = useState(false);

    return (
        <div
            className="w-1/2 flex flex-col justify-center items-center group relative rotate-45"
            onMouseEnter={() => setIsComponentHovered(true)}
            onMouseLeave={() => {
                setIsComponentHovered(false);
                setHoveredMember(null);
            }}
        >
            {/* Team Members Grid */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className={`grid grid-cols-2 gap-32 px-16 transition-opacity duration-300 
                    ${isComponentHovered ? 'opacity-100' : 'opacity-0'}`}>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`relative transition-all duration-300 cursor-pointer z-10
                                ${hoveredMember ? 'opacity-0' : 'opacity-100'}`}
                            onMouseEnter={(e) => {
                                e.stopPropagation();
                                setHoveredMember(member);
                            }}
                            onMouseLeave={(e) => {
                                e.stopPropagation();
                                setHoveredMember(null);
                            }}
                            style={{
                                transform: `translateY(${index === 0 || index === 1 ? '-25%' : index === 2 || index === 3 ? '25%' : '0'})`,
                                padding: '20px' // Add padding to increase hover area
                            }}
                        >
                            <Image
                                src={member.imageUrl}
                                alt={member.name}
                                width={150}
                                height={150}
                                className="rounded-full -rotate-45"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Center Content with Info Card */}
            <div className="relative -rotate-45">
                {/* Static Text */}
                <div className={`text-center transition-opacity duration-300 
                    ${hoveredMember ? 'opacity-0' : 'opacity-100'}`}>
                    <p className="text-4xl font-bold">4</p>
                    <p className="text-xl text-center">BUILDING THE FUND <br /> IN AUSTRALIA</p>
                </div>

                {/* Info Card */}
                <div
                    className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        transition-all duration-300 bg-[#1E1E1E] p-6 rounded-xl w-[400px]
                        ${hoveredMember ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                    {hoveredMember && (
                        <>
                            <div className="relative">
                                <Image
                                    src={hoveredMember.imageUrl}
                                    alt={hoveredMember.name}
                                    width={400}
                                    height={200}
                                    className="w-full h-[200px] object-cover rounded-lg mb-4"
                                />
                                <a
                                    href="#"
                                    className="absolute top-4 right-4 bg-white rounded-md p-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={LinkedIn}
                                        alt="LinkedIn"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5"
                                    />
                                </a>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-1">{hoveredMember.name}</h2>
                            <p className="text-sm font-mono text-white mb-4">{hoveredMember.role}</p>
                            <p className="text-sm text-gray-300 mb-4">{hoveredMember.bio}</p>
                            <div className="flex flex-wrap gap-2">
                                {hoveredMember.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-1 bg-white/10 rounded-full text-sm text-white"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamComponent;
