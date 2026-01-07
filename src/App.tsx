import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AuthCallback from "./pages/auth/AuthCallback";
import AccessError from "./pages/auth/AccessError";

// Core Pages
import Dashboard from "./pages/Dashboard";
import ExploreIssues from "./pages/ExploreIssues";
import PausedContributions from "./pages/PausedContributions";

// Understanding & Decision Pages
import IssueDetail from "./pages/IssueDetail";
import ContributionTypeSelection from "./pages/ContributionTypeSelection";
import ReadinessCheck from "./pages/ReadinessCheck";

// Execution Pages
import Workspace from "./pages/Workspace";
import CommitPreparation from "./pages/CommitPreparation";
import QualityGate from "./pages/QualityGate";
import CreatePR from "./pages/CreatePR";

// Post-Submission Pages
import PRStatus from "./pages/PRStatus";
import ChangesRequested from "./pages/ChangesRequested";
import RejectionExplanation from "./pages/RejectionExplanation";
import MergeSuccess from "./pages/MergeSuccess";

// Account & System Pages
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import HelpHub from "./pages/HelpHub";
import SystemStatus from "./pages/SystemStatus";
import Legal from "./pages/Legal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Index />} />
          
          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/access-error" element={<AccessError />} />
          
          {/* Core Navigation */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<ExploreIssues />} />
          <Route path="/paused" element={<PausedContributions />} />
          
          {/* Understanding & Decision */}
          <Route path="/issue/:id" element={<IssueDetail />} />
          <Route path="/contribution-type/:issueId" element={<ContributionTypeSelection />} />
          <Route path="/readiness-check/:issueId" element={<ReadinessCheck />} />
          
          {/* Execution */}
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/commit-prep" element={<CommitPreparation />} />
          <Route path="/quality-check" element={<QualityGate />} />
          <Route path="/create-pr" element={<CreatePR />} />
          
          {/* Post-Submission */}
          <Route path="/pr-status" element={<PRStatus />} />
          <Route path="/changes-requested/:prId" element={<ChangesRequested />} />
          <Route path="/rejection/:prId" element={<RejectionExplanation />} />
          <Route path="/success/:prId" element={<MergeSuccess />} />
          
          {/* Account & System */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<HelpHub />} />
          <Route path="/status" element={<SystemStatus />} />
          <Route path="/legal" element={<Legal />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
