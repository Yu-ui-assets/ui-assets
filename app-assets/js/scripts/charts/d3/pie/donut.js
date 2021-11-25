/*=========================================================================================
    File Name: donut.js
    Description: D3 simple donut chart
    ----------------------------------------------------------------------------------------
    Item Name: YashussUnlimited Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: YashussUnlimited
    Author URL: https://yashussunlimited.com/
==========================================================================================*/

// Donut chart
// ------------------------------
$(window).on("load", function(){

    var ele = d3.select("#basic-donut"),
    width = ele.node().getBoundingClientRect().width,
    height = 500,
    radius = Math.min(width, height) / 2;

    var color = d3.scale.ordinal()
    .range(["var(--primary)", "var(--secondary)", "var(--third)", "var(--danger)", "var(--danger-dark)", "var(--orange)", "var(--amber)"]);

    var arc = d3.svg.arc()
        .outerRadius(radius)
        .innerRadius(radius - 90);

    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.population; });

    var container = ele.append('svg');

    var svg = container
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    d3.csv("./app-assets/data/d3/pie/pie.csv", type, function(error, data) {
      if (error) throw error;

        var g = svg.selectAll(".arc")
          .data(pie(data))
        .enter().append("g")
          .attr("class", "arc");

        g.append("path")
          .attr("d", arc)
          .style("fill", function(d) { return color(d.data.age); });

        g.append("text")
          .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
          .attr("dy", ".15em")
          .style("fill", "#FFF")
          .text(function(d) { return d.data.age; });
    });

    function type(d) {
        d.population = +d.population;
        return d;
    }

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
      radius = Math.min(width, height) / 2;

      container.attr("width", width);
      svg.attr("width", width)
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      arc = d3.svg.arc()
        .outerRadius(radius)
        .innerRadius(radius - 90);

      svg.selectAll("path").attr("d", arc);
      svg.selectAll("text")
          .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; });
    }
});