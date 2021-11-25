    // Data Color chart
    // ------------------------------
    $(window).on("load", function () {




        // Callback that creates and populates a data table, instantiates the data color chart, passes in the data and draws it.
        var dataColor = c3.generate({
            bindto: '#data-color',
            responsive: true,
            size: {
                height: 350
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
                    data2: 'var(--secondary)',
                    data3: 'var(--third)'
                },
                color: function (color, d) {
                    // d will be 'id' when called for legends
                    return d.id && d.id === '' ? d3.rgb(color).darker(d.value / 150) : color;
                }
            },
            grid: {
                y: {
                    show: true
                }
            },
        });


        // DonutPie
        var donutCharts = c3.generate({
            bindto: '#donut_charts',
            responsive: true,
            size: {
                height: 250,
                width: 250
            },

            data: {
                columns: [
                    ['data1', 60],
                    ['data2', 30],
                    ['data3', 10],
                ],
                type: 'donut',
                colors: {
                    data1: 'var(--primary)',
                    data2: 'var(--secondary)',
                    data3: 'var(--third)'
                },
                donut: {
                    title: ""
                },
                onclick: function (d, i) {
                    console.log("onclick", d, i);
                },
                onmouseover: function (d, i) {
                    console.log("onmouseover", d, i);
                },
                onmouseout: function (d, i) {
                    console.log("onmouseout", d, i);
                }
            },

        });

        // $(".menu-toggle").on('click', function () {

        // });
        // setTimeout(function () {

        // });


        var mobile_width = $(window).width();
        if (mobile_width <= "768") {
            donutCharts.resize({
                width: 180,
                height: 180

            });
        }

        // Resize chart on sidebar width change
        $(".menu-toggle").on('click', function () {

            var mobile_width = $(window).width();
            // alert(mobile_width);

            if (mobile_width <= "425") {
                dataColor.resize();
                donutCharts.resize();
            } else if (mobile_width <= "768") {
                if ($("body").hasClass("menu-collapsed")) {
                    dataColor.resize({
                        height: 350,
                        width: 450
                    });
                    donutCharts.resize({
                        width: 180,
                        height: 180

                    });

                } else {
                    dataColor.resize({
                        height: 350,
                        width: 624
                    });
                    donutCharts.resize({
                        width: 180,
                        height: 180

                    });
                }
                // donutCharts.resize();
            } else {

                donutCharts.resize({
                    height: 250,
                    width: 250
                }, 1000);
                if ($("body").hasClass("menu-collapsed")) {
                    dataColor.resize({
                        height: 350,
                        width: 650
                    });
                } else {
                    dataColor.resize({
                        height: 350,
                        width: 760
                    });
                }
            }

        });
        // setTimeout(function () {
        //     dataColor.resize();
        //     donutCharts.resize();
        // }, 1000);
    });

    /*****************************************************
     *               Grouped Card Statistics              *
     *****************************************************/
    var rtl = false;
    if ($("html").data("textdirection") == "rtl") rtl = true;

    $(".knob").knob({
        rtl: rtl,
        draw: function () {
            var ele = this.$;
            var style = ele.attr("style");
            style = style.replace("bold", "normal");
            var fontSize = parseInt(ele.css("font-size"), 10);
            var updateFontSize = Math.ceil(fontSize * 1.65);
            style = style.replace("bold", "normal");
            style = style + "font-size: " + updateFontSize + "px;";
            var icon = ele.attr("data-knob-icon");
            ele.hide();
            $('<i class="knob-center-icon ' + icon + '"></i>')
                .insertAfter(ele)
                .attr("style", style);

            // "tron" case
            if (this.$.data("skin") == "tron") {
                this.cursorExt = 0.3;

                var a = this.arc(this.cv), // Arc
                    pa, // Previous arc
                    r = 1;

                this.g.lineWidth = this.lineWidth;

                if (this.o.displayPrevious) {
                    pa = this.arc(this.v);
                    this.g.beginPath();
                    this.g.strokeStyle = this.pColor;
                    this.g.arc(
                        this.xy,
                        this.xy,
                        this.radius - this.lineWidth,
                        pa.s,
                        pa.e,
                        pa.d
                    );
                    this.g.stroke();
                }

                this.g.beginPath();
                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                this.g.arc(
                    this.xy,
                    this.xy,
                    this.radius - this.lineWidth,
                    a.s,
                    a.e,
                    a.d
                );
                this.g.stroke();

                this.g.lineWidth = 2;
                this.g.beginPath();
                this.g.strokeStyle = this.o.fgColor;
                this.g.arc(
                    this.xy,
                    this.xy,
                    this.radius - this.lineWidth + 1 + (this.lineWidth * 2) / 3,
                    0,
                    2 * Math.PI,
                    false
                );
                this.g.stroke();

                return false;
            }
        }
    });
    $(document).ready(function () {


    });