import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, GraduationCap, Brain, Shield, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "Python", "C++", "JavaScript", "TypeScript", "React", "Node.js",
    "Machine Learning", "TensorFlow", "PyTorch", "SQL", "MongoDB",
    "Docker", "AWS", "Git", "Linux", "Agile"
  ];

  const interests = [
    { icon: Brain, title: "Artificial Intelligence", description: "Machine learning and neural networks" },
    { icon: Shield, title: "Cybersecurity", description: "Secure coding and system protection" },
    { icon: Zap, title: "Software Development", description: "Full-stack web and mobile applications" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-tech-purple/10 to-tech-pink/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-tech-cyan/10 to-tech-emerald/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-tech-purple to-tech-pink bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Background Story */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Code className="mr-3 h-6 w-6 text-primary" />
              My Journey
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
              I'm a Computer Science graduate and dedicated Web and App Developer, passionate about building intuitive, 
              high-performance digital experiences across platforms. My journey began during university,
              where I discovered how code could bridge creativity and logic to solve real-world problems.
              </p>
              <p>
                With a strong foundation in computer science principles and hands-on 
                experience in various programming languages and frameworks, I enjoy 
                tackling challenges that require both technical expertise and creative thinking.
              </p>
              <p>
               
              </p>
            </div>
          </div>

          {/* Education */}
          <Card className="shadow-card hover:shadow-glow transition-all duration-500 bg-gradient-card border-0">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium">Bachelor of Science in Computer Science</h4>
                  <p className="text-muted-foreground">University Of Malawi • 2020-2024</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Relevant Coursework: Data Structures & Algorithms, Software Engineering, 
                    Database Systems, Machine Learning, Cybersecurity, Web Development, Android Development
                  </p>
                </div>
                
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Areas of Interest */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Areas of Interest</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-spring hover:scale-105 bg-gradient-card border-0 group">
                <CardContent className="p-6 text-center">
                  <div className="relative">
                    <interest.icon className="h-12 w-12 text-tech-purple mx-auto mb-4 group-hover:text-tech-pink transition-colors" />
                    <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity"></div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{interest.title}</h4>
                  <p className="text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;