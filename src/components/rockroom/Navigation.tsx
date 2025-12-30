import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/rockfu-circular-logo.png';
import navBanner from '@/assets/rockfu-nav-banner.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#enroll', label: 'Enroll' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border overflow-hidden">
      {/* Banner Background Image */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url(${navBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
{/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Rock Fu" 
              className="h-14 w-auto drop-shadow-[0_0_8px_hsl(var(--primary))] hover:drop-shadow-[0_0_16px_hsl(var(--primary))] transition-all duration-300" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-oswald text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enroll"
              className="btn-rock px-6 py-2 rounded-sm text-sm"
            >
              Sign Up Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-oswald text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enroll"
              onClick={() => setIsOpen(false)}
              className="btn-rock px-6 py-3 rounded-sm text-center mt-2"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
