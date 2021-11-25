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

// load data first 

$(window).on("load", function () {

    // Callback that creates and populates a data table, instantiates the data color chart, passes in the data and draws it.
    var dataColor = c3.generate({
        bindto: '#data-color',
        // size: {height:300},
        size: {
            height: 300,
            width: 550
        },

        // Create the data table.

        data: {
            x: 'x',
            columns: [
                ['x', 'J', 'F', 'M', 'A', 'M', 'J','J', 'A', 'S', 'O', 'N', 'D'],
                ['Full Score', 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50], 
                ['Critical Score', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220],
                ['Weighted Score', 300, 200, 160, 400, 250, 250, 300, 200, 160, 400, 250, 250]

            ],

            type: 'bar',
            colors: {
                'Full Score': '#0000ff',
                'Critical Score': '#ff0000',
                'Weighted Score': '#008000',
            },
            color: function (color, d) {
                // d will be 'id' when called for legends
                return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
            }
        },
        axis: {
            x: {
                type: 'category',
                tick: {
                    multiline: false
                }
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
        dataColor.resize();
    });
    setTimeout(function () {
        dataColor.resize();

    })


});

// change data after dropdown change
function filter(id) {
    if ($("#" + id).val() == "quarterly") {
        // Callback that creates and populates a data table, instantiates the data color chart, passes in the data and draws it.
        var dataColor = c3.generate({
            bindto: '#data-color',
            // size: {height:300},
            size: {
                height: 300,
                width: 550
            },

            // Create the data table.

            data: {
                x: 'x',
                columns: [
                    ['x', 'JFM', 'AMJ', 'JAS','OND'],
                    ['Full Score', 30, 20, 50,60],
                    ['Critical Score', 200, 130, 90,100],
                    ['Weighted Score', 300, 200, 160,130]

                ],

                type: 'bar',
                colors: {
                    'Full Score': '#0000ff',
                    'Critical Score': '#ff0000',
                    'Weighted Score': '#008000',
                },
                color: function (color, d) {
                    // d will be 'id' when called for legends
                    return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
                }
            },
            axis: {
                x: {
                    type: 'category',
                    tick: {
                        multiline: false
                    }
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
            dataColor.resize();
        });
        setTimeout(function () {
            dataColor.resize();

        })



    }
     else if ($("#" + id).val() == "biyearly") {
        // Callback that creates and populates a data table, instantiates the data color chart, passes in the data and draws it.
        var dataColor = c3.generate({
            bindto: '#data-color',
            // size: {height:300},
            size: {
                height: 300,
                width: 550
            },

            // Create the data table.

            data: {
                x: 'x',
                columns: [
                    ['x', 'JAN-JUN', 'JUL-DEC'],
                    ['Full Score', 30, 20],
                    ['Critical Score', 200, 130],
                    ['Weighted Score', 300, 200]

                ],

                type: 'bar',
                colors: {
                    'Full Score': '#0000ff',
                    'Critical Score': '#ff0000',
                    'Weighted Score': '#008000',
                },
                color: function (color, d) {
                    // d will be 'id' when called for legends
                    return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
                }
            },
            axis: {
                x: {
                    type: 'category',
                    tick: {
                        multiline: false
                    }
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
            dataColor.resize();
        });
        setTimeout(function () {
            dataColor.resize();

        })



    } 
    else if ($("#" + id).val() == "monthly") {
        // Callback that creates and populates a data table, instantiates the data color chart, passes in the data and draws it.
        var dataColor = c3.generate({
            bindto: '#data-color',
            // size: {height:300},
            size: {
                height: 300,
                width: 550
            },

            // Create the data table.

            data: {
                x: 'x',
                columns: [
                    ['x', 'J', 'F', 'M', 'A', 'M', 'J','J', 'A', 'S', 'O', 'N', 'D'],
                ['Full Score', 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50], 
                ['Critical Score', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220],
                ['Weighted Score', 300, 200, 160, 400, 250, 250, 300, 200, 160, 400, 250, 250]

                ],

                type: 'bar',
                colors: {
                    'Full Score': '#0000ff',
                    'Critical Score': '#ff0000',
                    'Weighted Score': '#008000',
                },
                color: function (color, d) {
                    // d will be 'id' when called for legends
                    return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
                }
            },
            axis: {
                x: {
                    type: 'category',
                    tick: {
                        multiline: false
                    }
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
            dataColor.resize();
        });
        setTimeout(function () {
            dataColor.resize();

        })



    }
}