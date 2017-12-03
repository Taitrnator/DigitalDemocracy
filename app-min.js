$(document).ready(function() {

  let colors = ['ff6384', '36a2eb', 'cc65fe', 'ffce56', 'FF56CA', '56FF79']
  $("#question1, #question2, #question3, #question4").width = $('.chart-container').width();

  $.getJSON("graphdata/DeviceOwnership.json", function(data) {
    var ctx1 = document.getElementById("question1").getContext('2d');
    var chart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: data.QuestionSets,
        datasets: [
          {
            label: "Gen Z",
            data: data["Gen Z"],
            backgroundColor: colors[0],
            borderColor: colors[0]
          },
          {
            label: "Millenial",
            data: data["Millenial"],
            backgroundColor: colors[1],
            borderColor: colors[1]
          },
          {
            label: "Gen X",
            data: data["Gen X"],
            backgroundColor: colors[2],
            borderColor: colors[2]
          },
          {
            label: "Baby Boomer",
            data: data["Baby Boomer"],
            backgroundColor: colors[3],
            borderColor: colors[3]
          },
          {
            label: "Mature",
            data: data["Mature"],
            backgroundColor: colors[5],
            borderColor: colors[5]
          }
        ]
      },
      options: {
        title: {
            display: true,
            text: 'Device Ownership % by Age Group'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  })

  $.getJSON("graphdata/OwnPhoneBy2011.json", function(data) {
    var ctx1 = document.getElementById("question2").getContext('2d');
    var chart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: data.QuestionSets,
        datasets: [
          {
            label: "Less than $29,999",
            data: data["Less than $29,999"],
            backgroundColor: colors[0],
            borderColor: colors[0]
          },
          {
            label:"$30,000 to $49,999",
            data: data["$30,000 to $49,999"],
            backgroundColor: colors[1],
            borderColor: colors[1]
          },
          {
            label: "$50,000 to $99,999",
            data: data["$50,000 to $99,999"],
            backgroundColor: colors[2],
            borderColor: colors[2]
          },
          {
            label: "$100,000 to $299,999",
            data: data["$100,000 to $299,999"],
            backgroundColor: colors[3],
            borderColor: colors[3]
          },
          {
            label: "More than $300,000",
            data: data["More than $300,000"],
            backgroundColor: colors[5],
            borderColor: colors[5]
          }
        ]
      },
      options: {
        title: {
            display: true,
            text: 'Device Ownership % by Income, 2011'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  })

  $.getJSON("graphdata/TimeWatching.json", function(data) {
    var ctx1 = document.getElementById("question3").getContext('2d');
    var chart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: data.QuestionSets,
        datasets: [
          {
            label: "2009",
            data: data["2009"],
            backgroundColor: colors[0],
            borderColor: colors[0]
          },
          {
            label: "2010",
            data: data["2010"],
            backgroundColor: colors[1],
            borderColor: colors[1]
          },
          {
            label: "2011",
            data: data["2011"],
            backgroundColor: colors[2],
            borderColor: colors[2]
          }
        ]
      },
      options: {
        title: {
            display: true,
            text: 'Average Percentage of Time Watching TV, Sports, or Movies Per Device'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                autoSkip: false
              }
            }
          ]
        }
      }
    });
  })

  $.getJSON("graphdata/AppUsageByAge.json", function(data) {
    var ctx1 = document.getElementById("question4").getContext('2d');
    var chart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: data.QuestionSets,
        datasets: [
          {
            label: "Gen Z",
            data: data["Gen Z"],
            backgroundColor: colors[0],
            borderColor: colors[0]
          },
          {
            label: "Millenial",
            data: data["Millenial"],
            backgroundColor: colors[1],
            borderColor: colors[1]
          },
          {
            label: "Gen X",
            data: data["Gen X"],
            backgroundColor: colors[2],
            borderColor: colors[2]
          },
          {
            label: "Baby Boomer",
            data: data["Baby Boomer"],
            backgroundColor: colors[3],
            borderColor: colors[3]
          }
        ]
      },
      options: {
        title: {
            display: true,
            text: 'Percent Change in App Usage between 2010 and 2011'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                autoSkip: false
              }
            }
          ]
        }
      }
    });
  })

})


