# Portfolio Professionnel - Apolline Bellaclas

Ce projet est un portfolio moderne conçu avec React, Vite et Tailwind CSS.

## 🚀 Déploiement Rapide

### 1. GitHub
1. Créez un nouveau dépôt sur votre compte GitHub.
2. Initialisez git dans ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/VOTRE_NOM/VOTRE_DEPOT.git
   git push -u origin main
   ```

### 2. Netlify
1. Connectez-vous à [Netlify](https://www.netlify.com/).
2. Cliquez sur **"Add new site"** > **"Import an existing project"**.
3. Sélectionnez votre dépôt GitHub.
4. Les paramètres de build devraient être détectés automatiquement grâce au fichier `netlify.toml` :
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Cliquez sur **"Deploy site"**.

## 🛠️ Technologies utilisées
- **React 19**
- **Vite** (Build tool ultra-rapide)
- **Tailwind CSS 4** (Styling)
- **Motion** (Animations)
- **Lucide React** (Icônes)

## 📁 Structure du projet
- `src/App.tsx` : Composant principal contenant tout le contenu du portfolio.
- `src/index.css` : Configuration de la charte graphique et de Tailwind.
- `netlify.toml` : Configuration pour le déploiement sur Netlify (gestion des redirections SPA).
