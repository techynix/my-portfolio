import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Shield, 
  Network, 
  Database, 
  Server, 
  Globe, 
  Lock, 
  Monitor,
  Zap,
  Cpu,
  Cloud,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Full-Stack Development",
      icon: Code,
      skills: [
        "React & Vue.js",
        "Node.js & Python",
        "TypeScript & JavaScript",
        "RESTful APIs & GraphQL",
        "Database Design (SQL/NoSQL)",
        "Version Control (Git)"
      ]
    },
    {
      title: "Security Management",
      icon: Shield,
      skills: [
        "Network Security Protocols",
        "Authentication & Authorization",
        "Vulnerability Assessment",
        "Security Auditing",
        "Incident Response",
        "Compliance Management"
      ]
    },
    {
      title: "Networking & Infrastructure",
      icon: Network,
      skills: [
        "Network Architecture",
        "Cloud Infrastructure (AWS/Azure)",
        "DevOps & CI/CD",
        "Docker & Kubernetes",
        "Load Balancing",
        "Performance Optimization"
      ]
    }
  ];

  const technologies = [
    { name: "React", icon: Globe },
    { name: "Node.js", icon: Server },
    { name: "Python", icon: Cpu },
    { name: "PostgreSQL", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Monitor },
    { name: "Security", icon: Lock },
    { name: "Git", icon: GitBranch }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Board-certified programmer with comprehensive skills across the full technology stack
          </p>
        </div>

        {/* Main Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="group hover:shadow-elegant transition-smooth hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center text-muted-foreground">
                        <Zap className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology Icons */}
        <div className="animate-fade-up animate-delay-400">
          <h3 className="text-2xl font-semibold text-center mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div 
                  key={tech.name}
                  className="group flex flex-col items-center p-4 rounded-lg hover:bg-secondary/50 transition-smooth hover:scale-110"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-gradient-primary rounded-full mb-2 group-hover:shadow-glow transition-smooth">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-smooth">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center animate-fade-up animate-delay-500">
          <div className="bg-gradient-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Professional Certification</h3>
            <p className="text-lg text-muted-foreground mb-4">
              <span className="text-primary font-semibold">Board-Certified Programmer</span>
            </p>
            <p className="text-muted-foreground">
              Recognized expertise in software development, security protocols, and network architecture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;