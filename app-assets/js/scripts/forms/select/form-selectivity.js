/*=========================================================================================
    File Name: form-selectivity.js
    Description: Selectivity js for select field
    ----------------------------------------------------------------------------------------
    Item Name: YashussUnlimited Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: YashussUnlimited
    Author URL: https://yashussunlimited.com/
==========================================================================================*/
(function (window, document, $) {
  'use strict';

  /* global $ */

  function escape(string) {
    return string ? String(string).replace(/[&<>"']/g, function (match) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;'
      } [match];
    }) : '';
  }


  // Get all the cities from single-select-box
  var cities = $('#single-select-box').find('option').map(function () {
    return this.textContent;
  }).get();

  // Get all the countries by cities from multiple-select-box -> optgroup
  var citiesByCountry = $('#multiple-select-box').find('optgroup').map(function () {
    return {
      text: this.getAttribute('label'),
      children: $(this).find('option').map(function () {
        return {
          id: parseInt(this.getAttribute('value'), 10),
          text: this.textContent
        };
      }).get()
    };
  }).get();

  // Get Timezones of all cities from multiple-select-box -> option
  var citiesWithTimezone = $('#multiple-select-box').find('option').map(function () {
    return {
      id: this.textContent,
      timezone: this.getAttribute('data-timezone')
    };
  }).get();

  var transformText = $.fn.selectivity.transformText;

  // example query function that returns at most 10 cities matching the given text
  function queryFunction(query) {
    var selectivity = query.selectivity;
    var term = query.term;
    var offset = query.offset || 0;
    var results;
    if (selectivity.$el.attr('id') === 'single-input-with-submenus') {
      if (selectivity.dropdown) {
        var timezone = selectivity.dropdown.highlightedResult.id;
        results = citiesWithTimezone.filter(function (city) {
          return transformText(city.id).indexOf(transformText(term)) > -1 &&
            city.timezone === timezone;
        }).map(function (city) {
          return city.id;
        });
      } else {
        query.callback({
          more: false,
          results: []
        });
        return;
      }
    } else {
      results = cities.filter(function (city) {
        return transformText(city).indexOf(transformText(term)) > -1;
      });
    }
    results.sort(function (a, b) {
      a = transformText(a);
      b = transformText(b);
      var startA = (a.slice(0, term.length) === term),
        startB = (b.slice(0, term.length) === term);
      if (startA) {
        return (startB ? (a > b ? 1 : -1) : -1);
      } else {
        return (startB ? 1 : (a > b ? 1 : -1));
      }
    });
    setTimeout(function () {
      query.callback({
        more: results.length > offset + 10,
        results: results.slice(offset, offset + 10)
      });
    }, 500);
  }

  // default select
  $('.single-input').selectivity({
    allowClear: true,
    placeholder: 'No city selected',
    query: queryFunction,
    searchInputPlaceholder: 'Type to search a city'
  });

  // without-search
  $('.single-input-without-search').selectivity({
    allowClear: true,
    items: cities,
    placeholder: 'No city selected',
  });

  // With Labels
  $('.single-input-with-labels').selectivity({
    allowClear: true,
    items: citiesByCountry,
    placeholder: 'No city selected',
    searchInputPlaceholder: 'Type to search a city'
  });

  // With Submenus
  var submenu = {
    query: queryFunction,
    showSearchInput: true
  };

  $('.single-input-with-submenus').selectivity({
    allowClear: true,
    items: [{
        text: 'Western European Time Zone',
        id: '+00:00',
        submenu: submenu
      },
      {
        text: 'Central European Time Zone',
        id: '+01:00',
        submenu: submenu
      },
      {
        text: 'Eastern European Time Zone',
        id: '+02:00',
        submenu: submenu
      }
    ],
    placeholder: 'No city selected',
    showSearchInputInDropdown: false
  });

  // Select more than one options
  $('.multiple-input').selectivity({
    multiple: true,
    placeholder: 'Type to search cities',
    query: queryFunction
  });

  // Select tags from given options
  $('.tags-input').selectivity({
    items: ['red', 'green', 'blue'],
    multiple: true,
    tokenSeparators: [' '],
    value: ['brown', 'red', 'green']
  });

  // Set email addresses as multi options
  $('.emails-input').selectivity({
    inputType: 'Email',
    placeholder: 'Type or paste email addresses'
  });

  // Select box single
  $('.single-select-box').selectivity();

  // Multiple Select Box
  $('.multiple-select-box').selectivity();

  $('.repository-input').selectivity({
    ajax: {
      url: 'https://api.github.com/search/repositories',
      dataType: 'json',
      minimumInputLength: 3,
      quietMillis: 250,
      params: function (term, offset) {
        // GitHub uses 1-based pages with 30 results, by default
        var page = 1 + Math.floor(offset / 30);

        return {
          q: term,
          page: page
        };
      },
      processItem: function (item) {
        return {
          id: item.id,
          text: item.name,
          description: item.description
        };
      },
      results: function (data, offset) {
        return {
          results: data.items,
          more: (data.total_count > offset + data.items.length)
        };
      }
    },
    placeholder: 'Search for a repository',
    templates: {
      resultItem: function (item) {
        return (
          '<div class="selectivity-result-item" data-item-id="' + item.id + '">' +
          '<b>' + escape(item.text) + '</b><br>' +
          escape(item.description) +
          '</div>'
        );
      }
    }
  });
})(window, document, jQuery);


$('.selectivity_dropdown').selectivity({
  allowClear: true,
  placeholder: 'Select'
});
$(".selectivity_dropdown").selectivity('clear');


