
import React, { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import * as z from "zod";

const profileFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  title: z.string().min(2, { message: "Job title is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  location: z.string().min(2, { message: "Location is required." }),
  experience: z.coerce.number().min(0).max(40),
  summary: z.string().min(10, { message: "Please provide a brief professional summary." }),
  skills: z.string().min(3, { message: "Please list some of your key skills." }),
  jobType: z.enum(["fulltime", "parttime", "contract", "freelance"], {
    required_error: "Please select a job type.",
  }),
  remotePreference: z.enum(["remote", "hybrid", "onsite"], {
    required_error: "Please select your remote work preference.",
  }),
  salaryExpectation: z.coerce.number().min(0, { message: "Please enter your salary expectation." }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

interface JobSeekerProfileFormProps {
  resumeUploaded: boolean;
  onComplete: () => void;
}

export function JobSeekerProfileForm({ resumeUploaded, onComplete }: JobSeekerProfileFormProps) {
  const { toast } = useToast();
  
  // Default values for the form
  const defaultValues: Partial<ProfileFormValues> = {
    fullName: "",
    title: "",
    email: "",
    location: "",
    experience: 0,
    summary: "",
    skills: "",
    jobType: "fulltime",
    remotePreference: "hybrid",
    salaryExpectation: 0,
  };

  // If resume was uploaded, we would normally parse it and fill the form
  useEffect(() => {
    if (resumeUploaded) {
      // Simulate resume parsing - in real app we would call an API
      // For demo, we'll just pre-fill some fields
      form.setValue("fullName", "Alex Johnson");
      form.setValue("title", "Frontend Developer");
      form.setValue("email", "alex.johnson@example.com");
      form.setValue("location", "San Francisco, CA");
      form.setValue("experience", 5);
      form.setValue("summary", "Experienced Frontend Developer with 5 years of expertise in building responsive web applications using React, TypeScript, and modern CSS frameworks.");
      form.setValue("skills", "React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Redux, REST APIs");
      
      toast({
        title: "Resume Processed",
        description: "We've extracted information from your resume. Please review and complete any missing fields.",
      });
    }
  }, [resumeUploaded]);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "Profile updated",
      description: "Your profile has been saved successfully.",
    });
    onComplete();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>
          {resumeUploaded 
            ? "We've extracted information from your resume. Please review and complete any missing fields." 
            : "Complete your profile to get personalized job recommendations."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Professional Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Software Engineer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="City, State/Country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Years of Experience: {field.value}</FormLabel>
                  <FormControl>
                    <Slider 
                      defaultValue={[field.value]} 
                      max={40} 
                      step={1} 
                      onValueChange={(vals) => field.onChange(vals[0])}
                    />
                  </FormControl>
                  <FormDescription>
                    Drag the slider to indicate your years of professional experience.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Professional Summary</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Briefly describe your professional background, key achievements, and career goals."
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skills</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="List your key skills separated by commas (e.g. JavaScript, React, Project Management)"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="jobType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Preferred Job Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="fulltime" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Full-time
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="parttime" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Part-time
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="contract" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Contract
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="freelance" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Freelance
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="remotePreference"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Remote Work Preference</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="remote" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Fully Remote
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="hybrid" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Hybrid
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="onsite" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            On-site
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="salaryExpectation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Salary Expectation (USD/year)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number"
                      placeholder="e.g. 80000"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter your expected annual salary in USD.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="bg-found-blue hover:bg-found-blue-dark">
              Save Profile
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
