import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-blue text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-black tracking-tighter mb-6 block group">
              Apolline Bellaclas<span className="inline-block w-1.5 h-1.5 rounded-full bg-light-blue ml-1 group-hover:scale-150 transition-transform"></span>
            </Link>
            <p className="text-slate-400 max-w-sm text-base leading-relaxed font-medium">
              Étudiante en Master Informatique Numérique. Passionnée par l'innovation technologique et l'impact du NoCode/IA sur la création web.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-[0.2em] text-[10px]">Navigation</h4>
            <ul className="space-y-3 text-xs font-semibold">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/a-propos" className="text-slate-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/cas-pratique" className="text-slate-400 hover:text-white transition-colors">Cas pratique</Link></li>
              <li><Link to="/data" className="text-slate-400 hover:text-white transition-colors">Data</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors">Projet</Link></li>
              <li><Link to="/lexique" className="text-slate-400 hover:text-white transition-colors">Lexique</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-[0.2em] text-[10px]">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/apolline-bellaclas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-deep-blue transition-all duration-500"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:bellaclas.a@gmail.com" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-deep-blue transition-all duration-500"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">
            © {new Date().getFullYear()} Apolline Bellaclas — Built with NoCode & AI
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] hover:text-light-blue transition-colors group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-2 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
