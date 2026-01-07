import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, XCircle, Clock, Activity } from "lucide-react";

const SystemStatus = () => {
  const services = [
    { name: "Mergeable Platform", status: "operational", uptime: "99.99%" },
    { name: "GitHub API Integration", status: "operational", uptime: "99.95%" },
    { name: "Authentication Service", status: "operational", uptime: "99.99%" },
    { name: "Database", status: "operational", uptime: "99.99%" },
    { name: "File Storage", status: "operational", uptime: "99.97%" },
    { name: "Real-time Updates", status: "degraded", uptime: "98.5%" },
  ];

  const incidents = [
    {
      date: "March 15, 2024",
      title: "GitHub API Rate Limiting",
      status: "resolved",
      description: "Some users experienced delays when fetching repository data due to GitHub API rate limits.",
    },
    {
      date: "March 10, 2024",
      title: "Authentication Delays",
      status: "resolved",
      description: "GitHub OAuth callback was experiencing intermittent delays. Issue was resolved after scaling our auth servers.",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "degraded":
        return <AlertCircle className="h-5 w-5 text-warning" />;
      case "outage":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-success text-success-foreground">Operational</Badge>;
      case "degraded":
        return <Badge className="bg-warning text-warning-foreground">Degraded</Badge>;
      case "outage":
        return <Badge className="bg-destructive text-destructive-foreground">Outage</Badge>;
      case "resolved":
        return <Badge variant="secondary">Resolved</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const allOperational = services.every(s => s.status === "operational");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className={`h-16 w-16 rounded-full ${allOperational ? "bg-success/10" : "bg-warning/10"} flex items-center justify-center mx-auto mb-4`}>
              <Activity className={`h-8 w-8 ${allOperational ? "text-success" : "text-warning"}`} />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">System Status</h1>
            <p className="text-lg text-muted-foreground">
              {allOperational 
                ? "All systems operational" 
                : "Some systems are experiencing issues"}
            </p>
          </div>

          {/* Overall Status */}
          <Card className={`mb-8 ${allOperational ? "bg-success/5 border-success/30" : "bg-warning/5 border-warning/30"}`}>
            <CardContent className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {allOperational ? (
                  <CheckCircle2 className="h-8 w-8 text-success" />
                ) : (
                  <AlertCircle className="h-8 w-8 text-warning" />
                )}
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {allOperational ? "All Systems Operational" : "Partial System Degradation"}
                  </h2>
                  <p className="text-sm text-muted-foreground">Last updated: Just now</p>
                </div>
              </div>
              <Badge variant="outline">Live</Badge>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {services.map((service) => (
                <div key={service.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(service.status)}
                    <span className="font-medium text-foreground">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{service.uptime} uptime</span>
                    {getStatusBadge(service.status)}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Incidents */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Incidents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {incidents.map((incident, index) => (
                <div key={index} className="border-l-2 border-muted pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-foreground">{incident.title}</span>
                    {getStatusBadge(incident.status)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{incident.description}</p>
                  <p className="text-xs text-muted-foreground">{incident.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SystemStatus;
