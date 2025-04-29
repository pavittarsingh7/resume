"use client";

import { BriefcaseIcon } from "lucide-react";
import { experience } from "@/lib/constants";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations/animated-section";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional Experience
          </h2>
        </AnimatedSection>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experience.map((job, index) => (
              <AnimatedSection
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 100}
                className="relative"
              >
                <div
                  className={`flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-6 h-6 rounded-full bg-primary transform translate-x-[-50%] md:translate-x-[-50%] flex items-center justify-center z-10">
                    <BriefcaseIcon className="h-3 w-3 text-primary-foreground" />
                  </div>
                  
                  {/* Content card */}
                  <Card
                    className={`w-full md:w-[calc(50%-2rem)] ml-10 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    } shadow-md hover:shadow-lg transition-shadow`}
                  >
                    <CardHeader className="pb-2">
                      <h3 className="text-xl font-bold">{job.position}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                      <p className="text-sm text-muted-foreground">
                        {job.period}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 list-disc ml-5">
                        {job.description.map((item, idx) => (
                          <li key={idx} className="text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}