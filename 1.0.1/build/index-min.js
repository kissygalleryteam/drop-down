KISSY.add('kg/drop-down/1.0.0/index',["node","base"],function(S ,require, exports, module) {var e=require("node").all,o=require("base"),t=o.extend({initializer:function(){var o=this;o.animationTimer=null,e("body").delegate("mouseenter",o.get("hook"),function(t){var i=e(t.currentTarget);o._initDom(i),o.fire("thismouseenter"),o._show(o,i)}),e("body").delegate("mouseleave",o.get("hook"),function(t){var i=e(t.currentTarget);o.fire("thismouseleave"),o._hide(o,i)})},_initDom:function(e){var o=this;e.hasClass("kg-menu")||(e.addClass("kg-menu"),e.one(o.get("hookBox")).height(o.get("height")),e.one(o.get("hookBox")).addClass("kg-menu-box"),e.one(o.get("hookList")).addClass("kg-menu-list"))},_show:function(e,o){e.fire("showStart"),e.animationTimer&&(e.$lastE.one(e.get("hookList")).css({height:0}),e.animationTimer.stop()),o.one(e.get("hookBox")).css("display","block"),o.one(e.get("hookList")).animate({height:e.get("height")},{duration:e.get("showTime")/1e3,easing:"backOut"}),setTimeout(function(){e.fire("showEnd")},e.get("showTime"))},_hide:function(e,o){e.fire("hideStart"),e.$lastE=o,e.animationTimer&&e.animationTimer.stop(),e.animationTimer=o.one(e.get("hookList")).animate({height:0},{duration:e.get("hideTime")/1e3,easing:"backIn",complete:function(){o.one(e.get("hookBox")).css({display:"none"})}}),setTimeout(function(){e.fire("hideEnd")},e.get("hideTime"))}},{ATTRS:{$target:{value:"",getter:function(o){return e(o)}},hook:{value:".J_KG_DropDown"},hookBox:{value:".J_KG_DropDown_Box"},hookList:{value:".J_KG_DropDown_List"},height:{value:200},showTime:{value:500},hideTime:{value:300}}});module.exports=t;});