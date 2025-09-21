import { Heart, Shield, Sparkles, Mail } from "lucide-react";

const YaraFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-gradient">Yara</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Intelligent Rhythms, Private Wellness. Your sophisticated companion for menstrual health tracking with AI-powered insights.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#calendar" className="hover:text-primary transition-smooth">
                  Cycle Tracking
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-primary transition-smooth">
                  AI Insights
                </a>
              </li>
              <li>
                <a href="#wellness" className="hover:text-primary transition-smooth">
                  Wellness Tips
                </a>
              </li>
              <li>
                <a href="#profile" className="hover:text-primary transition-smooth">
                  Personal Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy & Support */}
          <div>
            <h4 className="font-semibold mb-4">Privacy & Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Data Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@yara.health" className="hover:text-primary transition-smooth">
                  hello@yara.health
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4" />
                <span>AI Powered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Yara Health. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground">
              Made with <Heart className="inline h-4 w-4 text-primary mx-1" /> for women's wellness
            </p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary">
              Your data is encrypted and private
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default YaraFooter;