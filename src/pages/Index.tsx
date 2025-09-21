import YaraNavigation from "@/components/YaraNavigation";
import YaraHero from "@/components/YaraHero";
import CycleCalendar from "@/components/CycleCalendar";
import HealthInsights from "@/components/HealthInsights";
import YaraFooter from "@/components/YaraFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <YaraNavigation />
      <main>
        <section id="home">
          <YaraHero />
        </section>
        <CycleCalendar />
        <HealthInsights />
      </main>
      <YaraFooter />
    </div>
  );
};

export default Index;