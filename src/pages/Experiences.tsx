import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experiences = () => {
  const mainExperiences = [
    {
      title: "Cheffe de Projet Digital",
      company: "Legal 230",
      period: "2024 – Aujourd’hui",
      type: "Alternance",
      description: "Conception et pilotage de projets digitaux complexes.",
      tasks: [
        "Production de contenus : vidéos, newsletters, articles SEO",
        "Animation LinkedIn (3 posts/semaine)",
        "Reporting et gestion de budget",
        "Coordination d'événements B2B",
        "Déploiement d’outils digitaux et automatisations",
        "Gestion du site web et publication hebdomadaire",
        "Travail en équipe / freelance / prestataires"
      ]
    },
    {
      title: "Chargée de marketing & communication",
      company: "Legal 230",
      period: "2023 – 2024",
      type: "Alternance",
      description: "Mise en place de la stratégie de communication globale.",
      tasks: [
        "Création de contenus (visuels, vidéos, articles, supports commerciaux)",
        "Mise en place de campagnes multicanales",
        "Élaboration de stratégies marketing B2B",
        "Refonte complète du site web",
        "Organisation du premier afterwork corporate"
      ]
    },
    {
      title: "Assistante marketing",
      company: "Touch Sell",
      period: "2022 – 2023",
      type: "Stage",
      description: "Soutien opérationnel aux campagnes marketing.",
      tasks: [
        "Création de contenus",
        "Newsletter & supports digitaux",
        "Website management",
        "Montage vidéo"
      ]
    },
    {
      title: "Assistante commerciale",
      company: "Ambrosia Films",
      period: "2021",
      type: "Stage",
      description: "Coordination et relation client dans l'audiovisuel.",
      tasks: [
        "Coordination de tournages",
        "Relation client",
        "Production audiovisuelle"
      ]
    }
  ];

  const otherExperiences = [
    { title: "Alternance commerciale", company: "PROVEMAT", period: "2020-2022" },
    { title: "Vente & Relation Client", company: "Kiabi, O2, Atlantic VSP", period: "Jobs étudiants" },
    { title: "Stages divers", company: "Vente, prospection, relation client", period: "2018-2020" },
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-deep-blue mb-8 tracking-tight">Expériences Professionnelles</h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Un parcours marqué par une montée en compétences constante dans le marketing digital B2B et la gestion de projets.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-12">
        {mainExperiences.map((exp, i) => (
          <motion.div
            key={exp.title + exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-12 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-blue-50 text-deep-blue text-xs font-bold uppercase tracking-widest border border-blue-100">
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-deep-blue mb-2 group-hover:text-accent-blue transition-colors">{exp.title}</h3>
                <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 mb-6">
                  <Briefcase className="w-5 h-5 text-accent-blue" />
                  {exp.company}
                </div>
                <p className="text-slate-500 mb-8 text-lg">{exp.description}</p>
              </div>
              
              <div className="flex-1 bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h4 className="font-bold text-deep-blue mb-6 uppercase tracking-widest text-xs">Missions principales</h4>
                <ul className="grid gap-4">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-deep-blue mb-2">Autres Expériences</h2>
          <div className="h-1 w-12 bg-accent-blue rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherExperiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-accent-blue transition-all"
            >
              <h4 className="font-bold text-deep-blue mb-2">{exp.title}</h4>
              <p className="text-slate-600 text-sm font-medium mb-4">{exp.company}</p>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">{exp.period}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experiences;
