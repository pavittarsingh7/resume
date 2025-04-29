"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import { personalInfo } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations/animated-section";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">
            Contact Information
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <AnimatedSection delay={100}>
            <Card className="h-full hover:shadow-md transition-shadow group">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-4 bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Phone</h3>
                <a
                  href={`tel:${personalInfo.contact.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {personalInfo.contact.phone}
                </a>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <Card className="h-full hover:shadow-md transition-shadow group">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-4 bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  {personalInfo.contact.email}
                </a>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <Card className="h-full hover:shadow-md transition-shadow group">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-4 bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  {personalInfo.contact.address}
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}