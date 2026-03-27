import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-pure-white border-t border-slate-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-bold text-pure-black tracking-tighter mb-6 block">
              AB<span className="text-primary-blue">.</span>
            </Link>
            <p className="text-slate-600 max-w-sm leading-relaxed">
              Cheffe de projet digital & marketing. Créative, rigoureuse et passionnée par la stratégie de contenu.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-pure-black mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm text-pure-black font-medium">
              <li><Link to="/a-propos" className="hover:text-primary-blue transition-colors">À propos</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary-blue transition-colors">Projets</Link></li>
              <li><Link to="/lexique" className="hover:text-primary-blue transition-colors">Lexique</Link></li>
              <li><Link to="/cas-pratique" className="hover:text-primary-blue transition-colors">Cas pratique</Link></li>
              <li><Link to="/contact" className="hover:text-primary-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-pure-black mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/apolline-bellaclas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-50 text-primary-blue hover:bg-primary-blue hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:bellaclas.a@gmail.com" 
                className="p-3 rounded-lg bg-slate-50 text-primary-blue hover:bg-primary-blue hover:text-white transition-all"
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
            className="flex items-center gap-2 text-xs font-bold text-pure-black uppercase tracking-widest hover:text-primary-blue transition-colors group"
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
