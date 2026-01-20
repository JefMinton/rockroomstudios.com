import { Mail, Phone, Guitar, User } from 'lucide-react';

const EnrollSection = () => {
  return (
    <section id="enroll" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="red-line w-24 mx-auto mb-8" />
        
        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-primary neon-glow-subtle">GET STARTED</span> TODAY
        </h2>
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Ready to start your musical journey? Contact us to audition or book lessons.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
          
          {/* Private Lessons Card */}
          <div id="enroll-private-lessons" className="rock-card p-8 rounded-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center">
                <User className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-oswald text-2xl font-bold">PRIVATE LESSONS</h3>
                <div className="text-primary text-sm uppercase tracking-wider">One-on-One</div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Personalized instruction at your own pace. Great for beginners or as preparation for Rock Band auditions.
            </p>
            
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">30 min:</span>
                <span>$30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">1 hour:</span>
                <span>$60</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">1.5 hours:</span>
                <span>$90</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-border/50">
                <span className="text-muted-foreground text-xs">Group/Band Coaching:</span>
                <span className="text-xs">+$10/30min per person</span>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">To book lessons, please contact:</p>
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
