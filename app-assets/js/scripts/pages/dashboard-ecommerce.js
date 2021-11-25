  /*=========================================================================================
      File Name: dashboard-ecommerce.js
      Description: dashboard-ecommerce
      ----------------------------------------------------------------------------------------
      Item Name: Yashuss Unlimited- Clean Bootstrap 4 Dashboard HTML Template
      Author: Yashuss Unlimited
      Author URL: https://yashussunlimited.com/
  ==========================================================================================*/

  (function (window, document, $) {
    'use strict';

    var new_orders = new PerfectScrollbar('#recent-buyers, #new-orders', {
      wheelPropagation: true
    });
    /********************************************
     *               Monthly Sales               *
     ********************************************/
    Morris.Bar.prototype.fillForSeries = function (i) {
      var color;
      return "0-#fff-#f00:20-#000";
    };

    Morris.Bar({
      element: 'monthly-sales',
      data: [{
        month: 'Jan',
        sales: 1835
      }, {
        month: 'Feb',
        sales: 2356
      }, {
        month: 'Mar',
        sales: 1459
      }, {
        month: 'Apr',
        sales: 1289
      }, {
        month: 'May',
        sales: 1647
      }, {
        month: 'Jun',
        sales: 2156
      }, {
        month: 'Jul',
        sales: 1835
      }, {
        month: 'Aug',
        sales: 2356
      }, {
        month: 'Sep',
        sales: 1459
      }, {
        month: 'Oct',
        sales: 1289
      }, {
        month: 'Nov',
        sales: 1647
      }, {
        month: 'Dec',
        sales: 2156
      }],
      xkey: 'month',
      ykeys: ['sales'],
      labels: ['Sales'],
      barGap: 4,
      barSizeRatio: 0.3,
      gridTextColor: '#000000',
      gridLineColor: '#E4E7ED',
      numLines: 5,
      gridtextSize: 14,
      resize: true,
      barColors: ['#3f51b5'],
      hideHover: 'auto',
    });

    /*************************************************
     *               Score Chart                      *
     *************************************************/
    (function () {
      var scoreChart = function scoreChart(id, labelList, series1List) {
        var scoreChart = new Chartist.Line('#' + id, {
          labels: labelList,
          series: [series1List],
        }, {
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 2
          }),
          fullWidth: true,
          chartPadding: {
            right: 25
          },
          series: {
            "series-1": {
              showArea: false
            }
          },
          axisX: {
            showGrid: false
          },
          axisY: {
            labelInterpolationFnc: function labelInterpolationFnc(value) {
              return value / 1000 + 'K';
            },
            scaleMinSpace: 40
          },
          plugins: [Chartist.plugins.tooltip()],
          low: 0,
          showPoint: false,
          height: 300
        });

        scoreChart.on('created', function (data) {
          var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
          var width = data.svg.width();
          var height = data.svg.height();

          var filter = defs.elem('filter', {
            x: 0,
            y: "-10%",
            id: 'shadow' + id
          }, '', true);

          filter.elem('feGaussianBlur', {
            in: "SourceAlpha",
            stdDeviation: "24",
            result: 'offsetBlur'
          });
          filter.elem('feOffset', {
            dx: "0",
            dy: "32"
          });

          filter.elem('feBlend', {
            in: "SourceGraphic",
            mode: "multiply"
          });

          defs.elem('linearGradient', {
            id: id + '-gradient',
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 0
          }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(22, 141, 238, 1)'
          }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(98, 188, 246, 1)'
          });

          return defs;
        }).on('draw', function (data) {
          if (data.type === 'line') {
            data.element.attr({
              // filter: 'url(#shadow' + id + ')'
              filter: id
            });
          } else if (data.type === 'point') {

            var parent = new Chartist.Svg(data.element._node.parentNode);
            parent.elem('line', {
              x1: data.x,
              y1: data.y,
              x2: data.x + 0.01,
              y2: data.y,
              "class": 'ct-point-content'
            });
          }
          if (data.type === 'line' || data.type == 'area') {
            data.element.animate({
              d: {
                begin: 1000 * data.index,
                dur: 1000,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
              }
            });
          }
        });
      };

      var DayLabelList = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
      var DaySeries1List = {
        name: "series-1",
        data: [0, 4500, 2600, 6100, 2600, 6500, 3200, 6800]
      };

      var WeekLabelList = ["W1", "W2", "W4", "W5", "W6", "W7", "W8"];
      var WeekSeries1List = {
        name: "series-1",
        data: [77000, 18000, 61000, 26000, 58000, 32000, 70000, 45000]
      };

      var MonthLabelList = ["AUG", "SEP", "OTC", "NOV", "DEC", "JAN", "FEB"];
      var MonthSeries1List = {
        name: "series-1",
        data: [100000, 500000, 300000, 700000, 100000, 200000, 700000, 50000]
      };

      var createChart = function createChart(button) {
        var btn = button || $("#ecommerceChartView .chart-action").find(".active");

        var chartId = btn.attr("href");
        switch (chartId) {
          case "#scoreLineToDay":
            scoreChart("scoreLineToDay", DayLabelList, DaySeries1List);
            break;
          case "#scoreLineToWeek":
            scoreChart("scoreLineToWeek", WeekLabelList, WeekSeries1List);
            break;
          case "#scoreLineToMonth":
            scoreChart("scoreLineToMonth", MonthLabelList, MonthSeries1List);
            break;
        }
      };

      createChart();
      $(".chart-action li a").on("click", function () {
        createChart($(this));
      });
    })();

    /*************************************************
     *               Cost Revenue Stats               *
     *************************************************/
    new Chartist.Line('#cost-revenue', {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      series: [
        [{
            meta: 'Revenue',
            value: 5
          },
          {
            meta: 'Revenue',
            value: 3
          },
          {
            meta: 'Revenue',
            value: 6
          },
          {
            meta: 'Revenue',
            value: 3
          },
          {
            meta: 'Revenue',
            value: 8
          },
          {
            meta: 'Revenue',
            value: 5
          },
          {
            meta: 'Revenue',
            value: 8
          },
          {
            meta: 'Revenue',
            value: 12
          },
          {
            meta: 'Revenue',
            value: 7
          },
          {
            meta: 'Revenue',
            value: 14
          },

        ]
      ]
    }, {
      low: 0,
      high: 18,
      fullWidth: true,
      showArea: true,
      showPoint: true,
      showLabel: false,
      axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      chartPadding: 0,
      plugins: [
        Chartist.plugins.tooltip()
      ]
    }).on('draw', function (data) {
      if (data.type === 'area') {
        data.element.attr({
          'style': 'fill: #3f51b5; fill-opacity: 0.2'
        });
      }
      if (data.type === 'line') {
        data.element.attr({
          'style': 'fill: transparent; stroke: #3f51b5; stroke-width: 4px;'
        });
      }
      if (data.type === 'point') {
        var circle = new Chartist.Svg('circle', {
          cx: [data.x],
          cy: [data.y],
          r: [7],
        }, 'ct-area-circle');
        data.element.replace(circle);
      }
    });

    // product sales chart-------------------
    var $primary = "#3f51b5",
      $secondary = "#5c6bc0",
      $success = "#29ef99",
      $info = "#00bcd4",
      $warning = "#ffb959",
      $danger = "#ee6d6d"

    var $themeColor = [$primary, $secondary, $warning, $success, $info, $danger, ]

    // Product report chart----------------------------------------------------------------------------------------------------
    var mixedLineColumnAreaChart = {
      chart: {
        height: 400,
        type: 'line',
        stacked: false,
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      colors: $themeColor,
      series: [{
        name: 'Product Sold',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      }, {
        name: 'Net Profit',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      }, {
        name: 'New Customers',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 40, 38, 39, 36, 39]
      }],
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'dark',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: ['01/01/2020', '02/01/2020', '03/01/2020', '04/01/2020', '05/01/2020', '06/01/2020', '07/01/2020', '08/01/2020', '09/01/2020', '10/01/2020', '11/01/2020'],
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0);
            }
            return y;

          }
        }
      },
      legend: {
        labels: {
          useSeriesColors: true
        },
        markers: {
          customHTML: [
            function () {
              return ''
            },
            function () {
              return ''
            },
            function () {
              return ''
            }
          ]
        },
      }
    }
    // Initializing Mixed Line Column Area Chart
    var mixed_line_column_area_chart = new ApexCharts(
      document.querySelector("#mixed-line-column-area-chart"),
      mixedLineColumnAreaChart
    );
    mixed_line_column_area_chart.render();

    // Top 5 Product pie --------------------------------------------------------------------------------------------------
    var pieSimpleChart = {
      chart: {
        height: 235,
        type: 'pie',
      },
      fontFamily: 'Roboto, sans-serif',
      labels: ['OnePlus', 'iphone', 'Samsung', 'Mi', 'Micromax'],
      series: [44, 55, 22, 43, 13],
      colors: ['#3f51b5', '#5c6bc0', '#ffc107', '#00a5a8', '#626e82'],
      dataLabels: {
        style: {
          fontSize: '11px',
        },
        textAnchor: 'start',
        offsetX: 100,
        fontFamily: 'Roboto, sans-serif',
      },
      legend: {
        fontFamily: 'Roboto, sans-serif',
        fontSize:'14px'
      },
      tooltip:{
        style:{
          fillColor:'#fff',
        }
      },
      responsive: [{
        breakpoint: 1200,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: 'bottom'
          }
        }
      }, {
        breakpoint: 768,
        options: {
          chart: {
            width: 520
          },
          legend: {
            position: 'right',
          }
        }
      }, {
        breakpoint: 620,
        options: {
          chart: {
            width: 450
          },
          legend: {
            position: 'right'
          }
        }
      }, {
        breakpoint: 480,
        options: {
          chart: {
            width: 250
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
    }

    // Initializing Pie Simple Chart
    var pie_simple_chart = new ApexCharts(
      document.querySelector("#pie-simple-chart"),
      pieSimpleChart
    );
    pie_simple_chart.render();

    // CONVERSION RATE Chart --------------------------------------------------------------------------------------------------

    var pieDonutSimpleChart = {
      chart: {
        height: 235,
        type: 'donut',
      },
      labels: ['OnePlus', 'iphone', 'Samsung', 'Mi', 'Micromax'],
      series: [44, 55, 41, 17, 15],
      colors: ['#3f51b5', '#5c6bc0', '#ffc107', '#00a5a8', '#626e82'],
      dataLabels: {
        style: {
          fontSize: '11px',
          // fontWeight: 'bold',
        },
        // padding: 4,
        fontFamily: 'Roboto, sans-serif',
      },
      legend: {
        fontFamily: 'Roboto, sans-serif',
        fontSize:'14px'
      },
      responsive: [{
        breakpoint: 1200,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: 'bottom'
          }
        }
      }, {
        breakpoint: 768,
        options: {
          chart: {
            width: 520
          },
          legend: {
            position: 'right'
          }
        }
      }, {
        breakpoint: 620,
        options: {
          chart: {
            width: 450
          },
          legend: {
            position: 'right'
          }
        }
      }, {
        breakpoint: 480,
        options: {
          chart: {
            width: 250
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
    }

    // Initializing Pie Donut Simple Chart
    var pie_donut_simple_chart = new ApexCharts(
      document.querySelector("#pie-donut-simple-chart"),
      pieDonutSimpleChart
    );
    pie_donut_simple_chart.render();



    var areaSplineChart = {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        colors: ['#3f51b5', '#ffc107']
        // colors:$themeColor
      },
      colors: ['#3f51b5', '#ffc107'],
      series: [{
        name: 'Prev Year',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Current Year',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],

      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      }
    }

    // Initializing Area Spline Chart
    var area_spline_chart = new ApexCharts(
      document.querySelector("#area-spline-chart"),
      areaSplineChart
    );
    area_spline_chart.render();

  })(window, document, jQuery);