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
    <div className="pt-48 pb-32 bg-pure-white">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl"
        >
          <motion.span variants={itemVariants} className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-blue mb-6 block">
            Étude de cas : Projet Master
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-deep-black mb-12 tracking-tighter leading-[0.9]">
            Création d’un site vitrine avec Lovable
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-text-gray leading-relaxed font-medium max-w-2xl">
            Comment le NoCode et l’IA transforment-ils la création web ? Retour sur la conception de ce portfolio.
          </motion.p>
        </motion.div>
      </section>

      {/* Contexte & Pourquoi ce projet */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-48">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary-blue mb-8">Contexte</h2>
            <div className="space-y-6 text-lg text-text-gray leading-relaxed max-w-xl">
              <p>
                Dans le cadre de ma recherche de <span className="text-deep-black font-bold">CDI</span>, j’ai souhaité aller au-delà du format classique du CV.
              </p>
              <p>
                Aujourd’hui, dans les métiers du digital, un CV ne suffit plus toujours à refléter les compétences réelles, notamment en création, en stratégie ou en utilisation d’outils.
              </p>
              <p>
                Le marché étant particulièrement concurrentiel, avec beaucoup de candidats et peu d’opportunités, il devient essentiel de <span className="text-primary-blue font-bold">se démarquer</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary-blue mb-8">Pourquoi ce projet</h2>
            <div className="space-y-6 text-lg text-text-gray leading-relaxed max-w-xl">
              <p>
                J’ai donc choisi de créer un <span className="text-deep-black font-bold">site vitrine personnel</span> afin de présenter mon profil de manière plus complète et plus visuelle.
              </p>
              <p>
                L’objectif était de me différencier des autres candidatures et de valoriser concrètement mes compétences, mes savoir-faire et ma capacité à concevoir un projet digital.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Choix de l'outil */}
      <section className="bg-slate-50 py-32 px-6 md:px-12 lg:px-24 mb-48 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary-blue mb-8">Choix de l’outil : Lovable</h2>
            <p className="text-2xl md:text-3xl font-black text-deep-black leading-tight mb-10">
              Pour réaliser ce projet, j’ai utilisé <span className="text-primary-blue">Lovable</span>, un outil NoCode assisté par intelligence artificielle.
            </p>
            <p className="text-lg text-text-gray leading-relaxed font-medium">
              Cet outil permet de concevoir rapidement un site structuré sans développement complexe, en automatisant certaines étapes clés de la production.
            </p>
          </div>
        </div>
      </section>

      {/* Difficultés & Apports */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-48">
        <div className="grid md:grid-cols-2 gap-24">
          {/* Difficultés */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <AlertCircle className="w-6 h-6 text-primary-blue" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-deep-black">Difficultés rencontrées</h2>
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
              <TrendingUp className="w-6 h-6 text-primary-blue" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-deep-black">Apports du projet</h2>
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
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-2.5 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Analyse */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-48">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary-blue mb-12">Analyse</h2>
          <p className="text-2xl md:text-4xl font-black text-deep-black leading-tight tracking-tight mb-10">
            Ce projet montre que le NoCode et l’intelligence artificielle permettent aujourd’hui de créer des sites web <span className="text-primary-blue">rapidement et efficacement</span>.
          </p>
          <p className="text-xl text-text-gray font-medium leading-relaxed">
            Cependant, ces outils nécessitent toujours une <span className="text-deep-black font-bold">réflexion stratégique</span> pour concevoir une expérience pertinente.
          </p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-48">
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
              className="p-10 bg-deep-black rounded-[3rem] text-white"
            >
              <BarChart3 className="w-8 h-8 text-primary-blue mb-8" />
              <div className="text-5xl font-black mb-4 tracking-tighter">{stat.value}</div>
              <div className="text-xs font-black uppercase tracking-widest text-primary-blue mb-4">{stat.label}</div>
              <p className="text-sm text-light-gray font-medium leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-12 text-text-gray font-medium italic">
          Ces chiffres illustrent l’impact concret de ces outils sur la création digitale.
        </p>
      </section>

      {/* Objectif */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-48">
        <div className="bg-slate-50 rounded-[4rem] p-16 md:p-24 border border-slate-100 text-center">
          <Rocket className="w-12 h-12 text-primary-blue mx-auto mb-10" />
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary-blue mb-10">Objectif professionnel</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-4xl font-black text-deep-black leading-tight mb-10">
              L’objectif de ce projet est clair : me démarquer dans ma recherche d’emploi et réussir à <span className="text-primary-blue underline decoration-4 underline-offset-8">signer un CDI</span>.
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
