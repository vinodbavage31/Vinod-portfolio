import { ArrowLeft, ExternalLink, Github, Linkedin, Leaf, Brain, Zap, Target, Database, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RiceLeafDetection = () => {
  const solutionCards = [
    {
      icon: Brain,
      title: "Deep Learning Classification",
      description: "CNN-based model trained on rice leaf images to classify disease types with high accuracy",
      metric: "Multi-class",
      metricLabel: "Classification"
    },
    {
      icon: Target,
      title: "Disease Detection",
      description: "Identifies common rice diseases including Bacterial Blight, Brown Spot, and Leaf Smut",
      metric: "4+ Diseases",
      metricLabel: "Detected"
    },
    {
      icon: Zap,
      title: "Real-time Inference",
      description: "Fast image processing enables quick diagnosis for immediate agricultural decisions",
      metric: "Instant",
      metricLabel: "Results"
    },
    {
      icon: Leaf,
      title: "Crop Health Impact",
      description: "Early disease detection helps prevent crop loss and optimize treatment timing",
      metric: "Preventive",
      metricLabel: "Care"
    }
  ];

  const techStack = [
    { name: "Python", category: "Language" },
    { name: "TensorFlow", category: "Framework" },
    { name: "Keras", category: "API" },
    { name: "CNN", category: "Architecture" },
    { name: "OpenCV", category: "Image Processing" },
    { name: "NumPy", category: "Computation" },
    { name: "Matplotlib", category: "Visualization" },
    { name: "Streamlit", category: "Deployment" }
  ];

  const workflowSteps = [
    { step: "01", title: "Image Acquisition", description: "Collect rice leaf images from various sources and conditions" },
    { step: "02", title: "Preprocessing", description: "Resize, normalize, and augment images for model training" },
    { step: "03", title: "Feature Extraction", description: "CNN layers extract visual patterns and disease indicators" },
    { step: "04", title: "Classification", description: "Softmax layer outputs disease class probabilities" },
    { step: "05", title: "Prediction", description: "Model returns diagnosed disease with confidence score" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/vinodbavage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/vinodbavage31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-500/10 via-background to-emerald-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-500/10 text-green-600 border-green-500/20">
              Computer Vision / Deep Learning
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Rice Leaf Disease Detection
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              AI-Powered Agricultural Health Monitoring System
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-green-600 hover:bg-green-700">
                <a href="https://riceleafdetection.lovable.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="https://github.com/vinodbavage31" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Database className="h-6 w-6 text-green-600" />
                  Problem Statement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Rice is one of the world's most important staple crops, feeding billions of people globally. 
                  However, rice crops are highly susceptible to various diseases that can significantly reduce yield 
                  and quality. Traditional disease identification relies on manual inspection by agricultural experts, 
                  which is time-consuming, subjective, and not scalable.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Farmers often lack access to expert diagnosis, leading to delayed treatment and substantial crop losses. 
                  There is a critical need for an automated, accurate, and accessible solution that can identify rice 
                  leaf diseases early and enable timely intervention.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Solution Overview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {solutionCards.map((card, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-green-500/10 hover:border-green-500/30">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <card.icon className="h-10 w-10 text-green-600" />
                      <div className="text-right">
                        <span className="text-2xl font-bold text-green-600">{card.metric}</span>
                        <p className="text-xs text-muted-foreground">{card.metricLabel}</p>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{card.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Real-World Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6 border-green-500/20">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Reduced Crop Loss</h3>
                <p className="text-sm text-muted-foreground">
                  Early detection enables timely treatment, minimizing disease spread and crop damage
                </p>
              </Card>
              <Card className="text-center p-6 border-green-500/20">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Accessible Diagnosis</h3>
                <p className="text-sm text-muted-foreground">
                  Farmers can get instant disease identification without expert consultation
                </p>
              </Card>
              <Card className="text-center p-6 border-green-500/20">
                <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cost Effective</h3>
                <p className="text-sm text-muted-foreground">
                  Reduces dependency on manual inspection and optimizes pesticide usage
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <Layers className="inline-block h-8 w-8 mr-2 text-green-600" />
              ML Pipeline Workflow
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {workflowSteps.map((item, index) => (
                <div key={index} className="relative">
                  <Card className="h-full text-center p-4 border-green-500/20 hover:border-green-500/40 transition-colors">
                    <div className="text-3xl font-bold text-green-600/30 mb-2">{item.step}</div>
                    <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </Card>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-green-500">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-green-500/10 hover:bg-green-500/20 transition-colors"
                >
                  <span className="font-semibold">{tech.name}</span>
                  <span className="text-muted-foreground ml-2">• {tech.category}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-500/10 via-background to-emerald-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Experience the Application</h2>
            <p className="text-muted-foreground mb-8">
              Try the live demo to see how AI can revolutionize agricultural disease detection
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-green-600 hover:bg-green-700">
                <a href="https://riceleafdetection.lovable.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Try Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/#portfolio">
                  View More Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Vinod Bavage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RiceLeafDetection;
