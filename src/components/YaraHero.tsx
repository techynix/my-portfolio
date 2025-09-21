import { Button } from "@/components/ui/button";
import { Calendar, Heart, Sparkles, Shield } from "lucide-react";

const YaraHero = () => {
  const scrollToCalendar = () => {
    document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Elegant background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse animate-delay-300" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-lg animate-pulse animate-delay-500" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Intelligent Rhythms, Private Wellness</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Yara</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Your sophisticated companion for menstrual health. Track cycles, predict patterns, and discover personalized insights powered by intelligent AI.
          </p>
        </div>
        
        <div className="animate-fade-up animate-delay-200">
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the luxury of understanding your body's rhythm with privacy-first technology and bougie wellness insights tailored just for you.
          </p>
        </div>

        <div className="animate-fade-up animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-luxury text-primary-foreground border-0 px-8 py-3"
            onClick={scrollToCalendar}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Start Tracking
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-luxury px-8 py-3"
            onClick={scrollToFeatures}
          >
            <Heart className="mr-2 h-4 w-4" />
            Explore Features
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="animate-fade-up animate-delay-400 flex justify-center items-center space-x-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Private & Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">AI Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium">Made for You</span>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default YaraHero;