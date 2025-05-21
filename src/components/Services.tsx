
import { Code, Globe, Network } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-tech-blue" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive user interfaces and experiences that enhance user engagement and satisfaction.",
    },
    {
      icon: <Globe className="h-10 w-10 text-tech-purple" />,
      title: "Web Design",
      description:
        "Developing responsive and visually appealing websites that effectively represent your brand and message.",
    },
    {
      icon: <Network className="h-10 w-10 text-tech-orange" />,
      title: "Network Consulting",
      description:
        "Expert advice and implementation of network infrastructure to optimize performance, security, and reliability.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional services I offer to help businesses and individuals achieve their technology goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-colors duration-300 overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
