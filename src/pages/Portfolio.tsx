import { motion } from 'motion/react';
import { 
  Zap, Bot, Compass, Target, Feather, LayoutGrid, Cloud, 
  TrendingUp, BarChart3, ArrowRight, ExternalLink 
} from 'lucide-react';

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="pt-48 md:pt-60 pb-20 bg-bg-light overflow-hidden">
      {/* 1. HERO */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-2xl"
          >
            <motion.span variants={itemVariants} className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-4 block">
              ÉTUDE DE CAS · PROJET MASTER
            </motion.span>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black text-deep-blue mb-8 tracking-tighter leading-[1.1]">
              Conception d'un site vitrine avec Lovable
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-gray leading-relaxed font-medium">
              Retour sur la conception de ce portfolio digital, entre stratégie, NoCode et intelligence artificielle.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-video bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden relative group">
              <div className="bg-slate-50 w-full h-8 flex items-center px-4 gap-1.5 border-b border-slate-100">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <img 
                src="https://res.cloudinary.com/delgsyvkc/image/upload/v1778085335/Capture_d_%C3%A9cran_2026-05-06_183517_fnrh2i.png" 
                alt="Mockup Portfolio" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLÉMATIQUE (Nouvelle section) */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-deep-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-light-blue/60 mb-8 block relative z-10">PROBLÉMATIQUE</span>
          <h2 className="text-2xl md:text-4xl font-serif italic text-white mb-8 leading-relaxed relative z-10">
            "Un outil NoCode assisté par IA peut-il produire un livrable professionnel sans sacrifier la stratégie et la rigueur ?"
          </h2>
          <p className="text-slate-400 font-medium text-sm md:text-base max-w-2xl mx-auto relative z-10">
            Cette problématique guide l'ensemble de ma démarche : tester en pratique les apports et les limites du NoCode + IA, et identifier où la valeur humaine reste indispensable.
          </p>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-light-blue/10 blur-[100px] rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-light-blue/5 blur-[80px] rounded-full -ml-20 -mb-20" />
        </motion.div>
      </section>

      {/* 3. ÉTUDE DE CAS DÉTAILLÉE */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-4 block">01. CONTEXTE</span>
          <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-8 tracking-tight">Pourquoi un site portfolio ?</h2>
          <p className="text-lg md:text-xl text-text-gray font-medium leading-relaxed max-w-3xl mb-12">
            Dans un marché de l'emploi digital en constante évolution, un CV classique ne suffit plus. Concevoir un portfolio professionnel permet à la fois de structurer mon positionnement digital et de me différencier sur le marché de l'emploi en démontrant concrètement mes compétences.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-black text-deep-blue mb-4">Objectif</h3>
              <p className="text-text-gray font-medium leading-relaxed">
                Centraliser mes travaux académiques et projets personnels au sein d'une interface unique, fluide et professionnelle pour illustrer ma double compétence Manager et Expert Digital.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black text-deep-blue mb-4">Mon rôle</h3>
              <p className="text-text-gray font-medium leading-relaxed">
                Pilotage complet du projet : définition de la stratégie éditoriale, rédaction des contenus, structuration du parcours utilisateur et supervision technique du déploiement via Lovable.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. CHOIX DE L'OUTIL : LOVABLE */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-4 block">03. CHOIX DE L'OUTIL</span>
          <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-4 tracking-tight">Pourquoi Lovable ?</h2>
          <p className="text-lg text-text-gray font-medium max-w-3xl leading-relaxed">
            Pour répondre à cette problématique, j'ai choisi Lovable, un outil NoCode assisté par intelligence artificielle, en pleine émergence sur le marché de la production digitale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Zap, 
              title: "Rapidité", 
              desc: "Conception d'un site structuré sans développement complexe, en automatisant les étapes les plus chronophages." 
            },
            { 
              icon: Bot, 
              title: "IA générative", 
              desc: "Génération assistée du code et de la structure, avec une supervision humaine sur les choix stratégiques." 
            },
            { 
              icon: TrendingUp, 
              title: "Pertinence du test", 
              desc: "Une technologie en pleine émergence qu'il est stratégique de maîtriser pour rester compétitive sur le marché digital." 
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-light-blue/10 text-light-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <card.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-deep-blue mb-4 tracking-tight">{card.title}</h3>
              <p className="text-text-gray font-medium leading-relaxed text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. APPORTS ET DIFFICULTÉS */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-6 block">04. DIFFICULTÉS RENCONTRÉES</span>
            <h2 className="text-3xl font-black text-deep-blue mb-8 tracking-tight">Une analyse honnête des limites</h2>
            <ul className="space-y-4">
              {[
                "Difficulté à obtenir un rendu totalement personnalisé sans intervention manuelle",
                "Contraintes liées aux modèles proposés par l'outil",
                "Nécessité d'adapter et de retravailler les contenus générés",
                "Limites dans le contrôle technique fin"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0" />
                  <span className="text-base text-text-gray font-medium leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-6 block">05. APPORTS DU PROJET</span>
            <h2 className="text-3xl font-black text-deep-blue mb-8 tracking-tight">Ce que ce projet a apporté</h2>
            <ul className="space-y-4">
              {[
                "Structuration d'un projet digital de A à Z, du positionnement au déploiement",
                "Utilisation concrète et critique du NoCode et de l'intelligence artificielle",
                "Développement d'une réflexion sur les nouvelles méthodes de création web",
                "Travail sur l'équilibre entre rapidité d'exécution, qualité du design et pertinence stratégique"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-light-blue/10 text-light-blue flex items-center justify-center shrink-0 mt-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-base text-text-gray font-medium leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 6. CONCLUSION (Réponse à la problématique) */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 md:p-20 text-center"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-8 block">CONCLUSION</span>
          <h2 className="text-2xl md:text-4xl font-black text-deep-blue mb-8 tracking-tight">Réponsé à la problématique</h2>
          
          <p className="text-xl md:text-2xl font-black text-deep-blue mb-6 leading-relaxed max-w-4xl mx-auto">
            "Oui — un outil NoCode assisté par IA peut produire un livrable professionnel, à condition que la stratégie et la rigueur restent humaines."
          </p>
          
          <p className="text-base md:text-lg text-text-gray font-medium max-w-3xl mx-auto leading-relaxed">
            Lovable a permis 90 % de réduction du temps de développement, mais c'est ma définition du positionnement, ma réflexion UX et ma supervision continue qui ont fait la différence. L'IA est un co-pilote, pas un pilote.
          </p>
        </motion.div>
      </section>

      {/* 7. CHIFFRES-CLÉS */}
      <section className="bg-deep-blue py-24 mb-24 text-white">
        <div className="max-w-[1200px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-4 block">06. CHIFFRES-CLÉS</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-white">Trois indicateurs concrets</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                val: "90 %", 
                label: "Réduction du temps de développement", 
                sub: "Grâce à l'approche NoCode assistée par IA" 
              },
              { 
                val: "70 %", 
                label: "Des futures applications", 
                sub: "Devraient être développées en NoCode/Low-code d'ici 2025 (projection marché)" 
              },
              { 
                val: "10-20h", 
                label: "Gain hebdomadaire estimé", 
                sub: "Grâce à l'automatisation des processus de création" 
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-center"
              >
                <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">{stat.val}</div>
                <div className="text-xs font-black uppercase tracking-widest text-light-blue mb-4">{stat.label}</div>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm font-medium italic">
            Ces chiffres illustrent l'impact concret de ces outils sur la création digitale.
          </p>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="max-w-[1200px] mx-auto px-10 text-center pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-text-gray font-medium mb-8">
            Découvrez le résultat de cette démarche.
          </p>
          <a 
            href="https://apolline-bellaclas-portfolio.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-deep-blue to-light-blue text-white font-black rounded-full hover:shadow-2xl hover:shadow-light-blue/20 transition-all group"
          >
            Voir le site vitrine
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
