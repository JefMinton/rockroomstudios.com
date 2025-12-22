import Navigation from '@/components/rockroom/Navigation';
import Hero from '@/components/rockroom/Hero';
import About from '@/components/rockroom/About';
import Programs from '@/components/rockroom/Programs';
import EnrollSection from '@/components/rockroom/EnrollSection';
import Contact from '@/components/rockroom/Contact';
import Footer from '@/components/rockroom/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <EnrollSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
