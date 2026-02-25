import HeroContent from "@/src/components/Hero/HeroContent";
import HeroTrustCard from "@/src/components/Hero/HeroTrustCard";
import HeroVideoBg from "@/src/components/Hero/HeroVideoBg";
function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center overflow-hidden bg-slate-900">
      <HeroVideoBg />
      <HeroContent />

      {/* New Component positioned right-bottom */}
      <div className="hidden lg:block">
        <HeroTrustCard />
      </div>

      
      
    </section>
  );
}

export default Hero;
