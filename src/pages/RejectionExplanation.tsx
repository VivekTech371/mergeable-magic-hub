import { Link, useParams } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  ArrowRight,
  XCircle,
  MessageSquare,
  BookOpen,
  RefreshCw,
  Heart
} from "lucide-react";

const RejectionExplanation = () => {
  const { prId } = useParams();

  const rejection = {
    prTitle: "feat: add new animation to button",
    repo: "shadcn/ui",
    prNumber: prId || "4521",
    rejectedBy: "lead-maintainer",
    rejectedAt: "1 day ago",
    reason: "Out of Scope",
    explanation: `Thank you for your contribution! Unfortunately, this PR was closed because it doesn't align with our current design direction.

The animation you proposed, while technically well-implemented, adds visual complexity that we're trying to avoid in our component library. We prioritize simplicity and accessibility, and additional animations can be problematic for users with motion sensitivity.

This is not a reflection of your code quality—your implementation was actually quite good! It's simply a design decision on our part.`,
    suggestions: [
      "Consider looking for issues labeled 'help wanted' that are more aligned with our roadmap",
      "Documentation improvements are always welcome and a great way to contribute",
      "If you're interested in animation work, check out the framer-motion ecosystem",
    ],
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-3xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/pr-status">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to PR Status
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <XCircle className="h-8 w-8 text-muted-foreground" />
          </div>
          <Badge variant="secondary" className="mb-4">Closed</Badge>
          <h1 className="text-2xl font-bold text-foreground mb-2">{rejection.prTitle}</h1>
          <p className="text-muted-foreground">
            {rejection.repo} • PR #{rejection.prNumber} • {rejection.rejectedAt}
          </p>
        </div>

        {/* Reason */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-muted-foreground" />
              Maintainer Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Badge variant="outline" className="mb-2">{rejection.reason}</Badge>
            </div>
            <div className="prose prose-sm text-muted-foreground whitespace-pre-line">
              {rejection.explanation}
            </div>
          </CardContent>
        </Card>

        {/* Encouragement */}
        <Card className="mb-6 bg-accent/5 border-accent/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Heart className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">This is part of the journey</h3>
                <p className="text-sm text-muted-foreground">
                  Having a PR closed is completely normal and happens to everyone. 
                  It doesn't reflect on your abilities as a developer. Every closed PR is a learning opportunity 
                  and brings you one step closer to your next successful merge.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Suggestions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-muted-foreground" />
              What to try next
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {rejection.suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-accent">{index + 1}</span>
                  </div>
                  <span className="text-muted-foreground">{suggestion}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="accent" asChild>
            <Link to="/explore">
              <RefreshCw className="h-4 w-4 mr-2" />
              Find Another Issue
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/help">
              <BookOpen className="h-4 w-4 mr-2" />
              Learn from This
            </Link>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RejectionExplanation;
