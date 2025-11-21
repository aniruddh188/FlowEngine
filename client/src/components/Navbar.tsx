import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      <a href="#problem" className="text-sm font-medium hover:text-secondary transition-colors">The Problem</a>
      <a href="#solution" className="text-sm font-medium hover:text-secondary transition-colors">The Solution</a>
      <a href="#how-it-works" className="text-sm font-medium hover:text-secondary transition-colors">How It Works</a>
      <a href="#testimonials" className="text-sm font-medium hover:text-secondary transition-colors">Results</a>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10 text-white">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="font-heading text-2xl font-bold tracking-wider">INTROSCALE</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavItems />
          <Button className="bg-secondary text-primary hover:bg-secondary/90 font-bold uppercase tracking-wide">
            Book Strategy Call
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-primary border-l-white/10 text-white">
              <div className="flex flex-col gap-6 mt-10">
                <NavItems />
                <Button className="bg-secondary text-primary hover:bg-secondary/90 font-bold uppercase tracking-wide w-full">
                  Book Strategy Call
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
