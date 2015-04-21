var $ = require('node').all;
var Base = require('base');

var DropDown = Base.extend({

    initializer: function(){

        var self = this;
        self.animationTimer = null;
        $('body').delegate('mouseenter',self.get('hook'), function(e){
            var $e = $(e.currentTarget);
            self._initDom($e);
            self.fire('thismouseenter');
            self._show(self, $e);
        });
        $('body').delegate('mouseleave',self.get('hook'), function(e){
            var $e = $(e.currentTarget);
            self.fire('thismouseleave');
            self._hide(self, $e);
        });

    },

    _initDom: function($e){
        var self = this;
        // 设置组件基础样式
        if(!$e.hasClass('kg-menu')){
            $e.addClass('kg-menu');
            $e.one(self.get('hookBox')).height(self.get('height'));
            $e.one(self.get('hookBox')).addClass('kg-menu-box');
            $e.one(self.get('hookList')).addClass('kg-menu-list');
        }
    },
    _show: function(self, $e){
        // var self = this;
        self.fire('showStart');
        if(S.Features.isTransitionSupported() && 0){
            $e.one(self.get('hookBox')).css({
                display : 'block'
            });
            $e.one(self.get('hookList')).removeClass('bounceOut').addClass('bounceIn');
            setTimeout(function(){
                $e.one(self.get('hookList')).css('height',self.get('height'));
                self.fire('showEnd');
            },self.get('showTime'));
        }else{
            if(self.animationTimer){
                self.$lastE.one(self.get('hookList')).css({'height' : 0});
                self.animationTimer.stop();
            }
            $e.one(self.get('hookBox')).css('display','block');
            $e.one(self.get('hookList')).animate({
                height : self.get('height')
            },{
                duration : self.get('showTime')/1000,
                easing : 'backOut'
            });
            setTimeout(function(){
                self.fire('showEnd');
            },self.get('showTime'));
        }
    },
    _hide: function(self, $e){
        // var self = this;
        self.fire('hideStart');
        if(S.Features.isTransitionSupported() && 0){
            $e.one(self.get('hookList')).removeClass('bounceIn').addClass('bounceOut');
            setTimeout(function(){
                $(self.get('hookList')).css({
                    height : 0,
                });
                $(self.get('hookBox')).css({
                    display : 'none'
                });
                self.fire('hideEnd');
            },self.get('hideTime'))
        }else{
            // conf.lastBox = $e.one(self.get('hookBox'))
            self.$lastE = $e;
            self.animationTimer && self.animationTimer.stop();
            self.animationTimer = $e.one(self.get('hookList')).animate({
                height : 0
            },{
                duration : self.get('hideTime')/1000,
                easing : 'backIn',
                complete : function(){
                    $e.one(self.get('hookBox')).css({
                        display : 'none'
                    });
                }
            });
            setTimeout(function(){
                self.fire('hideEnd');
            },self.get('hideTime'));
        }
    }
},{
    ATTRS:{
        $target:{
            value:'',
            getter:function(v){
                return $(v);
            }
        },
        hook: {
            value: '.J_KG_DropDown'
        },
        hookBox: {
            value: '.J_KG_DropDown_Box'
        },
        hookList: {
            value: '.J_KG_DropDown_List'
        },
        height: {
            value: 200
        },
        showTime: {
            value: 500
        },
        hideTime: {
            value: 300
        }
    }
});

module.exports = DropDown;



