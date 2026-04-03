import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Brain, Code, Rocket, MessageSquare, Globe, Cpu, Layers, ChevronDown, Mail, Linkedin, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden bg-bg-light">
      {/* HERO SECTION - ACADEMIC & REFLECTIVE */}
      <section className="relative min-h-[80vh] flex items-start lg:items-center overflow-hidden bg-deep-blue pt-52 pb-20 md:pt-64 md:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-deep-blue" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-light-blue/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-light to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* TEXTE A GAUCHE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 lg:order-1"
            >
              <div className="flex flex-col items-start text-left">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <h2 className="text-white text-[28px] md:text-[32px] font-black tracking-tight mb-1">Apolline Bellaclas</h2>
                  <span className="text-light-blue font-bold uppercase tracking-[0.3em] text-sm md:text-base">
                    Portfolio Étudiant
                  </span>
                </motion.div>
                
                <h1 className="text-3xl md:text-4xl lg:text-[48px] font-black text-white leading-[1.1] tracking-tight mb-10 uppercase">
                  ET SI LE FUTUR DU WEB <br />
                  <span className="text-light-blue">NE S’ÉCRIVAIT PLUS</span> <br />
                  SEULEMENT EN CODE ?
                </h1>
                
                <p className="text-base md:text-lg text-slate-200 font-medium leading-relaxed mb-10 max-w-2xl">
                  L’alliance de l’intelligence artificielle et du no-code redéfinit les règles du digital. <br className="hidden md:block" />
                  Je ne me contente pas de l’observer : je l’expérimente à travers mes projets.
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

            {/* PHOTO A DROITE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="aspect-[4/5] md:aspect-square max-w-md mx-auto lg:mx-0 rounded-[3rem] overflow-hidden border-2 border-light-blue/20 shadow-2xl relative z-10">
                  <img 
                    src="https://res.cloudinary.com/delgsyvkc/image/upload/v1773394135/Photo_Apolline_Bellaclas.pdf_lftaza.png" 
                    alt="Apolline Bellaclas" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-light-blue/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-light-blue/5 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 animate-bounce hidden lg:block"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* HOOK SECTION - CURIOSITY */}
      <section className="py-16 bg-light-blue text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-2xl">
              "La technologie n'est plus une barrière, elle devient un accélérateur de vision."
            </h2>
            <div className="w-20 h-px bg-white/30 hidden md:block" />
            <p className="text-xl text-white/80 font-medium max-w-sm">
              Découvrez comment j'utilise ces nouveaux leviers pour transformer des idées en réalités digitales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION - MA VISION (NARRATIVE) */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-light-blue font-black uppercase tracking-widest text-sm mb-4 block">01. Ma Vision</span>
              <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-8 leading-tight">Au-delà de la technique, <br /> l'impact.</h2>
              <div className="space-y-6 text-lg text-text-gray leading-relaxed">
                <p className="font-bold text-deep-blue">
                  Tout a commencé par un constat simple : le web change, et il change vite. 
                </p>
                <p>
                  En tant qu'étudiante en Master informatique numérique, j'ai vu les barrières techniques s'effondrer au profit de la créativité pure. Le NoCode et l'IA ne sont pas juste des "raccourcis", ce sont des catalyseurs de stratégie.
                </p>
                <p>
                  Mon approche ? Ne plus perdre de temps sur la syntaxe, mais en gagner sur la valeur ajoutée, l'expérience utilisateur et la pertinence métier.
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

      {/* 02. LE PROBLÈME */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-light-blue font-black uppercase tracking-widest text-sm mb-4 block"
            >
              02. Le Problème
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-black text-deep-blue mb-8 leading-tight">
              Le paradoxe du digital : <br /> Trop de projets, pas assez de temps.
            </h2>
            <p className="text-lg md:text-xl text-text-gray leading-relaxed font-medium mb-12">
              Aujourd'hui, une entreprise ne peut plus attendre 6 mois pour tester une idée. Le marché est trop rapide. Mais comment allier vitesse de déploiement et qualité stratégique sans compromis ?
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h4 className="text-xl font-black mb-4 text-deep-blue">L'inertie technique</h4>
                <p className="text-text-gray">Les cycles de développement classiques freinent l'innovation et l'expérimentation rapide.</p>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h4 className="text-xl font-black mb-4 text-deep-blue">Le manque d'agilité</h4>
                <p className="text-text-gray">La difficulté de pivoter ou d'ajuster une stratégie digitale en temps réel face aux retours utilisateurs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. L'EXPÉRIMENTATION (PROJET LOVABLE) */}
      <section className="py-20 bg-deep-blue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-light-blue rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-light-blue/50 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-light-blue font-black uppercase tracking-widest text-sm mb-4 block">03. L'Expérimentation</span>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-white">Mon laboratoire : <br /> Le projet Lovable.</h2>
              <p className="text-lg text-slate-200 leading-relaxed mb-8 font-medium">
                Pour répondre à ce besoin de vitesse, j'ai testé les limites du NoCode assisté par IA. Ce portfolio est le fruit de cette expérimentation concrète.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-light-blue shadow-inner border border-white/5">
                    <Zap className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-white mb-1">Vitesse d'exécution</h4>
                    <p className="text-slate-300 font-medium">De l'idée au déploiement en un temps record.</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-light-blue shadow-inner border border-white/5">
                    <Brain className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-white mb-1">IA Générative</h4>
                    <p className="text-slate-300 font-medium">Une assistance intelligente pour la structure et le code.</p>
                  </div>
                </div>
              </div>

              <Link to="/portfolio" className="btn-primary inline-flex px-12 py-5 text-lg shadow-lg hover:shadow-light-blue/20 transition-all">
                Analyser le cas pratique
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-white/5 rounded-[3rem] border border-white/10 p-4 backdrop-blur-md">
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-deep-blue flex items-center justify-center border border-white/5">
                  <span className="text-white/40 font-black text-2xl uppercase tracking-widest">Aperçu Projet</span>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-light-blue p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hidden md:block text-deep-blue">
                <p className="text-5xl font-black mb-1">90%</p>
                <p className="text-xs font-black uppercase tracking-widest">Gain de temps technique</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 04. L'ANALYSE */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mb-16">
            <span className="text-light-blue font-black uppercase tracking-widest text-sm mb-4 block">04. L'Analyse</span>
            <h2 className="text-3xl md:text-5xl font-black text-deep-blue mb-8 leading-tight">Ce que j'ai appris : <br /> L'équilibre est la clé.</h2>
            <p className="text-lg md:text-xl text-text-gray leading-relaxed font-medium">
              L'expérimentation Lovable a confirmé une intuition : si l'outil fait gagner du temps, c'est l'humain qui apporte la direction.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "L'outil libère l'esprit",
                desc: "En automatisant les tâches répétitives, le NoCode permet de se concentrer sur ce qui compte vraiment : l'utilisateur et la stratégie.",
                icon: <Sparkles className="w-8 h-8 text-light-blue" />
              },
              {
                title: "L'IA est un co-pilote",
                desc: "Elle ne remplace pas le designer, elle amplifie ses capacités et propose des structures que l'on peut ensuite affiner.",
                icon: <Brain className="w-8 h-8 text-light-blue" />
              },
              {
                title: "La stratégie est le socle",
                desc: "Sans une vision claire, l'outil le plus puissant ne produira qu'un résultat générique. L'expertise reste indispensable.",
                icon: <Target className="w-8 h-8 text-light-blue" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 rounded-[3rem] bg-white border border-slate-100 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h4 className="text-2xl font-black mb-6 text-deep-blue">{item.title}</h4>
                <p className="text-text-gray leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERMEDIATE REFLECTION SECTION */}
      <section className="py-20 bg-deep-blue text-white text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl md:text-4xl font-black leading-tight italic mb-8">
              "La technologie n'est qu'un levier. <br /> 
              <span className="text-light-blue">La stratégie reste le moteur.</span>"
            </blockquote>
            <div className="w-16 h-1 bg-light-blue mx-auto mb-8" />
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Mon rôle est de naviguer entre ces deux mondes pour créer des expériences qui ne sont pas seulement belles, mais performantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* POURQUOI MOI ? */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-deep-blue mb-6">Pourquoi moi ?</h2>
            <p className="text-lg md:text-xl text-text-gray max-w-3xl leading-relaxed font-medium">
              Une approche mêlant marketing digital, NoCode et intelligence artificielle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-16">
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-light-blue mb-8 group-hover:bg-light-blue group-hover:text-white transition-all duration-500 shadow-sm">
                  <Brain className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-6 text-deep-blue">Vision stratégique</h4>
                <p className="text-base text-text-gray leading-relaxed font-medium">Comprendre les enjeux digitaux pour concevoir des solutions adaptées.</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-light-blue mb-8 group-hover:bg-light-blue group-hover:text-white transition-all duration-500 shadow-sm">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-6 text-deep-blue">Créativité augmentée</h4>
                <p className="text-base text-text-gray leading-relaxed font-medium">Utiliser les outils IA pour enrichir les processus créatifs.</p>
              </div>
            </div>
            <div className="space-y-24">
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-light-blue mb-8 group-hover:bg-light-blue group-hover:text-white transition-all duration-500 shadow-sm">
                  <Code className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-6 text-deep-blue">Culture technique</h4>
                <p className="text-base text-text-gray leading-relaxed font-medium">Allier réflexion stratégique et compréhension des outils numériques.</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-light-blue mb-8 group-hover:bg-light-blue group-hover:text-white transition-all duration-500 shadow-sm">
                  <Target className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-6 text-deep-blue">Orientation résultats</h4>
                <p className="text-base text-text-gray leading-relaxed font-medium">Concevoir des projets efficaces et mesurables.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-deep-blue mb-8">Conclusion</h2>
            <div className="space-y-6 text-lg md:text-xl text-text-gray leading-relaxed font-medium">
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
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-light-blue to-deep-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl mb-8 text-white font-black tracking-tight">Prêt à explorer le futur <br /> du digital ensemble ?</h2>
              <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                Que vous ayez un projet concret ou une simple curiosité sur l'impact de l'IA et du NoCode, discutons-en.
              </p>
              <div className="flex justify-center">
                <Link to="/contact" className="btn-outline-white px-10 py-4 text-lg hover:bg-white hover:text-deep-blue transition-all duration-500">
                  Démarrer la conversation
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
