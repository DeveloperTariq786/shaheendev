import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Facebook, Twitter, Youtube, Linkedin, Instagram, Send, Search, Star, Grid, FileText, Diamond, Monitor, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // Handle smooth scroll for hash links
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      setActiveSection('home');
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'clients', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1">
              <span className="text-4xl font-black text-[#e53935] tracking-tighter">S</span>
              <span className="text-4xl font-black text-[#ffc107] tracking-tighter">H</span>
              <span className="text-4xl font-black text-[#4caf50] tracking-tighter">A</span>
              <span className="text-4xl font-black text-[#2185ff] tracking-tighter">H</span>
              <span className="text-4xl font-black text-[#e53935] tracking-tighter">E</span>
              <span className="text-4xl font-black text-[#ffc107] tracking-tighter">E</span>
              <span className="text-4xl font-black text-[#4caf50] tracking-tighter">N</span>
              <div className="w-3 h-3 rounded-full bg-[#2185ff] ml-1 mt-3"></div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              <a 
                href="/#home" 
                className={`text-sm font-bold pb-1 border-b-2 transition-colors ${activeSection === 'home' ? 'text-slate-800 border-[#e53935]' : 'text-slate-600 border-transparent'}`}
              >
                HOME
              </a>
              <a 
                href="/#services" 
                className={`text-sm font-bold flex items-center gap-1 pb-1 border-b-2 transition-colors ${activeSection === 'services' ? 'text-slate-800 border-[#e53935]' : 'text-slate-600 border-transparent'}`}
              >
                <Star size={14} /> SERVICES
              </a>
              <a 
                href="/#portfolio" 
                className={`text-sm font-bold flex items-center gap-1 pb-1 border-b-2 transition-colors ${activeSection === 'portfolio' ? 'text-slate-800 border-[#e53935]' : 'text-slate-600 border-transparent'}`}
              >
                <Grid size={14} /> OUR WORK
              </a>
              <a 
                href="/#clients" 
                className={`text-sm font-bold flex items-center gap-1 pb-1 border-b-2 transition-colors ${activeSection === 'clients' ? 'text-slate-800 border-[#e53935]' : 'text-slate-600 border-transparent'}`}
              >
                <Users size={14} /> OUR CLIENTS
              </a>
              <a 
                href="/#contact" 
                className={`text-sm font-bold flex items-center gap-1 pb-1 border-b-2 transition-colors ${activeSection === 'contact' ? 'text-slate-800 border-[#e53935]' : 'text-slate-600 border-transparent'}`}
              >
                <Mail size={14} /> CONTACT
              </a>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center gap-6 border-l border-slate-200 pl-6 h-full">
              <a href="mailto:Hello@Shaheendevelopers.in" className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <Mail size={16} className="text-slate-400" /> Hello@Shaheendevelopers.in
              </a>
              <a href="tel:7889396003" className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <Phone size={16} className="text-slate-400" /> +91-7889396003
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          <a href="/#home" className={`text-base font-bold ${activeSection === 'home' ? 'text-[#e53935]' : 'text-slate-600'}`} onClick={() => setIsMobileMenuOpen(false)}>HOME</a>
          <a href="/#clients" className={`text-base font-bold ${activeSection === 'clients' ? 'text-[#e53935]' : 'text-slate-600'}`} onClick={() => setIsMobileMenuOpen(false)}>OUR CLIENTS</a>
          <a href="/#contact" className={`text-base font-bold ${activeSection === 'contact' ? 'text-[#e53935]' : 'text-slate-600'}`} onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
        </div>
      )}
    </header>
  );
}