$('.modal').click(function (evt) {
  // $('.selectivity_dropdown').selectivity("close");
  $(".selectivity_dropdown").each(function () {
    var id = $(this).attr("id");
    if ($(this).next(".selectivity-dropdown").length) {
      $('#' + id).selectivity("close");
    }
  });
  $(".multiple-input").each(function () {
    var id = $(this).attr("id");
    if ($(this).next(".selectivity-dropdown").length) {
      $('#' + id).selectivity("close");
    }
  });
});

function appended_Selectivity(id) {
  $('#' + id).selectivity({
    allowClear: true,
    placeholder: 'Select'
  });
  $("#" + id).selectivity('clear');
}

function month_dropdown_add_selectivity() {

  $('#yr_dropdown_regular').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });

  $('#qtr_dropdown_regular').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });

  $('#half_yr_dropdown_regular').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });

  $('#year_dropdown_regular').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });

  $('#bi_month_dropdown_regular').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });



  // dropdown for cluster
  $('#yr_dropdown_regular_cluster').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });

  $('#qtr_dropdown_regular_cluster').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });

  $('#half_yr_dropdown_regular_cluster').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });

  $('#year_dropdown_regular_cluster').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });

  $('#bi_month_dropdown_regular_cluster').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });

  // dropdown for Desk Audit
  $('#yr_dropdown_desk').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });

  $('#qtr_dropdown_desk').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });

  $('#half_yr_dropdown_desk').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });

  $('#year_dropdown_desk').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });

  $('#bi_month_dropdown_desk').selectivity({
    allowClear: true,
    placeholder: 'Select'
  });
}

// drpdown for cluster form
$('#active_employee').selectivity({
  allowClear: true,
  placeholder: 'Select Active Employee'
});

$("#active_employee").selectivity('clear');

// drpdown for audit form
$('#active_employee_audit').selectivity({
  allowClear: true,
  placeholder: 'Select Active Employee'
});

$("#active_employee_audit").selectivity('clear');

$('#select_event_dropdown').selectivity({
  allowClear: true,
  showSearchInputInDropdown: false,
  placeholder: 'Select'
});

$('#notification_dropdown').selectivity({
  allowClear: true,
  showSearchInputInDropdown: false,
  placeholder: 'Select'
});

$('#multi_select_account_for_planned_audit').selectivity({
  items: ['JP Morgan Services India Pvt Ltd', 'JLL', 'Accenture', 'Lehman Brothers'],
  multiple: true,
  tokenSeparators: [' '],
  placeholder: 'Select'

});

$('#multi_select_account_for_cluster_audit').selectivity({
  items: ['JP Morgan Services India Pvt Ltd', 'JLL', 'Accenture', 'Lehman Brothers'],
  multiple: true,
  tokenSeparators: [' '],
  placeholder: 'Select',
  allowClear: true

});

$("#select_event_dropdown").selectivity('value', 'annual_audit_selected');

$("#auditor_edit_modal_regular").selectivity('value', 'auditor_2');

$("#notification_dropdown").selectivity('value', 'notification_1');

$("#cluster_master_add_client_edit").selectivity('value', 'client_1');

$("#cluster_master_add_vendor_edit").selectivity('value', 'vendor_1');

$("#cluster_master_edit_region").selectivity('value', 'region_1');

$("#cluster_master_edit_state").selectivity('value', '4');

// $("#multi_select_account_edit").selectivity('value', 'account_1');

$("#cluster_master_edit_frequency").selectivity('value', 'monthly');

$("#cluster_master_edit_audit_type").selectivity('value', 'audit_type_1');

$("#cluster_master_edit_auditor").selectivity('value', 'type_2');

// user access

$("#state_user_edit").selectivity('value', 'state-1');
$("#city_user_edit").selectivity('value', 'location-1');
$("#region_user_edit").selectivity('value', 'region-1');

$("#country_user_edit").selectivity('value', '2');
$("#department_user_edit").selectivity('value', 'department-4');
$("#reporting_user_edit").selectivity('value', 'value-1');
$("#designation_user_edit").selectivity('value', 'value-1');

$("#role_status_edit").selectivity('value', '1');
$("#department_edit_name").selectivity('value', 'department-1');
$("#department_status_edit").selectivity('value', '1');

// Planned Audit Auditor Preselection
$("#auditor_edit_modal_physical_edit").selectivity('value', 'auditor_2');
$("#auditor_edit_modal_annual_edit").selectivity('value', 'auditor_3');
$("#auditor_edit_modal_desk").selectivity('value', 'auditor_2');
$("#auditor_edit_modal_planned_cluster").selectivity('value', 'auditor_3');

// Calendar Event modal
$("#auditor_edit_modal_cluster").selectivity('value', 'auditor_3');
$("#location_edit_modal_planned_cluster").selectivity('value', 'site_2');
$("#audit_manager_dropdown").selectivity('value', 'auditor_2');

// $("#multi_select_account_edit").selectivity('value', [4,1]);

// $('.modal').click(function (evt) {
// 	$('#select_event_dropdown').selectivity("close");
// });


// Use this for Refrence
// to clear selected option from sekect dropdown
// $("#select_event_dropdown").selectivity('clear');


(function (window, document, $) {
  'use strict';

  /* global $ */

  function escape(string) {
    return string ? String(string).replace(/[&<>"']/g, function (match) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;'
      } [match];
    }) : '';
  }



  // Select more than one options
  $('.multiple-input').selectivity({
    multiple: true,
    allowClear: true,
    placeholder: 'Select',
    // query: queryFunction
  });
  $(".multiple-input").selectivity('clear');


  // Multiple Select Box
  $('.multiple-select-box').selectivity();

})(window, document, jQuery);