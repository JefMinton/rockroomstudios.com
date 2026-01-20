import { Check, Star, User } from 'lucide-react';

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="red-line w-24 mx-auto mb-8" />
        
        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
          ROCK FU @ <span className="text-primary neon-glow-subtle">THE UNDERGROUND</span>
        </h2>
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-4 text-lg">
          We teach more than music. We build bands.
        </p>
        
        <p className="text-foreground text-center max-w-2xl mx-auto mb-16 text-xl font-oswald">
          Choose your track:
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
            
            <div className="mb-4">
              <div className="text-3xl font-bold text-foreground">
                $800<span className="text-lg text-muted-foreground font-normal">/8-week session</span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">Youth & Adult sessions available</div>
            </div>
            
            <div className="bg-secondary/10 border border-secondary/30 rounded-sm p-3 mb-6">
              <p className="text-sm text-secondary font-semibold mb-2">
                🎓 Scholarship Opportunities Available
              </p>
              <p className="text-xs text-muted-foreground">
                We're pursuing making this program free through donations, sponsors, and grants. Currently, we offer sponsor recognition for anyone willing to sponsor a student. Each student receives a sponsorship package to help earn funds.
              </p>
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
          
          {/* Private Lessons */}
          <div className="rock-card p-8 rounded-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-8 h-8 text-primary" />
              <h3 className="font-oswald text-2xl font-bold">PRIVATE LESSONS</h3>
            </div>
            <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">
              One-on-One Instruction
            </div>
            
            <p className="text-muted-foreground mb-6">
              Personalized instruction tailored to your goals. Whether you're just starting out or looking to sharpen your skills before auditioning for Rock Band, private lessons give you the focused attention you need to grow.
            </p>
            
            <div className="mb-4">
              <div className="text-3xl font-bold text-foreground">
                $30<span className="text-lg text-muted-foreground font-normal">/30 min</span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">$60/hour • $90/1.5 hours</div>
            </div>
            
            <div className="bg-primary/10 border border-primary/30 rounded-sm p-3 mb-6">
              <p className="text-sm text-primary font-semibold mb-2">
                🎸 Group Lessons & Band Coaching
              </p>
              <p className="text-xs text-muted-foreground">
                Private band coaching available for up to 8 people. Add $10 per half hour per additional person. Minimum 1 hour required for group instruction.
              </p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                "All skill levels welcome",
                "Flexible scheduling",
                "Guitar, bass, drums, vocals, keys & more",
                "Build your foundation before joining Rock Band",
                "Learn at your own pace"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#enroll-private-lessons" 
              className="btn-rock-outline py-3 rounded-sm text-center block mt-auto"
            >
              Book Private Lessons
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
