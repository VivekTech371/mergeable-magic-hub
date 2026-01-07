import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Loader2,
  Shield,
  FileSearch,
  SpellCheck,
  Code2
} from "lucide-react";

type CheckStatus = "pending" | "running" | "passed" | "failed";

interface QualityCheck {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  status: CheckStatus;
  message?: string;
}

const QualityGate = () => {
  const [checks, setChecks] = useState<QualityCheck[]>([
    {
      id: "diff",
      name: "Diff Validation",
      description: "Verifying changes match expected scope",
      icon: FileSearch,
      status: "pending",
    },
    {
      id: "lint",
      name: "Linting",
      description: "Checking code style and formatting",
      icon: Code2,
      status: "pending",
    },
    {
      id: "spell",
      name: "Spell Check",
      description: "Checking for spelling errors",
      icon: SpellCheck,
      status: "pending",
    },
    {
      id: "explanation",
      name: "Explanation Quality",
      description: "Verifying commit message quality",
      icon: Shield,
      status: "pending",
    },
  ]);

  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    // Simulate running checks
    const runChecks = async () => {
      for (let i = 0; i < checks.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        
        setChecks((prev) =>
          prev.map((check, index) =>
            index === i ? { ...check, status: "running" } : check
          )
        );

        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        setChecks((prev) =>
          prev.map((check, index) =>
            index === i
              ? {
                  ...check,
                  status: "passed",
                  message: getSuccessMessage(check.id),
                }
              : check
          )
        );
      }
      setIsRunning(false);
    };

    runChecks();
  }, []);

  const getSuccessMessage = (id: string) => {
    switch (id) {
      case "diff":
        return "Changes are within expected scope";
      case "lint":
        return "No style issues found";
      case "spell":
        return "No spelling errors detected";
      case "explanation":
        return "Commit message follows conventions";
      default:
        return "Check passed";
    }
  };

  const allPassed = checks.every((c) => c.status === "passed");
  const anyFailed = checks.some((c) => c.status === "failed");
  const progress = (checks.filter((c) => c.status === "passed" || c.status === "failed").length / checks.length) * 100;

  const getStatusIcon = (status: CheckStatus) => {
    switch (status) {
      case "running":
        return <Loader2 className="h-5 w-5 text-accent animate-spin" />;
      case "passed":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "failed":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <div className="h-5 w-5 rounded-full bg-muted" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-3xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/commit-prep">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Commit
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Quality Gate
          </h1>
          <p className="text-lg text-muted-foreground">
            Running checks to ensure your contribution meets standards
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">
              {isRunning ? "Running checks..." : allPassed ? "All checks passed!" : "Checks complete"}
            </span>
            <span className="font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Checks */}
        <div className="space-y-4 mb-10">
          {checks.map((check) => (
            <Card 
              key={check.id}
              className={`transition-all ${
                check.status === "running" 
                  ? "border-accent/50 bg-accent/5" 
                  : check.status === "passed"
                  ? "border-success/30"
                  : check.status === "failed"
                  ? "border-destructive/30"
                  : ""
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <check.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground">{check.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {check.status === "passed" || check.status === "failed"
                        ? check.message
                        : check.description}
                    </p>
                  </div>
                  {getStatusIcon(check.status)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Result & Actions */}
        {!isRunning && (
          <div className="animate-fade-in">
            {allPassed ? (
              <Card className="bg-success/5 border-success/30 mb-8">
                <CardContent className="p-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Ready to Submit!
                  </h3>
                  <p className="text-muted-foreground">
                    Your contribution passed all quality checks. You can now create your pull request.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-destructive/5 border-destructive/30 mb-8">
                <CardContent className="p-6 text-center">
                  <XCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Some Checks Failed
                  </h3>
                  <p className="text-muted-foreground">
                    Please review the failed checks and make the necessary corrections.
                  </p>
                </CardContent>
              </Card>
            )}

            <div className="flex justify-between">
              <Button variant="outline" asChild>
                <Link to="/commit-prep">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Commit
                </Link>
              </Button>
              <Button variant="accent" disabled={!allPassed} asChild>
                <Link to="/create-pr">
                  Create Pull Request
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default QualityGate;
