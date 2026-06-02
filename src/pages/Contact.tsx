import { motion } from 'motion/react';
import { Mail, Linkedin, Download, Send, MapPin, Phone, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-48 md:pt-60 pb-20 bg-bg-light min-h-screen">
      <section className="max-w-[1200px] mx-auto px-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-black text-deep-blue mb-6 tracking-tighter leading-[1.1]">Contact</h1>
          <p className="text-lg md:text-xl text-text-gray leading-relaxed font-medium max-w-2xl">
            Une question sur mon travail de recherche, une proposition de collaboration ou simplement envie d'échanger sur le futur du web ?
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-20 px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="grid gap-8">
                {[
                  { icon: <Mail className="w-6 h-6" />, title: "Email", value: "bellaclas.a@gmail.com", link: "mailto:bellaclas.a@gmail.com" },
                  { icon: <Linkedin className="w-6 h-6" />, title: "LinkedIn", value: "Apolline Bellaclas", link: "https://www.linkedin.com/in/apolline-bellaclas/" },
                  { icon: <MapPin className="w-6 h-6" />, title: "Localisation", value: "Île-de-France, France", link: null },
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="p-4 bg-bg-light rounded-xl text-light-blue group-hover:bg-deep-blue group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-gray mb-1">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target={item.link.startsWith('http') ? "_blank" : undefined}
                          rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="text-lg font-semibold text-deep-blue hover:text-light-blue transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-deep-blue">{item.value}</p>
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
                className="p-8 rounded-[2rem] bg-deep-blue text-white relative overflow-hidden shadow-2xl"
              >
                <h3 className="text-xl font-black mb-6">Axes d'Échange</h3>
                <ul className="space-y-4">
                  {[
                    "Mémoire de Master & Recherche",
                    "Expérimentations NoCode & IA",
                    "Stratégie de Contenu Digitale",
                    "Innovation & UX Design"
                  ].map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-white/80 font-medium text-sm">
                      <CheckCircle2 className="w-4 h-4 text-light-blue" />
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
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100"
            >
              <h3 className="text-2xl md:text-3xl font-black text-deep-blue mb-8 leading-tight">Envoyez-moi un message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-gray ml-2">Nom complet</label>
                  <input 
                    type="text" 
                    placeholder="Votre nom"
                    className="w-full px-6 py-4 rounded-xl bg-bg-light border-none focus:ring-4 focus:ring-light-blue/10 transition-all outline-none font-medium text-deep-blue placeholder:text-slate-300 text-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-gray ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="votre@email.com"
                    className="w-full px-6 py-4 rounded-xl bg-bg-light border-none focus:ring-4 focus:ring-light-blue/10 transition-all outline-none font-medium text-deep-blue placeholder:text-slate-300 text-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-gray ml-2">Votre message</label>
                  <textarea 
                    rows={4}
                    placeholder="Votre message ou question..."
                    className="w-full px-6 py-4 rounded-xl bg-bg-light border-none focus:ring-4 focus:ring-light-blue/10 transition-all outline-none resize-none font-medium text-deep-blue placeholder:text-slate-300 text-sm"
                  ></textarea>
                </div>
                <button className="btn-primary w-full flex items-center justify-center gap-3 group py-4 text-sm">
                  Envoyer
                  <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
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
