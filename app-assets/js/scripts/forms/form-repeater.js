/*=========================================================================================
		File Name: form-repeater.js
		Description: Repeat forms or form fields
		----------------------------------------------------------------------------------------
		Item Name: YashussUnlimited Admin - Clean Bootstrap 4 Dashboard HTML Template
		Author: YashussUnlimited
		Author URL: https://yashussunlimited.com/
==========================================================================================*/

(function(window, document, $) {
	'use strict';

	// Default
	$('.repeater-default').repeater();

	// Custom Show / Hide Configurations
	$('.file-repeater, .contact-repeater').repeater({
		show: function () {
			$(this).slideDown();
		},
		hide: function(remove) {
			if (confirm('Are you sure you want to remove this item?')) {
				$(this).slideUp(remove);
			}
		}
	});


})(window, document, jQuery);