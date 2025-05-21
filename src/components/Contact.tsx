
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Github, Globe } from "lucide-react";
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "info@fogi.live",
      link: "mailto:info@fogi.live",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+91 6290403092",
      link: "tel:+916290403092",
    },
    {
      icon: <Github className="h-5 w-5 text-primary" />,
      title: "GitHub",
      value: "github.com/fogi2025",
      link: "https://github.com/fogi2025",
    },
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      title: "Website",
      value: "www.fogi.live",
      link: "https://www.fogi.live",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, questions, or just to say hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-card hover:border-primary transition-all duration-300"
                >
                  <div className="flex items-center mb-2">
                    {item.icon}
                    <span className="ml-2 font-medium">{item.title}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </a>
              ))}
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h4 className="font-semibold mb-4">Got a project in mind?</h4>
              <p className="text-muted-foreground mb-4">
                I'm open to discussing new projects and opportunities. Let's create something amazing together.
              </p>
              <Button asChild>
                <a href="#contact">Start a Conversation</a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-secondary"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-secondary"
                  />
                </div>
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-secondary"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] bg-secondary border-secondary"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
