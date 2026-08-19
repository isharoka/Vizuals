const words = ["Irepair", "Missan Tea", "Vartoh Organic", "Tripwizard", "Ukigo", "Raine la Pearls", "Braand School", "Simple", "Bansal Graphics", "Dr.Display", "Praise", "farabari Tea", "Regen Healthcare", "Smilee Yarn", "Cuddling Bunnies", "Krishna Store", "HMC", "The Cafe", "Attira", "Neeldavid Saloon"];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border py-5">
      <div className="vz-marquee flex w-max gap-10 pr-10 font-mono text-[12px] tracking-widest text-white uppercase">
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-10">
            {word}
            <span className="text-[#5a22d4]">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}