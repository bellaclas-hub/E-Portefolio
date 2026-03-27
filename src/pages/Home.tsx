import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Brain, Code, Rocket, MessageSquare, Globe, Cpu, Layers, ChevronDown, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden bg-pure-white">
      {/* HERO SECTION - IMMERSIVE & IMPACTFUL */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
            alt="Minimalist Workspace" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-[12vw] md:text-[10vw] font-black text-white leading-[0.8] tracking-tighter mb-12 text-center">
              DIGITAL <br />
              <span className="text-primary-blue">STRATEGY.</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-24">
              <div className="max-w-xl text-left">
                <p className="text-2xl md:text-3xl text-slate-300 font-medium leading-relaxed mb-12">
                  Apolline Bellaclas — Cheffe de projet digital. <br />
                  Expertise <span className="text-white font-black">NoCode</span> & <span className="text-white font-black">IA</span> au service de votre croissance.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link to="/portfolio" className="btn-primary">
                    Projets <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/contact" className="btn-outline-white">
                    Me contacter
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block text-right">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-blue mb-4">Basée à Paris</div>
                <div className="text-white text-xl font-black">Disponible pour de nouveaux défis.</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* INTRODUCTION - MINIMALIST & CLEAN */}
      <section className="section-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-primary-blue font-bold uppercase tracking-[0.4em] text-sm mb-12 block">Positionnement</span>
              <h2 className="huge-title text-deep-black">Vision & Expertise.</h2>
              <p className="text-2xl text-text-gray leading-relaxed mb-12">
                Étudiante en Master Informatique Numérique, je pilote des projets où l'innovation technologique rencontre la stratégie marketing.
              </p>
              <p className="text-2xl text-text-gray leading-relaxed mb-16">
                Mon intérêt pour le <span className="text-deep-black font-bold underline decoration-primary-blue decoration-4 underline-offset-8">NoCode</span> et l'<span className="text-deep-black font-bold underline decoration-primary-blue decoration-4 underline-offset-8">IA</span> est une conviction : ces outils redéfinissent la création web moderne.
              </p>
              <div className="flex gap-12">
                <div>
                  <div className="text-5xl font-black text-deep-black mb-2">01</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-light-gray">Stratégie</div>
                </div>
                <div className="w-px h-16 bg-slate-100" />
                <div>
                  <div className="text-5xl font-black text-deep-black mb-2">02</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-light-gray">Agilité</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Collaboration" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-16 -right-16 bg-terracotta text-white p-16 rounded-[3rem] shadow-2xl hidden xl:block max-w-md">
                <p className="text-3xl font-bold italic leading-tight">"L'IA décuple le potentiel créatif humain."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTEXTE DU PROJET - DARK IMPACT */}
      <section className="section-dark">
        <div className="container mx-auto text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-primary-blue font-bold uppercase tracking-[0.4em] text-sm mb-12 block">Projet Académique</span>
            <h2 className="text-6xl md:text-8xl mb-16 text-white leading-tight">Réalisé avec Lovable.</h2>
            <p className="text-2xl md:text-3xl text-slate-400 leading-relaxed mb-16">
              Ce portfolio illustre ma problématique de Master sur la <span className="text-white font-bold">transformation de la création web</span>. L'usage de l'IA et du NoCode permet une agilité sans précédent.
            </p>
            <div className="inline-block p-1 bg-white/10 rounded-full backdrop-blur-sm">
              <div className="px-8 py-4 bg-white rounded-full text-deep-black font-bold">
                Démonstration NoCode + IA
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION ANALYSE - GRID BLOCKS */}
      <section className="section-white">
        <div className="container mx-auto">
          <div className="mb-32">
            <h2 className="text-6xl md:text-8xl mb-8">L'Analyse.</h2>
            <p className="text-3xl text-text-gray max-w-3xl leading-relaxed">Comprendre les enjeux de la nouvelle ère digitale.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="w-12 h-12 text-primary-blue" />,
                title: "Vitesse",
                desc: "Réduction drastique du time-to-market. Idéal pour le prototypage et l'itération rapide."
              },
              {
                icon: <Globe className="w-12 h-12 text-primary-blue" />,
                title: "Accessibilité",
                desc: "Démocratisation de la création web. Permet aux profils marketing de reprendre la main."
              },
              {
                icon: <Cpu className="w-12 h-12 text-primary-blue" />,
                title: "Limites",
                desc: "Dépendance aux plateformes et personnalisation parfois contrainte par la structure."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="card-style group"
              >
                <div className="mb-12 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
                <p className="text-xl text-text-gray leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION CONCRÈTE - TERRACOTTA ACCENT */}
      <section className="section-terracotta">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white/5 backdrop-blur-xl p-16 rounded-[4rem] border border-white/10 shadow-2xl">
                <Layers className="w-20 h-20 text-white mb-12" />
                <h3 className="text-5xl font-bold mb-12 text-white">Focus Lovable.</h3>
                <ul className="space-y-8">
                  <li className="flex items-center gap-6 text-2xl">
                    <div className="w-3 h-3 bg-primary-blue rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
                    Génération de structure par IA
                  </li>
                  <li className="flex items-center gap-6 text-2xl">
                    <div className="w-3 h-3 bg-primary-blue rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
                    Personnalisation NoCode
                  </li>
                  <li className="flex items-center gap-6 text-2xl">
                    <div className="w-3 h-3 bg-primary-blue rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
                    Déploiement automatisé
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-6xl md:text-8xl mb-12 text-white">Application.</h2>
              <p className="text-3xl text-white/80 leading-relaxed mb-16">
                L'usage de Lovable démontre qu'il est possible de concilier <span className="text-white font-bold">design premium</span> et <span className="text-white font-bold">efficacité technique</span>.
              </p>
              <Link to="/cas-pratique" className="btn-outline-white inline-flex">
                Étude de cas
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POURQUOI MOI ? - CLEAN GRID */}
      <section className="section-white">
        <div className="container mx-auto">
          <div className="mb-32">
            <h2 className="text-6xl md:text-8xl mb-8">Pourquoi moi ?</h2>
            <p className="text-3xl text-text-gray max-w-3xl leading-relaxed">L'alliance de la rigueur et de l'agilité.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-24">
            <div className="space-y-20">
              <div className="group">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-primary-blue mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500">
                  <Brain className="w-10 h-10" />
                </div>
                <h4 className="text-3xl font-bold mb-6">Vision Stratégique</h4>
                <p className="text-xl text-text-gray leading-relaxed">Intégration des outils dans une vision marketing globale pour maximiser le ROI.</p>
              </div>
              <div className="group">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-primary-blue mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500">
                  <Code className="w-10 h-10" />
                </div>
                <h4 className="text-3xl font-bold mb-6">Culture Technique</h4>
                <p className="text-xl text-text-gray leading-relaxed">Dialogue fluide avec les équipes techniques grâce à mon Master Informatique.</p>
              </div>
            </div>
            <div className="space-y-20">
              <div className="group">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-primary-blue mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500">
                  <Sparkles className="w-10 h-10" />
                </div>
                <h4 className="text-3xl font-bold mb-6">Créativité Augmentée</h4>
                <p className="text-xl text-text-gray leading-relaxed">L'IA comme levier pour explorer de nouvelles pistes créatives à grande échelle.</p>
              </div>
              <div className="group">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-primary-blue mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500">
                  <Rocket className="w-10 h-10" />
                </div>
                <h4 className="text-3xl font-bold mb-6">Orientation Résultats</h4>
                <p className="text-xl text-text-gray leading-relaxed">Chaque action est guidée par la performance et l'atteinte d'objectifs concrets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT / RÉSULTATS - BOLD STATS */}
      <section className="section-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            {[
              { label: "Projets", value: "15+" },
              { label: "Outils", value: "10+" },
              { label: "Satisfaction", value: "100%" },
              { label: "Années", value: "5" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <div className="text-7xl md:text-9xl font-black text-primary-blue mb-6 leading-none">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-[0.4em] text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA - MINIMALIST FINALE */}
      <section className="section-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-deep-black rounded-[5rem] p-24 md:p-40 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-6xl md:text-9xl mb-16 text-white font-black tracking-tighter">PRÊT ?</h2>
              <p className="text-2xl md:text-4xl text-slate-400 mb-20 max-w-3xl mx-auto leading-relaxed">
                Discutons de vos prochains défis digitaux.
              </p>
              <div className="flex justify-center">
                <Link to="/contact" className="btn-primary min-w-[300px]">
                  Démarrer <MessageSquare className="w-6 h-6" />
                </Link>
              </div>
            </div>
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-terracotta/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
