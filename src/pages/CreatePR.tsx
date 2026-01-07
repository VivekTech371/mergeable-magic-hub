import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  GitPullRequest,
  CheckCircle2,
  FileText,
  ExternalLink,
  Rocket
} from "lucide-react";

const CreatePR = () => {
  const [prTitle, setPrTitle] = useState("docs(readme): fix typo in dependencies word");
  const [prDescription, setPrDescription] = useState(`## Summary

Fixed a typo in the README.md file where "dependancies" was misspelled. Changed it to the correct spelling "dependencies".

## Changes Made

- Fixed spelling of "dependencies" in the Getting Started section

## Checklist

- [x] I have read the contributing guidelines
- [x] My changes follow the project's code style
- [x] I have tested my changes locally
- [x] My commit messages follow conventional commits

## Related Issue

Closes #28547
`);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const changes = [
    { file: "README.md", type: "modified", additions: 1, deletions: 1 },
  ];

  if (isSubmitted) {
    return (
      <DashboardLayout>
        <div className="p-6 lg:p-8 max-w-2xl mx-auto text-center">
          <div className="animate-scale-in">
            <div className="h-20 w-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <Rocket className="h-10 w-10 text-success" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Pull Request Created! 🎉
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your contribution has been submitted to the maintainers.
            </p>

            <Card className="mb-8 text-left">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                    <GitPullRequest className="h-5 w-5 text-success" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{prTitle}</p>
                    <p className="text-sm text-muted-foreground mt-1">facebook/react • PR #28550</p>
                    <Badge className="mt-2 bg-pending text-pending-foreground">Open</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" asChild>
                <Link to="/pr-status">
                  Track PR Status
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View on GitHub <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-4xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/quality-check">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Quality Gate
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <GitPullRequest className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Create Pull Request</h1>
              <p className="text-sm text-muted-foreground">facebook/react</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* PR Title */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Pull Request Title
              </label>
              <Input
                value={prTitle}
                onChange={(e) => setPrTitle(e.target.value)}
                className="text-lg"
              />
            </div>

            {/* PR Description */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Description
              </label>
              <Textarea
                value={prDescription}
                onChange={(e) => setPrDescription(e.target.value)}
                rows={16}
                className="font-mono text-sm"
              />
            </div>

            {/* Changes */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  Files Changed
                </CardTitle>
              </CardHeader>
              <CardContent>
                {changes.map((change) => (
                  <div key={change.file} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">{change.type}</Badge>
                      <span className="font-mono text-sm">{change.file}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-success">+{change.additions}</span>
                      <span className="text-destructive">-{change.deletions}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Submit */}
            <Separator />
            
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Your PR will be submitted to <strong>facebook/react</strong>
              </p>
              <Button 
                variant="accent" 
                size="lg"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Submitting...</>
                ) : (
                  <>
                    <Rocket className="h-4 w-4 mr-2" />
                    Submit Pull Request
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Checklist */}
            <Card className="bg-success/5 border-success/30">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  Ready to Submit
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  All quality checks passed
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  Commit message follows conventions
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  Changes are within scope
                </div>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">What happens next?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>
                  <strong>1.</strong> Your PR will be created on GitHub
                </p>
                <p>
                  <strong>2.</strong> Maintainers will review your changes
                </p>
                <p>
                  <strong>3.</strong> You may receive feedback or requests for changes
                </p>
                <p>
                  <strong>4.</strong> Once approved, your PR will be merged!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreatePR;
