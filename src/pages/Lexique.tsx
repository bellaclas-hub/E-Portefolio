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
          definition: "Une IA entraînée sur d'énormes quantités de textes, capable de comprendre une question et d'y répondre en langage naturel.",
          stake: "Générer ou résumer du contenu très vite.",
          icon: <Globe className="w-5 h-5" />
        },
        {
          name: "RAG (Retrieval-Augmented Generation)",
          definition: "Une technique qui permet à l'IA d'aller chercher l'info dans des sources fiables avant de répondre, au lieu de répondre « de mémoire ».",
          stake: "Des réponses plus justes et à jour, avec moins d'erreurs inventées.",
          icon: <Database className="w-5 h-5" />
        },
        {
          name: "Prompt Engineering",
          definition: "L'art de bien formuler sa demande à une IA pour obtenir une réponse précise et utile.",
          stake: "Gagner du temps et garder le contrôle sur le résultat.",
          icon: <Zap className="w-5 h-5" />
        },
        {
          name: "Machine Learning",
          definition: "Des programmes qui apprennent à partir de données pour repérer des tendances et faire des prédictions, sans être programmés règle par règle.",
          stake: "Anticiper le comportement des clients.",
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
          definition: "Une passerelle qui permet à deux logiciels de se parler et d'échanger des données automatiquement.",
          stake: "Connecter ses outils et automatiser des tâches.",
          icon: <Database className="w-5 h-5" />
        },
        {
          name: "SaaS (Software as a Service)",
          definition: "Un logiciel qu'on utilise en ligne, par abonnement, sans rien installer (ex. Canva, Notion).",
          stake: "Accessible partout, peu de coûts d'installation.",
          icon: <Layers className="w-5 h-5" />
        },
        {
          name: "Citizen Development",
          definition: "Quand une personne non-développeuse crée elle-même ses outils grâce au NoCode.",
          stake: "Soulager l'informatique et aller plus vite.",
          icon: <Users className="w-5 h-5" />
        },
        {
          name: "Data Lake vs Warehouse",
          definition: "Le Data Lake stocke des données brutes, en vrac ; le Warehouse des données déjà triées et organisées.",
          stake: "Bien choisir pour avoir des analyses fiables.",
          icon: <Database className="w-5 h-5" />
        },
        {
          name: "Pipeline data",
          definition: "Un pipeline data est un ensemble d’étapes qui permet de collecter, organiser et transformer des données pour les rendre exploitables.",
          stake: "Automatiser le flux pour des données propres, prêtes à analyser.",
          icon: <Filter className="w-5 h-5" />
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
          definition: "Un indicateur chiffré qui mesure si on atteint un objectif (ventes, taux de clic…).",
          stake: "Savoir, chiffres en main, ce qui marche.",
          icon: <BarChart3 className="w-5 h-5" />
        },
        {
          name: "Attribution Marketing",
          definition: "Identifier quelles actions (pub, email, réseau social…) ont vraiment mené un client à acheter.",
          stake: "Savoir où mettre son budget.",
          icon: <Target className="w-5 h-5" />
        },
        {
          name: "Churn Rate",
          definition: "Le taux de clients qu'on perd sur une période donnée.",
          stake: "Un bon signal de la satisfaction client.",
          icon: <Users className="w-5 h-5" />
        },
        {
          name: "A/B Testing",
          definition: "Tester deux versions d'un même élément pour voir laquelle marche le mieux.",
          stake: "S'améliorer sur des faits, pas des intuitions.",
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
          definition: "Cartographier toutes les étapes et les ressentis d'un utilisateur, de la découverte à l'achat.",
          stake: "Repérer les points de friction et améliorer l'expérience.",
          icon: <Users className="w-5 h-5" />
        },
        {
          name: "Atomic Design",
          definition: "Construire une interface à partir de petits éléments réutilisables (boutons, champs…) qu'on assemble.",
          stake: "Un design cohérent partout et un développement plus rapide.",
          icon: <Cpu className="w-5 h-5" />
        },
        {
          name: "User Persona",
          definition: "Un portrait-type d'un utilisateur cible, inspiré de vraies données.",
          stake: "Garder l'équipe concentrée sur les vrais besoins.",
          icon: <Users className="w-5 h-5" />
        },
        {
          name: "Accessibilité Numérique",
          definition: "Concevoir des sites utilisables par tous, y compris les personnes en situation de handicap.",
          stake: "Un enjeu citoyen, et une audience plus large.",
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
    <div className="pt-48 md:pt-60 pb-20 bg-bg-light min-h-screen">
      <section className="max-w-[1200px] mx-auto px-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-black text-deep-blue mb-6 tracking-tighter leading-[1.1]">Lexique Expert</h1>
          <p className="text-lg md:text-xl text-text-gray leading-relaxed font-medium max-w-2xl">
            Un portail pédagogique pour maîtriser les concepts stratégiques du digital, du NoCode et de l'IA.
          </p>
        </motion.div>
      </section>

      {/* Search and Filter Bar */}
      <section className="max-w-[1200px] mx-auto px-10 mb-12">
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text"
              placeholder="Rechercher un concept..."
              className="w-full pl-12 pr-5 py-3 rounded-xl bg-bg-light border-none focus:ring-4 focus:ring-light-blue/5 outline-none transition-all font-medium text-deep-blue text-sm"
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
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
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

      <div className="max-w-[1200px] mx-auto px-10 space-y-20">
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
                          <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-400 block mb-1">Définition</span>
                          <p className="text-text-gray font-medium leading-relaxed text-xs">
                            {term.definition}
                          </p>
                        </div>
                        
                        <div className="pt-4 border-t border-slate-50">
                          <span className="text-[9px] font-semibold uppercase tracking-widest text-light-blue block mb-1">Enjeu Stratégique</span>
                          <p className="text-deep-blue font-medium text-[10px] leading-relaxed">
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
      <section className="mt-20 max-w-[1200px] mx-auto px-10 pb-20">
        <div className="bg-deep-blue rounded-[2.5rem] p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-light-blue/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
              L'expertise au service <br /> de votre croissance.
            </h2>
            <Link 
              to="/contact" 
              className="btn-primary"
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
