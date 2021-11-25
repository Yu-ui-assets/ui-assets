/*=========================================================================================
    File Name: custom-file-input.js
    Description: Checkbox & Radio buttons with icheck, bootstrap switch & switchery etc..
    ----------------------------------------------------------------------------------------
    Item Name: Yashuss Unlimited- Clean Bootstrap 4 Dashboard HTML Template
    Author: Yashuss Unlimited
    Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
(function(window, document, $) {
  'use strict';
  
  //Custom File Input

  $('.custom-file input').change(function (e) {
      $(this).next('.custom-file-label').html(e.target.files[0].name);
  });


})(window, document, jQuery);