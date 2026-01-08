import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { GitMerge, Shield, Star, Users, CheckCircle2 } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  const stats = [
    { icon: Users, value: "2,500+", label: "Contributors" },
    { icon: CheckCircle2, value: "8,000+", label: "PRs Merged" },
    { icon: Star, value: "500+", label: "Projects" },
  ];

  const testimonial = {
    quote: "Mergeable helped me overcome my fear of open source. I made my first contribution in just 20 minutes!",
    author: "Sarah Chen",
    role: "Junior Developer @ Stripe",
    avatar: "SC",
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding & Social Proof */}
      <div className="hidden lg:flex lg:w-1/2 gradient-hero relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 text-primary-foreground">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center">
              <GitMerge className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold">Mergeable</span>
          </Link>

          {/* Main Content */}
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Your First Open Source Contribution Starts Here
            </h1>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of developers who overcame their fear and made meaningful contributions to real projects.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="h-5 w-5 opacity-80" />
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <span className="text-sm opacity-70">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm italic mb-4 opacity-95">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs opacity-70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="flex items-center gap-6 text-sm opacity-80">
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4" />
              Secure OAuth
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              No password stored
            </span>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col bg-background">
        {/* Mobile Logo */}
        <div className="lg:hidden p-4 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
              <GitMerge className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Mergeable</span>
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                {title}
              </h2>
              {subtitle && (
                <p className="text-muted-foreground">{subtitle}</p>
              )}
            </div>

            {/* Children (Form Content) */}
            {children}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-muted/30">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <Link to="/legal" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/legal" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/help" className="hover:text-foreground transition-colors">
              Help
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/status" className="hover:text-foreground transition-colors">
              Status
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
