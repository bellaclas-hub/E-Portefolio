import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'À propos', path: '/a-propos' },
    { name: 'Projets', path: '/portfolio' },
    { name: 'Lexique', path: '/lexique' },
    { name: 'Cas pratique', path: '/cas-pratique' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-500 px-6 py-3 rounded-lg ${scrolled ? 'bg-white shadow-md border border-slate-100' : 'bg-transparent'}`}>
          <Link to="/" className="text-2xl font-bold text-pure-black tracking-tighter group">
            AB<span className="text-primary-blue group-hover:animate-pulse">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-all hover:text-primary-blue relative group ${location.pathname === link.path ? 'text-primary-blue' : 'text-pure-black'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
              </Link>
            ))}
            <div className="h-4 w-px bg-slate-200 mx-2" />
            <a
              href="https://www.linkedin.com/in/apolline-bellaclas/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-primary-blue hover:text-white transition-all hover:scale-110 active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-pure-black p-2 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold ${location.pathname === link.path ? 'text-primary-blue' : 'text-pure-black'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://www.linkedin.com/in/apolline-bellaclas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-blue font-bold"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
