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

      {/* 2. CONTEXTE */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-4 block">01. CONTEXTE</span>
          <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-8 tracking-tight">Pourquoi un site portfolio ?</h2>
          <p className="text-lg md:text-xl text-text-gray font-medium leading-relaxed max-w-3xl">
            Dans un marché de l'emploi digital en constante évolution, un CV classique ne suffit plus. Concevoir un portfolio professionnel permet à la fois de structurer mon positionnement digital et de me différencier sur le marché de l'emploi en démontrant concrètement mes compétences.
          </p>
        </motion.div>
      </section>

      {/* 3. PROBLÉMATIQUE */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-deep-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-light-blue/60 mb-8 block relative z-10">02. PROBLÉMATIQUE</span>
          <h2 className="text-2xl md:text-4xl font-serif italic text-white mb-8 leading-relaxed relative z-10">
            "Un outil NoCode assisté par IA peut-il produire un livrable professionnel sans sacrifier la stratégie et la rigueur ?"
          </h2>
          <p className="text-slate-400 font-medium text-sm md:text-base max-w-2xl mx-auto relative z-10">
            Cette problématique guide l'ensemble de ma démarche : tester en pratique les apports et les limites d'un outil NoCode + IA, et identifier où la valeur humaine reste indispensable.
          </p>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-light-blue/10 blur-[100px] rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-light-blue/5 blur-[80px] rounded-full -ml-20 -mb-20" />
        </motion.div>
      </section>

      {/* 4. POURQUOI LOVABLE ? */}
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

      {/* 5. MA DÉMARCHE */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-4 block">04. MA DÉMARCHE</span>
          <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-4 tracking-tight">Quatre actions, un projet structuré</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: Target, 
              title: "Définition du positionnement", 
              desc: "Identification du message clé, de la cible et du ton à adopter pour différencier le site." 
            },
            { 
              icon: Feather, 
              title: "Création des contenus", 
              desc: "Rédaction des textes, sélection des visuels, structuration des informations selon la logique utilisateur." 
            },
            { 
              icon: LayoutGrid, 
              title: "Structuration UX", 
              desc: "Conception de la navigation, hiérarchisation des sections, optimisation de la lecture." 
            },
            { 
              icon: Cloud, 
              title: "Déploiement via Lovable", 
              desc: "Mise en ligne du site avec génération assistée, supervision et ajustements stratégiques continus." 
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-deep-blue text-white flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-deep-blue mb-3 leading-tight">{card.title}</h3>
              <p className="text-xs text-text-gray font-bold leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. APPORTS DU PROJET */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-6 block">05. APPORTS</span>
          <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-10 tracking-tight">Ce que ce projet a apporté</h2>
          
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Structuration d'un projet digital de A à Z, du positionnement au déploiement",
              "Utilisation concrète et critique du NoCode et de l'intelligence artificielle",
              "Développement d'une réflexion sur les nouvelles méthodes de création web",
              "Travail sur l'équilibre entre rapidité d'exécution, qualité du design et pertinence stratégique"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-50 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-light-blue/20 text-light-blue flex items-center justify-center shrink-0 mt-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <span className="text-base md:text-lg text-text-gray font-medium leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
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
                <BarChart3 className="w-10 h-10 text-light-blue mx-auto mb-6" />
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

      {/* 8. DIFFICULTÉS & LIMITES */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-6 block">07. DIFFICULTÉS & LIMITES</span>
          <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-8 tracking-tight">Une analyse honnête des limites</h2>
          <p className="text-lg text-text-gray font-medium max-w-3xl mb-12 leading-relaxed">
            Adopter une posture critique fait partie de la démarche professionnelle. Voici les limites identifiées au cours du projet.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-8">
            {[
              "Difficulté à obtenir un rendu totalement personnalisé sans intervention manuelle",
              "Contraintes liées aux modèles proposés par l'outil",
              "Nécessité d'adapter et de retravailler les contenus générés",
              "Limites dans le contrôle technique fin"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0" />
                <span className="text-base md:text-lg text-text-gray font-medium leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* 9. CONCLUSION */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 md:p-20 text-center"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-8 block">08. CONCLUSION</span>
          <h2 className="text-2xl md:text-4xl font-black text-deep-blue mb-8 tracking-tight">Réponse à la problématique</h2>
          
          <p className="text-xl md:text-2xl font-black text-deep-blue mb-6 leading-relaxed">
            "Oui — un outil NoCode assisté par IA peut produire un livrable professionnel, à condition que la stratégie et la rigueur restent humaines."
          </p>
          
          <p className="text-base md:text-lg text-text-gray font-medium max-w-3xl mx-auto leading-relaxed">
            Lovable a permis 90 % de réduction du temps de développement, mais c'est ma définition du positionnement, ma réflexion UX et ma supervision continue qui ont fait la différence entre un site générique et un site professionnel. L'IA est un co-pilote, pas un pilote.
          </p>
        </motion.div>
      </section>

      {/* 10. CTA */}
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
