import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  GitMerge, 
  Github, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  BookOpen, 
  Shield, 
  Zap,
  Code,
  FileText,
  TestTube,
  Bug,
  MessageSquare,
  Star
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Plain English Explanations",
      description: "Every issue is explained clearly—no jargon, no confusion. Understand exactly what's expected.",
    },
    {
      icon: Code,
      title: "Browser-Based Editor",
      description: "Make changes right in your browser. No complex setup, no command line fears.",
    },
    {
      icon: Shield,
      title: "Quality Checks",
      description: "Before you submit, we verify your changes meet maintainer standards.",
    },
    {
      icon: Zap,
      title: "Step-by-Step Guidance",
      description: "Never wonder what to do next. We guide you through every step of the process.",
    },
    {
      icon: Users,
      title: "Built for Beginners",
      description: "Designed specifically for first-time contributors. No experience required.",
    },
    {
      icon: GitMerge,
      title: "Real Contributions",
      description: "Make actual contributions to real projects. Build your portfolio with genuine impact.",
    },
  ];

  const contributionTypes = [
    { icon: Code, label: "Code", color: "bg-accent" },
    { icon: FileText, label: "Documentation", color: "bg-info" },
    { icon: TestTube, label: "Tests", color: "bg-success" },
    { icon: Bug, label: "Bug Reports", color: "bg-warning" },
    { icon: MessageSquare, label: "UI Text", color: "bg-pending" },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      username: "@sarahcodes",
      avatar: "SC",
      text: "I was terrified of open source. Mergeable made my first PR feel achievable. Now I've contributed to 5 projects!",
    },
    {
      name: "Marcus Johnson",
      username: "@marcusj",
      avatar: "MJ",
      text: "The step-by-step guidance is incredible. I understood exactly what was expected at every stage.",
    },
    {
      name: "Priya Sharma",
      username: "@priyadev",
      avatar: "PS",
      text: "Finally, a tool that respects that beginners need support. My first merged PR was a life-changing moment.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-1.5">
              <Star className="h-3.5 w-3.5 mr-1.5 fill-warning text-warning" />
              Trusted by 2,500+ first-time contributors
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your First Open Source
              <span className="block text-accent">Contribution Starts Here</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop feeling overwhelmed by open source. We break down complex repositories 
              into simple, guided contributions that anyone can complete.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup">
                  <Github className="h-5 w-5 mr-2" />
                  Start with GitHub
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/explore">Explore Issues First</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>Free to use</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>No setup required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>Beginner friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Types */}
      <section className="py-16 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Multiple ways to contribute
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {contributionTypes.map((type) => (
              <div
                key={type.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
              >
                <div className={`h-8 w-8 rounded-full ${type.color} flex items-center justify-center`}>
                  <type.icon className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium text-sm">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground">
              We've removed every obstacle between you and your first merged pull request.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="group hover:shadow-elevated transition-all duration-300 border-border/50 hover:border-accent/30">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Three Steps to Your First PR
            </h2>
            <p className="text-lg text-muted-foreground">
              From complete beginner to open source contributor in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Find Your Issue",
                description: "Browse beginner-friendly issues filtered by your skills and interests. Each one is explained in plain English.",
              },
              {
                step: "02",
                title: "Make Your Changes",
                description: "Use our guided browser editor. We show you exactly which files to edit and what changes to make.",
              },
              {
                step: "03",
                title: "Submit with Confidence",
                description: "Our quality checks ensure your PR meets standards. Submit knowing maintainers will appreciate your work.",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
                )}
                <div className="relative bg-card rounded-2xl p-6 border border-border shadow-sm">
                  <div className="text-5xl font-bold text-accent/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Loved by First-Time Contributors
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.username} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.username}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Make Your Mark?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join thousands of developers who started their open source journey with Mergeable.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/signup">
              <Github className="h-5 w-5 mr-2" />
              Get Started Free
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
