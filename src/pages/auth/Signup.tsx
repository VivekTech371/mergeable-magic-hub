import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import AuthLayout from "@/components/layout/AuthLayout";
import { Github, ArrowRight, Shield, Eye, GitPullRequest } from "lucide-react";
import { useState } from "react";

const Signup = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPermissions, setAcceptedPermissions] = useState(false);

  const permissions = [
    {
      icon: Eye,
      title: "Read access to your repositories",
      description: "To show you beginner-friendly issues from repos you have access to",
    },
    {
      icon: GitPullRequest,
      title: "Create pull requests on your behalf",
      description: "So we can submit your contributions when you're ready",
    },
    {
      icon: Shield,
      title: "Read your public profile",
      description: "To display your name and avatar in the contribution flow",
    },
  ];

  return (
    <AuthLayout
      title="Join Mergeable"
      subtitle="Start your open source journey today"
    >
      <div className="space-y-6">
        {/* What is Mergeable */}
        <div className="rounded-xl bg-accent/5 border border-accent/20 p-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">What is Mergeable?</h4>
          <p className="text-sm text-muted-foreground">
            Mergeable helps complete beginners make their first open source contribution. 
            We guide you through every step—from finding an issue to submitting a pull request.
          </p>
        </div>

        {/* Permissions */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground">GitHub Permissions Required</h4>
          <div className="space-y-3">
            {permissions.map((permission) => (
              <div key={permission.title} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border">
                <div className="h-8 w-8 rounded-lg bg-background flex items-center justify-center flex-shrink-0">
                  <permission.icon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{permission.title}</p>
                  <p className="text-xs text-muted-foreground">{permission.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consent Checkboxes */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Checkbox
              id="permissions"
              checked={acceptedPermissions}
              onCheckedChange={(checked) => setAcceptedPermissions(checked as boolean)}
            />
            <label htmlFor="permissions" className="text-sm text-muted-foreground cursor-pointer">
              I understand and accept the GitHub permissions listed above
            </label>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="terms"
              checked={acceptedTerms}
              onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
            />
            <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
              I agree to the{" "}
              <Link to="/legal" className="text-accent hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/legal" className="text-accent hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
        </div>

        {/* Sign Up Button */}
        <Button 
          variant="github" 
          size="lg" 
          className="w-full" 
          disabled={!acceptedTerms || !acceptedPermissions}
          asChild
        >
          <Link to="/auth/callback">
            <Github className="h-5 w-5 mr-2" />
            Sign up with GitHub
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>

        <div className="pt-4 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-accent font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
