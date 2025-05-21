
import { User, GraduationCap, Briefcase, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptLTI0LTEzaDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMjQgNmg0djFoLTR2LTF6bTAtMmgxdjVoLTF2LTV6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto mb-4 rounded"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my professional background, education, and experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Bio Section */}
          <motion.div 
            className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-8 flex flex-col shadow-lg hover:shadow-xl transition-all"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-tech-blue/20 flex items-center justify-center mr-4">
                <User className="h-6 w-6 text-tech-blue" />
              </div>
              <h3 className="text-xl font-semibold">Biography</h3>
            </div>
            <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
              I am a dedicated Network Systems Analyst with 7+ years of experience, committed to providing top-notch network solutions while continuously expanding my skills in emerging technologies like AI development.
            </p>
            <div className="mt-auto">
              <Button asChild variant="outline" className="w-full group">
                <a href="#contact" className="flex items-center justify-center">
                  Contact Me
                  <Download className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </Button>
            </div>
          </motion.div>
          
          {/* Education Section */}
          <motion.div 
            className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-8 flex flex-col shadow-lg hover:shadow-xl transition-all"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-tech-purple/20 flex items-center justify-center mr-4">
                <GraduationCap className="h-6 w-6 text-tech-purple" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <ul className="space-y-6 flex-grow">
              <li className="border-l-2 border-tech-purple pl-4 py-1">
                <h4 className="font-medium text-lg">Calcutta University</h4>
                <p className="text-tech-purple text-sm mb-1">Graduation</p>
                <p className="text-muted-foreground text-sm">2012</p>
              </li>
              <li className="border-l-2 border-tech-purple pl-4 py-1">
                <h4 className="font-medium text-lg">CMC</h4>
                <p className="text-tech-purple text-sm mb-1">Diploma in Computer Science</p>
                <p className="text-muted-foreground text-sm">2013</p>
              </li>
            </ul>
            <div className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <a href="#skills">My Skills</a>
              </Button>
            </div>
          </motion.div>
          
          {/* Experience Section */}
          <motion.div 
            className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-8 flex flex-col shadow-lg hover:shadow-xl transition-all"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-tech-orange/20 flex items-center justify-center mr-4">
                <Briefcase className="h-6 w-6 text-tech-orange" />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <ul className="space-y-4 flex-grow">
              <li className="border-l-2 border-tech-orange pl-4 py-1">
                <h4 className="font-medium text-lg">Goenka Kachave LLP</h4>
                <p className="text-tech-orange text-sm mb-1">System Administrator</p>
                <p className="text-muted-foreground text-sm">09/2024 - Present</p>
              </li>
              <li className="border-l-2 border-tech-orange pl-4 py-1">
                <h4 className="font-medium text-lg">Uprisen Infotech Solution Pvt Ltd</h4>
                <p className="text-tech-orange text-sm mb-1">Senior Network Administrator</p>
                <p className="text-muted-foreground text-sm">02/2023 - 04/2024</p>
              </li>
              <li className="border-l-2 border-tech-orange pl-4 py-1">
                <h4 className="font-medium text-lg">Telco India Services OPC Pvt Ltd</h4>
                <p className="text-tech-orange text-sm mb-1">Network Administrator</p>
                <p className="text-muted-foreground text-sm">06/2017 - 01/2023</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
