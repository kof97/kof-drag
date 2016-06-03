(function($) {
    $.fn.drag = (function(opt) {
        var conf = $.extend({}, {
                x: 100,
                y: 100
            }, opt),

            initPosition = function(obj, e) {
                e = e || window.event;

                return {
                    x: e.clientX - obj.offset().left,
                    y: e.clientY - obj.offset().top
                }
            },

            newPosition = function(e) {
                e = e || window.event;

                if(e.pageX || e.pageY){
                    return {x: e.pageX, y: e.pageY};
                }
                return {
                    // 当前指针位置
                    x: e.clientX + document.body.scrollLeft - document.body.clientLeft,
                    y: e.clientY + document.body.scrollTop - document.body.clientTop
                }; 
            },

            init = function(obj) {
                obj.on("mousedown", function(e) {
                    var initP = initPosition(obj);

                    document.onmousemove = function(e) {
                        var newP = newPosition();
                        var now = { 
                            x: newP.x - initP.x, 
                            y: newP.y - initP.y
                        };
                        if (now.x > conf.x && now.y < conf.y) {
                            obj.css("marginTop", now.y + "px");
                        } else if (now.y > conf.y && now.x < conf.x) {
                            obj.css("marginLeft", now.x + "px");
                        } else if (now.x < conf.x && now.y < conf.y) {
                            obj.css("marginTop", now.y + "px");
                            obj.css("marginLeft", now.x + "px");
                        };
                        
                    };
                    // stop
                    document.onmouseup = function(){ 
                        document.onmousemove = null;  
                        document.onmouseup = null; 
                    };
                });
            };

        return this.each(function() {
            var obj = $(this);

            init(obj);
        });

    });

})(jQuery);  

