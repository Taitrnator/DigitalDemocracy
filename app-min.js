$(document).ready(function() {

  let colors = [
    'rgba(255, 67, 110, 0.7)',
    'rgba(54, 165, 232, 0.7)',
    'rgba(204, 101, 254, 0.7)',
    'rgba(255, 206, 86, 0.7)',
    'rgba(90, 255, 101, 0.7)',
    'rgba(255, 86, 206, 0.7)'
  ];
  let borderColors = [
    'rgba(255, 67, 110, 1)',
    'rgba(54, 165, 232, 1)',
    'rgba(204, 101, 254, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(90, 255, 101, 1)',
    'rgba(255, 86, 206, 1)'
  ];
  $("#question1, #question2, #question3, #question4, #question5").width = $('.chart-container').width();
  $.getJSON("graphdata/DeviceOwnership.json", function(data) {
    var ctx1 = document.getElementById("question1").getContext('2d');
    Chart.defaults.global.defaultFontColor = 'rgba(255, 255, 255, 0.6)';
    Chart.defaults.global.defaultFontSize = 16;
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
            borderColor: borderColors[0]
          }, {
            label: "Millenial",
            data: data["Millenial"],
            backgroundColor: colors[1],
            borderColor: borderColors[1]
          }, {
            label: "Gen X",
            data: data["Gen X"],
            backgroundColor: colors[2],
            borderColor: borderColors[2]
          }, {
            label: "Baby Boomer",
            data: data["Baby Boomer"],
            backgroundColor: colors[3],
            borderColor: borderColors[3]
          }, {
            label: "Mature",
            data: data["Mature"],
            backgroundColor: colors[4],
            borderColor: borderColors[4]
          }
        ]
      },
      options: {
        title: {
          display: false,
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
            borderColor: borderColors[0]
          }, {
            label: "$30,000 to $49,999",
            data: data["$30,000 to $49,999"],
            backgroundColor: colors[1],
            borderColor: borderColors[1]
          }, {
            label: "$50,000 to $99,999",
            data: data["$50,000 to $99,999"],
            backgroundColor: colors[2],
            borderColor: borderColors[2]
          }, {
            label: "$100,000 to $299,999",
            data: data["$100,000 to $299,999"],
            backgroundColor: colors[3],
            borderColor: borderColors[3]
          }, {
            label: "More than $300,000",
            data: data["More than $300,000"],
            backgroundColor: colors[5],
            borderColor: borderColors[5]
          }
        ]
      },
      options: {
        title: {
          display: false,
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
            borderColor: borderColors[0]
          }, {
            label: "2010",
            data: data["2010"],
            backgroundColor: colors[1],
            borderColor: borderColors[1]
          }, {
            label: "2011",
            data: data["2011"],
            backgroundColor: colors[2],
            borderColor: borderColors[2]
          }
        ]
      },
      options: {
        title: {
          display: false,
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
            borderColor: borderColors[0]
          }, {
            label: "Millenial",
            data: data["Millenial"],
            backgroundColor: colors[1],
            borderColor: borderColors[1]
          }, {
            label: "Gen X",
            data: data["Gen X"],
            backgroundColor: colors[2],
            borderColor: borderColors[2]
          }, {
            label: "Baby Boomer",
            data: data["Baby Boomer"],
            backgroundColor: colors[3],
            borderColor: borderColors[3]
          }
        ]
      },
      options: {
        title: {
          display: false,
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
            borderColor: borderColors[0]
          }, {
            label: "2010",
            data: data["2010"],
            backgroundColor: colors[1],
            borderColor: borderColors[1]
          }, {
            label: "2011",
            data: data["2011"],
            backgroundColor: colors[2],
            borderColor: borderColors[2]
          }
        ]
      },
      options: {
        title: {
          display: false,
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
            borderColor: borderColors[0]
          }, {
            label: "No",
            data: data["No"],
            backgroundColor: colors[1],
            borderColor: borderColors[1]
          }
        ]
      },
      options: {
        title: {
          display: false,
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
            borderColor: borderColors[0]
          }, {
            label: "$5",
            data: data["$5"],
            backgroundColor: colors[1],
            borderColor: borderColors[1]
          }, {
            label: "$10",
            data: data["$10"],
            backgroundColor: colors[2],
            borderColor: borderColors[2]
          }, {
            label: "$20",
            data: data["$20"],
            backgroundColor: colors[3],
            borderColor: borderColors[3]
          }, {
            label: "$30",
            data: data["$30"],
            backgroundColor: colors[4],
            borderColor: borderColors[4]
          }
        ]
      },
      options: {
        title: {
          display: false,
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

  $.getJSON("graphdata/BingeWatchersPerYear.json", function(data) {
    var ctx1 = document.getElementById("question8").getContext('2d');
    var chart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: data.QuestionSets,
        datasets: [
          {
            label: "Binge Watchers",
            data: data["Yes"],
            backgroundColor: colors[1],
            borderColor: borderColors[1]
          }
        ]
      },
      options: {
        title: {
          display: false,
          text: '% Of People Who Binge Watch Per Year, 2009-2011'
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

  $.getJSON("graphdata/BingeCorrelation.json", function(data) {
    var ctx1 = document.getElementById("question9").getContext('2d');
    var chart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: data.QuestionSets,
        datasets: [
          {
            label: "Correlation",
            data: data["Binge Correlation"],
            backgroundColor: colors[0],
            borderColor: borderColors[0]
          }
        ]
      },
      options: {
        title: {
          display: false,
          text: 'Binge Correlation with Subscription Service Types'
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
      [0, borderColors[0]],
      [1, borderColors[1]]
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
    Plotly.newPlot('question10', data, layout);
  })

})


