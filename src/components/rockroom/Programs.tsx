import { Check, Star, Zap } from 'lucide-react';

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="red-line w-24 mx-auto mb-8" />
        
        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
          OUR <span className="text-primary neon-glow-subtle">PROGRAMS</span>
        </h2>
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          From sandbox to stage—choose the path that fits your musical journey.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Rock Class (Sandbox) */}
          <div className="rock-card p-8 rounded-sm flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-primary" />
              <h3 className="font-oswald text-2xl font-bold">ROCK CLASS</h3>
            </div>
            <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">
              The Sandbox Sessions
            </div>
            
            <p className="text-muted-foreground mb-6">
              The entry point—a low-pressure, high-energy environment for musicians to find their footing. 
              Weekly guided group sessions where adaptability is key.
            </p>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-foreground">
                $100<span className="text-lg text-muted-foreground font-normal">/month</span>
              </div>
              <div className="text-sm text-primary mt-1">First class is FREE!</div>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "Weekly 60-minute guided group sessions",
                "Youth & Adult sessions available",
                "Max 8 musicians per session",
                "Learn to adapt—\"Play the hand you're dealt\"",
                "Ongoing enrollment, withdraw anytime",
                "Recruitment funnel for Flagship program"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#enroll-rock-class" 
              className="btn-rock-outline py-3 rounded-sm text-center block"
            >
              Join Rock Class
            </a>
          </div>
          
          {/* Flagship (Rock Band) */}
          <div className="rock-card p-8 rounded-sm flex flex-col h-full relative overflow-hidden">
            {/* Featured badge */}
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold uppercase rounded-sm">
              Audition Required
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-8 h-8 text-secondary" />
              <h3 className="font-oswald text-2xl font-bold">ROCK BAND</h3>
            </div>
            <div className="text-sm text-secondary font-semibold uppercase tracking-wider mb-4">
              The Flagship Program
            </div>
            
            <p className="text-muted-foreground mb-6">
              For musicians ready to commit. A dual-track mentorship designed to take you from 
              solitary practice to a headline performance on The Underground's main stage.
            </p>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-foreground">
                $800<span className="text-lg text-muted-foreground font-normal">/8-week session</span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">Invitation or Audition Only</div>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "8 weekly one-on-one private lessons",
                "8 weekly professional band rehearsals",
                "Culminates in a ticketed showcase concert",
                "Selected based on talent, drive & chemistry",
                "This isn't \"pay-to-play\"—it's \"play-to-win\"",
                "Scholarship opportunities available"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#enroll-rock-band" 
              className="btn-rock py-3 rounded-sm text-center block"
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
