import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Shield, 
  Zap,
  Award,
  BookOpen,
  Coffee,
  Heart,
  ArrowRight
} from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: Code2, level: 95 },
    { name: "Backend Development", icon: Database, level: 90 },
    { name: "Web Design", icon: Globe, level: 85 },
    { name: "Mobile Development", icon: Smartphone, level: 80 },
    { name: "Security", icon: Shield, level: 88 },
    { name: "Performance", icon: Zap, level: 92 }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "Git", "Tailwind CSS", "Vue.js", "Express.js",
    "GraphQL", "Redis", "Kubernetes", "Jenkins"
  ];

  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Awarded Best Web Developer of the Year 2023"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Certified in 15+ cutting-edge technologies"
    },
    {
      icon: Coffee,
      title: "Dedication",
      description: "Over 10,000 hours of coding experience"
    },
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Committed to creating exceptional user experiences"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">Devisemmel</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate web developer with a mission to create exceptional digital experiences 
            that drive business success and user satisfaction.
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <Card className="border-border shadow-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">My Story</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      With over 5 years of experience in web development, I've had the privilege 
                      of working with diverse clients ranging from startups to enterprise companies. 
                      My journey began with a fascination for creating digital solutions that solve 
                      real-world problems.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I believe that great websites are not just about beautiful designs, but about 
                      creating seamless experiences that connect businesses with their customers. 
                      Every line of code I write is crafted with purpose, performance, and user 
                      experience in mind.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Core Values</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Quality over quantity in every project
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Continuous learning and innovation
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Client satisfaction and long-term partnerships
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Clean, maintainable, and scalable code
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src="/lovable-uploads/6a8f4a31-161a-4f9b-a38d-b829a270d5b0.png"
                alt="Devisemmel - Professional Profile"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
            </div>

            {/* Quick Facts */}
            <Card className="border-border shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-medium text-foreground">5+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects Completed:</span>
                    <span className="font-medium text-foreground">100+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Happy Clients:</span>
                    <span className="font-medium text-foreground">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Specialization:</span>
                    <span className="font-medium text-foreground">Full-Stack Development</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium text-foreground">Available Worldwide</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center mr-3">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="font-medium text-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-hero h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Technologies & Tools
          </h2>
          <Card className="border-border shadow-card">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Achievements & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="border-border shadow-elegant bg-gradient-subtle">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to transform your ideas into powerful digital solutions? 
                I'm here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/view">
                  <Button variant="outline" size="xl">
                    View My Portfolio
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;