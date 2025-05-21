
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  url: string;
  description: string;
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Fogi-GPT",
      category: "AI",
      image: "/placeholder.svg",
      url: "https://www.fogi.live",
      description: "Custom ChatGPT implementation with advanced features",
    },
    {
      id: 2,
      title: "Fogi-AI",
      category: "AI",
      image: "/placeholder.svg",
      url: "https://ai.fogi.live",
      description: "Full-strength Language Model (LM) platform",
    },
    {
      id: 3,
      title: "Multi-Tools",
      category: "Web",
      image: "/placeholder.svg",
      url: "https://tools.fogi.live",
      description: "Comprehensive project tools website",
    },
  ];

  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-tech-blue/10 to-transparent rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-tech-purple/10 to-transparent rounded-full blur-[80px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto mb-4 rounded"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcase of my notable projects and achievements in AI development and network systems
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={{
                hidden: { y: 20, opacity: 0 },
                show: { y: 0, opacity: 1 }
              }}
            >
              <Card className="overflow-hidden group bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-secondary/50">
                    <span className="font-medium text-lg">{project.title}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/80 to-tech-purple/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </div>
                <CardContent className="pt-6 flex-grow">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-tech-blue/20 text-tech-blue mb-3">{project.category}</div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="border-t border-border/50 pt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-tech-blue hover:underline inline-flex items-center group"
                  >
                    Visit Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
