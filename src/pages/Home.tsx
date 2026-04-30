import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Brain, Code, Rocket, MessageSquare, Globe, Cpu, Layers, ChevronDown, Mail, Linkedin, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden bg-bg-light">
      {/* HERO SECTION - ACADEMIC & REFLECTIVE */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-deep-blue pt-48 pb-20 md:pt-56 md:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-deep-blue" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-light-blue/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-light to-transparent" />
        </div>

        <div className="max-w-[1200px] mx-auto px-10 relative z-10">
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
                  className="mb-4"
                >
                  <h2 className="text-white text-[28px] md:text-[32px] font-black tracking-tight mb-0.5">Apolline Bellaclas</h2>
                  <span className="text-light-blue font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
                    Portfolio Étudiant
                  </span>
                </motion.div>
                
                <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black text-white leading-[1.1] tracking-tight mb-6 uppercase">
                  ET SI LE FUTUR DU WEB <br />
                  <span className="text-light-blue">NE S’ÉCRIVAIT PLUS</span> <br />
                  SEULEMENT EN CODE ?
                </h1>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                  <a 
                    href="https://res.cloudinary.com/delgsyvkc/image/upload/v1775209438/CV_Apolline_Bellaclas_jthzlo.png" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary w-full sm:w-auto"
                  >
                    Voir mon CV
                  </a>
                  <a href="#projets" className="btn-outline-white w-full sm:w-auto">
                    Voir mes projets
                  </a>
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
                <div className="aspect-[4/5] md:aspect-square max-w-md ml-auto mr-0 lg:mr-4 rounded-[3rem] overflow-hidden border-2 border-light-blue/20 shadow-2xl relative z-10">
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

      {/* INTRODUCTION - MA VISION (NARRATIVE) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-light-blue font-black uppercase tracking-widest text-xs mb-2 block">01. Ma Vision</span>
              <div className="space-y-4 text-base md:text-lg text-text-gray leading-relaxed">
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
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Academic Research" 
                  className="w-full h-full object-cover grayscale opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 02. LE PROBLÈME */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-light-blue font-black uppercase tracking-widest text-xs mb-3 block"
            >
              02. Le Problème
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-black text-deep-blue mb-6 leading-tight">
              L’accélération du digital.
            </h2>
            <p className="text-base md:text-lg text-text-gray leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
              L’IA et les LLM redéfinissent les standards de production, le véritable enjeu n’est plus seulement la vitesse, mais la pertinence et la structure de l’exécution.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-5xl mx-auto">
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-md hover:shadow-xl transition-all duration-500">
                <h4 className="text-xl md:text-2xl font-black mb-4 text-deep-blue">Des cycles de livraison plus courts</h4>
                <p className="text-text-gray leading-relaxed">L'IA permet d'accélérer drastiquement le contenu et le prototypage. Une refonte web qui exigeait autrefois 6 mois de travail peut désormais être structurée et lancée en un temps record sans sacrifier la vision stratégique.</p>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-md hover:shadow-xl transition-all duration-500">
                <h4 className="text-xl md:text-2xl font-black mb-4 text-deep-blue">Les exigences sont de plus en plus élevées</h4>
                <p className="text-text-gray leading-relaxed">Si les délais se réduisent, les attentes en termes de qualité et de ROI augmentent. Le défi n'est plus de produire rapidement, mais de garantir une performance et des résultats mesurables dès le déploiement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. L'EXPÉRIMENTATION (PROJET LOVABLE) */}
      <section id="projets" className="py-20 bg-deep-blue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-light-blue rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-light-blue/50 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-[1200px] mx-auto px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
            {/* IMAGE A DROITE (DESKTOP) / EN HAUT (MOBILE) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <a 
                href="https://lovable.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group relative"
              >
                <div className="aspect-video bg-white/5 rounded-[2.5rem] border border-white/10 p-3 backdrop-blur-md transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-light-blue/20">
                  <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-deep-blue border border-white/5 relative flex flex-col">
                    {/* Browser Header Mockup */}
                    <div className="bg-white/10 w-full h-7 flex items-center px-4 gap-1.5 border-b border-white/5">
                      <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                      <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                      <div className="ml-4 bg-white/5 rounded-md h-4 w-1/2" />
                    </div>
                    {/* Browser Content */}
                    <div className="flex-grow relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                        alt="Aperçu du site vitrine Apolline Bellaclas" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-deep-blue/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>
                </div>
                
                {/* Badge 90% */}
                <div className="absolute -bottom-4 -right-4 bg-light-blue p-5 md:p-6 rounded-2xl shadow-2xl z-20 text-deep-blue transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                  <p className="text-3xl md:text-4xl font-black mb-0.5">90%</p>
                  <p className="text-[9px] font-black uppercase tracking-widest leading-none">Gain de temps</p>
                </div>
              </a>
            </motion.div>

            {/* TEXTE A GAUCHE (DESKTOP) / EN BAS (MOBILE) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 max-w-xl"
            >
              <span className="text-light-blue font-black uppercase tracking-widest text-xs mb-3 block">03. Mon Approche</span>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-white">Aller au-delà <br /> du CV classique.</h2>
              
              <div className="space-y-10">
                {/* 1. Message principal */}
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed opacity-90">
                  Aujourd’hui, un profil marketing doit être capable de <span className="text-light-blue font-bold">montrer concrètement</span> ce qu’il sait faire. Ce site me permet de présenter mes projets, mes contenus et ma manière de travailler de façon visuelle et structurée.
                </p>

                {/* 2. Les piliers (Ma différence & Bonus) */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-300">
                    <span className="text-light-blue font-black uppercase tracking-widest text-[10px] mb-3 block">Ma différence</span>
                    <p className="text-white text-sm md:text-base leading-relaxed font-semibold">
                      👉 un double parcours marketing et commercial, qui me permet de comprendre à la fois les enjeux de communication et les attentes concrètes des équipes commerciales.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-300">
                    <span className="text-light-blue font-black uppercase tracking-widest text-[10px] mb-3 block">Valeur Ajoutée</span>
                    <p className="text-white text-sm md:text-base leading-relaxed font-semibold">
                      Je conçois des contenus qui ne sont pas seulement esthétiques ou engageants, mais réellement utiles pour la prospection et la performance business.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer de section pour combler le vide et dynamiser la lecture */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-r from-light-blue/20 to-transparent border-l-4 border-light-blue p-10 rounded-r-3xl"
          >
            <p className="text-white text-xl md:text-2xl font-black leading-relaxed flex-1">
              🎯 L’objectif : permettre à un recruteur de comprendre rapidement qui je suis, ce que je sais faire, et ce que je peux apporter.
            </p>
            <Link to="/portfolio" className="btn-primary shadow-2xl hover:shadow-light-blue/40 transition-all px-12 py-4 whitespace-nowrap">
              Voir mes réalisations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 04. L'ANALYSE */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="max-w-4xl mb-12">
            <span className="text-light-blue font-black uppercase tracking-widest text-xs mb-3 block">04. L'Analyse</span>
            <h2 className="text-3xl md:text-5xl font-black text-deep-blue mb-6 leading-tight">Ce que j'ai appris</h2>
            <p className="text-base md:text-lg text-text-gray leading-relaxed font-medium max-w-2xl">
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
                className="p-10 rounded-[3rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-light-blue/20 transition-all duration-500 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h4 className="text-xl md:text-2xl font-black mb-4 text-deep-blue">{item.title}</h4>
                <p className="text-sm md:text-base text-text-gray leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI MOI ? */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-deep-blue mb-6">Pourquoi moi ?</h2>
            <p className="text-base md:text-lg text-text-gray max-w-2xl leading-relaxed font-semibold opacity-90">
              Une approche mêlant marketing digital, NoCode et intelligence artificielle pour des résultats concrets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Vision stratégique",
                desc: "Comprendre les enjeux digitaux pour concevoir des solutions adaptées.",
                icon: <Brain className="w-12 h-12" />
              },
              {
                title: "Créativité augmentée",
                desc: "Utiliser les outils IA pour enrichir les processus créatifs.",
                icon: <Sparkles className="w-12 h-12" />
              },
              {
                title: "Culture technique",
                desc: "Allier réflexion stratégique et compréhension des outils numériques.",
                icon: <Code className="w-12 h-12" />
              },
              {
                title: "Orientation résultats",
                desc: "Concevoir des projets efficaces et mesurables.",
                icon: <Target className="w-12 h-12" />
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center text-light-blue mb-8 group-hover:bg-light-blue group-hover:text-white transition-all duration-500 shadow-inner group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black mb-4 text-deep-blue leading-tight">{item.title}</h4>
                <p className="text-sm md:text-base text-text-gray leading-relaxed font-medium opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black text-deep-blue mb-8">Conclusion</h2>
            <div className="space-y-6 text-base md:text-lg text-text-gray leading-relaxed font-medium">
              <p>
                Le NoCode et l’intelligence artificielle permettent aujourd’hui de créer des sites web rapidement et efficacement.
              </p>
              <p>
                Cependant, ils ne remplacent pas la réflexion stratégique et créative nécessaire à un projet digital performant.
              </p>
              <p className="text-deep-blue font-bold">
                Ce projet illustre l’équilibre à trouver entre accessibilité, performance et expertise.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-28 bg-bg-light">
        <div className="max-w-[1200px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-light-blue to-deep-blue rounded-[3rem] p-20 md:p-32 text-center relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.25)] border border-white/10"
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,white,transparent)]" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl mb-8 text-white font-black tracking-tight leading-[1.1]">Prêt à explorer le futur <br /> du digital ensemble ?</h2>
              <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                Que vous ayez un projet concret ou une simple curiosité sur l'impact de l'IA et du NoCode, discutons-en dès maintenant.
              </p>
              <div className="flex justify-center">
                <Link to="/contact" className="btn-outline-white shadow-2xl hover:shadow-white/20 px-12 py-5 text-lg">
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
