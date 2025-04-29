"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animations/animated-section";

export function HeroSection() {
  const scrollToExperience = () => {
    document.querySelector("#experience")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 pb-12 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection direction="up" delay={100}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <div className="relative inline-block">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-primary">PS</span>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {personalInfo.name}
            </h1>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={300}>
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-8">
              {personalInfo.title}
            </h2>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={400}>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              {personalInfo.intro}
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={500}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={scrollToExperience}
                className="group rounded-full"
                size="lg"
              >
                View My Experience
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full"
                size="lg"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}