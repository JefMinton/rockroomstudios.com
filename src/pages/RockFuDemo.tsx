import { ChevronDown, Music, Users, Mic2, Mail, Phone, MapPin } from 'lucide-react';
import background from '@/assets/rockroom-background.jpg';
import logo from '@/assets/rockroom-logo.png';
import { Link } from 'react-router-dom';

// Demo page showing "Rock Fu" branding instead of "Rock Room"
// This is a standalone demo page that doesn't affect the main site

const RockFuDemo = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Rock Fu" className="h-10 w-auto" />
              <span className="font-oswald text-xl font-bold">ROCK FU</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#programs" className="text-muted-foreground hover:text-primary transition-colors">Programs</a>
              <a href="#enroll" className="text-muted-foreground hover:text-primary transition-colors">Enroll</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <img 
            src={background}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
            <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold text-destructive mb-4">
              ROCK FU
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
          
          <a 
            href="#about" 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-primary transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-background texture-overlay">
          <div className="container mx-auto px-4">
            <div className="red-line w-24 mx-auto mb-8" />
            
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
              ABOUT <span className="text-primary neon-glow-subtle">ROCK FU</span>
            </h2>
            
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-lg">
              Rock Fu @ The Underground Live is a music education initiative designed to transform 
              musicians into performers. We turn the venue's "dark hours" into a learning space where 
              students develop skills, form bands, and take the stage.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Music,
                  title: "Professional Instruction",
                  description: "20+ years of teaching experience from Program Director Jef Minton"
                },
                {
                  icon: Users,
                  title: "Build Your Band",
                  description: "We don't just teach music—we build bands from the ground up"
                },
                {
                  icon: Mic2,
                  title: "Real Stage Experience",
                  description: "Perform on The Underground's professional main stage"
                },
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="rock-card p-6 rounded-sm hover:border-primary/50 transition-all duration-300"
                >
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-oswald text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="red-line w-24 mx-auto mb-8" />
            
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
              OUR <span className="text-primary neon-glow-subtle">PROGRAMS</span>
            </h2>
            
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
              Two paths to rock stardom. Choose your journey.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Band Class Card */}
              <div className="rock-card p-8 rounded-sm flex flex-col">
                <div className="text-primary text-sm font-semibold mb-2">THE SANDBOX</div>
                <h3 className="font-oswald text-2xl font-bold mb-4">BAND CLASS</h3>
                <p className="text-muted-foreground mb-4">
                  Open Enrollment. Minimal experience required. Full band environment.
                </p>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-foreground">
                    $100<span className="text-lg text-muted-foreground font-normal">/month</span>
                  </div>
                  <div className="text-sm text-primary mt-1">First class is FREE!</div>
                </div>
                <a 
                  href="#enroll" 
                  className="btn-rock-outline py-3 rounded-sm text-center block mt-auto"
                >
                  Join Band Class
                </a>
              </div>

              {/* Rock Band Card */}
              <div className="rock-card p-8 rounded-sm border-secondary/50 flex flex-col">
                <div className="text-secondary text-sm font-semibold mb-2">THE FLAGSHIP</div>
                <h3 className="font-oswald text-2xl font-bold mb-4">ROCK BAND</h3>
                <p className="text-muted-foreground mb-4">
                  Admission by Audition or Invitation Only. For serious rockers.
                </p>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-foreground">
                    $800<span className="text-lg text-muted-foreground font-normal">/8-week session</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Youth & Adult sessions available</div>
                </div>
                <a 
                  href="#enroll" 
                  className="btn-rock py-3 rounded-sm text-center block mt-auto"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="red-line w-24 mx-auto mb-8" />
            
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
              GET IN <span className="text-primary neon-glow-subtle">TOUCH</span>
            </h2>
            
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
              Ready to rock? Reach out to learn more about Rock Fu.
            </p>
            
            <div className="rock-card p-8 rounded-sm max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>contact@example.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>The Underground Live, Camp Hill, PA</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Rock Fu" className="h-16 w-auto" />
              <div>
                <div className="font-oswald text-xl font-bold">ROCK FU</div>
                <div className="text-primary text-sm">@ THE UNDERGROUND LIVE</div>
              </div>
            </div>
          </div>
          
          <div className="red-line w-full my-8" />
          
          <div className="flex flex-col items-center gap-2 text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Rock Fu @ The Underground Live. All rights reserved.</p>
            <p>Play to Learn. Play to Win.</p>
            <Link 
              to="/" 
              className="mt-2 text-primary hover:text-primary/80 transition-colors"
            >
              ← Back to Rock Room version
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RockFuDemo;
