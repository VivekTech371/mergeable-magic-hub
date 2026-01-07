import { Link, useParams } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  ArrowRight,
  Code,
  FileText,
  TestTube,
  Bug,
  MessageSquare,
  Check
} from "lucide-react";
import { useState } from "react";

const ContributionTypeSelection = () => {
  const { issueId } = useParams();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const contributionTypes = [
    {
      id: "code",
      icon: Code,
      title: "Code",
      description: "Write or modify source code to implement features or fix bugs",
      suitable: true,
      color: "bg-accent",
    },
    {
      id: "docs",
      icon: FileText,
      title: "Documentation",
      description: "Improve or add documentation, README files, or guides",
      suitable: true,
      color: "bg-info",
    },
    {
      id: "tests",
      icon: TestTube,
      title: "Tests",
      description: "Add or improve test coverage for existing functionality",
      suitable: false,
      color: "bg-success",
    },
    {
      id: "bug-report",
      icon: Bug,
      title: "Bug Report",
      description: "Document a bug you've found with reproduction steps",
      suitable: false,
      color: "bg-warning",
    },
    {
      id: "ui-text",
      icon: MessageSquare,
      title: "UI Text",
      description: "Improve user-facing text, error messages, or labels",
      suitable: false,
      color: "bg-pending",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-4xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to={`/issue/${issueId}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Issue
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Choose Your Contribution Type
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Different issues can be solved in different ways. Select how you'd like to contribute to this issue.
          </p>
        </div>

        {/* Options */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {contributionTypes.map((type) => (
            <Card 
              key={type.id}
              className={`cursor-pointer transition-all duration-200 ${
                selectedType === type.id 
                  ? "ring-2 ring-accent border-accent shadow-glow" 
                  : "hover:border-accent/30 hover:shadow-elevated"
              } ${!type.suitable ? "opacity-50" : ""}`}
              onClick={() => type.suitable && setSelectedType(type.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-12 rounded-xl ${type.color} flex items-center justify-center flex-shrink-0`}>
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground">{type.title}</h3>
                      {selectedType === type.id && (
                        <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                          <Check className="h-4 w-4 text-accent-foreground" />
                        </div>
                      )}
                      {!type.suitable && (
                        <Badge variant="secondary" className="text-xs">Not recommended</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info */}
        {selectedType && (
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8 animate-fade-in">
            <h4 className="font-semibold text-foreground mb-2">
              {selectedType === "code" && "You chose: Code Contribution"}
              {selectedType === "docs" && "You chose: Documentation Contribution"}
            </h4>
            <p className="text-sm text-muted-foreground">
              {selectedType === "code" && 
                "You'll be guided through making code changes in our browser-based editor. We'll show you exactly which files to modify and what changes to make."}
              {selectedType === "docs" && 
                "You'll be editing documentation files (usually Markdown). This is perfect for first-time contributors as it requires no coding knowledge."}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link to={`/issue/${issueId}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Link>
          </Button>
          <Button 
            variant="accent" 
            disabled={!selectedType}
            asChild
          >
            <Link to={`/readiness-check/${issueId}?type=${selectedType}`}>
              Continue
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContributionTypeSelection;
