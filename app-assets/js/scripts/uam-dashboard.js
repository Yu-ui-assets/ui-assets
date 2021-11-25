  // check in code`
  var hours = 0;
  var mins = 0;
  var seconds = 0;

  $('#check_in').click(function () {
      $("#timer").show().css({
          "display": "flex",
          "align-items": "center",
          "font-size": "16px"
      });
      startTimerRemote();
      $("#check_in").hide();
      $("#check_out").show();

  });

  $('#check_out').click(function () {
      clearTimeout(timex);
      hours = 0;
      mins = 0;
      seconds = 0;
      $('.hours', '.mins').html('00:');
      $('.seconds').html('00');
      $("#check_in").show();
      $("#check_out").hide();
      $("#timer").hide();

  });

  $(".pause_btn").click(function () {
      clearTimeout(timex);
  });

  $(".play_btn").click(function () {
      startTimerRemote();
  });

  $('#reset').click(function () {
      hours = 0;
      mins = 0;
      seconds = 0;
      $('.hours', '.mins').html('00:');
      $('.seconds').html('00');
  });

  function startTimerRemote() {
      timex = setTimeout(function () {
          seconds++;
          if (seconds > 59) {
              seconds = 0;
              mins++;
              if (mins > 59) {
                  mins = 0;
                  hours++;
                  if (hours < 10) {
                      $(".hours").text('0' + hours + ':')
                  } else $(".hours").text(hours + ':');
              }

              if (mins < 10) {
                  $(".mins").text('0' + mins + ':');
              } else $(".mins").text(mins + ':');
          }
          if (seconds < 10) {
              $(".seconds").text('0' + seconds);
          } else {
              $(".seconds").text(seconds);
          }
          startTimerRemote();
      }, 1000);
  }

  // code for 60min 
  $(".start_lunch").click(function () {

      $("#lunch_btn").removeClass('start_lunch').addClass('stop_lunch');
      $("#lunch_btn").removeClass('btn-outline-secondary').addClass('btn-outline-warning').addClass(
          'btn-glow');
      var timeoutHandle;

      function countdown(minutes) {
          var seconds = 60;
          var mins = minutes

          function tick() {
              var counter = document.getElementById("break_time");
              var current_minutes = 60 - 1
              seconds--;
              counter.innerHTML =
                  current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
              if (seconds > 0) {
                  timeoutHandle = setTimeout(tick, 1000);
              } else {

                  if (mins > 1) {

                      // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                      setTimeout(function () {
                          countdown(mins - 1);
                      }, 1000);

                  }
              }
          }
          tick();
      }
      countdown(2);
  });




  // code for 15 min 
  $(".start_tea").click(function () {

      // $("#tea_btn").removeClass('start_lunch').addClass('stop_lunch');
      $("#tea_btn").addClass('btn-glow');
      var timeoutHandle;

      function countdown(minutes) {
          var seconds = 60;
          var mins = minutes

          function tick() {
              var counter = document.getElementById("tea_time");
              var current_minutes = 15 - 1
              seconds--;
              counter.innerHTML =
                  current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
              if (seconds > 0) {
                  timeoutHandle = setTimeout(tick, 1000);
              } else {

                  if (mins > 1) {

                      // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                      setTimeout(function () {
                          countdown(mins - 1);
                      }, 1000);

                  }
              }
          }
          tick();
      }
      countdown(2);
  });



  //   Activity Charts

  $(".activity-chart").sparkline(
      [
          5,
          6,
          7,
          8,
          9,
          10,
          12,
          13,
          15,
          14,
          13,
          12,
          10,
          9,
          8,
          10,
          12,
          14,
          15,
          16,

      ], {
          type: "bar",
          width: "100%",
          height: "30px",
          barWidth: 2,
          barSpacing: 4,
          barColor: "#3f51b5"
      }
  );

  // Donut chart
  // ------------------------------
  $(window).on("load", function () {

      Morris.Donut({
          element: 'donut-chart',
          data: [{
              label: "Cliq",
              value: 25
          }, {
              label: "Projects",
              value: 40
          }, {
              label: "People",
              value: 25
          }, {
              label: "Sprints",
              value: 10
          }, ],
          resize: true,
          colors: ['#3f51b5', '#5c6bc0', '#ffc107', '#626E82']
      });
  });

//   vertical bar ------------------------------------------------


  var options = {
      series: [{
          name: 'Rating',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }],
      chart: {
          type: 'bar',
          height: 350
      },
      plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: '55%',
              //   endingShape: 'rounded'
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
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
          title: {
              text: 'Rating'
          }
      },
      fill: {
          opacity: 1
      },
      tooltip: {
          y: {
              formatter: function (val) {
                  return "" + val + ""
              }
          }
      },
      fill: {
          colors: '#3f51b5'
      }

  };

  var chart = new ApexCharts(document.querySelector("#activity-rating"), options);
  chart.render();


//   Horizontal bar ------------------------------------------------
  var barBasicChart = {
      chart: {
          height: 350,
          type: 'bar',
      },
      plotOptions: {
          bar: {
              horizontal: true,
          }
      },
      dataLabels: {
          enabled: false
      },
      series: [{
          name: 'Hrs',
          data: [9, 10, 8, 12, 6, 9, 8, 11, 9.5]
      }],
      xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      fill: {
          colors: "#c10625"
      }
  }

  // Initializing Bar Basic Chart
  var bar_basic_chart = new ApexCharts(
      document.querySelector("#bar-basic-chart"),
      barBasicChart
  );
  bar_basic_chart.render();