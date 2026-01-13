import { ArrowRight, ExternalLink, Github, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const featuredProjects = [
    {
      title: "ABC TECH — ITSM Incident Analysis & Prediction",
      description:
        "End-to-end ML pipeline analyzing 45K+ ITSM records to predict high-priority incidents (96% accuracy) and identify risky change requests (98% F1-score).",
      technologies: ["Python", "XGBoost", "SQL", "SMOTE", "Scikit-learn"],
      detailsLink: "/abc-tech-itsm",
      liveDemo: "https://proactive-it-insight.lovable.app",
      github: "https://github.com/vinodbavage31/ABC-TECH-PROJECT",
      highlights: ["96% Accuracy", "98% F1-Score", "45K+ Records"],
    },
    {
      title: "Rice Leaf Disease Detection",
      description:
        "Deep learning image classification system using CNNs to detect and classify rice leaf diseases, enabling early intervention for farmers.",
      technologies: ["TensorFlow", "Keras", "CNN", "Python", "Computer Vision"],
      detailsLink: "/rice-leaf-detection",
      liveDemo: "https://riceleafdetection.lovable.app/",
      github: "https://github.com/vinodbavage31",
      highlights: ["4+ Diseases", "Real-time", "CNN Model"],
    },
  ];

  const otherProjects = [
    {
      title: "Game Winner Prediction",
      description:
        "Predictive analytics system to forecast PUBG game outcomes using historical data and ML algorithms.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Data Analysis"],
      github: "https://github.com/vinodbavage31/PUBG-GameWinnerPred",
    },
    {
      title: "House Price Prediction",
      description:
        "Real estate price prediction model using regression techniques and feature engineering for accurate valuations.",
      technologies: ["Python", "Regression", "Feature Engineering"],
      github: "https://github.com/vinodbavage31/House-price-pred",
    },
    {
      title: "Bike Rental Analysis",
      description:
        "Comprehensive analysis and prediction of bike rental trends using temporal patterns and environmental factors.",
      technologies: ["Python", "Time Series", "Pandas", "Visualization"],
      github: "https://github.com/vinodbavage31/bike-rental",
    },
  ];

  return (
    <section id="projects" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      
      {/* Decorative glowing orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />
      
      {/* Grid lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className={`section-header transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Real-world machine learning and data science projects showcasing practical problem-solving
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg shadow-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Featured Projects</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                className={`glass-card border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Neon border glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: 'inset 0 0 30px hsl(190 100% 50% / 0.1), 0 0 30px hsl(190 100% 50% / 0.2)' }}
                />
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge className="mb-3 bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-lg">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                      <CardTitle className="text-xl leading-tight">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs font-semibold border-primary/50 bg-primary/10 text-primary">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-secondary/80 border border-border/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button asChild size="sm" className="gap-1.5 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/20">
                      <Link to={project.detailsLink}>
                        View Details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    {project.liveDemo && (
                      <Button asChild variant="outline" size="sm" className="gap-1.5 border-primary/40 hover:bg-primary/10">
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button asChild variant="outline" size="sm" className="gap-1.5 border-border/50 hover:bg-secondary">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className={`text-xl font-semibold mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
                className={`glass-card border border-border/30 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: '0 0 30px hsl(190 100% 50% / 0.1)' }}
                />
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-secondary/80 border border-border/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm" className="gap-1.5 w-full border-border/50 hover:border-primary/50 hover:bg-primary/5">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
