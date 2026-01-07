import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  ArrowRight,
  GitCommit,
  FileText,
  CheckCircle2,
  AlertCircle,
  Lightbulb
} from "lucide-react";

const CommitPreparation = () => {
  const [commitType, setCommitType] = useState("docs");
  const [commitScope, setCommitScope] = useState("readme");
  const [commitMessage, setCommitMessage] = useState("fix typo in dependencies word");
  const [commitBody, setCommitBody] = useState("");

  const commitTypes = [
    { id: "feat", label: "feat", description: "New feature" },
    { id: "fix", label: "fix", description: "Bug fix" },
    { id: "docs", label: "docs", description: "Documentation" },
    { id: "style", label: "style", description: "Formatting" },
    { id: "refactor", label: "refactor", description: "Code refactoring" },
    { id: "test", label: "test", description: "Tests" },
    { id: "chore", label: "chore", description: "Maintenance" },
  ];

  const fullCommitMessage = `${commitType}${commitScope ? `(${commitScope})` : ""}: ${commitMessage}`;

  const changes = [
    { file: "README.md", type: "modified", additions: 1, deletions: 1 },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-4xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/workspace">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Workspace
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Prepare Your Commit
          </h1>
          <p className="text-lg text-muted-foreground">
            Review your changes and craft a clear commit message.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Changes Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  Changes to Commit
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

            {/* Commit Message Builder */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <GitCommit className="h-5 w-5 text-accent" />
                  Commit Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Type */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {commitTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setCommitType(type.id)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          commitType === type.id
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scope */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Scope (optional)
                  </label>
                  <Input
                    placeholder="e.g., readme, auth, api"
                    value={commitScope}
                    onChange={(e) => setCommitScope(e.target.value)}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Input
                    placeholder="Short description of changes"
                    value={commitMessage}
                    onChange={(e) => setCommitMessage(e.target.value)}
                  />
                </div>

                {/* Body */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Body (optional)
                  </label>
                  <Textarea
                    placeholder="Longer description if needed..."
                    value={commitBody}
                    onChange={(e) => setCommitBody(e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Preview */}
                <div className="p-4 rounded-lg bg-muted font-mono text-sm">
                  <p className="text-foreground">{fullCommitMessage}</p>
                  {commitBody && (
                    <p className="text-muted-foreground mt-2 whitespace-pre-line">{commitBody}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex justify-between">
              <Button variant="outline" asChild>
                <Link to="/workspace">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Editor
                </Link>
              </Button>
              <Button variant="accent" asChild>
                <Link to="/quality-check">
                  Run Quality Checks
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Guidelines */}
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-accent" />
                  Commit Message Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                  <span>Use present tense: "fix bug" not "fixed bug"</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                  <span>Keep subject line under 72 characters</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                  <span>Use imperative mood: "add" not "adds"</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                  <span>Don't end with a period</span>
                </div>
              </CardContent>
            </Card>

            {/* Conventional Commits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-info" />
                  Conventional Commits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  This repository uses conventional commits format:
                </p>
                <code className="block p-3 bg-muted rounded-lg text-sm font-mono">
                  type(scope): message
                </code>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CommitPreparation;
