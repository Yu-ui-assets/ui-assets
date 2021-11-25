/*=========================================================================================
    File Name: zoom.js
    Description: c3 zoom chart
    ----------------------------------------------------------------------------------------
    Item Name: YashussUnlimited Admin - Clean Bootstrap 4 Dashboard HTML Template
   Version: 3.0
    Author: YashussUnlimited
    Author URL: https://yashussunlimited.com/
==========================================================================================*/

// Zoom chart
// ------------------------------
$(window).on("load", function(){

    // Callback that creates and populates a data table, instantiates the zoom chart, passes in the data and draws it.
    var zoomChart = c3.generate({
        bindto: '#zoom-chart',
        size: { height: 400 },
        color: {
            pattern: ['var(--primary)']
        },

        // Create the data table.
        data: {
            columns: [
                ['sample', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40]
            ]
        },
        zoom: {
            enabled: true
        },
        grid: {
            y: {
                show: true
            }
        }
    });

    // Resize chart on sidebar width change
    $(".menu-toggle").on('click', function() {
        zoomChart.resize();
    });
});