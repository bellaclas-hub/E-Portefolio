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
            Méthodologie complète
          </h1>
          <p className="text-lg md:text-xl text-text-gray font-medium leading-relaxed max-w-3xl">
            Le détail de la démarche analytique appliquée à l'étude du télétravail : sources, traitements, modélisation et indicateurs.
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
            <p>La fiabilité d'une analyse repose d'abord sur la qualité de sa collecte. Pour cette étude, j'ai croisé trois sources complémentaires afin d'aborder le télétravail sous deux angles : la perception des salariés et la réalité du marché de l'emploi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                title: "Source interne — études salariés", 
                items: [
                  { label: "Type", val: "Données déclaratives" },
                  { label: "Volume", val: "200 répondants" },
                  { label: "Méthode", val: "Questionnaire" },
                  { label: "Variables", val: "Mode, productivité, satisfaction, stress" }
                ]
              },
              { 
                title: "Source externe — productivité perçue", 
                items: [
                  { label: "Type", val: "Auto-évaluation" },
                  { label: "Volume", val: "Échantillon dédié" },
                  { label: "Méthode", val: "Enquête en ligne" },
                  { label: "Variables", val: "% productivité par mode" }
                ]
              },
              { 
                title: "Source externe — marché de l'emploi", 
                items: [
                  { label: "Type", val: "Annonces en ligne" },
                  { label: "Volume", val: "1 039 offres" },
                  { label: "Méthode", val: "Agrégation d'offres" },
                  { label: "Variables", val: "Mode proposé, catégorie de poste" }
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
                  <h4 className="text-deep-blue font-black tracking-tight text-lg">Conformité RGPD</h4>
                </div>
                <p className="text-text-gray text-sm font-medium leading-relaxed">
                  Données anonymisées et agrégées. Sources déclaratives ou publiques conformes aux principes de minimisation et finalité. Industrialisation prévue via un registre de traitement dédié.
                </p>
              </div>
              <div className="p-10">
                <div className="flex gap-4 mb-4">
                  <Layers className="w-6 h-6 text-light-blue shrink-0" />
                  <h4 className="text-deep-blue font-black tracking-tight text-lg">Cartographie des flux</h4>
                </div>
                <ul className="space-y-2 text-text-gray text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-light-blue" />
                    <span>Sources : Études RH & Plateformes emploi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-light-blue" />
                    <span>Outils : Tableurs, scrapers & agrégateurs</span>
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

      {/* 4. Extraction & requêtes */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-2 tracking-tight text-center">Extraction & requêtes — la donnée à la demande</h2>
          <p className="text-light-blue font-medium text-center mb-10 text-lg">Manipuler des données structurées avec des langages de requête adaptés.</p>
          
          <div className="max-w-3xl mx-auto mb-12 text-center text-text-gray font-medium leading-relaxed text-lg">
            <p>Le traitement avancé d'un dataset suppose la maîtrise de langages d'interrogation. Pour ce projet, les opérations clés sont : le filtrage par mode de travail, le calcul de moyennes par segment, la jointure entre datasets et l'agrégation par catégorie de poste.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl">
              <Code2 className="w-10 h-10 text-light-blue mb-6" />
              <h3 className="text-xl font-black text-deep-blue mb-4">Bases relationnelles (SQL)</h3>
              <p className="text-text-gray font-medium mb-6">"Adaptées aux données structurées avec relations claires (ex. : enquête salariés ↔ table modes de travail)."</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-widest text-deep-blue/40">
                <span>SELECT</span> <span>JOIN</span> <span>GROUP BY</span> <span>AVG()</span>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl text-deep-blue">
              <Layers className="w-10 h-10 text-light-blue mb-6" />
              <h3 className="text-xl font-black text-deep-blue mb-4">Bases non relationnelles (NoSQL)</h3>
              <p className="text-text-gray font-medium mb-6">"Pertinentes pour les données semi-structurées issues d'API ou de scraping (ex. : offres d'emploi en JSON)."</p>
              <p className="text-sm font-semibold text-light-blue uppercase tracking-widest">Avantages : flexibilité du schéma, scalabilité horizontale.</p>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-500 font-semibold text-sm tracking-wider uppercase">Exemple appliqué à mon étude</span>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
              </div>
            </div>
            <pre className="font-mono text-sm md:text-base leading-relaxed text-slate-300 overflow-x-auto">
              <code>
{`-- Productivité moyenne par mode de travail
SELECT mode_travail, AVG(score_productivite) AS moyenne, 
       COUNT(*) AS effectif
FROM enquete_salaries
GROUP BY mode_travail
ORDER BY moyenne DESC;`}
              </code>
            </pre>
            <div className="mt-8 pt-8 border-t border-slate-800 text-slate-500 text-sm font-medium italic">
              "Cette requête produit le résultat affiché dans le graphique « Productivité moyenne par mode » du dashboard."
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. Modélisation envisagée */}
      <section className="bg-deep-blue py-24 mb-24 text-white">
        <div className="max-w-[1200px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-2 tracking-tight text-center text-white">Modélisation — passer du descriptif au prédictif</h2>
            <p className="text-light-blue font-medium text-center mb-10 text-lg">La phase suivante : exploiter l'IA pour anticiper plutôt que constater.</p>
            
            <div className="max-w-3xl mx-auto mb-16 text-center text-slate-300 font-medium leading-relaxed">
              <p>Mon analyse actuelle est descriptive : elle décrit l'état du télétravail aujourd'hui. La suite logique est prédictive : pouvoir anticiper, à partir d'un profil de poste ou d'un profil salarié, le mode de travail le plus susceptible d'être proposé ou choisi. Voici la démarche que j'industrialiserais.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem]">
                <h3 className="text-2xl font-black mb-6 text-light-blue">Classification supervisée</h3>
                <ul className="space-y-4 text-slate-300 font-medium">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-light-blue mt-2" />
                    <span>Algorithme envisagé : Random Forest ou Régression logistique</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-light-blue mt-2" />
                    <span>Variable cible : Mode de travail proposé (Télétravail / Hybride / Présentiel)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-light-blue mt-2" />
                    <span>Variables explicatives : Catégorie de poste, secteur, niveau d'expérience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5" />
                    <span className="text-white font-medium italic">Cas d'usage : Anticiper le mode pour une nouvelle offre</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem]">
                <h3 className="text-2xl font-black mb-6 text-light-blue">Clustering non supervisé</h3>
                <ul className="space-y-4 text-slate-300 font-medium">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-light-blue mt-2" />
                    <span>Algorithme envisagé : K-Means</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-light-blue mt-2" />
                    <span>Objectif : Segmenter les profils salariés selon productivité, satisfaction et stress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-light-blue mt-2" />
                    <span>Output attendu : 3 à 4 clusters distincts avec recommandations adaptées</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5" />
                    <span className="text-white font-medium italic">Cas d'usage : Personnaliser les politiques RH par segment</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-black mb-8 text-center text-white">Évaluation comparative des modèles</h3>
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white/10">
                      <th className="px-6 py-4 font-semibold text-light-blue uppercase text-xs tracking-widest">Modèle</th>
                      <th className="px-6 py-4 font-semibold text-light-blue uppercase text-xs tracking-widest">Lisibilité</th>
                      <th className="px-6 py-4 font-semibold text-light-blue uppercase text-xs tracking-widest">Performance attendue</th>
                      <th className="px-6 py-4 font-semibold text-light-blue uppercase text-xs tracking-widest">Coût computationnel</th>
                      <th className="px-6 py-4 font-semibold text-light-blue uppercase text-xs tracking-widest">Choix retenu</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {[
                      { m: "Régression logistique", l: "Élevée", p: "Moyenne", c: "Faible", ch: "Pour démarrer" },
                      { m: "Random Forest", l: "Moyenne", p: "Élevée", c: "Moyen", ch: "Pour industrialiser" },
                      { m: "XGBoost", l: "Faible", p: "Très élevée", c: "Élevé", ch: "Si volumétrie ↑" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-medium text-sm">{row.m}</td>
                        <td className="px-6 py-4 text-slate-300 text-sm">{row.l}</td>
                        <td className="px-6 py-4 text-slate-300 text-sm">{row.p}</td>
                        <td className="px-6 py-4 text-slate-300 text-sm">{row.c}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-light-blue">{row.ch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-center text-slate-400 text-sm font-medium italic">
              "Le choix dépend des contraintes opérationnelles (puissance de calcul, lisibilité pour les RH, taille du dataset). En première itération, je privilégierais la régression logistique pour sa transparence."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. Indicateurs de performance modèle */}
      <section className="max-w-[1200px] mx-auto px-10 mb-24 text-deep-blue">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-2 tracking-tight text-center">Indicateurs de suivi & d'évaluation continue</h2>
          <p className="text-light-blue font-medium text-center mb-10 text-lg">Au-delà des KPIs métier : mesurer la fiabilité du modèle dans le temps.</p>
          
          <div className="max-w-3xl mx-auto mb-16 text-center text-text-gray font-medium leading-relaxed text-lg">
            <p>Un modèle d'IA n'est pertinent que s'il est mesuré, suivi et ajusté. Là où les KPIs métier (taux de conversion, engagement) mesurent un résultat business, les KPIs modèle mesurers la qualité de la prédiction. Voici les indicateurs que j'intégrerais à un tableau de bord de monitoring.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { t: "Accuracy", d: "Part de prédictions correctes sur le total. KPI global mais à compléter par d'autres." },
              { t: "Precision", d: "Parmi les prédictions positives, combien le sont vraiment. Critique pour limiter les faux positifs." },
              { t: "Recall (Sensibilité)", d: "Parmi les cas positifs réels, combien le modèle en a détectés. Critique pour ne rien manquer." },
              { t: "F1-Score", d: "Moyenne harmonique entre Precision et Recall. Indicateur synthétique de référence." }
            ].map((kpi, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl">
                <h3 className="text-xl font-black text-deep-blue mb-4 tracking-tight">{kpi.t}</h3>
                <p className="text-text-gray text-sm font-medium leading-relaxed">{kpi.d}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-light-blue text-white p-8 rounded-3xl shadow-lg border-2 border-white/20">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-3">AUC-ROC</h4>
                  <p className="font-medium text-white/80 leading-relaxed text-sm">Mesure la capacité du modèle à distinguer les classes (objectif : &gt; 0,80).</p>
                </div>
              </div>
            </div>
            <div className="bg-deep-blue text-white p-8 rounded-3xl shadow-lg border-2 border-white/20">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <Layout className="w-6 h-6 text-light-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-3 text-white">Matrice de confusion</h4>
                  <p className="font-medium text-slate-100 leading-relaxed text-sm">Ventilation des vrais/faux positifs et négatifs pour identifier les outils.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-black text-deep-blue mb-8 text-center">Système de suivi</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg text-center flex flex-col items-center h-full">
              <div className="w-12 h-12 rounded-2xl bg-light-blue/10 text-light-blue flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-deep-blue mb-3">Monitoring continu</h4>
              <p className="text-text-gray text-sm font-medium leading-relaxed">Suivi automatisé des KPIs via un dashboard de supervision.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg text-center flex flex-col items-center h-full">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-deep-blue mb-3">Détection de drift</h4>
              <p className="text-text-gray text-sm font-medium leading-relaxed">Alerte automatique en cas de dérive du modèle, déclenchant un ré-entraînement.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg text-center flex flex-col items-center h-full">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-deep-blue mb-3">Tests de sécurité</h4>
              <p className="text-text-gray text-sm font-medium leading-relaxed">Vérification régulière de la robustesse face aux données aberrantes.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. Pipeline & industrialisation */}
      <section className="bg-white py-24 mb-24">
        <div className="max-w-[1200px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-2 tracking-tight text-center">Pipeline & industrialisation</h2>
            <p className="text-light-blue font-medium text-center mb-16 text-lg">De la donnée brute à la décision : un processus reproductible et automatisé.</p>
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-20 overflow-x-auto pb-8">
              {[
                { step: "1", title: "Sources", desc: "Études salariés + offres emploi" },
                { step: "2", title: "Nettoyage", desc: "Détection anomalies, recodage, validation" },
                { step: "3", title: "Stockage", desc: "Base SQL/NoSQL centralisée" },
                { step: "4", title: "Modèle IA", desc: "Algorithme de prédiction + monitoring" },
                { step: "5", title: "Visualisation", desc: "Dashboard interactif (utilisateur final)" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col lg:flex-row items-center gap-6 group">
                  <div className="w-48 text-center">
                    <div className="w-16 h-16 rounded-3xl bg-white border-2 border-slate-100 shadow-xl flex items-center justify-center mx-auto mb-4 text-light-blue font-semibold text-xl group-hover:scale-110 transition-all duration-500">
                      {item.step}
                    </div>
                    <h4 className="font-black text-deep-blue text-sm mb-1">{item.title}</h4>
                    <p className="text-text-gray text-[10px] font-medium leading-tight">{item.desc}</p>
                  </div>
                  {i < 4 && (
                    <ArrowRight className="w-6 h-6 text-slate-300 hidden lg:block group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
                <h4 className="text-xl font-black text-deep-blue mb-4">Interface utilisateur</h4>
                <p className="text-text-gray text-sm font-medium leading-relaxed">
                  Tableau de bord interactif conçu selon des principes d'accessibilité universelle : navigation fluide, contrastes optimisés et langage clair.
                </p>
              </div>
              <div className="bg-deep-blue p-8 rounded-[2rem] text-white">
                <h4 className="text-xl font-black text-white mb-4">Automatisation</h4>
                <p className="text-slate-300 text-sm font-medium leading-relaxed">
                  Tâches récurrentes automatisées : actualisation hebdomadaire des données, calcul des moyennes et reporting synthétique RH.
                </p>
              </div>
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
