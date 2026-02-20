import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Countries from "./components/Countries";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Services />
      <Countries />
      <WhyChooseUs />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;