import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Code2 
            className={`h-8 w-8 transform -rotate-6 ${
              isScrolled ? 'text-purple-600' : 'text-purple-500'
            } transition-colors duration-300`} 
          />
          <span className={`text-xl font-bold ${
            isScrolled ? 'text-gray-900' : 'text-white'
          } transition-colors duration-300`}>
            NextGenDevs
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'Mentorship', 'Resources', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`${
                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-200'
              } transition-colors duration-300 font-medium`}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn btn-primary"
          >
            Get Started
          </a>
        </nav>

        <button
          className="md:hidden text-purple-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity duration-300 z-40 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl z-50 transition-transform duration-300 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } p-6 flex flex-col`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-bold text-purple-600 flex items-center gap-2">
            <Code2 size={24} className="transform -rotate-6" />
            NextGenDevs
          </span>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          {['Home', 'Services', 'Mentorship', 'Resources', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn btn-primary mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>
        <div className="mt-auto pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <Code2 size={16} className="transform -rotate-6" />
            Start your tech journey today
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar