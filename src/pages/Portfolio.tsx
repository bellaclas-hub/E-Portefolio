import { motion } from 'motion/react';
import { Target, Zap, AlertCircle, TrendingUp, BarChart3, ArrowRight, ExternalLink, Rocket } from 'lucide-react';

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="pt-48 md:pt-60 pb-20 bg-bg-light">
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-10 mb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl"
        >
          <motion.span variants={itemVariants} className="text-xs font-black uppercase tracking-[0.3em] text-light-blue mb-4 block">
            Étude de cas : Projet Master
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-black text-deep-blue mb-8 tracking-tighter leading-[1.1]">
            Création d’un site vitrine avec Lovable
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-gray leading-relaxed font-medium max-w-2xl">
            Comment le NoCode et l’IA transforment-ils la création web ? Retour sur la conception de ce portfolio.
          </motion.p>
        </motion.div>
      </section>

      {/* Case Study Visual Section */}
      <section className="max-w-[1200px] mx-auto px-10 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE EN HAUT (MOBILE) / A DROITE (DESKTOP) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <a 
              href="https://apolline-bellaclas-portfolio.lovable.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group"
            >
              <div className="aspect-video bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden relative transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-light-blue/20">
                {/* Browser Header Mockup */}
                <div className="bg-slate-50 w-full h-8 flex items-center px-4 gap-1.5 border-b border-slate-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <div className="ml-4 bg-slate-200/50 rounded-md h-4 w-1/3" />
                </div>
                <div className="relative w-full h-full overflow-hidden bg-slate-50">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                    alt="Aperçu de mon site vitrine réalisé avec Lovable" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-deep-blue/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </a>
          </motion.div>

          {/* TEXTE EN BAS (MOBILE) / A GAUCHE (DESKTOP) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-6">Étude de cas détaillée</h2>
            <h3 className="text-2xl md:text-4xl font-black text-deep-blue mb-8 leading-tight">Création d’un site vitrine personnel</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-light-blue mb-2">Contexte</h4>
                <p className="text-base md:text-lg text-text-gray font-medium leading-relaxed">
                  Création d’un site pour me différencier sur le marché de l’emploi.
                </p>
              </div>
              
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-light-blue mb-2">Objectif</h4>
                <p className="text-base md:text-lg text-text-gray font-medium leading-relaxed">
                  Structurer mon positionnement marketing et générer des opportunités.
                </p>
              </div>
              
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-light-blue mb-2">Mon Rôle</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {[
                    "Définition du positionnement",
                    "Création des contenus",
                    "Structuration UX",
                    "Déploiement via Lovable"
                  ].map((role, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-deep-blue font-bold bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-light-blue shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Choix de l'outil */}
      <section className="bg-white py-20 px-10 mb-20 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-6">Choix de l’outil : Lovable</h2>
            <p className="text-xl md:text-3xl font-black text-deep-blue leading-tight mb-8">
              Pour réaliser ce projet, j’ai utilisé <span className="text-light-blue">Lovable</span>, un outil NoCode assisté par intelligence artificielle.
            </p>
            <p className="text-base md:text-lg text-text-gray leading-relaxed font-medium">
              Cet outil permet de concevoir rapidement un site structuré sans développement complexe, en automatisant certaines étapes clés de la production.
            </p>
          </div>
        </div>
      </section>

      {/* Charte Graphique Section */}
      <section className="max-w-[1200px] mx-auto px-10 mb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-6">4.1 Objectif de la charte graphique</h2>
            <div className="space-y-4 text-base md:text-lg text-text-gray leading-relaxed">
              <p>
                La charte graphique du portfolio a pour objectif d’assurer :
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-light-blue shrink-0" />
                  Une cohérence avec mon site professionnel existant
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-light-blue shrink-0" />
                  Une image professionnelle et structurée
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-light-blue shrink-0" />
                  Une lisibilité optimale du contenu
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-light-blue shrink-0" />
                  Une identité visuelle stable et reconnaissable
                </li>
              </ul>
              <p>
                Le choix a été fait de conserver l’univers graphique déjà développé sur mon site personnel afin d’assurer une continuité entre mes supports académiques et professionnels.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-6">4.2 Identité visuelle</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-black text-deep-blue mb-4 flex items-center gap-2">
                  🎨 Couleurs
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-deep-blue text-white text-xs font-bold">
                    Bleu profond (Dominante)
                    <div className="mt-2 opacity-70 font-normal">Confiance, rigueur</div>
                  </div>
                  <div className="p-4 rounded-xl bg-light-blue text-white text-xs font-bold">
                    Bleu clair (Accent)
                    <div className="mt-2 opacity-70 font-normal">Interactivité</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-black text-deep-blue mb-4 flex items-center gap-2">
                  🔤 Typographie
                </h4>
                <p className="text-text-gray font-medium">
                  Une police moderne sans-serif, lisible sur écran, favorisant une lecture fluide et structurée.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application concrète Section */}
      <section className="max-w-[1200px] mx-auto px-10 mb-20">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-sm">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-6">Application concrète</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 rounded-[2rem] bg-bg-light border border-slate-100">
              <h3 className="text-lg md:text-xl font-black text-deep-blue mb-4">Focus Lovable</h3>
              <p className="text-sm md:text-base text-text-gray leading-relaxed font-medium">
                L'utilisation de Lovable a permis de mettre en œuvre cette charte graphique avec une grande précision, tout en bénéficiant de la rapidité du NoCode.
              </p>
            </div>
            <div className="p-8 rounded-[2rem] bg-bg-light border border-slate-100">
              <h3 className="text-lg md:text-xl font-black text-deep-blue mb-4">Cohérence</h3>
              <p className="text-sm md:text-base text-text-gray leading-relaxed font-medium">
                Chaque élément visuel a été pensé pour refléter un positionnement marketing B2B, orienté sérieux et crédibilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Difficultés & Apports */}
      <section className="max-w-[1200px] mx-auto px-10 mb-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Difficultés */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <AlertCircle className="w-6 h-6 text-light-blue" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-deep-blue">Difficultés rencontrées</h2>
            </div>
            <ul className="space-y-6">
              {[
                "Difficulté à obtenir un rendu totalement personnalisé",
                "Contraintes liées aux modèles proposés",
                "Nécessité d’adapter et retravailler les contenus",
                "Limites dans le contrôle technique"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 text-base md:text-lg text-text-gray font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Apports */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <TrendingUp className="w-6 h-6 text-light-blue" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-deep-blue">Apports du projet</h2>
            </div>
            <ul className="space-y-6">
              {[
                "Structuration d’un projet digital de A à Z",
                "Utilisation concrète du NoCode et de l’IA",
                "Développement d’une réflexion sur les nouvelles méthodes de création web",
                "Travail sur l’équilibre entre rapidité, design et pertinence"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 text-base md:text-lg text-text-gray font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-light-blue mt-2.5 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Analyse */}
      <section className="max-w-[1200px] mx-auto px-10 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-6">Analyse</h2>
          <p className="text-xl md:text-3xl font-black text-deep-blue leading-tight tracking-tight mb-8">
            Ce projet montre que le NoCode et l’intelligence artificielle permettent aujourd’hui de créer des sites web <span className="text-light-blue">rapidement et efficacement</span>.
          </p>
          <p className="text-lg text-text-gray font-medium leading-relaxed">
            Cependant, ces outils nécessitent toujours une <span className="text-deep-blue font-bold">réflexion stratégique</span> pour concevoir une expérience pertinente.
          </p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="max-w-[1200px] mx-auto px-10 mb-20">
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              value: "90%",
              label: "Réduction du temps de développement",
              desc: "Grâce à l'approche NoCode assistée par IA."
            },
            {
              value: "70%",
              label: "Des futures applications",
              desc: "Devraient être développées en NoCode/Low-code d'ici 2025."
            },
            {
              value: "10-20h",
              label: "Gain hebdomadaire estimé",
              desc: "Grâce à l'automatisation des processus de création."
            }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-deep-blue rounded-[2.5rem] text-white"
            >
              <BarChart3 className="w-8 h-8 text-light-blue mb-6" />
              <div className="text-4xl font-black mb-3 tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-light-blue mb-3">{stat.label}</div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-10 text-text-gray text-sm font-medium italic">
          Ces chiffres illustrent l’impact concret de ces outils sur la création digitale.
        </p>
      </section>

      {/* Objectif */}
      <section className="max-w-[1200px] mx-auto px-10 mb-20">
        <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-slate-100 text-center">
          <Rocket className="w-10 h-10 text-light-blue mx-auto mb-6" />
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-6">Objectif professionnel</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-3xl font-black text-deep-blue leading-tight mb-8">
              L’objectif de ce projet est clair : me démarquer dans ma recherche d’emploi et réussir à <span className="text-light-blue underline decoration-4 underline-offset-8">signer un CDI</span>.
            </p>
            <p className="text-base md:text-lg text-text-gray font-medium leading-relaxed">
              Ce site vitrine est un levier pour montrer concrètement mes compétences et mon positionnement dans un environnement digital en constante évolution.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-action */}
      <section className="max-w-[1200px] mx-auto px-10 text-center pb-20">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-text-gray font-medium mb-8">
            Découvrez le site vitrine réalisé avec Lovable
          </p>
          <a 
            href="https://apolline-bellaclas-portfolio.lovable.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-4 group"
          >
            Voir le site vitrine
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
