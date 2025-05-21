
import { Code, Globe, Network, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-tech-blue" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive user interfaces and experiences that enhance user engagement and satisfaction.",
      link: "#contact"
    },
    {
      icon: <Globe className="h-10 w-10 text-tech-purple" />,
      title: "Web Design",
      description:
        "Developing responsive and visually appealing websites that effectively represent your brand and message.",
      link: "#contact"
    },
    {
      icon: <Network className="h-10 w-10 text-tech-orange" />,
      title: "Network Consulting",
      description:
        "Expert advice and implementation of network infrastructure to optimize performance, security, and reliability.",
      link: "#contact"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-tech-blue/10 to-transparent rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-tech-purple/10 to-transparent rounded-full blur-[80px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto mb-4 rounded"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional services I offer to help businesses and individuals achieve their technology goals
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-colors duration-300 overflow-hidden group h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-secondary/50 rounded-md w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter className="pt-4 pb-6">
                  <Button asChild variant="ghost" className="p-0 hover:bg-transparent text-tech-blue group">
                    <a href={service.link} className="flex items-center">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardFooter>
                <div className="h-1 w-0 bg-gradient-to-r from-tech-blue to-tech-purple group-hover:w-full transition-all duration-300"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
