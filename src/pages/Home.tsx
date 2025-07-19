import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Code, 
  Zap, 
  Shield, 
  Rocket, 
  ChevronRight, 
  Star,
  Users,
  Trophy,
  ArrowRight
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Code,
      title: "Expert Development",
      description: "Cutting-edge web solutions built with modern technologies and best practices."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that delivers exceptional user experiences across all devices."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability you can trust for your business."
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "Future-proof architecture that grows with your business needs."
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  The <span className="bg-gradient-hero bg-clip-text text-transparent">Crucial Material</span> for Website Development
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your digital presence with Devisemmel's expertise. Professional web development 
                  solutions that drive results and exceed expectations.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/view">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
                    Get In Touch
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="/lovable-uploads/6a8f4a31-161a-4f9b-a38d-b829a270d5b0.png"
                  alt="Devisemmel - Professional Web Developer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Devisemmel?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference that professional web development makes for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-subtle py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can bring your vision to life with cutting-edge web development solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Start Your Project <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="xl">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;