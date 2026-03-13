import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-bold text-deep-blue tracking-tighter mb-6 block">
              AB<span className="text-accent-blue">.</span>
            </Link>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Cheffe de projet digital & marketing. Créative, rigoureuse et passionnée par la stratégie de contenu.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-deep-blue mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-accent-blue transition-colors">Accueil</Link></li>
              <li><Link to="/a-propos" className="hover:text-accent-blue transition-colors">À propos</Link></li>
              <li><Link to="/experiences" className="hover:text-accent-blue transition-colors">Expériences</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent-blue transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-deep-blue mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/apolline-bellaclas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-deep-blue hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:bellaclas.a@gmail.com" 
                className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-deep-blue hover:text-white transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Apolline Bellaclas. Tous droits réservés.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-deep-blue uppercase tracking-widest hover:text-accent-blue transition-colors group"
          >
            Revenir en haut
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
