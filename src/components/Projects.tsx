import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Student Expenses Tracker",
      description: "A mobile app that helps students track their daily expenses with ease. Built using Flutter and Firebase, it features real-time updates and a user-friendly interface.",
      technologies: ["Flutter", "Firebase", "Dart"],
      githubUrl: "https://github.com/yourusername/student-expenses-tracker",
      liveUrl: "https://play.google.com/store/apps/details?id=com.example.expensetracker", // replace with actual
      features: ["Daily expense logging", "Firebase authentication", "Real-time sync"]
    },
    {
      title: "Blood Bridge",
      description: "A cross-platform application connecting hospitals with nearby blood donors. Built with Flutter and Next.js, enabling real-time requests and donor notifications.",
      technologies: ["Flutter", "Next.js", "Firebase", "Node.js"],
      githubUrl: "https://github.com/yourusername/blood-bridge",
      liveUrl: "https://bloodbridge.app", // replace with actual
      features: ["Hospital-donor matching", "Notification system", "Cross-platform"]
    },
    {
      title: "N-TRADERS Website",
      description: "A responsive company website that showcases N-TRADERS' services and team. Built with React and styled for performance and modern aesthetics.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/yourusername/n-traders-website",
      liveUrl: "https://ntraders.netlify.app", // replace with actual
      features: ["Service showcase", "Team profiles", "Contact form"]
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
            A showcase of my technical skills and real-world problem solving
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-spring hover:scale-105 group bg-gradient-card border-0 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity blur-2xl"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between">
                  <Code2 className="h-8 w-8 text-tech-purple group-hover:text-tech-pink transition-colors mb-4" />
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity" asChild>
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
            <a href="https://github.com/Nickkalulu" target="_blank" rel="noopener noreferrer">
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
