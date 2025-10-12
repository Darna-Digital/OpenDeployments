import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="x:mx-auto x:flex x:max-w-(--nextra-content-width) x:justify-center x:py-12 x:md:justify-start x:pl-[max(env(safe-area-inset-left),1.5rem)] x:pr-[max(env(safe-area-inset-right),1.5rem)] flex flex-col gap-4">
      <HeroSection />
    </div>
  );
}
