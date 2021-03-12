<template>
  <!-- template du composant (HTML) -->
  <b-container id="app">
    <b-row>
      <b-col>
        <h3><i class="fas fa-angle-down text-muted mr-2" />{{ form._id ? 'Editer':'Créer' }} une facture N°{{ form.billNumber ? form.billNumber : '' }}</h3>
        <hr />
      </b-col>
    </b-row>

    <b-card class="shadow p-3" v-if="form.billNumber">
      <b-row>
        <b-col lg="4">

          <b-form-group
            id="fieldset-billnumberform"
            label="Facture N°"
            label-cols-lg="4"
            content-cols-lg="8"
            label-for="billnumber"
          >
            <b-form-input id="billnumber" v-model="form.billNumber" />
          </b-form-group>

          <b-form-group
            id="fieldset-formdate"
            label="Emise le:"
            label-cols-lg="4"
            content-cols-lg="8"
            label-for="formdate"
          >
            <b-form-datepicker 
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              id="formdate"
              v-model="form.date" />
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
              v-model="form.client"
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
            <b-form-input id="description" v-model="form.description"></b-form-input>
          </b-form-group>

          <b-form-group
            id="fieldset-soumis-tva"
            label-cols-md="3"
            content-cols-md="9"
            label="Description:"
            label-for="soumis-tva"
          >
            <b-form-checkbox v-model="form.tva" id="soumis-tva" switch>
              Facture soumise à la TVA ?
            </b-form-checkbox>
          </b-form-group>

          <b-form-group
            v-if="form.tva"
            id="fieldset-tvarate"
            label-cols-md="3"
            content-cols-md="3"
            label="Taux de TVA:"
            label-for="tvarate"
          >
            <b-form-select id="tvarate" v-model="form.tvaRate" :options="rates"></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>

      <div class="mx-n2 mt-4">
        <b-table stacked="lg" :fields="fields" :items="form.prestations">
          
          <template #cell(actions)="row">

            <b-button variant="light" size="md" @click="onAddPrestation()">
              <i class="fa-fw fas fa-plus-circle m-2 text-primary" />
            </b-button>

            <b-button :disabled="form.prestations.length < 2" variant="light" size="md" @click="onRemovePrestation(row.index)">
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
            <b-form-input class="text-right" id="discount" type="number" v-model.number="form.discount" placeholder="0"></b-form-input>
          </b-form-group>
          
          <b-form-group
            id="fieldset-paid"
            label-cols-md="4"
            content-cols-md="8"
            label="Déjà payé"
            label-for="paid"
          >
            <b-form-input class="text-right" type="number" id="paid" v-model.number="form.paid" placeholder="0"></b-form-input>
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
      
      <hr>

      <b-row>
        <b-col>
          <b-button variant="danger" @click="onDeleteBill()">Supprimer</b-button>
        </b-col>
        <b-col class="text-right">
          <b-button variant="primary" @click="onSaveBill()">Enregister</b-button>
        </b-col>
      </b-row>

    </b-card>

    <b-form-checkbox class="my-4" v-model="debug" name="debug" switch>Debug</b-form-checkbox>

    <pre v-if="debug" class="debug card border-primary bg-dark text-light p-4">
      Form: {{ form }}
      Bill (du store): {{ bill }}
      </pre>

  </b-container>

</template>


<script>

import { mapState, mapActions } from 'vuex'

import { clientOptions } from '@/libs/clientOptions'

const newBill = {
  prestations: [
    {
      description: '',
      qty: 1,
      price: 450
    }
  ],
  billNumber: '0000',
  date: new Date(),
  description: '',
  client: {
    idclient: 1,
    firstname: 'John',
    lastname: 'Doe'
  },
  discount: 0,
  paid: 0,
  tva: true,
  tvaRate: 20
}

// controleur du composant
export default {
  name: 'EditBill',
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
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
      form: {}
    }
  },
  computed: {
    ...mapState({
      bill: state => state.bill.bill
    }),
    totalHT(){
      let total = 0

      if(this.form.prestations.length > 0){
        for (const prestation of this.form.prestations) {
          if(prestation.qty > 0) {
            let calc = prestation.qty * prestation.price
            total += calc
          }
        }
      }
      total -= this.form.discount
      total -= this.form.paid

      return total
    },
    totalTVA() {
      return this.form.tva ? (this.totalHT * this.form.tvaRate) / 100 : 0
    },
    totalTTC(){
      return this.totalHT + this.totalTVA
    }
  },
  methods: {
    // mapActions permet d'accéder directement aux actions du store depluis un composant
    //map this.getBill(data) avec this.$store.dispatch('bill/getBill', data)
    ...mapActions('bill', ['getBill', 'saveBill', 'deleteBill']),
    
    onAddPrestation() {
      console.log('ajout d’une ligne')
      this.form.prestations.push({
        description: '',
        qty: 1,
        price: 450.00
      })
    },

    onRemovePrestation(index) {
      console.log('suppression d’une ligne' + index)
      this.form.prestations.splice(index, 1)
    },

    onDeleteBill(){

      // on appelle la méthode du store (grâce à mapActions)
      //on pourrait également appeler this.$store.dispatch('bill/deleteBill', this.form.id)
      this.deleteBill(this.form.id)
      
      //une fois la donnée enregistrée dans le store 
      //je redirige l'utilisateur vers la liste avec le router
      this.$router.push({ name: 'factures' })
    },

    onSaveBill(){
      
      // on appelle la méthode du store (grâce à mapActions)
      //on pourrait également appeler this.$store.dispatch('bill/saveBill', this.form)
      this.saveBill( this.form ).then(()=> {
        //une fois la donnée enregistrée dans le store 
        //je redirige l'utilisateur vers la liste avec le router
        this.$router.push({ name: 'factures' })  
      })

    }
  },
  created() {
    //se déclenche à l'instantiation du composant
    //en fait dès qu'on arrive sur la route editbill
    if(!this.id || this.id == 0 || this.id == -1) {
      this.form = { ...newBill }
    } else {
      this.getBill(this.id).then(()=>{
        this.form = this.bill
      })
    }
  }
}
</script>
