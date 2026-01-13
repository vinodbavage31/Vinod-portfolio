const AIBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
      {/* Main mesh gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-mesh)]" />
      
      {/* Large glowing orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      
      {/* Neural network grid - More visible */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="neural-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="2" fill="hsl(190 100% 50%)" />
            <circle cx="0" cy="0" r="1" fill="hsl(280 100% 65%)" />
            <circle cx="80" cy="0" r="1" fill="hsl(280 100% 65%)" />
            <circle cx="0" cy="80" r="1" fill="hsl(280 100% 65%)" />
            <circle cx="80" cy="80" r="1" fill="hsl(280 100% 65%)" />
            <line x1="40" y1="40" x2="80" y2="0" stroke="hsl(190 100% 50%)" strokeWidth="0.5" opacity="0.5" />
            <line x1="40" y1="40" x2="0" y2="0" stroke="hsl(190 100% 50%)" strokeWidth="0.5" opacity="0.5" />
            <line x1="40" y1="40" x2="80" y2="80" stroke="hsl(190 100% 50%)" strokeWidth="0.5" opacity="0.5" />
            <line x1="40" y1="40" x2="0" y2="80" stroke="hsl(190 100% 50%)" strokeWidth="0.5" opacity="0.5" />
          </pattern>
          <linearGradient id="grid-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.5" />
          </linearGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#grid-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-grid)" mask="url(#grid-mask)" />
      </svg>

      {/* Animated data streams */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse" />
      <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      {/* Floating particles - More visible */}
      <div className="absolute top-[15%] left-[20%] w-3 h-3 bg-primary/60 rounded-full blur-[2px] animate-float" />
      <div className="absolute top-[25%] right-[30%] w-2 h-2 bg-accent/70 rounded-full blur-[1px] animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[45%] left-[15%] w-4 h-4 bg-primary/40 rounded-full blur-[3px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] right-[20%] w-2.5 h-2.5 bg-accent/50 rounded-full blur-[2px] animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-[80%] left-[40%] w-3 h-3 bg-primary/50 rounded-full blur-[2px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[35%] right-[10%] w-2 h-2 bg-accent/60 rounded-full blur-[1px] animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[70%] left-[60%] w-3.5 h-3.5 bg-primary/45 rounded-full blur-[2px] animate-float" style={{ animationDelay: '2.5s' }} />

      {/* Subtle scanlines */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ 
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(190 100% 50% / 0.1) 2px, hsl(190 100% 50% / 0.1) 4px)' 
      }} />
    </div>
  );
};

export default AIBackground;
