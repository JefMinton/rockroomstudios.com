import { Mail, Phone, MapPin } from 'lucide-react';
import { useContactContent } from '@/hooks/useContent';

const Contact = () => {
  const content = useContactContent();
  
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="red-line w-24 mx-auto mb-8" />
        
        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
          GET IN <span className="text-primary neon-glow-subtle">TOUCH</span>
        </h2>
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          {content.description}
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
                  <a href={`mailto:${content.contactInfo.email}`} className="text-foreground hover:text-primary transition-colors">
                    {content.contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a href={`tel:${content.contactInfo.phone.replace(/[^0-9]/g, '')}`} className="text-foreground hover:text-primary transition-colors">
                    {content.contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-foreground">{content.contactInfo.location}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-oswald text-lg font-semibold mb-2">{content.director.name}</h3>
              <div className="text-primary text-sm uppercase tracking-wider">{content.director.title}</div>
              <p className="text-muted-foreground text-sm mt-2">
                {content.director.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
