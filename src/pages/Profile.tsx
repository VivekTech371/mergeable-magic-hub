import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Github,
  ExternalLink,
  MapPin,
  Calendar,
  GitPullRequest,
  CheckCircle2,
  Clock,
  Star,
  Award,
  TrendingUp,
  Settings
} from "lucide-react";

const Profile = () => {
  const user = {
    name: "John Doe",
    username: "johndoe",
    avatar: "https://github.com/shadcn.png",
    bio: "Software developer passionate about open source",
    location: "San Francisco, CA",
    joinedDate: "January 2024",
    githubUrl: "https://github.com/johndoe",
    stats: {
      totalContributions: 8,
      mergedPRs: 5,
      pendingPRs: 2,
      reposContributed: 4,
      dayStreak: 12,
    },
  };

  const contributions = [
    {
      id: "1",
      repo: "facebook/react",
      title: "docs(readme): fix typo in dependencies word",
      status: "merged",
      date: "Mar 15, 2024",
      type: "docs",
    },
    {
      id: "2",
      repo: "vercel/next.js",
      title: "fix: correct modal accessibility issue",
      status: "merged",
      date: "Mar 10, 2024",
      type: "code",
    },
    {
      id: "3",
      repo: "tailwindlabs/tailwindcss",
      title: "docs: update installation guide",
      status: "pending",
      date: "Mar 8, 2024",
      type: "docs",
    },
    {
      id: "4",
      repo: "prisma/prisma",
      title: "fix: update error message clarity",
      status: "merged",
      date: "Mar 1, 2024",
      type: "code",
    },
  ];

  const badges = [
    { name: "First Merge", icon: Award, description: "Got your first PR merged", earned: true },
    { name: "Documentation Hero", icon: Star, description: "5 documentation contributions", earned: true },
    { name: "Week Warrior", icon: TrendingUp, description: "7 day contribution streak", earned: true },
    { name: "Code Contributor", icon: CheckCircle2, description: "First code contribution", earned: false },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Profile Header */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex items-start gap-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-24 w-24 rounded-full border-4 border-accent/20"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">{user.name}</h1>
              <p className="text-muted-foreground mb-3">@{user.username}</p>
              <p className="text-foreground mb-3">{user.bio}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {user.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Joined {user.joinedDate}
                </span>
              </div>
            </div>
          </div>
          <div className="lg:ml-auto flex gap-3">
            <Button variant="outline" asChild>
              <a href={user.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub Profile
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/settings">
                <Settings className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{user.stats.totalContributions}</div>
              <div className="text-sm text-muted-foreground">Contributions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">{user.stats.mergedPRs}</div>
              <div className="text-sm text-muted-foreground">Merged PRs</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-pending">{user.stats.pendingPRs}</div>
              <div className="text-sm text-muted-foreground">Pending</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{user.stats.reposContributed}</div>
              <div className="text-sm text-muted-foreground">Repositories</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-accent">{user.stats.dayStreak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="contributions" className="space-y-6">
          <TabsList>
            <TabsTrigger value="contributions">Contributions</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
          </TabsList>

          <TabsContent value="contributions" className="space-y-4">
            {contributions.map((contribution) => (
              <Card key={contribution.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                      contribution.status === "merged" 
                        ? "bg-success/10" 
                        : "bg-pending/10"
                    }`}>
                      {contribution.status === "merged" ? (
                        <CheckCircle2 className="h-5 w-5 text-success" />
                      ) : (
                        <Clock className="h-5 w-5 text-pending" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground truncate">{contribution.title}</span>
                        <Badge variant="secondary" className="text-xs">{contribution.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{contribution.repo} • {contribution.date}</p>
                    </div>
                    <Badge className={
                      contribution.status === "merged"
                        ? "bg-success text-success-foreground"
                        : "bg-pending text-pending-foreground"
                    }>
                      {contribution.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="badges">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {badges.map((badge) => (
                <Card 
                  key={badge.name}
                  className={!badge.earned ? "opacity-50" : ""}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                      badge.earned ? "bg-accent/10" : "bg-muted"
                    }`}>
                      <badge.icon className={`h-8 w-8 ${
                        badge.earned ? "text-accent" : "text-muted-foreground"
                      }`} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{badge.name}</h4>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                    {!badge.earned && (
                      <Badge variant="outline" className="mt-3 text-xs">Locked</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
