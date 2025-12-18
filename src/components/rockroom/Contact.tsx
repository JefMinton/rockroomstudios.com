import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="red-line w-24 mx-auto mb-8" />
        
        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
          GET IN <span className="text-primary neon-glow-subtle">TOUCH</span>
        </h2>
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Have questions? Reach out to Program Director Jef Minton.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="rock-card p-8 rounded-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:jeff.a.minton@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    jeff.a.minton@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a href="tel:717-417-8806" className="text-foreground hover:text-primary transition-colors">
                    (717) 417-8806
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-foreground">The Underground Live, Camp Hill PA</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-oswald text-lg font-semibold mb-2">Jef Minton</h3>
              <div className="text-primary text-sm uppercase tracking-wider">Program Director</div>
              <p className="text-muted-foreground text-sm mt-2">
                20+ years of teaching experience. Ready to help you become the musician you want to be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
