import { motion } from 'motion/react';
import { Target, TrendingUp, CheckCircle2, ChevronRight } from 'lucide-react';

const CasPratique = () => {
  const cases = [
    {
      title: "Optimisation de la stratégie LinkedIn",
      objective: "Augmenter l'engagement et la visibilité de la marque.",
      results: "+1000 abonnés en un an, engagement multiplié par 3.",
      steps: ["Audit de l'existant", "Définition d'une ligne éditoriale", "Création de visuels impactants", "Analyse hebdomadaire des KPIs"]
    },
    {
      title: "Refonte de site web B2B",
      objective: "Améliorer l'expérience utilisateur et le taux de conversion.",
      results: "Temps de session augmenté de 40%, baisse du taux de rebond.",
      steps: ["Analyse du parcours client", "Maquettage UX/UI", "Optimisation SEO on-page", "Tests utilisateurs"]
    },
    {
      title: "Organisation d'un événement professionnel",
      objective: "Générer des leads qualifiés et renforcer les partenariats.",
      results: "50+ leads qualifiés, 10 nouveaux partenariats signés.",
      steps: ["Ciblage des participants", "Gestion de la logistique", "Communication multicanale", "Suivi post-événement"]
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-bg-light">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="huge-title text-deep-blue">Cas Pratiques</h1>
          <p className="sub-title">
            Analyse détaillée de problématiques réelles et des solutions stratégiques mises en œuvre pour atteindre des résultats concrets.
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="space-y-20">
            {cases.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group"
              >
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <h3 className="text-3xl md:text-4xl font-black text-deep-blue leading-tight group-hover:text-light-blue transition-colors duration-500">{c.title}</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-6">
                        <div className="p-3 bg-bg-light text-light-blue rounded-xl shadow-sm border border-slate-100">
                          <Target className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-gray mb-1">Objectif Stratégique</h4>
                          <p className="text-xl font-black text-deep-blue leading-snug">{c.objective}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-6">
                        <div className="p-3 bg-bg-light text-green-600 rounded-xl shadow-sm border border-slate-100">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-gray mb-1">Impact Mesurable</h4>
                          <p className="text-xl font-black text-deep-blue leading-snug">{c.results}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-deep-blue p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-light-blue/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <h4 className="text-[10px] font-black text-white mb-8 uppercase tracking-[0.2em] flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-light-blue" />
                      Méthodologie & Étapes
                    </h4>
                    <ul className="space-y-6">
                      {c.steps.map((step, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-white/80 text-base font-bold group/item">
                          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-black text-white group-hover/item:bg-light-blue transition-colors duration-300">
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasPratique;
