import { ArrowLeft, Github, Linkedin, Target, TrendingUp, Tag, Shield, Database, Brain, BarChart3, GitBranch, Zap, Server, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AbcTechItsm = () => {
  const solutionCards = [
    {
      icon: Target,
      title: "High Priority Prediction",
      metrics: "96% Accuracy, 0.89 AUC",
      description: "Machine learning model to predict high-priority incidents before escalation, enabling proactive resource allocation.",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: TrendingUp,
      title: "Incident Forecasting",
      metrics: "Quarterly & Annual",
      description: "Time-series analysis for predicting incident volumes, helping teams prepare for peak periods.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Tag,
      title: "Auto-Tagging System",
      metrics: "Priority P1–P5, 75% Accuracy",
      description: "Automated classification of incidents by priority level and department for faster routing.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Shield,
      title: "RFC Failure Prediction",
      metrics: "98% F1-score, XGBoost + SMOTE",
      description: "Proactively identify high-risk change requests to prevent service disruptions.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  const techStack = [
    { name: "Python", icon: "🐍" },
    { name: "Scikit-learn", icon: "🔬" },
    { name: "XGBoost", icon: "🚀" },
    { name: "Pandas", icon: "🐼" },
    { name: "SQL", icon: "💾" },
    { name: "Matplotlib", icon: "📊" },
    { name: "Seaborn", icon: "📈" },
    { name: "SMOTE", icon: "⚖️" },
  ];

  const workflowSteps = [
    { step: "1", title: "Data Collection", description: "45K+ ITSM records from SQL database", icon: Database },
    { step: "2", title: "Preprocessing", description: "Feature engineering & data cleaning", icon: GitBranch },
    { step: "3", title: "Model Training", description: "XGBoost, Random Forest, Logistic Regression", icon: Brain },
    { step: "4", title: "Evaluation", description: "Cross-validation & performance metrics", icon: BarChart3 },
    { step: "5", title: "Deployment", description: "Production-ready prediction pipeline", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/vinodbavage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/vinodbavage31"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              Featured Project
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              ABC TECH — ITSM Incident Analysis & Prediction
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Proactive ITSM Incident Analysis & Predictive Automation
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
                <a
                  href="https://proactive-it-insight.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a
                  href="https://github.com/vinodbavage31/ABC-TECH-PROJECT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  View Repository
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2">
                <a
                  href="https://www.linkedin.com/in/vinodbavage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Problem Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-primary" />
                    Business Problem
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    IT Service Management teams face challenges in:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Reactive incident handling leading to SLA breaches</li>
                    <li>Manual prioritization causing delays</li>
                    <li>Unpredictable incident volumes affecting staffing</li>
                    <li>High-risk change requests causing service disruptions</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Predict high-priority incidents proactively</li>
                    <li>Forecast incident volumes for resource planning</li>
                    <li>Automate incident classification and routing</li>
                    <li>Identify risky change requests before implementation</li>
                    <li>Reduce MTTR and improve SLA compliance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Cards Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Solutions</h2>
              <p className="text-muted-foreground text-lg">
                Four ML-powered solutions transforming IT service management
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {solutionCards.map((solution, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${solution.bgColor} flex items-center justify-center mb-4`}>
                      <solution.icon className={`h-6 w-6 ${solution.color}`} />
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {solution.metrics}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {solution.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
              <p className="text-muted-foreground text-lg">
                Tools and technologies powering the solution
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-base px-4 py-2 hover:bg-primary/10 transition-colors cursor-default"
                >
                  <span className="mr-2">{tech.icon}</span>
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture/Workflow Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ML Pipeline Workflow</h2>
              <p className="text-muted-foreground text-lg">
                End-to-end machine learning pipeline architecture
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="text-center border-2 hover:border-primary/50 transition-colors h-full">
                    <CardContent className="pt-6 pb-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold">
                        {step.step}
                      </div>
                      <step.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-primary z-10">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Model Performance Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Model Performance</h2>
              <p className="text-muted-foreground text-lg">
                Key metrics demonstrating solution effectiveness
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl font-bold text-primary mb-2">96%</div>
                  <p className="text-muted-foreground">Prediction Accuracy</p>
                  <p className="text-sm text-muted-foreground mt-1">High Priority Incidents</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl font-bold text-primary mb-2">98%</div>
                  <p className="text-muted-foreground">F1-Score</p>
                  <p className="text-sm text-muted-foreground mt-1">RFC Failure Detection</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl font-bold text-primary mb-2">45K+</div>
                  <p className="text-muted-foreground">Records Analyzed</p>
                  <p className="text-sm text-muted-foreground mt-1">ITSM Dataset</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Repository Details Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  Repository & Execution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Project Structure</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`ABC-TECH-PROJECT/
├── data/
│   └── itsm_dataset.csv
├── notebooks/
│   ├── EDA.ipynb
│   └── Model_Training.ipynb
├── src/
│   ├── preprocessing.py
│   ├── models.py
│   └── utils.py
└── README.md`}
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quick Start</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`# Clone repository
git clone https://github.com/
  vinodbavage31/ABC-TECH-PROJECT

# Install dependencies
pip install -r requirements.txt

# Run analysis
python src/models.py`}
                    </pre>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild>
                    <a
                      href="https://github.com/vinodbavage31/ABC-TECH-PROJECT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Vinod Bavage. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/vinodbavage31"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vinodbavage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AbcTechItsm;
