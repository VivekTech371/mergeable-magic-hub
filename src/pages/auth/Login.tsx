import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/components/layout/AuthLayout";
import { Github, ArrowRight } from "lucide-react";

const Login = () => {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue your open source journey"
    >
      <div className="space-y-6">
        <Button variant="github" size="lg" className="w-full" asChild>
          <Link to="/auth/callback">
            <Github className="h-5 w-5 mr-2" />
            Continue with GitHub
          </Link>
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Secure OAuth Login
            </span>
          </div>
        </div>

        <div className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            By continuing, you agree to our{" "}
            <Link to="/legal" className="text-accent hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/legal" className="text-accent hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            New to Mergeable?{" "}
            <Link to="/signup" className="text-accent font-medium hover:underline inline-flex items-center gap-1">
              Create an account <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>

        <div className="rounded-lg bg-muted/50 p-4 border border-border">
          <h4 className="text-sm font-medium text-foreground mb-2">Why GitHub?</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Direct access to your repositories</li>
            <li>• One-click PR submissions</li>
            <li>• Your contributions credited to your profile</li>
          </ul>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
