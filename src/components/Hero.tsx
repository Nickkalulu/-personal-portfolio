import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-tech-purple/10 via-tech-cyan/10 to-transparent animate-gradientSlow" />

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 w-32 h-32 bg-tech-cyan/30 rounded-full animate-float" />
        <div className="absolute bottom-20 right-12 w-40 h-40 bg-tech-pink/20 rounded-3xl rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="text-white animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-4">
              Hey, I'm <br />
              <span className="bg-gradient-to-r from-tech-pink to-tech-cyan bg-clip-text text-transparent animate-glow">
                Nickson Kalulu
              </span>
            </h1>

            {/* Typewriter role animation (optional if you're using Framer Motion or packages like react-simple-typewriter) */}
            <p className="text-xl lg:text-2xl mb-6 text-white/90 font-semibold">
              Web & App Developer | UI Enthusiast | Creative Coder
            </p>

            <p className="text-lg mb-8 text-white/80 leading-relaxed max-w-xl">
              Passionate about crafting intuitive user experiences and building apps that solve real-world problems through clean code and scalable design.
            </p>

            {/* Tech Skills Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["React", "Flutter", "Tailwind", "Node.js", "Firebase"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm font-medium bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="glass"
                size="lg"
                onClick={() => scrollToSection("resume")}
                className="group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 items-center">
              {[
                { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
                { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-white/80 hover:text-white transition-colors"
                >
                  <Icon className="h-6 w-6" />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 group">
              <img
                src={heroPortrait}
                alt="Professional portrait"
              className="w-72 h-72 md:w-96 md:h-96 object-cover mx-auto rounded-full shadow-lg group-hover:scale-105 transition-spring"

              />
             <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-500" />

            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-tech-purple/15 rounded-2xl backdrop-blur-sm rotate-12 animate-float" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-tech-cyan/15 rounded-full backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;
