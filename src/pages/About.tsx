import { motion } from 'motion/react';
import { Heart, Zap, Shield, Compass, Star, TrendingUp, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Heart className="w-5 h-5" />, title: "Bienveillance", desc: "Une approche humaine et collaborative." },
    { icon: <Zap className="w-5 h-5" />, title: "Exigence", desc: "Le sens du détail et la quête de performance." },
    { icon: <Shield className="w-5 h-5" />, title: "Indépendance", desc: "Autonomie et prise d'initiative constante." },
    { icon: <Users className="w-5 h-5" />, title: "Esprit d'équipe", desc: "La force du collectif pour de grands projets." },
  ];

  const tests = [
    { title: "DISC", result: "Déterminée, structurée, orientée résultats", color: "bg-blue-500" },
    { title: "RIASEC", result: "Artistique – Investigateur – Social – Entreprenant", color: "bg-indigo-500" },
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-deep-blue mb-12">Mon Histoire</h1>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
              <p>
                Ma personnalité est un mélange de <strong>créativité</strong>, d'<strong>organisation</strong> et d'<strong>ambition</strong>. 
                Sensible au détail, j'aime transformer des idées abstraites en projets concrets et structurés.
              </p>
              <p>
                Mes motivations sont portées par la diversité des missions, l'innovation technologique et l'autonomie. 
                J'aime apprendre, m'adapter et relever des défis qui demandent à la fois de la stratégie et de l'exécution.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-deep-blue mb-6 flex items-center gap-2">
                <Compass className="w-5 h-5 text-accent-blue" />
                Passions & Équilibre
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Voyages", "Équitation", "Natation", "Plongée"].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-slate-50 rounded-full text-sm font-medium text-slate-600 border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500 italic">
                Ces activités m'ont appris la patience, la discipline et le goût de l'exploration.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-deep-blue py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">Mes Valeurs Fondamentales</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-accent-blue mb-6">{v.icon}</div>
                <h4 className="text-white font-bold mb-3">{v.title}</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Tests */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-3xl font-bold text-deep-blue mb-12 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-accent-blue" />
              Vision Professionnelle
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-deep-blue font-bold">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Court Terme</h4>
                  <p className="text-slate-600">Occuper un poste de chargée marketing / cheffe de projet dans un environnement stimulant.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-deep-blue font-bold">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Moyen Terme</h4>
                  <p className="text-slate-600">Évoluer vers un poste de responsable marketing au sein d'un grand groupe (L’Oréal, La Poste, TF1...).</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-deep-blue font-bold">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Long Terme</h4>
                  <p className="text-slate-600">Créer ma propre entreprise pour porter ma vision du marketing digital.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-deep-blue mb-12 flex items-center gap-3">
              <Star className="w-8 h-8 text-accent-blue" />
              Tests & Forces
            </h2>
            <div className="space-y-8">
              {tests.map(test => (
                <div key={test.title} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-deep-blue">{test.title}</h4>
                    <div className={`w-3 h-3 rounded-full ${test.color}`} />
                  </div>
                  <p className="text-slate-600 font-medium">{test.result}</p>
                </div>
              ))}
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Forces</h5>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full" /> Créativité</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full" /> Rigueur</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full" /> Organisation</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full" /> Autonomie</li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-200">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Axes d'amélioration</h5>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Délégation</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Gestion du stress</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Perfectionnisme</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
