import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Eye, FileText, ChevronDown, ArrowRight, Target, Star, Zap, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-hidden bg-bg-light">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-deep-blue pt-32 pb-20 md:pt-40 md:pb-32 px-10">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-light-blue/10 to-transparent pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-light-blue/5 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 lg:gap-0 items-center">
            {/* COLONNE GAUCHE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <span className="font-mono text-slate-400 text-xs uppercase tracking-[0.4em] mb-4 block">
                Portfolio professionnel
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-2 tracking-tight">
                Apolline Bellaclas
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-light-blue mb-8 tracking-tight">
                Future manager en transformation numérique
              </h2>
              <p className="text-lg text-slate-300 mb-12 leading-relaxed max-w-xl">
                Je conçois des projets digitaux concrets, du marketing à la data, en m'appuyant sur le NoCode et l'IA pour aller plus vite sans rogner sur la qualité.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12">
                {/* CTA Button */}
                <a 
                  href="https://res.cloudinary.com/delgsyvkc/image/upload/v1775209438/CV_Apolline_Bellaclas_jthzlo.png" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 text-base font-semibold text-white rounded-2xl bg-gradient-to-r from-light-blue to-deep-blue hover:from-light-blue/90 hover:to-deep-blue/90 shadow-xl shadow-light-blue/20 transition-all active:scale-95 group"
                >
                  <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Voir mon CV
                </a>

                {/* QR Code Container */}
                <div className="flex items-center gap-4 group">
                  <div className="bg-white p-2.5 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105">
                    <img 
                      src="https://res.cloudinary.com/delgsyvkc/image/upload/v1778150150/Untitled_e7mnb6.png" 
                      alt="Portfolio QR Code" 
                      className="w-20 h-20 md:w-24 md:h-24 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-[10px] md:text-xs text-slate-400 font-medium uppercase tracking-widest leading-relaxed max-w-[100px]">
                    Scanner pour accéder au portfolio
                  </p>
                </div>
              </div>
            </motion.div>

            {/* COLONNE DROITE - PHOTO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative lg:col-span-3 order-1 lg:order-2 flex justify-center"
            >
              <div className="w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] lg:w-[280px] lg:h-[360px] aspect-[3/4] lg:aspect-auto bg-slate-800 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative z-10">
                <img 
                  src="https://res.cloudinary.com/delgsyvkc/image/upload/v1773394135/Photo_Apolline_Bellaclas.pdf_lftaza.png" 
                  alt="Apolline Bellaclas" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative glows */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-light-blue/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-deep-blue rounded-full blur-[100px] pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 hidden lg:block z-30"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>

        {/* White fade to next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
      </section>

      {/* 2. SECTION "QUI JE SUIS" */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-light-blue font-medium uppercase tracking-[0.4em] text-xs mb-3 block"
            >
              01. PROFIL
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-8 tracking-tight">
              Profil
            </h2>
            <p className="text-lg text-text-gray leading-relaxed font-medium max-w-3xl mx-auto">
              Je suis étudiante en management de la transformation numérique. À travers mes projets, j'explore une idée simple : le NoCode et l'IA ne remplacent pas l'humain, ils le rendent plus efficace, à condition de garder une stratégie claire derrière.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CARD 1 — Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-light-blue/10 flex items-center justify-center text-light-blue mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-deep-blue mb-3">Vision</h4>
              <p className="text-sm text-text-gray leading-relaxed font-medium">
                La technologie doit servir la stratégie, pas l'inverse. Mon truc, c'est de faire le lien entre les deux.
              </p>
            </motion.div>

            {/* CARD 2 — Approche */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-light-blue/10 flex items-center justify-center text-light-blue mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-deep-blue mb-3">Approche</h4>
              <p className="text-sm text-text-gray leading-relaxed font-medium">
                Je commence par écouter le besoin réel, puis je prends le projet en main du début à la fin, quitte à tester plusieurs pistes avant de garder la bonne.
              </p>
            </motion.div>

            {/* CARD 3 — Ma différence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-light-blue/10 flex items-center justify-center text-light-blue mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-deep-blue mb-3">Ma différence</h4>
              <p className="text-sm text-text-gray leading-relaxed font-medium">
                Un parcours à la fois marketing et commercial : je comprends les besoins de com' comme ceux d'une équipe de vente.
              </p>
            </motion.div>

            {/* CARD 4 — Valeur ajoutée */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-light-blue/10 flex items-center justify-center text-light-blue mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-deep-blue mb-3">Valeur ajoutée</h4>
              <p className="text-sm text-text-gray leading-relaxed font-medium">
                Des contenus et des analyses qui ne sont pas juste jolis : ils servent vraiment à prospecter et à décider.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SECTION "MES TRAVAUX" */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="max-w-4xl mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-light-blue font-medium uppercase tracking-[0.4em] text-xs mb-3 block"
            >
              02. ÉTUDES DE CAS
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-6 tracking-tight">
              Deux projets, deux problématiques
            </h2>
            <p className="text-lg text-text-gray leading-relaxed font-medium max-w-2xl">
              Deux projets, deux terrains différents : une analyse de données sur le télétravail, et la conception d'un site vitrine avec un outil NoCode assisté par IA.
            </p>
          </div>

          <div className="space-y-12">
            {/* ETUDE DE CAS 01 — LE TÉLÉTRAVAIL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-deep-blue rounded-[3rem] overflow-hidden p-10 md:p-16 text-white shadow-2xl relative"
            >
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="font-mono text-light-blue text-xs uppercase tracking-[0.4em] mb-4 block">
                    ÉTUDE DE CAS 01 · ANALYSE DATA
                  </span>
                  <h3 className="text-[28px] md:text-[42px] font-bold text-white mb-8 tracking-[-0.02em] leading-tight">
                    Le télétravail : performance & réalité
                  </h3>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl mb-8 italic text-slate-200">
                    "Le télétravail constitue-t-il aujourd'hui un mode de travail performant côté salariés et réellement présent côté entreprises ?"
                  </div>
                  <p className="text-slate-300 mb-10 leading-relaxed">
                    Analyse de trois jeux de données Kaggle — 1 039 offres d'emploi et deux enquêtes salariés — croisant la réalité du marché et le ressenti des salariés.
                  </p>
                  <Link 
                    to="/data" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-deep-blue font-bold rounded-xl hover:bg-light-blue hover:text-white transition-all shadow-xl"
                  >
                    Voir l'analyse complète
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                
                <div className="flex flex-col items-center justify-center text-center bg-white/5 rounded-[2.5rem] p-10 border border-white/5">
                  <span className="text-5xl md:text-7xl font-black text-light-blue mb-2">73,6 % vs 63,8 %</span>
                  <p className="text-sm md:text-base font-medium uppercase tracking-widest text-slate-300">
                    télétravail vs présentiel <br />
                    <span className="opacity-60">(auto-évaluation salariés)</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ETUDE DE CAS 02 — LE PORTFOLIO LOVABLE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] overflow-hidden p-10 md:p-16 text-deep-blue border border-slate-100 shadow-xl relative"
            >
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="font-mono text-light-blue text-xs uppercase tracking-[0.4em] mb-4 block">
                    ÉTUDE DE CAS 02 · NOCODE + IA
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-deep-blue">
                    Conception d'un site vitrine avec Lovable
                  </h3>
                  <div className="bg-light-blue/10 border border-light-blue/20 p-6 rounded-2xl mb-8 italic text-text-gray font-medium">
                    "Un outil NoCode assisté par IA peut-il produire un livrable professionnel sans sacrifier la réflexion stratégique ?"
                  </div>
                  <p className="text-text-gray mb-10 leading-relaxed font-medium">
                    Tester jusqu'où un outil NoCode assisté par IA peut aller pour construire un site vitrine complet. Vite, mais bien.
                  </p>
                  <Link 
                    to="/portfolio" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-deep-blue text-white font-bold rounded-xl hover:bg-light-blue transition-all shadow-xl"
                  >
                    Découvrir le projet
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                
                <div className="relative group">
                  <div className="aspect-video bg-slate-100 rounded-[2rem] overflow-hidden border border-slate-200 shadow-lg">
                    <img 
                      src="https://res.cloudinary.com/delgsyvkc/image/upload/v1778085335/Capture_d_%C3%A9cran_2026-05-06_183517_fnrh2i.png" 
                      alt="Aperçu Lovable" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-deep-blue text-white p-6 rounded-2xl shadow-2xl">
                    <p className="text-3xl font-black mb-0">90%</p>
                    <p className="text-[9px] font-medium uppercase tracking-widest leading-none">Gain de temps</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-[1000px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-deep-blue rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl mb-6 text-white font-bold tracking-tight">Prêt à collaborer ?</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
                N'hésitez pas à me contacter pour discuter de vos projets digitaux ou de mon parcours.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-10 py-4 bg-light-blue text-deep-blue font-bold rounded-xl hover:bg-white transition-all shadow-lg shadow-light-blue/20"
              >
                Me contacter
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
