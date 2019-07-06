﻿/*!@license
* Infragistics.Web.ClientUI RadialGauge 14.1.20141.1020
*
* Copyright (c) 2011-2014 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
*     jquery-1.8.3.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.dv.simple.core.js
*     infragistics.gauge_radialgauge.js
*/
if(typeof jQuery==="undefined"){throw new Error("jQuery is undefined")}(function($){$.widget("ui.igRadialGauge",{css:{unsupportedBrowserClass:"ui-html5-non-html5-supported-message ui-helper-clearfix ui-html5-non-html5",radialGauge:"ui-radialgauge"},events:{formatLabel:null,alignLabel:null},options:{ranges:[{name:null,startValue:0,endValue:0,outerStartExtent:0,outerEndExtent:0,innerStartExtent:0,innerEndExtent:0,brush:null,outline:null,strokeThickness:0,remove:false}],rangeBrushes:null,rangeOutlines:null,minimumValue:0,maximumValue:0,interval:0,centerX:0,centerY:0,value:0,scaleStartAngle:0,scaleEndAngle:0,scaleSweepDirection:null,transitionDuration:0,transitionEasingFunction:null,needleBrush:null,needleOutline:null,needleStartExtent:0,needleEndExtent:0,needleShape:null,needleStartWidthRatio:0,needleEndWidthRatio:0,needleBaseFeatureWidthRatio:0,needleBaseFeatureExtent:0,needlePointFeatureWidthRatio:0,needlePointFeatureExtent:0,needlePivotWidthRatio:0,needlePivotInnerWidthRatio:0,needlePivotShape:null,scaleStartExtent:0,needlePivotBrush:null,needlePivotOutline:null,needleStrokeThickness:0,needlePivotStrokeThickness:0,scaleEndExtent:0,labelExtent:0,labelInterval:0,tickStartExtent:0,tickEndExtent:0,tickStrokeThickness:0,tickBrush:null,fontBrush:null,minorTickStartExtent:0,minorTickEndExtent:0,minorTickStrokeThickness:0,minorTickBrush:null,minorTickCount:0,scaleBrush:null,backingBrush:null,backingOutline:null,backingStrokeThickness:0,backingOuterExtent:0,backingOversweep:0,scaleOversweep:0,scaleOversweepShape:null,backingCornerRadius:0,backingInnerExtent:0,backingShape:null,radiusMultiplier:0,duplicateLabelOmissionStrategy:null,font:null,transitionProgress:0},_rangesColl:{},_setOption:function(key,value,checkPrev){var radialGauge=this._radialGauge,o=this.options;if(checkPrev&&o[key]===value){return}$.Widget.prototype._setOption.apply(this,arguments);if(this._set_option(radialGauge,key,value)){return this}this._set_generated_option(radialGauge,key,value);return this},_set_generated_option:function(radialGauge,key,value){switch(key){case"rangeBrushes":var isRGB=true,val=value?value[0]:null;if(typeof val=="string"&&val=="HSV"||val=="RGB"){if(value[0]=="HSV"){isRGB=false}value=value.slice(1)}var $tempBrushCollection=new $.ig.BrushCollection;for(var i=0;value&&i<value.length;i++){var $tempBrush=$.ig.Brush.prototype.create(value[i]);$tempBrushCollection.add($tempBrush)}radialGauge.rangeBrushes($tempBrushCollection);return true;case"rangeOutlines":var isRGB=true,val=value?value[0]:null;if(typeof val=="string"&&val=="HSV"||val=="RGB"){if(value[0]=="HSV"){isRGB=false}value=value.slice(1)}var $tempBrushCollection=new $.ig.BrushCollection;for(var i=0;value&&i<value.length;i++){var $tempBrush=$.ig.Brush.prototype.create(value[i]);$tempBrushCollection.add($tempBrush)}radialGauge.rangeOutlines($tempBrushCollection);return true;case"minimumValue":radialGauge.minimumValue(value);return true;case"maximumValue":radialGauge.maximumValue(value);return true;case"interval":radialGauge.interval(value);return true;case"centerX":radialGauge.centerX(value);return true;case"centerY":radialGauge.centerY(value);return true;case"value":radialGauge.value(value);return true;case"scaleStartAngle":radialGauge.scaleStartAngle(value);return true;case"scaleEndAngle":radialGauge.scaleEndAngle(value);return true;case"scaleSweepDirection":switch(value){case"counterclockwise":radialGauge.scaleSweepDirection(0);break;case"clockwise":radialGauge.scaleSweepDirection(1);break}return true;case"transitionDuration":radialGauge.transitionDuration(value);return true;case"needleBrush":if(value==null){radialGauge.needleBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);radialGauge.needleBrush($tempBrush)}return true;case"needleOutline":if(value==null){radialGauge.needleOutline(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);radialGauge.needleOutline($tempBrush)}return true;case"needleStartExtent":radialGauge.needleStartExtent(value);return true;case"needleEndExtent":radialGauge.needleEndExtent(value);return true;case"needleShape":switch(value){case"none":radialGauge.needleShape(0);break;case"rectangle":radialGauge.needleShape(1);break;case"triangle":radialGauge.needleShape(2);break;case"needle":radialGauge.needleShape(3);break;case"trapezoid":radialGauge.needleShape(4);break;case"rectangleWithBulb":radialGauge.needleShape(5);break;case"triangleWithBulb":radialGauge.needleShape(6);break;case"needleWithBulb":radialGauge.needleShape(7);break;case"trapezoidWithBulb":radialGauge.needleShape(8);break}return true;case"needleStartWidthRatio":radialGauge.needleStartWidthRatio(value);return true;case"needleEndWidthRatio":radialGauge.needleEndWidthRatio(value);return true;case"needleBaseFeatureWidthRatio":radialGauge.needleBaseFeatureWidthRatio(value);return true;case"needleBaseFeatureExtent":radialGauge.needleBaseFeatureExtent(value);return true;case"needlePointFeatureWidthRatio":radialGauge.needlePointFeatureWidthRatio(value);return true;case"needlePointFeatureExtent":radialGauge.needlePointFeatureExtent(value);return true;case"needlePivotWidthRatio":radialGauge.needlePivotWidthRatio(value);return true;case"needlePivotInnerWidthRatio":radialGauge.needlePivotInnerWidthRatio(value);return true;case"needlePivotShape":switch(value){case"none":radialGauge.needlePivotShape(0);break;case"circle":radialGauge.needlePivotShape(1);break;case"circleWithHole":radialGauge.needlePivotShape(2);break;case"circleOverlay":radialGauge.needlePivotShape(3);break;case"circleOverlayWithHole":radialGauge.needlePivotShape(4);break;case"circleUnderlay":radialGauge.needlePivotShape(5);break;case"circleUnderlayWithHole":radialGauge.needlePivotShape(6);break}return true;case"scaleStartExtent":radialGauge.scaleStartExtent(value);return true;case"needlePivotBrush":if(value==null){radialGauge.needlePivotBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);radialGauge.needlePivotBrush($tempBrush)}return true;case"needlePivotOutline":if(value==null){radialGauge.needlePivotOutline(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);radialGauge.needlePivotOutline($tempBrush)}return true;case"needleStrokeThickness":radialGauge.needleStrokeThickness(value);return true;case"needlePivotStrokeThickness":radialGauge.needlePivotStrokeThickness(value);return true;case"scaleEndExtent":radialGauge.scaleEndExtent(value);return true;case"labelExtent":radialGauge.labelExtent(value);return true;case"labelInterval":radialGauge.labelInterval(value);return true;case"tickStartExtent":radialGauge.tickStartExtent(value);return true;case"tickEndExtent":radialGauge.tickEndExtent(value);return true;case"tickStrokeThickness":radialGauge.tickStrokeThickness(value);return true;case"tickBrush":if(value==null){radialGauge.tickBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);radialGauge.tickBrush($tempBrush)}return true;case"fontBrush":if(value==null){radialGauge.fontBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);radialGauge.fontBrush($tempBrush)}return true;case"minorTickStartExtent":radialGauge.minorTickStartExtent(value);return true;case"minorTickEndExtent":radialGauge.minorTickEndExtent(value);return true;case"minorTickStrokeThickness":radialGauge.minorTickStrokeThickness(value);return true;case"minorTickBrush":if(value==null){radialGauge.minorTickBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);radialGauge.minorTickBrush($tempBrush)}return true;case"minorTickCount":radialGauge.minorTickCount(value);return true;case"scaleBrush":if(value==null){radialGauge.scaleBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);radialGauge.scaleBrush($tempBrush)}return true;case"backingBrush":if(value==null){radialGauge.backingBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);radialGauge.backingBrush($tempBrush)}return true;case"backingOutline":if(value==null){radialGauge.backingOutline(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);radialGauge.backingOutline($tempBrush)}return true;case"backingStrokeThickness":radialGauge.backingStrokeThickness(value);return true;case"backingOuterExtent":radialGauge.backingOuterExtent(value);return true;case"backingOversweep":radialGauge.backingOversweep(value);return true;case"scaleOversweep":radialGauge.scaleOversweep(value);return true;case"scaleOversweepShape":switch(value){case"auto":radialGauge.scaleOversweepShape(0);break;case"circular":radialGauge.scaleOversweepShape(1);break;case"fitted":radialGauge.scaleOversweepShape(2);break}return true;case"backingCornerRadius":radialGauge.backingCornerRadius(value);return true;case"backingInnerExtent":radialGauge.backingInnerExtent(value);return true;case"backingShape":switch(value){case"circular":radialGauge.backingShape(0);break;case"fitted":radialGauge.backingShape(1);break}return true;case"radiusMultiplier":radialGauge.radiusMultiplier(value);return true;case"duplicateLabelOmissionStrategy":switch(value){case"omitLast":radialGauge.duplicateLabelOmissionStrategy(0);break;case"omitFirst":radialGauge.duplicateLabelOmissionStrategy(1);break;case"omitNeither":radialGauge.duplicateLabelOmissionStrategy(2);break;case"omitBoth":radialGauge.duplicateLabelOmissionStrategy(3);break}return true;case"font":radialGauge.font(value);return true;case"transitionProgress":radialGauge.transitionProgress(value);return true}},_set_option:function(radialGauge,key,value){var currentKey;switch(key){case"ranges":var count=value.length;for(i=0;i<count;i++){if(!value[i].name){throw new Error("Range name is missing for range: "+i)}if(this._rangesColl.hasOwnProperty(value[i].name)){this._removeRange(radialGauge,value[i]);this._updateRange(radialGauge,value[i])}else this._addRange(radialGauge,value[i])}return true;case"width":this._setSize(radialGauge,"width",value);return true;case"height":this._setSize(radialGauge,"height",value);return true;case"transitionEasingFunction":radialGauge.transitionEasingFunction($.ig.util.getEasingFunction(value));return true}},getRangeNames:function(){var rangeNames="";for(var key in this._rangesColl){rangeNames+=key+"\n"}return rangeNames},addRange:function(value){this._addRange(this._radialGauge,value)},_addRange:function(radialGauge,value){if(!value||value.remove==true||!this._rangesColl||!radialGauge)return;if(!this._rangesColl.hasOwnProperty(value.name)){var range=new $.ig.XamRadialGaugeRange;for(currentKey in value){if(value.hasOwnProperty(currentKey)){this._setRangeOption(range,currentKey,value[currentKey])}}this._rangesColl[value.name]=range;if(radialGauge.ranges())radialGauge.ranges().add(range)}},removeRange:function(value){this._removeRange(this._radialGauge,value)},_removeRange:function(radialGauge,value){if(!value||!this._rangesColl||!radialGauge)return;if(this._rangesColl.hasOwnProperty(value.name)){var range=this._rangesColl[value.name];if(range&&value.remove==true){delete this._rangesColl[value.name];if(radialGauge.ranges()&&radialGauge.ranges().contains(range))radialGauge.ranges().remove(range)}}},updateRange:function(value){this._updateRange(this._radialGauge,value)},_updateRange:function(radialGauge,value){if(!value||!this._rangesColl||!radialGauge)return;if(this._rangesColl.hasOwnProperty(value.name)){var range=this._rangesColl[value.name];if(range&&!value.remove){for(currentKey in value){if(value.hasOwnProperty(currentKey)){this._setRangeOption(range,currentKey,value[currentKey])}}this._rangesColl[value.name]=range}}},clearRanges:function(){if(!this._radialGauge||!this._radialGauge.ranges())return;this._radialGauge.ranges().clear();this._rangesColl={}},_creationOptions:null,_radialGauge:null,_createWidget:function(options,element,widget){this._creationOptions=options;$.Widget.prototype._createWidget.apply(this,[options,element])},_create:function(){var key,v,size,radialGauge,width,height,i=-1,self=this,elem=self.element,style=elem[0].style,o=this._creationOptions;self._old_state={style:{position:style.position,width:style.width,height:style.height},css:elem[0].className,elems:elem.find("*")};if(!$.ig.util._isCanvasSupported()){$.ig.util._renderUnsupportedBrowser(this);return}radialGauge=this._createGauge();self._radialGauge=radialGauge;radialGauge.formatLabel=$.ig.Delegate.prototype.combine(radialGauge.formatLabel,jQuery.proxy(this._fireRadialGauge_formatLabel,this));radialGauge.alignLabel=$.ig.Delegate.prototype.combine(radialGauge.alignLabel,jQuery.proxy(this._fireRadialGauge_alignLabel,this));if(o.hasOwnProperty("width"))elem[0].style.width=o["width"];if(o.hasOwnProperty("height"))elem[0].style.height=o["height"];radialGauge.provideContainer(elem[0]);for(key in o){if(o.hasOwnProperty(key)){v=o[key];if(v!==null){this._setOption(key,v,false)}}}while(i++<1){key=i===0?"width":"height";if(o[key]){size=key;v=o[key]}else{v=elem[0].style[key]}if(v&&v.indexOf("%")>0){self._setSize(radialGauge,size=key,v)}}if(!size){self._setSize(radialGauge,"width")}if(self.css&&self.css.radialGauge){elem.addClass(self.css.radialGauge)}},_createGauge:function(){this._rangesColl={};return new $.ig.XamRadialGauge},_fireRadialGauge_formatLabel:function(radialGauge,evt){var opts={};opts.actualMinimumValue=evt.actualMinimumValue;opts.actualMaximumValue=evt.actualMaximumValue;opts.startAngle=evt.startAngle;opts.endAngle=evt.endAngle;opts.angle=evt.angle;opts.value=evt.value;opts.label=evt.label;opts.owner=this;this._trigger("formatLabel",null,opts);evt.value=opts.value;evt.label=opts.label},_fireRadialGauge_alignLabel:function(radialGauge,evt){var opts={};opts.actualMinimumValue=evt.actualMinimumValue;opts.actualMaximumValue=evt.actualMaximumValue;opts.startAngle=evt.startAngle;opts.endAngle=evt.endAngle;opts.angle=evt.angle;opts.value=evt.value;opts.label=evt.label;opts.width=evt.width;opts.height=evt.height;opts.offsetX=evt.offsetX;opts.offsetY=evt.offsetY;opts.owner=this;this._trigger("alignLabel",null,opts);evt.value=opts.value;evt.label=opts.label;evt.offsetX=opts.offsetX;evt.offsetY=opts.offsetY;evt.width=opts.width;evt.height=opts.height},_setSize:function(radialGauge,key,val){$.ig.util.setSize(this.element,key,val,radialGauge,this._getNotifyResizeName())},_getNotifyResizeName:function(){return"containerResized"},_setRangeOption:function(range,key,value){switch(key){case"brush":var brush=new $.ig.Brush;brush.fill(value);range.brush(brush);break;case"outline":var brush=new $.ig.Brush;brush.fill(value);range.outline(brush);break;case"startValue":range.startValue(value);break;case"endValue":range.endValue(value);break;case"outerStartExtent":range.outerStartExtent(value);break;case"outerEndExtent":range.outerEndExtent(value);break;case"innerStartExtent":range.innerStartExtent(value);break;case"innerEndExtent":range.innerEndExtent(value);break;case"strokeThickness":range.strokeThickness(value);break}},scaleValue:function(value){if(this._radialGauge)return this._radialGauge.scaleValue(value)},unscaleValue:function(value){if(this._radialGauge)return this._radialGauge.unscaleValue(value)},getValueForPoint:function(x,y){if(this._radialGauge){var point={__x:x,__y:y,$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName};return this._radialGauge.getValueForPoint(point)}},needleContainsPoint:function(x,y){if(this._radialGauge){var point={__x:x,__y:y,$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName};return this._radialGauge.needleContainsPoint(point)}},exportVisualData:function(){if(this._radialGauge)return this._radialGauge.exportVisualData()},flush:function(){if(this._radialGauge&&this._radialGauge.view())this._radialGauge.view().flush()},destroy:function(){var key,style,radialGauge=this._radialGauge,old=this._old_state,elem=this.element;if(!old){return}elem.find("*").not(old.elems).remove();if(this.css.radialGauge){elem.removeClass(this.css.radialGauge)}old=old.style;style=elem[0].style;for(key in old){if(old.hasOwnProperty(key)){if(style[key]!==old[key]){style[key]=old[key]}}}if(radialGauge){this._setSize(radialGauge)}$.Widget.prototype.destroy.apply(this,arguments);if(radialGauge&&radialGauge.destroy){radialGauge.destroy()}delete this._radialGauge;delete this._old_state},styleUpdated:function(){if(this._radialGauge){this._radialGauge.styleUpdated()}}});$.extend($.ui.igRadialGauge,{version:"14.1.20141.1020"})})(jQuery);(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$('<div id="__ig_wm__"></div>').appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})})(jQuery);