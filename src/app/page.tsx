import Navbar from "./navbar";
import TeamComponent from "./team";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#131213] text-white">
      <Navbar />
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white"></div>
      <div className="relative w-full text-center py-4">
        <p className="text-[60px] font-bold z-10 relative bg-[#131213] p-2">TEAM</p>
      </div>
      <div className="w-full h-[calc(100vh-280px)] flex">
        <TeamComponent />
        <TeamComponent />
      </div>
    </div>
  );
}
