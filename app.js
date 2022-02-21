const alertBanner = document.getElementById('alert');
alertBanner.innerHTML = `<div class="alert-banner">
  <p><strong>Alert:</strong>  You have <strong>6</strong> overdue tasks to complete</p>
  <p class="alert-banner-close">x</p>
</div>`

alertBanner.addEventListener('click', e => {
  const element= e.target;
  if(element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});

const user = document.getElementById("userfield");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

 send.addEventListener('click', () => {
   if(user.value === "" && message.value === "") {
     alert("Please fill out user and message fields before sending");
   } else if (user.value === "" ) {
     alert("Please fill out user field before sending");
   } else if (message.value === "") {
     alert("Please fill out message field before sending");
   } else {
     alert(`Your message has been  successfully sent to ${user.value}.`);
   }
 });


 let trafficCanvas = document.getElementById("traffic-chart");
 let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
  "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
  data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
  2500],
  backgroundColor: 'rgba(112, 104, 201, .5)',
  borderWidth: 1,
  tension: 0.5,
  }]
  };

  

  

  let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.0,
    animation: {
        duration: 0
    },
    scales: {
        y: {
         beginAtZero: true
    }
    },
    plugins: {
        legend: {
        display: false
          }
        }
    };


    let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: trafficData,
      options: trafficOptions
      });
      

      const updateChart = (chart, newData) => {
        chart.data.labels = newData.labels;
        chart.data.datasets[0].data = newData.datasets[0].data;
        chart.update();
      };


  


      const dailyCanvas = document.getElementById("daily-charts");

      const dailyData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
        }]
        };


        const dailyOptions = {
        scales: {
        y: {
        beginAtZero: true
        }
        },
        plugins: {
        legend: {
        display: false
        }
        }
        };

        let dailyChart = new Chart(dailyCanvas, {
          type: 'bar',
          data: dailyData,
          options: dailyOptions
          });


          const data = {
            labels: [
              'Desktop',
              'Tablets',
              'Phones'
            ],
            datasets: [{
             labels: 'My First Datase',
             data: [300, 70, 80],
             backgroundColor: [
              'rgba(116, 119, 191, 255)',
              'rgba(129, 201, 143, 255)',
              'rgba(81, 182, 200, 255)'

             ],
               hoverOffset: 4
            }]
          };

            const mobileOptions = {
              aspectRatio: 2.0,
              plugins: {
              legend: {
              position: 'right',
              labels: {
              boxWidth: 20,
              fontStyle: 'bold'
              }
              }
              }
              };

              const config = {
                type: 'doughnut',
                data: data,
                options: mobileOptions
              };
              const myChart = new Chart (
                document.getElementById('mobile-charts'),
                config
              );