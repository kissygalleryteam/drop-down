KISSY.add('kg/drop-down/1.0.0/index',["node","base","event"],function(S ,require, exports, module) {function o(o){this.init(S.merge(n,o))}var i=require("node").all,e=(require("base"),require("event")),n={hook:".J_KG_DropDown",hookBox:".J_KG_DropDown_Box",hookList:".J_KG_DropDown_List",height:200,showTime:500,hideTime:300};S.augment(o,e.Target,{init:function(o){var e=this;i(o.hook).addClass("kg-menu"),i(o.hookBox).addClass("kg-menu-box"),i(o.hookList).addClass("kg-menu-list"),i(o.hookBox).height(o.height),o.animationTimer=null,i(o.hook).on("mouseenter",function(){e._show(o,e)}),i(o.hook).on("mouseleave",function(){e._hide(o,e)})},_show:function(o,e){e.fire("showStart"),o.animationTimer&&o.animationTimer.stop(),i(o.hookBox).css("display","block"),i(o.hookList).animate({height:o.height},{duration:o.showTime/1e3,easing:"backOut"}),setTimeout(function(){e.fire("showEnd")},o.showTime)},_hide:function(o,e){e.fire("hideStart"),o.animationTimer&&o.animationTimer.stop(),o.animationTimer=i(o.hookList).animate({height:0},{duration:o.hideTime/1e3,easing:"backIn",complete:function(){i(o.hookBox).css({display:"none"})}}),setTimeout(function(){e.fire("hideEnd")},o.hideTime)}}),module.exports=o;});