import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  GitMerge,
  FolderTree,
  FileCode,
  CheckCircle2,
  Circle,
  ChevronRight,
  Save,
  Pause,
  ArrowRight,
  Lightbulb,
  AlertCircle,
  File,
  Folder
} from "lucide-react";

const Workspace = () => {
  const [activeFile, setActiveFile] = useState("README.md");
  const [fileContent, setFileContent] = useState(`# React

React is a JavaScript library for building user interfaces.

## Getting Started

To install React, run the following command:

\`\`\`bash
npm install react react-dom
\`\`\`

### Dependancies

Make sure you have Node.js installed before proceeding with the installation.

## Documentation

Visit [reactjs.org](https://reactjs.org) for full documentation.
`);

  const steps = [
    { id: 1, title: "Open the file", completed: true, current: false },
    { id: 2, title: "Find the typo", completed: true, current: false },
    { id: 3, title: "Make the change", completed: false, current: true },
    { id: 4, title: "Review changes", completed: false, current: false },
    { id: 5, title: "Prepare commit", completed: false, current: false },
  ];

  const fileTree = [
    { type: "folder", name: "src", expanded: false },
    { type: "folder", name: "docs", expanded: false },
    { type: "file", name: "README.md", active: true },
    { type: "file", name: "package.json", active: false },
    { type: "file", name: "LICENSE", active: false },
  ];

  const currentStep = steps.find(s => s.current);
  const progress = (steps.filter(s => s.completed).length / steps.length) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="h-14 border-b border-border bg-card px-2 sm:px-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <Link to="/dashboard" className="flex items-center gap-2 flex-shrink-0">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <GitMerge className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground hidden md:inline">Mergeable</span>
          </Link>
          <div className="h-6 w-px bg-border hidden sm:block" />
          <div className="min-w-0 hidden sm:block">
            <p className="text-sm font-medium text-foreground truncate">Fix typo in README</p>
            <p className="text-xs text-muted-foreground truncate">facebook/react</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Pause className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Pause</span>
          </Button>
          <Button variant="outline" size="sm" className="sm:hidden">
            <Pause className="h-4 w-4" />
          </Button>
          <Button variant="accent" size="sm" asChild>
            <Link to="/commit-prep" className="flex items-center">
              <Save className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Continue to Commit</span>
            </Link>
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - File Tree */}
        <aside className="w-56 xl:w-64 border-r border-border bg-card flex-shrink-0 hidden md:flex flex-col">
          <div className="p-3 border-b border-border">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <FolderTree className="h-4 w-4" />
              File Explorer
            </div>
          </div>
          <ScrollArea className="flex-1 p-2">
            {fileTree.map((item) => (
              <button
                key={item.name}
                onClick={() => item.type === "file" && setActiveFile(item.name)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  item.active 
                    ? "bg-accent text-accent-foreground" 
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {item.type === "folder" ? (
                  <Folder className="h-4 w-4" />
                ) : (
                  <File className="h-4 w-4" />
                )}
                {item.name}
              </button>
            ))}
          </ScrollArea>
        </aside>

        {/* Main Editor Area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Editor Tabs */}
          <div className="h-10 border-b border-border bg-muted/30 flex items-center px-2">
            <div className="flex items-center gap-1 px-3 py-1.5 bg-background rounded-t-lg border border-b-0 border-border text-sm">
              <FileCode className="h-4 w-4 text-accent" />
              <span className="font-medium">{activeFile}</span>
            </div>
          </div>

          {/* Editor */}
          <div className="flex-1 overflow-hidden">
            <Tabs defaultValue="editor" className="h-full flex flex-col">
              <div className="border-b border-border px-4">
                <TabsList className="h-10 bg-transparent p-0">
                  <TabsTrigger value="editor" className="data-[state=active]:bg-muted">
                    Editor
                  </TabsTrigger>
                  <TabsTrigger value="preview" className="data-[state=active]:bg-muted">
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="diff" className="data-[state=active]:bg-muted">
                    Diff
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="editor" className="flex-1 m-0 overflow-hidden">
                <div className="h-full p-4 bg-muted/20">
                  <textarea
                    className="w-full h-full p-4 font-mono text-sm bg-card border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent"
                    value={fileContent}
                    onChange={(e) => setFileContent(e.target.value)}
                    spellCheck={false}
                  />
                </div>
              </TabsContent>

              <TabsContent value="preview" className="flex-1 m-0 overflow-auto p-6">
                <div className="prose prose-sm max-w-none">
                  <h1>React</h1>
                  <p>React is a JavaScript library for building user interfaces.</p>
                  <h2>Getting Started</h2>
                  <p>To install React, run the following command:</p>
                  <pre className="bg-muted p-4 rounded-lg">npm install react react-dom</pre>
                  <h3>Dependancies</h3>
                  <p>Make sure you have Node.js installed before proceeding with the installation.</p>
                </div>
              </TabsContent>

              <TabsContent value="diff" className="flex-1 m-0 overflow-auto p-6">
                <div className="font-mono text-sm space-y-1">
                  <div className="p-2 bg-destructive/10 text-destructive rounded">
                    - ### Dependancies
                  </div>
                  <div className="p-2 bg-success/10 text-success rounded">
                    + ### Dependencies
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>

        {/* Right Sidebar - Steps & Hints */}
        <aside className="w-72 xl:w-80 border-l border-border bg-card flex-shrink-0 hidden lg:flex flex-col">
          {/* Progress */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Progress</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Steps */}
          <div className="flex-1 overflow-auto">
            <div className="p-4">
              <h3 className="text-sm font-semibold text-foreground mb-4">Steps</h3>
              <div className="space-y-3">
                {steps.map((step, index) => (
                  <div 
                    key={step.id}
                    className={`flex items-start gap-3 p-3 rounded-lg ${
                      step.current ? "bg-accent/10 border border-accent/30" : ""
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    ) : step.current ? (
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-accent-foreground">{step.id}</span>
                      </div>
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${
                        step.completed ? "text-muted-foreground" : "text-foreground"
                      }`}>
                        {step.title}
                      </p>
                      {step.current && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Find "Dependancies" and change it to "Dependencies"
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hint */}
            <div className="p-4 border-t border-border">
              <Card className="bg-accent/5 border-accent/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-accent" />
                    Hint
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Look for "Dependancies" in the Getting Started section (around line 15). 
                    The correct spelling is "Dependencies" with an 'e'.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Next Step Button */}
          <div className="p-4 border-t border-border">
            <Button variant="accent" className="w-full" asChild>
              <Link to="/commit-prep">
                Next: Prepare Commit
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Workspace;
