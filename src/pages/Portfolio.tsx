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
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-pure-black mb-8 tracking-tight">Portfolio</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Voici un aperçu de mes <span className="important-text">réalisations concrètes</span> : de la stratégie de contenu au pilotage de projets digitaux.
          </p>
        </motion.div>
      </section>

      <section className="section-gray">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group card-style overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-pure-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-16 h-16 rounded-full bg-white text-primary-blue flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-md text-[10px] font-bold text-primary-blue uppercase tracking-widest shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-pure-black mb-4 group-hover:text-primary-blue transition-colors">{project.title}</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed flex-1">{project.desc}</p>
                  
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map(skill => (
                        <span key={skill} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between group/link cursor-pointer">
                      <span className="text-sm font-bold text-pure-black group-hover/link:text-primary-blue transition-colors">Voir le projet</span>
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover/link:text-primary-blue group-hover/link:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-lg p-12 md:p-20 text-center border border-slate-100 shadow-sm relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-pure-black mb-8">Un projet en tête ?</h2>
              <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                Je suis toujours ouverte à de nouvelles collaborations et opportunités pour mettre mes compétences au service de projets innovants.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary inline-flex items-center gap-3"
              >
                Travaillons ensemble
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
