import { Music, Users, Mic2 } from 'lucide-react';

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
  ];

  return (
    <section id="about" className="py-24 bg-background texture-overlay">
      <div className="container mx-auto px-4">
        {/* Red accent line */}
        <div className="red-line w-24 mx-auto mb-8" />
        
        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
          ABOUT <span className="text-primary neon-glow-subtle">ROCK FU</span>
        </h2>
        
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-lg">
          Rock Fu @ The Underground Live is a music education initiative designed to transform 
          musicians into performers. We turn the venue's "dark hours" into a learning space where 
          students develop skills, form bands, and take the stage.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
        
      </div>
    </section>
  );
};

export default About;
