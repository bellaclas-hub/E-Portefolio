import { motion } from "motion/react";
import { ExternalLink, Mail, Linkedin, ChevronRight, Layout, Target, Users, Code, Target as TargetIcon, LayoutDashboard, Briefcase } from "lucide-react";

const Header = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="font-bold text-deep-blue text-lg tracking-tight">AB.</span>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
        <a href="#about" className="hover:text-deep-blue transition-colors">À propos</a>
        <a href="#projects" className="hover:text-deep-blue transition-colors">Projets</a>
        <a href="#skills" className="hover:text-deep-blue transition-colors">Compétences</a>
        <a href="#contact" className="hover:text-deep-blue transition-colors">Contact</a>
      </div>
      <a 
        href="#contact" 
        className="bg-deep-blue text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-accent-blue transition-all shadow-md"
      >
        Me contacter
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-deep-blue text-xs font-bold uppercase tracking-wider mb-6">
        Portfolio Professionnel
      </span>
      <h1 className="text-5xl md:text-7xl font-bold text-deep-blue leading-[1.1] mb-6 tracking-tight">
        Apolline Bellaclas
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-slate-600 mb-8">
        Chargée de marketing digital <span className="text-accent-blue">–</span> Stratégie & contenus
      </h2>
      <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
        Chargée de marketing digital B2B spécialisée en stratégie de contenus et pilotage de projets digitaux. 
        Mon double parcours commercial et marketing me permet d’adapter chaque action aux enjeux business réels.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href="#projects" className="flex items-center gap-2 bg-deep-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-blue transition-all shadow-lg group">
          Voir mes projets
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <div className="flex items-center gap-4 px-4">
          <a href="https://linkedin.com" target="_blank" className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-deep-blue hover:border-deep-blue transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:contact@example.com" className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-deep-blue hover:border-deep-blue transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);

