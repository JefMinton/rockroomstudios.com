import { Link } from 'react-router-dom';
import logo from '@/assets/rockfu-circular-logo.jpg';
import bannerBg from '@/assets/rockfu-banner-bg.jpg';

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border py-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ 
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Rock Fu" className="h-16 w-auto" />
            <div>
              <div className="font-oswald text-xl font-bold">ROCK FU</div>
              <div className="text-primary text-sm">@ THE UNDERGROUND LIVE</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#programs" className="text-muted-foreground hover:text-primary transition-colors">Programs</a>
            <a href="#enroll" className="text-muted-foreground hover:text-primary transition-colors">Enroll</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="red-line w-full my-8" />
        
        <div className="flex flex-col items-center gap-2 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Rock Fu @ The Underground Live. All rights reserved.</p>
          <p>Play to Learn. Play to Win.</p>
          <Link 
            to="/admin/login" 
            className="mt-2 text-xs text-muted-foreground/50 hover:text-primary transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
