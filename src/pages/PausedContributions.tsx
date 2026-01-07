import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Pause, 
  Play, 
  Trash2, 
  Clock, 
  ArrowRight,
  Code,
  FileText,
  AlertCircle
} from "lucide-react";

const PausedContributions = () => {
  const pausedContributions = [
    {
      id: "1",
      title: "Fix accessibility issue in Modal component",
      repo: "facebook/react",
      type: "code",
      progress: 65,
      pausedAt: "2 hours ago",
      lastStep: "Making changes in workspace",
    },
    {
      id: "2",
      title: "Update installation documentation",
      repo: "prisma/prisma",
      type: "docs",
      progress: 30,
      pausedAt: "3 days ago",
      lastStep: "Understanding the issue",
    },
    {
      id: "3",
      title: "Add unit tests for validation",
      repo: "vercel/next.js",
      type: "test",
      progress: 80,
      pausedAt: "1 week ago",
      lastStep: "Preparing commit",
    },
  ];

  const typeIcons: Record<string, React.ElementType> = {
    code: Code,
    docs: FileText,
    test: Code,
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Paused Contributions</h1>
          <p className="text-muted-foreground">Resume where you left off or remove contributions you no longer want to complete.</p>
        </div>

        {pausedContributions.length > 0 ? (
          <div className="space-y-4">
            {pausedContributions.map((contribution) => {
              const TypeIcon = typeIcons[contribution.type] || Code;
              return (
                <Card key={contribution.id} className="border-border/50 hover:border-accent/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      {/* Icon */}
                      <div className="h-12 w-12 rounded-xl bg-warning/10 flex items-center justify-center flex-shrink-0">
                        <Pause className="h-6 w-6 text-warning" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{contribution.title}</h3>
                          <Badge variant="secondary">{contribution.type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {contribution.repo} • Paused {contribution.pausedAt}
                        </p>

                        {/* Progress */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {contribution.lastStep}
                            </span>
                            <span className="font-medium">{contribution.progress}%</span>
                          </div>
                          <Progress value={contribution.progress} className="h-2" />
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 flex-shrink-0">
                        <Button variant="accent" asChild>
                          <Link to={`/workspace?id=${contribution.id}`}>
                            <Play className="h-4 w-4 mr-2" />
                            Resume
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="border-dashed">
            <CardContent className="py-16 text-center">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Pause className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No paused contributions</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                When you pause a contribution, it will appear here so you can easily resume later.
              </p>
              <Button variant="accent" asChild>
                <Link to="/explore">
                  Find an Issue
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Info Card */}
        <Card className="mt-8 bg-muted/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-info/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-info" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">About paused contributions</h4>
                <p className="text-sm text-muted-foreground">
                  Your progress is automatically saved when you leave the workspace. You can resume at any time 
                  and pick up exactly where you left off. Paused contributions are kept for 30 days before being 
                  automatically removed.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PausedContributions;
