---
title: "MapMyAI"
description: "Outil gratuit qui analyse 500+ cas d'usage d'IA générative et recommande les 3 agents IA les plus pertinents pour votre entreprise. Génère automatiquement des plans de projet détaillés. Exporte le rapport complet au format PDF."
client: "Agent de Recommandation - Conseil en IA"
industry: "IA / Conseil"
projectDate: 2025-11-25
challenge: "Les entreprises ne savent pas par où commencer avec l'IA générative. Elles perdent du temps à explorer des cas d'usage non adaptés à leur contexte."
solution: "Un outil intelligent qui recommande les 3 meilleurs cas d'usage d'IA en quelques minutes, basé sur le secteur, la fonction, la taille et les objectifs de l'entreprise. Génération automatique de plans de projet détaillés."
deliverables: [
  "Système de recommandation intelligent",
  "Génération automatique de plans de projet détaillés",
  "Interface web moderne avec barre de progression",
  "Export de rapports en Markdown et PDF",
  "Optimisation des coûts avec système de cache",
  "Sauvegarde des sessions pour récupération ultérieure"
]
technologies: ["Python", "FastAPI", "LangGraph", "Next.js", "Qdrant", "Claude"]
results: "Outil en production qui génère des leads qualifiés pour conseil en IA. Temps de réponse 30-40 secondes, système de recommandation calibré, tests complets. Seul outil gratuit avec plans de projet détaillés."
image: "/portfolio/questionnaire-short.png"
demoUrl: "/fr/portfolio/mapmyai"
category: ["ai-agent"]
tags: ["LangGraph", "RAG", "Agent de Recommandation", "FastAPI", "Next.js"]
language: "fr"
featured: true
---

## MapMyAI - Assistant de Conseil en IA

## 🎯 Contexte

**Problème identifié :** Les entreprises ne savent pas par où commencer avec l'IA générative. Elles perdent du temps à explorer des cas d'usage non adaptés à leur contexte.

**Solution :** Un agent de recommandation intelligent qui recommande les 3 meilleurs cas d'usage d'IA en 2 minutes, basé sur le secteur, la fonction, la taille et les objectifs de l'entreprise.

## 🚀 Fonctionnalités

### Recommandations Personnalisées

- **Matching intelligent** : Le système analyse votre profil en tenant compte du secteur (40%), des objectifs (30%), de la taille (20%) et des prérequis (10%)
- **Recherche dans 500+ cas d'usage** : Base de données complète de cas d'usage réels pour trouver les meilleures correspondances
- **Sélection des 3 meilleurs** : Tri et déduplication automatiques pour vous proposer uniquement les options les plus pertinentes

### Génération de Plans de Projet

- **Plans détaillés** : Chaque recommandation inclut les étapes, la durée estimée, les critères de succès, les risques et les bénéfices
- **Optimisation des coûts** : Système de cache pour éviter de régénérer les mêmes plans et réduire les coûts
- **Génération simultanée** : Les 3 plans sont générés en parallèle pour un résultat rapide

### Export Professionnel

- **Format Markdown** : Rapport structuré téléchargeable pour documentation interne
- **Format PDF** : Version PDF prête à partager avec votre équipe
- **Sauvegarde de session** : Vous pouvez récupérer vos résultats plus tard grâce à un identifiant unique

### Expérience Utilisateur

- **Barre de progression interactive** : Suivez l'avancement en temps réel avec 8 étapes visuelles
- **Multilingue FR/EN** : Détection automatique de la langue et traduction des résultats
- **Mode sombre** : Interface moderne avec thème clair/sombre

## 🏗️ Comment ça fonctionne

### Processus en 8 étapes

Le système suit un processus automatisé en 8 étapes :

1. **Validation du profil** : Vérification des informations fournies
2. **Recherche dans la base** : Analyse de 500+ cas d'usage pour trouver les 20 plus pertinents
3. **Sélection des 3 meilleurs** : Tri et classement pour identifier les 3 meilleures options
4. **Enrichissement** : Ajout de titres et résumés pour chaque recommandation
5. **Génération des plans** : Création automatique des plans de projet (avec cache pour optimiser)
6. **Traduction** : Adaptation en français ou anglais selon la langue détectée
7. **Compilation** : Mise en forme du rapport final
8. **Sauvegarde** : Stockage pour récupération ultérieure

