"use client";

import { projects } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animations/animated-section";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">
            Recent Projects
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="h-full hover:shadow-md transition-all overflow-hidden flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  {project.comingSoon && (
                    <div className="flex items-center justify-center h-full">
                      <div className="relative py-8">
                        <div className="flex items-center justify-center">
                          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                            <span className="font-bold text-primary/70">Soon</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button className="w-full" disabled={project.comingSoon}>
                    {project.comingSoon ? "Coming Soon" : "View Project"}
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}