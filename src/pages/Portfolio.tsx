import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExternalLink, Play, FileText, Image as ImageIcon, Linkedin, Mail, ArrowRight, Users } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Articles Web & SEO",
      category: "Articles web",
      desc: "Rédaction d'articles optimisés pour le référencement naturel et le positionnement B2B chez Legal 230.",
      skills: ["SEO", "Rédaction Web", "B2B"],
      icon: <FileText className="w-5 h-5" />,
      image: "https://picsum.photos/seed/articles/800/600"
    },
    {
      title: "Stratégie Newsletters",
      category: "Newsletters",
      desc: "Conception et envoi de campagnes d'emailing mensuelles avec analyse des performances et automation.",
      skills: ["Brevo", "Mailjet", "Automation"],
      icon: <Mail className="w-5 h-5" />,
      image: "https://picsum.photos/seed/email/800/600"
    },
    {
      title: "Pilotage Refonte Web",
      category: "Refonte de site web",
      desc: "Gestion de projet pour la refonte complète du site vitrine de l'agence Legal 230.",
      skills: ["WordPress", "UX/UI", "Gestion de Projet"],
      icon: <ExternalLink className="w-5 h-5" />,
      image: "https://picsum.photos/seed/web/800/600"
    },
    {
      title: "Contenu LinkedIn & Branding",
      category: "Publications LinkedIn",
      desc: "Animation hebdomadaire et rédaction de posts à forte valeur ajoutée. +1000 abonnés en 1 an.",
      skills: ["Copywriting", "LinkedIn Algorithm", "Engagement"],
      icon: <Linkedin className="w-5 h-5" />,
      image: "https://picsum.photos/seed/linkedin/800/600"
    },
    {
      title: "Événementiel B2B",
      category: "Organisation d’événements",
      desc: "Organisation d'afterworks corporate et coordination d'événements pour renforcer le réseau B2B.",
      skills: ["Événementiel", "Coordination", "Relation Client"],
      icon: <Users className="w-5 h-5" />,
      image: "https://picsum.photos/seed/event/800/600"
    }
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
          <h1 className="huge-title">Portfolio</h1>
          <p className="sub-title">
            Une sélection de mes travaux académiques et professionnels, illustrant ma réflexion sur la stratégie digitale et l'innovation technologique.
          </p>
        </motion.div>
      </section>

      <section className="bg-pure-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 gap-24">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] relative overflow-hidden rounded-[2rem] mb-10 bg-slate-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-deep-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-20 h-20 rounded-full bg-white text-primary-blue flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="absolute top-8 left-8">
                    <span className="px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-deep-black uppercase tracking-[0.2em] shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="px-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-50 rounded-xl text-primary-blue">
                      {project.icon}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map(skill => (
                        <span key={skill} className="text-[10px] font-black uppercase tracking-widest text-light-gray">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-4xl font-black text-deep-black mb-6 group-hover:text-primary-blue transition-colors duration-500 leading-tight">{project.title}</h3>
                  <p className="text-text-gray text-lg mb-8 leading-relaxed max-w-xl">{project.desc}</p>
                  
                  <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-deep-black group-hover:gap-5 transition-all duration-500">
                    Découvrir le projet
                    <ArrowRight className="w-4 h-4 text-primary-blue" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark mt-48">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight">Approfondissons ensemble</h2>
            <p className="text-xl text-light-gray mb-16 max-w-2xl mx-auto leading-relaxed">
              Chaque projet est une opportunité d'apprentissage et d'analyse. Discutons de la manière dont ces approches peuvent s'intégrer dans vos réflexions numériques.
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

export default Portfolio;
