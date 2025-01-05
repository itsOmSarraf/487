import Image from "next/image";
import favicon from "./favicon.ico"
export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#131213]">
      <nav className="w-full flex justify-between px-6 py-2 text-2xl">
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
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white"></div>
      <div className="relative w-full text-center py-4">
        <p className="text-4xl font-bold z-10 relative mt-10 bg-[#131213] p-2">TEAM</p>
      </div>
      <div className="w-full h-[calc(100vh-200px)] flex">
        <div className="w-1/2 flex flex-col justify-center items-center group relative">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Sarah Chen", role: "Principal Investor", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
                { name: "Michael Zhang", role: "Investment Director", bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." },
                { name: "David Kumar", role: "Associate", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla." },
                { name: "Emma Wilson", role: "Analyst", bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit." }
              ].map((member, index) => (
                <div key={index} className="relative cursor-pointer group/bio">
                  <Image src={favicon} alt={member.name} width={150} height={150} className="rounded-full" />
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover/bio:opacity-100 transition-opacity duration-300 bg-[#1E1E1E] p-4 rounded-lg w-[300px] z-20">
                    <p className="text-xl font-bold">{member.name}</p>
                    <p className="text-gray-400">{member.role}</p>
                    <p className="text-sm mt-2">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-4xl font-bold">4</p>
          <p className="text-xl text-center">BUILDING THE FUND <br /> IN AUSTRALIA</p>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center group relative">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Alex Thompson", role: "Portfolio Manager", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor." },
                { name: "Jessica Lee", role: "Investment Partner", bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." },
                { name: "Ryan Patel", role: "Venture Partner", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
                { name: "Maria Garcia", role: "Operating Partner", bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia." }
              ].map((member, index) => (
                <div key={index} className="relative cursor-pointer group/bio">
                  <Image src={favicon} alt={member.name} width={150} height={150} className="rounded-full" />
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover/bio:opacity-100 transition-opacity duration-300 bg-[#1E1E1E] p-4 rounded-lg w-[300px] z-20">
                    <p className="text-xl font-bold">{member.name}</p>
                    <p className="text-gray-400">{member.role}</p>
                    <p className="text-sm mt-2">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-4xl font-bold">4</p>
          <p className="text-xl text-center">SUPPORTING FOUNDERS <br /> AROUND THE WORLD</p>
        </div>
      </div>
    </div>
  );
}
