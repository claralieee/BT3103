<!-- GROCERY -->

<!-- <template>
  <div id="app">    
    <app-header v-bind:title="msg"></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
//Registering components Locally
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
//import PageContent from './components/PageContent.vue'
export default {
  name: 'App',
  data(){
    return {
      itemsListInput: [{name:'Eggs',image:'./assets/eggs.jpg',show:false},
                    {name:'Bread',image:'/assets/bread.jfif',show:false},
                    {name:'Jam',image:'/assets/jam.jfif',show:false},
                    {name:'CornFlakes',image:'/assets/cornflakes.jfif',show:false},
                    {name:'Milk',image:'/assets/milk.jfif',show:false},
                    {name:'Juice',image:'/assets/juice.jfif',show:false}],
          
      itemsListSecond: [{name:'Oranges',image:'./assets/orange.jpg',show:false},
                    {name:'Peanut Butter',image:'/assets/peanutbutter.jpeg',show:false},
                    {name:'Strawberries',image:'/assets/strawberries.jpg',show:false}
                    ],
      msg:"Grocery"
          }
  },
  components: {
    //Registering with a name
    'app-header':Header,
    'app-footer':Footer,
    //Registering without a name
    //PageContent
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
 -->

<!-- CHARTS -->
<template>
  <div id="app">
    <!-- <bar-chart></bar-chart>
    <horizontal-bar-chart></horizontal-bar-chart>
    <bar-chart-grouped></bar-chart-grouped>
    <line-chart></line-chart>
    <doughnut-chart></doughnut-chart>
    <pie-chart></pie-chart>
    <mixed-chart></mixed-chart>
    <bubble-chart></bubble-chart> -->
    <!-- <firebase-data></firebase-data> -->
    <bb-chart></bb-chart>
  </div>
</template>

<script>
// import BarChart from './components/charts/BarChart.vue'
// import HorizontalBarChart from './components/charts/HorizontalBarChart.vue'
// import BarChartGrouped from './components/charts/BarChartGrouped.vue'
// import LineChart from './components/charts/LineChart.vue'
// import DoughnutChart from './components/charts/DoughnutChart.vue'
// import PieChart from './components/charts/PieChart.vue'
// import MixedChart from './components/charts/MixedChart.vue'
// import BubbleChart from './components/charts/BubbleChart.vue'
// import FirebaseData from './components/FirebaseData.vue'
import BbChart from './components/BbChart.vue'


export default {
  name: 'app',
  components: {
    // BarChart,
    // HorizontalBarChart,
    // BarChartGrouped,
    // LineChart,
    // PieChart,
    // DoughnutChart,
    // MixedChart,
    // BubbleChart
    // FirebaseData
    BbChart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>