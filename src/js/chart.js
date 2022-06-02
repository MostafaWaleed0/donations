var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
      '40% planting trees',
      '35% cleanliness program',
      '10% helping people',
      '10% animal safety',
      '5% feeding the poor'
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [40, 35, 10, 10, 5],
        backgroundColor: [
          'rgb(190, 243, 192)',
          'rgba(172, 148, 241, 1)',
          'rgba(255, 240, 202, 1)',
          'rgba(249, 207, 100, 1)',
          'rgba(243, 143, 191, 1)'
        ],

        borderColor: [
          'rgb(190, 243, 192)',
          'rgba(172, 148, 241, 1)',
          'rgba(255, 240, 202, 1)',
          'rgba(249, 207, 100, 1)',
          'rgba(243, 143, 191, 1)'
        ]
      }
    ]
  },

  options: {
    layout: {
      padding: {
        left: -3100,
        right: 0,
        top: 0,
        bottom: 50
      }
    }
  }
});
