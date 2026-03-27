import { motion } from 'motion/react';
import { Mail, Linkedin, Download, Send, MapPin, Phone, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-pure-black mb-8 tracking-tight">Contact</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            N’hésitez pas à me contacter pour échanger sur vos projets, collaborations ou toute autre demande.
          </p>
        </motion.div>
      </section>

      <section className="section-gray">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Mail className="w-6 h-6" />, title: "Email", value: "bellaclas.a@gmail.com", link: "mailto:bellaclas.a@gmail.com" },
                  { icon: <Linkedin className="w-6 h-6" />, title: "LinkedIn", value: "Profil Professionnel", link: "https://www.linkedin.com/in/apolline-bellaclas/" },
                  { icon: <MapPin className="w-6 h-6" />, title: "Localisation", value: "Île-de-France", link: null },
                  { icon: <Download className="w-6 h-6" />, title: "Curriculum Vitae", value: "Télécharger mon CV", link: "#", isButton: true }
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 card-style group"
                  >
                    <div className="p-3 bg-slate-50 rounded-lg w-fit text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-pure-black mb-2">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target={item.link.startsWith('http') ? "_blank" : undefined}
                        rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="text-slate-600 hover:text-primary-blue transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-600 font-medium">{item.value}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 rounded-lg bg-slate-50 border border-slate-100 text-pure-black relative overflow-hidden shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-6 relative z-10">Prête pour de nouveaux défis</h3>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-primary-blue" />
                    Expertise Marketing Digital
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-primary-blue" />
                    Création de contenu impactant
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-primary-blue" />
                    Gestion de projets agiles
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-12 card-style relative"
            >
              <h3 className="text-3xl font-bold text-pure-black mb-8">M'envoyer un message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Nom complet</label>
                    <input 
                      type="text" 
                      placeholder="Jean Dupont"
                      className="w-full px-6 py-4 rounded-md bg-slate-50 border border-slate-100 focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="jean@exemple.com"
                      className="w-full px-6 py-4 rounded-md bg-slate-50 border border-slate-100 focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10 transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Votre message ici..."
                    className="w-full px-6 py-4 rounded-md bg-slate-50 border border-slate-100 focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10 transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <button className="btn-primary w-full flex items-center justify-center gap-3 group">
                  Envoyer le message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
