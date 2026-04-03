import { motion } from 'motion/react';
import { Mail, Linkedin, Download, Send, MapPin, Phone, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-48 pb-24 bg-bg-light min-h-screen">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="huge-title text-deep-blue">Contact</h1>
          <p className="sub-title">
            Une question sur mon travail de recherche, une proposition de collaboration ou simplement envie d'échanger sur le futur du web ?
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-32">
            {/* Contact Info */}
            <div className="space-y-20">
              <div className="grid gap-12">
                {[
                  { icon: <Mail className="w-8 h-8" />, title: "Email", value: "bellaclas.a@gmail.com", link: "mailto:bellaclas.a@gmail.com" },
                  { icon: <Linkedin className="w-8 h-8" />, title: "LinkedIn", value: "Apolline Bellaclas", link: "https://www.linkedin.com/in/apolline-bellaclas/" },
                  { icon: <MapPin className="w-8 h-8" />, title: "Localisation", value: "Île-de-France, France", link: null },
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="flex items-start gap-8 group"
                  >
                    <div className="p-5 bg-bg-light rounded-2xl text-light-blue group-hover:bg-deep-blue group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-gray mb-2">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target={item.link.startsWith('http') ? "_blank" : undefined}
                          rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="text-2xl font-black text-deep-blue hover:text-light-blue transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-2xl font-black text-deep-blue">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-12 rounded-[2rem] bg-deep-blue text-white relative overflow-hidden shadow-2xl"
              >
                <h3 className="text-3xl font-black mb-8">Axes d'Échange</h3>
                <ul className="space-y-6">
                  {[
                    "Mémoire de Master & Recherche",
                    "Expérimentations NoCode & IA",
                    "Stratégie de Contenu Digitale",
                    "Innovation & UX Design"
                  ].map((skill) => (
                    <li key={skill} className="flex items-center gap-4 text-white/80 font-bold">
                      <CheckCircle2 className="w-6 h-6 text-light-blue" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100"
            >
              <h3 className="text-4xl font-black text-deep-blue mb-10 leading-tight">Envoyez-moi un message</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-gray ml-2">Nom complet</label>
                  <input 
                    type="text" 
                    placeholder="Votre nom"
                    className="w-full px-8 py-6 rounded-2xl bg-bg-light border-none focus:ring-4 focus:ring-light-blue/10 transition-all outline-none font-bold text-deep-blue placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-gray ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="votre@email.com"
                    className="w-full px-8 py-6 rounded-2xl bg-bg-light border-none focus:ring-4 focus:ring-light-blue/10 transition-all outline-none font-bold text-deep-blue placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-gray ml-2">Votre message</label>
                  <textarea 
                    rows={6}
                    placeholder="Votre message ou question..."
                    className="w-full px-8 py-6 rounded-2xl bg-bg-light border-none focus:ring-4 focus:ring-light-blue/10 transition-all outline-none resize-none font-bold text-deep-blue placeholder:text-slate-300"
                  ></textarea>
                </div>
                <button className="btn-primary w-full flex items-center justify-center gap-4 group py-6">
                  Envoyer
                  <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
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
