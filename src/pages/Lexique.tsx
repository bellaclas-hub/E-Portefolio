import { motion } from 'motion/react';
import { Book, Search } from 'lucide-react';
import { useState } from 'react';

const Lexique = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const terms = [
    { term: "SEO (Search Engine Optimization)", definition: "L'art de positionner un site web dans les premiers résultats des moteurs de recherche." },
    { term: "CTA (Call to Action)", definition: "Un bouton ou un lien incitant l'utilisateur à effectuer une action spécifique." },
    { term: "KPI (Key Performance Indicator)", definition: "Indicateur clé permettant de mesurer l'efficacité d'une campagne." },
    { term: "Storytelling", definition: "Méthode de communication consistant à raconter une histoire pour promouvoir une marque." },
    { term: "Inbound Marketing", definition: "Stratégie visant à faire venir le client à soi plutôt que d'aller le chercher." },
    { term: "ROI (Return on Investment)", definition: "Le ratio entre le profit réalisé et le coût de l'investissement." },
  ];

  const filteredTerms = terms.filter(t => 
    t.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-pure-black mb-8 tracking-tight">Lexique</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Un guide des termes essentiels du marketing digital pour mieux comprendre mes domaines d'expertise.
          </p>
        </motion.div>
      </section>

      <section className="section-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Rechercher un terme..."
              className="w-full pl-12 pr-6 py-4 rounded-lg bg-white border border-slate-100 shadow-sm focus:ring-4 focus:ring-primary-blue/10 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTerms.map((item, i) => (
              <motion.div
                key={item.term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary-blue flex items-center justify-center mb-6">
                  <Book className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-pure-black mb-4">{item.term}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.definition}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lexique;
