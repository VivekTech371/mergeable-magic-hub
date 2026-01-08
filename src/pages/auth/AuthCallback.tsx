import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GitMerge, Loader2, CheckCircle2, AlertCircle, RefreshCw, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type AuthState = "processing" | "success" | "error";

interface Step {
  id: string;
  label: string;
  status: "pending" | "loading" | "complete" | "error";
}

const AuthCallback = () => {
  const [state, setState] = useState<AuthState>("processing");
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [steps, setSteps] = useState<Step[]>([
    { id: "oauth", label: "Verifying GitHub credentials", status: "loading" },
    { id: "profile", label: "Fetching your profile data", status: "pending" },
    { id: "setup", label: "Setting up your workspace", status: "pending" },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    const runAuthFlow = async () => {
      // Step 1: OAuth
      setProgress(15);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSteps(prev => prev.map(s => s.id === "oauth" ? { ...s, status: "complete" } : s));
      setSteps(prev => prev.map(s => s.id === "profile" ? { ...s, status: "loading" } : s));
      
      // Step 2: Profile
      setProgress(50);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSteps(prev => prev.map(s => s.id === "profile" ? { ...s, status: "complete" } : s));
      setSteps(prev => prev.map(s => s.id === "setup" ? { ...s, status: "loading" } : s));
      
      // Step 3: Setup
      setProgress(85);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSteps(prev => prev.map(s => s.id === "setup" ? { ...s, status: "complete" } : s));
      
      // Complete
      setProgress(100);
      setState("success");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/dashboard");
    };

    runAuthFlow();
  }, [navigate]);

  const getStepIcon = (status: Step["status"]) => {
    switch (status) {
      case "complete":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "loading":
        return <Loader2 className="h-5 w-5 text-accent animate-spin" />;
      case "error":
        return <AlertCircle className="h-5 w-5 text-destructive" />;
      default:
        return <div className="h-5 w-5 rounded-full border-2 border-muted" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
            <GitMerge className="h-7 w-7 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground">Mergeable</span>
        </Link>

        <Card>
          <CardContent className="p-8">
            {/* Processing/Success State */}
            {(state === "processing" || state === "success") && (
              <div className="text-center">
                {/* Icon */}
                <div className={`h-16 w-16 rounded-full ${state === "success" ? "bg-success/10" : "bg-accent/10"} flex items-center justify-center mx-auto mb-6`}>
                  {state === "success" ? (
                    <CheckCircle2 className="h-8 w-8 text-success" />
                  ) : (
                    <Loader2 className="h-8 w-8 text-accent animate-spin" />
                  )}
                </div>

                {/* Title */}
                <h1 className="text-xl font-bold text-foreground mb-2">
                  {state === "success" ? "You're all set!" : "Connecting to GitHub..."}
                </h1>
                <p className="text-muted-foreground mb-6">
                  {state === "success" 
                    ? "Redirecting to your dashboard..." 
                    : "Please wait while we set up your account."}
                </p>

                {/* Progress */}
                <div className="mb-6">
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">{progress}% complete</p>
                </div>

                {/* Steps */}
                <div className="space-y-3 text-left">
                  {steps.map((step) => (
                    <div 
                      key={step.id}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                        step.status === "loading" 
                          ? "bg-accent/10 border border-accent/30" 
                          : step.status === "complete"
                          ? "bg-success/5"
                          : "bg-muted/30"
                      }`}
                    >
                      {getStepIcon(step.status)}
                      <span className={`text-sm ${
                        step.status === "complete" || step.status === "loading" 
                          ? "text-foreground" 
                          : "text-muted-foreground"
                      }`}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Error State */}
            {state === "error" && (
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="h-8 w-8 text-destructive" />
                </div>
                <h1 className="text-xl font-bold text-foreground mb-2">
                  Authentication Failed
                </h1>
                <p className="text-muted-foreground mb-6">
                  {error || "Something went wrong. Please try again."}
                </p>

                <div className="space-y-3">
                  <Button variant="accent" className="w-full" asChild>
                    <Link to="/login">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Try Again
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/">Back to Home</Link>
                  </Button>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border text-left">
                  <h4 className="text-sm font-medium text-foreground mb-2">Common issues:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• GitHub OAuth permissions were denied</li>
                    <li>• Your GitHub account may be restricted</li>
                    <li>• Network connectivity issues</li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Security Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Shield className="h-3.5 w-3.5 text-success" />
            Secure OAuth 2.0 connection
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;
