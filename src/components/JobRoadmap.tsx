
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, Award, ArrowRight } from "lucide-react";

export function JobRoadmap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your "Dream Job" Roadmap</CardTitle>
        <CardDescription>
          Path to reach your career goals
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
            <div className="absolute left-[-10px] bg-found-blue text-white p-1 rounded-full">
              <BriefcaseBusiness className="h-4 w-4" />
            </div>
            <h3 className="font-medium">Current: Frontend Developer</h3>
            <p className="text-sm text-gray-600 mt-1">
              You have strong React skills and UI/UX knowledge
            </p>
          </div>
          
          <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
            <div className="absolute left-[-10px] bg-gray-200 text-gray-600 p-1 rounded-full">
              <Award className="h-4 w-4" />
            </div>
            <h3 className="font-medium">Next Step: Senior Frontend Developer</h3>
            <p className="text-sm text-gray-600 mt-1">
              Focus on advanced React patterns, state management, performance optimization
            </p>
            <div className="mt-2">
              <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                Gap: Senior-level projects, architecture experience
              </span>
            </div>
          </div>
          
          <div className="relative pl-8">
            <div className="absolute left-[-10px] bg-gray-200 text-gray-600 p-1 rounded-full">
              <BriefcaseBusiness className="h-4 w-4" />
            </div>
            <h3 className="font-medium">Future Goal: Frontend Architect</h3>
            <p className="text-sm text-gray-600 mt-1">
              Leading design systems, setting technical direction, mentoring teams
            </p>
            <div className="mt-2">
              <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                Gap: Leadership experience, system design, team coordination
              </span>
            </div>
          </div>
          
          <Button variant="outline" className="w-full">
            See Full Career Path <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
