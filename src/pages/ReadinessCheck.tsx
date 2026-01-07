import { Link, useParams, useSearchParams } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Target,
  Shield
} from "lucide-react";
import { useState } from "react";

const ReadinessCheck = () => {
  const { issueId } = useParams();
  const [searchParams] = useSearchParams();
  const contributionType = searchParams.get("type") || "code";

  const [checks, setChecks] = useState({
    understandsTask: false,
    acceptsScope: false,
    acceptsRules: false,
  });

  const allChecked = Object.values(checks).every(Boolean);

  const issue = {
    title: "Fix typo in README documentation",
    repo: "facebook/react",
    type: contributionType,
  };

  const understandingPoints = [
    "I will fix the spelling of 'dependancies' to 'dependencies' in the README.md file",
    "This change is in the Getting Started section of the documentation",
    "No code changes are required—only text correction",
  ];

  const scopeLimits = [
    "I will only fix the specific typo mentioned",
    "I will not make any formatting changes",
    "I will not update any other content in the file",
  ];

  const maintainerRules = [
    "My commit message will follow the conventional commits format",
    "I understand this is one issue per pull request",
    "My PR will go through spell-check before submission",
  ];

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-3xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to={`/contribution-type/${issueId}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Type Selection
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">{issue.type}</Badge>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Readiness Check
          </h1>
          <p className="text-lg text-muted-foreground">
            Let's make sure you're ready to start. This reduces abandoned PRs and helps maintainers.
          </p>
        </div>

        {/* Issue Summary */}
        <Card className="mb-8 bg-muted/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Target className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{issue.title}</h3>
                <p className="text-sm text-muted-foreground">{issue.repo}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Understanding Check */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-accent" />
              I understand the task
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              {understandingPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Checkbox
                id="understands"
                checked={checks.understandsTask}
                onCheckedChange={(checked) => 
                  setChecks({ ...checks, understandsTask: checked as boolean })
                }
              />
              <label htmlFor="understands" className="text-sm font-medium cursor-pointer">
                I confirm I understand what this task requires
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Scope Check */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              I accept the scope limits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              {scopeLimits.map((limit, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <div className="h-5 w-5 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-warning">{index + 1}</span>
                  </div>
                  <span className="text-muted-foreground">{limit}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Checkbox
                id="scope"
                checked={checks.acceptsScope}
                onCheckedChange={(checked) => 
                  setChecks({ ...checks, acceptsScope: checked as boolean })
                }
              />
              <label htmlFor="scope" className="text-sm font-medium cursor-pointer">
                I will stay within these limits
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Rules Check */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-info" />
              I accept the maintainer rules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              {maintainerRules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-info flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{rule}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Checkbox
                id="rules"
                checked={checks.acceptsRules}
                onCheckedChange={(checked) => 
                  setChecks({ ...checks, acceptsRules: checked as boolean })
                }
              />
              <label htmlFor="rules" className="text-sm font-medium cursor-pointer">
                I will follow these rules
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link to={`/contribution-type/${issueId}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Link>
          </Button>
          <Button 
            variant="accent" 
            disabled={!allChecked}
            asChild
          >
            <Link to={`/workspace?issueId=${issueId}&type=${contributionType}`}>
              Start Contributing
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        {!allChecked && (
          <p className="text-center text-sm text-muted-foreground mt-4">
            Please confirm all checkboxes to continue
          </p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ReadinessCheck;
