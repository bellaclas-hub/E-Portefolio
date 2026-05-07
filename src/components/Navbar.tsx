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
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Cas pratique', path: '/cas-pratique' },
    { name: 'Data', path: '/data' },
    { name: 'Lexique', path: '/lexique' },
    { name: 'Projet', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-6 md:top-10 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'translate-y-[-10px]' : 'translate-y-0'}`}>
      <div className="max-w-[1200px] mx-auto px-10">
        <div className={`flex items-center justify-between transition-all duration-500 px-6 md:px-10 py-3 md:py-4 rounded-full bg-white/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-white/30`}>
          <Link to="/" className="text-xl font-black text-deep-blue tracking-tighter group flex items-center gap-1.5">
            <span className="group-hover:text-light-blue transition-colors duration-300">Apolline Bellaclas</span>
            <span className="w-1.5 h-1.5 rounded-full bg-light-blue group-hover:scale-150 transition-transform duration-500"></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] uppercase tracking-[0.2em] font-black transition-all hover:text-light-blue relative group ${location.pathname === link.path ? 'text-light-blue' : 'text-deep-blue/70'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-light-blue transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
            <div className="h-4 w-px bg-slate-200 mx-1" />
            <a
              href="https://www.linkedin.com/in/apolline-bellaclas/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-deep-blue text-white hover:bg-light-blue transition-all hover:scale-110 active:scale-95 shadow-md"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-deep-blue p-2 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
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
                  className={`text-lg font-black ${location.pathname === link.path ? 'text-light-blue' : 'text-deep-blue'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://www.linkedin.com/in/apolline-bellaclas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-light-blue font-black"
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
