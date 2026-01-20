import { Mail, Phone, Guitar, User, CheckCircle, Star } from 'lucide-react';

const EnrollSection = () => {
  return (
    <section id="enroll" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="red-line w-24 mx-auto mb-8" />
        
        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-primary neon-glow-subtle">GET STARTED</span> TODAY
        </h2>
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 text-lg">
          Ready to start your musical journey?
        </p>
        
        {/* Emphasized Contact CTA */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl font-oswald text-foreground mb-4">
            To enroll in <span className="text-primary font-bold">Private Lessons</span> or audition for <span className="text-primary font-bold">Rock Band</span>, please email Jef at:
          </p>
          <a 
            href="mailto:jeff.a.minton@gmail.com" 
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors neon-glow-subtle"
          >
            <Mail className="w-8 h-8" />
            jeff.a.minton@gmail.com
          </a>
        </div>
        
        {/* Enrollment Information Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="rock-card p-8 rounded-sm">
            <h3 className="font-oswald text-2xl font-bold mb-6 text-center">
              Please Include the Following Information:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <h4 className="font-oswald text-lg text-primary uppercase tracking-wider">Basic Info</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">Name</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">Age</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">Phone, Email, City of Residence</strong></span>
                  </li>
                </ul>
              </div>
              
              {/* Musical Background */}
              <div className="space-y-4">
                <h4 className="font-oswald text-lg text-primary uppercase tracking-wider">Musical Background</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">Vocals:</strong> Lead vocals, backup vocals, or no vocals?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">Instruments:</strong> What do you play and your proficiency level for each?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">What kind of music moves you?</strong></span>
                  </li>
                </ul>
              </div>
              
              {/* Experience & Goals */}
              <div className="space-y-4">
                <h4 className="font-oswald text-lg text-primary uppercase tracking-wider">Experience & Goals</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">Musical experience so far</strong> (short paragraph)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">Musical goals</strong> you hope to achieve through this program</span>
                  </li>
                </ul>
              </div>
              
              {/* Commitment Level */}
              <div className="space-y-4">
                <h4 className="font-oswald text-lg text-primary uppercase tracking-wider">Commitment Level</h4>
                <p className="text-sm text-muted-foreground mb-2">How much time can you commit to practice?</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 1+ hour per day</li>
                  <li>• 30+ mins per day</li>
                  <li>• 15+ mins per day</li>
                </ul>
                <p className="text-xs text-muted-foreground/70 italic">
                  Minimum: 15 mins, 5 days/week. (Always good to take one day off!)
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Audition Info for Rock Band */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="rock-card p-8 rounded-sm border-l-4 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center">
                <Guitar className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-oswald text-2xl font-bold">ROCK BAND AUDITIONS</h3>
                <div className="text-primary text-sm uppercase tracking-wider">Additional Requirements</div>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Audition Video:</strong> Submit a video showing your basic skills and style. 
                Doesn't have to be professional—a cell phone video from your practice room is fine!
              </p>
              
              <div>
                <p className="text-foreground font-semibold mb-2">Interview Questions (in person or in writing):</p>
                <ul className="space-y-2 ml-4">
                  <li>• What is your favorite sub-genre of rock?</li>
                  <li>• Who are your favorite rock artists?</li>
                  <li>• What does it take to be in a successful rock band?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Rock Band Card */}
          <div id="enroll-rock-band" className="rock-card p-8 rounded-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-sm flex items-center justify-center">
                <Star className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="font-oswald text-2xl font-bold">ROCK BAND</h3>
                <div className="text-secondary text-sm uppercase tracking-wider font-semibold">The Flagship</div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollSection;
