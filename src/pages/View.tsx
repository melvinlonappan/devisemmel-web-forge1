import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Calendar,
  User,
  Database,
  Code,
  Zap,
  Star,
  ArrowRight
} from "lucide-react";

const View = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with advanced analytics, inventory management, and seamless payment integration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      category: "Web Application",
      status: "Completed",
      client: "TechMart Inc.",
      duration: "3 months",
      icon: ShoppingCart,
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team communication, and advanced reporting features.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "Docker"],
      category: "SaaS Platform",
      status: "Completed",
      client: "ProductivePro",
      duration: "4 months",
      icon: Calendar,
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with interactive animations and optimized performance for creative professionals.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "Website",
      status: "Completed",
      client: "Creative Studio",
      duration: "1 month",
      icon: User,
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      description: "Comprehensive analytics platform with real-time data visualization, custom reports, and machine learning insights.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["Python", "Django", "React", "D3.js", "TensorFlow"],
      category: "Data Platform",
      status: "In Progress",
      client: "Analytics Corp",
      duration: "6 months",
      icon: Database,
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and advanced security features.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "AWS"],
      category: "Mobile App",
      status: "Completed",
      client: "FinTech Solutions",
      duration: "5 months",
      icon: Smartphone,
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "API Gateway System",
      description: "Scalable microservices architecture with API gateway, load balancing, and comprehensive monitoring solutions.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
      technologies: ["Node.js", "Kubernetes", "Redis", "Nginx", "Prometheus"],
      category: "Backend System",
      status: "Completed",
      client: "Enterprise Tech",
      duration: "4 months",
      icon: Code,
      link: "#",
      github: "#"
    }
  ];

  const categories = ["All", "Web Application", "SaaS Platform", "Website", "Data Platform", "Mobile App", "Backend System"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { label: "Projects Completed", value: "100+", icon: Star },
    { label: "Technologies Mastered", value: "25+", icon: Code },
    { label: "Client Satisfaction", value: "99%", icon: User },
    { label: "Performance Boost", value: "300%", icon: Zap }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-gradient-hero bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore a showcase of innovative web solutions that have helped businesses 
            achieve their digital transformation goals.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="border-border shadow-card">
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <Card key={project.id} className="border-border hover:shadow-elegant transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className="bg-background/90 backdrop-blur-sm"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Client:</span>
                        <span className="font-medium text-foreground">{project.client}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium text-foreground">{project.duration}</span>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Technologies:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button size="sm" className="flex-1">
                        <Globe className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="border-border shadow-elegant bg-gradient-subtle">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life with cutting-edge 
                web development solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="xl">
                  Download Portfolio PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default View;