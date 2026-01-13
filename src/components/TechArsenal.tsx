import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const techLogos = [
  // Row 1 - Moving left to right
  { name: "Python", icon: "🐍" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Scikit-learn", icon: "🔬" },
  { name: "Pandas", icon: "🐼" },
  { name: "NumPy", icon: "📊" },
  { name: "Jupyter", icon: "📓" },
  { name: "SQL", icon: "🗄️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Git", icon: "🔀" },
  { name: "GitHub", icon: "🐙" },
  { name: "Docker", icon: "🐳" },
  { name: "Kaggle", icon: "🏆" },
];

const techLogos2 = [
  // Row 2 - Moving right to left
  { name: "MySQL", icon: "💾" },
  { name: "Matplotlib", icon: "📈" },
  { name: "Seaborn", icon: "🌊" },
  { name: "XGBoost", icon: "🚀" },
  { name: "OpenCV", icon: "👁️" },
  { name: "Keras", icon: "🔷" },
  { name: "VS Code", icon: "💻" },
  { name: "Linux", icon: "🐧" },
  { name: "AWS", icon: "☁️" },
  { name: "Flask", icon: "⚗️" },
  { name: "Streamlit", icon: "🌐" },
  { name: "Power BI", icon: "📊" },
];

const TechArsenal = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className={`section-header mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Tech Arsenal</h2>
          <p className="section-subtitle">
            Industry-standard tools and technologies I work with
          </p>
        </div>

        {/* Scrolling logos container */}
        <div className="space-y-6">
          {/* Row 1 - Left to Right */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex animate-scroll-left">
              {[...techLogos, ...techLogos, ...techLogos].map((tech, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 mx-4 group"
                >
                  <div className="flex items-center gap-3 px-6 py-4 glass-card rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(190_100%_50%/0.3)]">
                    <span className="text-3xl">{tech.icon}</span>
                    <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex animate-scroll-right">
              {[...techLogos2, ...techLogos2, ...techLogos2].map((tech, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 mx-4 group"
                >
                  <div className="flex items-center gap-3 px-6 py-4 glass-card rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(280_100%_65%/0.3)]">
                    <span className="text-3xl">{tech.icon}</span>
                    <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechArsenal;
