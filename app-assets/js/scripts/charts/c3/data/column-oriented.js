/*=========================================================================================
    File Name: column-oriented.js
    Description: c3 column oriented chart
    ----------------------------------------------------------------------------------------
    Item Name: YashussUnlimited Admin - Clean Bootstrap 4 Dashboard HTML Template
   Version: 3.0
    Author: YashussUnlimited
    Author URL: https://yashussunlimited.com/
==========================================================================================*/

// Column Oriented Chart
// ------------------------------
$(window).on("load", function(){

    // Callback that creates and populates a data table, instantiates the column oriented chart, passes in the data and draws it.
    var columnOriented = c3.generate({
        bindto: '#column-oriented',
        size: {height:400},
        color: {
            pattern: ['var(--primary)', '#00BCD4', 'var(--third)']
        },

        // Create the data table.
        data: {
            columns: [
                ['data1', 30, 20, 50, 40, 60, 50],
                ['data2', 200, 130, 90, 240, 130, 220],
                ['data3', 300, 200, 160, 400, 250, 250]
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
        columnOriented.resize();
    });
});