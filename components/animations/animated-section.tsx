"use client";

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  fullWidth?: boolean;
}

export function AnimatedSection({
  children,
  className,
  direction = "up",
  delay = 0,
  fullWidth = false,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getTransformStyle = () => {
    switch (direction) {
      case "up":
        return "translate-y-10";
      case "down":
        return "translate-y-[-10px]";
      case "left":
        return "translate-x-10";
      case "right":
        return "translate-x-[-10px]";
      default:
        return "translate-y-10";
    }
  };
  
  return (
    <div
      ref={sectionRef}
      className={cn(
        "opacity-0 transform transition-all duration-700 ease-out",
        getTransformStyle(),
        fullWidth ? "w-full" : "",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}