import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Mentorship from './components/Mentorship';
import Resources from './components/Resources';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuickActionButtons from './components/QuickActionButtons';
import MockInterviewCTA from './components/MockInterviewCTA';


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className={mobileMenuOpen ? 'pointer-events-none opacity-50 transition-opacity' : ''}>
        <Hero />
        <MockInterviewCTA />
        <Services />
        <Mentorship />
        <Resources />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <QuickActionButtons />
    </div>
  );
}

export default App;