import { motion } from 'motion/react';
import { Database, Clock, BarChart3, Users } from 'lucide-react';

const Data = () => {
  return (
    <div className="pt-48 pb-24 min-h-screen bg-bg-light">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="huge-title text-deep-blue">Data & Analyse</h1>
          <p className="sub-title">
            Exploration de données et analyses stratégiques pour éclairer la prise de décision dans un monde en mutation.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-light-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-light-blue/10 text-light-blue flex items-center justify-center">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-sm font-black uppercase tracking-widest text-light-blue">Projet en cours</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-deep-blue mb-10 leading-tight">
              Analyse du télétravail & Transformation Numérique
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-xl text-text-gray leading-relaxed font-medium">
                  Cette page sera dédiée à une analyse approfondie du télétravail dans un contexte de transformation numérique accélérée. 
                </p>
                <p className="text-xl text-text-gray leading-relaxed font-medium">
                  L'objectif est de comprendre comment les entreprises peuvent concilier performance collective, engagement des salariés et flexibilité du travail à distance.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-bg-light flex items-center justify-center shrink-0">
                    <BarChart3 className="w-5 h-5 text-deep-blue" />
                  </div>
                  <div>
                    <h4 className="font-black text-deep-blue mb-2">Performance collective</h4>
                    <p className="text-text-gray font-medium">Mesurer l'impact des outils collaboratifs sur la productivité des équipes.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-bg-light flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-deep-blue" />
                  </div>
                  <div>
                    <h4 className="font-black text-deep-blue mb-2">Engagement des salariés</h4>
                    <p className="text-text-gray font-medium">Analyser le sentiment d'appartenance et le bien-être en distanciel.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-bg-light flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-deep-blue" />
                  </div>
                  <div>
                    <h4 className="font-black text-deep-blue mb-2">Travail à distance</h4>
                    <p className="text-text-gray font-medium">Optimiser les processus pour une hybridation réussie.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 p-10 bg-bg-light rounded-[2rem] border border-dashed border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-black text-deep-blue mb-2">Analyse à venir</h3>
                <p className="text-text-gray font-medium">Une étude basée sur des données réelles et des indicateurs clés sera ajoutée prochainement.</p>
              </div>
              <div className="px-8 py-4 bg-deep-blue text-white rounded-full font-black text-sm uppercase tracking-widest">
                En préparation
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Data;
