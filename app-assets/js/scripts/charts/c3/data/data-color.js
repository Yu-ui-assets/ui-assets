/*=========================================================================================
    File Name: data-color.js
    Description: c3 data color chart
    ----------------------------------------------------------------------------------------
    Item Name: YashussUnlimited Admin - Clean Bootstrap 4 Dashboard HTML Template
   Version: 3.0
    Author: GeeksLabs
    Author URL: http://www.themeforest.net/user/geekslabs
==========================================================================================*/

// Data Color chart
// ------------------------------
$(window).on("load", function () {

    // Callback that creates and populates a data table, instantiates the data color chart, passes in the data and draws it.
    var dataColor = c3.generate({
        bindto: '#data-color',
        responsive: true,
        size: {
            height: 300
        },
        // Create the data table.
        data: {
            columns: [
                ['data1', 30, 20, 50, 40, 60, 50],
                ['data2', 200, 130, 90, 240, 130, 220],
                ['data3', 300, 200, 160, 400, 250, 250]
            ],
            type: 'bar',
            colors: {
                data1: 'var(--primary)',
                data2: 'var(--third)',
            },
            color: function (color, d) {
                // d will be 'id' when called for legends
                return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
            }
        },
        grid: {
            y: {
                show: true
            }
        },
    });

    // Resize chart on sidebar width change
    $(".menu-toggle").on('click', function () {
        if ($("body").hasClass("menu-collapsed")) {
            dataColor.resize({
                height: 300,
                width: 650
            });
        } else {
            dataColor.resize({
                height: 300,
                width: 760
            });
        }
    });
    setTimeout(function () {
        dataColor.resize();
    }, 1000);
});