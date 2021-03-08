# Exercice écran de saisie d'une facture

Créer une interface de saisie de facturation dans une application compilée avec vue/cli.

La feuille de style est celle de bootstrap,
les icônes sont de font-awesome.com

- Le projet ci-joint sert de point de départ.
- La capture d'écran jointe sert de référence à la vue que vous devez créer.
- Données de base d'une facture à utiliser dans le projet:

```js
{
  bill: {
    id: 1,
    date: '08/03/2021, 17:19:04',
    description: 'Facture de test',
    client: {
      idclient: 1,
      firstname: 'Client1',
      lastname: 'Exemple'
    },
    prestations: [{
      description: 'Ma première presta facturée',
      qty: 1,
      price: 450.00
    }],
    discount: 0.00,
    paid: 0.00
  }
}
```
