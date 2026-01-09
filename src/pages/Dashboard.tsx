import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowRight, 
  GitPullRequest, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Search,
  Zap,
  TrendingUp,
  BookOpen
} from "lucide-react";

const Dashboard = () => {
  // Mock data
  const currentContribution = {
    repo: "facebook/react",
    issue: "#28547 - Fix accessibility issue in Modal component",
    progress: 65,
    status: "in_progress",
  };

  const stats = {
    totalContributions: 3,
    mergedPRs: 2,
    pendingPRs: 1,
    streak: 5,
  };

  const recentActivity = [
    {
      type: "merged",
      repo: "vercel/next.js",
      title: "Fix typo in documentation",
      date: "2 days ago",
    },
    {
      type: "merged",
      repo: "tailwindlabs/tailwindcss",
      title: "Add missing CSS property",
      date: "5 days ago",
    },
    {
      type: "pending",
      repo: "facebook/react",
      title: "Fix accessibility issue in Modal",
      date: "In progress",
    },
  ];

  const suggestedActions = [
    {
      icon: Search,
      title: "Find a new issue",
      description: "Browse beginner-friendly issues",
      href: "/explore",
      variant: "accent" as const,
    },
    {
      icon: BookOpen,
      title: "Learn best practices",
      description: "Improve your contribution skills",
      href: "/help",
      variant: "outline" as const,
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Welcome back, John!</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Here's what's happening with your contributions.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Card>
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">Total Contributions</p>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{stats.totalContributions}</p>
                </div>
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GitPullRequest className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">Merged PRs</p>
                  <p className="text-xl sm:text-2xl font-bold text-success">{stats.mergedPRs}</p>
                </div>
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">Pending</p>
                  <p className="text-xl sm:text-2xl font-bold text-warning">{stats.pendingPRs}</p>
                </div>
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">Day Streak</p>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{stats.streak}</p>
                </div>
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-pending/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-pending" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Current Contribution */}
          <div className="lg:col-span-2 space-y-6">
            {currentContribution && (
              <Card className="border-accent/30 bg-accent/5">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Current Contribution</CardTitle>
                    <Badge className="bg-accent text-accent-foreground">In Progress</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{currentContribution.repo}</p>
                      <p className="font-medium text-foreground">{currentContribution.issue}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{currentContribution.progress}%</span>
                      </div>
                      <Progress value={currentContribution.progress} className="h-2" />
                    </div>
                    <Button variant="accent" className="w-full" asChild>
                      <Link to="/workspace">
                        Continue Working
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        activity.type === "merged" 
                          ? "bg-success/10" 
                          : "bg-warning/10"
                      }`}>
                        {activity.type === "merged" ? (
                          <CheckCircle2 className="h-4 w-4 text-success" />
                        ) : (
                          <Clock className="h-4 w-4 text-warning" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.repo}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {suggestedActions.map((action) => (
                  <Link
                    key={action.title}
                    to={action.href}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <action.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{action.title}</p>
                      <p className="text-xs text-muted-foreground">{action.description}</p>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-info" />
                  Pro Tip
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Small, focused changes are more likely to get merged quickly. 
                  Start with documentation fixes or typo corrections to build confidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
