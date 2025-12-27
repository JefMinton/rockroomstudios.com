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
          <div className="rock-card p-8 rounded-sm flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-primary" />
              <h3 className="font-oswald text-2xl font-bold">BAND CLASS</h3>
            </div>
            <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">
              The Sandbox
            </div>
            
            <div className="text-sm text-secondary font-semibold mb-4">
              Open Enrollment. Minimal experience required.
            </div>
            
            <p className="text-muted-foreground mb-6">
              Full band environment. All instruments welcome. A low-pressure, high-energy environment to find your footing, try out different instruments and band roles, jam with a variety of other musicians, socialize, and build confidence before hitting the main stage.
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <span className="text-foreground font-semibold">The Format:</span>
                <span className="text-muted-foreground"> Weekly 60-minute guided group sessions.</span>
              </div>
              <div>
                <span className="text-foreground font-semibold">The Goal:</span>
                <span className="text-muted-foreground"> Learn to play your instrument naturally in a band. Have fun :)</span>
              </div>
            </div>
            
            <div className="mb-8 mt-auto">
              <div className="text-3xl font-bold text-foreground">
                $100<span className="text-lg text-muted-foreground font-normal"> / monthly</span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">(cancel anytime)</div>
            </div>
            
            <a 
              href="#enroll-rock-class" 
              className="btn-rock-outline py-3 rounded-sm text-center block"
            >
              Join Band Class
            </a>
          </div>
          
          {/* Rock Band (Flagship) */}
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
              The Flagship
            </div>
            
            <div className="text-sm text-secondary font-semibold mb-4">
              Admission by Audition or Invitation Only.
            </div>
            
            <p className="text-muted-foreground mb-6">
              For serious rockers. We select students based on talent, drive, and chemistry to form committed bands and train them to succeed beyond the 8-week scope of the session.
            </p>
            
            <div className="space-y-4 mb-6 text-sm">
              <div>
                <span className="text-foreground font-semibold">The Requirement:</span>
                <span className="text-muted-foreground"> You must be able to at least hold a beat, carry a tune, play basic chords. No cap on proficiency—bring your best.</span>
              </div>
              <div>
                <span className="text-foreground font-semibold">Total Immersion:</span>
                <span className="text-muted-foreground"> Your band selects a specific sub-genre (Hair Metal, Southern Rock, 80s Punk, etc). Everything we build—from your stage persona and band logo to your original songwriting—will adhere to this theme. You don't just play the part; you become it.</span>
              </div>
              <div>
                <span className="text-foreground font-semibold">The Showcase Video:</span>
                <span className="text-muted-foreground"> We track the band's journey from day one. We produce a final video feature that highlights your hard work, the challenges you overcame, and the story of your band's evolution. This video, along with your final concert footage is published on our social media platforms and regularly promoted.</span>
              </div>
              <div>
                <span className="text-foreground font-semibold">The Professional Launchpad:</span>
                <span className="text-muted-foreground"> We prime your band to turn pro. You walk away with a basic Electronic Press Kit (EPK)—including your bio, band photos, and high-quality concert footage. If you decide to stay together, you have the assets you need to start booking real gigs immediately.</span>
              </div>
              <div>
                <span className="text-foreground font-semibold">The Goal:</span>
                <span className="text-muted-foreground"> A professional, ticketed headline concert on The Underground stage.</span>
              </div>
            </div>
            
            <div className="mb-8 mt-auto">
              <div className="text-3xl font-bold text-foreground">
                $800<span className="text-lg text-muted-foreground font-normal"> / 8-week session</span>
              </div>
            </div>
            
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
