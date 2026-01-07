import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GitMerge, ShieldX, AlertTriangle, Mail, ArrowLeft } from "lucide-react";

const AccessError = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="max-w-lg w-full text-center">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <GitMerge className="h-7 w-7" />
          </div>
          <span className="text-2xl font-bold text-foreground">Mergeable</span>
        </Link>

        {/* Error Icon */}
        <div className="h-20 w-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
          <ShieldX className="h-10 w-10 text-destructive" />
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-3">
          Access Restricted
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your account has been temporarily suspended or your access has been revoked.
        </p>

        {/* Possible Reasons */}
        <Card className="mb-8 text-left">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Why am I seeing this?
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                <span><strong>Policy Violation:</strong> Your account may have violated our community guidelines or terms of service.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-warning mt-2" />
                <span><strong>Rate Limiting:</strong> Excessive requests or API abuse may have triggered temporary restrictions.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-info mt-2" />
                <span><strong>GitHub Access Revoked:</strong> Your GitHub OAuth permissions may have been revoked or expired.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-muted-foreground mt-2" />
                <span><strong>Maintainer Block:</strong> A repository maintainer may have blocked your contributions.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3 mb-8">
          <Button variant="accent" className="w-full" asChild>
            <a href="mailto:support@mergeable.dev">
              <Mail className="h-4 w-4 mr-2" />
              Contact Support
            </a>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Home
            </Link>
          </Button>
        </div>

        {/* Re-authorize Option */}
        <div className="p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm text-muted-foreground mb-3">
            If you believe this is a mistake or your GitHub permissions have changed:
          </p>
          <Button variant="secondary" size="sm" asChild>
            <Link to="/login">Re-authorize with GitHub</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccessError;
