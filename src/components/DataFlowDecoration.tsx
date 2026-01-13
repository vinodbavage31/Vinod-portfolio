interface DataFlowDecorationProps {
  className?: string;
}

const DataFlowDecoration = ({ className = '' }: DataFlowDecorationProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Horizontal data flow lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      
      {/* Animated data points */}
      <div className="absolute top-1/4 left-0 w-2 h-2 rounded-full bg-primary/40 animate-data-flow" />
      <div className="absolute top-1/2 left-0 w-1.5 h-1.5 rounded-full bg-accent/50 animate-data-flow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-3/4 left-0 w-2 h-2 rounded-full bg-primary/30 animate-data-flow" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default DataFlowDecoration;
