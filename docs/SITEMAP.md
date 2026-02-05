# Sitemap et SEO - ERTF Habitat

## 📋 Vue d'ensemble

Ce projet utilise Next.js 13+ avec App Router pour générer automatiquement le sitemap.xml et robots.txt lors du build.

## 🗺️ Sitemap

### Configuration
- **Domaine**: `https://ertfhabitat.fr`
- **Fichier source**: `app/sitemap.ts`
- **URL publique**: `https://ertfhabitat.fr/sitemap.xml`

### Pages incluses

#### Pages principales (3)
- **Accueil** - `https://ertfhabitat.fr` (priorité: 1.0)
- **Contact** - `https://ertfhabitat.fr/contact` (priorité: 0.8)
- **Villes** - `https://ertfhabitat.fr/ville` (priorité: 0.9)

#### Pages villes Gironde (10)
Toutes avec priorité 0.85 et fréquence de mise à jour mensuelle :
- bordeaux, le-bouscat, merignac, pessac, talence
- villenave-d-ornon, gradignan, begles, floirac, cenon

#### Pages services (5)
Toutes avec priorité 0.9 et fréquence de mise à jour mensuelle :
- isolation-thermique-exterieure
- isolation-thermique-interieure
- enduit-facade
- ravalement
- bardage

#### Pages légales (3)
- **Mentions légales** - `https://ertfhabitat.fr/mentions-legales` (priorité: 0.3)
- **CGV** - `https://ertfhabitat.fr/cgv` (priorité: 0.3)
- **Merci** - `https://ertfhabitat.fr/merci` (priorité: 0.2)

## 🤖 Robots.txt

### Configuration
- **Fichier source**: `app/robots.ts`
- **URL publique**: `https://ertfhabitat.fr/robots.txt`

### Règles
- **Autorisé**: Toutes les pages (`/`)
- **Interdit**: `/private/`, `/admin/`, `/_next/`, `/api/`
- **Sitemap**: `https://ertfhabitat.fr/sitemap.xml`

## 🔧 Scripts de test

### Vérification du contenu
```bash
node scripts/check-sitemap-content.js
```

### Test de génération au build
```bash
node scripts/test-sitemap.js
```

## 🚀 Déploiement

Le sitemap et robots.txt sont générés automatiquement lors du build Next.js :

```bash
npm run build
```

Les fichiers seront disponibles aux URLs :
- `https://ertfhabitat.fr/sitemap.xml`
- `https://ertfhabitat.fr/robots.txt`

## 📝 Maintenance

### Ajouter une nouvelle page ville
1. Créer le fichier `app/ville/nouvelle-ville/page.tsx`
2. Ajouter `'nouvelle-ville'` dans le tableau des villes de `app/sitemap.ts`

### Ajouter un nouveau service
1. Créer le fichier `app/services/nouveau-service/page.tsx`
2. Ajouter `'nouveau-service'` dans le tableau `services` de `app/sitemap.ts`

### Modifier les priorités
Éditer le fichier `app/sitemap.ts` et ajuster les valeurs de `priority` :
- **1.0** : Page d'accueil
- **0.9** : Pages services et secteurs principaux
- **0.85** : Pages secteurs spécifiques
- **0.8** : Page contact
- **0.3** : Pages légales
- **0.2** : Pages de remerciement

## 🔍 Vérification SEO

### Google Search Console
1. Soumettre le sitemap : `https://ertfhabitat.fr/sitemap.xml`
2. Vérifier l'indexation des pages
3. Surveiller les erreurs d'exploration

### Outils de test
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)

## 📊 Statistiques actuelles

- **Total URLs**: 21
- **Pages principales**: 3
- **Pages villes**: 10
- **Pages services**: 5
- **Pages légales**: 3
- **Domaine**: https://ertfhabitat.fr ✅
