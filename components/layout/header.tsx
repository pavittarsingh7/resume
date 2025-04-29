"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/constants";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useSectionInView } from "@/hooks/use-section-in-view";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const activeSection = useSectionInView();
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        mobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-button")
      ) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);
  
  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrollPosition > 50
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          href="#home"
          className="text-xl md:text-2xl font-bold transition-colors hover:text-primary"
        >
          Pavittar Singh
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                activeSection === item.href.substring(1)
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={cn(
          "mobile-menu fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm">
          <div className="container h-full flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    activeSection === item.href.substring(1)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}