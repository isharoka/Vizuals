import { createFileRoute } from "@tanstack/react-router";
import { Bell, Pencil, TrendingUp, MessageSquareText, Image as ImageIcon, ChevronDown, Check } from "lucide-react";

export const Route = createFileRoute("/performance-marketing")({
  component: PerformanceMarketingPage,
});

const businesses = [
  {
    name: "Axen Opportunities",
    interactions: "2.3k",
    views: "5.9k",
    searches: "3.3k",
    logoColor: "bg-black text-white"
  },
  {
    name: "Ukigo",
    interactions: "2.8k",
    views: "9.9k",
    searches: "2.3k",
    logoColor: "bg-white text-black"
  },
  {
    name: "Raine La Pearls",
    interactions: "2k",
    views: "8.5k",
    searches: "1.9k",
    logoColor: "bg-[#e5d9c5] text-black"
  },
  {
    name: "TripWizard",
    interactions: "1.3k",
    views: "5.9k",
    searches: "3.3k",
    logoColor: "bg-white text-teal-600"
  },
  {
    name: "The Dress Code",
    interactions: "852",
    views: "2.2k",
    searches: "585",
    logoColor: "bg-white text-black"
  },
  {
    name: "Regen Healthcare",
    interactions: "958",
    views: "12k",
    searches: "5.2k",
    logoColor: "bg-black text-[#5a22d4]"
  }
];

function GoogleBusinessCard({ data }: { data: any }) {
  return (
    <div className="flex flex-col gap-2 font-sans">
      {/* Top Card */}
      <div className="bg-[#131314] rounded-2xl p-5 border border-white/5 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium text-[#e3e3e3]">Your business</h2>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
            <Bell size={16} className="text-[#c4c7c5]" />
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6 relative">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center ${data.logoColor} relative shadow-sm`}>
            {/* Logo placeholder text */}
            <span className="text-lg font-bold">{data.name.charAt(0)}</span>
            
            {/* Verified Badge */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#1a73e8] rounded-full border-2 border-[#131314] flex items-center justify-center">
              <Check size={12} className="text-white" strokeWidth={3.5} />
            </div>
          </div>
          
          <div className="flex-1 flex justify-between items-start">
            <div>
              <h3 className="text-[#e3e3e3] font-medium text-[17px] leading-tight">{data.name}</h3>
              <button className="text-[#78d9ec] text-sm mt-1 hover:underline cursor-pointer">See Business Profile</button>
            </div>
            <ChevronDown size={20} className="text-[#c4c7c5] cursor-pointer" />
          </div>
        </div>

        {/* Search Input Mockup */}
        <div className="h-14 rounded-[28px] border border-white/10 mb-6 flex items-center justify-between px-3">
           <div className="flex flex-col gap-2 w-full px-2">
              <div className="h-2 bg-white/10 w-24 rounded-full"></div>
              <div className="h-2 bg-white/10 w-48 rounded-full"></div>
           </div>
           <div className="w-9 h-9 rounded-full bg-white/10 shrink-0"></div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#004a77] text-[#78d9ec] group-hover:bg-[#005c94] transition">
              <Pencil size={18} />
            </div>
            <span className="text-[#78d9ec] text-[13px] font-medium">Edit profile</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#004a77] text-[#78d9ec] group-hover:bg-[#005c94] transition">
              <TrendingUp size={18} />
            </div>
            <span className="text-[#78d9ec] text-[13px] font-medium">Advertise</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#004a77] text-[#78d9ec] group-hover:bg-[#005c94] transition">
              <MessageSquareText size={18} />
            </div>
            <span className="text-[#78d9ec] text-[13px] font-medium">Reviews</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#004a77] text-[#78d9ec] group-hover:bg-[#005c94] transition">
              <ImageIcon size={18} />
            </div>
            <span className="text-[#78d9ec] text-[13px] font-medium">Add photo</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 pt-2 cursor-pointer group">
          <ChevronDown size={16} className="text-[#c4c7c5] group-hover:text-white transition" />
          <span className="text-[#c4c7c5] text-sm group-hover:text-white transition">More</span>
        </div>
      </div>

      {/* Bottom Performance Card */}
      <div className="bg-[#131314] rounded-2xl p-5 border border-white/5 shadow-lg">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-[#e3e3e3] text-[17px] font-medium">Performance</h3>
            <p className="text-[#c4c7c5] text-xs mt-1">From Nov 2025 to Mar 2026</p>
          </div>
          <button className="text-[#78d9ec] text-sm hover:underline cursor-pointer">See more</button>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-center flex-1">
            <div className="text-[26px] font-medium text-[#e3e3e3] mb-1">{data.interactions}</div>
            <div className="text-[#c4c7c5] text-sm">Interactions</div>
          </div>
          <div className="text-center flex-1">
            <div className="text-[26px] font-medium text-[#e3e3e3] mb-1">{data.views}</div>
            <div className="text-[#c4c7c5] text-sm">Views</div>
          </div>
          <div className="text-center flex-1">
            <div className="text-[26px] font-medium text-[#e3e3e3] mb-1">{data.searches}</div>
            <div className="text-[#c4c7c5] text-sm">Searches</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PerformanceMarketingPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] aspect-square rounded-full bg-[#5a22d4]/10 blur-[150px] pointer-events-none mix-blend-screen z-0"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-sans font-bold tracking-tighter text-[#5a22d4] mb-20 text-center drop-shadow-2xl">
          Performance
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {businesses.map((business, idx) => (
            <GoogleBusinessCard key={idx} data={business} />
          ))}
        </div>
      </div>
    </main>
  );
}
