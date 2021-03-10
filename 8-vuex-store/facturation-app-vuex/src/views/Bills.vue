<template>
  <div>
    <b-container>
      <b-row class="mt-5">
        <b-col>
          <h1 class="h3">
            <i class="fas fa-angle-down text-muted mr-2" />
            Liste des factures
          </h1>
          <p class="text-muted mb-0">Page: {{currentPage}}/{{totalPages}} - {{ rows }} résultats</p>
        </b-col>
        <b-col class="d-flex justify-content-end align-items-end">
          <b-button variant="light" class="mr-2" to="/editclient/0"><i class="fas fa-plus circle mr-2" />Ajout d'un client</b-button>
          <b-button variant="light" to="/editbill/0"><i class="fas fa-plus circle mr-2" />Ajout d'une facture</b-button>
        </b-col>
      </b-row>
      <hr>

      <b-card class="shadow p-3">
        <b-table
          id="bills-table"
          :current-page="currentPage"
          :per-page="perPage"
          stacked="lg"
          :fields="fields"
          :items="bills">
          
            <template #cell(client)="row">
              {{row.value.firstname }} {{row.value.lastname }}
            </template>

            <template #cell(actions)="row">
              <b-button variant="light" size="md" :to="{ name: 'edition-facture', params: { id: row.item.id } }">
                <i class="fa-fw fas fa-pen mr-2 text-primary" /> Modifier
              </b-button>
            </template>
          
          </b-table>

        <b-pagination 
          class="mt-4"
          align="center"
          v-model="currentPage"
          :per-page="perPage"
          :total-rows="rows"
          aria-controls="bills-table"
          />
      </b-card>

      <b-form-checkbox class="my-4" v-model="debug" name="debug" switch>Debug</b-form-checkbox>

      <pre v-if="debug" class="debug card border-primary bg-dark text-light p-4">{{ bills }}</pre>

    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'Factures',
    data(){
      return {
        debug: true,
        perPage: 2,
        currentPage: 1,
        fields: [
          {
            key: 'id',
            label: 'N°',
            class: 'cell-idbill',
            sortable: true
          },
          {
            key: 'client',
            label: 'Client',
            class: 'cell-client',
            sortable: true
          },
          {
            key: 'montantHT',
            label: 'Montant HT',
            class: 'cell-montant-ht',
            sortable: false,
            formatter: (value, key, item) => {
              return (this.getTotalHTForBill(item)).toFixed(2) + ' HT'
            }
          },
          {
            key: 'montantTTC',
            label: 'Montant TTC',
            class: 'cell-montant-ttc',
            sortable: false,
            formatter: (value, key, item) => {
              return (this.getTotalTTCForBill(item)).toFixed(2) + ' TTC'
            }
          },
          {
            key: 'actions',
            label: 'Actions',
            class: 'cell-actions',
            sortable: false
          }
        ],
        bills: [
          {
            id: 1,
            date: '',
            description: '',
            client: {
              idclient: 2,
              firstname: 'John',
              lastname: 'Doe'
            },
            prestations: [{
              description: 'Test description',
              qty: 2,
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
          },
          {
            id: 2,
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
            paid: 1450.00,
            tva: true,
            tvaRate: 20
          },
          {
            id: 3,
            date: '',
            description: '',
            client: {
              idclient: 2,
              firstname: 'Jim',
              lastname: 'Smith'
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
            discount: 500.00,
            paid: 0.00,
            tva: true,
            tvaRate: 20
          }
        ]
      }
    },
    computed: {
      totalPages(){
        return Math.ceil( this.rows / this.perPage )
      },
      rows(){
        return this.bills.length
      }
    },
    methods: {
      getTotalHTForBill(item){
        let total = 0
        if(item.prestations.length > 0){
          for (const prestation of item.prestations) {
            if(prestation.qty > 0) {
              let calc = prestation.qty * prestation.price
              total += calc
            }
          }
        }
        total -= item.discount

        return total
      },
      getTotalTTCForBill(item){
        const totalHT = this.getTotalHTForBill(item)
        const totalTVA = item.tva ? (totalHT * item.tvaRate) / 100 : 0

        return totalTVA + totalHT
      }
    }
  }
</script>

<style scoped>

</style>