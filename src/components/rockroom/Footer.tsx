import logo from '@/assets/rockroom-logo.png';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Rock Room" className="h-16 w-auto" />
            <div>
              <div className="font-oswald text-xl font-bold">ROCK ROOM</div>
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
          <p>&copy; {new Date().getFullYear()} Rock Room @ The Underground Live. All rights reserved.</p>
          <p>Play to Learn. Play to Win.</p>
          <a 
            href="/admin/login" 
            className="mt-2 text-xs text-muted-foreground/50 hover:text-primary transition-colors"
          >
            Admin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
