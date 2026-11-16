var options = {
  series: [
    {
      name: 'الربح الصافي',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'الايرادات',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'التدفق النقدي الحر',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
  },
  title: {
    text: 'تحليل الايرادات السنوية   ',
    align: 'center',
  },

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 5,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ ( الف )',
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands'
      },
    },
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
var options = {
  series: [42, 23, 15, 12, 8],
  chart: {
    width:490,
    type: 'pie',
   
  },
  labels: ['مونة', 'حبوب', 'خضار', 'وجبات', 'البسة'],
  title: {
    text: 'تحليل المبيعات حسب المنتجات',
    align: 'center',
  },
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      dataLabels: {
        external: {
          show: true,
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 320,
        },
      },
    },
  ],
}

var chart = new ApexCharts(document.querySelector('#chart1'), options)
chart.render()

