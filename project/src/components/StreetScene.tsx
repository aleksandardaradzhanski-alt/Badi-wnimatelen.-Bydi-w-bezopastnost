import { Car, Bike, Trees } from 'lucide-react';

export function StreetScene() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-300 via-brand-200 to-brand-100" />

      {/* Sun */}
      <div className="absolute top-6 right-12 w-14 h-14 rounded-full bg-accent-300 shadow-[0_0_60px_20px_rgba(253,224,71,0.5)] animate-float" />

      {/* Clouds */}
      <div className="absolute top-8 left-10 flex gap-1 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-16 h-6 bg-white rounded-full opacity-90" />
        <div className="w-10 h-5 bg-white rounded-full opacity-80 -mt-1" />
      </div>
      <div className="absolute top-14 left-1/2 flex gap-1 animate-float" style={{ animationDelay: '1.2s' }}>
        <div className="w-12 h-5 bg-white rounded-full opacity-80" />
      </div>

      {/* Buildings */}
      <div className="absolute bottom-[42%] left-0 right-0 flex items-end justify-center gap-2 px-4">
        <Building height={90} color="from-brand-400 to-brand-500" windows={3} />
        <Building height={70} color="from-accent-400 to-accent-500" windows={2} />
        <Building height={100} color="from-danger-400 to-danger-500" windows={4} />
        <Building height={60} color="from-brand-500 to-brand-600" windows={2} />
        <Building height={85} color="from-success-400 to-success-500" windows={3} />
      </div>

      {/* Trees */}
      <div className="absolute bottom-[40%] left-4 z-10">
        <Trees className="w-8 h-8 text-success-600" />
      </div>
      <div className="absolute bottom-[40%] right-6 z-10">
        <Trees className="w-10 h-10 text-success-600" />
      </div>

      {/* Road */}
      <div className="absolute bottom-0 left-0 right-0 h-[42%] bg-gray-700">
        {/* Road edge lines */}
        <div className="absolute top-2 left-0 right-0 h-1 bg-white/30" />
        <div className="absolute bottom-2 left-0 right-0 h-1 bg-white/30" />

        {/* Center dashed line */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-center gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-10 h-1.5 bg-accent-400 rounded-full" />
          ))}
        </div>

        {/* Crosswalk (zebra) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-7 h-full bg-white rounded-t-sm" />
          ))}
        </div>
      </div>

      {/* Traffic light */}
      <div className="absolute bottom-[38%] left-8 z-20 flex flex-col items-center">
        <div className="w-9 h-16 bg-gray-800 rounded-lg flex flex-col items-center justify-around py-1.5 shadow-xl border-2 border-gray-600">
          <div className="w-6 h-6 rounded-full bg-danger-500 shadow-[0_0_12px_4px_rgba(239,68,68,0.6)] animate-light-pulse" />
          <div className="w-6 h-6 rounded-full bg-success-500 opacity-30" />
        </div>
        <div className="w-1.5 h-10 bg-gray-700" />
        <div className="w-3 h-1.5 bg-gray-700 rounded-sm" />
      </div>

      {/* Car driving */}
      <div className="absolute bottom-[6%] left-0 z-10 animate-car-drive">
        <div className="flex items-center gap-1">
          <div className="bg-brand-600 rounded-lg px-3 py-2 shadow-xl relative">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-brand-300 rounded-sm" />
            <Car className="w-10 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Cyclist going opposite direction */}
      <div className="absolute bottom-[22%] right-0 z-10 animate-bike-ride">
        <div className="bg-accent-100 rounded-full p-1.5 shadow-lg">
          <Bike className="w-8 h-8 text-accent-700" />
        </div>
      </div>

      {/* Pedestrian waiting */}
      <div className="absolute bottom-[30%] right-12 z-10">
        <div className="w-6 h-12 flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-brand-200 border-2 border-brand-400" />
          <div className="w-5 h-7 rounded-t-full bg-brand-300 mt-0.5" />
        </div>
      </div>
    </div>
  );
}

function Building({ height, color, windows }: { height: number; color: string; windows: number }) {
  return (
    <div
      className={`bg-gradient-to-b ${color} rounded-t-lg shadow-lg flex flex-col items-center pt-2 gap-1 px-1`}
      style={{ height: `${height}px`, width: `${Math.max(36, windows * 14)}px` }}
    >
      <div className="grid grid-cols-2 gap-1 w-full place-items-center">
        {Array.from({ length: windows }).map((_, i) => (
          <div key={i} className="w-3 h-3 bg-white/70 rounded-sm" />
        ))}
      </div>
    </div>
  );
}
