/*
Tue Dec 02 2014 11:37:36 GMT+0800 (CST)
combined files by KMD:

index.js
*/

KISSY.add('kg/drop-down/1.0.0/index',["node","base","event"],function(S ,require, exports, module) {
var $ = require('node').all;
var Base = require('base');
var Event = require('event');
var baseConf = {
    hook: '.J_KG_DropDown',
    hookBox: '.J_KG_DropDown_Box',
    hookList: '.J_KG_DropDown_List',
    height: 200,
    showTime: 500,
    hideTime: 300
}

function DropDown(conf){ 
    this.init(S.merge(baseConf,conf));
}

S.augment(DropDown, Event.Target, {

    init: function(conf){
        var self = this;
        
        conf.animationTimer = null;

        $('body').delegate('mouseenter',conf.hook, function(e){
            var $e = $(e.currentTarget);
            self._initDom(conf, $e);
            self._show(conf, self, $e);
        });
        $('body').delegate('mouseleave',conf.hook, function(e){
            var $e = $(e.currentTarget);
            self._hide(conf, self, $e);
        });

    },
    _initDom: function(conf, $e){
        // 设置组件基础样式
        if(!$e.hasClass('kg-menu')){
            $e.addClass('kg-menu');
            $e.one(conf.hookBox).height(conf.height);
            $e.one(conf.hookBox).addClass('kg-menu-box');
            $e.one(conf.hookList).addClass('kg-menu-list');
        }
    },
    _show: function(conf, self, $e){
        self.fire('showStart');
        if(S.Features.isTransitionSupported() && 0){
            $e.one(conf.hookBox).css({
                display : 'block'
            });
            $e.one(conf.hookList).removeClass('bounceOut').addClass('bounceIn');
            setTimeout(function(){
                $e.one(conf.hookList).css('height',conf.height);
                self.fire('showEnd');
            },conf.showTime);
        }else{
            conf.animationTimer && conf.animationTimer.stop();
            $e.one(conf.hookBox).css('display','block');
            $e.one(conf.hookList).animate({
                height : conf.height
            },{
                duration : conf.showTime/1000,
                easing : 'backOut'
            });
            setTimeout(function(){
                self.fire('showEnd');
            },conf.showTime);
        }
    },
    _hide: function(conf, self, $e){
        self.fire('hideStart');
        if(S.Features.isTransitionSupported() && 0){
            $e.one(conf.hookList).removeClass('bounceIn').addClass('bounceOut');
            setTimeout(function(){
                $(conf.hookList).css({
                    height : 0,
                });
                $(conf.hookBox).css({
                    display : 'none'
                });
                self.fire('hideEnd');
            },conf.hideTime)
        }else{
            conf.animationTimer && conf.animationTimer.stop();
            conf.animationTimer = $e.one(conf.hookList).animate({
                height : 0
            },{
                duration : conf.hideTime/1000,
                easing : 'backIn',
                complete : function(){
                    $e.one(conf.hookBox).css({
                        display : 'none'
                    });
                }
            });
            setTimeout(function(){
                self.fire('hideEnd');
            },conf.hideTime);
        }
    }
});

module.exports = DropDown;




});