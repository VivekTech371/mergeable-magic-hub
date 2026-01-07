import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GitPullRequest,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ExternalLink,
  RefreshCw,
  ArrowRight
} from "lucide-react";

const PRStatus = () => {
  const pullRequests = [
    {
      id: "28550",
      title: "docs(readme): fix typo in dependencies word",
      repo: "facebook/react",
      status: "pending",
      createdAt: "2 hours ago",
      lastUpdate: "Just now",
      checks: { passed: 3, total: 3 },
    },
    {
      id: "15230",
      title: "fix: correct modal accessibility issue",
      repo: "vercel/next.js",
      status: "merged",
      createdAt: "5 days ago",
      mergedAt: "3 days ago",
      checks: { passed: 5, total: 5 },
    },
    {
      id: "8920",
      title: "docs: update installation guide",
      repo: "tailwindlabs/tailwindcss",
      status: "changes_requested",
      createdAt: "1 week ago",
      lastUpdate: "2 days ago",
      checks: { passed: 4, total: 4 },
      feedback: "Please update the Node.js version requirement",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-pending text-pending-foreground">Pending Review</Badge>;
      case "merged":
        return <Badge className="bg-success text-success-foreground">Merged</Badge>;
      case "changes_requested":
        return <Badge className="bg-warning text-warning-foreground">Changes Requested</Badge>;
      case "rejected":
        return <Badge className="bg-destructive text-destructive-foreground">Closed</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-5 w-5 text-pending" />;
      case "merged":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "changes_requested":
        return <AlertCircle className="h-5 w-5 text-warning" />;
      case "rejected":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <GitPullRequest className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const pendingPRs = pullRequests.filter(pr => pr.status === "pending" || pr.status === "changes_requested");
  const completedPRs = pullRequests.filter(pr => pr.status === "merged" || pr.status === "rejected");

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">PR Status</h1>
            <p className="text-muted-foreground">Track the status of your pull requests</p>
          </div>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList>
            <TabsTrigger value="active">
              Active ({pendingPRs.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({completedPRs.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {pendingPRs.length > 0 ? (
              pendingPRs.map((pr) => (
                <Card key={pr.id} className="hover:shadow-elevated transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                        {getStatusIcon(pr.status)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground">{pr.title}</span>
                          {getStatusBadge(pr.status)}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {pr.repo} • #{pr.id} • Created {pr.createdAt}
                        </p>
                        {pr.feedback && (
                          <div className="p-3 rounded-lg bg-warning/10 border border-warning/30 text-sm text-warning">
                            <strong>Feedback:</strong> {pr.feedback}
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2 flex-shrink-0">
                        {pr.status === "changes_requested" && (
                          <Button variant="accent" asChild>
                            <Link to={`/changes-requested/${pr.id}`}>
                              Address Feedback
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                          </Button>
                        )}
                        <Button variant="outline" size="sm" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="border-dashed">
                <CardContent className="py-16 text-center">
                  <GitPullRequest className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No active PRs</h3>
                  <p className="text-muted-foreground mb-6">
                    You don't have any pending pull requests right now.
                  </p>
                  <Button variant="accent" asChild>
                    <Link to="/explore">Find an Issue</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedPRs.map((pr) => (
              <Card key={pr.id} className="opacity-90">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      {getStatusIcon(pr.status)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{pr.title}</span>
                        {getStatusBadge(pr.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {pr.repo} • #{pr.id} • {pr.status === "merged" ? `Merged ${pr.mergedAt}` : "Closed"}
                      </p>
                    </div>

                    <div className="flex gap-2 flex-shrink-0">
                      {pr.status === "merged" && (
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/success/${pr.id}`}>
                            View Summary
                          </Link>
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default PRStatus;
