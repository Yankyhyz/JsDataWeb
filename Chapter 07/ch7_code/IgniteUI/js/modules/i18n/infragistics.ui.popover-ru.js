/*!@license
* Infragistics.Web.ClientUI Popover localization resources 14.1.20141.1020
*
* Copyright (c) 2011-2014 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Popover) {
	$.ig.Popover = {};

	$.extend( $.ig.Popover, {
		locale: {
			popoverOptionChangeNotSupported: "Изменение этой опции невозможно после инициализации igPopover:",
			popoverShowMethodWithoutTarget: "Параметр target функции show обязателен, когда используется опция selectors"
		}
	});

}
})(jQuery);