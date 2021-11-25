//---------------------------------------------- selectivity js------------------------------
$(document).ready(function () {


    $('.selectivity_class').selectivity({
        allowClear: true,
        placeholder: 'Select'
    });


    $(".selectivity_class").selectivity('clear');


    // $(".modal-body").click(function () {
    //     $(".selectivity_class").selectivity('close');
    // });

    // Country dropdown value on change modal

    

    $("#country_dropdown").on('change', function () {
        if ($("#country_dropdown").selectivity('value') == "Belgium") {
            $("#supplier_ip").val('Tournus Equipment');
        }
    });

    $("#priority_dropdown").on('change', function () {
        $(".priority_msg").show();
    });


});
// ----------------------------------------------selectivity js ends--------------------------