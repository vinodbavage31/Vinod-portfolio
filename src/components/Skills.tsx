import { Code2, Database, Brain, BarChart3, GitBranch, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["Python", "SQL"],
      gradient: "from-cyan-500 to-blue-500",
      glowColor: "hsl(190 100% 50%)",
    },
    {
      title: "Data Science",
      icon: BarChart3,
      skills: ["Pandas", "NumPy", "EDA", "Feature Engineering", "Data Cleaning"],
      gradient: "from-emerald-500 to-teal-500",
      glowColor: "hsl(160 100% 45%)",
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Scikit-learn", "XGBoost", "Model Evaluation", "Hyperparameter Tuning", "SMOTE"],
      gradient: "from-purple-500 to-pink-500",
      glowColor: "hsl(280 100% 65%)",
    },
    {
      title: "Deep Learning",
      icon: LineChart,
      skills: ["TensorFlow", "Keras", "CNNs", "Image Classification"],
      gradient: "from-rose-500 to-orange-500",
      glowColor: "hsl(350 100% 60%)",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "SQL Queries", "Data Extraction"],
      gradient: "from-amber-500 to-yellow-500",
      glowColor: "hsl(45 100% 50%)",
    },
    {
      title: "Tools & Visualization",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Jupyter", "Matplotlib", "Seaborn"],
      gradient: "from-cyan-500 to-teal-500",
      glowColor: "hsl(180 100% 45%)",
    },
  ];

  return (
    <section id="skills" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5" />
      
      {/* Circuit lines */}
      <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="section-container relative z-10">
        <div className={`section-header transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technical skills and tools I use to build data-driven solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              style={{ 
                transitionDelay: `${index * 100}ms`,
              }}
              className={`glass-card border-border/30 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                style={{ backgroundColor: category.glowColor, opacity: 0 }}
              />
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                style={{ background: `radial-gradient(circle at center, ${category.glowColor}, transparent 70%)` }}
              />
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs font-medium bg-secondary/80 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
