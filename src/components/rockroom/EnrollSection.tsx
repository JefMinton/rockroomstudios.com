import EnrollmentForm from './EnrollmentForm';

const EnrollSection = () => {
  return (
    <section id="enroll" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="red-line w-24 mx-auto mb-8" />
        
        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-primary neon-glow-subtle">SIGN UP</span> TODAY
        </h2>
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Choose your program and start your musical journey with Rock Room.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Band Practice Form */}
          <div id="enroll-band-practice">
            <EnrollmentForm 
              programType="band_practice"
              title="BAND PRACTICE ENROLLMENT"
              description="Join our sandbox sessions! Fill out the form below to sign up. Your first class is FREE—payment is due at the end of your first session if you wish to continue."
            />
          </div>
          
          {/* Rock Band Form */}
          <div id="enroll-rock-band">
            <EnrollmentForm 
              programType="rock_band"
              title="ROCK BAND ONLINE AUDITION"
              description="Apply for the Flagship program! Rock Band membership is by audition or invitation only. Upload a video showing your skills and personality—it doesn't need to be professional quality."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollSection;
