import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Legal & Policies</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Last updated: March 2024</p>
          </div>

          <Tabs defaultValue="terms" className="space-y-6 sm:space-y-8">
            <TabsList className="w-full flex flex-wrap gap-1">
              <TabsTrigger value="terms" className="flex-1 sm:flex-none text-xs sm:text-sm">Terms of Service</TabsTrigger>
              <TabsTrigger value="privacy" className="flex-1 sm:flex-none text-xs sm:text-sm">Privacy Policy</TabsTrigger>
              <TabsTrigger value="ethics" className="flex-1 sm:flex-none text-xs sm:text-sm">OSS Ethics</TabsTrigger>
            </TabsList>

            <TabsContent value="terms">
              <Card>
                <CardHeader>
                  <CardTitle>Terms of Service</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <h3 className="text-foreground">1. Acceptance of Terms</h3>
                  <p>
                    By accessing and using Mergeable ("the Platform"), you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use the Platform.
                  </p>

                  <h3 className="text-foreground">2. Description of Service</h3>
                  <p>
                    Mergeable is a platform designed to help beginners make their first open source contributions. 
                    We provide guided workflows, educational content, and tools to facilitate contributions to open source projects.
                  </p>

                  <h3 className="text-foreground">3. User Accounts</h3>
                  <p>
                    To use Mergeable, you must authenticate with your GitHub account. You are responsible for maintaining 
                    the security of your account and for all activities that occur under your account.
                  </p>

                  <h3 className="text-foreground">4. Acceptable Use</h3>
                  <p>You agree not to:</p>
                  <ul>
                    <li>Use the Platform to submit low-quality or spam contributions</li>
                    <li>Harass, abuse, or harm other users or maintainers</li>
                    <li>Attempt to circumvent any security measures</li>
                    <li>Use automated tools to submit contributions without authorization</li>
                    <li>Violate any applicable laws or regulations</li>
                  </ul>

                  <h3 className="text-foreground">5. Intellectual Property</h3>
                  <p>
                    Contributions you make through the Platform remain subject to the licensing terms of the target 
                    repository. Mergeable does not claim ownership of your contributions.
                  </p>

                  <h3 className="text-foreground">6. Termination</h3>
                  <p>
                    We reserve the right to suspend or terminate your access to the Platform at any time for 
                    violation of these terms or for any other reason we deem necessary.
                  </p>

                  <h3 className="text-foreground">7. Disclaimer</h3>
                  <p>
                    The Platform is provided "as is" without warranties of any kind. We do not guarantee that 
                    your contributions will be accepted by maintainers.
                  </p>

                  <h3 className="text-foreground">8. Contact</h3>
                  <p>
                    For questions about these terms, please contact us at legal@mergeable.dev
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <h3 className="text-foreground">1. Information We Collect</h3>
                  <p>We collect information you provide directly:</p>
                  <ul>
                    <li>GitHub profile information (username, email, avatar)</li>
                    <li>Contribution history and activity on the Platform</li>
                    <li>Preferences and settings you configure</li>
                  </ul>

                  <h3 className="text-foreground">2. How We Use Your Information</h3>
                  <p>We use the collected information to:</p>
                  <ul>
                    <li>Provide and improve the Platform's services</li>
                    <li>Facilitate your contributions to open source projects</li>
                    <li>Send you relevant notifications and updates</li>
                    <li>Analyze usage patterns to improve user experience</li>
                  </ul>

                  <h3 className="text-foreground">3. Data Sharing</h3>
                  <p>
                    We do not sell your personal information. We may share data with:
                  </p>
                  <ul>
                    <li>GitHub (as required for OAuth and contributions)</li>
                    <li>Service providers who assist in operating the Platform</li>
                    <li>Law enforcement when required by law</li>
                  </ul>

                  <h3 className="text-foreground">4. Data Security</h3>
                  <p>
                    We implement appropriate security measures to protect your information. However, 
                    no method of transmission over the Internet is 100% secure.
                  </p>

                  <h3 className="text-foreground">5. Your Rights</h3>
                  <p>You have the right to:</p>
                  <ul>
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your account and data</li>
                    <li>Opt out of marketing communications</li>
                  </ul>

                  <h3 className="text-foreground">6. Cookies</h3>
                  <p>
                    We use essential cookies to maintain your session and preferences. 
                    We do not use tracking cookies for advertising purposes.
                  </p>

                  <h3 className="text-foreground">7. Contact</h3>
                  <p>
                    For privacy-related inquiries, contact privacy@mergeable.dev
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ethics">
              <Card>
                <CardHeader>
                  <CardTitle>Open Source Ethics</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                  <h3 className="text-foreground">Our Commitment to Open Source</h3>
                  <p>
                    Mergeable is built on the belief that open source makes the world a better place. 
                    We are committed to fostering a healthy open source ecosystem.
                  </p>

                  <h3 className="text-foreground">Quality Over Quantity</h3>
                  <p>
                    We prioritize meaningful contributions over gamification. Our platform is designed 
                    to produce thoughtful, high-quality contributions that genuinely help projects.
                  </p>

                  <h3 className="text-foreground">Respect for Maintainers</h3>
                  <p>
                    Maintainers volunteer their time to review contributions. We educate our users to:
                  </p>
                  <ul>
                    <li>Read and follow contribution guidelines</li>
                    <li>Submit focused, well-tested changes</li>
                    <li>Respond promptly and respectfully to feedback</li>
                    <li>Accept rejection gracefully</li>
                  </ul>

                  <h3 className="text-foreground">Attribution and Licensing</h3>
                  <p>
                    We respect software licenses and intellectual property. Contributions made through 
                    our platform are properly attributed to users and subject to the target project's license.
                  </p>

                  <h3 className="text-foreground">Inclusivity</h3>
                  <p>
                    Open source is for everyone. We are committed to creating a welcoming environment 
                    for contributors of all backgrounds and skill levels.
                  </p>

                  <h3 className="text-foreground">No Spam or Gaming</h3>
                  <p>
                    We actively prevent spam contributions and attempts to game contribution metrics. 
                    Users who abuse the platform will be suspended.
                  </p>

                  <h3 className="text-foreground">Community First</h3>
                  <p>
                    Our goal is to strengthen the open source community, not exploit it. We work 
                    with maintainers to understand their needs and ensure our platform helps rather than hinders.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
