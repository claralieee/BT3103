import { Bubble } from 'vue-chartjs'
import database from '../firebase.js'

export default {
  extends: Bubble,
  data: function () {
    return {
        datacollection: {
          datasets: []
        },
        options: {
            title: {
              display: true,
              text: 'GDP, Happiness and Population'
            }, 
            scales: {
              yAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "Happiness"
                }
              }],
              xAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "GDP (PPP)"
                }
              }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('countriesii').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
          this.datacollection.datasets.push({
            label: doc.data().country, 
            backgroundColor: doc.data().bg,
            borderColor: doc.data().border,
            data: [{x:doc.data().x, y: doc.data().y, r: doc.data().r}]
          })
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  },
  
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}