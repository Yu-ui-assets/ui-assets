    /********************************************
     *				Events Colors				*
     ********************************************/

    // calendar js plugin
    $(function () {
        $('#fc-event-colors-2').fullCalendar({
            defaultView: 'month',
            eventRender: function (eventObj, $el) {
                $el.popover({
                    title: eventObj.title,
                    content: eventObj.description,
                    trigger: 'hover',
                    placement: 'top',
                    container: 'body'
                });
            },
            header: {

                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            buttonText: {
                today: 'Today',
                month: 'Month',
                week: 'Week',
                day: 'Day',
                prev:"Prev",
                next:"Next"
            },
            

            selectable: true,
            selectHelper: true,
           /*  select: function (start, end, allDay) {
                $("#add_calendar_event_modal").modal('show');
            }, */
            businessHours: false, // display business hours
            editable: false, //Avoid Event from Dragging
            timeFormat: 'hh:mm a',
            events: [{
                    title: 'Event 1',
                    start: '2020-04-06T11:30',
                    end: '2020-04-06T12:30',
                    color: '#967ADC',
                    description: 'All day long meeting with CEO',


                },
                {
                    title: 'Event 2',
                    start: '2020-04-02',
                    end: '2020-04-02T15:30:00',
                    color: '#37BC9B',
                    description: 'All day long meeting with ',
                    meridiem: 'short'

                },
                {
                    title: 'Event 6',
                    start: '2020-04-15T15:00:00',
                    end: '2020-04-15T16:00:00',
                    color: '#018ee0',
                    description: 'Desk Audit',
                    meridiem: 'short'

                },
                {

                    title: 'Event 4',
                    start: '2020-04-07',
                    end: '2020-04-07',
                    color: '#8bc34a',
                    description: 'Final Audit - 07 April 2020',

                },
                {

                    title: 'Event 5',
                    start: '2020-04-18',
                    end: '2020-04-18',
                    color: '#DA4453',
                    description: 'All Day - Planned Full Site Physical Audit',
                    hour: 'numeric',
                    minute: '2-digit',
                    meridiem: false

                },
                {

                    title: 'Event 8',
                    start: '2020-04-20T10:30:00',
                    end: '2020-04-20T12:30:00',
                    color: 'orange',
                    description: 'All meeting with Team lead',

                },
                {

                    title: 'Event 10',
                    start: '2020-04-26',
                    end: '2020-04-26',
                    color: 'red',
                    description: 'Holidays',

                },


            ],
            customButtons: {
                addScheduleButton: {
                    text: 'Schedule Event',
                    click: function () {
                        $("#add_calendar_event_modal").modal('show');
                        var eventName = $('#event_name').val();
                    }
                }
            },
            eventClick: function (event, jsEvent, view) {
                event_modal_trigger(event);
            },
        });

    });


    function close_filter_div() {
        $("#filter_div_calendar").hide();
    }

    function filter_div_reset() {
        $(".filter_reset").prop("checked", false);
    }

    function filter_div_open() {
        $("#filter_div").show();
    }

    function event_modal_trigger(event) {
        var update_event_name = $("#modalTitle").html(event.title);
        $("#hidden_text").val(event.start);
        $("#hidden_text").val();
        var dateTime = $("#hidden_text").val();
        var selectedDate = dateTime.split(' ', 4).join(' ');
        var editTime = $("#event_start_date_edit").val(selectedDate);

        // to show annual edit form
        if (event.title == "Planned Full Site Online Audit") {
            $("#annual_edit_online_modal").modal();
        } else if (event.title == "Planned Cluster Audit") {
            $("#annual_cluster_edit_modal").modal();
        } else if (event.title == "Planned Full Site Physical Audit") {
            $("#annual_edit_physical_modal").modal();
        } else if (event.title == "Planned Desk Audit") {
            $("#annual_desk_edit_modal").modal();
        }
        // to show annual edit form
        else if (event.title == "Full Site") {


            $("#regular_edit_modal").modal();
        }
        // to show cluster edit form
        else if (event.title == "Cluster Audit") {


            $("#cluster_edit_modal").modal();
        } // to show annual edit form
        else if (event.title == "Desk Audit") {


            $("#desk_edit_modal").modal();
        } else if (event.title == "Holidays") {


            $("#holiday_edit_modal").modal();
        } else if (event.title == "Important Act Schedule") {


            $("#imp_act_edit_modal").modal();
        }


        // $("#update_event_btn").click(function() {
        //     $('#fc-event-colors-2').fullCalendar('renderEvent', {
        //         title: update_event_name,
        //         start: editTime,
        //         allDay: true,
        //         color: blue,
        //     });
        // });


        // vendor time for annual edit modal
        $(".vendor1_time").html($("#event_start_time_edit_annual").val());

        //list view time for regular,annual,cluster
        var extrahr = parseInt($('#event_start_time_edit_annual').val().split(":")[0]) + 1;
        extrahr.toString();
        var a = $('#event_start_time_edit_annual').val().split(":");
        a[0] = extrahr.toString();
        a.toString();
        var b = a.toString();
        var plus_1 = b.replace(',', ':');
        $(".vendor2_time").html(plus_1);

        var extrahr_2 = parseInt($('#event_start_time_edit_annual').val().split(":")[0]) + 2;
        extrahr_2.toString();
        var c = $('#event_start_time_edit_annual').val().split(":");
        c[0] = extrahr_2.toString();
        c.toString();
        var d = c.toString();
        var plus_2 = d.replace(',', ':');
        $(".vendor3_time").html(plus_2);

        $(".td-input").click(function () {

            setInterval(function () {

                $(".vendor1_time").html($("#event_start_time_edit_annual").val());

                var extrahr = parseInt($('#event_start_time_edit_annual').val().split(":")[0]) + 1;
                extrahr.toString();
                var a = $('#event_start_time_edit_annual').val().split(":");
                a[0] = extrahr.toString();
                a.toString();
                var b = a.toString();
                var plus_1 = b.replace(',', ':');
                $(".vendor2_time").html(plus_1);

                var extrahr_2 = parseInt($('#event_start_time_edit_annual').val().split(":")[0]) + 2;
                extrahr_2.toString();
                var c = $('#event_start_time_edit_annual').val().split(":");
                c[0] = extrahr_2.toString();
                c.toString();
                var d = c.toString();
                var plus_2 = d.replace(',', ':');
                $(".vendor3_time").html(plus_2);

            }, 1000);
        });



    }



    // calendar list js




    
        function downloadBtn() {
            toastr.success("Template downlading started");
        }

        function audit_manager_edit_modal() {
            $("#audit_manager_edit_modal").modal('show');
        }

        function event_list_view(event_type) {
            window.location.href = "./calendar/Calendar_controller/" + event_type;
        }
        // reload after cluster and regular submit button
        $("#update_event_btn_submit_regular").on("click", function() {
            $.confirm({
                title: '',
                type: 'orange',
                content: 'Are you sure you want to forward time slots for approval ?',
                buttons: {
                    text: 'Done!',
                    btnClass: 'btn-yu',
                    Yes: function() {
                        $.alert({
                            title: '',
                            content: 'Time slots sent for approval.',
                            type: 'green',
                            buttons: {
                                Okay: function() {
                                    location.reload().delay(4000);
                                }
                            }

                        });

                    },
                    No: function() {
                        $.alert({
                            title: '',
                            content: 'Time slots canceled',
                            type: 'red',
                        });
                    }


                }
            });
        });


        $("#update_event_btn_submit_cluster").on("click", function() {
            $.confirm({
                title: '',
                type: 'orange',
                content: 'Are you sure you want to reschedule the Audit ?',
                buttons: {
                    text: 'Done!',
                    btnClass: 'btn-yu',
                    Yes: function() {
                        $.alert({
                            title: '',
                            content: 'Audit Rescheduled Successfully',
                            type: 'green',
                            buttons: {
                                Okay: function() {
                                    location.reload().delay(4000);
                                }
                            }

                        });

                    },
                    No: function() {
                        $.alert({
                            title: '',

                            content: 'Audit Rescheduled canceled',
                            type: 'red',
                        });
                    }

                }
            });
        });

        $("#update_event_btn_annual").on("click", function() {
            $.confirm({
                title: '',
                type: 'orange',
                content: 'Are you sure you want to schedule audit ?',
                buttons: {
                    text: 'Done!',
                    btnClass: 'btn-yu',
                    Yes: function() {
                        $.alert({
                            title: '',

                            content: 'Audit Schedule',
                            type: 'green',

                        });

                    },
                    No: function() {
                        $.alert({
                            title: '',

                            content: 'Audit Schedule canceled',
                            type: 'red',
                        });
                    }

                }
            });
        });
        $("#update_event_btn_annual_physical").on("click", function() {
            $.confirm({
                title: '',
                type: 'orange',
                content: 'Are you sure you want to schedule audit ?',
                buttons: {
                    text: 'Done!',
                    btnClass: 'btn-yu',
                    Yes: function() {
                        $.alert({
                            title: '',

                            content: 'Audit Schedule',
                            type: 'green',

                        });

                    },
                    No: function() {
                        $.alert({
                            title: '',

                            content: 'Audit Schedule canceled',
                            type: 'red',
                        });
                    }

                }
            });
        });
        $("#update_event_btn_annual_cluster").on("click", function() {
            $.confirm({
                title: '',
                type: 'orange',
                content: 'Are you sure you want to schedule audit ?',
                buttons: {
                    text: 'Done!',
                    btnClass: 'btn-yu',
                    Yes: function() {
                        $.alert({
                            title: '',

                            content: 'Audit Schedule',
                            type: 'green',

                        });

                    },
                    No: function() {
                        $.alert({
                            title: '',

                            content: 'Audit Schedule canceled',
                            type: 'red',
                        });
                    }

                }
            });
        });
        $("#update_event_btn_annual_desk").on("click", function() {
            $.confirm({
                title: '',
                type: 'orange',
                content: 'Are you sure you want to schedule audit ?',
                buttons: {
                    text: 'Done!',
                    btnClass: 'btn-yu',
                    Yes: function() {
                        $.alert({
                            title: '',

                            content: 'Audit Schedule',
                            type: 'green',

                        });

                    },
                    No: function() {
                        $.alert({
                            title: '',

                            content: 'Audit Schedule canceled',
                            type: 'red',
                        });
                    }

                }
            });
        });
        $("#update_event_btn_imp_act").on("click", function() {
            $.confirm({
                title: '',
                type: 'orange',
                content: 'Are you sure you want to schedule audit ?',
                buttons: {
                    text: 'Done!',
                    btnClass: 'btn-yu',
                    Yes: function() {
                        $.alert({
                            title: '',

                            content: 'Audit Scheduled',
                            type: 'green',

                        });

                    },
                    No: function() {
                        $.alert({
                            title: '',

                            content: 'Audit Schedule canceled',
                            type: 'red',
                        });
                    }

                }
            });
        });

        $("#update_event_btn_holiday").on("click", function() {
            $.confirm({
                title: '',
                type: 'orange',
                content: 'Are you sure you want to schedule holiday ?',
                buttons: {
                    text: 'Done!',
                    btnClass: 'btn-yu',
                    Yes: function() {
                        $.alert({
                            title: '',
                            content: 'Holiday Scheduled',
                            type: 'green',

                        });

                    },
                    No: function() {
                        $.alert({
                            title: '',

                            content: 'Holiday Schedule canceled',
                            type: 'red',
                        });
                    }

                }
            });
        });

        $("#reschedule_audit_manager").on("click", function() {
            $.confirm({
                title: '',
                type: 'orange',
                content: 'Are you sure you want to reschedule the Audit ?',
                buttons: {
                    text: 'Done!',
                    btnClass: 'btn-yu',
                    Yes: function() {
                        $.alert({
                            title: '',
                            content: 'Audit Rescheduled Successfully',
                            type: 'green',
                            buttons: {
                                Okay: function() {
                                    location.reload().delay(4000);
                                }
                            }

                        });

                    },
                    No: function() {
                        $.alert({
                            title: '',

                            content: 'Audit Schedule canceled',
                            type: 'red',
                        });
                    }

                }
            });
        });

        $(".accept_1").click(function() {
            $("#status_icon_accpet_1").show();
            $("#status_icon_reject_1").hide();
            $("#status_icon_reject_1").removeClass("cross");

            flag_check_manager_accept();
        });

        $(".reject_1").click(function() {
            $("#reject_1_hidden").val('1');
            $("#status_icon_reject_1").show();
            $("#status_icon_accpet_1").hide();

            $("#status_icon_reject_1").addClass("cross");
            flag_check_manager();

        });
        $(".accept_2").click(function() {
            $("#status_icon_accpet_2").show();
            $("#status_icon_reject_2").hide();
            $("#status_icon_reject_2").removeClass("cross");

            flag_check_manager_accept();

        });

        $(".reject_2").click(function() {
            $("#reject_2_hidden").val('1');
            $("#status_icon_reject_2").show();
            $("#status_icon_accpet_2").hide();

            $("#status_icon_reject_2").addClass("cross");

            flag_check_manager();
        });

        function flag_check_manager() {

            if ($("#status_icon_reject_1").hasClass("cross") && $("#status_icon_reject_2").hasClass("cross")) {
                $(".audit_manager_reschedule_modal").show();
            }

        }


        function flag_check_manager_accept() {
            if ($("#status_icon_accpet_1").is(":visible") || $("#status_icon_accpet_2").is(":visible") == true) {
                $(".audit_manager_reschedule_modal").hide();

            }
        }

        $(".next_slot").click(function() {
            $(".next_time_slot").show();
        });


        $("#reschedule_client_btn").click(function() {
            $("#reschedule_client_modal").toggle("slow");
            $("#regular_edit_form").hide();

            // used to hide the reschedule button for client demo flow 
            $("#reschedule_client_btn").hide();
            $("#update_event_btn_submit_regular").show();
        });

        $("#reschedule_audit_manager_btn").click(function() {
            $("#cluster_audit_manager_modal").toggle("slow");
            $(".cluster_audit_modal_edit").hide()

            // used to hide the reschedule button for audit manager demo flow 
            $("#reschedule_audit_manager_btn").hide();
            $("#update_event_btn_submit_cluster").show();

        });

        $('[data-toggle="popover"]').popover({
            trigger: 'hover'
        });






        // display todays date
        var t_date = (new Date()).toString().split(' ').splice(1, 3).join(' ');
        $("#t_date").html(t_date);

        function open_edit_modal(event_name) {
            if (event_name == "1") {
                $("#regular_edit_modal").modal('show');
            } else if (event_name == "2") {
                $("#cluster_edit_modal").modal('show');
            } else if (event_name == "3") {
                $("#annual_edit_modal").modal('show');
            } else if (event_name == "4") {
                $("#imp_act_edit_modal").modal('show');
            } else if (event_name == "5") {
                $("#holiday_edit_modal").modal('show');
            } else if (event_name == "6") {
                $("#desk_edit_modal").modal('show');
            } else if (event_name == "7") {
                $("#annual_cluster_edit_modal").modal('show');
            } else if (event_name == "8") {
                $("#annual_desk_edit_modal").modal('show');
            } else if (event_name == "9") {
                $("#annual_edit_physical_modal").modal('show');
            }
        }
    
    
        // Change add event form
        $("#select_event_dropdown").on('change', function() {

            if ($("#select_event_dropdown").selectivity('val') == "regular_audit_selected") {
                $(".regular_audit_form").show();
                $(".annual_audit_form").hide();
                $(".act_audit_form").hide();
                $(".holiday_audit_form").hide();
                $(".cluster_audit_form").hide();
                $(".desk_audit_form").hide();
                $(".head_form_title").html("Full Site");

            } else if ($("#select_event_dropdown").selectivity('val') == "annual_audit_selected") {
                $(".regular_audit_form").hide();
                $(".annual_audit_form").show();
                $(".act_audit_form").hide();
                $(".holiday_audit_form").hide();
                $(".cluster_audit_form").hide();
                $(".desk_audit_form").hide();
                $(".head_form_title").html("Planned Audit");

            } else if ($("#select_event_dropdown").selectivity('val') == "act_audit_selected") {
                $(".regular_audit_form").hide();
                $(".annual_audit_form").hide();
                $(".act_audit_form").show();
                $(".holiday_audit_form").hide();
                $(".cluster_audit_form").hide();
                $(".desk_audit_form").hide();
                $(".head_form_title").html("Important Act Date");

            } else if ($("#select_event_dropdown").selectivity('val') == "holiday_audit_selected") {
                $(".regular_audit_form").hide();
                $(".annual_audit_form").hide();
                $(".act_audit_form").hide();
                $(".holiday_audit_form").show();
                $(".cluster_audit_form").hide();
                $(".desk_audit_form").hide();
                $(".head_form_title").html("Holiday");

            } else if ($("#select_event_dropdown").selectivity('val') == "cluster_audit_selected") {
                $(".regular_audit_form").hide();
                $(".annual_audit_form").hide();
                $(".act_audit_form").hide();
                $(".holiday_audit_form").hide();
                $(".cluster_audit_form").show();
                $(".desk_audit_form").hide();
                $(".head_form_title").html("Cluster Audit");

            } else if ($("#select_event_dropdown").selectivity('val') == "desk_audit_selected") {
                $(".regular_audit_form").hide();
                $(".annual_audit_form").hide();
                $(".act_audit_form").hide();
                $(".holiday_audit_form").hide();
                $(".cluster_audit_form").hide();
                $(".desk_audit_form").show();
                $(".head_form_title").html("Desk Audit");
            }
        });

        // Confirm for add event submit button
        $("#calendar_submit_button_event").click(function() {

            if ($("#select_event_dropdown").selectivity('val') == "regular_audit_selected") {

                $.confirm({
                    title: '',
                    type: 'orange',
                    content: 'Are you sure you want to schedule full site ?',
                    buttons: {
                        text: 'Done!',
                        btnClass: 'btn-yu',
                        Yes: function() {
                            $.alert({
                                title: '',

                                content: 'Full site  Scheduled',
                                type: 'green',

                            });

                        },
                        No: function() {
                            $.alert({
                                title: '',

                                content: 'Full site Schedule canceled',
                                type: 'red',
                            });
                        }

                    }
                });


            } else if ($("#select_event_dropdown").selectivity('val') == "annual_audit_selected") {
                $.confirm({
                    title: '',
                    type: 'orange',
                    content: 'Are you sure you want to schedule Planned Audit?',
                    buttons: {
                        text: 'Done!',
                        btnClass: 'btn-yu',
                        Yes: function() {
                            $.alert({
                                title: '',

                                content: 'Planned Audit Scheduled',
                                type: 'green',

                            });

                        },
                        No: function() {
                            $.alert({
                                title: '',

                                content: 'Planned Audit Schedule canceled',
                                type: 'red',
                            });
                        }

                    }
                });
            } else if ($("#select_event_dropdown").selectivity('val') == "act_audit_selected") {
                $.confirm({
                    title: '',
                    type: 'orange',
                    content: 'Are you sure you want to schedule Important Act ?',
                    buttons: {
                        text: 'Done!',
                        btnClass: 'btn-yu',
                        Yes: function() {
                            $.alert({
                                title: '',

                                content: 'Important Act Scheduled',
                                type: 'green',

                            });

                        },
                        No: function() {
                            $.alert({
                                title: '',

                                content: 'Important Act Schedule canceled',
                                type: 'red',
                            });
                        }

                    }
                });
            } else if ($("#select_event_dropdown").selectivity('val') == "holiday_audit_selected") {
                $.confirm({
                    title: '',
                    type: 'orange',
                    content: 'Are you sure you want to schedule Holiday ?',
                    buttons: {
                        text: 'Done!',
                        btnClass: 'btn-yu',
                        Yes: function() {
                            $.alert({
                                title: '',

                                content: 'Holiday Scheduled',
                                type: 'green',

                            });

                        },
                        No: function() {
                            $.alert({
                                title: '',

                                content: 'Holiday Schedule canceled',
                                type: 'red',
                            });
                        }

                    }
                });
            } else if ($("#select_event_dropdown").selectivity('val') == "cluster_audit_selected") {
                $.confirm({
                    title: '',
                    type: 'orange',
                    content: 'Are you sure you want to schedule Cluster Audit ?',
                    buttons: {
                        text: 'Done!',
                        btnClass: 'btn-yu',
                        Yes: function() {
                            $.alert({
                                title: '',

                                content: 'Cluster Audit Scheduled',
                                type: 'green',

                            });

                        },
                        No: function() {
                            $.alert({
                                title: '',

                                content: 'Cluster Audit Schedule canceled',
                                type: 'red',
                            });
                        }

                    }
                });
            } else if ($("#select_event_dropdown").selectivity('val') == "desk_audit_selected") {
                $.confirm({
                    title: '',
                    type: 'orange',
                    content: 'Are you sure you want to schedule Desk Audit ?',
                    buttons: {
                        text: 'Done!',
                        btnClass: 'btn-yu',
                        Yes: function() {
                            $.alert({
                                title: '',

                                content: 'Desk Audit Scheduled',
                                type: 'green',

                            });

                        },
                        No: function() {
                            $.alert({
                                title: '',

                                content: 'Desk Audit Schedule canceled',
                                type: 'red',
                            });
                        }

                    }
                });
            }
        });
    


    
        function open_event_addition() {
            $('#add_calendar_event_modal').modal('show');
        }

        // frequency and month dropdown js in regular and cluster and Desk audit
        $("#regular_audit_frequency_selection").on('change', function(regular_audit_frequency_selection, regular_audit_col, regular_audit_layout, regular_year_sub, regular_month_sub, regular_qtr_sub, regular_hy_sub) {

            var value = $("#regular_audit_frequency_selection").selectivity('val');
            var select_dropdown = document.getElementById("regular_audit_col");
            if (value == "monthly") {
                $('#regular_audit_layout').show();
                $('#regular_year_sub').hide();
                $('#regular_month_sub').show();
                $('#regular_qtr_sub').hide();
                $('#regular_hy_sub').hide();
                $('#regular_bi_month_sub').hide();
                var html_options = "<select class='selectivity_dropdown' id='yr_dropdown_regular'>" +
                    "<option>Jan</option>" +
                    "<option>Feb</option>" +
                    "<option>Mar</option>" +
                    "<option>Apr</option>" +
                    "<option>May</option>" +
                    "<option>Jun</option>" +
                    "<option>Jul</option>" +
                    "<option>Aug</option>" +
                    "<option>Sep</option>" +
                    "<option>Oct</option>" +
                    "<option>Nov</option>" +
                    "<option>Dec</option></select>";
                select_dropdown.innerHTML = html_options;
            } else if (value == "quarterly") {

                $('#regular_audit_layout').show();
                $('#regular_year_sub').hide();
                $('#regular_month_sub').hide();
                $('#regular_qtr_sub').show();
                $('#regular_bi_month_sub').hide();
                $('#regular_hy_sub').hide();
                var html_options = "<select class='selectivity_dropdown' id='qtr_dropdown_regular'>" +
                    "<option>Jan-Feb-Mar</option>" +
                    "<option>Apr-May-Jun</option>" +
                    "<option>Jul-Aug-Sep</option>" +
                    "<option>Oct-Nov_Dec</option></select>";
                select_dropdown.innerHTML = html_options;
            } else if (value == "half_yearly") {

                $('#regular_audit_layout').show();
                $('#regular_year_sub').hide();
                $('#regular_month_sub').hide();
                $('#regular_qtr_sub').hide();
                $('#regular_bi_month_sub').hide();
                $('#regular_hy_sub').show();
                var html_options = "<select class='selectivity_dropdown' id='half_yr_dropdown_regular'>" +
                    "<option>Jan - Jun</option>" +
                    "<option>July - Dec</option></select>";
                select_dropdown.innerHTML = html_options;
            } else if (value == "yearly") {

                $('#regular_audit_layout').show();
                $('#regular_year_sub').show();
                $('#regular_month_sub').hide();
                $('#regular_qtr_sub').hide();
                $('#regular_hy_sub').hide();
                $('#regular_bi_month_sub').hide();

                var html_options = "<select class='selectivity_dropdown' id='year_dropdown_regular'>" +
                    "<option>Jan</option>" +
                    "<option>Feb</option>" +
                    "<option>Mar</option>" +
                    "<option>Apr</option>" +
                    "<option>May</option>" +
                    "<option>Jun</option>" +
                    "<option>Jul</option>" +
                    "<option>Aug</option>" +
                    "<option>Sep</option>" +
                    "<option>Oct</option>" +
                    "<option>Nov</option>" +
                    "<option>Dec</option></select>";
                select_dropdown.innerHTML = html_options;

            } else if (value == "bi-monthly") {
                // alert(value);
                $('#regular_audit_layout').show();
                $('#regular_bi_month_sub').show();
                $('#regular_year_sub').hide();
                $('#regular_month_sub').hide();
                $('#regular_qtr_sub').hide();
                $('#regular_hy_sub').hide();
                var html_options = "<select class='selectivity_dropdown' id='bi_month_dropdown_regular'>" +
                    "<option>Jan</option>" +
                    "<option>Feb</option>" +
                    "<option>Mar</option>" +
                    "<option>Apr</option>" +
                    "<option>May</option>" +
                    "<option>Jun</option>" +
                    "<option>Jul</option>" +
                    "<option>Aug</option>" +
                    "<option>Sep</option>" +
                    "<option>Oct</option>" +
                    "<option>Nov</option>" +
                    "<option>Dec</option></select>";
                select_dropdown.innerHTML = html_options;
            } else {
                $('#regular_audit_col').hide();
            }
            month_dropdown_add_selectivity();
        });

        $("#audit_frequency_selection_cluster").on('change', function(audit_frequency_selection_cluster, regular_audit_col_cluster, regular_audit_layout_cluster, regular_year_sub_cluster, regular_month_sub_cluster, regular_qtr_sub_cluster, regular_hy_sub_cluster) {

            var value = $("#audit_frequency_selection_cluster").selectivity('val');
            var select_dropdown = document.getElementById("regular_audit_col_cluster");
            if (value == "monthly") {
                $('#regular_audit_layout_cluster').show();
                $('#regular_year_sub_cluster').hide();
                $('#regular_month_sub_cluster').show();
                $('#regular_qtr_sub_cluster').hide();
                $('#regular_hy_sub_cluster').hide();
                $('#regular_bi_month_sub_cluster').hide();
                var html_options = "<select class='selectivity_dropdown' id='yr_dropdown_regular_cluster'>" +
                    "<option>Jan</option>" +
                    "<option>Feb</option>" +
                    "<option>Mar</option>" +
                    "<option>Apr</option>" +
                    "<option>May</option>" +
                    "<option>Jun</option>" +
                    "<option>Jul</option>" +
                    "<option>Aug</option>" +
                    "<option>Sep</option>" +
                    "<option>Oct</option>" +
                    "<option>Nov</option>" +
                    "<option>Dec</option></select>";
                select_dropdown.innerHTML = html_options;
            } else if (value == "quarterly") {

                $('#regular_audit_layout_cluster').show();
                $('#regular_year_sub_cluster').hide();
                $('#regular_month_sub_cluster').hide();
                $('#regular_qtr_sub_cluster').show();
                $('#regular_bi_month_sub_cluster').hide();
                $('#regular_hy_sub_cluster').hide();
                var html_options = "<select class='selectivity_dropdown' id='qtr_dropdown_regular_cluster'>" +
                    "<option>Jan-Feb-Mar</option>" +
                    "<option>Apr-May-Jun</option>" +
                    "<option>Jul-Aug-Sep</option>" +
                    "<option>Oct-Nov-Dec</option></select>";
                select_dropdown.innerHTML = html_options;
            } else if (value == "half_yearly") {

                $('#regular_audit_layout_cluster').show();
                $('#regular_year_sub_cluster').hide();
                $('#regular_month_sub_cluster').hide();
                $('#regular_qtr_sub_cluster').hide();
                $('#regular_bi_month_sub_cluster').hide();
                $('#regular_hy_sub_cluster').show();
                var html_options = "<select class='selectivity_dropdown' id='half_yr_dropdown_regular_cluster'>" +
                    "<option>Jan - Jun</option>" +
                    "<option>July - Dec</option></select>";
                select_dropdown.innerHTML = html_options;
            } else if (value == "yearly") {

                $('#regular_audit_layout_cluster').show();
                $('#regular_year_sub_cluster').show();
                $('#regular_month_sub_cluster').hide();
                $('#regular_qtr_sub_cluster').hide();
                $('#regular_hy_sub_cluster').hide();
                $('#regular_bi_month_sub_cluster').hide();

                var html_options = "<select class='selectivity_dropdown' id='year_dropdown_regular_cluster'>" +
                    "<option>Select</option>" +
                    "<option>Jan</option>" +
                    "<option>Feb</option>" +
                    "<option>Mar</option>" +
                    "<option>Apr</option>" +
                    "<option>May</option>" +
                    "<option>Jun</option>" +
                    "<option>Jul</option>" +
                    "<option>Aug</option>" +
                    "<option>Sep</option>" +
                    "<option>Oct</option>" +
                    "<option>Nov</option>" +
                    "<option>Dec</option></select>";
                select_dropdown.innerHTML = html_options;

            } else if (value == "bi-monthly") {
                // alert(value);
                $('#regular_audit_layout_cluster').show();
                $('#regular_bi_month_sub_cluster').show();
                $('#regular_year_sub_cluster').hide();
                $('#regular_month_sub_cluster').hide();
                $('#regular_qtr_sub_cluster').hide();
                $('#regular_hy_sub_cluster').hide();
                var html_options = "<select class='selectivity_dropdown' id='bi_month_dropdown_regular_cluster'>" +
                    "<option>Jan</option>" +
                    "<option>Feb</option>" +
                    "<option>Mar</option>" +
                    "<option>Apr</option>" +
                    "<option>May</option>" +
                    "<option>Jun</option>" +
                    "<option>Jul</option>" +
                    "<option>Aug</option>" +
                    "<option>Sep</option>" +
                    "<option>Oct</option>" +
                    "<option>Nov</option>" +
                    "<option>Dec</option></select>";
                select_dropdown.innerHTML = html_options;
            } else {
                $('#regular_audit_col_cluster').hide();
            }
            month_dropdown_add_selectivity();
        });

        $("#desk_audit_frequency_selection").on('change', function(desk_audit_frequency_selection, desk_audit_col, desk_audit_layout, desk_year_sub, desk_month_sub, desk_qtr_sub, desk_hy_sub) {

            var value = $("#desk_audit_frequency_selection").selectivity('val');
            var select_dropdown = document.getElementById("desk_audit_col");
            if (value == "monthly") {
                $('#desk_audit_layout').show();
                $('#desk_year_sub').hide();
                $('#desk_month_sub').show();
                $('#desk_qtr_sub').hide();
                $('#desk_hy_sub').hide();
                $('#desk_bi_month_sub').hide();
                var html_options = "<select class='selectivity_dropdown' id='yr_dropdown_desk'>" +
                    "<option>Jan</option>" +
                    "<option>Feb</option>" +
                    "<option>Mar</option>" +
                    "<option>Apr</option>" +
                    "<option>May</option>" +
                    "<option>Jun</option>" +
                    "<option>Jul</option>" +
                    "<option>Aug</option>" +
                    "<option>Sep</option>" +
                    "<option>Oct</option>" +
                    "<option>Nov</option>" +
                    "<option>Dec</option></select>";
                select_dropdown.innerHTML = html_options;
            } else if (value == "quarterly") {

                $('#desk_audit_layout').show();
                $('#desk_year_sub').hide();
                $('#desk_month_sub').hide();
                $('#desk_qtr_sub').show();
                $('#desk_bi_month_sub').hide();
                $('#desk_hy_sub').hide();
                var html_options = "<select class='selectivity_dropdown' id='qtr_dropdown_desk'>" +
                    "<option>Jan-Feb-Mar</option>" +
                    "<option>Apr-May-Jun</option>" +
                    "<option>Jul-Aug-Sep</option>" +
                    "<option>Oct-Nov_Dec</option></select>";
                select_dropdown.innerHTML = html_options;
            } else if (value == "half_yearly") {

                $('#desk_audit_layout').show();
                $('#desk_year_sub').hide();
                $('#desk_month_sub').hide();
                $('#desk_qtr_sub').hide();
                $('#desk_bi_month_sub').hide();
                $('#desk_hy_sub').show();
                var html_options = "<select class='selectivity_dropdown' id='half_yr_dropdown_desk'>" +
                    "<option>Jan - Jun</option>" +
                    "<option>July - Dec</option></select>";
                select_dropdown.innerHTML = html_options;
            } else if (value == "yearly") {

                $('#desk_audit_layout').show();
                $('#desk_year_sub').show();
                $('#desk_month_sub').hide();
                $('#desk_qtr_sub').hide();
                $('#desk_hy_sub').hide();
                $('#desk_bi_month_sub').hide();

                var html_options = "<select class='selectivity_dropdown' id='year_dropdown_desk'>" +
                    "<option>Jan</option>" +
                    "<option>Feb</option>" +
                    "<option>Mar</option>" +
                    "<option>Apr</option>" +
                    "<option>May</option>" +
                    "<option>Jun</option>" +
                    "<option>Jul</option>" +
                    "<option>Aug</option>" +
                    "<option>Sep</option>" +
                    "<option>Oct</option>" +
                    "<option>Nov</option>" +
                    "<option>Dec</option></select>";
                select_dropdown.innerHTML = html_options;

            } else if (value == "bi-monthly") {
                // alert(value);
                $('#desk_audit_layout').show();
                $('#desk_bi_month_sub').show();
                $('#desk_year_sub').hide();
                $('#desk_month_sub').hide();
                $('#desk_qtr_sub').hide();
                $('#desk_hy_sub').hide();
                var html_options = "<select class='selectivity_dropdown' id='bi_month_dropdown_desk'>" +
                    "<option>Jan</option>" +
                    "<option>Feb</option>" +
                    "<option>Mar</option>" +
                    "<option>Apr</option>" +
                    "<option>May</option>" +
                    "<option>Jun</option>" +
                    "<option>Jul</option>" +
                    "<option>Aug</option>" +
                    "<option>Sep</option>" +
                    "<option>Oct</option>" +
                    "<option>Nov</option>" +
                    "<option>Dec</option></select>";
                select_dropdown.innerHTML = html_options;
            } else {
                $('#desk_audit_col').hide();
            }
            month_dropdown_add_selectivity();
        });

        function annual_list_view() {
            window.location.href = "calendar_annual_event";
        }
    




    
        // Datatable for audit history

        $('#upload_file').modal('hide');
        $('#upload').click(function() {
            $('#upload_file').slideToggle(200);
        })
        $('#save_toggle_row').click(function() {
            $('#modal_toggle_row').hide();
        })

        $('#close').click(function() {
            $('#upload_file').modal('hide');
        })
        // Select All Checkbox Logic
        $("#select_all").change(function() { //"select all" change 
            var status = this.checked; // "select all" checked status
            $('.checkbox').each(function() { //iterate all listed checkbox items
                this.checked = status; //change ".checkbox" checked status
            });
        });

        $('.checkbox').change(function() { //".checkbox" change 
            //uncheck "select all", if one of the listed checkbox item is unchecked
            if (this.checked == false) { //if this item is unchecked
                $("#select_all")[0].checked = false; //change "select all" checked status to false
            }

            //check "select all" if all checkbox items are checked
            if ($('.checkbox:checked').length == $('.checkbox').length) {
                $("#select_all")[0].checked = true; //change "select all" checked status to true
            }
        });

        $('#continuebtn').click(function() {
            $('#uploadfile2').modal('hide');
        });
        $('#reset_toggle_row').click(function() {
            $('input[type="checkbox"]').each(function() {
                this.checked = false;
            });
        })

        // Search From Options 
        function search() {
            // Declare variables
            var input, filter, ul, li, a, i, txtValue;
            input = document.getElementById('myInput');
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
            li = ul.getElementsByTagName('li');

            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                    ul.style.height = '10px';
                }
            }
        }
    

    
        // calendar list js -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        $(document).ready(function() {

            // event time 11a to 11am
            //  $(".fc-time").html('11am');

            var table = $('#calendar_list_grid').DataTable({
                orderCellsTop: true,
                fixedHeader: true,
                "bStateSave": true,
                "columnDefs": [{
                    "targets": 0,
                    "orderable": false,
                }],
                'aaSorting': [
                    [1, 'asc']
                ],
                ordering: false,
                dom: 'Bfr<"table-responsive"t>ip',
                buttons: [{
                        className: 'delete_button',
                        text: '<i class="la la-trash"></i>',
                        titleAttr: 'Delete All',
                    },

                    {
                        className: 'filter_export_button',
                        text: '<i class="la la-download"></i>',
                        titleAttr: 'Filter and Export',
                    },

                    {
                        extend: 'colvis',
                        className: 'hide_show_button',
                        text: '<i class="la la-eye-slash" title="Hide/Unhide Columns"></i>',
                        titleAttr: 'Hide or Show Columns',
                    },

                    {
                        extend: 'pageLength',
                        text: '<i class="la la-list-ol" title="Toggle Page Length"></i>',
                        className: 'excel_button ',
                        titleAttr: 'Toggle Page Length'
                    },
                ],

            });
            new $.fn.dataTable.FixedColumns(table, {
                leftColumns: 1
            });
            $(function() {
                $("#calendar_list_grid").colResizable({
                    liveDrag: true,
                    gripInnerHtml: "<div class='grip'></div>",
                    draggingClass: "dragging",
                    resizeMode: 'overflow',
                    sScrollXInner: "100%"

                });
            });
            $(".delete_button").on("click", function() {
                $.confirm({
                    title: 'Delete!',
                    type: 'orange',
                    content: 'You are about to delete the selected Records... <br><b>Do you want to Delete selected records?</b>',
                    buttons: {
                        text: 'Done!',
                        btnClass: 'btn-yu',
                        delete: function() {
                            $.alert({
                                title: '',

                                content: 'Selected records are Deleted. <br><b>Record Deleted!</b>',
                                type: 'green',
                            });
                        },
                        cancel: function() {
                            $.alert({
                                title: '',

                                content: 'Record Deletion Failed!',
                                type: 'red',
                            });
                        }

                    }
                });
            });
            // filter open
            $(".filter_export_button").click(function() {
                $("#filter_div_calendar_list").show();
                $("#filter_div_apply").hide();
                $("#filter_div_save").show();

            });

        });

        $(document).ready(function() {
            var table = $('#calendar_list_grid_final').DataTable({
                orderCellsTop: true,
                fixedHeader: true,
                "bStateSave": true,
                "columnDefs": [{
                    "targets": 0,
                    "orderable": false,
                }],
                'aaSorting': [
                    [1, 'asc']
                ],
                ordering: false,
                dom: 'Bfr<"table-responsive"t>ip',
                buttons: [{
                        className: 'filter_export_button',
                        text: '<i class="la la-download"></i>',
                        titleAttr: 'Filter and Export',
                    },

                    {
                        extend: 'colvis',
                        className: 'hide_show_button',
                        text: '<i class="la la-eye-slash" title="Hide/Unhide Columns"></i>',
                        titleAttr: 'Hide or Show Columns',
                    },

                    {
                        extend: 'pageLength',
                        text: '<i class="la la-list-ol" title="Toggle Page Length"></i>',
                        className: 'excel_button ',
                        titleAttr: 'Toggle Page Length'
                    },
                ],
            });

            new $.fn.dataTable.FixedColumns(table, {
                leftColumns: 1
            });
            $(function() {
                $("#calendar_list_grid_final").colResizable({
                    liveDrag: true,
                    gripInnerHtml: "<div class='grip'></div>",
                    draggingClass: "dragging",
                    resizeMode: 'overflow',
                    sScrollXInner: "100%"

                });
            });
            $(".delete_button").on("click", function() {
                $.confirm({
                    title: 'Delete!',
                    type: 'orange',
                    content: 'You are about to delete the selected Records... <br><b>Do you want to Delete selected records?</b>',
                    buttons: {
                        text: 'Done!',
                        btnClass: 'btn-yu',
                        delete: function() {
                            $.alert({
                                title: '',

                                content: 'Selected records are Deleted. <br><b>Record Deleted!</b>',
                                type: 'green',
                            });
                        },
                        cancel: function() {
                            $.alert({
                                title: '',

                                content: 'Record Deletion Failed!',
                                type: 'red',
                            });
                        }

                    }
                });
            });
            // filter open
            $(".filter_export_button").click(function() {
                $("#filter_div_calendar_list").show();
                $("#filter_div_apply").hide();
                $("#filter_div_save").show();
            });


        });


        $('#sortable_table_site_list input[type=checkbox]').attr('checked', true);


        // delete confrim js -------common for both---------------------------------------------------------------------------------
    


    
        // filter div close js
        $("#filter_button_1").click(function() {
            $(".filter_div_1").show();
            $("#filter_div_apply").show();
            $("#filter_div_save").hide();
        });



        $("#filter_div_apply").click(function() {
            $(".filter_div_1").hide();
        });

        // Filter close---------
        $('#filter_div_save').click(function() {
            $('.filter_div_1').css('display', 'none');
        });

        // Filter Dropdown Clear Code
        $('#filter_div_close').click(function() {
            $('.filter_div_1').css('display', 'none');
        });
    



    // <!-- ADD EVENT MODULE JS -->
    
        $("#frequency_selection").click(function() {
            if ($("#frequency_selection").val() == "type_1") {
                $(".month_selection_cls_dropdown").show();
                $(".annual_selection_cls").show();
                $(".quaterly_selection_action").hide();
                $(".month_selection_cls").hide();
            } else if ($("#frequency_selection").val() == "type_2") {
                $("#month_selection").show();

                $(".month_selection_cls").show();
                $(".annual_selection_cls").hide();

                $(".quaterly_selection_action").hide();
            } else if ($("#frequency_selection").val() == "type_3") {
                $(".month_selection_cls").hide();
                $(".annual_selection_cls").hide();
                $(".month_selection_cls_dropdown").hide();

                $(".quaterly_selection_action").show();
            }
        });


        $("#type_selection").click(function() {
            if ($("#type_selection").val() == 'type_1') {
                $(".add_event_state_selection").show();
                $(".add_event_central_selection").hide();
            } else if ($("#type_selection").val() == 'type_2') {
                $(".add_event_state_selection").hide();
                $(".add_event_central_selection").show();
            }
        })


        $('#act_selection').click(function() {
            if ($('#act_selection').val() == "act_1") {
                $(".act_2_title").hide();
                $(".act_1_title").show();
                $("#title_selection").click(function() {
                    if ($("#title_selection").val() == "title_1") {
                        $(".doc_text_input").val("Register").attr('readonly', true);
                        $(".description_text_input").val("Bonus Register in Form C").attr('readonly', true);

                    } else if ($("#title_selection").val() == "title_2") {
                        $(".doc_text_input").val("Returns").attr('readonly', true);
                        $(".description_text_input").val("Bonus Annual Returns in Form D").attr('readonly', true);
                    }
                });
            } else if ($('#act_selection').val() == "act_2") {
                $(".act_2_title").show();
                $(".act_1_title").hide();

                $("#title_selection").click(function() {
                    if ($("#title_selection").val() == "title_7") {
                        $(".doc_text_input").val("Registration").attr('readonly', true);
                        $(".description_text_input").val("ESI registration is mandatory if employees strength exceeds 20 and employees are drawing  gross salary of less than 21000 per month").attr('readonly', true);
                    } else if ($("#title_selection").val() == "title_3") {
                        $(".doc_text_input").val("Challan").attr('readonly', true);
                        $(".description_text_input").val("ESI challan paid for the month of audit").attr('readonly', true);
                    } else if ($("#title_selection").val() == "title_4") {
                        $(".doc_text_input").val("Challan").attr('readonly', true);
                        $(".description_text_input").val("ESI challan paid on or before 15th of every month").attr('readonly', true);
                    } else if ($("#title_selection").val() == "title_5") {
                        $(".doc_text_input").val("Register").attr('readonly', true);
                        $(".description_text_input").val("ESIC online monthly register  with employees details working on site during the month with contributions ").attr('readonly', true);
                    } else if ($("#title_selection").val() == "title_6") {
                        $(".doc_text_input").val("Regular").attr('readonly', true);
                        $(".description_text_input").val("ESI  valid  cards duly stamped and signed by local dispensary ").attr('readonly', true);
                    }
                });
            }
        });
        $("#audit_end_date_selection").on("change", function() {
            $(this).css("color", "rgba(0,0,0,0)").siblings(".datepicker_label").css({
                "text-align": "center",
                position: "absolute",
                left: "10px",
                top: "14px",
                width: $(this).width()
            }).text($(this).val().length == 0 ? "" : ($.datepicker.formatDate($(this).attr("dateformat"), new Date($(this).val()))));
        });
    
    // <!-- ADD EVENT MODULE JS END -->

    
        $("#reschedule_calendar_btn").click(function() {
            $("#fullCalModal_2").modal('show');
        });

        $(".edit_event_calendar").click(function() {

            $("#fullCalModal").modal("toggle");
        });

        $("#calendar_form").submit(function(e) {
            event.preventDefault();
            var eventName = $("#event_name").val();
        });

        $("#reschedule_calendar_btn").click(function() {
            $("#reschedule_calendar_event_modal").modal("toggle");
        });

        function get_calendar_data() {
            $('.fc-addEventButton-button').click('test');
        }

        // social btn js-----------------------------
        // add this rail gallery effect
        $(document).on('click', '#socialShare > .socialBox', function() {

            var self = $(this);
            var element = $('#socialGallery a');
            var c = 0;

            if (self.hasClass('animate')) {
                return;
            }

            if (!self.hasClass('open')) {

                self.addClass('open');

                TweenMax.staggerTo(element, 0.3, {
                        opacity: 1,
                        visibility: 'visible'
                    },
                    0.075);
                TweenMax.staggerTo(element, 0.3, {
                        top: -12,
                        ease: Cubic.easeOut
                    },
                    0.075);

                TweenMax.staggerTo(element, 0.2, {
                        top: 0,
                        delay: 0.1,
                        ease: Cubic.easeOut,
                        onComplete: function() {
                            c++;
                            if (c >= element.length) {
                                self.removeClass('animate');
                            }
                        }
                    },
                    0.075);

                self.addClass('animate');

            } else {

                TweenMax.staggerTo(element, 0.3, {
                        opacity: 0,
                        onComplete: function() {
                            c++;
                            if (c >= element.length) {
                                self.removeClass('open animate');
                                element.css('visibility', 'hidden');
                            };
                        }
                    },
                    0.075);
            }
        });

        function print_calendar() {
            window.print();
        }

        $('#client_audit_categorisation').on('change', function() {
            var value = $('#client_audit_categorisation').selectivity('val');
            if (value == "category_3") {
                $('#cluster_annual_account_selection').show();
                $('#annual_account_selection').hide();
            } else {
                $('#cluster_annual_account_selection').hide();
                $('#annual_account_selection').show();
            }
        })
    