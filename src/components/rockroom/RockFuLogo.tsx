import { motion } from 'framer-motion';

const RockFuLogo = () => {
  return (
    <motion.div 
      className="relative inline-block"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Diagonal slash accent behind text */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          {/* Brush stroke slash */}
          <path 
            d="M15 85 Q50 50 85 15" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.4"
            strokeLinecap="round"
          />
          <path 
            d="M20 90 Q55 55 90 20" 
            stroke="hsl(var(--destructive))" 
            strokeWidth="1.5" 
            fill="none" 
            opacity="0.3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main text container */}
      <div className="relative flex items-baseline">
        {/* ROCK - Heavy, bold, destructive red */}
        <span 
          className="font-oswald text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight"
          style={{
            color: 'hsl(var(--destructive))',
            textShadow: `
              2px 2px 0px hsl(var(--background)),
              4px 4px 0px hsl(var(--primary) / 0.2),
              0 0 30px hsl(var(--destructive) / 0.3)
            `,
            letterSpacing: '-0.03em',
          }}
        >
          ROCK
        </span>

        {/* Fu - Styled as martial arts with brush stroke feel */}
        <span 
          className="relative font-oswald text-4xl md:text-6xl lg:text-7xl font-bold ml-3 md:ml-4"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.5))',
            fontStyle: 'italic',
            letterSpacing: '0.02em',
          }}
        >
          {/* Brush underline accent */}
          <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[3px] md:h-1 bg-gradient-to-r from-primary via-primary to-transparent rounded-full opacity-80" />
          Fu
        </span>
      </div>

      {/* Subtle corner accents - martial arts frame */}
      <div className="absolute -top-2 -left-4 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-primary/40" />
      <div className="absolute -bottom-2 -right-4 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-primary/40" />
    </motion.div>
  );
};

export default RockFuLogo;
