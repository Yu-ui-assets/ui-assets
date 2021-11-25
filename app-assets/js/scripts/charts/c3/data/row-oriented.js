/*=========================================================================================
    File Name: row-oriented.js
    Description: c3 row oriented chart
    ----------------------------------------------------------------------------------------
    Item Name: YashussUnlimited Admin - Clean Bootstrap 4 Dashboard HTML Template
   Version: 3.0
    Author: YashussUnlimited
    Author URL: https://yashussunlimited.com/
==========================================================================================*/

// Row Oriented Chart
// ------------------------------
$(window).on("load", function(){

    // Callback that creates and populates a data table, instantiates the row oriented chart, passes in the data and draws it.
    var rowOriented = c3.generate({
        bindto: '#row-oriented',
        size: {height:400},
        color: {
            pattern: ['var(--primary)','var(--secondary)', 'var(--third)']
        },

        // Create the data table.
        data: {
            rows: [
                ['data1', 'data2', 'data3'],
                [90, 120, 300],
                [40, 160, 240],
                [50, 200, 290],
                [120, 160, 230],
                [80, 130, 300],
                [90, 220, 320],
            ]
        },
        grid: {
            y: {
                show: true
            }
        },
    });

    // Resize chart on sidebar width change
    $(".menu-toggle").on('click', function() {
        rowOriented.resize();
    });
});