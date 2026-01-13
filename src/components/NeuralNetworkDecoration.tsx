interface NeuralNetworkDecorationProps {
  className?: string;
  variant?: 'left' | 'right';
}

const NeuralNetworkDecoration = ({ className = '', variant = 'left' }: NeuralNetworkDecorationProps) => {
  const isLeft = variant === 'left';
  
  return (
    <div className={`absolute ${isLeft ? '-left-32' : '-right-32'} top-1/2 -translate-y-1/2 opacity-10 dark:opacity-15 pointer-events-none ${className}`}>
      <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Neural network nodes */}
        <circle cx="50" cy="50" r="8" className="fill-primary" />
        <circle cx="150" cy="80" r="6" className="fill-accent" />
        <circle cx="80" cy="150" r="10" className="fill-primary" />
        <circle cx="170" cy="180" r="5" className="fill-accent" />
        <circle cx="30" cy="220" r="7" className="fill-primary" />
        <circle cx="120" cy="250" r="9" className="fill-accent" />
        <circle cx="60" cy="320" r="6" className="fill-primary" />
        <circle cx="160" cy="350" r="8" className="fill-accent" />
        <circle cx="100" cy="380" r="5" className="fill-primary" />
        
        {/* Connection lines */}
        <line x1="50" y1="50" x2="150" y2="80" className="stroke-primary" strokeWidth="1" opacity="0.5" />
        <line x1="50" y1="50" x2="80" y2="150" className="stroke-primary" strokeWidth="1" opacity="0.5" />
        <line x1="150" y1="80" x2="80" y2="150" className="stroke-accent" strokeWidth="1" opacity="0.5" />
        <line x1="80" y1="150" x2="170" y2="180" className="stroke-primary" strokeWidth="1" opacity="0.5" />
        <line x1="80" y1="150" x2="30" y2="220" className="stroke-accent" strokeWidth="1" opacity="0.5" />
        <line x1="170" y1="180" x2="120" y2="250" className="stroke-primary" strokeWidth="1" opacity="0.5" />
        <line x1="30" y1="220" x2="120" y2="250" className="stroke-accent" strokeWidth="1" opacity="0.5" />
        <line x1="120" y1="250" x2="60" y2="320" className="stroke-primary" strokeWidth="1" opacity="0.5" />
        <line x1="120" y1="250" x2="160" y2="350" className="stroke-accent" strokeWidth="1" opacity="0.5" />
        <line x1="60" y1="320" x2="100" y2="380" className="stroke-primary" strokeWidth="1" opacity="0.5" />
        <line x1="160" y1="350" x2="100" y2="380" className="stroke-accent" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
  );
};

export default NeuralNetworkDecoration;
