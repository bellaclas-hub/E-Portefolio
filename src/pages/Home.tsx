import { motion } from 'motion/react';
import { ChevronRight, Briefcase, Layout, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-deep-blue/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-deep-blue text-xs font-bold uppercase tracking-widest mb-8 border border-blue-100">
              Alternante en 2e année — Efrei
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-deep-blue leading-[1.1] mb-8 tracking-tight">
              Apolline Bellaclas <br />
              <span className="text-accent-blue">Cheffe de Projet Digital</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              Je suis Apolline Bellaclas, cheffe de projet digital et chargée de marketing. 
              Créative, rigoureuse et passionnée par la stratégie de contenu, j’évolue actuellement chez Legal 230.
            </p>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-10 max-w-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Recherche CDI</span>
              </div>
              <p className="text-sm text-slate-600">
                Disponible dès <strong>fin février / début mars 2026</strong> en tant que Chargée marketing / Cheffe de projet marketing digital en Île-de-France.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/experiences" className="flex items-center gap-2 bg-deep-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-accent-blue transition-all shadow-lg group">
                Découvrir mon parcours
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="flex items-center gap-2 bg-white text-deep-blue border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                Voir mon portfolio
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-slate-200 overflow-hidden shadow-2xl border-8 border-white relative z-10">
              <img 
                src="https://res.cloudinary.com/delgsyvkc/image/upload/v1773394135/Photo_Apolline_Bellaclas.pdf_lftaza.png" 
                alt="Apolline Bellaclas" 
                className="w-full h-full object-cover transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats/Badges */}
            <div className="absolute bottom-0 left-0 md:left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block z-20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-xl text-deep-blue">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-bold text-deep-blue">2+ Ans</div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">D'expérience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
            <div className="p-4 bg-white rounded-2xl w-fit shadow-sm mb-6 text-deep-blue">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Gestion de Projet</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Pilotage de projets digitaux, coordination d'équipes et de prestataires pour des résultats concrets.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
            <div className="p-4 bg-white rounded-2xl w-fit shadow-sm mb-6 text-deep-blue">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Stratégie Marketing</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Élaboration de stratégies B2B, campagnes multicanales et analyse de performance.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
            <div className="p-4 bg-white rounded-2xl w-fit shadow-sm mb-6 text-deep-blue">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Brand Content</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Production de contenus impactants : vidéos, newsletters, articles SEO et animation LinkedIn.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
