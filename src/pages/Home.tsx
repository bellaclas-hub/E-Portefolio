import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Brain, Code, Rocket, MessageSquare, Globe, Cpu, Layers, ChevronDown, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden bg-pure-white">
      {/* HERO SECTION - ACADEMIC & REFLECTIVE */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-deep-black py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
            alt="Minimalist Workspace" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-primary-blue font-bold uppercase tracking-[0.3em] text-xs mb-8"
              >
                Mémoire de Master • Informatique Numérique
              </motion.span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-10">
                L'impact du <span className="text-primary-blue">NoCode</span> & de l'<span className="text-primary-blue">IA</span> sur la création web.
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-12 max-w-3xl">
                Apolline Bellaclas — Étudiante en Master. <br />
                Une exploration analytique des nouvelles paradigmes de développement et de leur influence sur les stratégies digitales.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/portfolio" className="btn-primary px-10 py-5 text-lg">
                  Explorer les travaux <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/a-propos" className="btn-outline-white px-10 py-5 text-lg">
                  Ma démarche
                </Link>
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

      {/* INTRODUCTION - ACADEMIC CONTEXT */}
      <section className="py-32 bg-pure-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-blue font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Recherche & Analyse</span>
              <h2 className="text-4xl md:text-5xl font-black text-deep-black mb-10 leading-tight">Comprendre la mutation des métiers du web.</h2>
              <div className="space-y-8 text-lg text-text-gray leading-relaxed">
                <p>
                  Actuellement en Master Informatique Numérique, mon parcours se situe à l'intersection de la gestion de projet et de l'innovation technologique. Mon travail de recherche se concentre sur la manière dont les outils d'automatisation et de génération transforment la chaîne de valeur traditionnelle.
                </p>
                <p>
                  Le <span className="text-deep-black font-bold border-b-2 border-primary-blue/30">NoCode</span> et l'<span className="text-deep-black font-bold border-b-2 border-primary-blue/30">Intelligence Artificielle</span> ne sont pas seulement des raccourcis techniques, mais des leviers stratégiques qui redéfinissent l'agilité et l'accessibilité numérique.
                </p>
              </div>
              
              <div className="mt-16 grid grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-3xl">
                  <div className="text-4xl font-black text-deep-black mb-2">01</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-light-gray">Analyse Critique</div>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl">
                  <div className="text-4xl font-black text-deep-black mb-2">02</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-light-gray">Expérimentation</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative pt-12"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Academic Research" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-terracotta text-white p-12 rounded-[2.5rem] shadow-xl hidden xl:block max-w-xs">
                <p className="text-xl font-medium italic leading-snug">"L'hybridation des compétences est la clé de l'innovation numérique."</p>
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

      {/* SECTION ANALYSE - ACADEMIC REFLECTION */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="mb-24 max-w-4xl">
            <span className="text-primary-blue font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Étude de Cas & Réflexion</span>
            <h2 className="text-4xl md:text-6xl font-black text-deep-black mb-8">Analyse des enjeux.</h2>
            <p className="text-xl md:text-2xl text-text-gray leading-relaxed">
              Au-delà de la simple utilisation technique, il s'agit d'évaluer comment ces outils modifient les processus de conception et les structures de coûts dans l'industrie numérique.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Zap className="w-10 h-10 text-primary-blue" />,
                title: "Vitesse d'Itération",
                desc: "Le NoCode réduit drastiquement le cycle de prototypage, permettant une validation d'hypothèses en temps réel et une agilité accrue face aux retours utilisateurs."
              },
              {
                icon: <Globe className="w-10 h-10 text-primary-blue" />,
                title: "Démocratisation",
                desc: "L'abaissement de la barrière technique permet à des profils non-développeurs de matérialiser des concepts complexes, favorisant l'innovation interdisciplinaire."
              },
              {
                icon: <Cpu className="w-10 h-10 text-primary-blue" />,
                title: "Limites Structurelles",
                desc: "Une analyse rigoureuse impose de reconnaître les contraintes de scalabilité, de souveraineté des données et les limites de personnalisation des plateformes propriétaires."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow duration-500"
              >
                <div className="mb-8">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-5 text-deep-black">{item.title}</h3>
                <p className="text-lg text-text-gray leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION CONCRÈTE - OBJECTIVE VIEW */}
      <section className="py-32 bg-deep-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10">
                <Layers className="w-16 h-16 text-primary-blue mb-10" />
                <h3 className="text-3xl font-bold mb-8">Expérimentation Lovable</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-lg">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2.5" />
                    <span>Génération de code via prompts structurés.</span>
                  </li>
                  <li className="flex items-start gap-4 text-lg">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2.5" />
                    <span>Analyse de la flexibilité du design system.</span>
                  </li>
                  <li className="flex items-start gap-4 text-lg">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2.5" />
                    <span>Évaluation des performances au déploiement.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary-blue font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Application Pratique</span>
              <h2 className="text-4xl md:text-5xl font-black mb-10">Démonstration technique.</h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-12">
                L'utilisation de Lovable pour ce portfolio sert de preuve de concept : comment l'IA peut assister un étudiant dans la réalisation d'un projet complexe tout en conservant une rigueur académique et une vision critique sur les outils utilisés.
              </p>
              <Link to="/cas-pratique" className="btn-outline-white inline-flex px-8 py-4">
                Consulter l'étude de cas
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POURQUOI CE PROJET ? - ACADEMIC STRENGTHS */}
      <section className="py-32 bg-pure-white">
        <div className="container mx-auto px-6">
          <div className="mb-24">
            <span className="text-primary-blue font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Compétences & Apprentissages</span>
            <h2 className="text-4xl md:text-6xl font-black text-deep-black mb-8">Ma démarche d'apprentissage.</h2>
            <p className="text-xl md:text-2xl text-text-gray max-w-3xl leading-relaxed">Une approche rigoureuse pour maîtriser les outils de demain.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-16">
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500">
                  <Brain className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Analyse Théorique</h4>
                <p className="text-lg text-text-gray leading-relaxed">Étude approfondie des modèles de langage et des architectures NoCode pour en comprendre les fondements.</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500">
                  <Code className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Culture Informatique</h4>
                <p className="text-lg text-text-gray leading-relaxed">Mon Master m'apporte le socle technique nécessaire pour évaluer la pertinence des solutions automatisées.</p>
              </div>
            </div>
            <div className="space-y-16">
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Veille Technologique</h4>
                <p className="text-lg text-text-gray leading-relaxed">Exploration continue des nouveaux outils pour rester à la pointe de l'innovation numérique.</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500">
                  <Rocket className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Prototypage Rapide</h4>
                <p className="text-lg text-text-gray leading-relaxed">Capacité à transformer une idée en prototype fonctionnel en un temps record grâce aux outils modernes.</p>
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

      {/* CONTACT CTA - STUDENT PERSPECTIVE */}
      <section className="py-24 bg-pure-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-deep-black rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl mb-10 text-white font-black tracking-tight">Échangeons.</h2>
              <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
                Vous souhaitez en savoir plus sur mon travail de recherche ou discuter d'une opportunité de collaboration ?
              </p>
              <div className="flex justify-center">
                <Link to="/contact" className="btn-primary px-12 py-5 text-lg">
                  Me contacter <MessageSquare className="w-6 h-6" />
                </Link>
              </div>
            </div>
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-terracotta/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
