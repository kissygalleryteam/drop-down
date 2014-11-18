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

    init:function(conf){
        var self = this;

        // 设置组件基础样式
        $(conf.hook).addClass('kg-menu');
        $(conf.hookBox).addClass('kg-menu-box');
        $(conf.hookList).addClass('kg-menu-list');
        
        $(conf.hookBox).height(conf.height);
        conf.animationTimer = null;

        $(conf.hook).on("mouseenter", function(e){
            self._show(conf, self);
        });
        $(conf.hook).on("mouseleave", function(e){
            self._hide(conf, self);
        });

    },
    _show:function(conf,self){
        self.fire('showStart');
        if(S.Features.isTransitionSupported() && 0){
            $(conf.hookBox).css({
                display : 'block'
            });
            $(conf.hookList).removeClass('bounceOut').addClass('bounceIn');
            setTimeout(function(){
                $(conf.hookList).css('height',conf.height);
                self.fire('showEnd');
            },conf.showTime);
        }else{
            conf.animationTimer && conf.animationTimer.stop();
            $(conf.hookBox).css('display','block');
            $(conf.hookList).animate({
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
    _hide:function(conf,self){
        self.fire('hideStart');
        if(S.Features.isTransitionSupported() && 0){
            $(conf.hookList).removeClass('bounceIn').addClass('bounceOut');
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
            conf.animationTimer = $(conf.hookList).animate({
                height : 0
            },{
                duration : conf.hideTime/1000,
                easing : 'backIn',
                complete : function(){
                    $(conf.hookBox).css({
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



