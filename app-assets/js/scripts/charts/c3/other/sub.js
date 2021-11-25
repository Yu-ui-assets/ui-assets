/*=========================================================================================
    File Name: sub.js
    Description: c3 sub chart
    ----------------------------------------------------------------------------------------
    Item Name: YashussUnlimited Admin - Clean Bootstrap 4 Dashboard HTML Template
   Version: 3.0
    Author: YashussUnlimited
    Author URL: https://yashussunlimited.com/
==========================================================================================*/

// Sub chart
// ------------------------------
$(window).on("load", function(){

    // Callback that creates and populates a data table, instantiates the sub chart, passes in the data and draws it.
    var subChart = c3.generate({
        bindto: '#sub-chart',
        size: { height: 400 },
        color: {
            pattern: ['var(--secondary)']
        },

        // Create the data table.
        data: {
            columns: [
                ['sample', 30, 200, 100, 400, 150, 250]
            ]
        },
        subchart: {
            show: true
        },
        grid: {
            y: {
                show: true
            }
        }
    });

    // Resize chart on sidebar width change
    $(".menu-toggle").on('click', function() {
        subChart.resize();
    });
});