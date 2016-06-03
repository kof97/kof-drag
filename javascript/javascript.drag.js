
    function Drag(obj, conf) {
        this.width = conf.x;
        this.height = conf.y;
        this.obj = obj;
    }

    Drag.prototype = {
        constructor: Drag,

        initPosition: function(e) {
            e = e || window.event;

            return {
                x: e.clientX - this.obj.offsetLeft,
                y: e.clientY - this.obj.offsetTop
            }
        },

        newPosition: function(e) {
            e = e || window.event;
            if(e.pageX || e.pageY){
                return {x: e.pageX, y: e.pageY};
            }
            return {
                x: e.clientX + document.body.scrollLeft - document.body.clientLeft,
                y: e.clientY + document.body.scrollTop - document.body.clientTop
            }; 
        },

        init: function() {
            var _this = this;

            _this.obj.onmousedown = function(e) {
                var initP = _this.initPosition();
                // console.log(initP.x);
                document.onmousemove = function(e) {
                    var newP = _this.newPosition();
                    var now = { 
                        x: newP.x - initP.x, 
                        y: newP.y - initP.y
                    };
                    if (now.x > _this.width && now.y < _this.height) {
                        _this.obj.style.marginTop = now.y + "px";
                    } else if (now.y > _this.height && now.x < _this.width) {
                        _this.obj.style.marginLeft = now.x + "px";
                    } else if (now.x < _this.width && now.y < _this.height) {
                        _this.obj.style.marginTop = now.y + "px";
                        _this.obj.style.marginLeft = now.x + "px";
                    };
                    
                };
                // stop
                document.onmouseup = function(){ 
                    document.onmousemove = null;  
                    document.onmouseup = null; 
                };
            };
        }

    }