# Nouvelle étape de développement de notre app

Nous avons bougé l'écran d'édition de facturation dans un sous-composant `/src/views/EditBill.vue`.
Ce qui nous laisse le loisir de modifier le composant principal `App.vue` afin de créer l'interface complète de notre application (voir capture jointe).

- Ajouter une sidebar (bootstrap-vue)
- Ajouter le logo (voir fichier logo dans `src/assets/`)
- créer un composant qui incluera le code pour un élément de navigation (ex: > lien)
- Ce composant recevra 3 données :

 ```js
 //exemple d'objet lien
 {
   name: 'Dashboard',
   path: '/',
   active: true
 }
 ```
