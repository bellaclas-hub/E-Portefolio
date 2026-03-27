import { motion } from 'motion/react';
import { GraduationCap, Calendar, BookOpen, PenTool, Code, Zap, Award, Star } from 'lucide-react';

const Education = () => {
  const formations = [
    {
      year: "2024 – 2026",
      title: "Mastère 2 — Manager Expert en Transformation Numérique",
      school: "Efrei",
      details: "Gestion de projets digitaux, Python, Transformation numérique, Conduite du changement.",
      icon: <Code className="w-6 h-6" />,
      skills: ["Gestion de projet", "Python", "Transformation"]
    },
    {
      year: "2023 – 2025",
      title: "Mastère Brand Content & Management",
      school: "PEM / EMCD",
      details: "Stratégie de contenu, Branding, Management de marque.",
      icon: <PenTool className="w-6 h-6" />,
      skills: ["Branding", "Content", "Management"]
    },
    {
      year: "2022 – 2023",
      title: "Bachelor Marketing & Communication Digitale",
      school: "EMCD",
      details: "Marketing digital, Communication, Stratégie publicitaire.",
      icon: <BookOpen className="w-6 h-6" />,
      skills: ["Marketing", "Communication"]
    },
    {
      year: "2020 – 2022",
      title: "BTS NDRC",
      school: "CCI Paris IDF",
      details: "Négociation et Digitalisation de la Relation Client.",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Vente", "Relation Client"]
    },
    {
      year: "2018 – 2020",
      title: "Bac Professionnel Vente",
      school: "Lycée Professionnel",
      details: "Bases de la relation commerciale et de la vente.",
      icon: <GraduationCap className="w-6 h-6" />,
      skills: ["Vente", "Commerce"]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-pure-black mb-8 tracking-tight">Formation</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Un parcours académique solide alliant <span className="important-text">expertise commerciale</span> et <span className="important-text">transformation numérique</span>.
          </p>
        </motion.div>
      </section>

      <section className="section-gray relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Timeline Vertical Line */}
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
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 top-0 w-12 h-12 rounded-full bg-white border-4 border-slate-100 shadow-lg flex items-center justify-center text-primary-blue -translate-x-1/2 z-10 hidden md:flex group hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pl-20' : 'md:pr-20'} pl-12 md:pl-0`}>
                  <div className="card-style p-8 md:p-10 hover:shadow-2xl transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <Calendar className="w-4 h-4 text-primary-blue" />
                        <span className="text-sm font-bold text-primary-blue uppercase tracking-widest">{item.year}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-pure-black mb-3 group-hover:text-primary-blue transition-colors">{item.title}</h3>
                      <p className="text-lg font-semibold text-slate-600 mb-4">{item.school}</p>
                      <p className="text-slate-500 mb-8 leading-relaxed">{item.details}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-slate-50 rounded-md text-xs font-bold text-slate-600 border border-slate-100 uppercase tracking-wider">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="section-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-pure-black mb-8">Une trajectoire de résilience</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Mon parcours est le résultat d’une <span className="important-text">progression continue</span>, d’une <span className="important-text">résilience forte</span> et d’un apprentissage adapté (ULIS, pédagogie individualisée).
                </p>
                <p>
                  Chaque étape m’a permis de développer <span className="important-text">rigueur, structure et détermination</span>. Aujourd'hui en Master à l'Efrei, je mets cette force au service de projets ambitieux.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-lg bg-slate-50 border border-slate-100 p-12 flex flex-col justify-center items-center text-center">
                <div className="text-6xl font-bold text-primary-blue mb-4">2018 → 2026</div>
                <div className="text-xl text-pure-black font-medium uppercase tracking-widest">De la vente à la transformation numérique</div>
                <div className="mt-8 h-1 w-24 bg-primary-blue/20 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
