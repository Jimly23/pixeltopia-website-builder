
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, ArrowRight } from "lucide-react";

export function CourseRecommendations() {
  const [priceFilter, setPriceFilter] = useState<"all" | "free" | "paid">("all");

  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      platform: "Frontend Masters",
      isFree: false,
      price: "$39.99",
      level: "Advanced",
      duration: "8 hours",
      skills: ["React", "Architecture", "Performance"],
      link: "https://example.com/course1"
    },
    {
      id: 2,
      title: "TypeScript Deep Dive",
      platform: "Udemy",
      isFree: false,
      price: "$19.99",
      level: "Intermediate",
      duration: "12 hours",
      skills: ["TypeScript", "JavaScript", "Type Systems"],
      link: "https://example.com/course2"
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      platform: "CSS Tricks",
      isFree: true,
      price: "Free",
      level: "Intermediate",
      duration: "5 hours",
      skills: ["CSS", "Responsive Design", "Animation"],
      link: "https://example.com/course3"
    },
    {
      id: 4,
      title: "Web Accessibility Fundamentals",
      platform: "MDN",
      isFree: true,
      price: "Free",
      level: "Beginner",
      duration: "3 hours",
      skills: ["Accessibility", "HTML", "ARIA"],
      link: "https://example.com/course4"
    },
  ];

  // Filter courses based on price filter
  const filteredCourses = courses.filter(course => {
    if (priceFilter === "all") return true;
    if (priceFilter === "free") return course.isFree;
    if (priceFilter === "paid") return !course.isFree;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recommended Courses</CardTitle>
            <CardDescription>
              Based on your skills and career goals
            </CardDescription>
            <div className="flex space-x-2 mt-2">
              <Button 
                variant={priceFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setPriceFilter("all")}
                className={priceFilter === "all" ? "bg-found-blue hover:bg-found-blue-dark" : ""}
              >
                All
              </Button>
              <Button 
                variant={priceFilter === "free" ? "default" : "outline"}
                size="sm"
                onClick={() => setPriceFilter("free")}
                className={priceFilter === "free" ? "bg-found-blue hover:bg-found-blue-dark" : ""}
              >
                Free
              </Button>
              <Button 
                variant={priceFilter === "paid" ? "default" : "outline"}
                size="sm"
                onClick={() => setPriceFilter("paid")}
                className={priceFilter === "paid" ? "bg-found-blue hover:bg-found-blue-dark" : ""}
              >
                Paid
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <Card key={course.id} className="overflow-hidden border border-gray-200">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-base">{course.title}</CardTitle>
                        <CardDescription>{course.platform}</CardDescription>
                      </div>
                      <Badge className={course.isFree ? "bg-green-500" : "bg-gray-500"}>
                        {course.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-2">
                      <div>Level: {course.level}</div>
                      <div>Duration: {course.duration}</div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {course.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-100 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <div className="px-6 pb-4">
                    <Button asChild variant="ghost" size="sm" className="text-found-blue p-0">
                      <a href={course.link} target="_blank" rel="noopener noreferrer">
                        View Course <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-6">
                <p>No courses match your filter.</p>
              </div>
            )}
            <Button variant="outline" className="w-full">
              See All Recommendations <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Certification Paths</CardTitle>
            <CardDescription>
              Industry-recognized certifications to boost your career
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="overflow-hidden border border-gray-200">
              <CardHeader className="pb-2">
                <div className="flex items-start gap-3">
                  <Award className="h-8 w-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base">AWS Certified Developer</CardTitle>
                    <CardDescription>Amazon Web Services</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-600 mb-2">
                  Validate your ability to develop and maintain AWS-based applications.
                </p>
                <div className="text-xs text-gray-500 mb-2">Duration: 3-6 months preparation</div>
                <div className="text-xs text-gray-500 mb-2">Cost: $150 exam fee</div>
              </CardContent>
              <div className="px-6 pb-4">
                <Button asChild variant="ghost" size="sm" className="text-found-blue p-0">
                  <a href="https://example.com/aws-cert" target="_blank" rel="noopener noreferrer">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden border border-gray-200">
              <CardHeader className="pb-2">
                <div className="flex items-start gap-3">
                  <Award className="h-8 w-8 text-blue-500 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base">React Certification</CardTitle>
                    <CardDescription>Meta (Facebook)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-600 mb-2">
                  Demonstrate your proficiency in building React applications.
                </p>
                <div className="text-xs text-gray-500 mb-2">Duration: 2-4 months preparation</div>
                <div className="text-xs text-gray-500 mb-2">Cost: $99 exam fee</div>
              </CardContent>
              <div className="px-6 pb-4">
                <Button asChild variant="ghost" size="sm" className="text-found-blue p-0">
                  <a href="https://example.com/react-cert" target="_blank" rel="noopener noreferrer">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
            
            <Button variant="outline" className="w-full">
              Explore All Certifications <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
