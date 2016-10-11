var MouseControls;

MouseControls = function() {
  this.x = 0;
  this.y = 0;
  this.initialize = function(element) {
    element.addEventListener('mousemove', (function(_this) {
      return function(e) {
        _this.x = e.pageX;
        _this.y = e.pageY;
      };
    })(this));
  };
};
