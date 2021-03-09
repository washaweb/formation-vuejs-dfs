<template>
  <!-- template du composant (HTML) -->
  <section id="app">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 mt-5">
          <h1 class="text-center">Editer une facture</h1>
          <div class="row">
            <div class="row col-6 form-group">
              <label class="col-6 my-auto" for="id">Numéro</label>
              <input type="number" class="form-control col-6" id="id" v-model="bill.id">
            </div>
            <div class="row col-6 form-group">
              <label class="col-6 my-auto" for="description">Description</label>
              <input type="text" class="form-control col-6" id="description" v-model="bill.description">
            </div>
            <div class="row col-6 form-group">
              <label class="col-6 my-auto" for="date">Émise le</label>
              <input type="date" class="form-control col-6" id="date" v-model="bill.date">
            </div>
            <div class="row col-6 form-group">
              <label class="col-6 my-auto" for="client">Client</label>
              <select v-model="bill.client" id="client" class="form-control col-6">
                <option v-for="client in clientList" :key="client.id" :value="client">
                  {{ fullname(client.firstname, client.lastname) }}</option>
              </select>
            </div>
            <div class="row col-6 form-group">
              <label class="col-6 my-auto" for="tva">Soumise TVA</label>
              <input type="checkbox" v-model="bill.tva" class="my-auto" id="tva">
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>Actions</th>
                <th>Prestations</th>
                <th>Quantité</th>
                <th>Montant unitaire</th>
                <th>Montant total</th>
              </tr>
            </thead>
            <tbody>
              <template>
                <tr v-for="(prestation, index) in bill.prestations" :key="index">
                  <td class="d-flex justify-content-between">
                    <span class="btn" @click="ajouterLigne()">➕</span>
                    <span class="btn" @click="supprimerLigne(index)">🗑️</span>
                  </td>
                  <td><input type="text" v-model="prestation.description" class="form-control"></td>
                  <td><input type="number" v-model="prestation.qty" min="1" class="form-control"></td>
                  <td><input type="number" v-model="prestation.price" min="1" class="form-control"></td>
                  <td class="align-middle">{{ totalLigne(prestation.price, prestation.qty) }} €</td>
                </tr>
              </template>
              <tr>
                <td colspan="3"></td>
                <td class="align-middle">Remises (€)</td>
                <td>
                  <input type="number" placeholder="0.00 €" v-model="bill.discount" min="0" class="form-control">
                </td>
              </tr>
              <tr>
                <td colspan="3"></td>
                <td class="align-middle">Déjà payé (€)</td>
                <td>
                  <input type="number" placeholder="0.00 €" v-model="bill.paid" min="0" class="form-control">
                </td>
              </tr>
              <tr>
                <td colspan="3"></td>
                <td>Total HT</td>
                <td>{{ totalHT }} €</td>
              </tr>
              <tr>
                <td colspan="3"></td>
                <td>TVA (20%)</td>
                <td>{{valeurTVA}} €</td>
              </tr>
              <tr>
                <td colspan="3"></td>
                <td>Montant TTC</td>
                <td>{{ totalTTC }} €</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

</template>


<script>
  // controleur du composant
  export default {
    name: 'App',
    //data dans un composant Vue doit être une fonction qui retourne un objet
    data() {
      return {
        bill: {
          id: 209345600,
          date: '2021-03-09',
          description: 'Exercice',
          tva: false,
          client: {
            idclient: 1,
            firstname: 'toto',
            lastname: 'tata'
          },
          prestations: [
            {
              description: 'Étude graphique UX',
              qty: 2,
              price: 450.00
            },
            {
              description: 'Création d\'un site Wordpress',
              qty: 5,
              price: 450.00
            },
            {
              description: 'Hébergement annuel',
              qty: 1,
              price: 250.00
            },
          ],
          discount: 0.00,
          paid: 0.00
        },
        // Liste des clients pour le select
        clientList: [
          {
            idclient: 1,
            firstname: 'toto',
            lastname: 'tata'
          },
          {
            idclient: 2,
            firstname: 'tutu',
            lastname: 'titi'
          },
          {
            idclient: 3,
            firstname: 'popo',
            lastname: 'pupu'
          },
        ]
      }
    },
    methods: {
      fullname(firstname, lastname) {
        return `${firstname} ${lastname}`
      },
      totalLigne(prix, quantite) {
        return prix * quantite
      },
      ajouterLigne() {
        this.bill.prestations.push({
          description: '',
          qty: 1,
          price: 0
        })
      },
      supprimerLigne(indexPrestation) {
        // let finded = this.bill.prestations.findIndex(presta => prestation.description == presta.description && prestation.qty == presta.qty && prestation.price == presta.price)
        this.bill.prestations.splice(indexPrestation, 1)
      }
    },
    computed: {
      totalHT() {
        let totalHT = 0
        this.bill.prestations.forEach(prestation => {
          totalHT += prestation.price * prestation.qty
        })
        return totalHT - this.bill.discount - this.bill.paid
      },
      valeurTVA() {
        if (!this.bill.tva) {
          return 0
        } else {
          return this.totalHT * 0.2
        }
      },
      totalTTC() {
        return this.totalHT + this.valeurTVA
      }
    }
  }
</script>

<style>
  @import url('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css');
</style>