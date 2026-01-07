import { Link, useParams } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  ArrowRight,
  Star,
  GitFork,
  Users,
  Clock,
  FileText,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  BookOpen
} from "lucide-react";

const IssueDetail = () => {
  const { id } = useParams();

  // Mock issue data
  const issue = {
    id: id,
    title: "Fix typo in README documentation",
    repo: "facebook/react",
    repoStars: 220000,
    repoForks: 45000,
    type: "docs",
    difficulty: "easy",
    skills: ["markdown"],
    estimatedTime: "15-30 minutes",
    description: `
      There's a small typo in the installation guide that needs correction. 
      The word "dependancies" should be spelled "dependencies" in the Getting Started section.
    `,
    plainEnglish: `
      This is a simple documentation fix. You'll be editing a Markdown file (README.md) 
      to correct a spelling mistake. No coding knowledge required—just the ability to 
      read and make a small text change.
    `,
    boundaries: [
      "Only fix the specific typo mentioned",
      "Don't make any other formatting changes",
      "Don't change any other content",
    ],
    maintainerRules: [
      "All documentation PRs must pass spell-check",
      "Commit messages should follow conventional commits format",
      "One issue per PR",
    ],
    expectedOutcome: `
      After your contribution, the README will have the correct spelling of "dependencies" 
      in the Getting Started section. This helps new developers who read the documentation.
    `,
    labels: ["good first issue", "documentation", "help wanted"],
    openedBy: "maintainer-bot",
    openedAt: "3 days ago",
    comments: 2,
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/explore">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Explore
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge className="bg-success text-success-foreground">{issue.difficulty}</Badge>
                <Badge variant="secondary">{issue.type}</Badge>
                {issue.labels.map((label) => (
                  <Badge key={label} variant="outline">{label}</Badge>
                ))}
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                {issue.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{issue.repo}</span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {(issue.repoStars / 1000).toFixed(0)}k
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-4 w-4" />
                  {(issue.repoForks / 1000).toFixed(0)}k
                </span>
              </div>
            </div>

            {/* Plain English Explanation */}
            <Card className="border-accent/30 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-accent" />
                  Plain English Explanation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">
                  {issue.plainEnglish}
                </p>
              </CardContent>
            </Card>

            {/* Original Issue Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  Issue Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">
                  {issue.description}
                </p>
                <Button variant="link" className="p-0 h-auto mt-4" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View on GitHub <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Boundaries */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Boundaries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay within these limits to ensure your contribution is accepted:
                </p>
                <ul className="space-y-2">
                  {issue.boundaries.map((boundary, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="h-5 w-5 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-warning">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{boundary}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Maintainer Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  Maintainer Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {issue.maintainerRules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Expected Outcome */}
            <Card className="bg-success/5 border-success/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  Expected Outcome
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">
                  {issue.expectedOutcome}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Start Contribution */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Estimated time: {issue.estimatedTime}
                  </div>

                  <Separator />

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Skills needed</h4>
                    <div className="flex flex-wrap gap-2">
                      {issue.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <Button variant="accent" size="lg" className="w-full" asChild>
                    <Link to={`/contribution-type/${issue.id}`}>
                      Start Contributing
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    You'll choose your contribution type next
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Issue Meta */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-sm font-medium text-foreground mb-4">Issue details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Opened by</span>
                    <span className="font-medium">{issue.openedBy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Opened</span>
                    <span className="font-medium">{issue.openedAt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Comments</span>
                    <span className="font-medium">{issue.comments}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default IssueDetail;
