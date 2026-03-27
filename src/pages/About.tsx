import { motion } from 'motion/react';
import { Heart, Zap, Shield, Compass, Star, TrendingUp, Users, Lightbulb, Target, MessageSquare, Rocket, RefreshCw, AlertCircle, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="pt-48 pb-24">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="huge-title">À Propos</h1>
          <p className="sub-title">
            Cheffe de projet digital & marketing passionnée par l'innovation, la stratégie de contenu et l'impact des nouvelles technologies.
          </p>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="bg-pure-white mb-48">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-10 text-2xl font-medium text-deep-black leading-relaxed">
              <p>
                Mon parcours est guidé par une double exigence : la <span className="text-primary-blue font-black">créativité</span> pour captiver, et la <span className="text-primary-blue font-black">rigueur</span> pour transformer les idées en résultats concrets.
              </p>
              <p>
                Spécialisée dans le marketing digital, j'accompagne les marques dans leur transformation numérique en alliant vision stratégique et maîtrise des outils NoCode/IA.
              </p>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-light-gray mb-8 flex items-center gap-3">
                <Compass className="w-4 h-4 text-primary-blue" />
                Passions & Intérêts
              </h3>
              <div className="flex flex-wrap gap-4">
                {["Stratégie Digitale", "NoCode & IA", "Storytelling", "Voyages", "Plongée", "Équitation", "Création Visuelle"].map(tag => (
                  <span key={tag} className="px-6 py-3 bg-white rounded-full text-xs font-black text-deep-black border border-slate-200 shadow-sm hover:border-primary-blue transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours Section */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-24 leading-tight">Mon Parcours</h2>
          <div className="space-y-20">
            {[
              {
                title: "Cheffe de Projet Digital",
                company: "Legal 230",
                period: "2023 – Présent",
                desc: "Pilotage de la stratégie marketing globale, refonte web et optimisation SEO. Impact majeur sur la visibilité LinkedIn (+1000 abonnés)."
              },
              {
                title: "Chargée Marketing & Com",
                company: "Legal 230",
                period: "2022 – 2023",
                desc: "Mise en place de la stratégie B2B, création de contenus multicanaux et production vidéo."
              },
              {
                title: "Assistante Marketing",
                company: "Touch Sell",
                period: "2021 – 2022",
                desc: "Soutien à la création graphique et animation des réseaux sociaux professionnels."
              }
            ].map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="grid md:grid-cols-4 gap-8 border-t border-white/10 pt-12 group"
              >
                <div className="text-primary-blue font-black text-xl">{exp.period}</div>
                <div className="md:col-span-3 space-y-4">
                  <h3 className="text-3xl font-black group-hover:text-primary-blue transition-colors duration-500">{exp.title} — {exp.company}</h3>
                  <p className="text-light-gray text-lg max-w-2xl leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section className="section-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-24 leading-tight text-deep-black">Formation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { year: "2024 – 2026", title: "Mastère Transformation Numérique", school: "Efrei Paris" },
              { year: "2023 – 2025", title: "Mastère Brand Content", school: "PEM / EMCD" },
              { year: "2022 – 2023", title: "Bachelor Marketing Digital", school: "EMCD" },
              { year: "2020 – 2022", title: "BTS NDRC", school: "CCI Paris" }
            ].map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-12 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <span className="text-xs font-black text-primary-blue uppercase tracking-[0.2em] mb-4 block">{edu.year}</span>
                <h3 className="text-2xl font-black text-deep-black mb-4 group-hover:text-primary-blue transition-colors duration-300">{edu.title}</h3>
                <p className="text-text-gray font-bold">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-24 leading-tight text-center">Mes Valeurs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-12 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 text-center group"
              >
                <div className="w-20 h-20 rounded-3xl bg-slate-50 text-primary-blue flex items-center justify-center mb-10 mx-auto group-hover:bg-deep-black group-hover:text-white transition-all duration-500">
                  {v.icon}
                </div>
                <h4 className="text-2xl font-black text-deep-black mb-6">{v.title}</h4>
                <p className="text-text-gray font-medium leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="section-white">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight">Ce que l'on dit de moi</h2>
          <p className="text-2xl text-text-gray max-w-3xl mx-auto leading-relaxed font-medium">
            Rigueur, créativité et autonomie sont les piliers de ma réputation professionnelle.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {feedbackCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-10 text-primary-blue shadow-sm">
                {category.icon}
              </div>
              <h3 className="text-2xl font-black text-deep-black mb-10">{category.title}</h3>
              <ul className="space-y-8">
                {category.items.map((item, idx) => (
                  <li key={idx} className="space-y-2">
                    <div className="font-black text-deep-black text-lg flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary-blue" />
                      {item.label}
                    </div>
                    <p className="text-text-gray font-medium ml-5">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-dark mt-48">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight">Envie de collaborer ?</h2>
            <p className="text-xl text-light-gray mb-16 max-w-2xl mx-auto leading-relaxed">
              Discutons de vos projets et voyons comment je peux vous aider à atteindre vos objectifs.
            </p>
            <Link 
              to="/contact" 
              className="btn-outline-white inline-flex items-center gap-4 group"
            >
              Me contacter
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
