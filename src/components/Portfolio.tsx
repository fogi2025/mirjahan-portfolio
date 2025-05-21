
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "lucide-react";

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
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcase of my notable projects and achievements in AI development and network systems
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group bg-card border-border hover:border-primary transition-all duration-300">
              <div className="relative h-48 overflow-hidden bg-secondary">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Project Screenshot
                </div>
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full"
                  >
                    <Link className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="text-sm text-tech-blue mb-2">{project.category}</div>
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center"
                >
                  Visit Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
