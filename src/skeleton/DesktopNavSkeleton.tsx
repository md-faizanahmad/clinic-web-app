export function DesktopNavSkeleton() {
  return (
    <header className="hidden md:block sticky top-0 z-50 w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between animate-pulse">
        {/* Logo */}
        <div className="w-14 h-14 rounded-full bg-slate-200" />

        {/* Menu */}
        <div className="flex items-center gap-3 bg-slate-100 p-1 rounded-xl">
          <div className="w-16 h-8 bg-slate-200 rounded-lg" />
          <div className="w-20 h-8 bg-slate-200 rounded-lg" />
          <div className="w-18 h-8 bg-slate-200 rounded-lg" />
          <div className="w-20 h-8 bg-slate-200 rounded-lg" />
        </div>

        {/* Button */}
        <div className="w-28 h-10 bg-slate-200 rounded-xl" />
      </div>
    </header>
  );
}
