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
			popoverOptionChangeNotSupported: "igPopover が初期化された後のこのオプションの変更はサポートされません:",
			popoverShowMethodWithoutTarget: "selectors オプションが使用される場合、show 関数の target パラメーターは必要です。"
		}
	});

}
})(jQuery);