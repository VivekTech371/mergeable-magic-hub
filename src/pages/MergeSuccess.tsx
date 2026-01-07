import { Link, useParams } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight,
  CheckCircle2,
  Download,
  Share2,
  Github,
  Linkedin,
  Trophy,
  Star,
  GitMerge,
  Calendar,
  ExternalLink
} from "lucide-react";

const MergeSuccess = () => {
  const { prId } = useParams();

  const contribution = {
    prTitle: "docs(readme): fix typo in dependencies word",
    repo: "facebook/react",
    repoStars: 220000,
    prNumber: prId || "28550",
    mergedAt: "March 15, 2024",
    mergedBy: "dan-abramov",
    contributionType: "Documentation",
    filesChanged: 1,
    additions: 1,
    deletions: 1,
    summary: "Fixed a typo in the README.md file, changing 'dependancies' to the correct spelling 'dependencies' in the Getting Started section.",
  };

  const shareText = encodeURIComponent(
    `🎉 Just got my PR merged in ${contribution.repo}! My open source journey continues. #OpenSource #GitHub`
  );

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-3xl mx-auto">
        {/* Celebration Header */}
        <div className="text-center mb-10">
          <div className="relative inline-block mb-6">
            <div className="h-24 w-24 rounded-full bg-success/10 flex items-center justify-center mx-auto animate-pulse-glow">
              <Trophy className="h-12 w-12 text-success" />
            </div>
            <div className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-warning flex items-center justify-center">
              <Star className="h-5 w-5 text-warning-foreground fill-warning-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Congratulations! 🎉
          </h1>
          <p className="text-xl text-muted-foreground">
            Your contribution has been merged!
          </p>
        </div>

        {/* PR Summary Card */}
        <Card className="mb-8 bg-success/5 border-success/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-success/20 flex items-center justify-center flex-shrink-0">
                <GitMerge className="h-6 w-6 text-success" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-foreground">{contribution.prTitle}</h3>
                  <Badge className="bg-success text-success-foreground">Merged</Badge>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    {contribution.repo}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {(contribution.repoStars / 1000).toFixed(0)}k stars
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {contribution.mergedAt}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contribution Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Contribution Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">{contribution.summary}</p>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-foreground">{contribution.filesChanged}</div>
                <div className="text-sm text-muted-foreground">Files Changed</div>
              </div>
              <div className="p-4 rounded-lg bg-success/10">
                <div className="text-2xl font-bold text-success">+{contribution.additions}</div>
                <div className="text-sm text-muted-foreground">Additions</div>
              </div>
              <div className="p-4 rounded-lg bg-destructive/10">
                <div className="text-2xl font-bold text-destructive">-{contribution.deletions}</div>
                <div className="text-sm text-muted-foreground">Deletions</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Share */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Share2 className="h-5 w-5 text-accent" />
              Share Your Achievement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              You've earned this! Share your contribution with your network.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" asChild>
                <a 
                  href={`https://twitter.com/intent/tweet?text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share on X/Twitter
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/${contribution.repo}/pull/${contribution.prNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Share on LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a 
                  href={`https://github.com/${contribution.repo}/pull/${contribution.prNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Resume Ready */}
        <Card className="mb-8 bg-accent/5 border-accent/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Download className="h-5 w-5 text-accent" />
              Add to Your Resume
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-lg bg-card border border-border mb-4">
              <p className="text-sm font-medium text-foreground mb-1">Open Source Contributor</p>
              <p className="text-sm text-muted-foreground mb-2">{contribution.repo} • {contribution.mergedAt}</p>
              <ul className="text-sm text-muted-foreground list-disc list-inside">
                <li>Contributed {contribution.contributionType.toLowerCase()} improvements to a {(contribution.repoStars / 1000).toFixed(0)}k+ star repository</li>
                <li>Successfully navigated the PR review process and got changes merged</li>
              </ul>
            </div>
            <Button variant="secondary" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download as PDF
            </Button>
          </CardContent>
        </Card>

        <Separator className="mb-8" />

        {/* Next Steps */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">What's next?</h3>
          <p className="text-muted-foreground mb-6">
            Keep the momentum going! Find your next contribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" asChild>
              <Link to="/explore">
                Find Another Issue
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/profile">View Your Profile</Link>
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MergeSuccess;
