import { motion } from 'motion/react';
import { ExternalLink, Play, FileText, Image as ImageIcon, Linkedin, Mail } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Vidéos Marketing",
      category: "Vidéo",
      desc: "Création et montage de vidéos promotionnelles pour les réseaux sociaux.",
      skills: ["CapCut", "Storytelling", "Branding"],
      icon: <Play className="w-5 h-5" />,
      image: "https://picsum.photos/seed/video/600/400"
    },
    {
      title: "Publications LinkedIn",
      category: "Content Strategy",
      desc: "Animation hebdomadaire et rédaction de posts à forte valeur ajoutée.",
      skills: ["Copywriting", "LinkedIn Algorithm", "Engagement"],
      icon: <Linkedin className="w-5 h-5" />,
      image: "https://picsum.photos/seed/linkedin/600/400"
    },
    {
      title: "Visuels Graphiques",
      category: "Design",
      desc: "Conception de supports visuels pour le web et le print.",
      skills: ["Canva", "Photoshop", "Identité Visuelle"],
      icon: <ImageIcon className="w-5 h-5" />,
      image: "https://picsum.photos/seed/design/600/400"
    },
    {
      title: "Articles Web Legal 230",
      category: "SEO",
      desc: "Rédaction d'articles optimisés pour le référencement naturel.",
      skills: ["SEO", "Rédaction Web", "B2B"],
      icon: <FileText className="w-5 h-5" />,
      image: "https://picsum.photos/seed/seo/600/400"
    },
    {
      title: "Newsletters",
      category: "Email Marketing",
      desc: "Conception et envoi de campagnes d'emailing mensuelles.",
      skills: ["Brevo", "Mailjet", "Automation"],
      icon: <Mail className="w-5 h-5" />,
      image: "https://picsum.photos/seed/email/600/400"
    },
    {
      title: "Refonte Site Legal 230",
      category: "Web Project",
      desc: "Pilotage de la refonte complète du site vitrine de l'agence.",
      skills: ["WordPress", "UX/UI", "Gestion de Projet"],
      icon: <ExternalLink className="w-5 h-5" />,
      image: "https://picsum.photos/seed/web/600/400"
    },
    {
      title: "Projets Efrei (Python)",
      category: "Tech",
      desc: "Développement de scripts et outils d'automatisation.",
      skills: ["Python", "Data", "Automation"],
      icon: <ExternalLink className="w-5 h-5" />,
      image: "https://picsum.photos/seed/python/600/400"
    },
    {
      title: "Projets Personnels",
      category: "Création",
      desc: "Explorations graphiques et montages vidéos créatifs.",
      skills: ["Créativité", "Montage", "Design"],
      icon: <ImageIcon className="w-5 h-5" />,
      image: "https://picsum.photos/seed/personal/600/400"
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
          <h1 className="text-5xl md:text-6xl font-bold text-deep-blue mb-8 tracking-tight">Portfolio</h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Une galerie de mes réalisations en marketing digital, création de contenu et gestion de projet.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-deep-blue/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-4 rounded-full bg-white text-deep-blue">
                    {project.icon}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-3">{project.category}</div>
                <h3 className="text-xl font-bold text-deep-blue mb-4">{project.title}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map(skill => (
                    <span key={skill} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
