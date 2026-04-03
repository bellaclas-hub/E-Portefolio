import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Cpu, 
  Zap, 
  Database, 
  Layers, 
  Rocket, 
  BarChart3, 
  Search as SearchIcon, 
  Target, 
  Users, 
  Layout, 
  Smartphone,
  CheckCircle2,
  Lightbulb,
  Globe,
  Filter,
  X
} from 'lucide-react';
import { useState, useMemo } from 'react';

const Lexique = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');

  const categories = [
    {
      title: "Intelligence Artificielle",
      icon: <Bot className="w-6 h-6" />,
      description: "Modèles génératifs et architectures d'apprentissage profond.",
      terms: [
        {
          name: "LLM (Large Language Model)",
          definition: "Modèle de langage entraîné sur des volumes massifs de données pour comprendre et générer du texte de manière contextuelle.",
          stake: "Automatisation de la création de contenu et analyse sémantique à grande échelle.",
          icon: <Globe className="w-5 h-5" />
        },
        {
          name: "RAG (Retrieval-Augmented Generation)",
          definition: "Technique permettant à un LLM de consulter des sources de données externes fiables avant de générer une réponse.",
          stake: "Réduction drastique des hallucinations et mise à jour des connaissances du modèle en temps réel.",
          icon: <Database className="w-5 h-5" />
        },
        {
          name: "Prompt Engineering",
          definition: "Méthodologie de structuration des requêtes visant à maximiser la pertinence et la précision des sorties d'une IA générative.",
          stake: "Gain de productivité opérationnelle et contrôle fin de la tonalité des réponses.",
          icon: <Zap className="w-5 h-5" />
        },
        {
          name: "Machine Learning",
          definition: "Discipline de l'IA permettant aux algorithmes d'identifier des patterns complexes pour effectuer des prédictions.",
          stake: "Anticipation des comportements clients et personnalisation prédictive de l'offre.",
          icon: <Cpu className="w-5 h-5" />
        }
      ]
    },
    {
      title: "NoCode & Écosystème Tech",
      icon: <Layers className="w-6 h-6" />,
      description: "Agilité technique et intégration de systèmes complexes.",
      terms: [
        {
          name: "API (Application Programming Interface)",
          definition: "Protocole de communication permettant à des systèmes hétérogènes d'échanger des données de manière standardisée.",
          stake: "Interconnectivité des outils métiers et création de workflows automatisés sans silos.",
          icon: <Database className="w-5 h-5" />
        },
        {
          name: "SaaS (Software as a Service)",
          definition: "Modèle de distribution logicielle basé sur le cloud, offrant une accessibilité universelle via un abonnement.",
          stake: "Scalabilité immédiate, réduction des coûts de maintenance et agilité de déploiement.",
          icon: <Layers className="w-5 h-5" />
        },
        {
          name: "Citizen Development",
          definition: "Mouvement permettant aux collaborateurs métiers de concevoir des solutions applicatives sans expertise en programmation.",
          stake: "Désengorgement des services IT et accélération de l'innovation terrain.",
          icon: <Users className="w-5 h-5" />
        },
        {
          name: "Data Lake vs Warehouse",
          definition: "Le Data Lake stocke des données brutes (non structurées) tandis que le Warehouse stocke des données traitées et structurées.",
          stake: "Optimisation du stockage Big Data et fiabilité des rapports décisionnels (BI).",
          icon: <Database className="w-5 h-5" />
        }
      ]
    },
    {
      title: "Marketing & Performance",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Pilotage par la donnée et stratégies d'acquisition.",
      terms: [
        {
          name: "KPI (Key Performance Indicator)",
          definition: "Métriques critiques sélectionnées pour évaluer le succès d'une initiative par rapport à des objectifs stratégiques.",
          stake: "Mesure objective du ROI et pilotage agile des campagnes marketing.",
          icon: <BarChart3 className="w-5 h-5" />
        },
        {
          name: "Attribution Marketing",
          definition: "Modèle analytique permettant d'identifier les points de contact ayant contribué à une conversion finale.",
          stake: "Optimisation fine du mix-média et compréhension du parcours d'achat.",
          icon: <Target className="w-5 h-5" />
        },
        {
          name: "Churn Rate",
          definition: "Taux d'attrition mesurant la proportion de clients perdus sur une période donnée.",
          stake: "Indicateur vital de la satisfaction client et de la pérennité du modèle économique.",
          icon: <Users className="w-5 h-5" />
        },
        {
          name: "A/B Testing",
          definition: "Méthode expérimentale consistant à comparer deux versions d'un élément pour identifier la plus performante.",
          stake: "Optimisation continue du taux de conversion basée sur des preuves empiriques.",
          icon: <Zap className="w-5 h-5" />
        }
      ]
    },
    {
      title: "Expérience Utilisateur (UX/UI)",
      icon: <Layout className="w-6 h-6" />,
      description: "Conception centrée utilisateur et méthodologies de design.",
      terms: [
        {
          name: "Customer Journey Mapping",
          definition: "Analyse exhaustive des interactions et des émotions d'un utilisateur tout au long de son parcours.",
          stake: "Amélioration de la rétention client et création d'un avantage concurrentiel par l'expérience.",
          icon: <Users className="w-5 h-5" />
        },
        {
          name: "Atomic Design",
          definition: "Méthodologie de conception consistant à diviser les interfaces en composants élémentaires réutilisables.",
          stake: "Cohérence visuelle absolue et gain d'efficacité majeur lors du développement.",
          icon: <Cpu className="w-5 h-5" />
        },
        {
          name: "User Persona",
          definition: "Profil fictif représentant un segment d'audience cible, basé sur des données réelles et des comportements.",
          stake: "Alignement des équipes sur les besoins réels des utilisateurs finaux.",
          icon: <Users className="w-5 h-5" />
        },
        {
          name: "Accessibilité Numérique",
          definition: "Conception de services digitaux inclusifs pour les personnes en situation de handicap.",
          stake: "Responsabilité sociétale (RSE) et élargissement de l'audience adressable.",
          icon: <CheckCircle2 className="w-5 h-5" />
        }
      ]
    }
  ];

  const filteredCategories = useMemo(() => {
    return categories
      .map(cat => ({
        ...cat,
        terms: cat.terms.filter(term => 
          (activeCategory === 'Tous' || cat.title === activeCategory) &&
          (term.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           term.definition.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      }))
      .filter(cat => cat.terms.length > 0);
  }, [searchTerm, activeCategory]);

  const allCategoryNames = ['Tous', ...categories.map(c => c.title)];

  return (
    <div className="pt-32 pb-16 bg-bg-light min-h-screen">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="huge-title text-deep-blue">Lexique Expert</h1>
          <p className="sub-title">
            Un portail pédagogique pour maîtriser les concepts stratégiques du digital, du NoCode et de l'IA.
          </p>
        </motion.div>
      </section>

      {/* Search and Filter Bar */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-12">
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text"
              placeholder="Rechercher un concept..."
              className="w-full pl-12 pr-5 py-3 rounded-xl bg-bg-light border-none focus:ring-4 focus:ring-light-blue/5 outline-none transition-all font-bold text-deep-blue text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-200 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-slate-500" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {allCategoryNames.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-black transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-deep-blue text-white shadow-lg shadow-deep-blue/20 scale-105' 
                  : 'bg-bg-light text-slate-500 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 space-y-20">
        <AnimatePresence mode="wait">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, catIdx) => (
              <motion.section 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-light-blue border border-slate-100">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-black text-deep-blue tracking-tight">{category.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.terms.map((term, termIdx) => (
                    <motion.div 
                      key={term.name}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-8 rounded-xl bg-bg-light text-light-blue flex items-center justify-center group-hover:bg-light-blue group-hover:text-white transition-colors duration-500">
                          {term.icon}
                        </div>
                        <h3 className="text-lg font-black text-deep-blue group-hover:text-light-blue transition-colors duration-300">
                          {term.name}
                        </h3>
                      </div>
                      
                      <div className="space-y-4 flex-grow">
                        <div>
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1">Définition</span>
                          <p className="text-text-gray font-medium leading-relaxed text-xs">
                            {term.definition}
                          </p>
                        </div>
                        
                        <div className="pt-4 border-t border-slate-50">
                          <span className="text-[9px] font-black uppercase tracking-widest text-light-blue block mb-1">Enjeu Stratégique</span>
                          <p className="text-deep-blue font-bold text-[10px] leading-relaxed">
                            {term.stake}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-bg-light rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchIcon className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-2xl font-black text-deep-blue mb-2">Aucun résultat trouvé</h3>
              <p className="text-text-gray font-medium">Essayez d'ajuster vos filtres ou votre recherche.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer CTA */}
      <section className="mt-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="bg-deep-blue rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-light-blue/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
              L'expertise au service <br /> de votre croissance.
            </h2>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 bg-light-blue text-white rounded-full font-black text-base uppercase tracking-widest hover:bg-white hover:text-deep-blue transition-all duration-500 hover:scale-105"
            >
              Me contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Lexique;
