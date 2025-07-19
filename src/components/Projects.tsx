import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A smart task management application that uses machine learning to predict task completion times and automatically prioritize tasks based on user behavior patterns.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/ai-task-manager",
      liveUrl: "https://ai-task-manager-demo.com",
      features: ["Natural language processing", "Predictive analytics", "Real-time collaboration"]
    },
    {
      title: "Cybersecurity Dashboard",
      description: "A comprehensive security monitoring dashboard that analyzes network traffic, detects anomalies, and provides real-time threat assessment for enterprise environments.",
      technologies: ["Python", "Django", "D3.js", "MongoDB", "Docker"],
      githubUrl: "https://github.com/yourusername/security-dashboard",
      liveUrl: "https://security-dashboard-demo.com",
      features: ["Real-time monitoring", "Threat detection", "Custom alerts"]
    },
    {
      title: "Social Learning Platform",
      description: "A collaborative learning platform where students can share knowledge, participate in coding challenges, and work on group projects with integrated video conferencing.",
      technologies: ["Node.js", "React", "Socket.io", "WebRTC", "MySQL"],
      githubUrl: "https://github.com/yourusername/social-learning",
      liveUrl: "https://social-learning-demo.com",
      features: ["Video conferencing", "Code collaboration", "Progress tracking"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-tech-purple to-tech-cyan bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving approach
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-spring hover:scale-105 group bg-gradient-card border-0 overflow-hidden relative">
              {/* Gradient overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity blur-2xl"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between">
                  <Code2 className="h-8 w-8 text-tech-purple group-hover:text-tech-pink transition-colors mb-4" />
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-medium mb-2 text-muted-foreground">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium mb-3 text-muted-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="default" size="sm" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="tech" size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;