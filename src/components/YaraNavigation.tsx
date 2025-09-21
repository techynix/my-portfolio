import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, TrendingUp, Heart, Settings, User } from "lucide-react";

const YaraNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Calendar', id: 'calendar', icon: Calendar },
    { label: 'Insights', id: 'insights', icon: TrendingUp },
    { label: 'Wellness', id: 'wellness', icon: Heart },
    { label: 'Profile', id: 'profile', icon: User }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Elegant Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-gradient hover:scale-105 transition-luxury flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
            Yara
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-luxury relative group py-2 flex items-center gap-2"
                >
                  <IconComponent className="w-4 h-4" />
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-luxury"
              onClick={() => scrollToSection('calendar')}
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-primary hover:shadow-glow transition-luxury text-primary-foreground border-0"
              onClick={() => scrollToSection('profile')}
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-luxury"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-elegant">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex w-full items-center gap-3 text-left text-foreground hover:text-primary transition-luxury py-2"
                  >
                    <IconComponent className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10 transition-luxury justify-start"
                  onClick={() => scrollToSection('calendar')}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button 
                  size="sm"
                  className="bg-gradient-primary hover:shadow-glow transition-luxury text-primary-foreground border-0 justify-start"
                  onClick={() => scrollToSection('profile')}
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default YaraNavigation;