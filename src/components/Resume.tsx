import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award, Briefcase, User } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Tech Company Inc.",
      period: "Summer 2023",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on improving application performance and user experience."
    },
    {
      title: "Teaching Assistant",
      company: "University Computer Science Dept.",
      period: "2022-2024",
      description: "Assisted in teaching introductory programming courses. Conducted lab sessions and helped students with debugging and understanding core CS concepts."
    }
  ];

  const achievements = [
    "Dean's List - 6 consecutive semesters",
    "Winner - University Hackathon 2023",
    "Outstanding Student in Computer Science Award",
    "Published research paper on machine learning applications"
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            My professional experience and academic achievements
          </p>
          <Button variant="hero" size="lg">
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume (PDF)
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Experience */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Briefcase className="mr-3 h-6 w-6 text-primary" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-4">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Award className="mr-3 h-6 w-6 text-primary" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quick Overview */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <User className="mr-3 h-6 w-6 text-primary" />
              Professional Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Recent Computer Science graduate with strong foundation in software development, 
              machine learning, and cybersecurity. Experienced in full-stack web development 
              using modern technologies like React, Node.js, and Python. Passionate about 
              creating innovative solutions and collaborating in team environments. 
              Seeking opportunities to apply technical skills and contribute to impactful projects 
              in the technology industry.
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in working together? Let's connect!
          </p>
          <Button 
            variant="default" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;