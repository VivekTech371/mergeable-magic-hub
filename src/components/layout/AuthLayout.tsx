import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { GitMerge } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyek0zNiAyNnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-primary-foreground">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <GitMerge className="h-7 w-7" />
            </div>
            <span className="text-2xl font-bold">Mergeable</span>
          </Link>

          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4">
              Your first open source contribution starts here
            </h2>
            <p className="text-lg opacity-90 mb-8">
              We break down the barriers between you and meaningful contributions. 
              No confusion, no fear—just guided success.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Find beginner-friendly issues</h4>
                  <p className="text-sm opacity-80">Curated and explained in plain English</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Get guided step-by-step</h4>
                  <p className="text-sm opacity-80">Never wonder what to do next</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Submit with confidence</h4>
                  <p className="text-sm opacity-80">Quality checks ensure your PR is ready</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold">2,500+</div>
              <div className="text-sm opacity-80">Contributors</div>
            </div>
            <div>
              <div className="text-3xl font-bold">850+</div>
              <div className="text-sm opacity-80">Merged PRs</div>
            </div>
            <div>
              <div className="text-3xl font-bold">120+</div>
              <div className="text-sm opacity-80">Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col justify-center p-8 lg:p-12 bg-background">
        <div className="mx-auto w-full max-w-md">
          {/* Mobile Logo */}
          <Link to="/" className="flex lg:hidden items-center gap-2 mb-8 justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GitMerge className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-foreground">Mergeable</span>
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">{title}</h1>
            {subtitle && (
              <p className="text-muted-foreground">{subtitle}</p>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
