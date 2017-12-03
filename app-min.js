$(document).ready(function() {

  let colors = [
    'ff6384',
    '36a2eb',
    'cc65fe',
    'ffce56',
    'FF56CA',
    '56FF79'
  ]
  $("#question1, #question2, #question3, #question4, #question5").width = $('.chart-container').width();
  $.getJSON("graphdata/DeviceOwnership.json", function(data) {
    var ctx1 = document.getElementById("question1").getContext('2d');
    Chart.defaults.global.defaultFontColor = 'rgba(255, 255, 255, 0.6)';
    Chart.defaults.global.defaultColor = 'rgba(255, 255, 255, 0.2)';

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
          }, {
            label: "Millenial",
            data: data["Millenial"],
            backgroundColor: colors[1],
            borderColor: colors[1]
          }, {
            label: "Gen X",
            data: data["Gen X"],
            backgroundColor: colors[2],
            borderColor: colors[2]
          }, {
            label: "Baby Boomer",
            data: data["Baby Boomer"],
            backgroundColor: colors[3],
            borderColor: colors[3]
          }, {
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
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)'
              }
            }
          ],
          xAxes: {
            gridLines: {
              color: 'rgba(255, 255, 255, 0.2)'
            }
          }
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
          }, {
            label: "$30,000 to $49,999",
            data: data["$30,000 to $49,999"],
            backgroundColor: colors[1],
            borderColor: colors[1]
          }, {
            label: "$50,000 to $99,999",
            data: data["$50,000 to $99,999"],
            backgroundColor: colors[2],
            borderColor: colors[2]
          }, {
            label: "$100,000 to $299,999",
            data: data["$100,000 to $299,999"],
            backgroundColor: colors[3],
            borderColor: colors[3]
          }, {
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
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)'
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)'
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
          }, {
            label: "2010",
            data: data["2010"],
            backgroundColor: colors[1],
            borderColor: colors[1]
          }, {
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
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)'
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                autoSkip: false
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)'
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
          }, {
            label: "Millenial",
            data: data["Millenial"],
            backgroundColor: colors[1],
            borderColor: colors[1]
          }, {
            label: "Gen X",
            data: data["Gen X"],
            backgroundColor: colors[2],
            borderColor: colors[2]
          }, {
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
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)'
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                autoSkip: false
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)'
              }
            }
          ]
        }
      }
    });
  })

  $.getJSON("graphdata/SubscribersPerYear.json", function(data) {
    var ctx1 = document.getElementById("question5").getContext('2d');
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
          }, {
            label: "2010",
            data: data["2010"],
            backgroundColor: colors[1],
            borderColor: colors[1]
          }, {
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
          text: 'Total Subscribers Per Year'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)'
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                autoSkip: false
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)'
              }
            }
          ]
        }
      }
    });
  })

  $.getJSON("graphdata/InternetSpeed.json", function(data) {
    var ctx1 = document.getElementById("question6").getContext('2d');
    var chart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: data.QuestionSets,
        datasets: [
          {
            label: "Yes",
            data: data["Yes"],
            backgroundColor: colors[0],
            borderColor: colors[0]
          }, {
            label: "No",
            data: data["No"],
            backgroundColor: colors[1],
            borderColor: colors[1]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Number of Respondents Willing to Pay More for Internet [2009, 2010, 2011]'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)'
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                autoSkip: false
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)'
              }
            }
          ]
        }
      }
    });
  })

  $.getJSON("graphdata/InternetMoneyValue.json", function(data) {
    var ctx1 = document.getElementById("question7").getContext('2d');
    var chart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: data.QuestionSets,
        datasets: [
          {
            label: "Nothing extra",
            data: data["Nothing extra"],
            backgroundColor: colors[0],
            borderColor: colors[0]
          }, {
            label: "$5",
            data: data["$5"],
            backgroundColor: colors[1],
            borderColor: colors[1]
          }, {
            label: "$10",
            data: data["$10"],
            backgroundColor: colors[2],
            borderColor: colors[2]
          }, {
            label: "$20",
            data: data["$20"],
            backgroundColor: colors[3],
            borderColor: colors[3]
          }, {
            label: "$30",
            data: data["$30"],
            backgroundColor: colors[4],
            borderColor: colors[4]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Value People Were Willing to Pay for Faster Internet [2009, 2010, 2011]'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)'
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                autoSkip: false
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)'
              }
            }
          ]
        }
      }
    });
  })

  $.getJSON("graphdata/SubscriptionServiceCorrelation.json", function(data, err) {
    var q = data.QuestionSets;
    var z = [
      data["Pay TV"],
      data["Home internet"],
      data["Landline telephone"],
      data["Mobile voice"],
      data["Mobile data plan"],
      data["Streaming video service"],
      data["Streaming music service"],
      data["Gaming"],
      data["News"],
      data["Magazine"]
    ];
    var colorscaleValue = [
      [0, colors[0]],
      [1, colors[1]]
    ];
    var data = [
      {
        x: q,
        y: q,
        z: z,
        colorscale: colorscaleValue,
        type: 'heatmap'
      }
    ];
    var layout = {
      width: 800,
      height: 600,
      title: 'Correlation of Subscription Services',
      xaxis: {
        ticks: '',
      },
      yaxis: {
        ticks: '',
        ticksuffix: ' ',
      },
      font: {
        family: 'Helvetica',
        size: 11,
        color: '#aaa'
      },
      paper_bgcolor: '#1c1f2b',
      plot_bgcolor: '#1c1f2b'
    };
    Plotly.newPlot('question8', data, layout);
  })

})


