
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
}

const Skills = () => {
  const technicalSkills: Skill[] = [
    { name: "Asterisk", level: 90 },
    { name: "Cisco Networking", level: 85 },
    { name: "Configuration Management", level: 80 },
    { name: "Linux Administration", level: 95 },
    { name: "Network Security", level: 85 },
    { name: "Server Maintenance", level: 90 },
    { name: "VC-DIAL", level: 75 },
    { name: "Virtualization", level: 85 },
  ];

  const administrativeSkills: Skill[] = [
    { name: "IP Address Assignment", level: 95 },
    { name: "Network Administration", level: 90 },
    { name: "Network Design", level: 85 },
    { name: "Routing Protocol Setup", level: 80 },
    { name: "Security Enforcement", level: 90 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptLTI0LTEzaDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMjQgNmg0djFoLTR2LTF6bTAtMmgxdjVoLTF2LTV6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto mb-4 rounded"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized technical and administrative skills developed over 7+ years in the network systems field
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-6 flex items-center text-tech-blue">
              <span className="inline-block w-2 h-6 bg-tech-blue mr-3 rounded"></span>
              Technical Skills
            </h3>
            <motion.div 
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {technicalSkills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-tech-blue">{skill.level}%</span>
                  </div>
                  <div className="relative h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-tech-blue to-tech-purple rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Administrative Skills */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-6 flex items-center text-tech-purple">
              <span className="inline-block w-2 h-6 bg-tech-purple mr-3 rounded"></span>
              Administrative Skills
            </h3>
            <motion.div 
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {administrativeSkills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-tech-purple">{skill.level}%</span>
                  </div>
                  <div className="relative h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-tech-purple to-tech-orange rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
