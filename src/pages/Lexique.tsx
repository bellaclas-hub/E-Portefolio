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
    <div className="pt-48 pb-24">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="huge-title">Lexique</h1>
          <p className="sub-title">
            Un guide des termes essentiels du marketing digital pour mieux comprendre mes domaines d'expertise et les enjeux du web moderne.
          </p>
        </motion.div>
      </section>

      <section className="bg-pure-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-24 relative max-w-2xl">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-300 w-6 h-6" />
            <input 
              type="text" 
              placeholder="Rechercher un terme..."
              className="w-full pl-20 pr-10 py-8 rounded-[2rem] bg-slate-50 border-none shadow-sm focus:ring-8 focus:ring-primary-blue/5 outline-none transition-all font-bold text-xl text-deep-black placeholder:text-slate-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {filteredTerms.map((item, i) => (
              <motion.div
                key={item.term}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className="p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-primary-blue flex items-center justify-center mb-10 group-hover:bg-deep-black group-hover:text-white transition-all duration-500">
                  <Book className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-deep-black mb-6 leading-tight group-hover:text-primary-blue transition-colors duration-300">{item.term}</h3>
                <p className="text-text-gray text-lg leading-relaxed font-medium">{item.definition}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lexique;
