import AdditionalExperience from "./components/AdditionalExperience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <AdditionalExperience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
