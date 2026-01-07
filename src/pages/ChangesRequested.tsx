import { Link, useParams } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  MessageSquare,
  CheckCircle2,
  FileText,
  User
} from "lucide-react";

const ChangesRequested = () => {
  const { prId } = useParams();

  const feedback = {
    prTitle: "docs: update installation guide",
    repo: "tailwindlabs/tailwindcss",
    prNumber: prId || "8920",
    reviewer: "maintainer-jane",
    reviewerAvatar: "MJ",
    submittedAt: "2 days ago",
    comments: [
      {
        id: "1",
        file: "README.md",
        line: 15,
        comment: "The Node.js version requirement should be 18.x or higher, not 16.x. Please update this to reflect our current minimum supported version.",
        author: "maintainer-jane",
        type: "change",
      },
      {
        id: "2",
        file: "README.md",
        line: 42,
        comment: "Consider adding a note about the optional peer dependencies here.",
        author: "maintainer-jane",
        type: "suggestion",
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-4xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/pr-status">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to PR Status
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-8">
          <Badge className="bg-warning text-warning-foreground mb-4">Changes Requested</Badge>
          <h1 className="text-2xl font-bold text-foreground mb-2">{feedback.prTitle}</h1>
          <p className="text-muted-foreground">
            {feedback.repo} • PR #{feedback.prNumber}
          </p>
        </div>

        {/* Reviewer Info */}
        <Card className="mb-8 bg-warning/5 border-warning/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-warning/20 flex items-center justify-center text-warning font-bold">
                {feedback.reviewerAvatar}
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">
                  <span className="text-warning">{feedback.reviewer}</span> requested changes
                </p>
                <p className="text-sm text-muted-foreground">{feedback.submittedAt}</p>
              </div>
              <AlertCircle className="h-6 w-6 text-warning" />
            </div>
          </CardContent>
        </Card>

        {/* Comments */}
        <div className="space-y-6 mb-8">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-muted-foreground" />
            Review Comments ({feedback.comments.length})
          </h2>

          {feedback.comments.map((comment, index) => (
            <Card key={comment.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="font-mono text-sm text-foreground">{comment.file}</span>
                    <Badge variant="secondary" className="text-xs">Line {comment.line}</Badge>
                  </div>
                  <Badge 
                    className={comment.type === "change" 
                      ? "bg-warning text-warning-foreground" 
                      : "bg-info text-info-foreground"
                    }
                  >
                    {comment.type === "change" ? "Required Change" : "Suggestion"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {comment.author}
                    </p>
                    <p className="text-foreground">{comment.comment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guidance */}
        <Card className="mb-8 bg-accent/5 border-accent/20">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              How to Address Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-accent text-xs font-bold flex-shrink-0">1</span>
                <span>Review each comment carefully and understand what's being asked</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-accent text-xs font-bold flex-shrink-0">2</span>
                <span>Make the necessary changes in the workspace</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-accent text-xs font-bold flex-shrink-0">3</span>
                <span>Commit your changes and push to update the PR</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-accent text-xs font-bold flex-shrink-0">4</span>
                <span>Request a re-review from the maintainer</span>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Separator className="mb-8" />

        {/* Actions */}
        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link to="/pr-status">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Status
            </Link>
          </Button>
          <Button variant="accent" asChild>
            <Link to={`/workspace?prId=${feedback.prNumber}`}>
              Open Workspace
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChangesRequested;
