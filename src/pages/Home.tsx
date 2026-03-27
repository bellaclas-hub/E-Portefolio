import { motion } from 'motion/react';
import { ChevronRight, Briefcase, Layout, Target, Download, Star, TrendingUp, Calendar, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-pure-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-pure-black leading-[1.1] mb-8 tracking-tight"
            >
              Apolline Bellaclas — <span className="text-primary-blue">Chargée Marketing Digital</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 mb-10"
            >
              <p className="text-xl text-slate-600 leading-relaxed">
                « Je crée, je structure, j’analyse. Toujours avec <span className="important-text">exigence</span> et <span className="important-text">créativité</span>. »
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to="/portfolio" className="btn-primary">
                Voir mes projets
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Me contacter
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-lg bg-slate-200 overflow-hidden shadow-2xl border-8 border-white relative z-10 group mb-8">
              <img 
                src="https://res.cloudinary.com/delgsyvkc/image/upload/v1773394135/Photo_Apolline_Bellaclas.pdf_lftaza.png" 
                alt="Apolline Bellaclas" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center text-lg font-medium text-pure-black italic max-w-sm"
            >
              « Je crée, je structure, j’analyse. Toujours avec <span className="important-text">exigence</span> et <span className="important-text">créativité</span>. »
            </motion.p>
            
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-black">Introduction</h2>
            <div className="space-y-6 text-lg text-pure-black leading-relaxed">
              <p>
                Je suis <span className="important-text">Apolline Bellaclas</span>, actuellement cheffe de projet digital chez Legal 230, une agence spécialisée dans la traduction juridique.
              </p>
              <p>
                <span className="important-text">Créative, rigoureuse</span> et passionnée par la stratégie de contenu, j’aime piloter des projets digitaux, structurer des stratégies marketing et produire des contenus impactants : visuels, vidéos, articles, newsletters et supports commerciaux.
              </p>
              <p>
                Je suis <span className="important-text">dynamique, organisée et autonome</span>. J’interviens également sur :
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "la gestion et la refonte de sites web",
                  "la stratégie SEO",
                  "l’organisation d’événements professionnels",
                  "la coordination de partenariats",
                  "la gestion du budget marketing",
                  "l’analyse des performances marketing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi me recruter ? Section */}
      <section className="section-gray">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-pure-black mb-6">Why hire me</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { title: "Créative", icon: <Star className="w-6 h-6 text-primary-blue" /> },
              { title: "Sens du détail", icon: <CheckCircle2 className="w-6 h-6 text-primary-blue" /> },
              { title: "Autonome", icon: <Zap className="w-6 h-6 text-primary-blue" /> },
              { title: "Force de proposition", icon: <TrendingUp className="w-6 h-6 text-primary-blue" /> }
            ].map((block, i) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-lg bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center"
              >
                <div className="p-4 bg-slate-50 rounded-lg w-fit mx-auto mb-6">
                  {block.icon}
                </div>
                <h3 className="text-xl font-bold text-pure-black">{block.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Impact concret */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-12 md:p-16 border border-slate-100 shadow-sm"
          >
            <h3 className="text-3xl font-bold text-pure-black mb-12 text-center">Impact concret</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "+1000 abonnés sur le compte LinkedIn de la société",
                "4 refontes de sites web",
                "3+ événements organisés"
              ].map((impact, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-primary-blue" />
                  </div>
                  <span className="font-bold text-pure-black text-lg">{impact}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ce que les autres disent de moi - Version Courte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-pure-black mb-12 text-center">Ce que les autres disent de moi</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Qualités professionnelles", items: ["Très organisée & rigoureuse", "Créative & Innovante", "Force de proposition", "Communication claire"] },
                { title: "Compétences reconnues", items: ["Création de contenu (visuel, écrit, vidéo)", "Analyse rapide des besoins", "Travail en équipe", "Engagement & Fiabilité"] },
                { title: "Qualités humaines", items: ["Écoute & Adaptabilité", "Curiosité & Ambition", "Dynamisme & Énergie positive"] }
              ].map((group, i) => (
                <div key={i} className="card-style p-8">
                  <h4 className="font-bold text-primary-blue mb-6 uppercase tracking-widest text-xs">{group.title}</h4>
                  <ul className="space-y-4">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-pure-black text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
