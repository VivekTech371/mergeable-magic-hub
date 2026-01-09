import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Search,
  BookOpen,
  Video,
  FileText,
  HelpCircle,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const HelpHub = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const guides = [
    {
      id: "1",
      title: "Getting Started with Open Source",
      description: "Learn the basics of open source contribution",
      category: "beginner",
      readTime: "5 min",
    },
    {
      id: "2",
      title: "Understanding Git and GitHub",
      description: "Master the tools you need to contribute",
      category: "beginner",
      readTime: "10 min",
    },
    {
      id: "3",
      title: "Writing Good Commit Messages",
      description: "Best practices for clear commit history",
      category: "intermediate",
      readTime: "7 min",
    },
    {
      id: "4",
      title: "The Pull Request Process",
      description: "From submission to merge",
      category: "beginner",
      readTime: "8 min",
    },
    {
      id: "5",
      title: "Handling Code Reviews",
      description: "How to respond to maintainer feedback",
      category: "intermediate",
      readTime: "6 min",
    },
    {
      id: "6",
      title: "Contributing to Documentation",
      description: "Make an impact without writing code",
      category: "beginner",
      readTime: "4 min",
    },
  ];

  const faqs = [
    {
      question: "What if my PR gets rejected?",
      answer: "Rejection is a normal part of open source. It doesn't reflect on your abilities—sometimes contributions don't align with project direction. Learn from the feedback and try a different issue.",
    },
    {
      question: "How long does it take for a PR to be reviewed?",
      answer: "Review times vary by project. Some maintainers respond within hours, others may take weeks. Be patient and feel free to politely follow up after a week or two.",
    },
    {
      question: "Do I need to know a lot of code to contribute?",
      answer: "Not at all! Documentation, tests, and UI text improvements are valuable contributions that often require minimal coding knowledge.",
    },
    {
      question: "What happens if I make a mistake?",
      answer: "Everyone makes mistakes—that's how we learn. Git allows you to fix mistakes, and maintainers are generally understanding with first-time contributors.",
    },
    {
      question: "Can I contribute to any repository?",
      answer: "Most public repositories accept contributions, but always check their CONTRIBUTING.md file first. Some projects may have specific requirements or may not be accepting contributions.",
    },
    {
      question: "How do I find beginner-friendly issues?",
      answer: "Use our Explore page to find curated beginner issues. You can also look for labels like 'good first issue', 'beginner', or 'help wanted' on GitHub.",
    },
  ];

  const etiquette = [
    "Always read the contributing guidelines before submitting",
    "Be respectful and patient with maintainers",
    "Keep changes small and focused on one thing",
    "Write clear descriptions explaining your changes",
    "Test your changes before submitting",
    "Respond promptly to feedback and questions",
    "Thank maintainers for their time and guidance",
    "Don't take rejection personally—it's about the code, not you",
  ];

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-3">Help & Learning Hub</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Everything you need to become a confident open source contributor
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            <Input
              placeholder="Search guides, FAQs, and more..."
              className="pl-9 sm:pl-10 h-10 sm:h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="guides" className="space-y-6 sm:space-y-8">
          <TabsList className="w-full flex flex-wrap justify-center gap-1">
            <TabsTrigger value="guides" className="gap-1.5 sm:gap-2 text-xs sm:text-sm flex-1 sm:flex-none">
              <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Guides</span>
            </TabsTrigger>
            <TabsTrigger value="faqs" className="gap-1.5 sm:gap-2 text-xs sm:text-sm flex-1 sm:flex-none">
              <HelpCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>FAQs</span>
            </TabsTrigger>
            <TabsTrigger value="etiquette" className="gap-1.5 sm:gap-2 text-xs sm:text-sm flex-1 sm:flex-none">
              <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Etiquette</span>
            </TabsTrigger>
          </TabsList>

          {/* Guides */}
          <TabsContent value="guides">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {guides.map((guide) => (
                <Card key={guide.id} className="hover:shadow-elevated transition-all cursor-pointer">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Badge variant="secondary" className="text-xs">{guide.category}</Badge>
                      <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{guide.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{guide.description}</p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-accent text-xs sm:text-sm">
                      Read Guide <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* FAQs */}
          <TabsContent value="faqs">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Etiquette */}
          <TabsContent value="etiquette">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle>Open Source Contribution Etiquette</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Following these guidelines will help you build positive relationships with maintainers and increase the chances of your contributions being accepted.
                </p>
                <ul className="space-y-4">
                  {etiquette.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Contact Support */}
        <Card className="mt-12 max-w-xl mx-auto bg-muted/30">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Our team is here to help you succeed in open source.
            </p>
            <Button variant="accent">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HelpHub;
