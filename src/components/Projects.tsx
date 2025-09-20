import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SecureNet Dashboard",
      description: "A comprehensive network security monitoring platform built with React, Node.js, and MongoDB. Features real-time threat detection, automated response systems, and intuitive admin controls.",
      tech: ["React", "Node.js", "MongoDB", "WebSocket", "Express"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "DevFlow Automation",
      description: "Full-stack workflow automation tool for development teams. Streamlines CI/CD processes and reduces deployment time by 60% through intelligent pipeline optimization.",
      tech: ["Vue.js", "Python", "Docker", "PostgreSQL", "Redis"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "CyberShield API",
      description: "RESTful API service for enterprise security management. Handles authentication, authorization, and real-time security event processing for high-traffic applications.",
      tech: ["Django", "PostgreSQL", "Redis", "JWT", "AWS"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "CodeConnect Platform",
      description: "Social platform for developers featuring code sharing, collaborative problem-solving, and mentorship matching. Built with modern full-stack technologies.",
      tech: ["Next.js", "TypeScript", "Prisma", "tRPC", "Tailwind"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development, security, and automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group hover:shadow-elegant transition-smooth hover:scale-105 ${
                project.featured ? 'md:col-span-2' : ''
              } animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="hover:bg-primary hover:text-white transition-smooth"
                      asChild
                    >
                      <a href={project.github} aria-label="View GitHub repository">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-gradient-primary hover:shadow-glow transition-smooth text-white border-0"
                      asChild
                    >
                      <a href={project.live} aria-label="View live project">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-up animate-delay-500">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
            asChild
          >
            <a href="#">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;