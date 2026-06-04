import { motion } from 'motion/react';
import { Target, TrendingUp, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';

const CasPratique = () => {
  const cases = [
    {
      title: "Relance de la présence LinkedIn",
      context: "Alternance · Agence de traduction juridique",
      period: "2023–2024 · sur 1 an",
      objective: "Réinstaller durablement la présence de l'entreprise sur LinkedIn, quasi inactive avant mon arrivée.",
      role: "Refonte complète de la communication : plan stratégique, ligne éditoriale, création des visuels et rédaction des publications (environ 3 posts par semaine).",
      results: "Plus de 1 000 abonnés atteints en un an, avec une présence désormais régulière.",
      steps: ["Audit de la présence existante", "Définition du plan stratégique et de la ligne éditoriale", "Création des visuels et rédaction des posts", "Publication régulière (~3/semaine) et suivi"]
    },
    {
      title: "Refonte du site web B2B",
      context: "Alternance · Agence de traduction juridique",
      period: "2023–2024 · 3 à 4 mois",
      objective: "Moderniser le site et améliorer l'expérience utilisateur.",
      role: "Refonte de la charte graphique, maquettage de toutes les pages, reprise des textes et du design, puis intégration et développement sous WordPress avec Elementor.",
      results: "Refonte complète du site livrée et mise en ligne : nouvelle charte graphique, design et structure repensés.",
      steps: ["Refonte de la charte graphique", "Maquettage UX/UI de toutes les pages", "Reprise des contenus et du design", "Développement sous WordPress avec Elementor"]
    },
    {
      title: "Organisation d'afterworks clients & prospects",
      context: "Alternance · Agence de traduction juridique",
      period: "2 éditions sur 2 ans",
      objective: "Créer des temps de rencontre pour renforcer la relation avec les clients et les prospects.",
      role: "Organisation de deux afterworks : ciblage des invités, logistique, communication et suivi.",
      results: "Deux éditions organisées, réunissant clients et prospects de l'agence.",
      steps: ["Ciblage des invités (clients et prospects)", "Gestion de la logistique", "Communication de l'événement", "Suivi post-événement"]
    }
  ];

  return (
    <div className="pt-48 md:pt-60 pb-20 bg-bg-light">
      <section className="max-w-[1200px] mx-auto px-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-black text-deep-blue mb-6 tracking-tighter leading-[1.1]">Expériences professionnelles</h1>
          <p className="text-lg md:text-xl text-text-gray leading-relaxed font-medium max-w-2xl">
            Les projets concrets que j'ai menés en alternance, de la communication digitale à l'organisation d'événements.
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-20 px-10">
        <div className="max-w-[1200px] mx-auto">
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
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-blue mb-2">{c.context} · <span className="text-text-gray">{c.period}</span></p>
                      <h3 className="text-2xl md:text-3xl font-black text-deep-blue leading-tight group-hover:text-light-blue transition-colors duration-500">{c.title}</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-bg-light text-light-blue rounded-xl shadow-sm border border-slate-100">
                          <Target className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-gray mb-1">Objectif Stratégique</h4>
                          <p className="text-lg font-medium text-deep-blue leading-snug">{c.objective}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-bg-light text-amber-600 rounded-xl shadow-sm border border-slate-100">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-gray mb-1">Rôle &amp; Missions</h4>
                          <p className="text-lg font-medium text-deep-blue leading-snug">{c.role}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-bg-light text-green-600 rounded-xl shadow-sm border border-slate-100">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-gray mb-1">Résultat</h4>
                          <p className="text-lg font-medium text-deep-blue leading-snug">{c.results}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-deep-blue p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-light-blue/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <h4 className="text-[10px] font-semibold text-white mb-8 uppercase tracking-[0.2em] flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-light-blue" />
                      Méthodologie & Étapes
                    </h4>
                    <ul className="space-y-6">
                      {c.steps.map((step, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-white/80 text-base font-medium group/item">
                          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-semibold text-white group-hover/item:bg-light-blue transition-colors duration-300">
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
