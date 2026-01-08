import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GitMerge, Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="h-16 border-b border-border bg-card px-4 flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
            <GitMerge className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Mergeable</span>
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          {/* 404 Visual */}
          <div className="relative mb-8">
            <div className="text-[150px] font-bold text-muted/30 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-muted/50 flex items-center justify-center">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-foreground mb-3">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
            The page you're looking for doesn't exist or may have been moved. 
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="accent" asChild>
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Go to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/explore">
                <Search className="h-4 w-4 mr-2" />
                Explore Issues
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Need help?{" "}
              <Link to="/help" className="text-accent hover:underline">
                Visit our Help Hub
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
