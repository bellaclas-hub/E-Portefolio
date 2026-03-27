import { motion } from 'motion/react';
import { Heart, Zap, Shield, Compass, Star, TrendingUp, Users, Lightbulb, Target, MessageSquare, Rocket, RefreshCw, AlertCircle, Briefcase, CheckCircle2 } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Zap className="w-5 h-5" />, title: "Exigence", desc: "Je ne laisse rien au hasard pour garantir la qualité." },
    { icon: <Lightbulb className="w-5 h-5" />, title: "Créativité", desc: "Transformer les idées en expériences visuelles marquantes." },
    { icon: <Shield className="w-5 h-5" />, title: "Autonomie", desc: "Prendre des initiatives, structurer et organiser." },
    { icon: <Heart className="w-5 h-5" />, title: "Bienveillance", desc: "Croire aux environnements humains et positifs." },
    { icon: <CheckCircle2 className="w-5 h-5" />, title: "Sens du détail", desc: "Précision et cohérence dans chaque projet." },
    { icon: <Compass className="w-5 h-5" />, title: "Curiosité", desc: "Apprendre et explorer de nouvelles méthodes." },
  ];

  const motivations = [
    "Imaginer et piloter des projets marketing",
    "Créer des contenus qui ont de l’impact",
    "Faire évoluer une stratégie digitale",
    "Travailler dans des environnements dynamiques",
    "Explorer de nouveaux outils et méthodes"
  ];

  const feedbackCategories = [
    {
      title: "Qualités professionnelles",
      icon: <Briefcase className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600",
      items: [
        { label: "Organisation & Rigueur", desc: "Très organisée et rigoureuse." },
        { label: "Créativité", desc: "Beaucoup d’idées et d’initiatives." },
        { label: "Communication claire", desc: "Messages efficaces et impactants." },
        { label: "Analyse & Structure", desc: "Forte capacité à structurer et proposer." }
      ]
    },
    {
      title: "Compétences reconnues",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "bg-green-50 text-green-600",
      items: [
        { label: "Création de contenus", desc: "Visuels, écrits, vidéos." },
        { label: "Compréhension", desc: "Analyse rapide des besoins." },
        { label: "Travail en équipe", desc: "Implication et fiabilité." },
        { label: "Résolution", desc: "Problèmes et autonomie." }
      ]
    },
    {
      title: "Qualités humaines",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600",
      items: [
        { label: "Adaptabilité", desc: "Écoute, curiosité et ambition." },
        { label: "Engagement", desc: "Dynamisme dans les projets." }
      ]
    }
  ];

  const shortImprovements = [
    "Mieux prioriser lorsque plusieurs projets se chevauchent",
    "Sortir davantage de ma zone de confort",
    "Développer encore plus l’écoute active dans certains contextes"
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-pure-black mb-12">Qui je suis</h1>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 text-lg text-pure-black leading-relaxed">
              <p>
                Je suis une professionnelle du marketing digital passionnée par la création, la stratégie et la gestion de projets.
                J’accorde autant d’importance à la <span className="important-text">créativité</span> qu’à l’<span className="important-text">organisation</span> et à l’<span className="important-text">analyse</span>.
              </p>
              <p>
                Mon parcours reflète ma détermination, ma <span className="important-text">résilience</span> et ma volonté constante de progresser.
              </p>
            </div>
            <div className="card-style p-8">
              <h3 className="font-bold text-pure-black mb-6 flex items-center gap-2">
                <Compass className="w-5 h-5 text-primary-blue" />
                Centres d’intérêt
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Voyages", "Natation", "Plongée", "Équitation", "Musique", "Création visuelle", "Projets numériques"].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-slate-50 rounded-lg text-sm font-medium text-pure-black border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="section-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-pure-black mb-16 text-center">Mes Valeurs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-lg bg-white border border-slate-100 shadow-sm"
              >
                <div className="text-primary-blue mb-6">{v.icon}</div>
                <h4 className="text-pure-black font-bold mb-3">{v.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivations & Objective */}
      <section className="section-white max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-pure-black mb-12 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary-blue" />
              Ce qui me motive
            </h2>
            <div className="space-y-4">
              {motivations.map((m, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="w-2 h-2 bg-primary-blue rounded-full" />
                  <span className="text-pure-black font-medium">{m}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-pure-black mb-12 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary-blue" />
              Objectif Professionnel
            </h2>
            <div className="card-style p-8 space-y-6">
              <p className="text-lg text-pure-black">
                Mon ambition est de piloter des projets marketing d'envergure et de contribuer à la croissance de marques innovantes.
              </p>
              <p className="text-lg text-pure-black">
                À moyen terme, je souhaite évoluer vers un poste de <span className="important-text">responsable marketing</span> et développer ma propre activité.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="section-gray">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-pure-black mb-6">Ce que les autres disent de moi</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Voici les qualités et compétences qui reviennent le plus souvent lorsque mes collègues, proches et anciens collaborateurs parlent de moi.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {feedbackCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-lg border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center mb-8 text-primary-blue`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-pure-black mb-8">{category.title}</h3>
                <ul className="space-y-6">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="space-y-1">
                      <div className="font-bold text-pure-black flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-blue" />
                        {item.label}
                      </div>
                      <p className="text-sm text-slate-500 ml-3.5">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Improvements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-12 rounded-lg border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-50 text-pure-black rounded-lg">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-pure-black">Axes d'amélioration</h3>
              </div>
              <ul className="space-y-4">
                {shortImprovements.map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-pure-black">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 flex-shrink-0" />
                    <span className="font-medium">{text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-slate-400 italic">
                Une démarche lucide pour un développement professionnel continu.
              </p>
            </motion.div>

            {/* Summary Conclusion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-pure-black p-10 md:p-12 rounded-lg text-white flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-blue/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">En résumé</h3>
              <p className="text-xl text-blue-100/90 leading-relaxed font-medium relative z-10">
                « Une professionnelle <span className="text-primary-blue">créative</span>, <span className="text-primary-blue">structurée</span>, communicante et <span className="text-primary-blue">autonome</span> — motivée, impliquée et capable de produire des résultats rapides et de qualité. »
              </p>
              
              <div className="mt-10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary-blue flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-blue-200">
                  Profil Impactant
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
