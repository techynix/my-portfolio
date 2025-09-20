import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Nicole</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-Stack Developer passionate about solving problems and making work easier for humans through programming.
          </p>
        </div>
        
        <div className="animate-fade-up animate-delay-200">
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Board-certified programmer with expertise in networking and security management. 
            I build robust, scalable solutions that bridge the gap between complex technical challenges and user-friendly experiences.
          </p>
        </div>

        <div className="animate-fade-up animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-smooth text-white border-0"
            onClick={scrollToProjects}
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
            onClick={scrollToContact}
          >
            Get In Touch
            <Mail className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="animate-fade-up animate-delay-400 flex justify-center space-x-6">
          <a 
            href="https://github.com/techynix" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth p-2 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/nicole-mogoah-a35aa4331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth p-2 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-smooth p-2 hover:scale-110"
            aria-label="Email Contact"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;