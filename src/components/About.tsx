
import { User, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my professional background, education, and experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Bio Section */}
          <div className="tech-card flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-tech-blue/20 flex items-center justify-center mr-3">
                <User className="h-5 w-5 text-tech-blue" />
              </div>
              <h3 className="text-xl font-semibold">Biography</h3>
            </div>
            <p className="text-muted-foreground mb-4 flex-grow">
              I am a dedicated Network Systems Analyst with 7+ years of experience, committed to providing top-notch network solutions while continuously expanding my skills in emerging technologies like AI development.
            </p>
            <Button asChild variant="outline" className="mt-auto">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          {/* Education Section */}
          <div className="tech-card flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-tech-purple/20 flex items-center justify-center mr-3">
                <GraduationCap className="h-5 w-5 text-tech-purple" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <ul className="space-y-4 flex-grow">
              <li>
                <h4 className="font-medium">Calcutta University</h4>
                <p className="text-muted-foreground text-sm">Graduation, 2012</p>
              </li>
              <li>
                <h4 className="font-medium">CMC</h4>
                <p className="text-muted-foreground text-sm">Diploma in Computer Science, 2013</p>
              </li>
            </ul>
            <Button asChild variant="outline" className="mt-auto">
              <a href="#skills">My Skills</a>
            </Button>
          </div>
          
          {/* Experience Section */}
          <div className="tech-card flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-tech-orange/20 flex items-center justify-center mr-3">
                <Briefcase className="h-5 w-5 text-tech-orange" />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <ul className="space-y-4 flex-grow">
              <li>
                <h4 className="font-medium">Goenka Kachave LLP</h4>
                <p className="text-primary text-sm">System Administrator</p>
                <p className="text-muted-foreground text-sm">09/2024 - Present</p>
              </li>
              <li>
                <h4 className="font-medium">Uprisen Infotech Solution Pvt Ltd</h4>
                <p className="text-primary text-sm">Senior Network Administrator</p>
                <p className="text-muted-foreground text-sm">02/2023 - 04/2024</p>
              </li>
              <li>
                <h4 className="font-medium">Telco India Services OPC Pvt Ltd</h4>
                <p className="text-primary text-sm">Network Administrator</p>
                <p className="text-muted-foreground text-sm">06/2017 - 01/2023</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
