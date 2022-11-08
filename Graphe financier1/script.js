var options = {
  series: [{
  name: 'Storage',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 55, 57, 56]
}, 
{
  name: 'Traking',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 55, 57, 56]
},{
  name: 'LO&LO',
  data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 55, 57, 56]
}, 
{
  name: 'Manutention Terre',
  data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 55, 57, 56]
},
{
  name: "Compte d'escale",
  data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 55, 57, 56]
},
{
  name: 'Transport',
  data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 55, 57, 56]
}],


  chart: {
  type: 'bar',
  height: 650
},
colors: ["#1e90ff", "#00fa9a", "#ffa500","#9932cc", "#ff6347", "#7fff00"],
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '80%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
},
yaxis: {
  title: {
    text: 'Franc CFA '
  }
},
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return  val + " Franc CFA"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
