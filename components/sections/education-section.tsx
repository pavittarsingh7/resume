"use client";

import { GraduationCapIcon } from "lucide-react";
import { education } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations/animated-section";

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">
            Educational Background
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="h-full hover:shadow-md transition-shadow overflow-hidden group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <GraduationCapIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm font-medium">{edu.year}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}