📝 Angular Articles : TP AngularJS

Bienvenue sur ce projet Angular conçu pour gérer, publier et explorer des articles en toute simplicité.
Ce repository réunit une application Angular et son API dédiée en NodeJS pour un environnement complet.
🚀 Démarrer le projet
Prérequis

    Node.js et npm installés sur votre machine

    Angular CLI installé globalement :

   
    npm install -g @angular/cli

Installation de l’application


git clone https://github.com/Raphael-Jolivel/AngularJS-Articles
cd Projet-Angular
npm install
npm start

Accédez ensuite à l’application via :
http://localhost:4200
Installation et démarrage de l’API


git clone https://github.com/Chocolaterie/ApiArticle.git
cd ApiArticle
npm install
npm start

L’API sera accessible sur :
http://localhost:3000
🗂️ Structure du projet

public/ : ressources statiques (icônes, images)

src/app/classes/ : modèles TypeScript (Article, User)

src/app/components/ : composants réutilisables (footer, gardes)

src/app/pages/ : pages principales (articles, authentification)

src/app/services/ : logique métier & API

angular.json, package.json : configuration Angular et dépendances

README.md : documentation du projet

🏷️ Fonctionnalités clés
👤 Gestion des utilisateurs

Création/mock de compte avec token sauvegardé en localStorage

Connexion / Déconnexion

Accès sécurisé aux fonctionnalités avancées

Redirections automatiques si non autorisé

Comptes de test disponibles :

        isaac@gmail.com | password

        tata@gmail.com | 123456

        toto@gmail.com | 12345

📰 Gestion des articles

Liste publique, consultation, création, édition & suppression d’articles

Validation de formulaire (sauf image facultative)

Vue détaillée : titre, image, description, auteur

Gestion accessible par tout utilisateur connecté

⚙️ Outils et administration

Page /manage pour éditer/supprimer tous les articles

API réinitialisée à chaque redémarrage pour tester facilement

🧭 Navigation simplifiée

Footer universel accédant rapidement à :

Connexion / Déconnexion

Accueil (articles)

Publier un article

Gestion des articles

💡 Particularités techniques

Responsive : adaptation sur mobile, tablette, desktop

Interface claire : formulaires en temps réel

Drois égaux : tous les utilisateurs connectés peuvent gérer les articles

👑 Auteur

Projet développé par Raphaël Jolivel-Savage.