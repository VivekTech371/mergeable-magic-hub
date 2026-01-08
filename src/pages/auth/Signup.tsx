import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import AuthLayout from "@/components/layout/AuthLayout";
import { 
  Github, 
  ArrowRight, 
  Shield, 
  Eye, 
  GitPullRequest,
  Lock,
  CheckCircle2,
  Star,
  Users
} from "lucide-react";
import { useState } from "react";

const Signup = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPermissions, setAcceptedPermissions] = useState(false);

  const permissions = [
    {
      icon: Eye,
      title: "Read your public profile",
      description: "Username, avatar, and public information",
    },
    {
      icon: GitPullRequest,
      title: "Create pull requests",
      description: "Submit contributions on your behalf",
    },
    {
      icon: Shield,
      title: "Read repository access",
      description: "See issues you can contribute to",
    },
  ];

  const trustSignals = [
    { icon: Users, text: "2,500+ contributors trust us" },
    { icon: Lock, text: "Bank-grade encryption" },
    { icon: Star, text: "4.9/5 rating from users" },
  ];

  return (
    <AuthLayout
      title="Join Mergeable"
      subtitle="Start your open source journey today"
    >
      <div className="space-y-6">
        {/* Trust Signals */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          {trustSignals.map((signal, index) => (
            <span key={index} className="flex items-center gap-1">
              <signal.icon className="h-3.5 w-3.5 text-success" />
              {signal.text}
            </span>
          ))}
        </div>

        {/* What is Mergeable */}
        <Card className="border-accent/20 bg-accent/5">
          <CardContent className="p-4">
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              What is Mergeable?
            </h4>
            <p className="text-sm text-muted-foreground">
              We guide complete beginners through their first open source contribution—from finding 
              an issue to submitting a pull request. No experience required.
            </p>
          </CardContent>
        </Card>

        {/* Permissions */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <Lock className="h-4 w-4 text-muted-foreground" />
            GitHub Permissions Required
          </h4>
          <div className="space-y-2">
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
        <div className="space-y-3 p-4 rounded-lg bg-muted/30 border border-border">
          <div className="flex items-start gap-3">
            <Checkbox
              id="permissions"
              checked={acceptedPermissions}
              onCheckedChange={(checked) => setAcceptedPermissions(checked as boolean)}
              className="mt-0.5"
            />
            <label htmlFor="permissions" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
              I understand and accept the GitHub permissions listed above
            </label>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="terms"
              checked={acceptedTerms}
              onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
              className="mt-0.5"
            />
            <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
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
            Create Account with GitHub
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>

        {/* Security Note */}
        <p className="text-xs text-center text-muted-foreground">
          <Lock className="h-3 w-3 inline mr-1" />
          Your data is encrypted and we never store your GitHub password
        </p>

        {/* Already have account */}
        <div className="pt-4 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-accent font-medium hover:underline inline-flex items-center gap-1">
              Sign in <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
