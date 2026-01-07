import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  Filter,
  Code,
  FileText,
  TestTube,
  Bug,
  MessageSquare,
  Star,
  GitFork,
  ArrowRight
} from "lucide-react";

const ExploreIssues = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const issues = [
    {
      id: "1",
      title: "Fix typo in README documentation",
      repo: "facebook/react",
      repoStars: 220000,
      type: "docs",
      difficulty: "easy",
      skills: ["markdown"],
      description: "There's a small typo in the installation guide that needs correction.",
      labels: ["good first issue", "documentation"],
    },
    {
      id: "2",
      title: "Add aria-label to close button",
      repo: "tailwindlabs/tailwindcss",
      repoStars: 78000,
      type: "code",
      difficulty: "easy",
      skills: ["javascript", "accessibility"],
      description: "The modal close button is missing an aria-label for screen readers.",
      labels: ["good first issue", "a11y"],
    },
    {
      id: "3",
      title: "Add unit tests for date formatting",
      repo: "vercel/next.js",
      repoStars: 118000,
      type: "test",
      difficulty: "medium",
      skills: ["javascript", "testing"],
      description: "The date formatting utility lacks proper test coverage.",
      labels: ["help wanted", "testing"],
    },
    {
      id: "4",
      title: "Update error message for clarity",
      repo: "prisma/prisma",
      repoStars: 35000,
      type: "ui-text",
      difficulty: "easy",
      skills: ["writing"],
      description: "The error message when connection fails is confusing to users.",
      labels: ["good first issue", "ux"],
    },
    {
      id: "5",
      title: "Document edge case behavior",
      repo: "supabase/supabase",
      repoStars: 65000,
      type: "docs",
      difficulty: "easy",
      skills: ["markdown", "technical-writing"],
      description: "Add documentation explaining behavior when cache is empty.",
      labels: ["good first issue", "documentation"],
    },
    {
      id: "6",
      title: "Fix button focus state styling",
      repo: "shadcn/ui",
      repoStars: 55000,
      type: "bug",
      difficulty: "medium",
      skills: ["css", "react"],
      description: "Button focus state is inconsistent across browsers.",
      labels: ["bug", "css"],
    },
  ];

  const typeIcons: Record<string, React.ElementType> = {
    code: Code,
    docs: FileText,
    test: TestTube,
    bug: Bug,
    "ui-text": MessageSquare,
  };

  const difficultyColors: Record<string, string> = {
    easy: "bg-success text-success-foreground",
    medium: "bg-warning text-warning-foreground",
    hard: "bg-destructive text-destructive-foreground",
  };

  const filteredIssues = issues.filter((issue) => {
    const matchesSearch = issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.repo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || issue.type === selectedType;
    const matchesDifficulty = selectedDifficulty === "all" || issue.difficulty === selectedDifficulty;
    const matchesSkill = selectedSkill === "all" || issue.skills.includes(selectedSkill);
    return matchesSearch && matchesType && matchesDifficulty && matchesSkill;
  });

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Explore Issues</h1>
          <p className="text-muted-foreground">Find beginner-friendly issues that match your skills and interests.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search issues or repositories..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[140px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="code">Code</SelectItem>
                <SelectItem value="docs">Documentation</SelectItem>
                <SelectItem value="test">Tests</SelectItem>
                <SelectItem value="bug">Bug Fix</SelectItem>
                <SelectItem value="ui-text">UI Text</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedSkill} onValueChange={setSelectedSkill}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Skill" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="markdown">Markdown</SelectItem>
                <SelectItem value="css">CSS</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="testing">Testing</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-4">
          Showing {filteredIssues.length} beginner-friendly issues
        </p>

        {/* Issues Grid */}
        <div className="grid gap-4">
          {filteredIssues.map((issue) => {
            const TypeIcon = typeIcons[issue.type] || Code;
            return (
              <Card key={issue.id} className="hover:shadow-elevated transition-all duration-300 border-border/50 hover:border-accent/30">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    {/* Type Icon */}
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <TypeIcon className="h-6 w-6 text-accent" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Link 
                          to={`/issue/${issue.id}`}
                          className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
                        >
                          {issue.title}
                        </Link>
                        <Badge className={difficultyColors[issue.difficulty]}>
                          {issue.difficulty}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                        <span className="font-medium">{issue.repo}</span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5" />
                          {(issue.repoStars / 1000).toFixed(0)}k
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="h-3.5 w-3.5" />
                          Fork
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        {issue.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {issue.labels.map((label) => (
                          <Badge key={label} variant="secondary" className="text-xs">
                            {label}
                          </Badge>
                        ))}
                        {issue.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <Button variant="accent" className="flex-shrink-0" asChild>
                      <Link to={`/issue/${issue.id}`}>
                        View Issue
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredIssues.length === 0 && (
          <div className="text-center py-16">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No issues found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your filters or search query.</p>
            <Button variant="outline" onClick={() => {
              setSearchQuery("");
              setSelectedType("all");
              setSelectedDifficulty("all");
              setSelectedSkill("all");
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ExploreIssues;
