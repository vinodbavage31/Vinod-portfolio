import { useState } from "react";
import { GraduationCap, Target, Briefcase, MapPin, Github, Linkedin, FileText, Download, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false);

  const handleViewResume = () => {
    window.open("https://drive.google.com/file/d/1IQWryKG9JhMMZbhqED2H2zcxKEuKummQ/view?usp=sharing", "_blank");
    setIsResumeDialogOpen(false);
  };

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Section gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3" />
      
      <div className="section-container relative z-10">
        <div className={`section-header transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about turning data into insights and building intelligent solutions
          </p>
        </div>

        {/* Status badges */}
        <div className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '50ms' }}>
          {/* Open to Work badge */}
          <div className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-full border border-green-500/30 bg-green-500/10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-400">Open to Work</span>
          </div>
          
          {/* Location badge */}
          <div className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-full border border-primary/30">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Hyderabad, India</span>
          </div>
        </div>

        {/* Social Links - Big Tappable Icons */}
        <div className={`flex justify-center gap-6 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '75ms' }}>
          {/* GitHub */}
          <a
            href="https://github.com/vinodbavage31"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 glass-card rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_hsl(190_100%_50%/0.3)] cursor-pointer min-w-[120px]"
          >
            <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
              <Github className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vinodbavage"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 glass-card rounded-2xl border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_hsl(280_100%_65%/0.3)] cursor-pointer min-w-[120px]"
          >
            <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300">
              <Linkedin className="h-10 w-10 text-accent group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-sm font-medium text-foreground/80 group-hover:text-accent transition-colors">LinkedIn</span>
          </a>

          {/* Resume */}
          <button
            onClick={() => setIsResumeDialogOpen(true)}
            className="group flex flex-col items-center gap-3 p-6 glass-card rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_hsl(190_100%_50%/0.3)] cursor-pointer min-w-[120px]"
          >
            <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
              <FileText className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">Resume</span>
          </button>
        </div>

        {/* Resume Dialog */}
        <Dialog open={isResumeDialogOpen} onOpenChange={setIsResumeDialogOpen}>
          <DialogContent className="glass-card border-primary/30 max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold gradient-text text-center">Resume</DialogTitle>
            </DialogHeader>
            
            <div className="flex flex-col gap-4 py-4">
              <a
                href="/Vinod_Bavage_Resume.pdf"
                download
                className="flex items-center gap-4 p-4 glass-card rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
                onClick={() => setIsResumeDialogOpen(false)}
              >
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg">
                  <Download className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Download Resume</p>
                  <p className="text-sm text-muted-foreground">Save PDF to your device</p>
                </div>
              </a>

              <button
                onClick={handleViewResume}
                className="flex items-center gap-4 p-4 glass-card rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 group text-left"
              >
                <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg">
                  <Eye className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="font-medium text-foreground">View Resume</p>
                  <p className="text-sm text-muted-foreground">Opens in Google Drive</p>
                </div>
              </button>
            </div>
          </DialogContent>
        </Dialog>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Brief Background */}
          <Card className={`glass-card-hover border-primary/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl shrink-0 neon-border">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-lg font-medium text-primary mb-1">
                    Bachelor of Engineering in Artificial Intelligence & Machine Learning
                  </p>
                  <p className="text-muted-foreground">
                    Bheemanna Khandre Institute of Technology, Vishveshvaraya University
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Class of 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Focus */}
          <Card className={`glass-card-hover border-accent/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl shrink-0" style={{ boxShadow: 'inset 0 0 20px hsl(280 100% 65% / 0.1), 0 0 20px hsl(280 100% 65% / 0.2)' }}>
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Career Focus</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in developing machine learning solutions that address real-world business challenges. 
                    My expertise spans predictive analytics, deep learning for computer vision, and building 
                    end-to-end data pipelines. I'm passionate about leveraging Python, SQL, and modern ML frameworks 
                    to create impactful, data-driven applications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What I'm Looking For */}
          <Card className={`glass-card-hover border-primary/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl shrink-0 neon-border">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">What I'm Looking For</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm actively seeking opportunities as a Data Scientist, Machine Learning Engineer, or Python Developer 
                    where I can apply my skills to solve challenging problems. I'm eager to contribute to innovative 
                    projects while continuing to grow my expertise in emerging AI/ML technologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
