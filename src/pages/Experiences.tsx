import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, ArrowRight } from 'lucide-react';

const Experiences = () => {
  const mainExperiences = [
    {
      title: "Cheffe de Projet Digital",
      company: "Legal 230",
      period: "2025 – 2026",
      type: "Alternance",
      description: "Pilotage de projets digitaux et stratégie marketing globale.",
      impact: "+1000 abonnés LinkedIn en 1 an",
      tasks: [
        "Pilotage de projets digitaux",
        "Gestion et optimisation des sites web",
        "SEO : stratégie + mise en œuvre",
        "Création de contenus (articles, newsletters, vidéos, visuels)",
        "Animation LinkedIn",
        "Organisation d’événements B2B",
        "Coordination des partenariats",
        "Gestion du budget marketing",
        "Reporting et analyse de performances",
        "Collaboration avec freelances / prestataires"
      ]
    },
    {
      title: "Chargée marketing & communication",
      company: "Legal 230",
      period: "2023 – 2024",
      type: "Alternance",
      description: "Mise en place de la stratégie marketing B2B et refonte digitale.",
      impact: "Refonte complète du site web",
      tasks: [
        "Création de contenus divers",
        "Campagnes multicanales",
        "Refonte du site web",
        "Organisation d’événements professionnels",
        "Production de newsletters et vidéos",
        "Mise en place de la stratégie marketing B2B"
      ]
    },
    {
      title: "Assistante marketing",
      company: "Touch Sell",
      period: "2022 – 2023",
      type: "Stage",
      description: "Soutien à la création de contenus et supports digitaux.",
      tasks: [
        "Créations graphiques",
        "Publications LinkedIn",
        "Emailing & supports digitaux",
        "Vidéo / montage",
        "Newsletter"
      ]
    },
    {
      title: "Assistante commerciale",
      company: "Ambrosia Films",
      period: "2021",
      type: "Stage",
      description: "Coordination de tournages et support logistique.",
      tasks: [
        "Coordination de tournages",
        "Support client",
        "Logistique",
        "Suivi projets"
      ]
    }
  ];

  const otherExperiences = [
    { title: "Alternance commerciale", company: "PROVEMAT", period: "2020 – 2022" },
    { title: "Emplois étudiants", company: "Kiabi, O2, Atlantic VSP", period: "2018 – 2020" },
    { title: "Stages divers", company: "Vente, relation client, prospection", period: "2018 – 2020" },
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-pure-black mb-8 tracking-tight">Parcours</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Une évolution constante du <span className="important-text">marketing opérationnel</span> vers la <span className="important-text">gestion de projets digitaux stratégiques</span>.
          </p>
        </motion.div>
      </section>

      <section className="section-gray relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="relative space-y-16">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

            {mainExperiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary-blue border-4 border-white shadow-lg -translate-x-1.5 hidden md:block z-10" />

                <div className="flex-1">
                  <div className="card-style p-8 md:p-12 hover:shadow-2xl transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="px-4 py-1.5 rounded-md bg-slate-100 text-primary-blue text-xs font-bold uppercase tracking-widest border border-slate-200">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-pure-black mb-2 group-hover:text-primary-blue transition-colors">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 mb-6">
                        <Briefcase className="w-5 h-5 text-primary-blue" />
                        {exp.company}
                      </div>
                      
                      <p className="text-slate-500 mb-8 text-lg leading-relaxed">{exp.description}</p>
                      
                      {exp.impact && (
                        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100 mb-8">
                          <Award className="w-5 h-5 text-primary-blue" />
                          <span className="text-sm font-bold text-primary-blue uppercase tracking-wide">Impact : {exp.impact}</span>
                        </div>
                      )}

                      <div className="space-y-4">
                        <h4 className="font-bold text-pure-black uppercase tracking-widest text-xs">Missions clés</h4>
                        <ul className="grid gap-3">
                          {exp.tasks.slice(0, 4).map((task, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-pure-black leading-relaxed">
                              <CheckCircle2 className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                              {task}
                            </li>
                          ))}
                          {exp.tasks.length > 4 && (
                            <li className="text-xs font-bold text-primary-blue flex items-center gap-1 mt-2">
                              Et {exp.tasks.length - 4} autres missions stratégiques <ArrowRight className="w-3 h-3" />
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-pure-black mb-4">Autres Expériences</h2>
          <div className="h-1.5 w-16 bg-primary-blue rounded-full" />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherExperiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <h4 className="font-bold text-pure-black mb-2 group-hover:text-primary-blue transition-colors">{exp.title}</h4>
              <p className="text-slate-600 text-sm font-medium mb-6">{exp.company}</p>
              <div className="inline-block px-3 py-1 rounded-md bg-slate-50 text-xs text-slate-400 font-bold uppercase tracking-widest border border-slate-100">
                {exp.period}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experiences;
