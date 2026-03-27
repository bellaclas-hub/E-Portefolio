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
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-pure-black mb-8 tracking-tight">Cas pratique</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Découvrez comment j'aborde des problématiques concrètes pour délivrer des résultats mesurables.
          </p>
        </motion.div>
      </section>

      <section className="section-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {cases.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-lg border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-pure-black">{c.title}</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-50 text-primary-blue rounded-lg">
                          <Target className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-pure-black mb-1">Objectif</h4>
                          <p className="text-slate-600">{c.objective}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-pure-black mb-1">Résultats</h4>
                          <p className="text-slate-600">{c.results}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-pure-black mb-6 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-blue" />
                      Étapes clés
                    </h4>
                    <ul className="space-y-4">
                      {c.steps.map((step, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
                          <ChevronRight className="w-4 h-4 text-primary-blue" />
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