const ProjectCard = ({ title, context, role, objective, tags, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="h-48 bg-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/10 to-accent-blue/5" />
      <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
        <Layout className="w-24 h-24 text-deep-blue" />
      </div>
    </div>
    <div className="p-8">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string) => (
          <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-slate-200 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold text-deep-blue mb-3">{title}</h3>
      <div className="space-y-4 text-sm text-slate-600">
        <p><strong className="text-slate-900">Contexte :</strong> {context}</p>
        <p><strong className="text-slate-900">Rôle :</strong> {role}</p>
        <p><strong className="text-slate-900">Objectif :</strong> {objective}</p>
      </div>
      <button className="mt-8 flex items-center gap-2 text-accent-blue font-bold text-sm hover:gap-3 transition-all">
        Détails du projet <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
);

const Skills = () => {
  const hardSkills = [
    "Marketing digital B2B", "Stratégie de contenus", "Content marketing & LinkedIn",
    "Email marketing", "Gestion de projets digitaux", "Refonte & optimisation web",
    "Coordination de partenaires", "Veille & reporting"
  ];
  
  const tools = [
    "Canva", "Photoshop", "CapCut", "WordPress", "Prestashop", 
    "Brevo", "Mailjet", "ActiveTrail", "Monday", "Pack Office", "Python", "Lovable"
  ];

  const softSkills = [
    "Structuration stratégique", "Sens du détail", "Autonomie", 
    "Force de proposition", "Coordination d’équipes", "Vision business"
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-deep-blue mb-4">Expertise & Compétences</h2>
          <div className="h-1 w-20 bg-accent-blue rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg text-deep-blue">
                <TargetIcon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Hard Skills</h3>
            </div>
            <ul className="space-y-3">
              {hardSkills.map(skill => (
                <li key={skill} className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg text-deep-blue">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Outils</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map(tool => (
                <span key={tool} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-600">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg text-deep-blue">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Soft Skills</h3>
            </div>
            <ul className="space-y-3">
              {softSkills.map(skill => (
                <li key={skill} className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const projects = [
    {
      title: "Création de mon site vitrine professionnel",
      context: "Dans le cadre de ma recherche de CDI, j’ai conçu un site vitrine personnel afin de structurer mon positionnement marketing.",
      role: "Définition du positionnement, architecture, rédaction, UX, déploiement via Lovable.",
      objective: "Créer un support professionnel clair, cohérent et orienté conversion.",
      tags: ["UX/UI", "Content Strategy", "Personal Branding"]
    },
    {
      title: "Stratégie de Content Marketing B2B",
      context: "Optimisation de la présence LinkedIn pour une entreprise technologique afin de générer des leads qualifiés.",
      role: "Audit, calendrier éditorial, rédaction de posts à forte valeur ajoutée, analyse de performance.",
      objective: "Augmenter l'engagement de 40% et doubler le nombre de leads entrants via LinkedIn.",
      tags: ["LinkedIn", "Copywriting", "Lead Gen"]
    },
    {
      title: "Refonte de plateforme E-commerce",
      context: "Modernisation d'un site Prestashop pour améliorer le taux de conversion et l'expérience utilisateur.",
      role: "Coordination des développeurs, optimisation SEO on-page, refonte des fiches produits.",
      objective: "Réduire le taux de rebond de 25% et augmenter le panier moyen.",
      tags: ["Prestashop", "SEO", "Project Management"]
    }
  ];

  return (
    <div className="min-h-screen selection:bg-accent-blue/30">
      <Header />
      
      <main>
        <Hero />

        <section id="about" className="section-padding bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-deep-blue overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/apolline/800/800" 
                  alt="Apolline Bellaclas" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-slate-900">Disponible pour CDI</span>
                </div>
                <p className="text-xs text-slate-500">Prête à relever de nouveaux défis digitaux</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-deep-blue mb-6 tracking-tight">À propos de moi</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  J’accompagne la visibilité et la génération de leads à travers des dispositifs digitaux structurés et performants. 
                  Ma vision est résolument orientée business : chaque contenu, chaque campagne doit servir un objectif concret.
                </p>
                <p>
                  Mon approche repose sur la <strong>clarté</strong>, la <strong>rigueur</strong> et l'<strong>efficacité</strong>. 
                  Que ce soit pour une refonte de site, une stratégie de contenu LinkedIn ou le pilotage de projets complexes, 
                  je m'attache à créer de la valeur durable pour les marques B2B.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="text-2xl font-bold text-deep-blue mb-1">Stratégie</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Vision 360°</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="text-2xl font-bold text-deep-blue mb-1">Contenus</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Engagement B2B</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl font-bold text-deep-blue mb-4">Projets Sélectionnés</h2>
                <p className="text-slate-500 max-w-md">Une sélection de travaux illustrant mon expertise en marketing digital et gestion de projets.</p>
              </div>
              <div className="h-px flex-1 bg-slate-200 mx-8 hidden md:block" />
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">03 Projets</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <ProjectCard key={project.title} {...project} index={idx} />
              ))}
            </div>
          </div>
        </section>

        <Skills />

        <section id="contact" className="section-padding bg-deep-blue text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-blue/10 skew-x-12 translate-x-1/4" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Prêt à structurer votre stratégie digitale ?</h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Je suis actuellement à la recherche d'un CDI en tant que Chargée de Marketing Digital. 
                Discutons de vos projets et de la manière dont je peux y contribuer.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="mailto:contact@example.com" className="bg-white text-deep-blue px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  Envoyer un email
                </a>
                <a href="https://linkedin.com" target="_blank" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-3">
                  <Linkedin className="w-5 h-5" />
                  Profil LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-bold text-deep-blue text-xl">Apolline Bellaclas</span>
            <span className="text-sm text-slate-500">© 2026 — Portfolio Professionnel</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-deep-blue transition-colors">À propos</a>
            <a href="#projects" className="hover:text-deep-blue transition-colors">Projets</a>
            <a href="#skills" className="hover:text-deep-blue transition-colors">Compétences</a>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            DESIGNED FOR PERFORMANCE & CLARITY
          </div>
        </div>
      </footer>
    </div>
  );
}
