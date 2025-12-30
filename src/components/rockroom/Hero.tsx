import { ChevronDown } from 'lucide-react';
import heroLogo from '@/assets/rockfu-hero-logo.jpg';
import bannerBg from '@/assets/rockfu-banner-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <img 
        src={bannerBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
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
