import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechArsenal from "@/components/TechArsenal";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIBackground from "@/components/AIBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AIBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechArsenal />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;