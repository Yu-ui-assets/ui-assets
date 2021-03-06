/*=========================================================================================
    File Name: gradient-pie.js
    Description: D3 gradient pie chart
    ----------------------------------------------------------------------------------------
    Item Name: YashussUnlimited Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: YashussUnlimited
    Author URL: https://yashussunlimited.com/
==========================================================================================*/

// Gradient pie chart
// ------------------------------
$(window).on("load", function(){

    var salesData=[
        {label:"Basic", value:25, color:"#3f51b5"},
        {label:"Plus", value:11, color:"#5c6bc0"},
        {label:"Lite", value:22, color:"#ffc107"},
        {label:"Elite", value:28, color:"#E84A5F"},
        {label:"Delux", value:14, color:"#F8B195"}
    ];

    var ele = d3.select("#gradient-pie"),
    width = ele.node().getBoundingClientRect().width,
    height = 450,
    svg = ele.append("svg").attr("width", width).attr("height", height);

    svg.append("g").attr("id","salespie");

    gradPie.draw("salespie", salesData, width / 2, height / 2, 220);

    // Resize chart
    // ------------------------------

    // Call function on window resize
    $(window).on('resize', resize);

    // Call function on sidebar width change
    $('.menu-toggle').on('click', resize);

    // Resize function
    // ------------------------------
    function resize() {

        width = ele.node().getBoundingClientRect().width;

        // Width of appended group
        svg.attr("width", width);

        d3.select("#salespie g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    }
});