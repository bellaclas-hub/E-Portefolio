import { motion } from 'motion/react';
import { Target, Lightbulb, Zap, Shield, Compass, Eye, ArrowRight, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="pt-48 pb-20 bg-bg-light">
      {/* Hero Section: À propos */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-3xl"
        >
          <motion.span variants={itemVariants} className="text-[10px] font-black uppercase tracking-[0.3em] text-light-blue mb-6 block">
            Profil & Vision
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black text-deep-blue mb-12 tracking-tighter leading-[0.9]">
            À propos
          </motion.h1>
          <motion.div variants={itemVariants} className="space-y-8 text-xl md:text-2xl text-text-gray leading-relaxed font-medium">
            <p>
              Passionnée par le <span className="text-deep-blue font-black">digital</span> et les nouvelles technologies, je m’intéresse particulièrement à la manière dont le <span className="text-light-blue font-black">NoCode</span> et l’<span className="text-light-blue font-black">intelligence artificielle</span> transforment la création de sites web.
            </p>
            <p>
              Ces outils redéfinissent les méthodes de production, en rendant la création <span className="text-deep-blue font-black">plus rapide</span>, <span className="text-deep-blue font-black">plus accessible</span> et <span className="text-deep-blue font-black">plus collaborative</span>.
            </p>
            <p>
              Mon objectif est de comprendre ces évolutions et de les intégrer dans des projets <span className="text-deep-blue font-black">concrets</span> et <span className="text-deep-blue font-black">cohérents</span>.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Mon approche */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-deep-blue mb-10 tracking-tight">Mon approche</h2>
            <div className="space-y-6 text-lg text-text-gray leading-relaxed">
              <p>
                Je développe une approche basée sur l’équilibre entre <span className="text-deep-blue font-bold">stratégie</span>, <span className="text-deep-blue font-bold">créativité</span> et <span className="text-deep-blue font-bold">maîtrise des outils digitaux</span>.
              </p>
              <p>
                Chaque projet est pour moi l’occasion de structurer une réflexion, de proposer des solutions adaptées et d’exploiter le potentiel des technologies actuelles pour créer des <span className="text-light-blue font-bold">expériences pertinentes</span>.
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-square bg-white rounded-[4rem] flex items-center justify-center p-12 border border-slate-100 shadow-sm">
              <div className="grid grid-cols-2 gap-8 w-full">
                {[
                  { icon: <Target className="w-8 h-8" />, label: "Stratégie" },
                  { icon: <Lightbulb className="w-8 h-8" />, label: "Créativité" },
                  { icon: <Zap className="w-8 h-8" />, label: "Outils" },
                  { icon: <Compass className="w-8 h-8" />, label: "Réflexion" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-bg-light p-8 rounded-3xl border border-slate-100 flex flex-col items-center gap-4 text-center"
                  >
                    <div className="text-light-blue">{item.icon}</div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-deep-blue">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences & Savoir-faire */}
      <section className="bg-deep-blue py-24 px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Compétences */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-8">Compétences</h2>
              <ul className="space-y-6">
                {[
                  "Stratégie digitale et création de contenu",
                  "Conception de sites web en NoCode",
                  "Utilisation d’outils d’intelligence artificielle",
                  "UX/UI et expérience utilisateur",
                  "Analyse et optimisation de projets digitaux"
                ].map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-2xl md:text-3xl font-black text-white flex items-start gap-6 group"
                  >
                    <span className="text-light-blue mt-1">0{i + 1}</span>
                    <span className="group-hover:translate-x-4 transition-transform duration-500">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Savoir-faire */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-light-blue mb-8">Savoir-faire</h2>
              <ul className="space-y-6">
                {[
                  "Structurer et piloter un projet digital",
                  "Concevoir des interfaces claires et efficaces",
                  "Adapter un message à une cible précise",
                  "Exploiter les outils NoCode et IA pour gagner en efficacité",
                  "Analyser et améliorer les performances"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-xl md:text-2xl font-bold text-white/80 flex items-start gap-6"
                  >
                    <div className="w-2 h-2 rounded-full bg-light-blue mt-3 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ma personnalité */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-6 tracking-tight">Ma personnalité</h2>
            <p className="text-text-gray text-lg font-medium">L'humain derrière les outils.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Créative & Curieuse",
                desc: "J’aime explorer de nouvelles façons de concevoir des projets digitaux.",
                icon: <Lightbulb className="w-6 h-6" />
              },
              {
                title: "Autonome & Organisée",
                desc: "Je sais structurer mon travail tout en restant force de proposition.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: "Adaptable",
                desc: "Je m’adapte rapidement aux outils et aux évolutions du secteur.",
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: "Apprentissage continu",
                desc: "Une volonté constante d’apprendre et de progresser.",
                icon: <ArrowRight className="w-6 h-6" />
              }
            ].map((trait, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="text-light-blue mb-6">{trait.icon}</div>
                <h3 className="text-xl font-black text-deep-blue mb-4">{trait.title}</h3>
                <p className="text-text-gray font-medium leading-relaxed">{trait.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white rounded-[4rem] p-12 md:p-20 text-center border border-slate-100 relative overflow-hidden shadow-sm"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,var(--light-blue)_0%,transparent_70%)]" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <Eye className="w-10 h-10 text-light-blue mx-auto mb-8" />
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-light-blue mb-8">Vision</h2>
            <div className="space-y-8 text-xl md:text-3xl font-black text-deep-blue leading-tight tracking-tight">
              <p>
                Je considère que le <span className="text-light-blue">NoCode</span> et l’<span className="text-light-blue">intelligence artificielle</span> ne remplacent pas les compétences humaines, mais les <span className="underline decoration-light-blue decoration-4 underline-offset-8">renforcent</span>.
              </p>
              <p className="text-text-gray text-xl md:text-2xl font-bold leading-relaxed">
                Ils permettent de gagner en rapidité et en efficacité, tout en laissant une place essentielle à la réflexion, à la stratégie et à la créativité.
              </p>
              <div className="pt-8">
                <p className="text-3xl md:text-5xl font-black tracking-tighter italic">
                  "Créer un site aujourd’hui ne nécessite plus de coder, mais nécessite toujours de <span className="text-light-blue">penser</span>."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-text-gray mb-8">Prêt à collaborer ?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Link to="/contact" className="btn-primary flex items-center gap-4 group">
            Me contacter
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/apolline-bellaclas/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white border border-slate-100 text-deep-blue hover:bg-light-blue hover:text-white transition-all duration-500 shadow-sm">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:bellaclas.a@gmail.com" className="p-4 rounded-full bg-white border border-slate-100 text-deep-blue hover:bg-light-blue hover:text-white transition-all duration-500 shadow-sm">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

