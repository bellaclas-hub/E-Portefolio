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
    <div className="pt-32 pb-20 bg-bg-light">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl"
        >
          <motion.span variants={itemVariants} className="text-[10px] font-black uppercase tracking-[0.3em] text-light-blue mb-6 block">
            Étude de cas : Projet Master
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-deep-blue mb-12 tracking-tighter leading-[0.9]">
            Création d’un site vitrine avec Lovable
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-text-gray leading-relaxed font-medium max-w-2xl">
            Comment le NoCode et l’IA transforment-ils la création web ? Retour sur la conception de ce portfolio.
          </motion.p>
        </motion.div>
      </section>

      {/* Contexte & Pourquoi ce projet */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-8">Contexte</h2>
            <div className="space-y-6 text-lg text-text-gray leading-relaxed max-w-xl">
              <p>
                Dans le cadre de ma recherche de <span className="text-deep-blue font-bold">CDI</span>, j’ai souhaité aller au-delà du format classique du CV.
              </p>
              <p>
                Aujourd’hui, dans les métiers du digital, un CV ne suffit plus toujours à refléter les compétences réelles, notamment en création, en stratégie ou en utilisation d’outils.
              </p>
              <p>
                Le marché étant particulièrement concurrentiel, avec beaucoup de candidats et peu d’opportunités, il devient essentiel de <span className="text-light-blue font-bold">se démarquer</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-8">Pourquoi ce projet</h2>
            <div className="space-y-6 text-lg text-text-gray leading-relaxed max-w-xl">
              <p>
                J’ai donc choisi de créer un <span className="text-deep-blue font-bold">site vitrine personnel</span> afin de présenter mon profil de manière plus complète et plus visuelle.
              </p>
              <p>
                L’objectif était de me différencier des autres candidatures et de valoriser concrètement mes compétences, mes savoir-faire et ma capacité à concevoir un projet digital.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Choix de l'outil */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24 mb-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-8">Choix de l’outil : Lovable</h2>
            <p className="text-2xl md:text-3xl font-black text-deep-blue leading-tight mb-10">
              Pour réaliser ce projet, j’ai utilisé <span className="text-light-blue">Lovable</span>, un outil NoCode assisté par intelligence artificielle.
            </p>
            <p className="text-lg text-text-gray leading-relaxed font-medium">
              Cet outil permet de concevoir rapidement un site structuré sans développement complexe, en automatisant certaines étapes clés de la production.
            </p>
          </div>
        </div>
      </section>

      {/* Charte Graphique Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-8">4.1 Objectif de la charte graphique</h2>
            <div className="space-y-6 text-lg text-text-gray leading-relaxed">
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
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-8">4.2 Identité visuelle</h2>
            <div className="space-y-8">
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
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24 bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-sm">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-8">Application concrète</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-10 rounded-[2rem] bg-bg-light border border-slate-100">
            <h3 className="text-xl font-black text-deep-blue mb-6">Focus Lovable</h3>
            <p className="text-text-gray leading-relaxed font-medium">
              L'utilisation de Lovable a permis de mettre en œuvre cette charte graphique avec une grande précision, tout en bénéficiant de la rapidité du NoCode.
            </p>
          </div>
          <div className="p-10 rounded-[2rem] bg-bg-light border border-slate-100">
            <h3 className="text-xl font-black text-deep-blue mb-6">Cohérence</h3>
            <p className="text-text-gray leading-relaxed font-medium">
              Chaque élément visuel a été pensé pour refléter un positionnement marketing B2B, orienté sérieux et crédibilité.
            </p>
          </div>
        </div>
      </section>

      {/* Difficultés & Apports */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Difficultés */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <AlertCircle className="w-6 h-6 text-light-blue" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-deep-blue">Difficultés rencontrées</h2>
            </div>
            <ul className="space-y-8">
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
                  className="flex items-start gap-4 text-lg text-text-gray font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Apports */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <TrendingUp className="w-6 h-6 text-light-blue" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-deep-blue">Apports du projet</h2>
            </div>
            <ul className="space-y-8">
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
                  className="flex items-start gap-4 text-lg text-text-gray font-medium"
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
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-8">Analyse</h2>
          <p className="text-2xl md:text-4xl font-black text-deep-blue leading-tight tracking-tight mb-10">
            Ce projet montre que le NoCode et l’intelligence artificielle permettent aujourd’hui de créer des sites web <span className="text-light-blue">rapidement et efficacement</span>.
          </p>
          <p className="text-xl text-text-gray font-medium leading-relaxed">
            Cependant, ces outils nécessitent toujours une <span className="text-deep-blue font-bold">réflexion stratégique</span> pour concevoir une expérience pertinente.
          </p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
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
              className="p-10 bg-deep-blue rounded-[3rem] text-white"
            >
              <BarChart3 className="w-8 h-8 text-light-blue mb-8" />
              <div className="text-5xl font-black mb-4 tracking-tighter">{stat.value}</div>
              <div className="text-xs font-black uppercase tracking-widest text-light-blue mb-4">{stat.label}</div>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-12 text-text-gray font-medium italic">
          Ces chiffres illustrent l’impact concret de ces outils sur la création digitale.
        </p>
      </section>

      {/* Objectif */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <div className="bg-white rounded-[4rem] p-12 md:p-20 border border-slate-100 text-center">
          <Rocket className="w-10 h-10 text-light-blue mx-auto mb-8" />
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-8">Objectif professionnel</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-4xl font-black text-deep-blue leading-tight mb-10">
              L’objectif de ce projet est clair : me démarquer dans ma recherche d’emploi et réussir à <span className="text-light-blue underline decoration-4 underline-offset-8">signer un CDI</span>.
            </p>
            <p className="text-lg text-text-gray font-medium leading-relaxed">
              Ce site vitrine est un levier pour montrer concrètement mes compétences et mon positionnement dans un environnement digital en constante évolution.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-action */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-text-gray font-medium mb-10">
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
