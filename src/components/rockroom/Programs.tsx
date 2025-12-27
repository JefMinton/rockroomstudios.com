import { Check, Star, Zap } from 'lucide-react';

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="red-line w-24 mx-auto mb-8" />
        
        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
          ROCK ROOM @ <span className="text-primary neon-glow-subtle">THE UNDERGROUND</span>
        </h2>
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-4 text-lg">
          We teach more than music. We build bands.
        </p>
        
        <p className="text-foreground text-center max-w-2xl mx-auto mb-16 text-xl font-oswald">
          Choose your track:
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Band Class (Sandbox) */}
          <div className="rock-card p-8 rounded-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-primary" />
              <h3 className="font-oswald text-2xl font-bold">BAND CLASS</h3>
            </div>
            <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">
              The Sandbox
            </div>
            
            <p className="text-muted-foreground mb-6">
              Open Enrollment. Minimal experience required. Full band environment. All instruments welcome. A low-pressure, high-energy environment to find your footing, try out different instruments and band roles, jam with a variety of other musicians, socialize, and build confidence before hitting the main stage.
            </p>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-foreground">
                $100<span className="text-lg text-muted-foreground font-normal">/month</span>
              </div>
              <div className="text-sm text-primary mt-1">First class is FREE!</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                "Weekly 60-minute guided group sessions",
                "Youth & Adult sessions available",
                "Learn to play your instrument naturally in a band",
                "Have fun :)",
                "Cancel anytime"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#enroll-rock-class" 
              className="btn-rock-outline py-3 rounded-sm text-center block mt-auto"
            >
              Join Band Class
            </a>
          </div>
          
          {/* Rock Band (Flagship) */}
          <div className="rock-card p-8 rounded-sm flex flex-col relative overflow-hidden">
            {/* Featured badge */}
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold uppercase rounded-sm">
              Audition Required
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-8 h-8 text-secondary" />
              <h3 className="font-oswald text-2xl font-bold">ROCK BAND</h3>
            </div>
            <div className="text-sm text-secondary font-semibold uppercase tracking-wider mb-4">
              The Flagship
            </div>
            
            <p className="text-muted-foreground mb-6">
              Admission by Audition or Invitation Only. For serious rockers. We select students based on talent, drive, and chemistry to form committed bands and train them to succeed beyond the 8-week scope of the session.
            </p>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-foreground">
                $800<span className="text-lg text-muted-foreground font-normal">/8-week session</span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">Youth & Adult sessions available</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                "Must hold a beat, carry a tune, or play basic chords minimum",
                "Total Immersion: Pick a sub-genre and become it",
                "Showcase Video: We document your journey from day one",
                "Professional Launchpad: Walk away with a basic EPK",
                "The Goal: A ticketed headline concert on The Underground stage"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#enroll-rock-band" 
              className="btn-rock py-3 rounded-sm text-center block mt-auto"
            >
              Submit Your Audition
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
