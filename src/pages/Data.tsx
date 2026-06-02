import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Database, Target, ExternalLink, ArrowRight, 
  CheckCircle2, HelpCircle, Download, Sparkles, 
  Filter, Terminal, Cpu, Activity, ClipboardCheck
} from 'lucide-react';

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
            <span className="text-sm font-semibold uppercase tracking-widest text-light-blue">Analyse de données</span>
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
                <p className="text-deep-blue font-medium text-base">Côté salariés : productivité et satisfaction</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-light-blue shrink-0 mt-1" />
                <p className="text-deep-blue font-medium text-base">Côté entreprises : présence dans les offres d’emploi</p>
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
            <span className="text-light-blue font-semibold uppercase tracking-widest text-xs mb-6 block">La problématique</span>
            <h2 className="text-2xl md:text-4xl font-black mb-8 leading-tight max-w-4xl text-white">
              “Le télétravail constitue-t-il aujourd’hui un mode de travail performant côté salariés et réellement présent côté entreprises ?”
            </h2>
            <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              Cette problématique permet de comparer la perception du télétravail par les salariés avec sa place concrète dans les pratiques de recrutement des entreprises.
            </p>
          </div>
        </motion.div>
      </section>

      {/* NOUVELLE SECTION 1 — Schéma de parcours méthodologique */}
      <section className="bg-[#FbFbFb] py-24 mb-24">
        <div className="max-w-[1200px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-light-blue mb-4 block">MA DÉMARCHE</span>
            <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-6 tracking-tight">Parcours de l'analyse</h2>
            <p className="text-lg text-text-gray font-medium max-w-2xl mx-auto">
              Six étapes structurent ma démarche, de la définition de la problématique à l'interprétation finale des résultats.
            </p>
          </motion.div>

          <div className="relative">
            {/* Desktop Connectors (Simplified as background line) */}
            <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-slate-100 -z-0" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {[
                { step: "01", icon: HelpCircle, title: "Pose de la problématique", desc: "Définition de la question centrale et du périmètre d'analyse." },
                { step: "02", icon: Target, title: "Définition des objectifs", desc: "Identification des angles d'analyse — salariés et entreprises." },
                { step: "03", icon: Database, title: "Recherche Kaggle", desc: "Sélection de 3 dossiers de données open source sur Kaggle, plateforme de référence." },
                { step: "04", icon: Terminal, title: "Analyse via Google Colab", desc: "Traitement des bases de données par code Python pour générer les graphiques." },
                { step: "05", icon: Download, title: "Téléchargement des graphiques", desc: "Extraction des visualisations exploitables pour le dashboard." },
                { step: "06", icon: Sparkles, title: "Interprétation par IA", desc: "Analyse et structuration des résultats avec l'IA Claude pour formuler les conclusions." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-full bg-light-blue/10 text-light-blue flex items-center justify-center mb-6 font-mono font-semibold text-sm">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center mb-6 text-deep-blue group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-black text-deep-blue mb-3">{item.title}</h3>
                  <p className="text-sm text-text-gray font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOUVELLE SECTION 2 — Frise méthodologique compacte */}
      <section className="bg-deep-blue py-24 mb-24 text-white">
        <div className="max-w-[1200px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-light-blue mb-4 block">MÉTHODOLOGIE TECHNIQUE</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight text-white">Une démarche complète en 5 étapes</h2>
            <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
              De la collecte à l'évaluation, ma méthodologie couvre l'ensemble du cycle data, de l'analyse descriptive à la modélisation prédictive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {[
              { icon: Database, title: "Collecte", desc: "3 sources Kaggle, anonymisées et conformes RGPD.", code: "C17.1" },
              { icon: Filter, title: "Nettoyage", desc: "Détection d'anomalies, recodage, validation qualité.", code: "C17.2" },
              { icon: Terminal, title: "Requêtes", desc: "SQL pour bases relationnelles, NoSQL pour données.", code: "C17.3" },
              { icon: Cpu, title: "Modélisation", desc: "Random Forest pour la classification, K-Means.", code: "C18.1 · C19.1" },
              { icon: Activity, title: "Évaluation", desc: "KPIs Accuracy, F1-Score, AUC-ROC ; suivi.", code: "C19.2 · C19.3" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col items-center text-center h-full group hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-light-blue/20 text-light-blue flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-black text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <span className="font-mono text-[10px] text-slate-500 font-semibold uppercase tracking-widest">{item.code}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/methodologie"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-deep-blue font-semibold rounded-full hover:bg-slate-100 transition-all shadow-xl group"
            >
              Voir le détail méthodologique
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION BONUS — Synthèse de la démarche */}
      <section className="max-w-[1000px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-light-blue/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-3xl font-black text-deep-blue mb-10 text-center">La démarche en un coup d'œil</h2>
          
          <div className="bg-slate-50 rounded-3xl overflow-hidden mb-10 border border-slate-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-100/50">
                  <th className="px-8 py-6 font-semibold text-deep-blue uppercase text-xs tracking-widest">Étape</th>
                  <th className="px-8 py-6 font-semibold text-deep-blue uppercase text-xs tracking-widest text-center">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  { e: "Stratégie de collecte", s: "✅ Réalisée" },
                  { e: "Nettoyage et préparation", s: "✅ Réalisée" },
                  { e: "Extraction & analyse descriptive", s: "✅ Réalisée" },
                  { e: "Visualisation interactive", s: "✅ Réalisée" },
                  { e: "Modélisation prédictive", s: "🔄 Plan d'industrialisation défini" },
                  { e: "Suivi & évaluation continue", s: "🔄 KPIs identifiés et planifiés" }
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="px-8 py-5 font-medium text-deep-blue">{row.e}</td>
                    <td className="px-8 py-5 font-semibold text-center text-sm">
                      <span className={row.s.includes('✅') ? 'text-green-600' : 'text-amber-500'}>
                        {row.s}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex gap-6 items-start">
            <ClipboardCheck className="w-8 h-8 text-light-blue shrink-0 mt-1" />
            <p className="text-text-gray font-medium leading-relaxed italic">
              "Cette feuille de route illustre une démarche complète : du recueil de la donnée à son exploitation par l'IA, en passant par la rigueur méthodologique nécessaire à chaque étape."
            </p>
          </div>
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
                href="file:///C:/Users/bella/Downloads/dashboard_3_dossiers_fr%20(8).html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-12 py-5 text-lg font-semibold rounded-xl bg-white text-deep-blue hover:bg-slate-100 transition-all shadow-xl active:scale-95 group"
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
            Cette analyse confronte la perception du télétravail par les salariés à sa place réelle dans les pratiques de recrutement. Une démarche factuelle sur un sujet souvent traité de manière subjective.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Data;
