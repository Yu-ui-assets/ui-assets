/*=========================================================================================
    File Name: step.js
    Description: c3 step chart
    ----------------------------------------------------------------------------------------
    Item Name: YashussUnlimited Admin - Clean Bootstrap 4 Dashboard HTML Template
   Version: 3.0
    Author: YashussUnlimited
    Author URL: https://yashussunlimited.com/
==========================================================================================*/

// Step chart
// ------------------------------
$(window).on("load", function(){

    // Callback that creates and populates a data table, instantiates the step chart, passes in the data and draws it.
    var stepChart = c3.generate({
        bindto: '#step-chart',
        size: { height: 400 },
        color: {
            pattern: ['var(--primary)','var(--third)']
        },

        // Create the data table.
        data: {
            columns: [
                ['data1', 300, 350, 300, 0, 0, 100],
                ['data2', 130, 100, 140, 200, 150, 50]
            ],
            types: {
                data1: 'step',
                data2: 'area-step'
            }
        },
        grid: {
            y: {
                show: true
            }
        }
    });

    // Resize chart on sidebar width change
    $(".menu-toggle").on('click', function() {
        stepChart.resize();
    });
});