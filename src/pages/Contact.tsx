import { motion } from 'motion/react';
import { Mail, Linkedin, Download, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-deep-blue mb-8 tracking-tight">Contact</h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Je suis ouverte aux opportunités professionnelles pour un <strong>CDI dès fin février / début mars 2026</strong>. 
            N’hésitez pas à me contacter pour échanger sur vos projets.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 bg-blue-50 rounded-xl w-fit text-deep-blue mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-deep-blue mb-2">Email</h4>
                <a href="mailto:bellaclas.a@gmail.com" className="text-slate-600 hover:text-accent-blue transition-colors">
                  bellaclas.a@gmail.com
                </a>
              </div>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 bg-blue-50 rounded-xl w-fit text-deep-blue mb-6">
                  <Linkedin className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-deep-blue mb-2">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/apolline-bellaclas/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-accent-blue transition-colors"
                >
                  Profil Professionnel
                </a>
              </div>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 bg-blue-50 rounded-xl w-fit text-deep-blue mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-deep-blue mb-2">Localisation</h4>
                <p className="text-slate-600">Île-de-France</p>
              </div>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 bg-blue-50 rounded-xl w-fit text-deep-blue mb-6">
                  <Download className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-deep-blue mb-2">Curriculum Vitae</h4>
                <button className="text-accent-blue font-bold hover:underline">Télécharger mon CV</button>
              </div>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-deep-blue text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Prête pour de nouveaux défis</h3>
              <p className="text-blue-100/80 leading-relaxed relative z-10">
                Recherche active d'un poste de <strong>Chargée marketing / Cheffe de projet marketing digital</strong> en Île-de-France avec possibilité de télétravail.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-bold text-deep-blue mb-8">M'envoyer un message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Nom complet</label>
                  <input 
                    type="text" 
                    placeholder="Jean Dupont"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="jean@exemple.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Votre message ici..."
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 transition-all outline-none resize-none"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-deep-blue text-white rounded-2xl font-bold hover:bg-accent-blue transition-all shadow-lg flex items-center justify-center gap-3 group">
                Envoyer le message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
