/*!@license
* Infragistics.Web.ClientUI Pivot Shared localization resources 14.1.20141.1020
*
* Copyright (c) 2011-2014 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.PivotShared) {
        $.ig.PivotShared = {};

        $.extend($.ig.PivotShared, {
            locale: {
                invalidDataSource: "Die angegebene Datenquelle ist entweder Null oder wird nicht unterstützt.",
                measureList: "Measures",
                ok: "OK",
                cancel: "Abbrechen",
                addToMeasures: "Zu Measures hinzufügen",
                addToFilters: "Zu Filtern hinzufügen",
                addToColumns: "Zu Spalten hinzufügen",
                addToRows: "Zu Zeilen hinzufügen"
            }
        });
    }
})(jQuery);