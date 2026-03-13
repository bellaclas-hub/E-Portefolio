import { motion } from 'motion/react';
import { GraduationCap, Calendar, BookOpen, PenTool, Code, Zap } from 'lucide-react';

const Education = () => {
  const formations = [
    {
      year: "2024 – 2026",
      title: "Mastère 2 — Manager Expert en Transformation Numérique",
      school: "Efrei",
      details: "Spécialisation digitale, Gestion de projet digital, Python & outils techniques, Conduite du changement & transformation digitale.",
      icon: <Code className="w-6 h-6" />
    },
    {
      year: "2023 – 2025",
      title: "Mastère Brand Content et Management",
      school: "PEM / EMCD La Défense",
      details: "Stratégie de contenu, Branding, Vidéo et communication digitale.",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      year: "2022 – 2023",
      title: "Bachelor Marketing & Communication Digitale",
      school: "EMCD La Défense",
      details: "Fondamentaux du marketing digital, communication et stratégie publicitaire.",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      year: "2020 – 2022",
      title: "BTS NDRC (Négociation et Digitalisation de la Relation Client)",
      school: "CCI Paris IDF",
      details: "Vente, relation client, prospection, techniques commerciales.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      year: "2018 – 2020",
      title: "Bac Professionnel Vente",
      school: "Lycée Professionnel",
      details: "Apprentissage des bases de la relation commerciale et de la vente.",
      icon: <GraduationCap className="w-6 h-6" />
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
          <h1 className="text-5xl md:text-6xl font-bold text-deep-blue mb-8 tracking-tight">Formations</h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Un parcours académique structuré alliant expertise commerciale et transformation numérique.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />

        <div className="space-y-16">
          {formations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot on Timeline */}
              <div className="absolute left-6 md:left-1/2 top-0 w-12 h-12 rounded-full bg-white border-4 border-blue-50 shadow-lg flex items-center justify-center text-deep-blue -translate-x-1/2 z-10 hidden md:flex">
                {item.icon}
              </div>

              <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pl-20' : 'md:pr-20'} pl-12 md:pl-0`}>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-4 h-4 text-accent-blue" />
                    <span className="text-sm font-bold text-accent-blue uppercase tracking-widest">{item.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-deep-blue mb-2">{item.title}</h3>
                  <div className="text-lg font-semibold text-slate-600 mb-6">{item.school}</div>
                  <p className="text-slate-500 leading-relaxed">{item.details}</p>
                </div>
              </div>
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="section-padding bg-slate-50 border-y border-slate-200 mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 bg-white rounded-2xl shadow-sm mb-8 text-deep-blue">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-deep-blue mb-8">Mon Parcours : Une Progression Continue</h2>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            "Mon parcours scolaire est le résultat d’une progression continue, d’une résilience forte et d’un apprentissage adapté (ULIS, pédagogie individualisée). Chaque étape m’a permis de développer rigueur, structure et détermination."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Education;
