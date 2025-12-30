import { motion } from 'framer-motion';

const RockFuLogo = () => {
  return (
    <div className="relative inline-block">
      {/* Main Logo Container */}
      <div className="flex items-end gap-1">
        {/* ROCK text with rock styling */}
        <motion.span 
          className="font-oswald text-5xl md:text-7xl lg:text-8xl font-black text-destructive tracking-tight"
          style={{
            textShadow: '3px 3px 0px hsl(var(--background)), 6px 6px 0px hsl(var(--primary) / 0.3)',
            letterSpacing: '-0.02em'
          }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* R with headband accent */}
          <span className="relative inline-block">
            R
            {/* Headband element */}
            <span 
              className="absolute top-[15%] left-[-5%] w-[110%] h-[12%] bg-primary rounded-sm"
              style={{
                transform: 'rotate(-3deg)',
                boxShadow: '0 0 10px hsl(var(--primary) / 0.5)'
              }}
            />
            {/* Headband tail */}
            <span 
              className="absolute top-[12%] right-[-35%] w-[40%] h-[6%] bg-primary rounded-full origin-left"
              style={{
                transform: 'rotate(25deg)',
                boxShadow: '0 0 8px hsl(var(--primary) / 0.4)'
              }}
            />
            <span 
              className="absolute top-[20%] right-[-40%] w-[35%] h-[5%] bg-primary rounded-full origin-left"
              style={{
                transform: 'rotate(15deg)',
                boxShadow: '0 0 8px hsl(var(--primary) / 0.4)'
              }}
            />
          </span>
          OCK
        </motion.span>

        {/* Fu - styled as kung fu with brush stroke aesthetic */}
        <motion.span 
          className="relative font-oswald text-4xl md:text-6xl lg:text-7xl font-bold text-primary ml-2"
          style={{
            fontStyle: 'italic',
            textShadow: '0 0 20px hsl(var(--primary) / 0.6), 0 0 40px hsl(var(--primary) / 0.3)',
          }}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* F with drumstick accent */}
          <span className="relative inline-block">
            F
            {/* Drumstick hitting motion lines */}
            <motion.span 
              className="absolute bottom-[5%] right-[-20%] text-xs md:text-sm text-destructive/60"
              animate={{ 
                opacity: [0.4, 1, 0.4],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ⚡
            </motion.span>
          </span>
          <span className="relative inline-block">
            u
            {/* Impact effect on u */}
            <motion.span 
              className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-destructive via-primary to-transparent rounded-full"
              animate={{ 
                scaleX: [0.8, 1, 0.8],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </span>
        </motion.span>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-2 left-0 w-full flex justify-center gap-1">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0.3, 0.8, 0.3], y: 0 }}
            transition={{ 
              duration: 1.5, 
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RockFuLogo;
