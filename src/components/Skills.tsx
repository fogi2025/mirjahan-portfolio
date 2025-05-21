
import { Progress } from "@/components/ui/progress";

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

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized technical and administrative skills developed over 7+ years in the network systems field
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div className="tech-card">
            <h3 className="text-xl font-semibold mb-6 text-tech-blue">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Administrative Skills */}
          <div className="tech-card">
            <h3 className="text-xl font-semibold mb-6 text-tech-purple">Administrative Skills</h3>
            <div className="space-y-6">
              {administrativeSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
