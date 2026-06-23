import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, Database, Target, ArrowLeft, ArrowRight, 
  ShieldCheck, AlertTriangle, Code2, Layers, 
  Settings, ClipboardCheck, Layout 
} from 'lucide-react';

const Methodologie = () => {
  return (
    <div className="pt-48 md:pt-60 pb-20 min-h-screen bg-bg-light">
      {/* HERO / TITRE DE LA PAGE */}
      <section className="max-w-[1200px] mx-auto px-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-light-blue mb-4 block">DÉTAIL MÉTHODOLOGIQUE</span>
          <h1 className="text-4xl md:text-6xl font-black text-deep-blue mb-8 tracking-tighter leading-[1.1]">
            Démarche méthodologique
          </h1>
          <p className="text-lg md:text-xl text-text-gray font-medium leading-relaxed max-w-3xl">
            Le détail de la démarche analytique appliquée à l'étude du télétravail : sources, traitements et visualisation des résultats.
          </p>
        </motion.div>
      </section>

      {/* 2. Stratégie de collecte des données */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-2 tracking-tight text-center">Stratégie de collecte des données</h2>
          <p className="text-light-blue font-medium text-center mb-10 text-lg">Cartographier les sources, sécuriser la conformité, garantir la pertinence.</p>
          
          <div className="max-w-3xl mx-auto mb-12 text-center text-text-gray font-medium leading-relaxed">
            <p>La fiabilité d'une analyse repose d'abord sur la qualité de sa collecte. Pour cette étude, j'ai croisé trois jeux de données open source (Kaggle), afin d'aborder le télétravail sous deux angles : la perception des salariés et la réalité du marché de l'emploi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                title: "Salariés — productivité", 
                items: [
                  { label: "Type", val: "Enquête salariés" },
                  { label: "Source", val: "Jeu de données Kaggle (open data)" },
                  { label: "Volume", val: "≈ 1 000 répondants" },
                  { label: "Variables", val: "Mode, productivité, heures, bien-être" }
                ]
              },
              { 
                title: "Salariés — bien-être", 
                items: [
                  { label: "Type", val: "Enquête salariés" },
                  { label: "Source", val: "Jeu de données Kaggle (open data)" },
                  { label: "Volume", val: "≈ 100 répondants" },
                  { label: "Variables", val: "Mode, burnout, équilibre vie pro/perso" }
                ]
              },
              { 
                title: "Offres d'emploi (marché)", 
                items: [
                  { label: "Type", val: "Offres d'emploi en ligne" },
                  { label: "Source", val: "Jeu de données Kaggle (open data)" },
                  { label: "Volume", val: "1 039 offres" },
                  { label: "Variables", val: "Mode de travail, catégorie de poste" }
                ]
              }
            ].map((source, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg font-sans">
                <h3 className="text-deep-blue font-black mb-6 text-lg tracking-tight">{source.title}</h3>
                <div className="space-y-4">
                  {source.items.map((item, j) => (
                    <div key={j}>
                      <span className="text-xs font-semibold uppercase text-light-blue/60 tracking-wider block mb-1">{item.label}</span>
                      <p className="text-deep-blue font-medium text-sm">{item.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 border-b md:border-b-0 md:border-r border-slate-200">
                <div className="flex gap-4 mb-4">
                  <ShieldCheck className="w-6 h-6 text-green-600 shrink-0" />
                  <h4 className="text-deep-blue font-black tracking-tight text-lg">Données ouvertes</h4>
                </div>
                <p className="text-text-gray text-sm font-medium leading-relaxed">
                  Les trois jeux de données proviennent de Kaggle : des données publiques et déjà anonymisées. Je n'ai collecté aucune donnée personnelle moi-même.
                </p>
              </div>
              <div className="p-10">
                <div className="flex gap-4 mb-4">
                  <Layers className="w-6 h-6 text-light-blue shrink-0" />
                  <h4 className="text-deep-blue font-black tracking-tight text-lg">Sources & outils</h4>
                </div>
                <ul className="space-y-2 text-text-gray text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-light-blue" />
                    <span>Sources : Kaggle (open data)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-light-blue" />
                    <span>Outils : Python (pandas) sur Google Colab</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Préparation & nettoyage des données */}
      <section className="bg-white py-24 mb-24">
        <div className="max-w-[1200px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-2 tracking-tight text-center">Préparation & nettoyage des données</h2>
            <p className="text-light-blue font-medium text-center mb-16 text-lg">De la donnée brute à un jeu exploitable et fiable.</p>
            
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-black text-deep-blue mb-8">Démarche en 4 étapes</h3>
                <div className="space-y-6">
                  {[
                    { title: "Détection des anomalies", desc: "repérage des libellés non normalisés (saisie incohérente, doublons sémantiques)" },
                    { title: "Recodage des valeurs", desc: "fusion des entrées « Sur cite » dans « Présentiel » (3 occurrences) et « Hybride » mal saisi (1 occurrence)" },
                    { title: "Validation qualité", desc: "vérification de la conservation des volumes après transformation (1 039 offres avant = 1 039 offres après)" },
                    { title: "Documentation des choix", desc: "chaque retraitement est tracé pour assurer la reproductibilité" }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-deep-blue text-white flex items-center justify-center shrink-0 font-semibold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-black text-deep-blue mb-1">{step.title}</h4>
                        <p className="text-text-gray text-sm font-medium leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-light-blue/5 p-8 rounded-[2rem] border border-light-blue/10">
                  <h4 className="text-light-blue font-semibold mb-4 flex items-center gap-3">
                    <Database className="w-5 h-5" />
                    Cas concret traité
                  </h4>
                  <p className="text-deep-blue/80 font-medium leading-relaxed">
                    "Sur le dataset de 1 039 offres d'emploi, 4 entrées présentaient des libellés mal saisis (« Sur cite », « Hybride »). Plutôt que de les masquer, j'ai choisi de les recoder dans leurs catégories propres après vérification du contexte, et de documenter ce traitement dans le tableau de bord. Cette transparence sur la qualité des données est, à mon sens, une exigence professionnelle."
                  </p>
                </div>

                <div className="bg-amber-50 p-8 rounded-[2rem] border border-amber-100 flex gap-6">
                  <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0" />
                  <div>
                    <h4 className="text-amber-900 font-black mb-2">Limite assumée</h4>
                    <p className="text-amber-900/70 text-sm font-medium leading-relaxed">
                      "Une donnée graphique manquait dans les sources d'origine : la période couverte par les enquêtes. J'ai préféré expliciter cette absence dans le tableau de bord plutôt que d'inférer une période. C'est un choix méthodologique de rigueur scientifique."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PERSPECTIVES */}
      <section className="bg-deep-blue py-24 mb-24 text-white">
        <div className="max-w-[1000px] mx-auto px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-light-blue mb-4 block">POUR ALLER PLUS LOIN</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight text-white">Perspectives</h2>
            <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              Cette étude repose sur une analyse descriptive. Pour la prolonger, plusieurs pistes seraient envisageables, sans avoir été mises en œuvre dans ce projet :
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { title: "Stockage structuré", desc: "Centraliser les données dans une base SQL ou NoSQL pour les interroger plus efficacement." },
                { title: "Modélisation prédictive", desc: "Tester des modèles comme Random Forest pour anticiper le mode de travail selon le profil de poste." },
                { title: "Suivi dans le temps", desc: "Automatiser l'actualisation des données et le suivi d'indicateurs de qualité." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                  <h3 className="text-lg font-black text-light-blue mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOUTON DE RETOUR */}
      <section className="max-w-[1200px] mx-auto px-10 text-center pb-20">
        <Link 
          to="/data" 
          className="inline-flex items-center gap-2 text-deep-blue font-semibold uppercase tracking-widest hover:text-light-blue transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour à l'analyse Data
        </Link>
      </section>
    </div>
  );
};

export default Methodologie;
