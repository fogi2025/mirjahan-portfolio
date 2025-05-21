
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-tech-blue/10 to-transparent rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-tech-purple/10 to-transparent rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptLTI0LTEzaDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMjQgNmg0djFoLTR2LTF6bTAtMmgxdjVoLTF2LTV6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-border/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-blue"></span>
            </span>
            <span>Network Systems Analyst & AI Developer</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hello, I'm <span className="bg-gradient-to-r from-tech-blue to-tech-purple text-transparent bg-clip-text">Sk Mirjahan Ali</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Specializing in network administration, system management, and cutting-edge AI projects.
              Delivering innovative solutions for complex networking challenges.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="group">
              <a href="#portfolio" className="flex items-center">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-8">
            <a 
              href="https://github.com/fogi2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Github className="h-5 w-5 group-hover:text-tech-blue transition-colors" />
              <span className="text-sm hidden md:inline">GitHub</span>
            </a>
            
            <a 
              href="mailto:info@fogi.live" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Mail className="h-5 w-5 group-hover:text-tech-blue transition-colors" />
              <span className="text-sm">info@fogi.live</span>
            </a>
            
            <a 
              href="https://tools.fogi.live"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ExternalLink className="h-5 w-5 group-hover:text-tech-blue transition-colors" />
              <span className="text-sm hidden md:inline">tools.fogi.live</span>
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          {/* Profile image with decorative elements */}
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full blur opacity-50"></div>
            
            {/* Main circle */}
            <div className="relative z-10">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-tech-blue/20 bg-card shadow-2xl">
                {/* Profile picture placeholder */}
                <div className="w-full h-full bg-secondary flex items-center justify-center text-4xl font-bold bg-gradient-to-br from-card to-secondary">
                  <span className="bg-gradient-to-r from-tech-blue to-tech-purple text-transparent bg-clip-text">SK</span>
                </div>
              </div>
            </div>
            
            {/* Animated orbit ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+2rem)] h-[calc(100%+2rem)] rounded-full border border-dashed border-tech-blue/20 animate-[spin_20s_linear_infinite]"></div>
            
            {/* Decorative tech dots */}
            <div className="absolute top-0 right-1/4 w-6 h-6 bg-tech-blue/20 rounded-full blur-sm"></div>
            <div className="absolute bottom-1/4 right-0 w-8 h-8 bg-tech-purple/20 rounded-full blur-sm"></div>
            <div className="absolute bottom-0 left-1/4 w-10 h-10 bg-tech-orange/10 rounded-full blur-sm"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center animate-bounce">
        <div className="text-muted-foreground text-xs mb-2">Scroll Down</div>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
