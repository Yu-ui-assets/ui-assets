/*=========================================================================================
    File Name: bar.js
    Description: c3 bar chart
    ----------------------------------------------------------------------------------------
    Item Name: YashussUnlimited Admin - Clean Bootstrap 4 Dashboard HTML Template
   Version: 3.0
    Author: YashussUnlimited
    Author URL: https://yashussunlimited.com/
==========================================================================================*/

// Bar chart
// ------------------------------
$(window).on("load", function(){

    // Callback that creates and populates a data table, instantiates the bar chart, passes in the data and draws it.
    var barChart = c3.generate({
        bindto: '#bar-chart',
        size: {height:400},
        color: {
            pattern: ['var(--primary)']
        },

        // Create the data table.
        data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250]
            ],
            type: 'bar'
        },
        axis: {
            rotated: true
        },
        grid: {
            y: {
                show: true
            }
        }
    });

    // Resize chart on sidebar width change
    $(".menu-toggle").on('click', function() {
        barChart.resize();
    });
});