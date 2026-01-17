import { Mail, Phone, Music, Guitar } from 'lucide-react';

const EnrollSection = () => {
  return (
    <section id="enroll" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="red-line w-24 mx-auto mb-8" />
        
        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-primary neon-glow-subtle">SIGN UP</span> OR AUDITION
        </h2>
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Ready to start your musical journey? Contact us to enroll or schedule an audition.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Band Practice Card */}
          <div id="enroll-band-practice" className="rock-card p-8 rounded-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center">
                <Music className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-oswald text-2xl font-bold">BAND CLASS</h3>
                <div className="text-primary text-sm uppercase tracking-wider">The Sandbox</div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Join our weekly group sessions! Your first class is FREE—perfect for beginners and intermediate players looking to jam with others.
            </p>
            
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Format:</span>
                <span>Weekly 60-min sessions</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Investment:</span>
                <span>$100/month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">First Class:</span>
                <span className="text-primary font-semibold">FREE</span>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">To sign up, please contact:</p>
              <div className="space-y-3">
                <a href="mailto:jeff.a.minton@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  jeff.a.minton@gmail.com
                </a>
                <a href="tel:717-417-8806" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  (717) 417-8806
                </a>
              </div>
            </div>
          </div>
          
          {/* Rock Band Card */}
          <div id="enroll-rock-band" className="rock-card p-8 rounded-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center">
                <Guitar className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-oswald text-2xl font-bold">ROCK BAND</h3>
                <div className="text-primary text-sm uppercase tracking-wider">The Flagship</div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Our immersive 8-week program for dedicated musicians. Membership is by audition or invitation only.
            </p>
            
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Format:</span>
                <span>8-week immersion</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Investment:</span>
                <span>$800/session</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Admission:</span>
                <span className="text-primary font-semibold">Audition Required</span>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">To audition, please contact:</p>
              <div className="space-y-3">
                <a href="mailto:jeff.a.minton@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  jeff.a.minton@gmail.com
                </a>
                <a href="tel:717-417-8806" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  (717) 417-8806
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollSection;
