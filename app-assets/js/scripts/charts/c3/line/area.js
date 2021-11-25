/*=========================================================================================
    File Name: area.js
    Description: c3 area chart
    ----------------------------------------------------------------------------------------
    Item Name: YashussUnlimited Admin - Clean Bootstrap 4 Dashboard HTML Template
   Version: 3.0
    Author: YashussUnlimited
    Author URL: https://yashussunlimited.com/
==========================================================================================*/

// Area chart
// ------------------------------
$(window).on("load", function(){

    // Callback that creates and populates a data table, instantiates the area chart, passes in the data and draws it.
    var areaChart = c3.generate({
        bindto: '#area-chart',
        size: { height: 400 },
        point: {
            r: 4
        },
        color: {
            pattern: ['var(--primary)','var(--third)']
        },

        // Create the data table.
        data: {
            columns: [
                ['data1', 300, 350, 300, 0, 0, 0],
                ['data2', 130, 100, 140, 200, 150, 50]
            ],
            types: {
                data1: 'area',
                data2: 'area-spline'
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
        areaChart.resize();
    });
});