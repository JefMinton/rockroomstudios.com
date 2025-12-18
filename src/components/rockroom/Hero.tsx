import { ChevronDown } from 'lucide-react';
import background from '@/assets/rockroom-background.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-contain md:bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold text-destructive mb-4">
          ROCK ROOM
        </h1>
        <div className="text-primary neon-glow font-oswald text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
          UNDERGROUND LIVE
        </div>
        <p className="text-xl md:text-2xl text-foreground/90 font-oswald tracking-widest mb-8">
          PLAY TO LEARN
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Where musicians become bands. Professional music education at Camp Hill's iconic Underground Live venue.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#enroll" className="btn-rock px-8 py-4 rounded-sm text-lg">
            Start Your Journey
          </a>
          <a href="#programs" className="btn-rock-outline px-8 py-4 rounded-sm text-lg">
            View Programs
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
