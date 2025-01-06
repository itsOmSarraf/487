'use client'
import Image from "next/image";
import { teamMembers } from "./teamMembers"
import { useState } from "react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
type TeamMember = {
    name: string;
    role: string;
    bio: string;
    tags: string[];
    imageUrl: string;
};

const TeamComponent = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const [isComponentHovered, setIsComponentHovered] = useState(false);
    const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);

    const handleOutsideClick = () => {
        if (selectedMember) {
            setSelectedMember(null);
        }
    };

    return (
        <div
            className="w-1/2 flex flex-col justify-center items-center group relative rotate-45"
            onMouseEnter={() => setIsComponentHovered(true)}
            onMouseLeave={() => setIsComponentHovered(false)}
            onClick={handleOutsideClick}
        >
            {/* Team Members Grid */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className={`grid grid-cols-2 gap-64 px-16 transition-opacity duration-300 
                    ${isComponentHovered ? 'opacity-100' : 'opacity-0'}`}>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`relative transition-all duration-300
                                ${selectedMember ? 'opacity-0' : 'opacity-100'}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedMember(member);
                            }}
                            onMouseEnter={() => setHoveredImageIndex(index)}
                            onMouseLeave={() => setHoveredImageIndex(null)}
                        >
                            <div className="relative">
                                <Image
                                    src={member.imageUrl}
                                    alt={member.name}
                                    width={110}
                                    height={110}
                                    className={`-rotate-45 rounded-md transition-all duration-300
                                        ${hoveredImageIndex === index ? '' : 'grayscale'}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Center Content with Info Card */}
            <div className="relative -rotate-45">
                {/* Static Text */}
                <div className={`text-center transition-opacity duration-300 
                    ${selectedMember ? 'opacity-0' : 'opacity-100'}`}>
                    <p className="text-4xl font-bold">4</p>
                    <p className="text-xl text-center">BUILDING THE FUND <br /> IN AUSTRALIA</p>
                </div>

                {/* Info Card */}
                <div
                    className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        transition-all duration-300 bg-[#1E1E1E] p-6 rounded-xl w-[400px]
                        ${selectedMember ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {selectedMember && (
                        <>
                            <div className="relative">
                                <Image
                                    src={selectedMember.imageUrl}
                                    alt={selectedMember.name}
                                    width={400}
                                    height={200}
                                    className="w-full h-[200px] object-cover rounded-lg mb-4"
                                />
                            </div>
                            <div className="flex w-full justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-1 uppercase">{selectedMember.name}</h2>
                                    <p className="text-sm font-mono text-white mb-4 uppercase">{selectedMember.role}</p>
                                </div>
                                <Link
                                    href="#"
                                    className="right-4 mt-3 bg-white rounded-none w-4 h-4 flex items-center justify-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn
                                        className="w-3 h-3 text-black fill-black"
                                    />
                                </Link>
                            </div>
                            <p className="text-sm text-gray-300 mb-4">{selectedMember.bio}</p>
                            <div className="flex flex-wrap gap-2">
                                {selectedMember.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-1 bg-white rounded-md text-sm text-black "
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
