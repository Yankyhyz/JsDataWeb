﻿/*!@license
* Infragistics.Web.ClientUI Scroll 14.1.20141.1020
*
* Copyright (c) 2011-2014 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
* jquery-1.4.4.js
* jquery.ui.core.js
* jquery.ui.widget.js
*/
(function($){var _attr="data-scroll",_stop=function(e){try{e.preventDefault();e.stopPropagation()}catch(ex){}},_aNull=function(val){return val===null||val===undefined||typeof val==="number"&&isNaN(val)},_num=function(val){return isNaN(val=parseInt(val,10))?0:val},_int=function(elem,css){return _num(elem.css(css))},_draggable=function(type){return type==="draggable"},_thin=function(type){return type==="show"},_zero=function(num){return isNaN(num)||num<5},_touch=function(e){e=e.originalEvent;e=e?e.touches:null;return e&&e.length===1?e[0]:null},_src=function(e){e=e.target;return e.nodeName==="#text"?e.parentNode:e},_is=function(elem,src){return elem&&(elem.has(src).length>0||elem[0]===src)},_valid=function(elem){return elem&&elem[0].parentNode?elem:null},_remove=function(elem){if(_valid(elem)){elem.remove()}},_find=function(notMobile){setTimeout(function(){var m=window.Modernizr;if(!m||m.touch){$("body").find("["+_attr+"]").each(function(){var elem=$(this),scroll=elem.data("igScroll");if((!scroll||!scroll.evts)&&!elem.data("igScroll")&&!elem.data("scrollview")){elem.igScroll({_find:true})}})}},notMobile===true?1e3:100)};$.widget("ui.igScroll",{options:{thumbOpacityDrag:null,thumbOpacity:null,cancelStart:null,oneDirection:null,direction:null,animateShowDuration:null,animateHideDuration:null,hideThumbsDelay:null,hideDragThumbsDelay:null,xInertia:null,yInertia:null,xThumb:null,yThumb:null,xLabel:null,yLabel:null,marginLeft:null,marginRight:null,marginTop:null,marginBottom:null,xScroller:null,yScroller:null},events:{starting:null,started:null,scrolling:null,scrolled:null,stopped:null},scrollLeft:function(val){if(_aNull(val)){return this._getScroll(true)}this._scroll(val);return this},scrollTop:function(val){if(_aNull(val)){return this._getScroll()}this._scroll(null,val);return this},scrollWidth:function(){return this._getScroll(true,true)},scrollHeight:function(){return this._getScroll(false,true)},_create:function(){var v,key,self=this,elem=self.element,o=self.options;if(o._find){for(key in o){if(o.hasOwnProperty(key)&&_aNull(o[key])){if(_aNull(v=elem.attr("data-"+key))){v=elem.attr("data-"+key.replace("S","-s").replace("D","-d").replace("O","-o").replace("R","-r").replace("T","-t").replace("I","-i").replace("B","-b").replace("L","-l").replace("H","-h").replace("D","-d"))}if(!_aNull(v)){o[key]=v}}}o.direction=o.direction||elem.attr(_attr)}v=$.ui.igScroll.defaults;for(key in v){if(v.hasOwnProperty(key)&&o[key]===null){o[key]=v[key]}}v=o.direction;self.dir=o.oneDirection&&v!=="x"&&v!=="y";self.evts={MSPointerDown:function(e){var evt=e.originalEvent;if(!evt||evt.pointerType!==2){return}e.target.msSetPointerCapture(self._pointer=evt.pointerId);self.evts.touchstart(e)},MSPointerMove:function(e){if(self._pointer){self._move(e)}},MSPointerUp:function(e){if(!self._pointer){return}e.target.msReleasePointerCapture(self._pointer);self.evts.touchend(e);delete self._pointer},touchstart:function(e){delete self.skip;var touch=self._pointer?e.originalEvent:_touch(e);if(touch){self.x=touch.pageX;self.y=touch.pageY;self.click=true;if(self._isCancel(o)){_stop(e)}}else{self._move(e,"start")}},touchmove:function(e){self._move(e)},touchend:function(e){if(!self.click){self._move(e,"end")}else if(self._isCancel(o)){$(_src(e)).trigger("mousedown").trigger("mouseup").trigger("click")}}};elem.bind(self.evts)},_isCancel:function(o){o=o.cancelStart;return o===true||o==="ms"&&this._pointer},_createBar:function(elem,hor,type){var bar,thumb,border,sizeInt,span,img,iconSize=17,thumbSize=5,thumbDragSize=30,thin=_thin(type),display=hor?"inline-block":"block",margin="margin"+(hor?"Top":"Left"),size=hor?"height":"width";if(thin||_draggable(type)){bar=$("<span />").css({position:"absolute",zIndex:_int(elem,"zIndex")+2,background:"transparent",border:"0px",opacity:0,display:"block"}).addClass("ui-widget").css(size,"1px").insertAfter(elem);sizeInt=thin?thumbSize:thumbDragSize;thumb=$("<span />").css("position","relative").css(size,sizeInt).css("display","block").appendTo(bar);if(thin){thumb.css("background","#101010")}else{bar.css("msTouchAction","none");thumb.addClass("ui-corner-all ui-state-hover");border=thumb.css("borderTopColor");sizeInt=hor?thumb[0].offsetHeight:thumb[0].offsetWidth;span=$("<span />").css({display:display,borderStyle:"solid",borderColor:border,borderWidth:hor?"0px 1px 0px 0px":"0px 0px 1px 0px"}).addClass("ui-corner-"+(hor?"left":"top")).css(size,"100%").appendTo(thumb);img=$("<span />").css("display","block").css(margin,Math.floor((sizeInt-iconSize)/2)+"px").addClass("ui-icon ui-icon-carat-1-"+(hor?"w":"n")).appendTo(span);span=$("<span />").css("display",display).css(size,"100%").appendTo(thumb);img=$("<span />").css("display","block").css(margin,Math.floor((sizeInt-iconSize)/2)+"px").addClass("ui-icon ui-icon-grip-dotted-"+(hor?"vertical":"horizontal")).appendTo(span);span=$("<span />").css({display:display,borderStyle:"solid",borderColor:border,borderWidth:hor?"0px 0px 0px 1px":"1px 0px 0px 0px"}).addClass("ui-corner-"+(hor?"right":"bottom")).css(size,"100%").appendTo(thumb);img=$("<span />").css("display","block").css(margin,Math.floor((sizeInt-iconSize)/2)+"px").addClass("ui-icon ui-icon-carat-1-"+(hor?"e":"s")).appendTo(span)}thumb.css(margin,-(sizeInt+1)+"px")}if(hor){this.barX=bar;this.thumbX=thumb}else{this.barY=bar;this.thumbY=thumb}},_bar:function(elem,hor){var v,left,top,thumb,locElem,locBar,shiftBar,shiftX,shiftY,thumbSize,o=this.options,barMargin=2,barSizeMargin=_num(hor?o.marginLeft:o.marginTop),barSizeMargin2=_num(hor?o.marginRight:o.marginBottom),minBarSize=4,minThumbSize=15,bar=hor?this.barX:this.barY,type=hor?o.xThumb:o.yThumb,elemSize=hor?elem[0].offsetWidth:elem[0].offsetHeight,barSize=Math.max(elemSize-barSizeMargin-barSizeMargin2,minBarSize),scrollSize=Math.max(this._getScroll(hor,true),minBarSize+barSizeMargin+barSizeMargin2);if(!elemSize||scrollSize-elemSize<1){if(bar){bar.remove();delete this.bar}return}if(bar){if(_valid(bar)){return bar}bar.insertAfter(elem)}if(!bar){this._createBar(elem,hor,type)}bar=hor?this.barX:this.barY;if(!bar){return}thumb=hor?this.thumbX:this.thumbY;if(_draggable(type)&&thumb){thumb.bind(this.evts)}shiftBar=(hor?elem[0].offsetHeight:elem[0].offsetWidth)-barMargin;left=_int(elem,"marginLeft")+(hor?barSizeMargin:shiftBar);top=_int(elem,"marginTop")+(hor?shiftBar:barSizeMargin);bar.css({left:elem.css("left"),top:elem.css("top"),marginLeft:left+"px",marginTop:top+"px"});if(_thin(type)){thumb.css(hor?"width":"height",Math.floor(Math.max(elemSize*elemSize/scrollSize,minThumbSize))+"px")}thumbSize=hor?thumb[0].offsetWidth:thumb[0].offsetHeight;v=(scrollSize-barSize-barSizeMargin-barSizeMargin2+barMargin)/(barSize-thumbSize);if(hor){this.ratioX=v}else{this.ratioY=v}locElem=elem.offset();locBar=bar.offset();shiftY=locBar.top-locElem.top-(hor?shiftBar:barSizeMargin);shiftX=locBar.left-locElem.left-(hor?barSizeMargin:shiftBar);if(Math.abs(shiftY)>0){bar.css("marginTop",top-shiftY+_int(elem,"borderTopWidth")+"px")}if(Math.abs(shiftX)>0){bar.css("marginLeft",left-shiftX+_int(elem,"borderLeftWidth")+"px")}return bar},_scroller:function(hor){var o=this.options,div=o.direction;if(!this.evts||hor&&div==="y"||!hor&&div==="x"){return}div=hor?o.xScroller:o.yScroller;if(div&&typeof div==="string"){div=$(div)[0];if(hor){o.xScroller=div}else{o.yScroller=div}}if(div&&div.length){div=div[0]}return div||this.element[0]},_getScroll:function(hor,size){var div=this._scroller(hor);if(!div){return 0}return hor?size?div.scrollWidth:div.scrollLeft:size?div.scrollHeight:div.scrollTop},_scroll:function(x,y){var div=this._scroller(true);if(div&&!this.inBarY&&this.dir!=="y"&&!_aNull(x)){div.scrollLeft=x;if(this.thumbX){this.thumbX.css("marginLeft",Math.floor(div.scrollLeft/this.ratioX)+"px")}}div=this._scroller();if(div&&!this.inBarX&&this.dir!=="x"&&!_aNull(y)){div.scrollTop=y;if(this.thumbY){this.thumbY.css("marginTop",Math.floor(div.scrollTop/this.ratioY)+"px")}}},_vis:function(){return this.evts&&this.element[0].offsetWidth},_inertia:function(){var self=this,arg={owner:self},max=.97,stopTimerSpeed=.8,x=self.speedX,y=self.speedY,o=self.options,tick=17,rateX=Math.max(Math.min(parseFloat(o.xInertia),max),0),rateY=Math.max(Math.min(parseFloat(o.yInertia),max),0),speedX=(x?x[0]+x[1]+x[2]:0)*tick,speedY=(y?y[0]+y[1]+y[2]:0)*tick,left=self._getScroll(true),top=self._getScroll(),inertia=function(){self.timer=setTimeout(function(){delete self.timer;arg.deltaX=-Math.floor(speedX);arg.deltaY=-Math.floor(speedY);if(!self._vis()||!self._trigger("scrolling",null,arg)){self._end();return}left+=arg.deltaX;top+=arg.deltaY;self._scroll(Math.floor(left),Math.floor(top));self._trigger("scrolled",null,arg);speedY*=rateY;speedX*=rateX;if(Math.abs(speedY)>stopTimerSpeed&&top>0||Math.abs(speedX)>stopTimerSpeed&&left>0){inertia()}else{self._end()}},tick*3)};inertia()},_show:function(valid){var bar,self=this,o=self.options,val=parseFloat(o.thumbOpacity),valDrag=parseFloat(o.thumbOpacityDrag),dur=valid?0:_num(o.animateShowDuration),barX=_valid(self.barX),barY=_valid(self.barY);if(self.hiding){self.hiding.stop(true);delete self.hiding}if(_zero(dur)){if(barX){barX.css("opacity",self.inBarX?valDrag:val)}if(barY){barY.css("opacity",self.inBarY?valDrag:val)}return}bar=barX||barY;if(bar){self.showing=bar.animate({opacity:val},{duration:dur,complete:function(){delete self.showing},step:function(now){if(barX&&barY){barY.css("opacity",now)}}})}},_hide:function(hide){var self=this;if(!self.time){return}if(self.showing){self.showing.stop(true);delete self.showing}setTimeout(function(){if(self.hiding||hide){_remove(self.barX);_remove(self.barY);delete self.hiding;self._fixSB()}},0)},_end:function(){var self=this,o=self.options,delay=self.thumbX&&_draggable(o.xThumb)||self.thumbY&&_draggable(o.yThumb),dur=_num(o.animateHideDuration);self._trigger("stopped",null,{owner:self});if(self.skip||!self._vis()){return self._hide(true)}delay=_num(delay?o.hideDragThumbsDelay:o.hideThumbsDelay);self.timerEnd=setTimeout(function(){if(!self.timer&&self.timerEnd){if(_zero(dur)){self._hide(true)}else{var bar=_valid(self.barX),bar2=_valid(self.barY);if(!bar){bar=bar2;bar2=null}if(bar){self.hiding=bar.animate({opacity:0},{duration:dur,complete:function(){self._hide()},step:function(now){if(bar2){bar2.css("opacity",now)}if(self.skip&&self.hiding){self.hiding.stop()}}})}}}delete self.timerEnd},_zero(delay)?5:delay)},_clear:function(){if(this.timer){clearTimeout(this.timer);delete this.timer}if(this.timerEnd){clearTimeout(this.timerEnd);delete this.timerEnd}},_fire:function(t,e,x,y){return this._trigger(t,e,{owner:this,left:x,top:y})},_skip:function(x,y){var dir=this.options.direction,left=this._scroller(true)||0,top=this._scroller()||0,height=0,width=0,heightScroll=0,widthScroll=0;if(left){width=left.clientWidth;widthScroll=left.scrollWidth;left=left.scrollLeft}if(top){height=top.clientHeight;heightScroll=top.scrollHeight;top=top.scrollTop}if((dir==="y"||width>=widthScroll)&&(dir==="x"||height>=heightScroll)){return true}if((Math.abs(y)>Math.abs(x)||dir==="y")&&dir!=="x"){return y>0&&!top||y<0&&top+height>=heightScroll}return x>0&&!left||x<0&&left+width>=widthScroll},_fixSB:function(hide){var vert,hor,on=this._on;if(hide&&on||!on&&!hide){return}vert=this._scroller();hor=this._scroller(true);if(on){if(vert&&!_aNull(on.y)){vert.style.overflowY=on.y}if(hor&&!_aNull(on.x)){hor.style.overflowX=on.x}delete this._on;return}on=this._on={};if(vert){on.y=$(vert).css("overflowY");vert.style.overflowY="hidden"}if(hor){on.x=$(hor).css("overflowX");hor.style.overflowX="hidden"}},_move:function(evt,end){if(!this.evts){return}var speed,arg={owner:this},time=(new Date).getTime(),self=this,maxSpeed=3,oldX=self.x0,oldY=self.y0,speedX=self.speedX,speedY=self.speedY,oldTop=self.top,oldLeft=self.left,inBarY=self.inBarY,inBarX=self.inBarX,barX=self.barX,barY=self.barY,start=!self.drag,elem=self.element,touch=self._pointer?evt.originalEvent:_touch(evt),x=touch?touch.pageX:0,y=touch?touch.pageY:0,src=_src(evt);if(self.click&&self._pointer&&Math.abs(self.x-x)<3&&Math.abs(self.y-y)<3){return}delete self.click;if(self.skip){return}self._fixSB(true);self._clear();if(end||!touch){if(!self.skip&&end==="end"&&!start){if(self.inBarX||self.inBarY){self._end()}else{self._inertia()}}delete self.drag;return}if(start){self.skip=self._skip(x-self.x,y-self.y);if(self.skip){self._end()}}else{arg.deltaX=self.x-x;arg.deltaY=self.y-y}if(self.skip||!this._trigger(start?"starting":"scrolling",evt,arg)){return}if(start){speed=_valid(barX)||_valid(barY);oldX=self.x0=x;oldLeft=self.left=self._getScroll(true);delete self.speedX;barX=self._bar(elem,true);inBarX=self.inBarX=_is(barX,src);oldY=self.y0=y;oldTop=self.top=self._getScroll();delete self.speedY;barY=self._bar(elem);inBarY=self.inBarY=_is(barY,src);self._show(speed||inBarX||inBarY)}else{x=self.x-arg.deltaX;speed=(x-self.x)/(time-self.time);if(Math.abs(speed)>maxSpeed){speed=speed>0?maxSpeed:-maxSpeed}if(!speedX){self.speedX=[0,0,speed]}else{speedX[0]=speedX[1];speedX[1]=speedX[2];speedX[2]=speed}y=self.y-arg.deltaY;speed=(y-self.y)/(time-self.time);if(Math.abs(speed)>maxSpeed){speed=speed>0?maxSpeed:-maxSpeed}if(!speedY){self.speedY=[0,0,speed];if(self.dir){self.dir=Math.abs(speed)>=Math.abs(self.speedX[2])?"y":"x"}}else{speedY=self.speedY=[0,0,speed];speedY[0]=speedY[1];speedY[1]=speedY[2];speedY[2]=speed}}self.drag=true;self.x=x;self.y=y;self.time=time;_stop(evt);x=inBarX?oldLeft+Math.floor((x-oldX)*self.ratioX):oldLeft-x+oldX;y=inBarY?oldTop+Math.floor((y-oldY)*self.ratioY):oldTop-y+oldY;self._scroll(x,y);this._trigger(start?"started":"scrolled",evt)},destroy:function(){if(this.evts){this.element.unbind(this.evts);delete this.evts;if(this.showing){this.showing.stop(true)}if(this.hiding){this.hiding.stop(true)}this._clear();_remove(this.barX);_remove(this.barY);$.Widget.prototype.destroy.apply(this,arguments)}return this}});$.extend($.ui.igScroll,{version:"14.1.20141.1020"});$.ui.igScroll.defaults={thumbOpacityDrag:1,thumbOpacity:.5,animateShowDuration:300,animateHideDuration:500,hideThumbsDelay:200,hideDragThumbsDelay:1e3,xInertia:.8,yInertia:.85,marginLeft:2,marginRight:2,marginTop:2,marginBottom:2,xThumb:"show",yThumb:"show"};try{$(":jqmData(role='page')").live("pageshow",_find)}catch(ex){_find(true);$(document).bind("igcontrolcreated",function(event,args){var container=args.owner.scrollContainer();if(container.length===0&&args.owner.container){container=args.owner.container().find("[data-scroll]").eq(0)}container.igScroll({_find:true})})}})(jQuery);(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$('<div id="__ig_wm__"></div>').appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})})(jQuery);