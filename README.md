# 📝 Angular Articles — TP AngularJS

Bienvenue sur **Angular Articles**, un projet complet permettant de **gérer, publier et explorer des articles** facilement.  
Ce repository combine **une application Angular** et **une API NodeJS**, offrant un environnement de développement complet.

---

## 🚀 Démarrer le projet

### ⚙️ Prérequis

- [Node.js](https://nodejs.org/) et **npm** installés sur votre machine  
- **Angular CLI** installé globalement :

```
npm install -g @angular/cli
````
🧩 Installation de l’application
```
git clone https://github.com/Raphael-Jolivel/AngularJS-Articles
cd Projet-Angular
npm install
npm start
```
Accédez ensuite à l’application via :
👉 http://localhost:4200
🖥️ Installation et démarrage de l’API
```
git clone https://github.com/Chocolaterie/ApiArticle.git
cd ApiArticle
npm install
npm start
```
L’API sera disponible à l’adresse :
👉 http://localhost:3000

🗂️ Structure du projet
```
public/                → Ressources statiques (icônes, images)
src/app/classes/       → Modèles TypeScript (Article, User)
src/app/components/    → Composants réutilisables (footer, gardes)
src/app/pages/         → Pages principales (articles, authentification)
src/app/services/      → Logique métier & appels API
angular.json           → Configuration Angular
package.json           → Dépendances et scripts
README.md              → Documentation du projet
```

🏷️ Fonctionnalités clés

👤 Gestion des utilisateurs

- Création/mock de comptes avec token stocké dans le localStorage

- Connexion / Déconnexion

- Accès sécurisé aux fonctionnalités avancées

- Redirection automatique si non autorisé

Comptes de test disponibles :
```
isaac@gmail.com | password

tata@gmail.com | 123456

toto@gmail.com | 12345

```
📰 Gestion des articles

- Liste publique, consultation, création, édition & suppression d’articles

- Validation de formulaire (image facultative)

- Vue détaillée : titre, image, description, auteur

- Gestion accessible à tout utilisateur connecté

⚙️ Outils et administration

- Page /manage pour éditer/supprimer tous les articles

- API réinitialisée à chaque redémarrage pour faciliter les tests

🧭 Navigation simplifiée

- Footer universel donnant un accès rapide à :

- Connexion / Déconnexion

- Accueil (liste des articles)

- Publication d’un article

- Gestion des articles

💡 Particularités techniques

- Responsive design : compatible mobile, tablette et desktop

- Interface fluide : formulaires avec validation en temps réel

- Égalité des droits : tous les utilisateurs connectés peuvent gérer les articles

👑 Auteur

Projet développé par Raphaël Jolivel-Savage
