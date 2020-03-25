<template>
  <b-container class="beers-table">
      <b-table
      hover
      :items="beers"
      :fields="fields"
      @row-clicked="toggleDescription"
      >
      <template v-slot:cell(description)="row">
        <b-link @click="toggleDescription(row.item)" v-if="row.item.description !== '' && !row.item._showDetails">Show</b-link>
        <b-link @click="toggleDescription(row.item)" v-if="row.item.description !== '' && row.item._showDetails">Hide</b-link>
      </template>

      <template v-slot:row-details="row">
        <b-card class="beer-description">
          <span><b>Description:</b></span> {{row.item.description}}
        </b-card>
      </template>
    </b-table>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BeersList',
  data () {
    return {
      fields: [
        {label: 'Name', sortable: true, key: 'name'},
        {label: 'City', sortable: true, key: 'city'},
        {label: 'County', sortable: true, key: 'county'},
        {label: 'ABV', sortable: true, key: 'abv'},
        {label: 'IBU', sortable: true, key: 'ibu'},
        {label: 'Style', sortable: true, key: 'style'},
        {label: 'Description', sortable: true, key: 'description'}
      ],
      beers: []
    }
  },
  created () {
    axios.get('http://localhost:3000/beers') //Get beer data from api endpoint
      .then(response => {
        this.beers = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    this.beers.forEach(function (element, index) {
      this.$set(element, '_showDetails', false) //Add showDetails special Vue reactive variable for displaying the description
    })
  },
  methods: {
    toggleDescription (row) {
      if (row.description !== '') {
        this.$set(row, '_showDetails', !row._showDetails)
      }
    }
  }
}
</script>

<style>
.beers-table {
    margin-top: 150px;
    width:100%;
    margin-left: auto;
    margin-right: auto;
}
.beer-description {
    justify-content: 1
}
.b-table-has-details:hover + .b-table-details {
  color: #212529;
  background-color: rgba(0, 0, 0, 0.075);
}
</style>
