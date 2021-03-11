
# Prochaine étape d'intégration du store dans l'application

Intégrer l'édition d'une facture dans EditBill.Vue

1. charger la donnée du store (une bill identifiée par son id). l'id est communiqué par les données de la route (this.$router.params ou si on utilise props: true dans la route, on y accède directement par une prop id: 1). 

2. grace à l'id, on va récupérer la donnée de la facture dans le store en utilisant une action

```js
  this.$store.dispatch('bill/getBill', this.id)
```

Cette action de chargement des données doit intervenir au chargement de la route.
On va utiliser les hook d'un composant pour capturer le moment de la création/initialisation de notre vue.

Pour pouvoir éditer les données, le composant doit 'copier' ces données dans une référence de variable locale, comme un formulaire qu'on va appeler 'form'.

Une fois le chargement terminé, les données sont en place, le formulaire est éditable (variable form).
Nous allons ajouter un bouton de sauvegarde des données.
Qui aura pour action de faire la démarche inverse : envoyer les données locales du composant 'form'
vers le store grace à une autre action d'enregistrement

```js
  this.$store.dispatch('bill.saveBill', this.form)
```


Une fois qu'on a fait ça, soit on quitte la vue et on revient à la liste, soit on reste dans la vue.