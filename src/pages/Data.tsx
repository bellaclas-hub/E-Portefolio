import { motion } from 'motion/react';
import { Database, Target, Globe, FileText, PieChart, ExternalLink, ArrowRight, CheckCircle2, Users } from 'lucide-react';

const Data = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-48 md:pt-60 pb-20 min-h-screen bg-bg-light">
      {/* SECTION 1 — INTRODUCTION */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-light-blue/10 text-light-blue flex items-center justify-center shadow-sm">
              <Database className="w-6 h-6" />
            </div>
            <span className="text-sm font-black uppercase tracking-widest text-light-blue">Analyse de données</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-deep-blue mb-8 tracking-tighter leading-[1.1]">
            Le Télétravail : <br /> Performance & Réalité
          </h1>
          <div className="space-y-6 text-lg md:text-xl text-text-gray leading-relaxed font-medium max-w-3xl">
            <p>
              Le télétravail est devenu un mode d’organisation important depuis plusieurs années. Il interroge à la fois les salariés, les entreprises et le marché de l’emploi.
            </p>
            <p>
              Cette page a pour objectif d’analyser le télétravail sous deux angles :
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-light-blue shrink-0 mt-1" />
                <p className="text-deep-blue font-bold text-base">Côté salariés : productivité et satisfaction</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-light-blue shrink-0 mt-1" />
                <p className="text-deep-blue font-bold text-base">Côté entreprises : présence dans les offres d’emploi</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — PROBLÉMATIQUE */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-deep-blue rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-light-blue/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
            <span className="text-light-blue font-black uppercase tracking-widest text-xs mb-6 block">La problématique</span>
            <h2 className="text-2xl md:text-4xl font-black mb-8 leading-tight max-w-4xl text-white">
              “Le télétravail constitue-t-il aujourd’hui un mode de travail performant côté salariés et réellement présent côté entreprises ?”
            </h2>
            <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              Cette problématique permet de comparer la perception du télétravail par les salariés avec sa place concrète dans les pratiques de recrutement des entreprises.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 — CONTEXTE */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-8 tracking-tight">Contexte de l'étude</h2>
            <div className="space-y-6 text-text-gray font-medium text-lg leading-relaxed">
              <p>
                Le télétravail s’est fortement développé avec la digitalisation des outils de travail. Il est aujourd’hui associé à plusieurs enjeux stratégiques :
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Équilibre vie pro / vie perso",
                  "Autonomie renforcée",
                  "Productivité individuelle",
                  "Attractivité des entreprises",
                  "Évolution du management"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-light-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl"
          >
            <Globe className="w-12 h-12 text-light-blue mb-6" />
            <h3 className="text-xl font-black text-deep-blue mb-4">Un enjeu global</h3>
            <p className="text-text-gray font-medium leading-relaxed">
              La transformation numérique ne se limite pas aux outils. Elle redéfinit en profondeur le contrat social entre l'employeur et son collaborateur, rendant la flexibilité géographique incontournable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — DONNÉES ANALYSÉES */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-[2.5rem] p-10 md:p-16 border border-slate-200"
        >
          <h2 className="text-3xl font-black text-deep-blue mb-10 text-center">Les données exploitées</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Salariés", icon: <Users />, desc: "Données liées aux profils et comportements des collaborateurs." },
              { title: "Satisfaction", icon: <PieChart />, desc: "Mesure du bien-être et de l'adhésion au mode de travail." },
              { title: "Offres d'emploi", icon: <FileText />, desc: "Analyse de la présence du télétravail dans les annonces." }
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-white text-light-blue flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-deep-blue mb-3">{item.title}</h3>
                <p className="text-text-gray font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 text-center">
            <p className="text-text-gray font-medium">
              Le dashboard permet de visualiser ces éléments et de comparer les tendances de manière interactive.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5 — AXES D’ANALYSE */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-12 tracking-tight text-center">3 principaux axes d'analyse</h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Productivité",
              desc: "Analyser si le télétravail favorise ou non la performance des salariés au quotidien.",
              icon: <Target className="w-6 h-6" />
            },
            {
              title: "Satisfaction",
              desc: "Observer si les salariés associent le télétravail à une meilleure qualité de vie au travail (QVT).",
              icon: <PieChart className="w-6 h-6" />
            },
            {
              title: "Offres d’emploi",
              desc: "Étudier si les entreprises proposent réellement du télétravail dans leurs annonces de recrutement.",
              icon: <FileText className="w-6 h-6" />
            }
          ].map((axis, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-light-blue/10 text-light-blue flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {axis.icon}
              </div>
              <h3 className="text-xl font-black text-deep-blue mb-4">{axis.title}</h3>
              <p className="text-text-gray font-medium leading-relaxed">
                {axis.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 6 — ACCÈS AU DASHBOARD */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-light-blue to-deep-blue rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-white">Consulter le dashboard interactif</h2>
            <p className="text-white/80 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
              Accédez à l'ensemble des données visualisées et découvrez les résultats détaillés de cette étude.
            </p>
            <div className="flex justify-center">
              <a 
                href="file:///C:/Users/bella/Downloads/dashboard_3_dossiers_fr%20(7).html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-12 py-5 text-lg font-black rounded-xl bg-white text-deep-blue hover:bg-slate-100 transition-all shadow-xl active:scale-95 group"
              >
                Voir le dashboard
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 7 — CONCLUSION */}
      <section className="max-w-[800px] mx-auto px-10 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <ArrowRight className="w-10 h-10 text-light-blue mx-auto mb-4" />
          <h2 className="text-3xl font-black text-deep-blue">Conclusion</h2>
          <p className="text-text-gray text-lg md:text-xl font-medium leading-relaxed">
            Cette analyse permet de comprendre si le télétravail est seulement une attente des salariés ou s’il est aussi réellement intégré dans les pratiques des entreprises. Elle offre une vision factuelle d'un sujet souvent perçu de manière subjective.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Data;
