import { Music, Users, Mic2, Trophy } from 'lucide-react';
import { useAboutContent } from '@/hooks/useContent';

const About = () => {
  const content = useAboutContent();
  const iconMap: Record<string, typeof Music> = { Music, Users, Mic2, Trophy };

  return (
    <section id="about" className="py-24 bg-background texture-overlay">
      <div className="container mx-auto px-4">
        {/* Red accent line */}
        <div className="red-line w-24 mx-auto mb-8" />
        
        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
          ABOUT <span className="text-primary neon-glow-subtle">ROCK ROOM</span>
        </h2>
        
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-lg">
          {content.description}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div 
                key={index}
                className="rock-card p-6 rounded-sm hover:border-primary/50 transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-oswald text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Value proposition */}
        <div className="mt-16 rock-card p-8 md:p-12 rounded-sm">
          <h3 className="font-oswald text-2xl md:text-3xl font-bold mb-6 text-center">
            THE <span className="text-primary">VALUE</span> PROPOSITION
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {content.valueProposition.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
