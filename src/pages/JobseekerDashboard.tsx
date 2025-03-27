import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { BriefcaseBusiness, FileText, Award, Star, ArrowRight, Search, FileUp, Mic } from "lucide-react";
import Navbar from "@/components/Navbar";
import { JobSeekerProfileForm } from "@/components/JobSeekerProfileForm";
import { RecommendationCard } from "@/components/RecommendationCard";
import { JobRoadmap } from "@/components/JobRoadmap";
import { CourseRecommendations } from "@/components/CourseRecommendations";
import { BrandingTips } from "@/components/BrandingTips";
import { InterviewSimulator } from "@/components/InterviewSimulator";

const JobseekerDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [profileCompleted, setProfileCompleted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Career Dashboard</h1>
            <p className="text-gray-600 mt-2">Personalized career recommendations and growth opportunities</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-found-blue hover:bg-found-blue-dark">
                  <FileUp className="mr-2 h-4 w-4" />
                  Upload Resume
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload Your Resume</DialogTitle>
                  <DialogDescription>
                    Upload your resume for automatic parsing and personalized recommendations.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-4">Drag and drop your resume here or click to browse</p>
                    <Input 
                      id="resume-upload" 
                      type="file" 
                      className="hidden" 
                      onChange={() => setResumeUploaded(true)}
                    />
                    <label htmlFor="resume-upload">
                      <Button variant="outline" className="cursor-pointer">Select File</Button>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
                <div className="flex justify-end">
                  <Button 
                    className="bg-found-blue hover:bg-found-blue-dark"
                    onClick={() => setResumeUploaded(true)}
                  >
                    Process Resume
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Tabs 
          defaultValue="profile" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid grid-cols-5 md:w-[750px]">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="interview">
              <span className="flex items-center">
                <Mic className="mr-2 h-4 w-4" />
                Interview
              </span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <JobSeekerProfileForm 
              resumeUploaded={resumeUploaded} 
              onComplete={() => {
                setProfileCompleted(true);
                setActiveTab("jobs");
              }}
            />
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            {!profileCompleted ? (
              <Card>
                <CardHeader>
                  <CardTitle>Complete Your Profile First</CardTitle>
                  <CardDescription>
                    To get personalized job recommendations, please complete your profile.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="bg-found-blue hover:bg-found-blue-dark"
                    onClick={() => setActiveTab("profile")}
                  >
                    Go to Profile
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Jobs Matching Your Skills</CardTitle>
                      <CardDescription>
                        Based on your profile and skills
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <RecommendationCard 
                        title="Senior Frontend Developer"
                        company="TechCorp Inc."
                        matchRate={95}
                        skills={["React", "TypeScript", "UI/UX"]}
                        link="https://example.com/job1"
                      />
                      <RecommendationCard 
                        title="Full Stack Engineer"
                        company="Innovative Solutions"
                        matchRate={87}
                        skills={["React", "Node.js", "MongoDB"]}
                        link="https://example.com/job2"
                      />
                      <RecommendationCard 
                        title="UI Developer"
                        company="Design Masters"
                        matchRate={82}
                        skills={["React", "CSS", "Figma"]}
                        link="https://example.com/job3"
                      />
                      <Button variant="outline" className="w-full">
                        See More Matches <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <JobRoadmap />
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            {!profileCompleted ? (
              <Card>
                <CardHeader>
                  <CardTitle>Complete Your Profile First</CardTitle>
                  <CardDescription>
                    To get personalized learning recommendations, please complete your profile.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="bg-found-blue hover:bg-found-blue-dark"
                    onClick={() => setActiveTab("profile")}
                  >
                    Go to Profile
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <CourseRecommendations />
            )}
          </TabsContent>

          <TabsContent value="branding" className="space-y-6">
            {!profileCompleted ? (
              <Card>
                <CardHeader>
                  <CardTitle>Complete Your Profile First</CardTitle>
                  <CardDescription>
                    To get personalized branding recommendations, please complete your profile.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="bg-found-blue hover:bg-found-blue-dark"
                    onClick={() => setActiveTab("profile")}
                  >
                    Go to Profile
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <BrandingTips />
            )}
          </TabsContent>

          <TabsContent value="interview" className="space-y-6">
            {!profileCompleted ? (
              <Card>
                <CardHeader>
                  <CardTitle>Complete Your Profile First</CardTitle>
                  <CardDescription>
                    To access interview simulator, please complete your profile.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="bg-found-blue hover:bg-found-blue-dark"
                    onClick={() => setActiveTab("profile")}
                  >
                    Go to Profile
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <InterviewSimulator />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default JobseekerDashboard;
