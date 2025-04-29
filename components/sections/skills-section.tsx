"use client";

import { skills } from "@/lib/constants";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedSection } from "@/components/animations/animated-section";

export function SkillsSection() {
  const skillCategories = Object.keys(skills);
  
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Skills
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <Tabs defaultValue={skillCategories[0]} className="w-full max-w-4xl mx-auto">
            <TabsList className="mb-8 w-full h-auto flex flex-wrap justify-center gap-2">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {skills[category as keyof typeof skills].title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {skillCategories.map((category) => (
              <TabsContent key={category} value={category}>
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-bold">
                      {skills[category as keyof typeof skills].title} Skills
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {skills[category as keyof typeof skills].items.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  );
}