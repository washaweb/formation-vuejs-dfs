<template>
  <!-- template du composant (HTML) -->
  <b-container id="app">
    <b-row>
      <b-col>
        <h3><i class="fas fa-angle-down text-muted mr-2" />Editer une facture</h3>
        <hr />
      </b-col>
    </b-row>

    <b-card class="shadow p-3">
      <b-row>
        <b-col lg="4">

          <b-form-group
            id="fieldset-idbill"
            label="Facture N°"
            label-cols-lg="4"
            content-cols-lg="8"
            label-for="idbill"
          >
            <b-form-input id="idbill" v-model="bill.id" />
          </b-form-group>

          <b-form-group
            id="fieldset-billdate"
            label="Emise le:"
            label-cols-lg="4"
            content-cols-lg="8"
            label-for="billdate"
          >
            <b-form-datepicker 
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              id="billdate"
              v-model="bill.date" />
          </b-form-group>

          <b-form-group
            id="fieldset-client"
            label="Client:"
            label-cols-lg="4"
            content-cols-lg="8"
            label-for="client"
          >
            <b-form-select
              id="client"
              v-model="bill.client"
              :options="clients" />
          </b-form-group>

        </b-col>
        <b-col lg="8">
          <b-form-group
            id="fieldset-description"
            label-cols-md="3"
            content-cols-md="9"
            label="Description:"
            label-for="description"
          >
            <b-form-input id="description" v-model="bill.description"></b-form-input>
          </b-form-group>

          <b-form-group
            id="fieldset-soumis-tva"
            label-cols-md="3"
            content-cols-md="9"
            label="Description:"
            label-for="soumis-tva"
          >
            <b-form-checkbox v-model="bill.tva" id="soumis-tva" switch>
              Facture soumise à la TVA ?
            </b-form-checkbox>
          </b-form-group>

          <b-form-group
            v-if="bill.tva"
            id="fieldset-tvarate"
            label-cols-md="3"
            content-cols-md="3"
            label="Taux de TVA:"
            label-for="tvarate"
          >
            <b-form-select id="tvarate" v-model="bill.tvaRate" :options="rates"></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>

      <div class="mx-n2 mt-4">
        <b-table stacked="lg" :fields="fields" :items="bill.prestations">
          
          <template #cell(actions)="row">

            <b-button variant="light" size="md" @click="onAddPrestation()">
              <i class="fa-fw fas fa-plus-circle m-2 text-primary" />
            </b-button>

            <b-button :disabled="bill.prestations.length < 2" variant="light" size="md" @click="onRemovePrestation(row.index)">
              <i class="fa-fw fas fa-trash m-2 text-danger" />
            </b-button>

          </template>

          <template #cell(description)="row">
            <b-input v-model="row.item.description" />
          </template>
          <template #cell(qty)="row">
            <b-input type="number" v-model.number="row.item.qty" />
          </template>
          <template #cell(price)="row">
            <b-input v-model.number="row.item.price" min="1" />
          </template>
          <template #cell(total)="row">
            <b-input readonly :value="row.item.qty * row.item.price" />
          </template>
        </b-table>
      </div>

      <b-row>
        <b-col lg="5" offset-lg="7">
          <b-form-group
            id="fieldset-discount"
            label-cols-md="4"
            content-cols-md="8"
            label="Remises"
            label-for="discount"
          >
            <b-form-input class="text-right" id="discount" type="number" v-model.number="bill.discount" placeholder="0"></b-form-input>
          </b-form-group>
          
          <b-form-group
            id="fieldset-paid"
            label-cols-md="4"
            content-cols-md="8"
            label="Déjà payé"
            label-for="paid"
          >
            <b-form-input class="text-right" type="number" id="paid" v-model.number="bill.paid" placeholder="0"></b-form-input>
          </b-form-group>

          <b-form-group
            id="fieldset-totalHT"
            label-cols-md="4"
            content-cols-md="8"
            label="Total HT"
            label-for="totalHT"
          >
            <b-form-input class="text-right" readonly id="paid" :value="totalHT"></b-form-input>
          </b-form-group>

          <b-form-group
            id="fieldset-tva"
            label-cols-md="4"
            content-cols-md="8"
            label="TVA 20%"
            label-for="tva"
          >
            <b-form-input class="text-right" readonly id="tva" :value="totalTVA"></b-form-input>
          </b-form-group>

          <b-form-group
            id="fieldset-totalTTC"
            label-cols-md="4"
            content-cols-md="8"
            label="total TTC"
            label-for="totalTTC"
          >
            <b-form-input class="text-right" readonly id="totalTTC" :value="totalTTC"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

    </b-card>

    <b-form-checkbox class="my-4" v-model="debug" name="debug" switch>Debug</b-form-checkbox>

    <pre v-if="debug" class="debug card border-primary bg-dark text-light p-4">{{ bill }}</pre>

  </b-container>

</template>


<script>
import { clientOptions } from '@/libs/clientOptions'

// controleur du composant
export default {
  name: 'EditBill',
  //data dans un composant Vue doit être une fonction qui retourne un objet
  data() {
    return {
      debug: true,
      clients: clientOptions,
      rates: [
        { text: '20%', value: 20 },
        { text: '10%', value: 10 },
        { text: '5.5%', value: 5.5 }
      ],
      fields: [
        {
          key: 'actions',
          label: 'Actions',
          class: 'cell-actions',
          sortable: false
        },
        {
          key: 'description',
          label: 'Prestations',
          class: 'cell-description',
          sortable: true
        },
        {
          key: 'qty',
          label: 'Quantité',
          class: 'cell-qty',
          sortable: true
        },
        {
          key: 'price',
          label: 'Montant unitaire',
          class: 'cell-price',
          sortable: false
        },
        {
          key: 'total',
          label: 'Total',
          class: 'cell-total',
          sortable: false
        }
      ],
      bill: {
        id: 1,
        date: '',
        description: '',
        client: {
          idclient: 2,
          firstname: 'Maria',
          lastname: 'Doe'
        },
        prestations: [{
          description: 'Test description',
          qty: 1,
          price: 450.00
        },
        {
          description: 'TOTO',
          qty: 2,
          price: 950.00
        }],
        discount: 0.00,
        paid: 0.00,
        tva: true,
        tvaRate: 20
      }
    }
  },
  computed: {
    totalHT(){
      let total = 0

      if(this.bill.prestations.length > 0){
        for (const prestation of this.bill.prestations) {
          if(prestation.qty > 0) {
            let calc = prestation.qty * prestation.price
            total += calc
          }
        }
      }
      total -= this.bill.discount
      total -= this.bill.paid

      return total
    },
    totalTVA() {
      return this.bill.tva ? (this.totalHT * this.bill.tvaRate) / 100 : 0
    },
    totalTTC(){
      return this.totalHT + this.totalTVA
    }
  },
  methods: {
    onAddPrestation() {
      console.log('ajout d’une ligne')
      this.bill.prestations.push({
        description: '',
        qty: 1,
        price: 450.00
      })
    },
    onRemovePrestation(index) {
      console.log('suppression d’une ligne' + index)
      this.bill.prestations.splice(index, 1)
    }
  },
  
}
</script>
