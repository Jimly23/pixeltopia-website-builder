
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface RecommendationCardProps {
  title: string;
  company: string;
  matchRate: number;
  skills: string[];
  link: string;
}

export function RecommendationCard({ title, company, matchRate, skills, link }: RecommendationCardProps) {
  return (
    <Card className="overflow-hidden border border-gray-200 transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{company}</CardDescription>
          </div>
          <div className={`text-white font-bold px-2 py-1 rounded-full text-xs ${
            matchRate >= 90 
              ? "bg-green-500" 
              : matchRate >= 75 
                ? "bg-yellow-500" 
                : "bg-orange-500"
          }`}>
            {matchRate}% Match
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end pt-0">
        <Button asChild variant="ghost" size="sm" className="text-found-blue">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Job <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
