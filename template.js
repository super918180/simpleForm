//复选按钮start
(function($) {
    var CreateTab = (function() {
        function CreateTab(element, options) {
            // 将用户配置项与默认选项进行深拷贝
            this.settings = $.extend(true, $.fn.CreateTab.defaultValue, options || {});
            this.element = element;
            this.init();
        }
        CreateTab.prototype = {
            // 初始化插件
            init: function() {
                var _this = this;
                _this.group = _this.settings.group;
                _this._initRadioDom();
            },
            _initRadioDom: function() {
                var _this = this;
                   
                _this._initEvent();
            },
            _initEvent: function() {
                var _this = this;
                
            },
            //置灰
            setGrey: function(flag, greyArr) {
                var _this = this;
        
            },
            //获取值
            getValue: function() {
                var _this = this;
                    
            },
            //设置值
            setValue: function(indexArr) {
                
            }

        };
        // 必须要将该对象返回出去
        return CreateTab;
    })();
    $.fn.CreateTab = function(options) {
        return this.each(function() {
            var _this = $(this),
                // 从当前对象下读取实例
                instance = _this.data('CreateTab');
            // 如果没有实例新建一个
            if (!instance) {
                // 新建实例,_this表示当前选中元素，options表示配置
                instance = new CreateTab(_this, options);
                // 将当前实例保存到data数据中
                _this.data('CreateTab', instance);
            }
            if ($.type(options) === 'string') {
                // 带参函数
                if (/\w*\(*\)/.test(options)) {
                    var functionName = options.split('(')[0],
                        functionParam = options.split("(")[1].replace(')', '');
                    return instance[functionName](functionParam);
                } else {
                    // 不带参函数
                    return instance[options]();

                }
            }
        });
    };
    // 默认参数
    $.fn.CreateTab.defaultValue = {
        // 所属组
        group: '',
        //显示的文字
        textArr: [],
        //checkbox每一项对应的值
        valueArr: [],
        //全选
        hasSelectAll: true,
        //值改变的时候调用
        changeFunc: null
    };
})(jQuery);
//复选按钮end
