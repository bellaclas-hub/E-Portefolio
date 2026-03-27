import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-black text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <Link to="/" className="text-3xl font-black tracking-tighter mb-8 block group">
              AB<span className="inline-block w-2 h-2 rounded-full bg-primary-blue ml-1 group-hover:scale-150 transition-transform"></span>
            </Link>
            <p className="text-light-gray max-w-sm text-lg leading-relaxed font-medium">
              Étudiante en Master Informatique Numérique. Passionnée par l'innovation technologique et l'impact du NoCode/IA sur la création web.
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Navigation</h4>
            <ul className="space-y-5 text-sm font-bold">
              <li><Link to="/a-propos" className="text-light-gray hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/portfolio" className="text-light-gray hover:text-white transition-colors">Projets</Link></li>
              <li><Link to="/lexique" className="text-light-gray hover:text-white transition-colors">Lexique</Link></li>
              <li><Link to="/cas-pratique" className="text-light-gray hover:text-white transition-colors">Cas pratique</Link></li>
              <li><Link to="/contact" className="text-light-gray hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Connect</h4>
            <div className="flex gap-6">
              <a 
                href="https://www.linkedin.com/in/apolline-bellaclas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-deep-black transition-all duration-500"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:bellaclas.a@gmail.com" 
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-deep-black transition-all duration-500"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest font-bold text-light-gray">
            © {new Date().getFullYear()} Apolline Bellaclas — Built with NoCode & AI
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary-blue transition-colors group"
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
