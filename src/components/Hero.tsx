import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-new.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const roles = ["Data Scientist", "Machine Learning Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === currentRole) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentRole.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Hero gradient overlay */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      
      {/* Large decorative orbs with strong glow */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px]" />
      
      {/* Hexagon grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
              <path d="M28 0 L56 17 L56 50 L28 67 L0 50 L0 17 Z" fill="none" stroke="hsl(190 100% 50%)" strokeWidth="0.5" />
              <path d="M28 33 L56 50 L56 83 L28 100 L0 83 L0 50 Z" fill="none" stroke="hsl(280 100% 65%)" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="section-container py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
            {/* Name & Role */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text neon-text">
                Vinod Bavage
              </h1>
              <p className="text-xl md:text-2xl font-medium h-8 md:h-10">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-6 md:h-7 bg-primary ml-1 animate-pulse" />
              </p>
              
              {/* Location badge */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Recent AI & ML Engineering graduate passionate about transforming data into actionable insights. 
              Specialized in predictive modeling, deep learning, and building end-to-end ML pipelines 
              that solve real-world business problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="gap-2 border-primary/40 bg-primary/5 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 hover:-translate-y-0.5"
              >
                About Me
              </Button>
            </div>
          </div>

          {/* Right - Floating Profile Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Animated glow background */}
              <div className="absolute -inset-8 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-30 blur-2xl group-hover:opacity-50 transition-all duration-700 animate-pulse-glow" />
              
              {/* Floating animation container */}
              <div className="relative animate-float">
                {/* Outer decorative ring */}
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 opacity-60 blur-sm" />
                
                {/* Inner gradient border */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary p-0.5">
                  <div className="w-full h-full rounded-2xl bg-background/90" />
                </div>
                
                {/* Profile Image */}
                <img
                  src={profileImage}
                  alt="Vinod Bavage - Data Scientist"
                  className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl object-cover border-2 border-primary/30 shadow-2xl"
                  style={{
                    boxShadow: '0 25px 50px -12px hsl(190 100% 50% / 0.25), 0 0 60px -15px hsl(280 100% 65% / 0.3)',
                    objectPosition: 'center 15%',
                    transform: 'scale(1.1)',
                  }}
                />
                
                {/* Decorative corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center pt-12">
          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm mb-3">Scroll to explore</span>
            <div className="w-7 h-12 border-2 border-current rounded-full flex justify-center group-hover:border-primary transition-colors">
              <div className="w-1.5 h-3 bg-current rounded-full mt-2 animate-bounce group-hover:bg-primary" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
