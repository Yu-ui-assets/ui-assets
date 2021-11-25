/*=========================================================================================
    File Name: jqvmap.js
    Description: jQuery vector maps examples.
    ----------------------------------------------------------------------------------------
    Item Name: YashussUnlimited Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: YashussUnlimited
    Author URL: https://yashussunlimited.com/
==========================================================================================*/

// jQuery vector maps
// -----------------------------------

$(window).on("load", function(){

    // World Map
    // -----------------------------------
    jQuery('#world-map').vectorMap({
        map: 'world_en',
        backgroundColor: '#FFFFFF',
        borderColor: '#FFF',
        color: '#2A363B',
        hoverOpacity: 0.7,
        selectedColor: '#99B898',
        enableZoom: true,
        showTooltip: true,
        scaleColors: ['#FECEA8', '#E84A5F'],
        values: sample_data,
        normalizeFunction: 'polynomial'
    });
});