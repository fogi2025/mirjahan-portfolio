
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Abstract decoration elements */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-tech-blue/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-tech-purple/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <div className="inline-block bg-secondary rounded-full px-4 py-2 text-sm">
            <span>Network Systems Analyst & AI Developer</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hello, I'm <span className="text-tech-blue">Sk Mirjahan Ali</span>
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Specializing in network administration, system management, and cutting-edge AI projects.
            Delivering innovative solutions for complex networking challenges.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#portfolio">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </div>
          
          <div className="flex gap-6 items-center pt-4">
            <a 
              href="https://github.com/fogi2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            
            <a 
              href="mailto:info@fogi.live" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            
            <div className="text-sm text-muted-foreground">
              <a href="#contact" className="underline hover:text-foreground transition-colors">
                info@fogi.live
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end">
          {/* Profile image with decorative elements */}
          <div className="relative z-10">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-tech-blue/20">
              {/* This is a placeholder for the profile picture */}
              <div className="w-full h-full bg-secondary flex items-center justify-center text-2xl">
                SK
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-88 md:h-88 rounded-full border-2 border-dashed border-tech-orange/20"></div>
          <div className="absolute top-0 right-0 w-16 h-16 bg-tech-purple/20 rounded-full blur-sm"></div>
          <div className="absolute bottom-0 left-8 w-12 h-12 bg-tech-orange/20 rounded-full blur-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