### Sécurité et Performance

- **Protection contre les abus** : Limitation du nombre de requêtes par utilisateur
- **Validation des données** : Vérification stricte de toutes les entrées
- **Optimisation des coûts** : Système de cache pour éviter les régénérations inutiles
- **Traçabilité** : Suivi de toutes les opérations pour le debugging

### Interface Utilisateur

- **Questionnaire simple** : 4 questions pour comprendre votre besoin
- **Barre de progression** : Suivi visuel de l'avancement en temps réel
- **Affichage des résultats** : Présentation claire des recommandations et plans
- **Gestion des erreurs** : Messages clairs en cas de problème

## 📊 Résultats

### Performance

- **Temps de réponse** : 30-40 secondes pour générer les 3 recommandations complètes avec plans
- **Précision** : Système de recommandation calibré et testé sur de nombreux cas d'usage
- **Fiabilité** : Tests complets pour garantir la qualité du service
- **Couverture** : Tous les aspects sont testés (API, recommandations, génération, export)

### Impact Business

- **Génération de leads qualifiés** : Les entreprises qui utilisent l'outil sont déjà intéressées par l'IA
- **Différenciation** : Seul outil gratuit qui génère des plans de projet détaillés
- **Conversion** : Les rapports exportables incitent les utilisateurs à prendre contact pour aller plus loin

## 🛠️ Défis Résolus

### 1. Orchestration du Processus

**Défi :** Coordonner 8 étapes différentes qui doivent s'enchaîner correctement

**Solution :** Utilisation d'un système de workflow qui garantit que chaque étape se déroule dans le bon ordre

### 2. Optimisation des Coûts

**Défi :** Réduire les coûts liés à la génération de plans par l'IA

**Solution :** Système de cache intelligent qui évite de régénérer les mêmes plans pour des profils similaires

### 3. Gestion des Erreurs

**Défi :** Gérer les erreurs potentielles à chaque étape du processus

**Solution :** Système de gestion d'erreurs robuste avec messages clairs pour l'utilisateur, en français et en anglais

### 4. Expérience Utilisateur Pendant l'Attente

**Défi :** 30-40 secondes d'attente peuvent sembler longues sans feedback

**Solution :** Barre de progression interactive qui montre l'avancement en temps réel avec des messages explicatifs à chaque étape

## 🔧 Technologies Utilisées

**Backend :**

- Python pour la logique métier
- FastAPI pour l'API
- LangGraph pour orchestrer le workflow
- Claude Sonnet 4 pour la génération de plans
- Qdrant pour la recherche dans la base de cas d'usage
- SQLite pour sauvegarder les sessions

**Frontend :**

- Next.js pour l'interface web
- React avec TypeScript pour la robustesse
- Tailwind CSS pour le design
- Tests complets pour garantir la qualité

**Infrastructure :**

- Base de données pour les sessions et le cache
- Configuration adaptée selon l'environnement (développement, staging, production)

## 💡 Enseignements

### Ce qui a bien fonctionné

- **Workflow structuré** : L'organisation en étapes claires facilite le développement et le debugging
- **Système de cache** : Réduction significative des coûts en évitant les régénérations inutiles
- **Barre de progression** : L'expérience utilisateur est améliorée grâce au feedback visuel en temps réel
- **Validation des données** : Sécurité renforcée et code plus clair

### Améliorations futures

- **Scalabilité** : Amélioration pour supporter plus d'utilisateurs simultanés
- **Sécurité renforcée** : Ajout de headers de sécurité supplémentaires
- **Analytics** : Suivi des patterns de recommandations pour améliorer l'algorithme
- **Optimisation continue** : Tests A/B pour affiner le système de recommandation

## 🔗 Liens

- **Demo live** : [mapmyai.app](https://mapmyai.app)
- **Documentation** : Documentation complète disponible
- **Tests** : Tests complets pour garantir la qualité

---

**Durée du projet :** 2 semaines  
**Rôle :** Développement complet (backend + frontend + déploiement)  
**Résultat :** Agent de recommandation production-ready avec génération de plans POC IA
