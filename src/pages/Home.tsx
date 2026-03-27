import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Brain, Code, Rocket, MessageSquare, Globe, Cpu, Layers, ChevronDown, Mail, Linkedin, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden bg-pure-white">
      {/* HERO SECTION - ACADEMIC & REFLECTIVE */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-deep-black py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
            alt="Minimalist Workspace" 
            className="w-full h-full object-cover opacity-30 grayscale blur-[2px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-deep-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/10 via-transparent to-deep-black" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex flex-col items-start text-left">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-primary-blue font-bold uppercase tracking-[0.3em] text-xs mb-8"
              >
                Portfolio Étudiant
              </motion.span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-10 uppercase">
                NO-CODE & IA<br />
                <span className="text-primary-blue">DIGITAL STRATEGY</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed mb-6 max-w-2xl">
                Étudiante en master informatique numérique, j’explore comment le NoCode et l’intelligence artificielle transforment la création de sites web.
              </p>
              <p className="text-lg text-slate-400 font-medium leading-relaxed mb-12 max-w-2xl">
                Ce portfolio est à la fois mon CV digital et une démonstration concrète de ces nouveaux outils.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/portfolio" className="btn-primary px-10 py-5 text-lg">
                  Voir mes projets
                </Link>
                <Link to="/contact" className="btn-outline-white px-10 py-5 text-lg">
                  Me contacter
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

      {/* INTRODUCTION - MA VISION */}
      <section className="py-48 bg-pure-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-deep-black mb-12 leading-tight">Ma vision du digital</h2>
              <div className="space-y-8 text-xl text-text-gray leading-relaxed">
                <p>
                  Étudiante en Master informatique numérique, je m’intéresse à la manière dont les outils NoCode et l’intelligence artificielle transforment la création de sites web.
                </p>
                <p>
                  Ces technologies permettent de concevoir plus rapidement des expériences digitales, tout en rendant la création accessible à des profils non techniques.
                </p>
                <p>
                  Mon objectif est de comprendre ces évolutions et d’en exploiter le potentiel dans des projets concrets.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Academic Research" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJET LOVABLE - KEY SECTION */}
      <section className="py-48 bg-[#111111] text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-white leading-tight">Un projet réalisé avec Lovable</h2>
            <div className="text-xl md:text-2xl text-slate-400 leading-relaxed space-y-8 mb-16">
              <p>
                Ce portfolio a été conçu avec Lovable, un outil NoCode assisté par intelligence artificielle.
              </p>
              <p>
                L’objectif de ce projet est d’analyser comment ces technologies transforment la création web.
              </p>
              <p>
                Cette expérience m’a permis d’observer plusieurs évolutions majeures :
              </p>
              <ul className="space-y-4 text-white font-bold">
                <li className="flex items-center justify-center gap-3">
                  <Zap className="w-5 h-5 text-primary-blue" />
                  une réduction significative du temps de création
                </li>
                <li className="flex items-center justify-center gap-3">
                  <Zap className="w-5 h-5 text-primary-blue" />
                  une prise en main intuitive
                </li>
                <li className="flex items-center justify-center gap-3">
                  <Zap className="w-5 h-5 text-primary-blue" />
                  une automatisation de certaines tâches
                </li>
              </ul>
              <p className="pt-8">
                Mais également certaines limites, notamment en termes de personnalisation et de contrôle technique.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION ANALYSE */}
      <section className="py-48 bg-pure-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-24 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-black text-deep-black mb-12">L’analyse</h2>
            <p className="text-xl md:text-2xl text-text-gray leading-relaxed font-medium">
              Le NoCode et l’intelligence artificielle redéfinissent les méthodes de création web, en apportant rapidité et accessibilité, tout en posant de nouveaux enjeux techniques.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {[
              {
                icon: <Zap className="w-8 h-8 text-primary-blue" />,
                title: "Vitesse",
                desc: "Réduction du temps de développement grâce à l’automatisation et aux outils visuels."
              },
              {
                icon: <Globe className="w-8 h-8 text-primary-blue" />,
                title: "Accessibilité",
                desc: "Permet à des profils non techniques de concevoir des sites web sans coder."
              },
              {
                icon: <Cpu className="w-8 h-8 text-primary-blue" />,
                title: "Limites",
                desc: "Standardisation des designs et dépendance aux plateformes NoCode."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="mb-8">{item.icon}</div>
                <h3 className="text-2xl font-black mb-6 text-deep-black">{item.title}</h3>
                <p className="text-lg text-text-gray leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION CONCRÈTE */}
      <section className="py-48 bg-[#7A4A35] text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white/10 backdrop-blur-xl p-12 rounded-[3rem] border border-white/20">
                <Layers className="w-16 h-16 text-white mb-10" />
                <h3 className="text-3xl font-black mb-8">Focus Lovable :</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-lg font-bold">
                    <div className="w-2 h-2 bg-white rounded-full mt-2.5" />
                    <span>Génération assistée par IA</span>
                  </li>
                  <li className="flex items-start gap-4 text-lg font-bold">
                    <div className="w-2 h-2 bg-white rounded-full mt-2.5" />
                    <span>Interface intuitive</span>
                  </li>
                  <li className="flex items-start gap-4 text-lg font-bold">
                    <div className="w-2 h-2 bg-white rounded-full mt-2.5" />
                    <span>Déploiement rapide</span>
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
              <h2 className="text-4xl md:text-5xl font-black mb-12">Application concrète</h2>
              <div className="space-y-8 text-xl text-white/80 leading-relaxed font-medium">
                <p>
                  L’utilisation de Lovable montre qu’il est possible de créer rapidement un site structuré et fonctionnel.
                </p>
                <p>
                  Cette approche permet un gain de temps important, mais reste encadrée par les possibilités de l’outil, ce qui limite certaines personnalisations avancées.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POURQUOI MOI ? */}
      <section className="py-48 bg-pure-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-deep-black mb-8">Pourquoi moi ?</h2>
            <p className="text-xl md:text-2xl text-text-gray max-w-3xl leading-relaxed font-medium">
              Une approche mêlant marketing digital, NoCode et intelligence artificielle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-24">
            <div className="space-y-24">
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-blue mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500 shadow-sm">
                  <Brain className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-6">Vision stratégique</h4>
                <p className="text-base text-text-gray leading-relaxed font-medium">Comprendre les enjeux digitaux pour concevoir des solutions adaptées.</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-blue mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500 shadow-sm">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-6">Créativité augmentée</h4>
                <p className="text-base text-text-gray leading-relaxed font-medium">Utiliser les outils IA pour enrichir les processus créatifs.</p>
              </div>
            </div>
            <div className="space-y-24">
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-blue mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500 shadow-sm">
                  <Code className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-6">Culture technique</h4>
                <p className="text-base text-text-gray leading-relaxed font-medium">Allier réflexion stratégique et compréhension des outils numériques.</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-blue mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500 shadow-sm">
                  <Target className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-6">Orientation résultats</h4>
                <p className="text-base text-text-gray leading-relaxed font-medium">Concevoir des projets efficaces et mesurables.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="py-48 bg-pure-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-deep-black mb-12">Conclusion</h2>
            <div className="space-y-8 text-xl md:text-2xl text-text-gray leading-relaxed font-medium">
              <p>
                Le NoCode et l’intelligence artificielle permettent aujourd’hui de créer des sites web rapidement et efficacement.
              </p>
              <p>
                Cependant, ils ne remplacent pas la réflexion stratégique et créative nécessaire à un projet digital performant.
              </p>
              <p>
                Ce projet illustre l’équilibre à trouver entre accessibilité, performance et expertise.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 bg-pure-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-blue to-deep-black rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl mb-10 text-white font-black tracking-tight">Une opportunité à discuter ?</h2>
              <p className="text-xl md:text-2xl text-slate-200 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
                Je suis ouverte à échanger sur des projets, des stages ou des opportunités professionnelles.
              </p>
              <div className="flex justify-center">
                <Link to="/contact" className="btn-outline-white px-12 py-5 text-lg">
                  Me contacter
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
