import { Check, Star, Zap } from 'lucide-react';
import { useProgramsContent } from '@/hooks/useContent';

const Programs = () => {
  const content = useProgramsContent();
  const iconMap: Record<string, typeof Zap> = { Zap, Star };
  
  return (
    <section id="programs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="red-line w-24 mx-auto mb-8" />
        
        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
          OUR <span className="text-primary neon-glow-subtle">PROGRAMS</span>
        </h2>
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          {content.sectionDescription}
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.programs.map((program) => {
            const Icon = iconMap[program.icon];
            const isRockBand = program.id === 'rock-band';
            const iconColor = isRockBand ? 'text-secondary' : 'text-primary';
            const textColor = isRockBand ? 'text-secondary' : 'text-primary';
            const checkColor = isRockBand ? 'text-secondary' : 'text-primary';
            
            return (
              <div key={program.id} className="rock-card p-8 rounded-sm flex flex-col h-full relative overflow-hidden">
                {/* Featured badge */}
                {program.badge && (
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold uppercase rounded-sm">
                    {program.badge}
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-8 h-8 ${iconColor}`} />
                  <h3 className="font-oswald text-2xl font-bold">{program.title}</h3>
                </div>
                <div className={`text-sm ${textColor} font-semibold uppercase tracking-wider mb-4`}>
                  {program.subtitle}
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {program.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-foreground">
                    ${program.price}<span className="text-lg text-muted-foreground font-normal">/{program.priceUnit}</span>
                  </div>
                  <div className={`text-sm ${isRockBand ? 'text-muted-foreground' : 'text-primary'} mt-1`}>
                    {program.priceNote}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {program.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className={`w-5 h-5 ${checkColor} flex-shrink-0 mt-0.5`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={program.ctaLink} 
                  className={`${isRockBand ? 'btn-rock' : 'btn-rock-outline'} py-3 rounded-sm text-center block`}
                >
                  {program.ctaText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
