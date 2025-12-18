import { Music, Users, Mic2, Trophy } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Music,
      title: "Professional Instruction",
      description: "20+ years of teaching experience from Program Director Jef Minton"
    },
    {
      icon: Users,
      title: "Build Your Band",
      description: "We don't just teach music—we build bands from the ground up"
    },
    {
      icon: Mic2,
      title: "Real Stage Experience",
      description: "Perform on The Underground's professional main stage"
    },
    {
      icon: Trophy,
      title: "Play to Win",
      description: "A musical meritocracy where talent and drive are rewarded"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background texture-overlay">
      <div className="container mx-auto px-4">
        {/* Red accent line */}
        <div className="red-line w-24 mx-auto mb-8" />
        
        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
          ABOUT <span className="text-primary neon-glow-subtle">ROCK ROOM</span>
        </h2>
        
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-lg">
          Rock Room @ The Underground Live is a music education initiative designed to transform 
          musicians into performers. We turn the venue's "dark hours" into a learning space where 
          students develop skills, form bands, and take the stage.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="rock-card p-6 rounded-sm hover:border-primary/50 transition-all duration-300"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-oswald text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Value proposition */}
        <div className="mt-16 rock-card p-8 md:p-12 rounded-sm">
          <h3 className="font-oswald text-2xl md:text-3xl font-bold mb-6 text-center">
            THE <span className="text-primary">VALUE</span> PROPOSITION
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Years of Teaching Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Max Students Per Session</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Real Stage Performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
