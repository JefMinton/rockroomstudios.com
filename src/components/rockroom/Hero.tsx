import { ChevronDown } from 'lucide-react';
import heroLogo from '@/assets/rockfu-hero-logo.jpg';
import bannerBg from '@/assets/rockfu-banner-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Banner Background Image */}
      <div className="absolute top-32 md:top-40 left-0 right-0 h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center">
        <img 
          src={bannerBg}
          alt=""
          className="w-full h-full object-contain"
          style={{ transform: 'scale(0.35)' }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Hero Logo */}
        <img 
          src={heroLogo} 
          alt="Rock Fu - Underground Live - Play to Learn" 
          className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto mb-8"
        />
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
