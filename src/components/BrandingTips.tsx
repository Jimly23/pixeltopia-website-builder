
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, FileText, ArrowRight, Star } from "lucide-react";

export function BrandingTips() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Optimization</CardTitle>
            <CardDescription>
              Improve your professional presence
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Star className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-medium">Add portfolio projects</h3>
                  <p className="text-sm text-gray-600">
                    Your profile would benefit from 2-3 showcased projects demonstrating your React skills.
                  </p>
                  <Button variant="link" size="sm" className="text-found-blue p-0 h-auto mt-1">
                    How to showcase projects effectively
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Star className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-medium">Expand your professional summary</h3>
                  <p className="text-sm text-gray-600">
                    Add specific achievements with metrics to demonstrate impact.
                  </p>
                  <Button variant="link" size="sm" className="text-found-blue p-0 h-auto mt-1">
                    See example summaries
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Star className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-medium">Update your profile photo</h3>
                  <p className="text-sm text-gray-600">
                    A professional headshot can improve response rates by up to 40%.
                  </p>
                  <Button variant="link" size="sm" className="text-found-blue p-0 h-auto mt-1">
                    Profile photo best practices
                  </Button>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-found-blue hover:bg-found-blue-dark">
              Update Profile
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Content Recommendations</CardTitle>
            <CardDescription>
              Build your brand with targeted content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="linkedin">
              <TabsList className="mb-4">
                <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
                <TabsTrigger value="github">GitHub</TabsTrigger>
                <TabsTrigger value="blog">Blog</TabsTrigger>
              </TabsList>
              
              <TabsContent value="linkedin" className="space-y-4">
                <div className="space-y-4">
                  <div className="pb-4 border-b border-gray-200">
                    <h3 className="font-medium">Recommended Post Topics</h3>
                    <ul className="mt-2 space-y-2">
                      <li className="text-sm">
                        • Share your experience with React performance optimization
                      </li>
                      <li className="text-sm">
                        • Discuss the transition from class components to hooks
                      </li>
                      <li className="text-sm">
                        • Ask for feedback on a UI component you've built
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Engagement Strategy</h3>
                    <p className="text-sm text-gray-600">
                      Aim to post 2-3 times per week and engage with content from industry leaders in React and front-end development.
                    </p>
                    <Button variant="link" size="sm" className="text-found-blue p-0 h-auto mt-1">
                      LinkedIn growth guide for developers
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="github" className="space-y-4">
                <div className="space-y-4">
                  <div className="pb-4 border-b border-gray-200">
                    <h3 className="font-medium">Repository Recommendations</h3>
                    <ul className="mt-2 space-y-2">
                      <li className="text-sm">
                        • Create a custom React hooks library
                      </li>
                      <li className="text-sm">
                        • Contribute to open-source UI component libraries
                      </li>
                      <li className="text-sm">
                        • Develop a starter template with TypeScript and testing setup
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Profile Optimization</h3>
                    <p className="text-sm text-gray-600">
                      Improve your GitHub profile with a custom README, pinned repositories, and complete profile information.
                    </p>
                    <Button variant="link" size="sm" className="text-found-blue p-0 h-auto mt-1">
                      GitHub profile optimization guide
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="blog" className="space-y-4">
                <div className="space-y-4">
                  <div className="pb-4 border-b border-gray-200">
                    <h3 className="font-medium">Suggested Article Topics</h3>
                    <ul className="mt-2 space-y-2">
                      <li className="text-sm">
                        • "Building Accessible React Components: A Practical Guide"
                      </li>
                      <li className="text-sm">
                        • "State Management in 2023: Redux vs. Context vs. Zustand"
                      </li>
                      <li className="text-sm">
                        • "My Journey from Junior to Senior Frontend Developer"
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Platform Suggestions</h3>
                    <p className="text-sm text-gray-600">
                      Medium, Dev.to, and Hashnode are great platforms for technical writing that can expand your reach.
                    </p>
                    <Button variant="link" size="sm" className="text-found-blue p-0 h-auto mt-1">
                      Technical writing guide for developers
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Supporting Resources</CardTitle>
          <CardDescription>
            Materials to help you enhance your professional brand
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Resume Templates</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-gray-600 mb-4">
                  ATS-friendly resume templates specifically designed for tech professionals.
                </p>
                <Button asChild size="sm" className="w-full bg-found-blue hover:bg-found-blue-dark">
                  <a href="https://example.com/resume-templates" target="_blank" rel="noopener noreferrer">
                    Download Templates
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Interview Preparation</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-gray-600 mb-4">
                  Common React interview questions and coding challenges with detailed solutions.
                </p>
                <Button asChild size="sm" className="w-full bg-found-blue hover:bg-found-blue-dark">
                  <a href="https://example.com/interview-prep" target="_blank" rel="noopener noreferrer">
                    Access Material
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Networking Guide</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-gray-600 mb-4">
                  Strategies for building a professional network in the tech industry.
                </p>
                <Button asChild size="sm" className="w-full bg-found-blue hover:bg-found-blue-dark">
                  <a href="https://example.com/networking" target="_blank" rel="noopener noreferrer">
                    Read Guide
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
