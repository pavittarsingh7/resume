export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-muted-foreground text-sm">
          &copy; {currentYear} Pavittar Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}