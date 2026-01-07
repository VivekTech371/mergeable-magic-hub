import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GitMerge, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type AuthState = "processing" | "success" | "error";

const AuthCallback = () => {
  const [state, setState] = useState<AuthState>("processing");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate OAuth callback processing
    const timer = setTimeout(() => {
      // Randomly succeed for demo purposes
      const success = Math.random() > 0.2;
      if (success) {
        setState("success");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        setState("error");
        setError("Unable to verify your GitHub credentials. Please try again.");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <GitMerge className="h-7 w-7" />
          </div>
          <span className="text-2xl font-bold text-foreground">Mergeable</span>
        </div>

        {/* Processing State */}
        {state === "processing" && (
          <div className="animate-fade-in">
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Loader2 className="h-8 w-8 text-accent animate-spin" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-3">
              Connecting to GitHub...
            </h1>
            <p className="text-muted-foreground mb-8">
              Please wait while we verify your credentials and set up your account.
            </p>
            <div className="space-y-3 text-left max-w-xs mx-auto">
              <div className="flex items-center gap-3 text-sm">
                <Loader2 className="h-4 w-4 text-accent animate-spin" />
                <span className="text-muted-foreground">Validating OAuth token...</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-4 w-4 rounded-full bg-muted" />
                <span className="text-muted-foreground">Fetching profile data...</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-4 w-4 rounded-full bg-muted" />
                <span className="text-muted-foreground">Setting up your workspace...</span>
              </div>
            </div>
          </div>
        )}

        {/* Success State */}
        {state === "success" && (
          <div className="animate-scale-in">
            <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-3">
              You're all set!
            </h1>
            <p className="text-muted-foreground mb-6">
              Redirecting you to your dashboard...
            </p>
            <div className="space-y-3 text-left max-w-xs mx-auto">
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span className="text-foreground">GitHub connected</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span className="text-foreground">Profile created</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span className="text-foreground">Workspace ready</span>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {state === "error" && (
          <div className="animate-scale-in">
            <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-3">
              Authentication Failed
            </h1>
            <p className="text-muted-foreground mb-8">
              {error}
            </p>
            <div className="space-y-3">
              <Button variant="accent" className="w-full" onClick={() => navigate("/login")}>
                Try Again
              </Button>
              <Button variant="outline" className="w-full" onClick={() => navigate("/")}>
                Back to Home
              </Button>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border text-left">
              <h4 className="text-sm font-medium text-foreground mb-2">Common issues:</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• GitHub OAuth permissions were denied</li>
                <li>• Your GitHub account may be restricted</li>
                <li>• Network connectivity issues</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthCallback;
