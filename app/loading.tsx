export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-white/10" />
          <div className="absolute inset-0 rounded-full border-4 border-t-red-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        </div>

        {/* Brand Name */}
        <div className="flex items-center gap-1">
          <span className="font-serif text-2xl font-bold text-white">
            Fix<span className="text-red-500">Go</span>
          </span>
          <span className="text-sm text-neutral-500">Car Repair</span>
        </div>

        {/* Loading Text */}
        <p className="text-sm text-neutral-500 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}