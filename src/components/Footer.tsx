import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Nicole</h3>
            <p className="text-muted-foreground">
              Full-Stack Developer passionate about creating solutions that make work easier for humans.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a 
                href="#projects" 
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <a 
                href="mailto:hernyanchama@gmail.com"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                hernyanchama@gmail.com
              </a>
              <a 
                href="tel:+254794845323"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                +254 (794) 845-323
              </a>
              <p className="text-muted-foreground">Kenya, Nairobi</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center space-x-1 text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by Nicole © {currentYear}</span>
          </div>

          <div className="flex space-x-4">
            <a 
              href="https://github.com/techynix" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth p-2 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nicole-mogoah-a35aa4331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth p-2 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:hernyanchama@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-smooth p-2 hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;