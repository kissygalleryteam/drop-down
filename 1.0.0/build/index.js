/*
Mon Nov 17 2014 16:24:02 GMT+0800 (CST)
combined files by KMD:

index.js
*/

KISSY.add('kg/drop-down/1.0.0/index',["node","base"],function(S ,require, exports, module) {
var $ = require('node').all;
var Base = require('base');

var DropDown = Base.extend({
    initializer:function(){
        var self = this;
        var $target = self.get('$target');
    }
},{
    ATTRS:{
        $target:{
            value:'',
            getter:function(v){
                return $(v);
            }
        }
    }
});

module.exports = DropDown;




});