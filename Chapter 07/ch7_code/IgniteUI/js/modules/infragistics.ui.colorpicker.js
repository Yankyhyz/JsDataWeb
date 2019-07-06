/*!@license
 * Infragistics.Web.ClientUI ColorPicker 14.1.20141.1020
 *
 * Copyright (c) 2011-2014 Infragistics Inc.
 * <Licensing info>
 *
 * http://www.infragistics.com/
 * 
 * Depends on: 
 *   jquery-1.9.1.js
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 *   infragistics.util.js
 *   infragistics.ui.shared.js
 */
if(typeof jQuery!=="function"){throw new Error("jQuery is undefined")}(function($){$.widget("ui.igColorPicker",{options:{colors:[["#ffffff","#000000","#EEECE1","#1F497D","#4F81BD","#C0504D","#9BBB59","#8064A2","#4BACC6","#F79646"],["#F2F2F2","#7F7F7F","#DDD9C3","#C6D9F0","#DBE5F1","#F2DCDB","#EBF1DD","#E5E0EC","#DBEEF3","#FDEADA"],["#D8D8D8","#595959","#C4BD97","#8DB3E2","#B8CCE4","#E5B9B7","#D7E3BC","#CCC1D9","#B7DDE8","#FAC08F"],["#BFBFBF","#3F3F3F","#938953","#548DD4","#95B3D7","#D99694","#C3D69B","#B2A1C7","#92CDDC","#FAC08F"],["#A5A5A5","#262626","#494429","#17365D","#366092","#953734","#76923C","#5F497A","#31859B","#E36C09"],["7F7F7F#","#0C0C0C","#1D1B10","#0F243E","#244061","#632423","#4F6128","#3F3151","#205867","#974806"]],standardColors:["#C00000","#FF0000","#FFC000","#FFFF00","#92D050","#00B050","#00B0F0","#0070C0","#002060","#7030A0"]},events:{colorSelected:"colorSelected"},css:{standardColorsRow:"ui-colorpicker-standardcolors",baseClass:"ui-igColorPicker"},_create:function(){var i,j,row,cols,rows,color,allColors=$.extend(true,[],this.options.colors),colorTableHtml='<ul class="color-table">';allColors.push(this.options.standardColors);rows=allColors.length;for(i=0;i<rows;i++){colorTableHtml+="<li><ul>";cols=allColors[i].length;for(j=0;j<cols;j++){colorTableHtml+='<li class="color-item"><a href="#"><span class="color" style="background-color: '+allColors[i][j]+';"></span></a></li>'}colorTableHtml+="</ul></li>"}colorTableHtml+="</ul>";this._colorTable=$(colorTableHtml).appendTo(this.element);$(".color-table > li:last ul").addClass(this.css.standardColorsRow)},_getColor:function($element){return $element.css("background-color")},_init:function(){this.element.addClass(this.css.baseClass);this._colorTable.children().first().addClass("color-table-first-row");this._bindEvents()},_bindEvents:function(){var self=this;this._colorTable.delegate("a","click",function(e){var target=$(e.target);e.preventDefault();self._changeSelectedColor(target);self._trigger(self.events.colorSelected,e,{color:self._getColor(target)})})},_changeSelectedColor:function(target){this._colorTable.find("span.selected-color").removeClass("selected-color");if(target.is("a")){target=target.children()}target.addClass("selected-color")}});$.extend($.ui.igColorPicker,{version:"14.1.20141.1020"})})(jQuery);(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$('<div id="__ig_wm__"></div>').appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})})(jQuery);