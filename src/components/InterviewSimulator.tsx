
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mic, MicOff, Play, Square, RotateCcw, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

export function InterviewSimulator() {
  const [interviewType, setInterviewType] = useState<"technical" | "hr">("technical");
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finished, setFinished] = useState(false);
  const [evaluation, setEvaluation] = useState<null | {
    score: number;
    feedback: string;
    strengths: string[];
    improvements: string[];
  }>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  // Sample questions for demonstration
  const questions = {
    technical: [
      "Tell me about your experience with React and component lifecycle methods.",
      "How do you handle state management in large applications?",
      "Explain the concept of closures in JavaScript and provide an example.",
      "What's your approach to testing frontend applications?",
      "Describe a challenging technical problem you've solved recently."
    ],
    hr: [
      "Tell me about yourself and your career journey.",
      "Why are you interested in this position?",
      "How do you handle tight deadlines and pressure?",
      "Describe a situation where you had a conflict with a team member and how you resolved it.",
      "Where do you see yourself professionally in 5 years?"
    ]
  };

  const handleStartRecording = () => {
    if (!navigator.mediaDevices) {
      toast({
        title: "Microphone Access Required",
        description: "Please allow microphone access to use the interview simulator.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real implementation, this would use the Web Audio API to record
    setIsRecording(true);
    toast({
      title: "Recording Started",
      description: "Your voice is being recorded. Speak clearly into your microphone.",
    });
    
    // Simulate recording for demo purposes
    setTimeout(() => {
      setIsRecording(false);
      toast({
        title: "Recording Complete",
        description: "Your answer has been processed.",
      });
      
      if (currentQuestion < questions[interviewType].length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setFinished(true);
        // Simulate evaluation
        setEvaluation({
          score: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
          feedback: "Your answers show good technical knowledge but could improve on specificity.",
          strengths: ["Clear communication", "Good technical foundation", "Structured answers"],
          improvements: ["Provide more specific examples", "Be more concise", "Elaborate on your problem-solving approach"]
        });
      }
    }, 5000); // Simulate 5 seconds of recording
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    toast({
      title: "Recording Stopped",
      description: "Your answer has been processed.",
    });
  };

  const handleReplay = () => {
    // In a real implementation, this would play back the recorded audio
    toast({
      title: "Replaying Answer",
      description: "This would play your recorded answer in a real implementation.",
    });
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setFinished(false);
    setEvaluation(null);
  };

  return (
    <div className="space-y-6">
      {!finished ? (
        <>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Interview Simulator</CardTitle>
              <CardDescription>
                Practice your interview skills and get instant feedback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <Label className="text-base font-medium">Interview Type</Label>
                <RadioGroup
                  value={interviewType}
                  onValueChange={(value) => setInterviewType(value as "technical" | "hr")}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="technical" id="technical" />
                    <Label htmlFor="technical">Technical</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hr" id="hr" />
                    <Label htmlFor="hr">HR/Behavioral</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="bg-found-blue text-white">
                    Question {currentQuestion + 1} of {questions[interviewType].length}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {interviewType === "technical" ? "Technical Question" : "HR Question"}
                  </span>
                </div>
                <p className="text-lg font-medium">
                  {questions[interviewType][currentQuestion]}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center border-t p-4">
              <div>
                {isRecording ? (
                  <Button 
                    variant="destructive" 
                    className="flex items-center" 
                    onClick={handleStopRecording}
                  >
                    <Square className="mr-2 h-4 w-4" />
                    Stop Recording
                  </Button>
                ) : (
                  <Button 
                    className="bg-found-blue hover:bg-found-blue-dark flex items-center" 
                    onClick={handleStartRecording}
                  >
                    <Mic className="mr-2 h-4 w-4" />
                    Start Recording
                  </Button>
                )}
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex items-center"
                  onClick={handleReplay}
                  disabled={isRecording}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Replay Question
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center"
                  onClick={() => {
                    if (currentQuestion < questions[interviewType].length - 1) {
                      setCurrentQuestion(currentQuestion + 1);
                    } else {
                      setFinished(true);
                      // Simulate evaluation
                      setEvaluation({
                        score: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
                        feedback: "Your answers show good technical knowledge but could improve on specificity.",
                        strengths: ["Clear communication", "Good technical foundation", "Structured answers"],
                        improvements: ["Provide more specific examples", "Be more concise", "Elaborate on your problem-solving approach"]
                      });
                    }
                  }}
                >
                  Skip <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
          <div className="flex justify-between items-center">
            <div className="w-full">
              <Progress value={(currentQuestion / questions[interviewType].length) * 100} className="h-2" />
              <div className="flex justify-between mt-1 text-sm text-gray-500">
                <span>Start</span>
                <span>Finish</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Interview Performance Evaluation</CardTitle>
            <CardDescription>
              AI-powered analysis of your interview responses
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {evaluation && (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Overall Score</h3>
                  <div className="flex items-center">
                    <div className={`text-white font-bold px-4 py-2 rounded-full ${
                      evaluation.score >= 90 ? "bg-green-500" : 
                      evaluation.score >= 70 ? "bg-yellow-500" : "bg-orange-500"
                    }`}>
                      {evaluation.score}/100
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">General Feedback</h3>
                  <p className="text-gray-700">{evaluation.feedback}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-green-700">Strengths</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {evaluation.strengths.map((strength, index) => (
                        <li key={index} className="text-gray-700">{strength}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-amber-700">Areas for Improvement</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {evaluation.improvements.map((improvement, index) => (
                        <li key={index} className="text-gray-700">{improvement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </CardContent>
          <CardFooter className="flex justify-between border-t p-4">
            <Button variant="outline" onClick={handleReset}>
              Try Again
            </Button>
            <Button className="bg-found-blue hover:bg-found-blue-dark">
              Save Results
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
