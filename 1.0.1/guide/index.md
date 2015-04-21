## 综述

DropDown。
淘宝动效下拉组件，页面代理所有钩子，只需一次绑定

## 初始化组件
		
    S.use('kg/drop-down/1.0.1/index', function (S, DropDown) {

        var dropDown = new DropDown({
            height: 260
        });
        
        dropDown.on('showStart',function(){
            console.log('showStart');
        })
        dropDown.on('showEnd',function(){
            console.log('showEnd');
        })
        dropDown.on('hideStart',function(){
            console.log('hideStart');
        })
        dropDown.on('hideEnd',function(){
            console.log('hideEnd');
        })

    })

## API说明

  * hook: 组件容器钩子，默认值 '.J_KG_DropDown'
  * hookBox: 组件容器钩子，默认值 '.J_KG_DropDown_Box'
  * hookList: 组件容器钩子，默认值 '.J_KG_DropDown_List'
  * height: 下拉高度，默认值 200
  * showTime: 展开时间，默认值 500
  * hideTime: 收起时间，默认值 300